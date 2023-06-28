const hourl = document.getElementById("hour");
const minutel = document.getElementById("minutes");
const secondl = document.getElementById("seconds");
const ampml = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourl.innerText = h;
  minutel.innerText = m;
  secondl.innerText = s;
  ampml.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
