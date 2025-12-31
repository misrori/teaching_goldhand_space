
# Job schedules and triggers

Schedules and triggers control **when** your Lakeflow Job runs. Instead of always starting manually, you set rules so the job fires automatically.

***

# Main trigger types 🔔

- **Scheduled (time‑based)**  
  - Run the job at specific times: daily at 6 AM, every hour, every Monday, etc.  
  - Uses cron‑like syntax or simple repeating intervals.  
  - Good for batch ETL or reports with predictable timing.

- **Table update (event‑based)**  
  - Job starts automatically when one or more Unity Catalog tables are updated.  
  - You pick: run after *any* table updates, or only when *all* selected tables are updated.  
  - Great for real‑time pipelines where you want to process data as soon as it lands, not on a fixed schedule.  
  - Advanced options: minimum time between triggers, wait after last change (to avoid too‑frequent runs or partial data).

- **File arrival (event‑based)**  
  - Job runs when new files appear in a monitored Unity Catalog storage location.  
  - No more guessing when files land; the job triggers immediately.  
  - Also supports minimum time between triggers and wait after last change.

- **Continuous**  
  - Job runs nonstop in a loop.  
  - Useful for streaming workloads or continuous data ingestion.

- **Manual**  
  - No automatic trigger; you or an external tool (like Airflow, API call) starts the job on demand.

***

# Key teaching points 🎯

- "Scheduled triggers = time‑based; event triggers (table update, file arrival) = data‑based."  
- "Event triggers eliminate wasted compute from running jobs when data isn't ready yet."  
- "With table update triggers, your pipeline runs the moment fresh data lands, making insights faster and fresher."  
- "You can combine multiple triggers on one job, or have multiple jobs with different triggers for different scenarios."

***

# Quick comparison table 📊

| Trigger type | When it fires | Best use case |
|--------------|---------------|---------------|
| Scheduled | At fixed times (cron) | Batch ETL, nightly reports |
| Table update | When Unity Catalog tables change | Real‑time downstream processing |
| File arrival | When new files land in storage | Ingest as files arrive |
| Continuous | Always running (loop) | Streaming pipelines |
| Manual | On‑demand or external orchestrator | Dev/testing, ad‑hoc runs |

---

