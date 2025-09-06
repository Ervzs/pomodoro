const startButton = document.getElementById("startButton");
const minutesdisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
let pomodoroTime;
let seconds;
const pomodoroAudio = new Audio("pomodoro-time.wav");
const breakAudio = new Audio("break-time.wav");

function startPomodoro(){
    pomodoroAudio.play();
    pomodoroTime = 25;
    let seconds = 0;
    let pomodoroTimer = setInterval(() => {
        seconds--

        if(pomodoroTime < 0){
            clearInterval(pomodoroTimer);
            startBreak();
        } else if (seconds < 0){
            pomodoroTime--;
            seconds = 60
        }

        minutesdisplay.innerText = pomodoroTime;
        secondsDisplay.innerText = seconds;
    }, 1000);
}

function startBreak(){
    breakAudio.play();
    pomodoroTime = 5;
    seconds = 0;
    let breakTimer = setInterval(() => {
        
        seconds--

        if(pomodoroTime < 0){
            clearInterval(breakTimer);
            startPomodoro();
        } else if (seconds < 0){
            pomodoroTime--;
            seconds = 60
        }

        minutesdisplay.innerText = pomodoroTime;
        secondsDisplay.innerText = seconds;
    }, 1000);
}