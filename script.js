let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;
  const lapTime = `${h}:${m}:${s}`;
  const li = document.createElement("li");
  li.textContent = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(li);
}

