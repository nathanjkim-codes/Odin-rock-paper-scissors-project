// Write the logic to get the computer choice

// a. GENERATE random number between 0 and 2 using Math.random
// b. IF random number is 0 THEN
//      RETURN "rock"
//    ELSE IF random number is 1 THEN
//      RETURN "paper"
//   ELSE
//      RETURN "scissors"
// END FUNCTION

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
// f. RETURN humanChoice
// g. END FUNCTION

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors?");
  return humanChoice.trim().toLowerCase();
}
console.log(getHumanChoice());
