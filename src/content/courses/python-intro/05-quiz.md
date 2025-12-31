# Quiz

Test your knowledge with these questions!

## Question 1: Variables

What will be the output of the following code?

```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```

**Options:**
- A) `[1, 2, 3]`
- B) `[1, 2, 3, 4]`
- C) `[4]`
- D) Error

> **Answer:** B) `[1, 2, 3, 4]` - Lists are mutable and `y = x` creates a reference, not a copy.

---

## Question 2: Functions

What is the output?

```python
def modify(lst, val):
    lst.append(val)
    val = val + 10

numbers = [1, 2]
x = 5
modify(numbers, x)
print(numbers, x)
```

**Options:**
- A) `[1, 2, 5] 15`
- B) `[1, 2, 5] 5`
- C) `[1, 2] 5`
- D) `[1, 2] 15`

> **Answer:** B) `[1, 2, 5] 5` - Lists are passed by reference, integers are passed by value.

---

## Question 3: List Comprehension

Which list comprehension produces `[0, 4, 16]`?

**Options:**
- A) `[x**2 for x in range(5) if x % 2 == 0]`
- B) `[x*2 for x in range(5)]`
- C) `[x**2 for x in range(5)]`
- D) `[x for x in range(5) if x % 2 == 0]`

> **Answer:** A) `[x**2 for x in range(5) if x % 2 == 0]` - Squares of even numbers 0, 2, 4.

---

## Question 4: Dictionaries

What will this code print?

```python
d = {'a': 1, 'b': 2}
d['c'] = d.get('c', 0) + 3
print(d['c'])
```

**Options:**
- A) `None`
- B) `0`
- C) `3`
- D) Error

> **Answer:** C) `3` - `get()` returns 0 (default) since 'c' doesn't exist, then adds 3.

---

## Question 5: Classes

What is printed?

```python
class Counter:
    count = 0
    
    def __init__(self):
        Counter.count += 1

a = Counter()
b = Counter()
c = Counter()
print(Counter.count)
```

**Options:**
- A) `0`
- B) `1`
- C) `3`
- D) Error

> **Answer:** C) `3` - `count` is a class attribute shared by all instances.
