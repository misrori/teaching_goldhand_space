

# SaaS Ingestion

This slide explains **how Databricks Lakeflow Connect ingests data from SaaS applications**—things like Salesforce, ServiceNow, Workday, or Google Analytics—into **Streaming Delta Tables** using a **serverless, fully managed pipeline**.

---

# 🌟 **High-Level Story**

The idea is:

> *Lakeflow Connect acts as a bridge between external SaaS systems and your Delta Lake. It securely retrieves data, transforms it, and continuously loads it into streaming Delta tables—all without you managing any infrastructure.*

---

# 🔍 Step-by-Step Explanation (Following the Numbered Icons)

## 1️⃣ Credentials (Unity Catalog)

* The ingestion process starts by retrieving **credentials** securely stored in **Unity Catalog**.
* These might be API keys, OAuth tokens, usernames, or passwords.
* You don’t hardcode or store credentials manually—Databricks retrieves them securely.

**In your speech:**
“Step one: Lakeflow retrieves the required credentials directly from Unity Catalog. This ensures everything is governed, secure, and centrally managed.”

---

## 2️⃣ Lakeflow Connect Calls the SaaS Service

* Using those credentials, Lakeflow Connect communicates with external SaaS applications:

  * Salesforce
  * ServiceNow
  * Workday
  * Google Analytics
  * Any other supported managed connector

It uses a **serverless job** called *Declarative Pipelines* to reach out to the external API or endpoint.

**In your speech:**
“Step two: Lakeflow Connect uses a serverless job to reach out to the SaaS system. It calls the API or endpoint, fetches the data, and handles connectivity, retries, and scaling automatically.”

---

## 3️⃣ Data Lands in Streaming Delta Tables

* After pulling the data, the service **transforms it** into Delta format.
* It then writes it into a **Streaming Delta Table**.
* This means the data is continuously updated—perfect for real-time dashboards, ML models, or downstream pipelines.

**In your speech:**
“Step three: the ingested data is transformed and stored into a Streaming Delta Table, so your lakehouse always has fresh, up-to-date SaaS data.”

---

# 🧠 Summary

So overall, Lakeflow Connect is a fully managed ingestion service.
It securely retrieves credentials from Unity Catalog, connects to external SaaS systems, and then streams that data directly into Delta tables using serverless declarative pipelines.
You don’t manage infrastructure, you don’t build custom connectors, and you get reliable, continuous data ingestion into the lakehouse.

---


