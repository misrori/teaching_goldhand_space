# Quiz

Test your Delta Lake knowledge!

## Question 1: Transaction Log

What file format does Delta Lake use for its transaction log?

**Options:**
- A) CSV
- B) JSON
- C) Parquet only
- D) Avro

> **Answer:** B) JSON - The transaction log uses JSON files with periodic Parquet checkpoints.

---

## Question 2: VACUUM

What happens after running `VACUUM RETAIN 0 HOURS`?

**Options:**
- A) All data is deleted
- B) Time travel is disabled permanently
- C) Only the current version's files remain
- D) The table is dropped

> **Answer:** C) Only the current version's files remain - historical data files are removed.

---

## Question 3: Schema Evolution

Which option enables schema evolution in Delta Lake?

**Options:**
- A) `.option("schemaEvolution", "true")`
- B) `.option("mergeSchema", "true")`
- C) `.option("autoSchema", "true")`
- D) It's always enabled

> **Answer:** B) `.option("mergeSchema", "true")`

---

## Question 4: MERGE

What does MERGE provide that UPDATE doesn't?

**Options:**
- A) Faster performance
- B) Insert new rows that don't match
- C) Delete rows
- D) Better compression

> **Answer:** B) Insert new rows that don't match - MERGE supports matched and not matched clauses.

---

## Question 5: Time Travel

How does Delta Lake enable time travel?

**Options:**
- A) By keeping all files forever
- B) Through the transaction log and preserved data files
- C) By using a separate history database
- D) Through Spark's built-in versioning

> **Answer:** B) Through the transaction log and preserved data files.
