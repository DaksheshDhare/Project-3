let startTime, updatedTime, difference;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('startBtn').addEventListener('click', function() {
    if (!isRunning) {
        startTime = new Date().getTime() - (difference || 0);
        interval = setInterval(updateTime, 10); // update every 10ms for milliseconds
        isRunning = true;
    }
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    clearInterval(interval);
    isRunning = false;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(interval);
    display.innerHTML = '00:00:00.000';
    laps.innerHTML = '';
    difference = 0;
    isRunning = false;
});

document.getElementById('lapBtn').addEventListener('click', function() {
    if (isRunning) {
        const li = document.createElement('li');
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
});

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = difference % 1000;

    display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}
