# Cloud Computing Introduction
Once you've learned to write Python code, the next question is: **Where does that code run?** In the modern world, most complex data processing doesn't happen on your laptop, but in "The Cloud."


## Local Execution vs On-Prem vs Cloud

### Local Execution
Running code directly on your personal computer. It's fast for development but limited by your hardware (RAM, CPU).

### On-Prem (On-Premises)
The company owns and maintains their own physical servers in their own building. High control, but high cost and difficult to scale.

### Cloud
Renting compute power and storage from providers like AWS, Azure, or Google Cloud. You pay only for what you use, and you can scale to thousands of machines instantly.

## Virtual Machines (VMs)

A Virtual Machine is a digital version of a physical computer. In the cloud, you can "spin up" a VM (an EC2 instance in AWS, or a Compute Engine in GCP) and run your Python scripts there as if it were your own laptop.

## Cloud Storage

Instead of saving files to your hard drive, we use cloud storage services like **S3** (AWS) or **Blob Storage** (Azure). These are essentially infinite "folders" accessible from anywhere in the world.

## Big Data Ecosystem

When your data is too big for a single machine, we use distributed systems.

### Databricks
A unified platform for data engineering and AI. It provides a collaborative "notebook" environment (similar to what you've likely seen in Python) but runs on top of massive cloud clusters.

### Apache Spark
The engine behind Databricks. It allows Python to process terabytes of data by splitting the work across hundreds of servers simultaneously. In Python, we use `PySpark` to interact with it.

### Unity Catalog
A governance layer that ensures everyone in a company sees the same data, follows the same security rules, and can audit who accessed what.

## Code Versioning and Collaboration with Git

As your projects grow, you need a way to track changes and collaborate with others. **Git** is the industry-standard version control system.

- **Commits**: Snapshots of your code at a specific time.
- **Branches**: Running parallel versions of a project (e.g., "feature-x" branch vs. "main").
- **Collaboration**: Platforms like GitHub or GitLab allow teams to review and merge each other's code smoothly.

---

## 💡 Think About It

Imagine you are building a system to analyze every credit card transaction in the world to find fraud. 
1. Why would **Local Execution** fail here?
2. How would **Apache Spark** help split this massive task?
3. Why is **Git** crucial if 50 developers are working on the fraud detection logic at the same time?
