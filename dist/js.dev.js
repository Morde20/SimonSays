"use strict";

var colors = ["blue", "green", "red", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 1;

function computerPickColor() {
  var alerts = document.getElementById("alerts");
  alerts.setAttribute("style", "display:inherit");
  var changableTitle = document.getElementById("changableTitle");
  var startBtn = document.getElementById("startBtn");
  startBtn.setAttribute("style", "display:none;");
  changableTitle.innerHTML = "Level ".concat(level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];
  var audio = new Audio("sounds/".concat(randomColor, ".mp3"));
  audio.play();
  animatedBtn(randomColor);
  gamePattern.push(randomColor);
  yourTurnAlert();
}

function yourTurnAlert() {
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = "Your Turn!";
}

function computersTurnAlert() {
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = "Wait for computer's turn:";
}

function clearAlerts() {
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = "";
}

function alertSequence() {
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = "Good Job, Sequence so far: <br> ".concat(gamePattern);
}

function handleClick(e) {
  var pickedColor = e.target.name;
  userPattern.push(pickedColor);
  var indexOfPickedColor = userPattern.indexOf(pickedColor);
  var audio = new Audio("sounds/".concat(pickedColor, ".mp3"));
  audio.play();
  animatedBtn(pickedColor);

  if (userPattern[indexOfPickedColor] == gamePattern[indexOfPickedColor]) {
    if (userPattern.length == gamePattern.length) {
      if (userPattern[userPattern.length - 1] == gamePattern[gamePattern.length - 1]) {
        userPattern = [];
        alertSequence();
        setTimeout(computersTurnAlert, 2500);
        setTimeout(computerPickColor, 3800);
        level++;
      } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        document.body.setAttribute("class", "gameover");
        var changableTitle = document.getElementById("changableTitle");
        changableTitle.innerHTML = "Game Over , Refresh To Start Again!";
        var alerts = document.getElementById("alerts");
        alerts.setAttribute("style", "display:none");
      }
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.body.setAttribute("class", "gameover");

    var _changableTitle = document.getElementById("changableTitle");

    _changableTitle.innerHTML = "Game Over <br> Refresh To Start Again!";

    var _alerts = document.getElementById("alerts");

    _alerts.innerHTML = "You have reached level ".concat(level);
  }
} // function showSequence(){
//     gamePattern.forEach((color,i) => {
//         setTimeout(() => {
//             var audio = new Audio(`sounds/${color}.mp3`);
//             audio.play();
//             animatedBtn(color);
//         },i*2000)
//     })
// }


function animatedBtn(color) {
  var clickedColor = document.getElementById("".concat(color));
  clickedColor.animate([{
    transform: 'scaleX(1.25)'
  }], {
    duration: 500
  });
}