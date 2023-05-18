const board = document.querySelector(".board");

const GameBoard = (() => {
  const Board = ["", "", "", "", "", "", "", "", ""];
  return { Board };
})();

const Player = (mark) => {
  const marker = mark;
  return { marker };
};

const player1 = Player("X");
const player2 = Player("O");
let currentTurn = true;
let winner = "";

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6], // Diagonal from top-right
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      GameBoard.Board[a] !== "" &&
      GameBoard.Board[a] === GameBoard.Board[b] &&
      GameBoard.Board[b] === GameBoard.Board[c]
    ) {
      winner = GameBoard.Board[a];
      break;
    }
  }
}

function displayBoard() {
  const winnerAd = document.createElement("p");
  const restar = document.createElement("button");
  restar.textContent = "Restar"
  document.body.appendChild(winnerAd);
  document.body.appendChild(restar);

  for (let i = 0; i < GameBoard.Board.length; i++) {
    const markDiv = document.createElement("button");

    markDiv.textContent = GameBoard.Board[i];
    markDiv.classList.add("mark");
    markDiv.addEventListener("click", () => {
      if (markDiv.textContent === "" && currentTurn) {
        markDiv.textContent = player1.marker;
        GameBoard.Board[i] = player1.marker;
        currentTurn = false;
      } else if (markDiv.textContent === "" && !currentTurn) {
        markDiv.textContent = player2.marker;
        GameBoard.Board[i] = player2.marker;
        currentTurn = true;
      }

      console.log(GameBoard.Board);
      checkWinner();

      if (winner === "X") {
        winnerAd.textContent = "Player X wins";
      } else if (winner === "O") {
        winnerAd.textContent = "Player O wins";
      }
    });

    restar.addEventListener("click", ()=>{
      GameBoard.Board = ["", "", "", "", "", "", "", "", ""];
      console.log(GameBoard.Board)
      markDiv.textContent = GameBoard.Board[i];
      currentTurn = true;
    });
    board.append(markDiv);
  }
}

displayBoard();