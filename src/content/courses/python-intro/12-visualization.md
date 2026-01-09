# Data Visualization


Visualization is key to understanding your data. In this module, we will explore:
1.  **Databricks Built-in Plotting** (The easiest way)
2.  **Pandas Plotting** (Quick & Simple)
3.  **Seaborn** (Advanced & Beautiful)

First, let's setup our data:
```python
import pandas as pd
import numpy as np
import seaborn as sns # We will use this later

# Load a sample dataset
df = sns.load_dataset('penguins')
display(df)
```

---

## Built-in Plotting

Databricks has a powerful built-in visualization tool.
When you run a cell that outputs a DataFrame using `display(df)`, you will see a **"+"** sign or a **Chart icon** next to the "Table" tab in the result area.

### Steps to create a plot:
1.  Run `display(df)`.
2.  Click the **+** icon button > **Visualization**.
3.  Choose your **Visualization Type** (e.g., Bar, Scatter, Line).
4.  Configure **X Column** and **Y Column**.

This requires **no extra code**, just point and click!

---

## Plot Options

When configuring a built-in plot, you have many options:
-   **Keys (X-axis)**: The data to group by.
-   **Values (Y-axis)**: The values to measure (Count, Sum, Average).
-   **Group By**: Color-code bars/lines by a third category.
-   **Labels**: Customize titles and axis names.

> [!TIP]
> Built-in plots are interactive! You can hover over data points to see details.

---

## Pandas Plotting

Pandas uses the `matplotlib` library under the hood to provide quick plots directly from a DataFrame.

```python
# Simple Line Plot
df['bill_length_mm'].plot()

# Histogram of a specific column
df['body_mass_g'].plot(kind='hist', bins=20, title='Body Mass Distribution')
```

Common `kind` arguments:
-   `'line'` (default)
-   `'bar'`
-   `'hist'` (histogram)
-   `'box'` (boxplot)
-   `'scatter'` (requires x and y columns)

```python
# Scatter plot using Pandas
# Note: You usually need matplotlib.pyplot to show it in some script environments, 
# but in notebooks, it often displays automatically.
df.plot(kind='scatter', x='bill_length_mm', y='bill_depth_mm')
```

---

## Seaborn

Seaborn is a popular library built on top of Matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.

### Scatter plot

A scatter plot shows the relationship between two numeric variables.

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Basic scatter plot
sns.scatterplot(data=df, x='bill_length_mm', y='bill_depth_mm')
plt.show()
```

### Adding a 3rd dimension (Color/Hue)
You can use the `hue` parameter to color points by a categorical column (e.g., `species`).

```python
# Scatter plot with Hue
sns.scatterplot(data=df, x='bill_length_mm', y='bill_depth_mm', hue='species')
plt.title("Penguin Bill Dimensions by Species")
plt.show()
```

#### 🛠️ Task: Create a Seaborn Plot
1.  Load the 'tips' dataset: `tips = sns.load_dataset('tips')`
2.  Create a scatter plot showing `total_bill` on X and `tip` on Y.
3.  Color the points by `time` (Lunch vs Dinner).

<details>
<summary>💡 Hint</summary>
Use `sns.scatterplot(data=tips, x='...', y='...', hue='...')`.
</details>

<details>
<summary>✅ Solution</summary>

```python
tips = sns.load_dataset('tips')

sns.scatterplot(data=tips, x='total_bill', y='tip', hue='time')
plt.title("Tips vs Total Bill by Time")
plt.show()
```
</details>
