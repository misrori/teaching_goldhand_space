# Quiz

Test your Spark knowledge!

## Question 1: RDD Transformations

Which of these is a transformation (not an action)?

**Options:**
- A) `collect()`
- B) `count()`
- C) `map()`
- D) `reduce()`

> **Answer:** C) `map()` - Transformations are lazy and return new RDDs.

---

## Question 2: Caching

What happens when you call `df.cache()`?

**Options:**
- A) Data is immediately written to disk
- B) Data is marked for caching on first action
- C) A new DataFrame is created
- D) The computation runs immediately

> **Answer:** B) Data is marked for caching on first action - caching is lazy.

---

## Question 3: Partitions

After `rdd.repartition(100)`, how many partitions will the RDD have?

**Options:**
- A) Depends on the cluster size
- B) Exactly 100
- C) At least 100
- D) At most 100

> **Answer:** B) Exactly 100 - repartition creates exactly the specified number.

---

## Question 4: Shuffles

Which operation causes a shuffle?

**Options:**
- A) `map()`
- B) `filter()`
- C) `groupByKey()`
- D) `flatMap()`

> **Answer:** C) `groupByKey()` - grouping requires shuffling data across partitions.

---

## Question 5: Broadcast Variables

When should you use broadcast variables?

**Options:**
- A) For large datasets that need to be distributed
- B) For small read-only data shared across tasks
- C) For mutable shared state
- D) For writing data to HDFS

> **Answer:** B) For small read-only data shared across tasks.
