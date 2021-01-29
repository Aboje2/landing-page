let time = document.getElementById("time");
let greetings = document.getElementById("greetings");
let name = document.getElementById("name");
let focused = document.getElementById("focus");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let sec = date.getSeconds();

  //set pm
  const pmAm = hour < 12 ? "AM" : "PM";

  // set the time format
  hour = hour % 12 || 12;

  //create zero
  function makeZero(n) {
    parseInt(n, 10);
    return (n < 10 ? "0" : "") + n;
    console.log(n);
  }
  // display time on DOM
  time.innerHTML = `${makeZero(hour)}<span>:</span>${makeZero(
    minute
  )}<span>:</span>${makeZero(sec)} ${pmAm}`;
  setTimeout(showTime, 1000);
}

function getBg() {
  const today = new Date();
  let hours = today.getHours();

  if (hours < 12) {
    document.body.style.backgroundImage = "url('./good-morning.jpg')";
    document.body.style.backgroundSize = "cover";
    greetings.textContent = "Good Morning";
  } else if (hours < 18) {
    document.body.style.backgroundImage = "url('./good-afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
    greetings.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = "url('./good-night.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    greetings.textContent = "Good Night";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focused") === null) {
    focused.textContent = "[Enter Focus]";
  } else {
    focused.textContent = localStorage.getItem("focused");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    console.log(e);
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    console.log(e);
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("focused", e.target.innerText);
      focused.blur();
    }
  } else {
    localStorage.setItem("focused", e.target.innerText);
  }
}
focused.addEventListener("blur", setFocus);
focused.addEventListener("keypress", setFocus);
name.addEventListener("keypress", setName);
name.addEventListener("keypress", setName);

// Run

showTime();
getFocus();
getName();
getBg();
