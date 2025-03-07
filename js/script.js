

  // Timer Functionality
  const currentDate = new Date().getTime();
  
  //this code set the timer to 10 days from today
  const targetDate = currentDate + (10 * 24 * 60 * 60 * 1000); 

  // this code updates the countdown every second
  const countdownInterval = setInterval(function() {
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime;

    // this code calculates the time for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); 

    // this code places the result in the countdown 
    document.getElementById("countdown").innerHTML = 
      days + "d " +
      hours.toString().padStart(2, "0") + ":" +
      minutes.toString().padStart(2, "0") + ":" +
      seconds.toString().padStart(2, "0");

    // this code displays a message and stop the timer when the countdown ends
    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000); 
