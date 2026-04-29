let timerInterval = null;
let timerSeconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startStopButton = document.getElementById('start-stop-button');
const resetButton = document.getElementById('reset-button');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startStopButton.textContent = 'Stop';
        timerInterval = setInterval(() => {
            timerSeconds++;
            timerDisplay.textContent = formatTime(timerSeconds);
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        startStopButton.textContent = 'Start';
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    timerDisplay.textContent = formatTime(timerSeconds);
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

// Initialize timer display
timerDisplay.textContent = formatTime(timerSeconds);