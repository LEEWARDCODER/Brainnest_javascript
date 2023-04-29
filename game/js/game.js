game();
function game() {
  let count = 0;
  let endWinner = "Nobody (draw)";

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = getUserInput();
    const report = playRound(playerSelection, computerSelection);
    console.log(report);

    const res = report.split(" ")[1];
    if (res.includes("win") ) count++;
    else if (res.includes("lose")) count--;
  }

  if (count > 0) endWinner = "You";
  else if (count < 0) endWinner = "Computer";
  console.log(`winner is ${endWinner} `);
}

function getUserInput() {
  let playerSelection;
  do {
    const input = prompt(
     "Input your choice from either Rock Paper and Scissor for 5 times, invalid inputs will be ignored",
      ""
    );
    if (input === "" || input === null) continue;

    playerSelection = input.toLocaleLowerCase().trim();;
    playerSelection = playerSelection.replace(
      playerSelection[0],
      playerSelection[0].toUpperCase()
    );
  } while (!["Rock", "Paper", "Scissor"].includes(playerSelection));

  return playerSelection;
}

function playRound(player, computer) {
  let result = "draw";

  if (player === "Rock" && computer === "Paper") result = "lose";
  else if (player === "Rock" && computer === "Rock");
  else if (player === "Rock" && computer === "Scissors") result = "win";
  else if (player === "Paper" && computer === "Rock") result = "win";
  else if (player === "Paper" && computer === "Paper");
  else if (player === "Paper" && computer === "Scissors") result = "lose";
  else if (player === "Scissors" && computer === "Rock") result = "lose";
  else if (player === "Scissors" && computer === "Paper") result = "win";
  else if (player === "Scissors" && computer === "Scissors");

  if (result === "lose") [player, computer] = [computer, player];

  let report = `You ${result}! ${player} beats ${computer}`;
  return report;
}

function computerPlay() {
  // generate a random number between 0 and 3
  const randomNumber = Math.random() * 3;
  let result;

  if (randomNumber >= 0 && randomNumber < 1) result = "Rock";
  else if (randomNumber >= 1 && randomNumber < 2) result = "Paper";
  else if (randomNumber >= 2 && randomNumber < 3) result = "Scissors";
  else throw exception("Random number must be between 0 and 3");

  return result;
}
