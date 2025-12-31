# Stream Joins

## Streaming Table Joined to a Static Table

A **stream–static join** is the simplest type of streaming join.
Here, one side is continuously arriving data (the stream), while the other is a fixed table (the static dataset).

During the lecture, you can say:

> “When we join a streaming table to a static table, Spark treats the static table as a broadcastable lookup table. The stream keeps arriving, and for every incoming record we perform a fast, deterministic lookup.”

How it works:

* The static table is loaded once at the beginning of the query.
* Spark may broadcast it to all executors for performance.
* Every new streaming record is matched against the static table.
* No watermarking or time-window logic is needed because the static table does not change.

Use cases:

* Enriching streaming events with reference data
* Adding dimensions (like product names, regions, categories)
* Fast lookups with high throughput

Key thing to highlight:

> “A stream-static join is always deterministic. There is no state growth over time because the static side does not change.”

---

## Streaming Table Joined to a Streaming Table using a Materialized View

A **stream–stream join** normally requires state, watermarks, and time constraints.
But when one of the streams is turned into a **materialized view**, Databricks simplifies the logic.

Explain it like this:

> “If one of the streams is materialized into a materialized view, Spark treats that materialized view almost like a slowly-changing lookup table. The materialized view stays fresh, so the streaming table can join against it without holding huge amounts of state.”

How it works:

* The second stream is ingested and made queryable as a materialized view
* The materialized view is automatically refreshed as new data arrives
* The streaming table performs a join against that maintained view
* Reduced need for complex watermarks or long retention windows
* Databricks avoids growing unbounded join state

Why it works:

* The materialized view provides **consistent, up-to-date snapshots**
* Streaming join logic becomes more similar to a stream–static join
* The MV hides the fact that the data originally came from a stream

Use cases:

* When one stream is high-velocity and the other represents more stable dimensions or facts
* When you want simplified semantics but still need “fresh” data
* Incremental joins where one side should behave like a maintained table

During the lecture, you can say:

> “Materialized views turn a fast-moving stream into something that behaves like a stable table. This reduces complexity and makes joins efficient.”

---

## Streaming to Streaming Join (Incremental Stream-to-Stream Join)

This is the most complex case.
Both inputs are unbounded streams, and both are continuously producing new data.

Explain it like this:

> “A true stream-to-stream join requires Spark to maintain state from both sides. The join isn't instantaneous because each stream may deliver matching records at different times.”

How it works:

* Spark buffers state for both sides of the join
* Records are matched when corresponding keys arrive
* Watermarks control how long Spark keeps unmatched records
* Any data that arrives earlier or later than expected may be dropped depending on watermark configuration

Characteristics:

* Uses event-time semantics
* Requires specifying time conditions (e.g., within 10 minutes)
* Requires watermarks on both sides
* Stateful and memory-intensive

Typical join conditions:

* Time-bounded joins:

  * e.g., `streamA.event_time = streamB.event_time`
  * or `streamA.time BETWEEN streamB.time - 5 minutes AND streamB.time + 5 minutes`
* Key-based joins with temporal constraints

During the lecture, say:

> “With two streams, we cannot assume they arrive at the same time. Spark must hold data in memory, buffer records, and release them when the watermark says it’s safe. This is what makes stream-stream joins more complex.”

Use cases:

* Matching events across two systems
* User activity stream joined with clickstream events
* Fraud detection patterns
* IoT sensor correlation

Key difference:

> “Stream-stream joins require time and watermark logic. Any mismatch or late data can cause records to be dropped.”
