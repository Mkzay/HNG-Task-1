//Script for Day
function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];

    const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    
    if (currentDay) {
        currentDay.textContent = dayOfWeek;
    }
}

updateCurrentDay();

//Script for Time
function getCurrentUTCTimeWithMilliseconds() {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const seconds = now.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = now.getUTCMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

const currentUTCTimeWithMilliseconds = getCurrentUTCTimeWithMilliseconds();
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

if (currentUTCTimeElement) {
  currentUTCTimeElement.textContent = currentUTCTimeWithMilliseconds;
}


  