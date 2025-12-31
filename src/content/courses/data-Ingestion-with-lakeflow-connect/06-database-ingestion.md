
#  Database Ingestion

This slide explains how **Lakeflow Connect ingests data from traditional databases**—whether they are on-prem or running in the cloud—into **Streaming Delta Tables** inside Databricks.

The whole pipeline is fully managed, and it uses both classic compute and serverless compute behind the scenes.

---

# 🔍 Step-by-Step Walkthrough (Following the Numbered Icons)

## 1️⃣ Credentials – Stored in Unity Catalog

“Everything starts with credentials.
The ingestion pipeline securely retrieves the database credentials from Unity Catalog.
This ensures that authentication is centralized, governed, and not hard-coded by engineers.”

---

## 2️⃣ Connecting to the Traditional Database

Once Lakeflow retrieves the credentials, it uses a *Classic Compute Declarative Pipeline*—called the **Ingestion Gateway**—to connect to your actual database.
This can be any traditional system: Oracle, SQL Server, Postgres, MySQL, etc., whether on-prem or in the cloud.


“This gateway is responsible for performing the actual extraction from the database.”

---

## 3️⃣ Staging & State Management (Unity Catalog Volume)

After the data is extracted, Lakeflow Connect stores the state and staging files in a Unity Catalog Volume.
This is where Lakeflow tracks what has already been ingested—so it can support incremental loads, CDC, and recover from failures.


Think of this as the control room: where checkpoints, offsets, metadata, and intermediate files are stored.

---

## 4️⃣ Managed Ingestion – Serverless Declarative Pipeline

Then comes the serverless part.
A **Serverless Declarative Pipeline** takes the staged data, processes it, and writes it into **Streaming Delta Tables**.

This means:

* No clusters
* No infra to manage
* Scaling and retries handled automatically

This is the transformation + delivery stage.

---

## Final Output → Streaming Delta Tables

The end result is that your database is continuously synced into Delta Lake, using Streaming Delta Tables.
You get incremental, reliable, near-real-time ingestion without managing any infrastructure.

---

# 🧠 **Summary You Can Read Out Loud:**

So to summarize what this diagram shows:
Lakeflow Connect uses a combination of classic compute and serverless pipelines to securely pull data from traditional databases. It reads credentials from Unity Catalog, extracts the data, stores the ingestion state in Unity Catalog Volumes, and then a serverless pipeline delivers it into Streaming Delta Tables.

This gives you a fully managed, end-to-end ingestion process for enterprise databases—secure, reliable, and scalable.

---