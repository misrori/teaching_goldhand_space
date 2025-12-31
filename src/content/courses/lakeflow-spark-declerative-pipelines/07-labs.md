# Labs
## Version: v3.0.5 Nov 27, 2025

---
# **1. Required Course Setup & Creating a Pipeline**

## **Purpose**

Set up the lab environment, explain traditional pipelines, and create your first Databricks pipeline.

## **Environment**

* ✔ Attach **Lab User Compute**
* ✔ Run all setup cells

## **Steps**

1. **Run all notebook cells** in
   ***“1 — Required Course Setup and Creating a Pipeline”***
   (no modifications needed)

2. **Explain traditional pipelines:**

   * Notebook-driven, manual jobs
   * Hard to maintain, scale, and orchestrate
   * No built-in lineage or DAG
   * Declarative pipelines solve these issues

3. **Create the first pipeline**:

   * **Name:** `my_create_etl_pipeline`
   * Select the provided notebook as the source
   * Select Lab User Compute as the cluster
   * Create → Run the pipeline
   * Review DAG, tasks, and tables

4. **Verify Pipeline Editor is enabled**

   * Workspace Settings → Spark Pipelines
   * ✔ Usually already enabled

5. **Try creating a Declarative Pipeline via the UI**

   * Workflows → Pipelines → Create Pipeline
   * Choose **Declarative (UI)**
   * Proceed until **“Add existing assets”**
   * **Stop and close** — do NOT create this second pipeline
   * Only demonstrate the UI workflow

---

# **2. Developing a Simple Pipeline**

## **Purpose**

Create a pipeline from the source folder, configure it correctly, run dry run and incremental runs.

## **Environment**

* Folder: **Developing Simple Pipeline**

## **Steps**

1. **Create a new pipeline from source**

   * Workflows → Pipelines → Create → **From source**
   * Select folder: **Developing Simple Pipeline**

2. **Open Settings and explain all configuration fields**:

   * Name, Target schema, Storage location
   * Source location
   * Cluster
   * Notification options
   * Channel (Preview/GA)

3. **Add configuration key-value pair**
   Under **Configuration → Add**:

   * **Key:** `source`
   * **Value:** `dbacademyops.<lab_username>`

   → This is the ingestion source for the pipeline.

4. **Run a Dry Run**

   * Validates DAG
   * No tables are created
   * Ensures definitions are correct

5. **Run the pipeline**

   * Explore DAG
   * Explore bronze/silver tables
   * Review tasks and run output

6. **Run the pipeline again**

   * No new files → **0 new rows**
   * Show how the run history reflects this

7. **Add new data**

   * Go back to the notebook
   * Run the cell that copies new files into the source volume

8. **Run the pipeline again**

   * New rows are ingested
   * Review results in both bronze and silver

9. **Check table history**

   * Table: **Orders Bronze Demo 2** (streaming table)
   * Start **Shared SQL Warehouse**
   * Run `DESCRIBE HISTORY` to show versioning

---

# **3. Adding Data Quality Expectations Project**

## **Purpose**

Introduce and demonstrate data expectations inside a declarative pipeline.

## **Environment**

* Run classroom setup
* Notebook contains the full declarative pipeline code

## **Steps**

1. **Run all setup cells** in the notebook.

2. **Create the declarative pipeline**

   * Run the Python code provided (DAB definition)
   * Pipeline appears in Pipeline Editor

3. **Open the pipeline in the Spark Declarative Editor**

   * View DAG
   * Show expectation settings

4. **Run the pipeline**

   * Observe expectations on orders data
   * Some rows are dropped (invalid values)
   * Some rows fail constraints but remain (allowed failures)

5. **Explore results**

   * Open **orders_silver**
   * Show rows with invalid `notification` or invalid `date`
   * Explain the expectation behavior

6. **Close the pipeline** after demonstration

---

# **5. Deploying a Pipeline to Production**

## **Purpose**

Introduce production pipeline execution, event logs, and versioned history.

## **Environment**

* Notebook: **Demo 5**

## **Steps**

1. **Open the explain files**

   * `orders.pipeline.explain`
   * `status.pipeline.sql.explain`

   → These show how the production pipeline is defined.

2. **Save the event log**

   * Run cells that write the pipeline’s event log to a table
   * Show where event logs live inside the system

3. **Run the pipeline**

   * Trigger the production execution
   * Wait until completion

4. **Return to the main notebook**

   * Run the cell that lands new data into the volume

5. **Run the pipeline again**

   * New data is consumed
   * New event log entries are created

6. **Explain the logs and history**

   * Open event log table
   * Show entries for:

     * TASK_START
     * TASK_END
     * FLOW_DEFINITION
     * DATA_WRITTEN
   * Review `DESCRIBE HISTORY` for production tables

---

# **6. Change Data Capture (CDC) with Auto-CDC & Slowly Changing Dimensions (SCD)**

## **Purpose**

Demonstrate automatic CDC handling in pipelines including SCD Type 1/2 behavior.

## **Environment**

* Run classroom setup
* Notebook contains CDC pipeline code

## **Steps**

1. **Run classroom setup cells**

2. **Create the CDC pipeline**

   * Use the notebook code to generate the pipeline

3. **Run the pipeline**

   * Explain:

     * What CDC is
     * How changes propagate
     * Difference between Type 1 (overwrite) and Type 2 (history)

4. **Add new data to the source volume**

   * Run the provided notebook cell

5. **Run the pipeline again**

   * Observe how changes are handled in the SCD table
   * Show:

     * Overwrites
     * New versions (for SCD Type 2)

6. **Run SQL queries**

   * Inspect customer/order history
   * Validate SCD behavior
   * Show versioning of affected rows

