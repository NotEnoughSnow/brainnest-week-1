
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.getElementById("result");
const subResultText = document.getElementById("sub_result");

let disable = false;
let result;
let computerPick;

function fadeOutEffect(element) {
    var fadeTarget = element;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 30);
}

/*function fadeInEffect(element) {
    var fadeTarget = element;
    var fadeEffect = setInterval(function () {
        fadeTarget.style.opacity += 0.1;

    }, 30);
}

fadeInEffect(resultText); */

function showText(){
    resultText.style.opacity = 1;
    subResultText.style.opacity = 1;
    resultText.textContent = result;
    subResultText.textContent = computerPick;

}

rockBtn.addEventListener("click", () => {
    if(!disable){
        console.log("You picked rock!");
        result = playRound(0,computerPlay());
        fadeOutEffect(rockBtn);
        fadeOutEffect(paperBtn);
        fadeOutEffect(scissorsBtn);
        showText();
        disable = true;
    }
});

paperBtn.addEventListener("click", () => {
    if(!disable){
        console.log("You picked paper!");
        result = playRound(1,computerPlay());
        fadeOutEffect(rockBtn);
        fadeOutEffect(paperBtn);
        fadeOutEffect(scissorsBtn);
        showText();
        disable = true;
    }
});

scissorsBtn.addEventListener("click", () => {
    if(!disable){
        console.log("You picked scissors!");
        result = playRound(2,computerPlay());
        fadeOutEffect(rockBtn);
        fadeOutEffect(paperBtn);
        fadeOutEffect(scissorsBtn);
        showText();
        disable = true;
    }
});

/**
 * Randomizes a selection in {0,1,2}
 * @returns computer's choice
 */
function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            console.log("Computer picks rock!");
            computerPick = "Computer picks rock!";
            break;
        case 1:
            console.log("Computer picks paper!");
            computerPick = "Computer picks paper!";
            break;
        case 2:
            console.log("Computer picks scissors!");
            computerPick = "Computer picks scissors!";
            break;
    }
    return randomNum;
}

/**
 * Substracting the picks results in this distribution:
 * {0,-1,-2},{1,0,-1},{2,1,0} which translates to:
 * {draw,loss,win},{win,draw,loss},{loss,win,draw}.
 * thus, {-2,1} results in a win, {-1,2} results in a loss, and
 * 0 always results in a loss.
 * 
 * @param {*} playerPick 
 * @param {*} computerPick 
 */
function playRound(playerPick, computerPick){
    let result;
    switch (playerPick - computerPick) {
        case -2:
        case  1:
            result = "You win!";
            break;
        case -1:
        case  2:
            result = "You lose!";
            break;
        case 0:
            result = "Draw!";
            break;
    }
    return result;
}
