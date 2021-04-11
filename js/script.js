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
        options.classList.remove("options-hide");
        /* show .results class */
    }
})