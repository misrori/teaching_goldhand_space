# Classes

Classes are the foundation of Object-Oriented Programming (OOP). They allow you to group data and functions together into a single reusable unit.


## Classes

Think of a **Class** as a blueprint (like a drawing for a house) and an **Object** as an actual instance of that blueprint (the house itself).

```python
class Robot:
    def __init__(self, name, model):
        # The __init__ method is the constructor
        self.name = name   # Attribute
        self.model = model # Attribute

# Creating an object (instance)
my_robot = Robot("R2-D2", "Astromech")
print(my_robot.name) # R2-D2
```

## Code Reuse with Methods

Methods are functions defined inside a class. They define the "behaviors" of your objects. By defining logic once in a class, you can reuse it across many objects.

```python
class Robot:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        # This method can be reused by every robot object
        print(f"Hello, my name is {self.name}!")

robot1 = Robot("C-3PO")
robot2 = Robot("BB-8")

robot1.greet() # Hello, my name is C-3PO!
robot2.greet() # Hello, my name is BB-8!
```

## Data Caching with Attributes

Attributes act like variables that belong to an object. They "cache" or store the state of the object, allowing it to remember information between method calls.

```python
class Counter:
    def __init__(self):
        self.count = 0 # State is cached here
    
    def increment(self):
        self.count += 1
    
    def show(self):
        print(f"Current count: {self.count}")

c = Counter()
c.increment()
c.increment()
c.show() # Current count: 2
```

## More Advanced Classes

Classes can also have **Class Attributes** (shared by all instances) and can **Inherit** features from other classes.

```python
class ProfessionalRobot(Robot): # Inheritance
    def work(self):
        print(f"{self.name} is now performing professional tasks.")

pro_bot = ProfessionalRobot("Data")
pro_bot.greet() # Inherited from Robot
pro_bot.work()  # Specific to ProfessionalRobot
```

---

## 🛠️ Practice Tasks

### Task: Virtual Bank Account
Create a `BankAccount` class with an attribute `balance` (starting at 0) and two methods: `deposit(amount)` and `withdraw(amount)`. 

<details>
<summary>💡 Hint</summary>
In `__init__`, set `self.balance = 0`. In the methods, update `self.balance`.
</details>

<details>
<summary>✅ Solution</summary>

```python
class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}. New balance: ${self.balance}")
    
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")
        else:
            print("Insufficient funds!")

acc = BankAccount("Alice")
acc.deposit(100)
acc.withdraw(30)
```
</details>
