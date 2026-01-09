# Exceptions

Even the best programmers write code that fails. Exceptions are Python's way of telling you that something went wrong during the execution of your program.

## Syntax Errors

Syntax errors, also known as parsing errors, are perhaps the most common kind of complaint you get while you are still learning Python. These happen **before** your code actually runs, because the Python "parser" can't understand what you've written.

```python
# Missing a colon at the end of 'if'
if True
    print("Hello")
# Result: SyntaxError: expected ':'
```

## Exceptions

Even if a statement or expression is syntactically correct, it may cause an error when an attempt is made to execute it. Errors detected during execution are called **exceptions**.

Common exceptions include:
- `ZeroDivisionError`: Dividing a number by zero.
- `TypeError`: Performing an operation on an incompatible type (e.g., adding a string and an integer).
- `IndexError`: Trying to access a list index that doesn't exist.
- `KeyError`: Trying to access a dictionary key that doesn't exist.

## Exception Handling

We use the `try ... except` block to "catch" and handle exceptions so our program doesn't crash.

### Basic try-except
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

### Try-Except-Else
The `else` block runs **only if no exceptions** were raised in the try block.

```python
try:
    num = int("123")
except ValueError:
    print("That's not a number!")
else:
    print(f"Success! The number is {num}")
```

### Finally
The `finally` block **always runs**, regardless of whether an exception occurred or not. It's often used for "cleanup" (like closing a file).

```python
try:
    f = open("data.txt", "r")
    # do something with f
except FileNotFoundError:
    print("File not found.")
finally:
    print("Cleaning up...")
    # f.close() # This would run even if the file wasn't found
```

## Assertion Error

The `assert` statement is a debugging aid that tests a condition. If the condition is `True`, nothing happens. If it's `False`, Python raises an `AssertionError`.

```python
def calculate_discount(price, discount):
    assert 0 <= discount <= 1, "Discount must be between 0 and 1"
    return price * (1 - discount)

print(calculate_discount(100, 0.2)) # Works
# print(calculate_discount(100, 1.5)) # Raises AssertionError: Discount must be between 0 and 1
```

---

## 🛠️ Practice Tasks

### Task: Safe Division
Create a function `safe_divide(a, b)` that returns the result of `a / b`. 
Use exceptions to return the string "Error: Division by zero" if `b` is 0, and "Error: Invalid input" if the inputs are not numbers.

<details>
<summary>💡 Hint</summary>
Catch both `ZeroDivisionError` and `TypeError`.
</details>

<details>
<summary>✅ Solution</summary>

```python
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid input"

print(safe_divide(10, 2))  # 5.0
print(safe_divide(10, 0))  # Error: Division by zero
print(safe_divide(10, "2")) # Error: Invalid input
```
</details>
