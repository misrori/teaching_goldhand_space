

# Ingestion modes

---

#  CTAS, COPY INTO, and Auto Loader in Databricks — What They Are and When to Use Them

In Databricks, there are three major ways to bring data into Delta tables:
**CTAS**, **COPY INTO**, and **Auto Loader**.
Each one solves a different problem, and understanding the differences helps you choose the right tool during ingestion.

Let’s look at them one by one.

---

# 1. CTAS (Create Table As Select)

**What it is:**
CTAS is a SQL command that creates a new table **from the results of a query**.

**In one sentence:**
👉 *CTAS is the easiest way to create a brand-new Delta table based on an existing dataset or a SQL query.*

**Example use case:**

* You read files from a Bronze table
* Apply transformations
* Write the result as a new Silver table

**Presentation Explanation:**
“CTAS lets me take any query, run it, and the result becomes a brand-new managed table. It’s perfect for initializing a table after transformations or preparing curated datasets.”

**SQL example:**

```sql
CREATE TABLE sales_silver
AS SELECT * FROM sales_bronze WHERE amount > 0;
```

---

# 2. COPY INTO

**What it is:**
COPY INTO is used to **load files from external storage** (such as S3, ADLS, GCS) into an existing Delta table.

**In one sentence:**
👉 *COPY INTO loads data from cloud storage into a Delta table in a reliable, idempotent way — and it only loads new files.*

**What makes COPY INTO special:**

* It tracks which files were already loaded
* You can run it repeatedly without duplicates
* Great for incremental file ingestion
* Perfect for scheduling in Lakeflow Jobs

**Typical file types:**
CSV, JSON, Parquet, Avro, ORC

**Presentation Explanation:**
“COPY INTO is designed for reliable batch file ingestion. It remembers which files have been processed, so even if I rerun it 100 times, it will only load files that are new.”

**SQL example:**

```sql
COPY INTO my_table
FROM 's3://bucket/path/'
FILEFORMAT = PARQUET;
```

---

# 3. Auto Loader (cloud_files)

**What it is:**
Auto Loader is a **streaming ingestion framework** that automatically detects and processes new files arriving in cloud storage.

**In one sentence:**
👉 *Auto Loader is for continuous, scalable, event-driven ingestion — perfect when new files arrive unpredictably or at high volume.*

**Key features:**

* Automatically detects new files using notifications or file listing
* Extremely scalable
* Works with streaming and batch
* Supports schema evolution (“schema drift”)
* Minimizes operational overhead

**Presentation Explanation:**
“Auto Loader is the smartest ingestion option in Databricks. Whenever a new file lands in cloud storage, Auto Loader picks it up automatically. It scales to millions of files and handles schema changes as the data evolves.”

**Example code (Python):**

```python
df = spark.readStream.format("cloud_files") \
    .option("cloud_files_format", "json") \
    .load("s3://bucket/path")

df.writeStream \
  .trigger(availableNow=True) \
  .option("checkpointLocation", "/chk/") \
  .table("my_delta_table")
```

---

# Summary Table CTAS, COPY INTO, Auto Loader
| Feature               | CTAS                            | COPY INTO                      | Auto Loader                              |
| --------------------- | ------------------------------- | ------------------------------ | ---------------------------------------- |
| Purpose               | Create new table from a query   | Load files into a table        | Stream or incrementally ingest new files |
| Mode                  | Batch                           | Batch (incremental)            | Streaming + incremental                  |
| Creates table?        | Yes                             | No (loads into existing table) | No                                       |
| Detects new files?    | No                              | Yes (tracks loaded files)      | Yes (event-driven + scalable)            |
| Handles schema drift? | Limited                         | Basic                          | Advanced                                 |
| Best for              | Transformations, curated tables | Scheduled file ingestion       | High-volume continuous ingestion         |

---

# Closing line for your presentation

CTAS builds new tables from queries, COPY INTO reliably loads external files into existing tables, and Auto Loader provides a fully automated, scalable way to ingest new files as they arrive. Together, they give us a complete ingestion toolkit for any workload on Databricks.

---


# Choosing Ingestion Method
```sql
Initial load or complete refresh?
├─ YES → Use CTAS
└─ NO
   Data arriving continuously?
   ├─ YES → Use Auto Loader
   └─ NO
      Regular batch arrivals?
      ├─ YES → Use COPY INTO
      └─ NO → Custom streaming solution
```

# Choosing Connector Type
```sql
Connecting to enterprise system?
├─ YES → Use Managed Connector
└─ NO
   Data in cloud storage?
   ├─ YES → Use Standard Connector
   └─ NO
      Is data available on Marketplace?
      ├─ YES → Subscribe to share
      └─ NO → Build custom solution
```

# Choosing Update Strategy
```sql
Need to handle updates and deletes?
├─ YES → Use MERGE INTO
└─ NO
   Need to track historical changes?
   ├─ YES → Implement SCD Type 2
   └─ NO
      Simple append only?
      └─ Use INSERT
```

---