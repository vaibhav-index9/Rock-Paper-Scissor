function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function userInput() {
    let choice = prompt('Enter your choice : rock , paper, or scissor');
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
        return 'D'
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Player win');
        return 'P'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Player win');
        return 'P'
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Player win');
        return 'P'
    }
    else {
        console.log('Player choose ' + playerSelection + ' and computer choose ' + computerSelection + ' so Computer win');
        return 'C'
    }
}

function game() {
    var player = 0;
    var computer = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = userInput();
        const computerSelection = getComputerChoice();
        var score = (playRound(playerSelection, computerSelection));
        if (score == 'P') {
            player += 1
        }
        else if (score == 'C') {
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
