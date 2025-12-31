# Change Data Capture (CDC)

## What Is CDC?

Change Data Capture (CDC) is a technique for identifying and processing **only the data that has changed** in a source system, rather than repeatedly reading the full dataset.
Databricks uses CDC patterns—especially with Delta Lake—to efficiently update tables with inserts, updates, and deletes.

During the lecture, you can say:

> “CDC lets us keep tables fresh by processing only what changed. Instead of reloading everything every day, we just apply inserts, updates, and deletes incrementally.”

---

## Why CDC Matters

* Reduces compute cost
* Supports near–real-time synchronization
* Enables scalable data warehousing
* Makes historical tracking possible
* Integrates cleanly with Delta’s MERGE INTO operations

---

# Types of CDC Processing / Slowly Changing Dimensions (SCD)

CDC and SCD often appear together because they both describe **how we update target tables** when source data changes.
The two most important types in Databricks workflows are **SCD Type 1** and **SCD Type 2**.

---

## SCD Type 1 — Overwrite the Record with the Latest Value

Type 1 is the simplest.
You **do not keep history**.
When a change happens, you overwrite the old value with the new one.

During the lecture:

> “SCD Type 1 means we only care about the current picture. We don’t track history—if today the customer changes their address, the old address is gone.”

How it works:

* Use Delta MERGE INTO
* Match on a primary key
* Overwrite changed fields
* Insert new records
* Delete when needed

Example behavior:

* Old value: `customer_name = “John Doe”`
* New value: `customer_name = “John Smith”`
* Table now contains only “John Smith”

Use cases:

* Dimensions where history is irrelevant (product color, status text)
* Small lookup tables
* Real-time reference enrichment

---

## SCD Type 2 — Keep Historical Versions

Type 2 stores **each version of a record** over time.
You do not overwrite the old row—you create a new row for the new state.

During the lecture:

> “SCD Type 2 is like version control for your data. Every time something changes, we keep the old record and create a new one with a new valid time.”

How it works:

* The old record gets an end date, or an `is_current = false` flag
* A new record is inserted with the updated values
* Both records remain in the table

Common fields:

* `start_date`
* `end_date` (null for active record)
* `is_current` (true/false)

Example:

```
customer_id | name        | start_date | end_date   | is_current
-----------------------------------------------------------------
1           | John Doe    | 2022-01-01 | 2023-04-10 | false
1           | John Smith  | 2023-04-10 | null       | true
```

Use cases:

* Customer details
* Employee records
* Product prices
* Regulatory/audit requirements

---

# Other Important CDC Techniques

## Inserts Only CDC

Some systems send CDC where only *new records* are published (e.g., Kafka append-only topics).
You must infer changes using keys or timestamps.

## Log-Based CDC

Reads changes directly from the source system’s transaction logs.
Examples:

* MySQL binlog
* PostgreSQL WAL
* SQL Server CDC
* Databricks Auto Loader’s “file notification logs”

Benefits:

* Fast, scalable, no impact on source system

## Soft Deletes

Record stays in the table but is marked as deleted using a boolean flag or a status value.
Useful for logical consistency without physically removing data.

## Hard Deletes

Record is physically removed from the table.
Databricks handles this easily using Delta’s `DELETE` command or MERGE logic.

---

# CDC in Delta Lake / Declarative Pipelines

Declarative Pipelines in Databricks use CDC internally when you define:

* MERGE operations
* Upserts
* Incremental processing
* Auto Loader with schema evolution

It means Spark takes your incremental changes and applies them to target tables according to the SCD rules you choose.

During the lecture, say:

> “Whether you want to overwrite changes or track history, CDC plus Delta MERGE gives you reliable and scalable updates to any table.”
