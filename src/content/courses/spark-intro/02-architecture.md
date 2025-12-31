# Architecture

Understanding Spark's architecture is crucial for writing efficient applications.

## Cluster Overview

A Spark cluster consists of several components:

### Driver Program

The driver program runs your main() function and creates the SparkContext:

```python
from pyspark.sql import SparkSession

# The SparkSession is created in the driver
spark = SparkSession.builder \
    .appName("MyApp") \
    .master("yarn") \
    .config("spark.executor.memory", "4g") \
    .getOrCreate()
```

### Cluster Manager

Manages resources across the cluster:

- **Standalone** - Simple built-in manager
- **YARN** - Hadoop's resource manager
- **Mesos** - General cluster manager
- **Kubernetes** - Container orchestration

### Executors

Worker processes that run tasks:

```
Driver Program
      │
      ▼
Cluster Manager
      │
      ├──► Executor 1 (Worker Node)
      │      ├── Task
      │      └── Task
      │
      └──► Executor 2 (Worker Node)
             ├── Task
             └── Task
```

## Spark Execution Model

### Jobs, Stages, and Tasks

1. **Job** - A complete computation triggered by an action
2. **Stage** - A set of tasks that can run in parallel
3. **Task** - A unit of work sent to an executor

```python
# This creates a job with multiple stages
result = df \
    .filter(df.age > 21) \      # Stage 1
    .groupBy("country") \       # Shuffle (stage boundary)
    .count() \                  # Stage 2
    .collect()                   # Action triggers job
```

## Memory Management

### Storage Memory

Used for caching RDDs and DataFrames:

```python
# Cache a DataFrame in memory
df.cache()

# Or with specific storage level
from pyspark import StorageLevel
df.persist(StorageLevel.MEMORY_AND_DISK)
```

### Execution Memory

Used for computation (joins, sorts, aggregations).

## Configuration

Key configurations for performance:

```python
spark = SparkSession.builder \
    .config("spark.executor.memory", "8g") \
    .config("spark.executor.cores", "4") \
    .config("spark.sql.shuffle.partitions", "200") \
    .config("spark.default.parallelism", "100") \
    .getOrCreate()
```
