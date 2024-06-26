let humanScore = 0;
let computerScore = 0;

const result = document.querySelector('#result');
const humanScoreDisplay = document.querySelector('#humanScore');
const computerScoreDisplay = document.querySelector('#computerScore');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const choices = document.querySelectorAll('button');

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (humanScore < 5 || computerScore < 5) {
            playRound(e.currentTarget.dataset.choice);
        }

    })
});

function updateScoreDisplay() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        choices.forEach(choice => {
            choice.disabled = true;
        });
    }
    if (humanScore === 5) {
        result.textContent = `You beat the computer!`
    } else if (computerScore === 5) {
        result.textContent = `The computer won!`
    }
}

function formatCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    const formatHumanChoice = formatCase(humanChoice);
    const formatcomputerChoice = formatCase(computerChoice);

    const winMatrix = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }


    if (humanChoice === computerChoice) {
        return result.textContent = `It's a Draw! ${formatHumanChoice} matches ${formatcomputerChoice}`
    }

    if (winMatrix[humanChoice] === computerChoice) {
        humanScore += 1;
        updateScoreDisplay();
        result.textContent = `You win! ${formatHumanChoice} beats ${formatcomputerChoice}`;
        checkForWinner();
    } else {
        computerScore += 1;
        updateScoreDisplay();
        result.textContent = `You lost! ${formatcomputerChoice} beats ${formatHumanChoice}`;
        checkForWinner();
    }
}


function playGame() {





    // for (let i = 0; i < 5; i += 1) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     if (humanSelection !== computerSelection ){
    //         playRound(humanSelection, computerSelection);
    //     } else {
    //         console.log('a draw, try again');
    //         i -= 1;
    //     }
    // }
    if (humanScore > computerScore) {
        console.log(`You are the winner with ${humanScore} wins against ${computerScore}`)
    } else {
        console.log(`You were beaten with ${humanScore} wins against ${computerScore}`)
    }

}
