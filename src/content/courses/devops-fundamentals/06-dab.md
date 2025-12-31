# Databricks Asset Bundles (DAB)

## What is a DAB?

A **Databricks Asset Bundle (DAB)** is a **packaged collection of all assets in a Databricks project** that can be deployed together in a workspace. This allows teams to move notebooks, Python modules, jobs, libraries, and other configuration files as a **single, versioned, and deployable unit**.

During the lecture:

> “Think of DAB as a project suitcase. Everything needed for a pipeline—code, notebooks, jobs, and libraries—is packed together so it can be deployed reliably.”

---

## How DAB Works

1. **Bundle Creation** – Collect all project assets in a structured format.
2. **Versioning** – Assign a version to the bundle so deployments are reproducible.
3. **Deployment** – Deploy the bundle to a Databricks workspace (dev, staging, prod) using automation pipelines.
4. **Integration** – Works with CI/CD pipelines and version control (Git) to ensure changes flow smoothly from development to production.

---

## Benefits of Using DAB

* **Consistency** – All related assets are deployed together; nothing is missed.
* **Reproducibility** – Versioned bundles allow rollback to previous stable versions.
* **Automation** – Integrates with CI/CD pipelines for smooth deployment.
* **Scalability** – Supports multi-environment deployments (dev → staging → prod) reliably.

During the lecture:

> “DAB ensures that your project is deployed exactly as intended, without missing any dependencies or configuration. It’s essential for production-grade data engineering pipelines.”

---