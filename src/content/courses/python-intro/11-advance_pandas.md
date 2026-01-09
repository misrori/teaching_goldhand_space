# Advanced Pandas


In this section, we will dive deeper into `pandas`, learning how to ingest data, filter it, summarize it, and handle missing values.

First, import pandas:
```python
import pandas as pd
import numpy as np
```

---

## Reading Data

Pandas supports reading from many formats. The most common is CSV (Comma Separated Values).

```python
# Reading a CSV file
df = pd.read_csv("data/filepath.csv")

# Reading from a dictionary (for examples)
data = {
    'product_name': ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Laptop'],
    'price': [1000, 25, 50, 200, 1200],
    'quantity': [5, 10, 8, 4, 2],
    'category': ['Electronics', 'Accessories', 'Accessories', 'Electronics', 'Electronics']
}
df = pd.DataFrame(data)
display(df)
```

### Other common readers:
- `pd.read_excel()`
- `pd.read_json()`
- `pd.read_parquet()`
- `pd.read_sql()`

---

## Renaming Columns

Often data comes with messy column names. You can rename them using a dictionary mapping `{old_name: new_name}`.

```python
# Rename 'product_name' to 'Product' and 'price' to 'Cost'
df_renamed = df.rename(columns={'product_name': 'Product', 'price': 'Cost'})

print(df_renamed.columns)
```

#### 🛠️ Task: Rename Columns
Create a DataFrame with columns `['a', 'b']`. Rename them to `['Alpha', 'Beta']` and print the result.

<details>
<summary>💡 Hint</summary>
Use `.rename(columns={'old': 'new'})`.
</details>

<details>
<summary>✅ Solution</summary>

```python
df_test = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
df_test = df_test.rename(columns={'a': 'Alpha', 'b': 'Beta'})
print(df_test)
```
</details>

---

## Filtering

Filtering (or subsetting) allows you to select rows based on conditions.

```python
# Select rows where price is greater than 100
expensive_items = df[df['price'] > 100]

# Select rows where category is 'Electronics'
electronics = df[df['category'] == 'Electronics']
```

---

## Pandas Boolean Operators

When filtering with multiple conditions, Python's standard `and`, `or`, `not` **do not work**. You must use bitwise operators:

- **`&`** (AND)
- **`|`** (OR)
- **`~`** (NOT)

> [!IMPORTANT]
> You **must** wrap each condition in parentheses `()`.

```python
# Price > 100 AND Category is Electronics
filtered = df[(df['price'] > 100) & (df['category'] == 'Electronics')]

# Price < 50 OR Quantity > 8
others = df[(df['price'] < 50) | (df['quantity'] > 8)]
```

#### 🛠️ Task: Complex Filter
Filter the main `df` to find items that are named 'Laptop' OR have a price less than 30.

<details>
<summary>💡 Hint</summary>
Use `(condition1) | (condition2)` and parentheses.
</details>

<details>
<summary>✅ Solution</summary>

```python
result = df[(df['product_name'] == 'Laptop') | (df['price'] < 30)]
display(result)
```
</details>

---

## Aggregate Functions

You can calculate summary statistics for columns.

```python
print(df['price'].mean())   # Average price
print(df['price'].max())    # Maximum price
print(df['price'].min())    # Minimum price
print(df['price'].sum())    # Total sum
print(df['price'].count())  # Count of non-null values
```

---

## Group By

`groupby` helps you aggregate data based on categories (like SQL `GROUP BY` or Excel Pivot Tables).

Step 1: Group by a column.
Step 2: select the column to aggregate.
Step 3: apply the aggregation function.

```python
# Average price per Category
avg_price_by_cat = df.groupby('category')['price'].mean()
print(avg_price_by_cat)

# Total quantity per Category
total_qty = df.groupby('category')['quantity'].sum()
```

#### 🛠️ Task: Grouping
Group by `category` and find the **max** `price` for each category.

<details>
<summary>💡 Hint</summary>
`groupby('...')['...'].max()`
</details>

<details>
<summary>✅ Solution</summary>

```python
max_prices = df.groupby('category')['price'].max()
print(max_prices)
```
</details>

---

# Reset Index

When you filter or group data, the index often gets messy or becomes the grouped column. `reset_index()` moves the index back into a standard column and resets the index to default integers (0, 1, 2...).

```python
# After groupby, 'category' is the index
avg_df = df.groupby('category')['price'].mean()

# Reset index to make 'category' a normal column again
avg_df = avg_df.reset_index()
display(avg_df)
```

## Sorting

You can sort a DataFrame by one or more columns.

```python
# Sort by Price ascending (default)
sorted_df = df.sort_values('price')

# Sort by Price descending
sorted_desc = df.sort_values('price', ascending=False)
```

---

# NaN (Missing Data)

Missing data is represented as `NaN` (Not a Number) or `None`.

```python
df_missing = pd.DataFrame({
    'A': [1, 2, np.nan],
    'B': [5, np.nan, np.nan],
    'C': [1, 2, 3]
})
```

## Dropping NaN

You can remove rows (or columns) that contain missing values using `.dropna()`.

```python
# Drop rows that have ANY missing values
clean_rows = df_missing.dropna()

# Drop rows where ALL values are missing
clean_all = df_missing.dropna(how='all')
```

## Impute Columns (Filling NaN)

Instead of dropping data, you can fill it with a value (Imputation).

```python
# Fill all NaNs with 0
filled_0 = df_missing.fillna(0)

# Fill with the mean of the column
mean_val = df_missing['A'].mean()
filled_mean = df_missing['A'].fillna(mean_val)
```

#### 🛠️ Task: Handling Nulls
Create a DataFrame with some NaNs.
1. Create a version where you DROP all rows with NaNs.
2. Create a version where you FILL NaNs with the string "Unknown".

<details>
<summary>💡 Hint</summary>
Use `.dropna()` and `.fillna()`.
</details>

<details>
<summary>✅ Solution</summary>

```python
df_nan = pd.DataFrame({'Data': [10, np.nan, 30], 'Type': ['A', 'B', np.nan]})

# 1. Drop
print(df_nan.dropna())

# 2. Fill
print(df_nan.fillna("Unknown"))
```
</details>

---

## Write to CSV

Finally, you can save your processed DataFrame back to a file.

```python
# index=False prevents writing the 0,1,2... row numbers to the file
df.to_csv("processed_data.csv", index=False)
```
