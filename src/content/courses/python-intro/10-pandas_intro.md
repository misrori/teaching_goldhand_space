# Pandas Overview


To get started with `pandas`, you first need to import it. It is almost always imported with the alias `pd`.

```python
import pandas as pd
import numpy as np # Often used together
```

### Why `pandas`?

`pandas` is the most popular Python library for data manipulation and analysis. It provides high-performance, easy-to-use data structures.

Think of it as **"Excel for Python"**, but much more powerful:
- **Handling huge datasets**: Can process millions of rows efficiently.
- **Data Cleanup**: Handling missing data, filtering, and cleaning messy datasets.
- **Integration**: Reads/Writes readily from CSV, Excel, SQL, JSON, and more.
- **Analysis**: Powerful statistical and aggregation tools built-in.

---

## `DataFrame`

A **DataFrame** is the primary data structure in pandas. It is a 2-dimensional labeled data structure with rows and columns (like a spreadsheet or SQL table).

You can create a DataFrame from various inputs, such as a dictionary of lists:

```python
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}

df = pd.read_csv("data.csv") # Most common way
# OR create manually
df = pd.DataFrame(data)

display(df) 
# Note: 'display()' is a function in Jupyter/Databricks.
# In standard Python scripts, use 'print(df)'
```

### Adding Column Names

When creating a DataFrame from a list of lists, you often need to define column names manually.

```python
data_list = [
    ['Alice', 25],
    ['Bob', 30], 
    ['Charlie', 35]
]

# Without column names, they default to 0, 1, ...
df_no_cols = pd.DataFrame(data_list)

# Specifying column names
df_with_cols = pd.DataFrame(data_list, columns=['Name', 'Age'])
print(df_with_cols)
```

> [!TIP]
> You can also rename columns of an existing DataFrame using `df.columns = ['NewName1', 'NewName2']` or `.rename()`.

#### 🛠️ Task: Create a DataFrame
1. Create a dictionary representing 3 cars (Brand, Model, Year).
2. Convert it into a `pandas` DataFrame.
3. Print it.

<details>
<summary>💡 Hint</summary>
Use `pd.DataFrame(your_dict)`.
</details>

<details>
<summary>✅ Solution</summary>

```python
cars_data = {
    'Brand': ['Toyota', 'Ford', 'Tesla'],
    'Model': ['Corolla', 'Mustang', 'Model 3'],
    'Year': [2020, 2018, 2022]
}
df_cars = pd.DataFrame(cars_data)
print(df_cars)
```
</details>

---

## `Series`

A **Series** is a one-dimensional labeled array. You can think of it as a **single column** of a DataFrame.

```python
ages = pd.Series([25, 30, 35], name='Age')
print(ages)
```

Each item in a Series has a label (the **index**). By default, the index is 0, 1, 2...

---

## dtypes

Every column in a DataFrame (and every Series) has a specific data type (`dtype`).

Common pandas dtypes:
- `int64`: Integer numbers (e.g., 10, -5)
- `float64`: Floating point numbers (e.g., 3.14, -0.01)
- `object` (or `string`): Text/String data
- `bool`: True/False values
- `datetime64`: Date and time values

You can check types using the `.dtypes` attribute:

```python
print(df.dtypes)
```

#### 🛠️ Task: Check Types
Using the car DataFrame you created earlier, print the data types of its columns.

<details>
<summary>💡 Hint</summary>
Use the `.dtypes` attribute on your dataframe variable.
</details>

<details>
<summary>✅ Solution</summary>

```python
print(df_cars.dtypes)
# Brand    object
# Model    object
# Year      int64
# dtype: object
```
</details>

---

## `Series` Operations

One of the best features of pandas is **vectorization**. You can apply operations to an entire Series without writing a loop.

```python
s = pd.Series([10, 20, 30])

# Add 5 to every item
print(s + 5) 

# Multiply every item by 2
print(s * 2)

# Verify a condition
print(s > 15)
```

### String Operations
For string columns, you can access string methods via `.str`:

