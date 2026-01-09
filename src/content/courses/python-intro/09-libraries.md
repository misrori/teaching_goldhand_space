# Libraries

One of the greatest strengths of Python is its ecosystem. You don't have to write everything from scratch; you can use "libraries" (collections of pre-written code) to solve complex problems instantly.


## %run

In environments like Databricks or Jupyter, the `%run` magic command allows you to execute another notebook or Python file within your current one. This is great for keeping your code organized by putting helper functions in a separate file.

```python
# Runs all the code in 'utility_functions.py'
%run ./utility_functions
```

## PyPI and Python Libraries

**PyPI** (the Python Package Index) is a massive repository of over 400,000 libraries created by the global community. Whether you need to process images, analyze data, or build a website, there's likely a library for it on PyPI.

Common libraries include:
- `pandas`: For data manipulation.
- `numpy`: For mathematical operations.
- `requests`: For making HTTP requests.
- `matplotlib`: For creating charts.

## pip

`pip` is the package installer for Python. You use it to download and install libraries directly from PyPI.

```bash
# Installing the 'requests' library
pip install requests
```

Once installed, you can use it in your code:
```python
import requests

response = requests.get("https://www.google.com")
print(response.status_code) # 200
```

## help()

Python has a built-in function called `help()` that provides interactive documentation for any module, function, or object.

```python
import math

# Get documentation for the 'sqrt' function
help(math.sqrt)
```

> [!TIP]
> In most modern IDEs (like VS Code or PyCharm), you can also see documentation by hovering over a function name or pressing `Tab` after typing a dot.

---

## 🛠️ Practice Tasks

### Task: Explore the Math Library
Import the `math` library and use `help()` to find out how to use the `pow` function. Then, calculate 2 to the power of 10.

<details>
<summary>💡 Hint</summary>
Use `import math` then `help(math.pow)`.
</details>

<details>
<summary>✅ Solution</summary>

```python
import math

# help(math.pow) 
# The documentation says it takes two arguments: x and y

result = math.pow(2, 10)
print(f"2 to the power of 10 is: {result}") # 1024.0
```
</details>
