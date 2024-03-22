setInterval(showTime, 1000);

function showTime(clock) {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();

  let am_pm = "AM";
  // turn into 12 hour clock format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  let currentTime = hour + ":" + min + am_pm;

  document.getElementById(clock).innerText = currentTime;
}

export default showTime;
