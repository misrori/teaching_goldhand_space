# Collection Types and Methods

Once you've mastered basic variables, the next step is learning how to manage collections of data efficiently. In Python, almost everything is an object, and objects have **methods**—functions that belong to them.


## Objects

In Python, "Everything is an object." This means that even a simple string or integer has built-in functionality attached to it.

```python
name = "goldhand"
print(type(name))  # <class 'str'>
```

## Methods: More Functionality

Methods are called using the "dot" notation: `object.method_name()`.

### String Methods

Strings come with a variety of helpful methods for text processing:

```python
text = "  python is fun  "

print(text.upper())      # "  PYTHON IS FUN  "
print(text.strip())      # "python is fun" (removes whitespace)
print(text.replace("fun", "awesome")) # "  python is awesome  "
print(text.split())      # ['python', 'is', 'fun'] (creates a list)
```

### In-place methods

Some methods modify the object directly (**in-place**), while others return a new version of the object. Strings are **immutable**, so their methods always return a new string. Lists are **mutable**, so many of their methods modify the original list.

### Tab Completion

> [!TIP]
> In most modern IDEs and Jupyter notebooks, you can type a variable name followed by a dot (`.`) and hit **Tab** to see a list of all available methods for that object!

### `help()`

If you're unsure what a method does, use the built-in `help()` function:

```python
help(str.replace)
```

## Methods with Collection Types

Python provides several ways to store groups of items.

### Collection Type 1: Lists

Lists are ordered, mutable sequences.

#### List Methods

```python
fruits = ["apple", "banana"]

fruits.append("cherry")  # Adds to the end
fruits.pop()             # Removes and returns the last item
fruits.sort()            # Sorts the list in-place
```

#### List indexing

You can access items or slices of a list using their index (starting at 0).

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[0])    # 10
print(numbers[-1])   # 50 (last item)
print(numbers[1:4])  # [20, 30, 40] (slicing)
```

#### Filtering Lists

Frequently, you'll need to extract specific items from a list based on a condition.

```python
nums = [1, 5, 8, 10, 15]
# Get numbers greater than 7
high_nums = [n for n in nums if n > 7]
```

#### List Comprehensions

List comprehensions provide a concise way to create lists.

```python
# Format: [expression for item in iterable if condition]
squares = [x**2 for x in range(5)] # [0, 1, 4, 9, 16]
```



<img src="https://i.ibb.co/MzBxf5K/1749357060631.jpg" alt="1749357060631" border="0">

### Collection Type 2: Dictionaries

Dictionaries store data in **key-value** pairs. They are unordered but extremely fast for lookups.

#### Dictionary Methods

```python
user = {"name": "Alice", "age": 25}

print(user.keys())    # dict_keys(['name', 'age'])
print(user.values())  # dict_values(['Alice', 25])
print(user.get("email", "Not Found")) # Safely get a value
```

### Collection Type 3: Tuples

Tuples are like lists but **immutable** (they cannot be changed after creation).

#### Tuple Methods

Tuples have very few methods because they can't be modified.

```python
colors = ("red", "green", "blue", "red")

print(colors.count("red")) # 2
print(colors.index("blue")) # 2
```

---

## 🛠️ Practice Tasks

### Task 1: The List Cleaner
Given the list `data = [" apple ", "BANANA", "  CHerry  "]`, create a new list where every fruit is lowercase and has no extra whitespace.

<details>
<summary>💡 Hint</summary>
Use a list comprehension with `.strip()` and `.lower()`.
</details>

<details>
<summary>✅ Solution</summary>

```python
data = [" apple ", "BANANA", "  CHerry  "]
clean_data = [fruit.strip().lower() for fruit in data]
print(clean_data) # ['apple', 'banana', 'cherry']
```
</details>

### Task 2: Inventory Checker
Given a dictionary `stock = {"apples": 10, "oranges": 0, "pears": 5}`, print the names of all fruits that are currently out of stock (quantity is 0).

<details>
<summary>💡 Hint</summary>
Loop through `stock.items()` and check if the value is 0.
</details>

<details>
<summary>✅ Solution</summary>

```python
stock = {"apples": 10, "oranges": 0, "pears": 5}
out_of_stock = [fruit for fruit, count in stock.items() if count == 0]
print(f"Out of stock: {out_of_stock}")
```
</details>
