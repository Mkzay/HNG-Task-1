document.addEventListener("DOMContentLoaded", function () {
  const dayOfWeekElement = document.getElementById("dayOfWeek");
  const utcTimeElement = document.getElementById("utcTime");

  //Day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  dayOfWeekElement.textContent = dayOfWeek;

  //UTC time in milliseconds
  const utcTime = currentDate.getTime();
  utcTimeElement.textContent = utcTime;
});
