
# Labs

This module consists of two main parts:

* **Continuous Integration (CI)** — the primary focus
* **Continuous Development / Deployment (CD)** — a shorter final section

---

# 2.1 — Modularizing PySpark Code


Prepare the lab environment and demonstrate how to refactor PySpark notebooks into modular, reusable functions.


✔ Run the **classroom setup** to create required catalogs.
✔ Use **Labuser…** compute.


1. **Run the setup script**

   * Creates catalogs, schemas, and all required assets.
2. **Open the provided notebook** and review the initial “non-modular” code.
3. **Explain typical problems** with non-modular notebooks:

   * Hard-coded logic
   * Inconsistent structure
   * Difficult to test and maintain
4. **Run the provided modularized version**

   * Shows all logic separated into **functions**.
   * Explain:

     * Function for reading data
     * Function for transformations
     * Function for writes
5. **Execute all cells**

   * No edits required.
6. **Highlight the key takeaway:**
   CI workflows depend on **clean, modular, testable** code.

---

# 2.3 — Project Setup Exploration


Explore the project structure created during setup: catalogs, schemas, and initial data.


✔ Make sure setup already executed in Demo 2.1.


1. **Browse the workspace folder** created for the project.
2. **Inspect the catalogs** (dev, stage, prod) to confirm they were created.
3. **Navigate volumes → CSV files** to see the raw data.
4. **Explain the basic CI project structure**:

   * Source code
   * Tests folder
   * Data assets
   * Configurations
5. **Nothing to modify** — this is a quick exploration lab.

---

# 2.4 — Creating and Executing Unit Tests


Create Python unit tests with pytest and run them.
Introduce the concept of expected failures.



1. **Open the tests folder** in the project.
2. **Create/inspect the test file** with multiple test functions.
3. **Explain pytest basics:**

   * Tests must start with `test_...`
   * Assertions describe expected behavior
4. **Run tests using pytest**

   * One of the tests is **intentionally failing**
   * Explain:

     * Why it fails
     * This is normal and demonstrates real CI behavior


# 2.6 — Performing Integration Tests


Run integration tests that validate the pipeline end-to-end and inspect results.


✔ Use the existing project + pipeline.


1. **Open the integration test notebook/pipeline.**
2. **Run the pipeline as provided.**
3. **Explain how integration tests differ from unit tests:**

   * They run against actual tables & data.
4. **Examine results in the pipeline UI:**

   * Number of rows processed
   * DAG structure
   * Table changes
5. **Optional:**

   * You *can* change the source/target from `prod` to `dev` or `stage`,
   * BUT doing so may cause configuration conflicts — so better **avoid** unless needed.
6. **Explain test logic:**

   * Tests validate row counts
   * Tests confirm schema behavior
7. **Show where test output appears** in the pipeline run summary.

---

# 3.1 — Deploying Databricks Assets


Deploy a Databricks job, run it, inspect the result, and review SDK-based deployment scripts.


✔ All previous CI labs completed.


1. **Create a new Databricks Job**

   * Use instructions in the notebook.
2. **Attach the correct notebook or pipeline asset.**
3. **Run the job once.**
4. **Explain the output:**

   * Job run history
   * Task execution
   * Logs
   * Table outputs
5. **Return to the “classroom setup” cell**

   * Demonstrate the **Databricks SDK** code that performs automated deployment.
   * You don’t need to modify — only explain how the SDK deploys:

     * Jobs
     * Pipelines
     * Configurations
6. **Finish by summarizing CI/CD connection:**

   * CI → test + validate code
   * CD → deploy assets automatically

