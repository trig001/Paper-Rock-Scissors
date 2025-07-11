let humanScore = 0
let computerScore = 0



function getComputerChoice() {
    const options = ["paper", "rock", "scissors"]
    const randomValue = options[Math.floor(Math.random() * options.length)];
    return(randomValue);
}

function getHumanChoice() {
    const selected = ["paper", "rock", "scissors"];
    let input;
    input = prompt("Please pick Paper/Rock/Scissor");

    if (input === null) {
        return null;
    }

    input = input.toLocaleLowerCase();

    if (selected.includes(input)) {
      return(input)
    } else {
    alert("Invalid Choice. Please enter paper, rock, scissors.")
    }
}

function playRound(getHumanChoice, getComputerChoice){
   
    if (getHumanChoice === getComputerChoice) {
        console.log("It's a tie, try again")
    } else if ((getHumanChoice === "rock" && getComputerChoice === "scissors") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
        (getHumanChoice === "paper" && getComputerChoice === "rock")) {
        console.log("You Win this round, but you beat a basic computer");
        humanScore++;
    } else {
        console.log("You Lose this round, its sad because its a basic computer");
        computerScore++;}

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`)
}

function playGame() {
    while (humanScore < 3 && computerScore < 3){
    const humanChoice = getHumanChoice();
        
    if (humanChoice === null) {
        return;
    }
        if (!humanChoice) {
            continue;
        }
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("Congrats you won the Game")
    } else {
        console.log("Sorry you Lost to a computer")
    }

    alert("Would you want to play again?")
}

