# Loops

Loops are essential for repeating tasks. Instead of writing the same code multiple times, we use loops to iterate through data or repeat actions until a condition is met.

## For-loops

A `for` loop is used for iterating over a sequence (like a list, a tuple, a dictionary, a set, or a string).

```python
fruits = ["apple", "banana", "cherry"]

# Iterating over a list
for fruit in fruits:
    print(f"I like {fruit}")

# Using range() for a specific number of repetitions
for i in range(3):
    print(f"Repetition {i}")
```

### `break`

The `break` statement is used to exit a loop prematurely, even if the condition is still met or the sequence hasn't finished.

```python
for i in range(10):
    if i == 5:
        print("Breaking the loop!")
        break
    print(i)
```

### `continue`

The `continue` statement skips the current iteration and moves on to the next one.

```python
for i in range(5):
    if i == 2:
        print("Skipping 2")
        continue
    print(i)
```

## While-loops

A `while` loop repeats a block of code as long as a certain condition is `True`.

```python
count = 0
while count < 3:
    print(f"Count is {count}")
    count += 1
```

> [!CAUTION]
> Always ensure your `while` loop has a way to become `False`, otherwise you'll create an **infinite loop**, which can crash your program!

## More fun with repetition

### Using `enumerate()`
If you need both the index and the value during a loop, `enumerate()` is your best friend.

```python
langs = ["Python", "JavaScript", "Rust"]
for index, lang in enumerate(langs):
    print(f"{index + 1}. {lang}")
```

---

## 🛠️ Practice Tasks

### Task 1: The Multiplier
Create a program that prints the multiplication table for the number 7 (from 1 to 10).

<details>
<summary>💡 Hint</summary>
Use `for i in range(1, 11):` and an f-string to print `f"7 x {i} = {7*i}"`.
</details>

<details>
<summary>✅ Solution</summary>

```python
for i in range(1, 11):
    print(f"7 x {i} = {7*i}")
```
</details>

### Task 2: Guess the Secret Word
Create a simple guessing game where the user has to type "magic" to stop the loop. (Use a simplified mock-up of user input).

<details>
<summary>💡 Hint</summary>
Use a `while` loop that continues as long as `guess != "magic"`.
</details>

<details>
<summary>✅ Solution</summary>

```python
secret = "magic"
guess = ""

# Mocking input logic
while guess != secret:
    # In a real program, you'd use input()
    # guess = input("Guess the secret word: ")
    guess = "magic" # Simulating a correct guess
    print(f"You guessed: {guess}")

print("Correct! The loop has ended.")
```
</details>
