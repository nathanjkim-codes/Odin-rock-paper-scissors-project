// Write the logic to get the computer choice

// a. GENERATE random number between 0 and 2 using Math.random
// b. If random number is 0 THEN
//      return "rock"
//    Else if random number is 1 THEN
//      return "paper"
//   Else
//      return "scissors"
// End function

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());

// Write the logic to get the human choice

// a. Make a function called getHumanChoice
// b. Ask the person: "rock, paper, scissors?" (use prompt)
// c. Save what the person typed in a variable called humanChoice
// d. Change the letters in humanChoice to lowerCase
// f. Return humanChoice
// g. End function

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors?");
  return humanChoice.trim().toLowerCase();
}
console.log(getHumanChoice());

// Declare the players score variables

// a. Create a variable called humanScore
// b. Set humanScore to 0
// c. Make a variable called computerScore
// d. Set computerScore to 0

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

// a. Create a function named playRound with two parameters: humanChoice and computerChoice
// b. Convert humanChoice to lowercase
// c. If humanChoice equals computerChoice, return "It's a tie!"
// d. Else if humanChoice beats computerChoice, return "You win! humanChoice beats computerChoice"
// e. Else, return "You lose! computerChoice beats humanChoice"

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.trim().toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
