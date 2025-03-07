

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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const progressBar = document.getElementById("signup-progress");
  const inputs = form.querySelectorAll("input");
  const confirmationMessage = document.getElementById("confirmation-message");

  // This code updates the progress bar based on filled fields
  function updateProgress() {
    let completedFields = 0;

    inputs.forEach(input => {
      if (input.value.trim() !== "") {
        completedFields++;
      }
    });

    const progress = (completedFields / inputs.length) * 100;

    // This code update the progress bar value
    progressBar.value = progress;
  }

  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

  
    let allFieldsFilled = true;
    inputs.forEach(input => {
      if (input.hasAttribute("required") && input.value.trim() === "") {
        allFieldsFilled = false;
      }
    });

    // This code verifires If all required fields are filled and show confirmation message
    if (allFieldsFilled) {
      form.style.display = "none";
      confirmationMessage.style.display = "block";
    } else {
      alert("Please fill out all required fields.");
    }
  });

  inputs.forEach(input => {
    input.addEventListener("input", updateProgress);
  });
});
