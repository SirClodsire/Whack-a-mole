---
marp: true
theme: default
class: invert
paginate: true
---

# Whack-A-Mole: A Hack Club Workshop

Let's build a simple Whack-A-Mole game!

---


# Whack-A-Mole: Step 1 - Download files

Download the `whackamole.zip` file, unzip it, and open it in vscode to start coding. This folder should contain 4 files:
- `index.html`
- `style.css`
- `mole.css`
- `script.js`

You do not need to modify the `.css` files, as they are pre-completed!

---

# Whack-A-Mole: Step 2 - Linking the JavaScript

Now, we link our JavaScript file, `script.js`, which will contain the game logic.  This is essential for making the game interactive.

```html
<script src="script.js"></script>
```

---

# Whack-A-Mole: Step 3 - CSS Links

Let's add the CSS links to style our game's appearance.
Add these snippets in the `<head>` section

```html
<link href="style.css" rel="stylesheet" type="text/css" />
<link href="mole.css" rel="stylesheet" type="text/css" />
```

---

# Whack-A-Mole: Step 4 - Timer ID and Value

We change the `time` element's ID to `timer` and set its initial value.

```html
<h1 id="timer">2000</h1>
```

---

# Whack-A-Mole: Step 5 - Reset Button

Finally, we add a reset button to allow players to restart the timer.

```html
<button id="timer-button">reset</button>
```

That's it for the structure! These steps will build your Whack-A-Mole game's HTML structure. Now we must move on to the `script.js` file

---

# Whack-A-Mole: Part 2 - JavaScript Time!

Now, let's bring our game to life with JavaScript! Open `script.js`.

---

# Whack-A-Mole: Step 1 - Linking Elements

First, we link the HTML elements to our JavaScript variables. This allows us to control them with code.

```javascript
const timerelement = document.getElementById("timer"); // Line 1
const mole = document.getElementById("mole");         // Line 2
const scoreelement = document.getElementById("score"); // Line 3
const resetbtn = document.getElementById("timer-button"); // Line 4
```

---

# Whack-A-Mole: Step 2 - Initialize Variables

Let's initialize the variables we'll need for our game.

```javascript
let time = 2000;  // Line 6
let score = 0;   // Line 7
```

---

# Whack-A-Mole: Step 3 - The Timer Function

This function will run repeatedly to update the timer and manage the game state.

```javascript
function reset(){              // Line 10
    time = 2000;              // Line 11
    score = -1;             // Line 12
    relocate();             // Line 13
}
function timer() {             // Line 15
    if (time > 0){             // Line 16
        time--;             // Line 17
        timerelement.innerText = time; // Line 18
    }
    console.log(time);        // Line 20
}
```

---

# Whack-A-Mole: Step 4 - Setting the Interval

Now, we set the interval for how often the `timer` function runs.

```javascript
setInterval(timer, 1); // Line 23
```

---

# Whack-A-Mole: Step 5 - The Relocate Function

This function will be called when the mole is clicked.

```javascript
function relocate() {            // Line 26
    if (time > 0){            // Line 27
        score++;            // Line 28
        scoreelement.innerText = "Score: " +score; // Line 29

        let x = 5 + Math.random() * 90; // Line 31
        let y = 15 + Math.random() * 45; // Line 32
        mole.style.left = x+"%";     // Line 33
        mole.style.top = y+"%";      // Line 34
    }
}
```

---

# Whack-A-Mole: Step 6 - Adding Event Listeners

Finally, we add event listeners to the mole and reset button.

```javascript
mole.addEventListener("click", relocate);  // Line 37
resetbtn.addEventListener("click", reset);  // Line 38
```

That's it!  You've now completed the JavaScript code for your Whack-A-Mole game.  Test it out and have fun!