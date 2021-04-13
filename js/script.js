const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const options = document.querySelector(".options");
const win = document.querySelector(".win");
const draw = document.querySelector(".draw");
const lose = document.querySelector(".lose");
const playAgain = document.querySelector(".button");

/* Computer's choice */
const computerOptions = ['rock', 'scissors', 'paper'];
// const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

/* If player selects Rock */
rock.addEventListener("click", function () {
    const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    if (computerChoice === 'rock') {
        showDraw();
    } else if (computerChoice === 'scissors') {
        showWin();
    } else if (computerChoice === 'paper') {
        showLose();
    }
});

/* If player selects Scissors */
scissors.addEventListener("click", function () {
    const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    if (computerChoice === 'rock') {
        showLose();
    } else if (computerChoice === 'scissors') {
        showDraw();
    } else if (computerChoice === 'paper') {
        showWin();
    }
});

/* If player selects Paper */
paper.addEventListener("click", function () {
    const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    if (computerChoice === 'rock') {
        showWin();
    } else if (computerChoice === 'scissors') {
        showLose();
    } else if (computerChoice === 'paper') {
        showDraw();
    }
});

const showWin = function () {
    options.classList.add("hide");
    win.classList.remove("hide");
    playAgain.classList.remove("hide");
};

const showDraw = function () {
    options.classList.add("hide");
    draw.classList.remove("hide");
    playAgain.classList.remove("hide");
};

const showLose = function () {
    options.classList.add("hide");
    lose.classList.remove("hide");
    playAgain.classList.remove("hide");
};

/* Pressing the Play Again button */

playAgain.addEventListener("click", function () {
    if (options.classList.contains("hide")) {
        options.classList.remove("hide");
        win.classList.add("hide");
        draw.classList.add("hide");
        lose.classList.add("hide");
        playAgain.classList.add("hide");
    } 
});

