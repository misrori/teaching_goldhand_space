
# Practise Questions
## 1. What is the main purpose of a Lakeflow Job in Databricks?

**A.** Storing raw data in Unity Catalog  

**B.** Orchestrating and automating end-to-end data and AI workflows  

**C.** Managing user permissions and access control  

**D.** Replacing all notebooks with SQL-only pipelines  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Orchestrating and automating end-to-end data and AI workflows**  
**Explanation:**  
A Lakeflow Job coordinates multiple tasks (notebooks, SQL, scripts, pipelines) and runs them in the right order on a schedule or trigger to implement full pipelines.
</details>

***

## 2. In a Lakeflow Job, what is a task?

**A.** A full application deployed on a cluster  

**B.** A single step in the workflow, such as running a notebook or SQL query  

**C.** A separate Databricks workspace  

**D.** A Delta table with metadata  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — A single step in the workflow**  
**Explanation:**  
Tasks represent individual units of work inside a job, for example ingest, transform, validate, or publish, and are connected to form the job’s DAG.
</details>

***

## 3. Which compute type is best suited for ad-hoc analysis and development, not for cost-efficient production jobs?

**A.** Job clusters  

**B.** Serverless  

**C.** Interactive (all-purpose) clusters  

**D.** SQL Warehouse  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Interactive (all-purpose) clusters**  
**Explanation:**  
Interactive clusters are shared and ideal for exploration and development, but keeping them running continuously is usually not cost-efficient for production workloads.
</details>

***

## 4. Why are job clusters often preferred over interactive clusters for production Lakeflow Jobs?

**A.** They support only SQL workloads  

**B.** They automatically terminate when the job finishes  

**C.** They cannot scale automatically  

**D.** They are required for Unity Catalog access  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — They automatically terminate when the job finishes**  
**Explanation:**  
Job clusters are created for a specific run and shut down afterwards, which reduces idle time and typically lowers compute cost for production pipelines.
</details>

***

## 5. What is a key benefit of using serverless compute for Lakeflow Jobs?

**A.** Manual cluster sizing and capacity planning  

**B.** No support for autoscaling  

**C.** Fully managed infrastructure with faster startup and lower operational overhead  

**D.** It disables monitoring to save costs  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Fully managed infrastructure with faster startup and lower operational overhead**  
**Explanation:**  
Serverless lets Databricks manage the infrastructure, providing quick startup, autoscaling, and simplified operations, which can reduce total cost of ownership.
</details>

***

## 6. What is a key characteristic of SQL Warehouse as a compute option in Databricks?

**A.** It only runs Python code  

**B.** It is optimized for high-concurrency SQL and BI workloads  

**C.** It cannot be used by Lakeflow Jobs  

**D.** It does not support autoscaling  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Optimized for high-concurrency SQL and BI workloads**  
**Explanation:**  
SQL Warehouses are purpose-built for SQL queries, dashboards, and BI, offering concurrency, autoscaling, and features like intelligent workload management.
</details>

***

## 7. What is the main difference between a schedule and a trigger in Lakeflow Jobs?

**A.** Schedules are manual; triggers are automatic  

**B.** Schedules are time-based; triggers can be time- or event-based  

**C.** Schedules only apply to development jobs  

**D.** Triggers can only be used with SQL tasks  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Schedules are time-based; triggers can be time- or event-based**  
**Explanation:**  
Schedules run jobs at specific times, while triggers can fire based on time or data events, such as table updates or new files.
</details>

***

## 8. Which scenario is best suited for a table-update trigger in Lakeflow Jobs?

**A.** Running a job every Monday at 8 AM  

**B.** Running a job whenever any cluster becomes idle  

**C.** Running a job as soon as upstream Delta tables receive new data  

**D.** Running a job when a user opens a notebook  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Running a job as soon as upstream Delta tables receive new data**  
**Explanation:**  
Table-update triggers fire when Unity Catalog tables change, ideal for reactive pipelines that must process data immediately after it lands.
</details>

***

## 9. Which configuration option helps make a Lakeflow Job more resilient to transient failures?

**A.** Using only interactive clusters  

**B.** Setting retries and retry intervals on tasks  

**C.** Disabling all error handling  

**D.** Removing dependencies between tasks  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Setting retries and retry intervals on tasks**  
**Explanation:**  
Configuring retries and delays allows tasks to recover from temporary issues such as brief network or service interruptions.
</details>

***

## 10. In a Lakeflow Job, how are dependencies between tasks typically represented and managed?

**A.** As SQL foreign-key constraints  

**B.** As a directed acyclic graph (DAG) showing which tasks run after others  

**C.** As a single linear execution list with no branching  

**D.** As cluster tags in the workspace  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — As a directed acyclic graph (DAG)**  
**Explanation:**  
Lakeflow Jobs visualize task dependencies as a DAG, letting you define branches, order, and conditions that control how the workflow executes.
</details>

---