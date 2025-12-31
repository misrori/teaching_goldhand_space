# Labs
## Version: v3.2.2 Nov 2025

---

# 1. Creating a Job Using the Lakeflow Job UI

## Purpose

Create a Lakeflow job manually from scratch, add tasks, and fix a common configuration error.


## Environment

* ✔ Select **Labuser...**.

## Steps

1. **Create a new job from empty (blank)**.

   * Job name and parameters are provided in the notebook description.
2. **Add a new task** using notebook **1.1 — Creating Orders Table**.
3. **Add a SQL query task** — ⚠ this will cause an error:

   * The task type is SQL
   * But the file is actually an **IPython notebook**
4. **Fix the error:**

   * ✔ *Recommended*: Change the task type to **Notebook**
   * OR copy SQL code into a new SQL Query editor (not preferred)
5. **Run the two SQL queries at the bottom** of the notebook to validate the job.
6. **Return to the main notebook (1demo)** and run the final two SQL queries to confirm tables exist.

---

# 3. Automating Workloads with Scheduling and Triggering

## Purpose

Add tasks, set schedule & triggers, configure parameters, and demonstrate file-triggered job runs.



### Setup

* Run the **starter job** to create the initial two tasks (same as Demo 1).

## Steps

1. **Add a new task**:

   * Notebook: **3.1 — Creating Customer Tables**
   * Type: Notebook
2. **Inspect and explain scheduling options.**
3. **Create a volume** (trigger storage location):

   * Run cell that prints the volume path
4. **Copy-paste the printed path into Job → Scheduling → Trigger location**
5. **Return to the “Ingesting Customer” task** and add **two parameters**:

   * `catalog`
   * `schema`
6. **Run the cell that copies new customer data into the volume**

   * This triggers the job automatically
7. **Monitor the job run** and confirm execution.
8. **Run final SQL queries** to check the tables.

---

# 4. Adding Dependencies, Conditions, and For Loop Tasks

## Purpose

Show how to build complex jobs:

* Task dependencies
* Conditional branching (if/else)
* Parameterized for-loop tasks


## Setup

* Run the starter script

## Steps

### 1. Set Dependencies

* Notebook **Customers Orders Report**
  must depend on:

  * ✔ Ingesting Orders
  * ✔ Ingesting Customers

### 2. Add If–Else Condition

* Evaluate whether `CustomerSalesSummary` contains duplicates
* Set condition for the branching:

  * If duplicates → execute “Drop Duplicates” notebook
  * Else → execute “Transform Customer Sales” notebook

### 3. Add Two Notebook Tasks

* **Drop Customer Duplicates** (run only if duplicates = TRUE)
* **Transform Customer Sales** (run if duplicates = FALSE)
* Set:

  * Condition = **none failed**
  * Correct dependencies

### 4. Add a For-Loop Task

* A notebook will run once per state in a **three-item list**
* Provide the state via the **task parameter**
* Input value = the iterator value

### 5. Run the job

* After completion, run the four SQL queries to show final results.

---

# 6. Error Handling, Retries, and Dashboard Tasks

## Purpose

Demonstrate:

* Task retries
* Correcting code in failed runs
* Running only the failed task
* Creating a dashboard
* Adding a dashboard refresh task


### Setup

* Run the starter job

---

### 1. Add New Task: Transforming Customer Order Data

* Notebook: 6.1 — Transforming Customer Order...
* ✔ Untick the **Retries**  
* Run the job

  * ⚠ **This job will fail on purpose**

---

### 2. Fix the Error

* Open **6.1 notebook**
* Comment out the incorrect function
* Uncomment or paste the correct version
* **Re-run only this one failed task**

  * Emphasize that **you do not need to rerun the entire job**, only the failed task.

---

### 3. Dashboard Creation

* Create a new dashboard (from input)
* Click **Edit Draft**
* ✔ **Publish the dashboard** (critical step)

---

### 4. Add Dashboard Refresh Task

* Add a new task to the job: **Refresh Retail Dashboard**
* Task type: **Dashboard**
* Select the dashboard you just published
* Add the **two required dependencies**
* Run the job

---

# **🎯 Summary of Critical Points**

| Demo  | Special Attention                                                                                                         |
| ----- | ------------------------------------------------------------------------------------------------------------------------- |
| **1** | SQL task uses notebook → change type to Notebook                                                                          |
| **3** | Add “Ingesting Customer” task, set parameters, create volume, set trigger path                                            |
| **4** | Set dependencies → add if/else → add loop task with parameters                                                            |
| **6** | Job fails intentionally → fix notebook → rerun only failed task → create & publish dashboard → add dashboard refresh task |

---