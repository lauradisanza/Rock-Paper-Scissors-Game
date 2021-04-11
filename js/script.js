/* Variables for the person's choice? */
 var rock = document.querySelector("#rock");
 var scissors = document.querySelector("#scissors");
 var paper = document.querySelector("#paper");
 var options = document.querySelector(".options");


/* Computer's choice */
var computerOptions = ['rock', 'scissors', 'paper'];
var computerChoice = computerOptions[Math.floor(Math.random()*3)];

/* Now the conditions for win, lose or draw */
/* are we doing a function with a click event? with all of the ifs nestled on the inside? */

rock.addEventListener("click", function () {
    if (computerChoice === 'rock') {
        showDraw();
    } else if (computerChoice === 'scissors') {
        showWin();
    } else if (computerChoice === 'paper') {
        showLose();
    }
});

scissors.addEventListener("click", function () {
    if (computerChoice === 'rock') {
        showLose();
    } else if (computerChoice === 'scissors') {
        showDraw();
    } else if (computerChoice === 'paper') {
        showWin();
    }
});

paper.addEventListener("click", function () {
    if (computerChoice === 'rock') {
        showWin();
    } else if (computerChoice === 'scissors') {
        showLose();
    } else if (computerChoice === 'paper') {
        showDraw();
    }
});

var showWin = function () {
    /* remove div */
    /* show winner image and play again button */
};

var showDraw = function () {
    /* remove div */
    /* show draw image and play again button */
};

var showLose = function () {
    /* remove div */
    /* show try again image and play again button */
};

/* button.addEventListener("click", function () {
    when you click the Play Again button and it returns to normal
}); 

Will need a button variable once that is added */