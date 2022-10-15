/**
 * Randomizes a selection in {0,1,2}
 * @returns computer's choice
 */
function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            console.log("Computer picks rock!");
            break;
        case 1:
            console.log("Computer picks paper!");
            break;
        case 2:
            console.log("Computer picks scissors!");
            break;
    }
    return randomNum;
}

/**
 * Prompt the player's choice.
 * @param {*} extraMessage used to alert the player to input a desirable pick
 * @returns player choice
 */
function selectionPrompt(round, extraMessage = ""){
    let pick = prompt(`Round ${round}:\nrock, paper,or scissors ? (case insensitive)${extraMessage}`);
    return pick;
}

/**
 * Projects the player's choice to {0 (rock),1 (paper),2 (scissors)} 
 * and reprompts if input is undesirable.
 * @param {*} choice
 * @returns projected number
 */
function playerSelection(choice, round){
    switch (choice.toUpperCase()) {
        case "ROCK":
            console.log("You picked rock!");
            return 0;
        case "PAPER":
            console.log("You picked paper!");
            return 1;
        case "SCISSORS":
            console.log("You picked scissors!");
            return 2;
        //in case it fails
        default:
            return playerSelection(selectionPrompt(round,"\nPlease pick from available choices."),round);
    }
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

function game(){
    let maxRounds = 5;
    let wins = 0;
    let draws = 0;

    for (let i=1; i<=maxRounds; i++){
        console.log(`*Round ${i}*`);
        if ((result = playRound(playerSelection(selectionPrompt(i),i), computerPlay())) == "You win!" )
            wins++;
        else if (result == "Draw!")
            draws++;
        console.log(result);
    }
    alert(`Wins ${wins+"/"+maxRounds}\nDraws ${draws+"/"+maxRounds}\nlosses ${(maxRounds-wins-draws)+"/"+maxRounds}`);
}

game();