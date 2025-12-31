# Data Quality Expectations

## What Are Data Quality Expectations?

Data quality expectations are rules that describe what “good” data looks like inside a declarative pipeline.
In Spark Declarative Pipelines, you define these expectations directly in the pipeline specification, and LakeFlow automatically validates them during execution.


> “Expectations are guardrails. They make sure the data entering or leaving each step of the pipeline actually meets the rules we define. If something is wrong, the pipeline will warn us, fail, or quarantine the bad data.”

---

## Why Data Quality Expectations Matter

You can highlight these points:

* Ensure reliability of downstream analytics
* Prevent bad data from silently polluting production tables
* Catch schema drifts or unexpected values early
* Help with observability and debugging

---

## Types of Expectations You Can Define

### 1. Column-Level Expectations

Rules applied to individual columns.

Examples:

* Column must not be null
* Value must be within a range
* Email must match a regex pattern
* Date must be after a specific timestamp

You can say:

> “Column-level expectations are the most common. Think of them as rules about what a specific column is allowed to contain.”

---

### 2. Row-Level Expectations

Rules that validate entire records.

Examples:

* A row is valid only if `quantity > 0 AND price > 0`
* A record must have all required fields
* A combined business rule, e.g., `end_date > start_date`

---

### 3. Schema Expectations

Rules that ensure the expected structure of the data.

Examples:

* Required columns must exist
* Column types must match the declared schema
* No unexpected columns should appear

This is important when ingesting data from external or semi-structured sources.

---

### 4. Uniqueness and Key Integrity Expectations

Used to enforce primary key–like behavior.

Examples:

* `order_id` must be unique
* (`customer_id`, `order_date`) must be unique
* Foreign key relationships (soft validation)

---

### 5. Data Freshness Expectations

Ensure that the data is up to date.

Examples:

* Ingested data must not be older than 24 hours
* A pipeline must receive new data at least once per day

You can say:

> “Freshness expectations protect us from stale data. If yesterday’s data doesn’t arrive today, the pipeline can alert you.”

---

### 6. Volume Expectations

Ensure expected amounts of data arrive.

Examples:

* At least 1,000 rows per batch
* No sudden drop or spike in data volume

Useful for detecting upstream system failures.

---

## What Happens When Expectations Fail?

Declarative pipelines allow different actions:

* **Warn:** Continue pipeline but record a warning
* **Drop:** Remove invalid rows
* **Fail:** Stop the pipeline execution
* **Quarantine:** Move bad records to a separate table for inspection


> “You get to choose how strict the pipeline should be. Some rules should fail the job immediately; others should just warn and let the pipeline continue.”

---

## Why This Fits Perfectly Into Declarative Pipelines

Declarative pipelines make expectations first-class citizens, meaning:

* Expectations live in the pipeline spec
* They are version-controlled
* They appear in lineage and observability dashboards
* They apply automatically on every run


> “The beauty of declarative pipelines is that data quality rules are part of the pipeline definition itself. No more hidden logic in notebooks.”
