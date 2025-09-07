# Pomodoro Timer (JavaScript Project)

A simple Pomodoro timer built with JavaScript.  
This project helped me practice working with timers and audio in the browser.

---

## 📚 Things I Learned

### ⏱️ 1. setInterval() and clearInterval()
- **`setInterval()`** → allows me to repeatedly execute a function at a specified time interval (e.g., updating the timer every second).
- **`clearInterval()`** → stops the interval once a condition is met (e.g., when the timer reaches 0).

**Example:**
```javascript
let timer = setInterval(() => {
  console.log("Tick...");
}, 1000);

// Stop the timer after 5 seconds
setTimeout(() => {
  clearInterval(timer);
}, 5000);
```

### 🔊 2. Creating an Audio Object
- Learned how to create and control an audio object in the browser using JavaScript's Audio API. The use of **`Audio()`**  and **`.play()`**

**Example:**
```javascript
// Create an audio object with a sound file
const alarmSound = new Audio("alarm.mp3");

// Play the sound
alarmSound.play();
```
