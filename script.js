function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getHumanChoice(){
    while (true) {
    const choice = prompt('Enter your selection: Rock, Paper, or Scissors', '');
    if (choice === null || choice === "") {
        console.log("User cancelled the prompt.");
        continue;
    }
    const answer = choice.toLowerCase();
    if (answer === 'rock' || answer === 'paper' || answer === 'scissors' ) {
        return answer;
      } else {
        console.log('Try again with Rock, Paper or Scissors');
      }
    }

}

function formatCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        const formatHumanChoice = formatCase(humanChoice);
        const formatcomputerChoice = formatCase(computerChoice);

        const winMatrix = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        }

        if (winMatrix[humanChoice] === computerChoice) {
            console.log(`You win!, ${formatHumanChoice} beats ${formatcomputerChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lost!, ${formatcomputerChoice} beats ${formatHumanChoice}`);
            computerScore += 1;

        }

    }

    for (let i = 0; i < 5; i += 1) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection !== computerSelection ){
            playRound(humanSelection, computerSelection);
        } else {
            console.log('a draw, try again');
            i -= 1;
        }
    }
    if (humanScore > computerScore){
        console.log(`You are the winner with ${humanScore} wins against ${computerScore}`)
    } else {
        console.log(`You were beaten with ${humanScore} wins against ${computerScore}`)
    }
    
  }

  playGame()