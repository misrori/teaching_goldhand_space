# Examples

Let's look at some practical Python examples.

## Example 1: File Processing

Reading and processing a CSV file:

```python
import csv

def process_sales_data(filename):
    """Process sales data from a CSV file."""
    total_sales = 0
    products = {}
    
    with open(filename, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            product = row['product']
            amount = float(row['amount'])
            
            total_sales += amount
            products[product] = products.get(product, 0) + amount
    
    return {
        'total': total_sales,
        'by_product': products
    }

# Usage
results = process_sales_data('sales.csv')
print(f"Total Sales: ${results['total']:.2f}")
```

## Example 2: Web Scraping

Simple web scraping with requests and BeautifulSoup:

```python
import requests
from bs4 import BeautifulSoup

def get_headlines(url):
    """Fetch headlines from a news website."""
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    headlines = []
    for h2 in soup.find_all('h2', class_='headline'):
        headlines.append(h2.text.strip())
    
    return headlines

# Usage
news = get_headlines('https://example-news.com')
for headline in news[:5]:
    print(f"• {headline}")
```

## Example 3: REST API

Building a simple REST API with Flask:

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
tasks = [
    {'id': 1, 'title': 'Learn Python', 'done': False},
    {'id': 2, 'title': 'Build an API', 'done': False}
]

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def create_task():
    task = {
        'id': len(tasks) + 1,
        'title': request.json['title'],
        'done': False
    }
    tasks.append(task)
    return jsonify(task), 201

if __name__ == '__main__':
    app.run(debug=True)
```

## Example 4: Data Analysis

Analyzing data with Pandas:

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('data.csv')

# Basic statistics
print(df.describe())

# Group by and aggregate
summary = df.groupby('category').agg({
    'sales': 'sum',
    'quantity': 'mean'
})

# Visualization
df.plot(kind='bar', x='month', y='sales')
plt.title('Monthly Sales')
plt.savefig('sales_chart.png')
```

## Example 5: Async Programming

Asynchronous HTTP requests:

```python
import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_all(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        return await asyncio.gather(*tasks)

# Usage
urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
]

results = asyncio.run(fetch_all(urls))
```
