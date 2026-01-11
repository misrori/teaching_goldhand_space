# BONUS: Reeborg's World 🤖


### 🏁 The Challenge: Hurdle 1

**Objective:** Help Reeborg jump over the walls and reach the checkered flag.

[**➡️ Click here to Start the Game!**](https://reeborg.ca/reeborg.html?lang=en&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_en.json&name=Hurdle%201&url=worlds%2Ftutorial_en%2Fhurdle1.json)

### 🕹️ Quick Reference
The robot knows these basic Python commands:
* `move()`
* `turn_left()`


> **Note:** Reeborg doesn't know how to turn right. We always need this helper function:


---

## 🚧 Hurdle 1: Fixed Loops

**Concept:** The `for` loop. We know exactly how many hurdles there are.

<details>
<summary>✅ Solution</summary>

```python
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump():
    move()
    turn_left()
    move()
    turn_right()
    move()
    turn_right()
    move()
    turn_left()

# We know there are exactly 6 hurdles
for i in range(6):
    jump()

```

</details>

---

## 🏁 Hurdle 2: The While Loop

**Concept:** The finish line is random. We use `while not at_goal():`.

<details>
<summary>✅ Solution</summary>

```python
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump():
    move()
    turn_left()
    move()
    turn_right()
    move()
    turn_right()
    move()
    turn_left()

# We don't know the number of steps, so we check for the flag
while not at_goal():
    jump()

```

</details>

---

## 🎲 Hurdle 3: Random Spacing

**Concept:** `if/else`. Sometimes there is a wall, sometimes there isn't.

<details>
<summary>✅ Solution</summary>

```python
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump():
    turn_left()
    move()
    turn_right()
    move()
    turn_right()
    move()
    turn_left()

while not at_goal():
    if front_is_clear():
        move()
    else:
        jump()

```

</details>

---

## 🪜 Hurdle 4: Variable Heights

**Concept:** Generalization. The walls change height, so our `jump()` function must be smart (dynamic).

<details>
<summary>✅ Solution</summary>

```python
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump_over_wall():
    # 1. Climb up until we clear the wall
    turn_left()
    while wall_on_right():
        move()

    # 2. Turn the corner
    turn_right()
    move()
    turn_right()

    # 3. Come down until we hit the floor
    while front_is_clear():
        move()
    
    # 4. Face the correct direction again
    turn_left()

while not at_goal():
    if front_is_clear():
        move()
    else:
        jump_over_wall()

```

</details>

---

## 🧩 Bonus: The Maze

**Concept:** The "Right-Hand Rule" algorithm. If you keep your right hand on the wall, you will eventually find the exit (in simple mazes).

<details>
<summary>✅ Solution</summary>

```python
def turn_right():
    turn_left()
    turn_left()
    turn_left()

while not at_goal():
    if right_is_clear():
        # If there is space on the right, go there immediately
        turn_right()
        move()
    elif front_is_clear():
        # If right is blocked, try going forward
        move()
    else:
        # If right and front are blocked, turn left
        turn_left()

```

</details>


