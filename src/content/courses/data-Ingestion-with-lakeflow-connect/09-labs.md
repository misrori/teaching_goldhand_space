

# Labs

## Version: v3.0.3 Nov 2025

This is a high-level summary of all lab notebooks, what they contain, and what you must pay attention to while teaching.
Most notebooks only require running the cells and explaining the concepts, but a few have **important manual steps**.

---

# 1 — Exploring the Lab Environment

**What this notebook does:**

* Introduces the workspace, environment, and helper functions.
* Demonstrates basic metadata (default catalog, schema, tables, `USE CATALOG`, `USE SCHEMA`).
* Just lists the types of tables and shows what will be used.

**Your tasks:**

* ✔ Just run all cells.
* ✔ Explain what the environment looks like.
* ✔ No editing or manual intervention required.

---

# 2A — Data Ingestion with CREATE TABLE AS (CTAS) and COPY INTO

**What this notebook does:**

* Demonstrates CTAS ingestion.
* Demonstrates COPY INTO ingestion.
* Includes one file intentionally producing an error — this is expected.

**Your tasks:**

* ✔ Run all cells.
* ✔ Explain CTAS vs COPY INTO.
* ⚠ One step will fail on purpose — mention that it is intentional and part of the exercise.
* No manual uploads or edits needed.

---

# 2B — Create Streaming Tables with SQL using Auto Loader

**This one *requires special attention*.**

**Critical steps you must perform:**

1. ✔ **Switch to Labuser Compute** first.
2. ✔ Then **switch to SQL Warehouse compute** before running streaming SQL.
3. ✔ **Run the second classroom setup script while using SQL Warehouse.**
4. ✔ In the “Create a STREAMING TABLE using Databricks SQL” section,
   **replace the source labuser name** with yours if needed.
5. ⚠ **o001.csv file must be downloaded manually**

   * Download it
   * Upload it into the appropriate **volume**
   * Refresh the table to trigger the load

**Your tasks:**

* ⚠ Pay very close attention to compute switching.
* ✔ Demonstrate Auto Loader behavior (streaming ingestion).
* ✔ Run all cells after the manual CSV handling.

---

# 3 — Adding Metadata Columns During Ingestion

**What this notebook does:**

* Shows how to add metadata columns:
  `_metadata.file_path`, `_metadata.file_modification_time`, etc.

**Your tasks:**

* ✔ Run the cells.
* ✔ Explain why metadata columns matter in ingestion pipelines.
* No manual setup required.

---

# 4 — Handling CSV Ingestion with the Rescued Data Column

**What this notebook does:**

* Demonstrates schema evolution issues with CSV.
* Shows how the rescued data column (`_rescued_data`) collects malformed records.

**Your tasks:**

* ✔ Run all cells.
* ✔ Explain how rescued data helps avoid ingestion failures.
* No manual uploads or replacements required.

---

# 6 — Ingesting JSON Files with Databricks

**What this notebook does:**

* Demonstrates encoding/decoding in JSON.
* Shows how JSON ingestion works with Auto Loader or COPY INTO.

**Your tasks:**

* ✔ Run the cells.
* ✔ When showing encoding/decoding, **open the provided link in a new tab** to help students zoom in on the content.
* No manual steps required.

---

# 8 — Enterprise Data Ingestion with LakeFlow Connect

**What this notebook does:**

* Demonstrates enterprise-grade data ingestion through LakeFlow Connect.
* Uses a **simple demo link**.

**Your tasks:**

* ✔ Show the demo at:
  **[https://app.getreprise.com/launch/BXZY58n/](https://app.getreprise.com/launch/BXZY58n/)**
* ✔ Explain the concepts using the demo flow.
* No coding or cell changes required.

---

# Summary of Special Things to Pay Attention To

| Notebook | Special Action Required                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **1**  | None — just run cells.                                                                                                                   |
| **2A**   | One intentional error — explain it.                                                                                                      |
| **2B**   | ⚠ Compute switching (Labuser → SQL Warehouse), ⚠ run classroom script on SQL Warehouse, ⚠ replace labuser, ⚠ manually upload `o001.csv`. |
| **3**    | None — run and explain.                                                                                                                  |
| **4**    | None — run and explain.                                                                                                                  |
| **6**    | Open encoding/decoding link in new tab.                                                                                                  |
| **8**    | Show LakeFlow Connect demo link.                                                                                                         |

---
