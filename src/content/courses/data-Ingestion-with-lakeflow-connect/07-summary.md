


# Summary

# LakeFlow & LakeFlow Connect

* LakeFlow is Databricks’ end-to-end data ingestion and data engineering framework designed to simplify how data moves into the Lakehouse.
* **LakeFlow Connect** provides **native connectors** that allow seamless ingestion from SaaS applications, databases, and streaming systems into the Databricks Lakehouse.
* It automates schema inference, schema evolution, and scalable ingestion without heavy engineering overhead.

---

# Autoloader

* **Autoloader** is a Databricks ingestion tool optimized for streaming and incremental file ingestion from cloud storage (e.g., S3, ADLS, GCS).
* Key features:

  * Automatic schema inference
  * Schema evolution (`rescued_data` column for unexpected fields)
  * Scalability for millions of files using cloud-native file notification services
  * Supports both **streaming** and **incremental batch** ingestion



# Ingestion Methods Covered

We reviewed several ingestion approaches in Databricks:

## 1. LakeFlow Connect

* High-level, automated ingestion from external systems
* Handles both batch and streaming pipelines
* Supports easy configuration and monitoring

## 2. Autoloader

* Best for **incremental file-based ingestion**
* Works with streaming and batch modes

## 3. COPY INTO

* Command-based ingestion for loading data **on demand** into Delta tables
* Easy for repeated loads or ad-hoc ingestion tasks
* Supports schema evolution and incremental logic

## 4. CTAS (CREATE TABLE AS SELECT)

* Not an ingestion tool, but used to **create new managed tables** based on existing data
* Useful when transforming or reorganizing data after ingestion
