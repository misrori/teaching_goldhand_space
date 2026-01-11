
# Excercises

This section focuses on algorithmic thinking and the basic syntax of Python. These 10 exercises build up from simple conditions to Object-Oriented Programming.

## 🛠️ Logic & Control Flow

### Task 1: The BMI Calculator

**Objective:** Calculate Body Mass Index and categorize it.



*Categories: <18.5 (Underweight), 18.5-24.9 (Normal), 25-29.9 (Overweight), 30+ (Obese)*

<details>
<summary>✅ Solution</summary>

```python
weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))
bmi = weight / (height ** 2)
print(f"BMI: {bmi:.2f}")

if bmi < 18.5: print("Underweight")
elif bmi <= 24.9: print("Normal")
elif bmi <= 29.9: print("Overweight")
else: print("Obese")

```

</details>

### Task 2: Rock-Paper-Scissors

**Objective:** A game against the computer using `random`.

<details>
<summary>✅ Solution</summary>

```python
import random
opts = ["rock", "paper", "scissors"]
comp = random.choice(opts)
user = input("Choose (rock/paper/scissors): ").lower()
print(f"Computer: {comp}")

if user == comp: print("Tie!")
elif (user=="rock" and comp=="scissors") or \
     (user=="paper" and comp=="rock") or \
     (user=="scissors" and comp=="paper"):
    print("You win!")
else: print("Computer wins!")

```

</details>

### Task 3: The Even Number Collector

**Objective:** Filter a list of numbers using a loop.
`numbers = [4, 7, 12, 19, 22, 35, 40]`

<details>
<summary>✅ Solution</summary>

```python
numbers = [4, 7, 12, 19, 22, 35, 40]
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)
print(evens)

```

</details>

### Task 4: Palindrome Checker

**Objective:** Write a script that checks if a word is a palindrome (reads the same backward and forward), like "radar" or "level".

<details>
<summary>💡 Hint</summary>
Python strings can be sliced. `text[::-1]` reverses a string.
</details>

<details>
<summary>✅ Solution</summary>

```python
word = input("Enter a word: ").lower()

if word == word[::-1]:
    print("It is a palindrome!")
else:
    print("Not a palindrome.")

```

</details>

### Task 5: Frequency Counter

**Objective:** Given a sentence, count how many times each word appears.
`text = "apple banana apple orange banana apple"`

<details>
<summary>💡 Hint</summary>
Use a dictionary `{}` where keys are words and values are counts. Split the string using `.split()`.
</details>

<details>
<summary>✅ Solution</summary>

```python
text = "apple banana apple orange banana apple"
words = text.split()
counts = {}

for word in words:
    if word in counts:
        counts[word] += 1
    else:
        counts[word] = 1

print(counts)
# Output: {'apple': 3, 'banana': 2, 'orange': 1}

```

</details>

### Task 6: The Factorial Calculator

**Objective:** Calculate the factorial of a number .
Example: .

<details>
<summary>💡 Hint</summary>
Use a `for` loop from 1 to `n` and a cumulative multiplier variable.
</details>

<details>
<summary>✅ Solution</summary>

```python
n = 5
result = 1
for i in range(1, n + 1):
    result *= i
print(f"Factorial of {n} is {result}")

```

</details>

## 🏗️ Object-Oriented Programming (OOP)

### Task 7: The 'Dog' Class

**Objective:** A simple class with `__init__` and a `bark()` method.

<details>
<summary>✅ Solution</summary>

```python
class Dog:
    def __init__(self, name): self.name = name
    def bark(self): print(f"{self.name} says Woof!")

d = Dog("Rex")
d.bark()

```

</details>

### Task 8: The Bank ATM

**Objective:** A class handling `deposit`, `withdraw`, and `balance` checks.

<details>
<summary>✅ Solution</summary>

```python
class ATM:
    def __init__(self, bal=0): self.bal = bal
    def deposit(self, amt): self.bal += amt
    def withdraw(self, amt):
        if amt <= self.bal: self.bal -= amt
        else: print("No funds")

```

</details>

### Task 9: Shopping Cart

**Objective:** Create a `ShoppingCart` class.

1. `add_item(name, price)`: Adds an item to a list.
2. `total_price()`: Returns the sum of all item prices.

<details>
<summary>💡 Hint</summary>
Store items as a list of dictionaries or tuples (e.g., `self.items.append({&#39;name&#39;: name, &#39;price&#39;: price})`).
</details>

<details>
<summary>✅ Solution</summary>

```python
class ShoppingCart:
    def __init__(self):
        self.items = []

    def add_item(self, name, price):
        self.items.append({'name': name, 'price': price})

    def total_price(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total

cart = ShoppingCart()
cart.add_item("Apple", 100)
cart.add_item("Book", 2500)
print(f"Total: {cart.total_price()}")

```

</details>

### Task 10: Student Gradebook

**Objective:** A class `Student` that stores a name and a list of grades.
Method: `get_average()` calculates the average of the grades.

<details>
<summary>✅ Solution</summary>

```python
class Student:
    def __init__(self, name):
        self.name = name
        self.grades = []

    def add_grade(self, grade):
        self.grades.append(grade)

    def get_average(self):
        if not self.grades: return 0
        return sum(self.grades) / len(self.grades)

s = Student("Anna")
s.add_grade(4)
s.add_grade(5)
print(f"{s.name}'s Average: {s.get_average()}")

```

</details>


