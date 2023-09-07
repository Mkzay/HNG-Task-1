function updateData() {
    const now = new Date();
            
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
                
    const utcTime = now.toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

window.onload = updateData;