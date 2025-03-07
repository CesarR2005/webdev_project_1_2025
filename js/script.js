

// This code initialize the target time in localStorage
function setTargetTime() {
  let targetTime = localStorage.getItem("targetTime");

  if (!targetTime) {
    const currentTime = new Date().getTime();
    targetTime = currentTime + (10 * 24 * 60 * 60 * 1000); 
    localStorage.setItem("targetTime", targetTime);
  }

  return parseInt(targetTime, 10);
}

// This code updates the countdown
function updateCountdown() {
 
  const targetTime = setTargetTime();


  const currentTime = new Date().getTime();


  const timeRemaining = targetTime - currentTime;

  // This code displays a message when the countdown ends 
  if (timeRemaining <= 0) {
    document.getElementById("countdown").textContent = "EXPIRED";
    localStorage.removeItem("targetTime"); 
    return;
  }

  // This code calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // This code updates the countdown timer display
  document.getElementById("countdown").textContent =
    `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();
