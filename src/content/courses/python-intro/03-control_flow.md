# Control Flow

Control flow allows your program to make decisions and take different paths based on conditions. This makes your code dynamic and smart.

## REQUIRED - SELECT CLASSIC COM...

This section covers how to use if-statements, handle multiple conditions, and the importance of indentation.

## if-statement

The `if` statement is the most basic way to control the flow of your program.

```python
age = 20

if age >= 18:
    print("You are an adult.")
```

### Indentation

Unlike many other languages that use curly braces `{}` to define blocks of code, Python uses **indentation** (whitespace at the beginning of a line).

```python
if True:
    print("This is inside the if-statement") # Indented
print("This is outside the if-statement")     # Not indented
```
> [!IMPORTANT]
> Consistent indentation (usually 4 spaces) is mandatory in Python. Mixing tabs and spaces will cause errors.

## Operators

To create complex conditions, we use Comparison and Logical operators.

### Comparison Operators
- `==` Equal to
- `!=` Not equal to
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

### Logical Operators
- `and`: True if both conditions are true.
- `or`: True if at least one condition is true.
- `not`: Inverts the result (True becomes False).

## elif

If you have more than two paths, use `elif` (short for "else if").

```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

## The pass Statement

The `pass` statement is a null operation; nothing happens when it executes. It's used as a placeholder for code you haven't written yet.

```python
if x > 10:
    pass # I'll decide what to do here later!
```

---

## 🛠️ Practice Tasks

### Task: Dog Breed Recommendations
Create a program that suggests a dog breed based on two factors:
1. `home_size`: "small" or "large"
2. `energy_level`: "low" or "high"

- **Small & Low**: Pug
- **Small & High**: Jack Russell Terrier
- **Large & Low**: Basset Hound
- **Large & High**: Border Collie

<details>
<summary>💡 Hint</summary>
Use nested `if` statements or `if ... and ...`.
</details>

<details>
<summary>✅ Solution</summary>

```python
home_size = "small"
energy_level = "high"

if home_size == "small":
    if energy_level == "low":
        breed = "Pug"
    else:
        breed = "Jack Russell Terrier"
else:
    if energy_level == "low":
        breed = "Basset Hound"
    else:
        breed = "Border Collie"

print(f"Recommendation: {breed}")
```
</details>
