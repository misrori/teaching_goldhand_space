# RDD Operations

RDDs (Resilient Distributed Datasets) are Spark's fundamental data structure.

## Creating RDDs

### From Collections

```python
# Parallelize a Python collection
data = [1, 2, 3, 4, 5]
rdd = spark.sparkContext.parallelize(data)
```

### From External Storage

```python
# From a text file
text_rdd = spark.sparkContext.textFile("hdfs://path/to/file.txt")

# From multiple files
all_logs = spark.sparkContext.textFile("logs/*.txt")
```

## Transformations

Transformations are **lazy** - they don't execute until an action is called.

### map()

Apply a function to each element:

```python
numbers = spark.sparkContext.parallelize([1, 2, 3, 4])
squared = numbers.map(lambda x: x ** 2)
# Result: [1, 4, 9, 16]
```

### filter()

Select elements matching a condition:

```python
even = numbers.filter(lambda x: x % 2 == 0)
# Result: [2, 4]
```

### flatMap()

Map then flatten results:

```python
sentences = spark.sparkContext.parallelize(["hello world", "spark is fast"])
words = sentences.flatMap(lambda s: s.split(" "))
# Result: ["hello", "world", "spark", "is", "fast"]
```

### reduceByKey()

Aggregate values by key:

```python
pairs = spark.sparkContext.parallelize([
    ("a", 1), ("b", 2), ("a", 3), ("b", 4)
])
sums = pairs.reduceByKey(lambda x, y: x + y)
# Result: [("a", 4), ("b", 6)]
```

## Actions

Actions trigger computation and return results.

### collect()

Return all elements to the driver:

```python
result = rdd.collect()  # Returns Python list
```

### count()

Count the number of elements:

```python
total = rdd.count()
```

### reduce()

Aggregate all elements:

```python
sum_all = numbers.reduce(lambda x, y: x + y)
# Result: 10
```

### take()

Return first n elements:

```python
first_three = rdd.take(3)
```

## Word Count Example

Classic MapReduce example:

```python
# Word count in Spark
text = spark.sparkContext.textFile("book.txt")

word_counts = text \
    .flatMap(lambda line: line.split(" ")) \
    .map(lambda word: (word.lower(), 1)) \
    .reduceByKey(lambda a, b: a + b) \
    .sortBy(lambda x: x[1], ascending=False)

top_words = word_counts.take(10)
for word, count in top_words:
    print(f"{word}: {count}")
```
