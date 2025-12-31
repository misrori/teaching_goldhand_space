# Key Features

Let's explore the key features that make Delta Lake powerful.

## Transaction Log

The transaction log is the heart of Delta Lake:

### How It Works

Every change is recorded in a JSON log file:

```
_delta_log/
├── 00000000000000000000.json
├── 00000000000000000001.json
├── 00000000000000000002.json
└── 00000000000000000010.checkpoint.parquet
```

### Log Contents

```json
{
  "add": {
    "path": "part-00000.parquet",
    "partitionValues": {"date": "2024-01-15"},
    "size": 1234567,
    "modificationTime": 1705315200000,
    "dataChange": true
  }
}
```

## Schema Evolution

Safely evolve your schema over time:

### Adding Columns

```python
# Enable schema evolution
df.write \
    .format("delta") \
    .mode("append") \
    .option("mergeSchema", "true") \
    .save("/path/to/table")
```

### Schema Enforcement

```python
# Set table properties
spark.sql("""
    ALTER TABLE my_table 
    SET TBLPROPERTIES (
        'delta.columnMapping.mode' = 'name',
        'delta.minReaderVersion' = '2',
        'delta.minWriterVersion' = '5'
    )
""")
```

## Data Compaction

Optimize small files:

### OPTIMIZE Command

```python
from delta.tables import DeltaTable

# Compact all small files
spark.sql("OPTIMIZE delta.`/path/to/table`")

# Or with Python API
delta_table = DeltaTable.forPath(spark, "/path/to/table")
delta_table.optimize().executeCompaction()
```

### Z-Ordering

Co-locate related data for faster queries:

```python
# Z-order by frequently filtered columns
spark.sql("""
    OPTIMIZE delta.`/path/to/table`
    ZORDER BY (date, country)
""")
```

## Data Skipping

Automatic query optimization:

```python
# Delta Lake automatically skips files
# based on statistics (min/max values)

# This query only reads relevant files
df = spark.read.format("delta").load(path) \
    .filter("date = '2024-01-15'") \
    .filter("country = 'US'")
```

## Vacuum

Clean up old files:

```python
# Remove files older than 7 days (default)
spark.sql("VACUUM delta.`/path/to/table`")

# Remove files older than 24 hours
spark.sql("VACUUM delta.`/path/to/table` RETAIN 24 HOURS")

# Python API
delta_table.vacuum(24)  # hours
```

> ⚠️ **Warning:** Files removed by VACUUM cannot be used for time travel.