```python
names = pd.Series(['alice', 'bob', 'charlie'])
print(names.str.upper())
```

```

#### 🛠️ Task: String Cleaning
Create a Series with the values `['  apple  ', '  banana', 'cherry  ']`. 
Use the `.str.strip()` method to remove the extra spaces, then print the result.

<details>
<summary>💡 Hint</summary>
You need to call `.str.strip()` on your series variable.
</details>

<details>
<summary>✅ Solution</summary>

```python
fruits = pd.Series(['  apple  ', '  banana', 'cherry  '])
clean_fruits = fruits.str.strip()
print(clean_fruits)
```
</details>

---

### Selecting a value from a **`Series`**

You can select values from a Series using its index.

```python
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])

print(s['a'])  # 10
print(s[0])    # 10 (using default position)
```

---

## Selecting a Subset of Columns

You can select one or more columns from a DataFrame.

1. **Select Single Column** (Returns a `Series`):
   ```python
   # Uses brackets and string
   ages = df['Age'] 
   ```

2. **Select Multiple Columns** (Returns a new `DataFrame`):
   ```python
   # Uses double brackets (list of strings)
   subset = df[['Name', 'City']]
   ```

> [!WARNING]
> `df['Col']` returns a **Series**. `df[['Col']]` returns a **DataFrame** with one column. The distinction is important for certain operations.

#### 🛠️ Task: Select Columns
From your car DataFrame:
1. Select just the 'Model' column and print it (as a Series).
2. Select 'Brand' and 'Year' together and print them (as a DataFrame).

<details>
<summary>💡 Hint</summary>
Use `df['Column']` for a Series and `df[['Col1', 'Col2']]` for a DataFrame.
</details>

<details>
<summary>✅ Solution</summary>

```python
# 1. As Series
print(df_cars['Model'])

# 2. As DataFrame
print(df_cars[['Brand', 'Year']])
```
</details>

---

## Mutability of DataFrame objects

DataFrames are **mutable**, meaning you can change them.

### 1. Adding a New Column
You can assign a new column by simply naming it:

```python
# Adding a new column with a scalar value (same for all rows)
df['Country'] = 'USA'

# Adding a calculated column
df['Age_in_Months'] = df['Age'] * 12
```

### 2. Modifying Values
You can update values directly.

```python
# Change the value in the first row, 'City' column
df.at[0, 'City'] = 'Boston'
```

> [!CAUTION]
> Be careful when modifying "views" of a DataFrame. Sometimes pandas will warn you about "SettingWithCopy". It is often safer to make a copy if you intend to modify a subset: `subset = df[['Name', 'Age']].copy()`.

#### 🛠️ Task: Modify DataFrame
1. Add a new column 'Is_Electric' to your car DataFrame. Set it to `False` for all rows.
2. Update the 'Tesla' row to have `True` for 'Is_Electric'. (Hint: You can manually set the index or just know that Tesla is at index 2).

<details>
<summary>💡 Hint</summary>
To add a column: `df['NewColumn'] = Value`. To update a cell: `df.at[index, 'Column'] = Value`.
</details>

<details>
<summary>✅ Solution</summary>

```python
# 1. Add new column
df_cars['Is_Electric'] = False

# 2. Update specific row (assuming Tesla is at index 2)
# .at[row_index, column_name] is efficient for single scalar updates
df_cars.at[2, 'Is_Electric'] = True

print(df_cars)
```
</details>

#### 🛠️ Task: Price Calculation
1. Add a `Price` column to your `df_cars` with values `[20000, 30000, 50000]`.
2. Create a new column `Discounted_Price` which is 90% of the `Price` (multiply by 0.9).
3. Print the DataFrame.

<details>
<summary>💡 Hint</summary>
You can multiply a column by a number: `df['Col'] * 0.9`.
</details>

<details>
<summary>✅ Solution</summary>

```python
# 1. Add Price
df_cars['Price'] = [20000, 30000, 50000]

# 2. Calculate Discount
df_cars['Discounted_Price'] = df_cars['Price'] * 0.9

print(df_cars)
```
</details>
