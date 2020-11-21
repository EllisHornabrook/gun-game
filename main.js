const targetMiss = document.querySelectorAll('.target-miss');
const targetPoor = document.querySelectorAll('.target-poor');
const targetAverage = document.querySelectorAll('.target-average');
const targetGreat = document.querySelectorAll('.target-great');
const targetPerfect = document.querySelectorAll('.target-perfect');
const startGame = document.querySelector('#start-game')
const playAgain = document.querySelector('#play-again')
const inputOne = document.querySelector('#counter');
const inputTwo = document.querySelector('#final-score');
const header = document.querySelector('.header')
const gunRange = document.querySelector('.gun-range')
const startMenu = document.querySelector('.start-menu')
const gameOver = document.querySelector('.game-over')
const gun = document.getElementById('gun');

const clickScores = {
    '.target-miss': 1,
    '.target-poor': 5,
    '.target-average': 10,
    '.target-great': 15,
    '.target-perfect': 25
};

const addShotEventListeners = () => {
    for (const [className, score] of Object.entries(clickScores)) {
        document.querySelectorAll(className).forEach(element => {
            element.addEventListener('click', (event) => {
                inputOne.value = parseInt(inputOne.value) + score;
                inputTwo.value = parseInt(inputTwo.value) + score;
                element.closest(".target-miss").style.zIndex = "-2";
                event.stopPropagation();
            });
        });
    };
};

const resetGame = () => {
    gameOver.style.display = "none";
    header.style.display = "flex";
    startMenu.style.display = "none";
    inputOne.value = "0"
    inputTwo.value = "0"
    gunRange.style.display = "grid";
    targetMiss.forEach(element => element.style.zIndex = "0");
    display = document.querySelector('#time');
    startTimer(10, display);
    addShotEventListeners();
}

const timer = () => {
    gameOver.style.display = "flex";
    header.style.display = "none";
    gunRange.style.display = "none";
    clearInterval();

    if (inputTwo.value >= 75) {
        document.querySelector('#good-score').style.display = "block"
        document.querySelector('#okay-score').style.display = "none"
        document.querySelector('#bad-score').style.display = "none"
    } else if (inputTwo.value >= 50) {
        document.querySelector('#okay-score').style.display = "block"
        document.querySelector('#good-score').style.display = "none"
        document.querySelector('#bad-score').style.display = "none"
    } else {
        document.querySelector('#bad-score').style.display = "block"
        document.querySelector('#good-score').style.display = "none"
        document.querySelector('#okay-score').style.display = "none"
    };
};

const onMouseMove = (e) =>{
  gun.style.left = e.pageX;
};
document.addEventListener('mousemove', onMouseMove);

startTimer = (duration, display) => {
    for (let i = 0; i <= duration; i++) {
        setTimeout(() => {
            display.textContent = duration - i;
            if (i === duration) timer()
        }, (i * 1000));
    }
};

playAgain.addEventListener('click', resetGame);
startGame.addEventListener('click', resetGame);