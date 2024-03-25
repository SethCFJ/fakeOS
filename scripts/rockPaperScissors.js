let player;
let computer;
const playerText = document.querySelector(
  ".appModal_content--rockPaperScissors_heading--player"
);
const computerText = document.querySelector(
  ".appModal_content--rockPaperScissors_heading--computer"
);
const resultText = document.querySelector(
  ".appModal_content--rockPaperScissors_heading--result"
);

const choiceBtns = document.querySelectorAll(
  ".appModal_content--rockPaperScissors_button"
);
const rockPaperScissors = () => {
  choiceBtns.forEach((button) =>
    button.addEventListener("click", () => {
      player = button.textContent.trim();
      computerChoice();
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = calculateWinner();
    })
  );
};

function computerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}
function calculateWinner() {
  if (player == computer) {
    return "It's a draw!";
  } else if (computer == "Rock") {
    return player == "Paper" ? "You Win!" : "You Lose!";
  } else if (computer == "Scissors") {
    return player == "Rock" ? "You Win!" : "You Lose!";
  } else if (computer == "Paper") {
    return player == "Scissors" ? "You Win!" : "You Lose!";
  }
}
export default rockPaperScissors;
