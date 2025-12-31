# DataFrames

DataFrames are the preferred API for structured data in Spark.

## Creating DataFrames

### From Files

```python
# JSON
df = spark.read.json("data.json")

# CSV
df = spark.read \
    .option("header", "true") \
    .option("inferSchema", "true") \
    .csv("data.csv")

# Parquet
df = spark.read.parquet("data.parquet")
```

### From RDD

```python
from pyspark.sql import Row

rdd = spark.sparkContext.parallelize([
    Row(name="Alice", age=25),
    Row(name="Bob", age=30)
])
df = spark.createDataFrame(rdd)
```

## DataFrame Operations

### Select and Filter

```python
# Select columns
df.select("name", "age")

# Filter rows
df.filter(df.age > 21)
df.where("age > 21")

# Chain operations
result = df \
    .select("name", "age", "country") \
    .filter(df.age >= 18) \
    .orderBy(df.age.desc())
```

### Aggregations

```python
from pyspark.sql import functions as F

# Group by and aggregate
df.groupBy("country").agg(
    F.count("*").alias("count"),
    F.avg("age").alias("avg_age"),
    F.max("salary").alias("max_salary")
)

# Multiple aggregations
df.groupBy("department", "year").agg(
    F.sum("revenue").alias("total_revenue"),
    F.countDistinct("customer_id").alias("unique_customers")
)
```

### Joins

```python
# Inner join
df1.join(df2, df1.id == df2.id, "inner")

# Left outer join
df1.join(df2, "id", "left")

# Multiple conditions
df1.join(
    df2,
    (df1.id == df2.id) & (df1.date == df2.date),
    "left"
)
```

## Spark SQL

Use SQL queries on DataFrames:

```python
# Register as temporary view
df.createOrReplaceTempView("people")

# Run SQL query
result = spark.sql("""
    SELECT country, 
           COUNT(*) as population,
           AVG(age) as avg_age
    FROM people
    WHERE age >= 18
    GROUP BY country
    HAVING COUNT(*) > 1000
    ORDER BY population DESC
""")
```

## Window Functions

Powerful analytical functions:

```python
from pyspark.sql.window import Window

# Define window
window = Window.partitionBy("department").orderBy(F.desc("salary"))

# Add rank column
df_ranked = df.withColumn(
    "rank",
    F.rank().over(window)
)

# Running total
window_running = Window.partitionBy("customer") \
    .orderBy("date") \
    .rowsBetween(Window.unboundedPreceding, Window.currentRow)

df_with_total = df.withColumn(
    "running_total",
    F.sum("amount").over(window_running)
)
```

## Performance Tips

1. **Use broadcast for small tables:**
```python
from pyspark.sql.functions import broadcast
result = large_df.join(broadcast(small_df), "id")
```

2. **Repartition wisely:**
```python
df.repartition(200, "key_column")
```

3. **Cache intermediate results:**
```python
df.cache()
```
