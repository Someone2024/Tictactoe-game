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

function displayBoard() {
  for (let i = 0; i < GameBoard.Board.length; i++) {
    const markDiv = document.createElement("button");
    markDiv.textContent = GameBoard.Board[i];
    markDiv.classList.add("mark");
    markDiv.addEventListener("click", () => {
      if (markDiv.textContent === "" && currentTurn) {
        markDiv.textContent = player1.marker;
        GameBoard.Board[i] = player1.marker;
        currentTurn = false;
        
      }else if (markDiv.textContent === "" && !currentTurn){
        markDiv.textContent = player2.marker
        GameBoard.Board[i] = player2.marker;
        currentTurn = true
      }
      console.log(GameBoard.Board)
      checkWinner()
    });
    board.append(markDiv);
  }
}
function checkWinner(){
  for (let i = 0; i < GameBoard.Board.length; i++) {
    if(GameBoard.Board[i] + 2 === player1.marker){
      console.log("el pepe");
    }    
  }
} 
displayBoard();


//GO to https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe
//to find out whats left to do