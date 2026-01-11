
# Pandas excercise 🐼

In this section, we will use the **Titanic** dataset, a standard dataset in data science. It contains information about passengers, their age, ticket class, fare, and whether they survived.

## 📊 Dataset Structure

We will assume the data is loaded into a DataFrame named `df`.

| Column | Description |
| --- | --- |
| `survived` | 0 = No, 1 = Yes |
| `pclass` | Ticket class (1 = 1st, 2 = 2nd, 3 = 3rd) |
| `sex` | Sex of the passenger |
| `age` | Age in years |
| `fare` | Passenger fare |
| `embark_town` | Port of Embarkation (Southampton, Cherbourg, Queenstown) |

> 
> You can load this in a real notebook using:<br>
> import seaborn as sns <br>
> df = sns.load_dataset('titanic')

## 🛠️ Data Tasks

### Task 1: Load and Explore

**Objective:** Load the dataset (using the code below for the mock data) and print:

1. The dimensions of the table (`shape`).
2. The data types (`info()`).
3. The first 5 rows.

<details>
<summary>✅ Solution (Mock Data included)</summary>

```python
import pandas as pd
import numpy as np

# --- MOCK DATA GENERATION (Run this once) ---
data = {
    'survived': [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
    'pclass': [1, 3, 3, 1, 3, 2, 3, 1, 2, 2],
    'sex': ['female', 'male', 'female', 'male', 'male', 'female', 'male', 'female', 'female', 'male'],
    'age': [29, 22, 4, 45, 19, np.nan, 30, 50, 24, 60],
    'fare': [211.3, 7.25, 7.9, 53.1, 8.0, 13.0, 7.8, 146.5, 26.0, 10.5],
    'embark_town': ['Southampton', 'Southampton', 'Southampton', 'Southampton', 'Queenstown', 'Queenstown', 'Cherbourg', 'Cherbourg', 'Southampton', 'Cherbourg']
}
df = pd.DataFrame(data)
# ---------------------------------------------

print(df.shape)
print(df.info())
print(df.head())

```

</details>

### Task 2: Handling Missing Data

**Objective:** The `age` column has missing values (`NaN`).

1. Check how many missing values are in each column (`isnull().sum()`).
2. Fill the missing ages with the **average age** of the entire dataset.

<details>
<summary>✅ Solution</summary>

```python
print("Missing before:")
print(df.isnull().sum())

# Fill NaN in age with mean
mean_age = df['age'].mean()
df['age'] = df['age'].fillna(mean_age)

print("\nMissing after fill:")
print(df['age'].isnull().sum())

```

</details>

### Task 3: Filtering (Selection)

**Objective:** Find passengers who are:

1. **Female** AND
2. Traveled in **1st Class** (`pclass == 1`).
Store them in a variable `rich_women` and print the count.

<details>
<summary>✅ Solution</summary>

```python
rich_women = df[ (df['sex'] == 'female') & (df['pclass'] == 1) ]

print(rich_women)
print(f"Count: {len(rich_women)}")

```

</details>

### Task 4: Basic Grouping

**Objective:** What was the survival rate based on Sex?
Group by `sex` and calculate the **mean** of the `survived` column.
*(Note: Since survived is 0/1, the mean represents the percentage, e.g., 0.74 = 74%)*

<details>
<summary>✅ Solution</summary>

```python
survival_by_sex = df.groupby('sex')['survived'].mean()
print(survival_by_sex)

```

</details>

### Task 5: Grouping by Multiple Columns

**Objective:** Does class matter?
Group by **both** `pclass` and `sex`, then calculate the mean survival rate.

<details>
<summary>✅ Solution</summary>

```python
print(df.groupby(['pclass', 'sex'])['survived'].mean())

```

</details>

### Task 6: Advanced Aggregation (`.agg`)

**Objective:** We want to know more stats about the `fare`.
Group by `pclass` and calculate three things for the `fare` column:

1. Minimum fare (`min`)
2. Maximum fare (`max`)
3. Average fare (`mean`)
Use the `.agg()` function.

<details>
<summary>✅ Solution</summary>

```python
fare_stats = df.groupby('pclass')['fare'].agg(['min', 'max', 'mean'])
print(fare_stats)

```

</details>

### Task 7: Feature Engineering (Creating Values)

**Objective:** Categorize passengers into "Adult" and "Child".
Create a new column `is_child`. If `age < 18`, it should be `True`, otherwise `False`.
Then, Calculate survival rate for children vs adults.

<details>
<summary>✅ Solution</summary>

```python
# Create new column
df['is_child'] = df['age'] < 18

# Check survival
print(df.groupby('is_child')['survived'].mean())

```

</details>

### Task 8: Visualization - Bar Chart (Pandas)

**Objective:** Visualizing the number of passengers in each class.

1. Count the values in `pclass`.
2. Plot a **Bar Chart** directly using Pandas.

<details>
<summary>✅ Solution</summary>

```python
import matplotlib.pyplot as plt

# value_counts() gives the frequency
df['pclass'].value_counts().sort_index().plot(kind='bar', color='skyblue')

plt.title("Passengers by Class")
plt.xlabel("Class")
plt.ylabel("Count")
plt.show()

```

</details>

### Task 9: Visualization - Histogram (Pandas)

**Objective:** Visualize the distribution of ages.
Create a **histogram** of the `age` column with 5 bins.

<details>
<summary>✅ Solution</summary>

```python
df['age'].plot(kind='hist', bins=5, color='salmon', edgecolor='black')

plt.title("Age Distribution")
plt.xlabel("Age")
plt.show()

```

</details>

### Task 10: Advanced Visualization (Scatter/Correlation)

**Objective:** Explore the relationship between **Age** and **Fare**.
Create a Scatter Plot.

* X-axis: Age
* Y-axis: Fare
* (Bonus) Color the points by `survived` (if using Seaborn or advanced Pandas mapping).

<details>
<summary>✅ Solution</summary>

```python
# Basic Pandas Scatter
df.plot(kind='scatter', x='age', y='fare', c='blue', alpha=0.6)

plt.title("Age vs Fare")
plt.show()

# --- ALTERNATIVE: Interactive Plotly Version (Bonus) ---
# import plotly.express as px
# fig = px.scatter(df, x='age', y='fare', color='survived', title="Age vs Fare")
# fig.show()

```

</details>