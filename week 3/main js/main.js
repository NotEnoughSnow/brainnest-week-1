
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const winLbl = document.getElementById("win");
const lossLbl = document.getElementById("loss");
const drawLbl = document.getElementById("draw");

const resultText = document.getElementById("result");
const subResultText = document.getElementById("sub_result");

const textContainer = document.getElementById("result_container");
const retryButton = document.getElementById("retry");

const countContainer = document.getElementById("count_container");


let disable = false;
let result;
let lossCount = 0;
let winCount = 0;
let drawCount = 0;
let computerPick;

function showRetry(){
    retryButton.style.cssText += "     opacity: 1;   ";
}

function showCount(){
    countContainer.style.cssText += "     opacity: 1;   ";
}

//hides the cards by flipping them
function hideCards(){
    rockBtn.style.cssText += "transform: rotateY(180deg);";
    paperBtn.style.cssText += "transform: rotateY(180deg);";
    scissorsBtn.style.cssText += "transform: rotateY(180deg);";
}

//displays the end-round results
function showText(){
    resultText.textContent = result;
    subResultText.textContent = computerPick;

    winLbl.textContent = "wins : "+winCount;
    lossLbl.textContent = "losses : "+lossCount;
    drawLbl.textContent = "draws : "+drawCount;

    textContainer.style.cssText += " margin-top: 10%; ";
    textContainer.style.cssText += "     opacity: 1;   ";

    setTimeout(showRetry, 1000);
    setTimeout(showCount, 500);

}

//resets all visual states back to the original state.
//deletes the added "element.style" lines
function reset(){
    textContainer.removeAttribute("style");
    retryButton.removeAttribute("style");
    countContainer.removeAttribute("style");
    scissorsBtn.removeAttribute("style");
    paperBtn.removeAttribute("style");
    rockBtn.removeAttribute("style");

    disable = false;
}

function flipAndFade(element){
    element.style.cssText += "transform: rotateY(180deg);";
    element.style.cssText += "     opacity: 0;   ";
}

retryButton.addEventListener("click", () => {
        rockBtn.style.cssText += "transform: rotateY(0deg);";
        paperBtn.style.cssText += "transform: rotateY(0deg);";
        scissorsBtn.style.cssText += "transform: rotateY(0deg);";
    
        flipAndFade(textContainer);
        flipAndFade(countContainer);
        flipAndFade(retryButton);

        setTimeout(reset, 1000);
});

rockBtn.addEventListener("click", () => {
    if(!disable){
        result = playRound(0,computerPlay());
        endRound(result);
    }
});

paperBtn.addEventListener("click", () => {
    if(!disable){
        result = playRound(1,computerPlay());
        endRound(result);
    }
});

scissorsBtn.addEventListener("click", () => {
    if(!disable){
        result = playRound(2,computerPlay());
        endRound(result);
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
            computerPick = "Computer picked rock!";
            break;
        case 1:
            computerPick = "Computer picked paper!";
            break;
        case 2:
            computerPick = "Computer picked scissors!";
            break;
    }
    return randomNum;
}

function endRound(result){
    hideCards();
    disable = true;

    switch (result) {
        case "You win!":
            winCount++;
            break;
        case "You lose!":
            lossCount++;
            break;
        case "Draw!":
            drawCount++;
            break;
        default:
            throw "how";
            break;
    }
    showText();
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
