# Advanced Topics

Now let's explore more advanced Python concepts.

## Object-Oriented Programming

Python fully supports OOP with classes and objects:

### Classes and Objects

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def describe(self):
        return f"{self.name} is {self.age} years old"

# Creating objects
buddy = Dog("Buddy", 3)
max_dog = Dog("Max", 5)

print(buddy.bark())      # Buddy says Woof!
print(max_dog.describe()) # Max is 5 years old
```

### Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

cat = Cat("Whiskers")
dog = Dog("Rex")

print(cat.speak())  # Whiskers says Meow!
print(dog.speak())  # Rex says Woof!
```

## Decorators

Decorators modify the behavior of functions:

```python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done!"

slow_function()  # slow_function took 1.00s
```

## Context Managers

Context managers handle resource management:

```python
# File handling with context manager
with open("file.txt", "w") as f:
    f.write("Hello, World!")

# Custom context manager
class DatabaseConnection:
    def __enter__(self):
        print("Opening connection")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")

with DatabaseConnection() as db:
    print("Working with database")
```

## List Comprehensions

Concise way to create lists:

```python
# Traditional approach
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Dictionary comprehension
word_lengths = {word: len(word) for word in ["hello", "world"]}
```
