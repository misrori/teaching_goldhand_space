# ACID Transactions

Delta Lake provides full ACID transaction support.

## What is ACID?

| Property | Description |
|----------|-------------|
| **Atomicity** | All or nothing - partial failures are rolled back |
| **Consistency** | Data always in a valid state |
| **Isolation** | Concurrent operations don't interfere |
| **Durability** | Committed changes persist |

## Atomicity

### Atomic Writes

```python
# This is atomic - either all succeeds or all fails
df.write \
    .format("delta") \
    .mode("append") \
    .save("/path/to/table")

# If any partition fails, the entire write is rolled back
```

### Atomic Operations

```python
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/path/to/table")

# Atomic delete
delta_table.delete("date < '2023-01-01'")

# Atomic update
delta_table.update(
    condition="country = 'US'",
    set={"region": "'North America'"}
)
```

## Isolation Levels

Delta Lake provides **serializable** isolation:

### Concurrent Reads

Multiple readers can access data simultaneously:

```python
# Reader 1 sees consistent snapshot at version 10
df1 = spark.read.format("delta").load(path)

# Reader 2 sees same consistent snapshot
df2 = spark.read.format("delta").load(path)

# Even if a write happens in between!
```

### Concurrent Writes

Writes are serialized automatically:

```python
# Writer 1 starts
df1.write.format("delta").mode("append").save(path)

# Writer 2 starts (conflicts detected and handled)
df2.write.format("delta").mode("append").save(path)

# Both succeed without data corruption
```

## MERGE Operation

Powerful upsert capability:

```python
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/path/to/target")

# MERGE (upsert)
delta_table.alias("target") \
    .merge(
        updates_df.alias("source"),
        "target.id = source.id"
    ) \
    .whenMatchedUpdate(set={
        "value": "source.value",
        "updated_at": "current_timestamp()"
    }) \
    .whenNotMatchedInsert(values={
        "id": "source.id",
        "value": "source.value",
        "created_at": "current_timestamp()"
    }) \
    .execute()
```

### Conditional Updates

```python
delta_table.alias("t") \
    .merge(source.alias("s"), "t.id = s.id") \
    .whenMatchedUpdate(
        condition="s.value > t.value",  # Only update if source is greater
        set={"value": "s.value"}
    ) \
    .whenMatchedDelete(
        condition="s.deleted = true"  # Delete if flagged
    ) \
    .whenNotMatchedInsert(values={
        "id": "s.id",
        "value": "s.value"
    }) \
    .execute()
```
