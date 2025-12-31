# Streaming Tables, MV, Views

## Streaming Table

A Streaming Table is continuously and incrementally updated as new data arrives. It is designed for real-time or near–real-time data processing.


> “A Streaming Table behaves like a live pipeline. As soon as new data comes in, the table updates automatically without manual batch runs.”

Key points:

* Incremental, continuous processing
* Built on Structured Streaming
* Automatically maintains checkpoints and state
* Ideal for real-time dashboards and pipelines

## Materialized View

A Materialized View stores the physical results of a query and automatically refreshes when underlying data changes.


> “A Materialized View is like a precomputed snapshot. Databricks keeps it fresh so queries run extremely fast.”

Key points:

* Physically stores data
* Automatically refreshed
* Great for performance-critical reporting
* Works well for aggregates and joins

## View (Simple View)

A View is just a saved SQL query. It does not store data; instead, Databricks recomputes the query every time you read it.


> “A simple View is a logical layer. It’s just a SQL definition, not a stored dataset.”

Key points:

* No stored results
* Always recomputed
* Lightweight and flexible
* Good for abstraction and reusable logic

## Temporary View

A Temporary View is similar to a simple View but exists only within the current Spark session.


> “A Temporary View is like a scratchpad. It only lives while your session is active. When your cluster shuts down, the view disappears.”

Key points:

* Exists only for the duration of the session
* Not stored in the metastore or Unity Catalog
* Useful for quick exploration or intermediate steps
* Not visible across different clusters or users

