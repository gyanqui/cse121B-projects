// Step 1: Define the necessary variables and elements
const logForm = document.getElementById('logForm');
const activityInput = document.getElementById('activity');
const durationInput = document.getElementById('duration');
const dateInput = document.getElementById('date');
const logList = document.getElementById('logList');
const totalDurationDisplay = document.getElementById('totalDuration');
const averageDurationDisplay = document.getElementById('averageDuration');
const longestDurationDisplay = document.getElementById('longestDuration');
const shortestDurationDisplay = document.getElementById('shortestDuration');

// Step 2: Define an array to store the logged workouts
let logs = [];

// Step 3: Define a function to add a workout log
function addLog(activity, duration, date) {
  const log = {
    activity,
    duration,
    date
  };

  logs.push(log);
}

// Step 4: Define a function to display the workout logs
function displayLogs() {
  logList.innerHTML = '';

  logs.forEach(log => {
    const listItem = document.createElement('li');
    listItem.textContent = `${log.activity} - ${log.duration} minutes - ${log.date}`;
    logList.appendChild(listItem);
  });
}

// Step 5: Define a function to calculate and display workout statistics
function calculateStatistics() {
  const totalDuration = logs.reduce((total, log) => total + parseInt(log.duration), 0);
  const averageDuration = totalDuration / logs.length || 0;
  const longestDuration = Math.max(...logs.map(log => parseInt(log.duration))) || 'None';
  const shortestDuration = Math.min(...logs.map(log => parseInt(log.duration))) || 'None';

  totalDurationDisplay.textContent = `Total Duration: ${totalDuration} minutes`;
  averageDurationDisplay.textContent = `Average Duration: ${averageDuration.toFixed(2)} minutes`;
  longestDurationDisplay.textContent = `Longest Duration: ${longestDuration} minutes`;
  shortestDurationDisplay.textContent = `Shortest Duration: ${shortestDuration} minutes`;
}

// Step 6: Add an event listener to the form submission button
logForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const activity = activityInput.value;
  const duration = durationInput.value;
  const date = dateInput.value;

  addLog(activity, duration, date);
  displayLogs();
  calculateStatistics();

  activityInput.value = '';
  durationInput.value = '';
  dateInput.value = '';
});

// Step 7: Call the displayLogs() and calculateStatistics() functions on page load
displayLogs();
calculateStatistics();


//------Footer---------

// Step 1: declare and instantiate a variable to hold the current year for footer
const year = new Date().getFullYear();

// Step 2: place the value of the current year variable into the index.html file inside of the element with an id of "year"
const yearElement = document.querySelector("#year");
yearElement.textContent = year;