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
