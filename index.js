const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minutes");
const secondSpan = document.getElementById("seconds");
const ampmSpan = document.getElementById("ampm");
const dateSpan = document.getElementById("date");
function updateTime() {
    const now = new Date();
    
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const ampm = hour >= 12 ? "PM" : "AM";
   
    const date = now.toDateString();
     
    hourSpan.innerText = formatTime(hour % 12 || 12);
    minuteSpan.innerText = formatTime(minute);
    secondSpan.innerText = formatTime(second);
    ampmSpan.innerText = ampm;
    dateSpan.innerText = date;
  }
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  setInterval(updateTime, 1000);
  
  updateTime();