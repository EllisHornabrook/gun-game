"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var targetMiss = document.querySelectorAll('.target-miss');
var targetPoor = document.querySelectorAll('.target-poor');
var targetAverage = document.querySelectorAll('.target-average');
var targetGreat = document.querySelectorAll('.target-great');
var targetPerfect = document.querySelectorAll('.target-perfect');
var startGame = document.querySelector('#start-game');
var playAgain = document.querySelector('#play-again');
var inputOne = document.querySelector('#counter');
var inputTwo = document.querySelector('#final-score');
var header = document.querySelector('.header');
var gunRange = document.querySelector('.gun-range');
var startMenu = document.querySelector('.start-menu');
var gameOver = document.querySelector('.game-over');
var bang = document.querySelector("#shot");
var gun = document.getElementById('gun');
var clickScores = {
  '.target-miss': 1,
  '.target-poor': 5,
  '.target-average': 10,
  '.target-great': 15,
  '.target-perfect': 25
};

var addShotEventListeners = function addShotEventListeners() {
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        className = _Object$entries$_i[0],
        score = _Object$entries$_i[1];

    document.querySelectorAll(className).forEach(function (element) {
      element.addEventListener('click', function (event) {
        shot();
        inputOne.value = parseInt(inputOne.value) + score;
        inputTwo.value = parseInt(inputTwo.value) + score;
        element.closest(".target-miss").style.zIndex = "-2";
        event.stopPropagation();
      });
    });
  };

  for (var _i = 0, _Object$entries = Object.entries(clickScores); _i < _Object$entries.length; _i++) {
    _loop();
  }

  ;
};

var resetGame = function resetGame() {
  console.log("click");
  shot();
  gameOver.style.display = "none";
  header.style.display = "flex";
  startMenu.style.display = "none";
  inputOne.value = "0";
  inputTwo.value = "0";
  gunRange.style.display = "grid";
  targetMiss.forEach(function (element) {
    return element.style.zIndex = "0";
  });
  display = document.querySelector('#time');
  startTimer(10, display);
  addShotEventListeners();
};

var timer = function timer() {
  gameOver.style.display = "flex";
  header.style.display = "none";
  gunRange.style.display = "none";
  clearInterval();

  if (inputTwo.value >= 75) {
    document.querySelector('#good-score').style.display = "block";
    document.querySelector('#okay-score').style.display = "none";
    document.querySelector('#bad-score').style.display = "none";
  } else if (inputTwo.value >= 50) {
    document.querySelector('#okay-score').style.display = "block";
    document.querySelector('#good-score').style.display = "none";
    document.querySelector('#bad-score').style.display = "none";
  } else {
    document.querySelector('#bad-score').style.display = "block";
    document.querySelector('#good-score').style.display = "none";
    document.querySelector('#okay-score').style.display = "none";
  }

  ;
};

var shot = function shot() {
  bang.style.display = "inline";
  setTimeout(function () {
    return bang.style.display = "none";
  }, 110);
};

document.addEventListener('click', function () {
  shot();
});

var onMouseMove = function onMouseMove(e) {
  gun.style.left = e.pageX;
};

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousemove', function (ev) {
  document.getElementById('shot').style.transform = 'translateY(' + (ev.clientY - 35) + 'px)';
  document.getElementById('shot').style.transform += 'translateX(' + (ev.clientX - 41.5) + 'px)';
}, false);

startTimer = function startTimer(duration, display) {
  console.log("timer");

  var _loop2 = function _loop2(i) {
    setTimeout(function () {
      display.textContent = duration - i;
      console.log(i);
      if (i === duration) timer();
    }, i * 1000);
  };

  for (var i = 0; i <= duration; i++) {
    _loop2(i);
  }
};

playAgain.addEventListener('click', resetGame);
startGame.addEventListener('click', resetGame);