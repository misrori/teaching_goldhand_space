# Time Travel

Query historical versions of your data with Time Travel.

## How Time Travel Works

Delta Lake maintains a complete history through:

1. **Transaction Log** - Records all changes
2. **Data Files** - Preserved until VACUUM
3. **Checkpoints** - Periodic snapshots of state

## Querying Historical Data

### By Version Number

```python
# Read a specific version
df = spark.read \
    .format("delta") \
    .option("versionAsOf", 10) \
    .load("/path/to/table")

# SQL syntax
spark.sql("""
    SELECT * FROM delta.`/path/to/table` VERSION AS OF 10
""")

# Or using @
spark.sql("""
    SELECT * FROM delta.`/path/to/table`@v10
""")
```

### By Timestamp

```python
# Read data as it was at a specific time
df = spark.read \
    .format("delta") \
    .option("timestampAsOf", "2024-01-15 10:30:00") \
    .load("/path/to/table")

# SQL syntax
spark.sql("""
    SELECT * FROM delta.`/path/to/table` 
    TIMESTAMP AS OF '2024-01-15 10:30:00'
""")
```

## Viewing History

### DESCRIBE HISTORY

```python
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/path/to/table")
history = delta_table.history()
history.show()

# SQL
spark.sql("DESCRIBE HISTORY delta.`/path/to/table`").show()
```

**Output:**

| version | timestamp | operation | operationParameters |
|---------|-----------|-----------|---------------------|
| 10 | 2024-01-15 | MERGE | {predicate: ...} |
| 9 | 2024-01-14 | DELETE | {predicate: ...} |
| 8 | 2024-01-13 | WRITE | {mode: Append} |

## Use Cases

### Audit Trail

```python
# See who changed what and when
history = delta_table.history(100)  # Last 100 operations
history.select(
    "version", "timestamp", "operation", 
    "operationParameters", "userMetadata"
).show(truncate=False)
```

### Data Recovery

```python
# Oops! Accidentally deleted all data
delta_table.delete()  # This was a mistake!

# Restore from previous version
df_recovered = spark.read \
    .format("delta") \
    .option("versionAsOf", 9) \
    .load(path)

# Overwrite with recovered data
df_recovered.write \
    .format("delta") \
    .mode("overwrite") \
    .save(path)
```

### RESTORE Command

```python
# Simpler restoration
spark.sql("""
    RESTORE TABLE delta.`/path/to/table` TO VERSION AS OF 9
""")

# Or by timestamp
spark.sql("""
    RESTORE TABLE delta.`/path/to/table` 
    TO TIMESTAMP AS OF '2024-01-14'
""")
```

### Comparing Versions

```python
# Compare two versions
df_old = spark.read.format("delta").option("versionAsOf", 5).load(path)
df_new = spark.read.format("delta").load(path)

# Find differences
new_records = df_new.subtract(df_old)
deleted_records = df_old.subtract(df_new)
```

## Retention Settings

Control how long history is kept:

```python
# Set retention period (default: 30 days)
spark.sql("""
    ALTER TABLE delta.`/path/to/table`
    SET TBLPROPERTIES ('delta.logRetentionDuration' = 'interval 90 days')
""")

# Deleted file retention (default: 7 days)
spark.sql("""
    ALTER TABLE delta.`/path/to/table`
    SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 14 days')
""")
```

> 💡 **Tip:** Longer retention means more storage but better time travel capabilities.
