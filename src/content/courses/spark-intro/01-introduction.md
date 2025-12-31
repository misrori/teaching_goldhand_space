# Introduction to Apache Spark

Apache Spark is a unified analytics engine for large-scale data processing. It provides high-level APIs in Java, Scala, Python, and R.

## What is Apache Spark?

Spark was developed at UC Berkeley's AMPLab in 2009 and later donated to the Apache Software Foundation. It has become the go-to framework for big data processing.

## Key Features

### Speed

Spark runs workloads up to **100x faster** than Hadoop MapReduce in memory:

- In-memory computing
- Optimized execution engine
- DAG (Directed Acyclic Graph) execution

### Ease of Use

Write applications quickly in Java, Scala, Python, or R:

```python
# Simple Spark example
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("example").getOrCreate()
df = spark.read.json("data.json")
df.show()
```

### Generality

Spark provides a stack of libraries:

| Library | Purpose |
|---------|---------|
| **Spark SQL** | Structured data processing |
| **MLlib** | Machine learning |
| **GraphX** | Graph processing |
| **Spark Streaming** | Real-time data processing |

### Runs Everywhere

Spark runs on:

- Hadoop YARN
- Apache Mesos
- Kubernetes
- Standalone mode
- Cloud platforms (AWS, Azure, GCP)

## Spark vs. Hadoop MapReduce

| Feature | Spark | MapReduce |
|---------|-------|-----------|
| Speed | 100x faster (memory) | Slower (disk-based) |
| Ease of use | High-level APIs | Low-level |
| Real-time | Yes (Streaming) | Batch only |
| Caching | In-memory | Disk |

> "Apache Spark is a lightning-fast unified analytics engine for big data and machine learning."
