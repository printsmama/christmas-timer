const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Set the target date to Christmas 2024
const targetYear = new Date().getFullYear();
const christmasDate = new Date(targetYear, 11, 25, 0, 0, 0);

function updateCountdown() {
    const currentDate = new Date();
    
    // If Christmas has passed for the current year, set target to next year's Christmas
    if (currentDate > christmasDate) {
        christmasDate.setFullYear(targetYear + 1);
    }

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
