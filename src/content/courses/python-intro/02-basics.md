# Python Basics

Let's dive into the fundamental building blocks of Python programming.

## Variables and Data Types

Python supports several built-in data types:

### Numbers

```python
# Integers
age = 25
year = 2024

# Floats
price = 19.99
temperature = -3.5

# Complex numbers
complex_num = 3 + 4j
```

### Strings

Strings in Python are immutable sequences of characters:

```python
# String declaration
name = "Alice"
message = 'Hello, World!'

# Multi-line strings
poem = """
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
"""

# String operations
full_name = "John" + " " + "Doe"  # Concatenation
repeated = "Ha" * 3  # "HaHaHa"
```

### Lists

Lists are ordered, mutable collections:

```python
# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# List operations
fruits.append("orange")    # Add item
fruits.remove("banana")    # Remove item
first = fruits[0]          # Access by index
sliced = fruits[1:3]       # Slicing
```

## Control Flow

### Conditional Statements

```python
age = 18

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
else:
    print("Adult")
```

### Loops

```python
# For loop
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Range
for i in range(10):
    print(i)
```

## Functions

Functions help organize and reuse code:

```python
def calculate_area(length, width):
    """Calculate the area of a rectangle."""
    return length * width

# Function call
area = calculate_area(5, 3)
print(f"Area: {area}")  # Area: 15
```

### Default Parameters

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))           # Hello, Alice!
print(greet("Bob", "Hi"))       # Hi, Bob!
```
