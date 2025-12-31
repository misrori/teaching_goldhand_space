
# Practice Questions

---

## 1. What is the primary purpose of Lakeflow Connect in Databricks?

**A.** Manage cluster compute profiles

**B.** Simplify and accelerate data ingestion from various sources

**C.** Generate dashboards automatically

**D.** Replace Delta Live Tables

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Simplify and accelerate data ingestion**  
**Explanation:**  
Lakeflow Connect provides managed pipelines that connect to many data sources, handle authentication, schema drift, and ingestion logic while hiding infrastructure complexity.
</details>

---

## 2. What are the two main categories of connectors in Lakeflow Connect?

**A.** Manual connectors and Automated connectors

**B.** Streaming connectors and Batch connectors

**C.** Standard connectors and Managed connectors

**D.** Bronze connectors and Silver connectors

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Standard and Managed Connectors**  
**Explanation:**  
Standard connectors read from cloud file storage (S3, ADLS, GCS).  
Managed connectors integrate with enterprise systems (Salesforce, Oracle, SAP, SaaS) using fully managed, zero-code ingestion.
</details>

---

## 3. Which three ingestion methods are common in Lakeflow Connect Standard Connectors?

**A.** MERGE INTO, DLT, COPY INTO

**B.** CTAS, COPY INTO, Auto Loader

**C.** Spark Streaming, DLT, Snowpipe

**D.** Unity Catalog, MLflow, Auto Loader

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — CTAS, COPY INTO, Auto Loader**  
**Explanation:**  
These are the three fundamental ingestion techniques used for initial loads (CTAS), incremental batch loads (COPY INTO), and continuous streaming ingestion (Auto Loader).
</details>

---

## 4. What is the primary goal of the Medallion Architecture?

**A.** Reduce cluster usage

**B.** Organize data into structured quality layers

**C.** Optimize SQL query cost

**D.** Replace data warehouses

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Organize data into structured quality layers**  
**Explanation:**  
The Bronze → Silver → Gold layering improves quality, reliability, lineage, and reusability across analytics and ML workloads.
</details>

---

## 5. What is the purpose of metadata columns added during ingestion?

**A.** Improve write throughput

**B.** Track ingestion time and file lineage

**C.** Reduce storage cost

**D.** Partition the data automatically

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Track ingestion time and file lineage**  
**Explanation:**  
Metadata such as `_ingestion_timestamp` and `_source_file` enables auditing, troubleshooting, and governance across ingestion pipelines.
</details>

---

## 6. What is the rescued data column used for?

**A.** Storing deleted records

**B.** Capturing malformed or schema-mismatched records

**C.** Tracking cluster crash logs

**D.** Holding checkpoint data

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Capturing malformed or mismatched records**  
**Explanation:**  
When a record doesn’t fit the schema, it is stored in the `_rescued_data` column rather than being dropped, preserving data integrity and supporting schema evolution.
</details>

---

## 7. How does Auto Loader differ from COPY INTO?

**A.** Auto Loader is only for batch workloads

**B.** COPY INTO supports schema evolution

**C.** Auto Loader supports continuous ingestion with automatic file discovery

**D.** COPY INTO uses serverless compute only

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Auto Loader supports continuous ingestion and automatic discovery**  
**Explanation:**  
Auto Loader scales to millions of files, handles schema drift automatically, and is ideal for streaming or continuous ingestion. COPY INTO is best for incremental batch ingestion.
</details>

---

## 8. What is a major benefit of using Managed Connectors for enterprise ingestion?

**A.** They eliminate the need for Unity Catalog

**B.** They provide zero-code connection to systems like SAP, Salesforce, Oracle

**C.** They run only on classic compute

**D.** They bypass security controls for faster performance

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Zero-code ingestion for enterprise systems**  
**Explanation:**  
Managed Connectors provide built-in reliability, schema management, error handling, credential management, and external system integration with no coding required.
</details>

---

## 9. When should you use the Delta Lake MERGE INTO command?

**A.** When performing streaming ingestion from cloud storage

**B.** When needing to synchronize or upsert data

**C.** For schema evolution

**D.** For bulk initial table creation

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Synchronize or upsert data**  
**Explanation:**  
MERGE INTO is used for change data capture (CDC), Slowly Changing Dimensions (SCD), and upserting new or updated records into Delta tables.
</details>

---

## 10. What is the Databricks Marketplace used for?

**A.** Deploying clusters and jobs

**B.** Sharing notebooks with other users

**C.** Subscribing to external datasets and applications

**D.** Running ML models directly on partner platforms


<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Subscribing to external datasets and apps**  
**Explanation:**  
The Marketplace provides third-party and open datasets that can be directly integrated into the Lakehouse, accelerating analytics and reducing ingestion overhead.
</details>

---

