function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function userInput(round) {
    let choice = prompt(`Enter your choice for Round ${round+1} : rock , paper, or scissor`);
    if ((choice.toLowerCase() === 'rock') || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissor') {
        return choice.toLowerCase();
    }
    else {
        console.log('Wrong Input Try Again')
        return userInput()
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissor' && computerSelection == 'scissor')) {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so it is a Draw');
        return 3 // if it's a draw return 3
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Player win');
        return 1 // if player win return 1
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Player win');
        return 1  // if player win return 1
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Player win');
        return 1  // if player win return 1
    }
    else {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Computer win');
        return 2  // if computer win  return 2
    }
}

function game() {
    let player = 0;
    let computer = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = userInput(index);
        const computerSelection = getComputerChoice();
        let winner = (playRound(playerSelection, computerSelection));
        if (winner == 1) {
            player += 1
        }
        else if (winner == 2) {
            computer += 1
        }
        else {
            continue;
        }
    }
    return checkWinner(player, computer)
}

function checkWinner(player, computer) {
    if (player > computer) {
        return console.log('Player win by ' + player + ' point')
    } else if (player < computer) {
        return console.log('Computer win by ' + computer + ' point \nBetter Luck next time')
    } else {
        return console.log('Its a Draw')
    }
}

game();
