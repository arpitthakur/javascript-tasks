function displayCurrentTime() {
    const currentDate = new Date();
    const p = document.getElementById("date");
    p.innerHTML = currentDate.toLocaleTimeString();
  }
  
  window.onload = setInterval(displayCurrentTime, 1000);
  