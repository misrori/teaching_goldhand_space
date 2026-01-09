# Data Types and Variables

In this section, we'll explore the fundamental building blocks of Python. Python is designed to be readable and intuitive, making it an excellent choice for complex data handling.

### Calculation

Python can be used as a powerful calculator. It supports standard arithmetic operators:

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division (always returns a float)
- `//` Floor Division (returns the integer part)
- `%` Modulo (returns the remainder)
- `**` Exponentiation (power)

```python
result = (50 - 5 * 6) / 4
# Using an f-string to print the result
print(f"The result of the calculation is: {result}") # The result of the calculation is: 5.0

print(f"17 divided by 3 is {17 // 3} with a remainder of {17 % 3}")
print(f"Five squared is {5 ** 2}")
```

### Comments

Comments are crucial for explaining *why* code does what it does.

```python
# This is a single-line comment

"""
This is a multi-line string, 
often used as a multi-line comment 
to explain complex logic.
"""
```

## Data Types

Python has several built-in data types that handle different kinds of information.

### Type 1: Integers

Integers are whole numbers without a fractional part. They can be positive, negative, or zero.

```python
count = 100
negative_val = -50
```

### Type 2: Float

Floats (floating-point numbers) represent real numbers and are written with a decimal point.

```python
price = 19.99
pi = 3.14159
```

### An Aside on Numeric Precision

Floating-point numbers can sometimes lead to unexpected results due to how computers represent decimals in binary.

```python
print(0.1 + 0.2) # 0.30000000000000004
```
> [!NOTE]
> For financial applications where precision is critical, Python provides the `decimal` module.

### Type 3: Strings

Strings are sequences of characters used for text.

```python
name = "Python"
greeting = 'Hello'
```

#### Multi-line strings

You can define strings that span multiple lines using triple quotes (`"""` or `'''`).

```python
long_text = """
This is a string that
spans across multiple
lines easily.
"""
```

### Type 4: Boolean

Booleans represent one of two values: `True` or `False`. They are essential for logic and control flow.

```python
is_active = True
has_permission = False
```

## Variables

Variables are containers for storing data values.

### Variable State

In Python, variables are essentially labels attached to objects in memory. The "state" of a variable can change as your program runs.

```python
x = 5  # x refers to the integer 5
x = "Hello" # x now refers to the string "Hello"
```

### Weakly Typed Languages

Python is a **dynamically typed** (often called weakly typed in casual conversation, though technically "strong dynamic") language. This means you don't need to declare the variable type; Python figures it out at runtime.

### Naming Conventions

Following PEP 8, variable names should be:
- Descriptive
- Lowercase
- Use underscores to separate words (`snake_case`)

```python
# Good
user_age = 25

# Bad
A = 25
UserAge = 25
```

## Print Statements

The `print()` function outputs data to the console.

### f-string Formatting

Introduced in Python 3.6, f-strings (formatted string literals) are the most readable and efficient way to format strings.

```python
name = "Alice"
age = 30
pi = 3.14159265

# Basic interpolation
print(f"My name is {name} and I am {age} years old.")

# Expression evaluation
print(f"In 5 years, I will be {age + 5} years old.")

# Number formatting (rounding to 2 decimal places)
print(f"Pi to two decimal places is {pi:.2f}")

# Alignment and Padding
print(f"|{'Left':<10}|{'Center':^10}|{'Right':>10}|")
```

### Ternary Operator

The ternary operator allows for a simple `if-else` on a single line.

```python
status = "Adult" if age >= 18 else "Minor"
print(status)
```

---

## 🛠️ Practice Tasks

Test your knowledge with these tasks!

### Task 1: The Tip Calculator
Create a program that calculates the total bill including a 15% tip.
Variables: `bill_amount = 120.50`

<details>
<summary>💡 Hint</summary>
Multiply the bill amount by 1.15 to get the total.
</details>

<details>
<summary>✅ Solution</summary>

```python
bill_amount = 120.50
total = bill_amount * 1.15
print(f"Total bill with tip: ${total:.2f}")
```
</details>

### Task 2: String Manipulator
Take the variable `word = "Python"` and print it 3 times on the same line, separated by spaces.

<details>
<summary>💡 Hint</summary>
You can use the `*` operator on strings or f-strings.
</details>

<details>
<summary>✅ Solution</summary>

```python
word = "Python"
# Approach 1
print(f"{word} {word} {word}")

# Approach 2
print((word + " ") * 3)
```
</details>
