const x = "X";
const o = "0";
let current_mark;
let x_won;
let o_won;

// Start the game
function startGame(){
  initializeVariables();
  attachEventListeners();
  setScoreBoard();
}
startGame();
// Reset the game, clear board and scores
function resetGame(){
  resetBoard();
  initializeVariables();
  setScoreBoard();
}

// Initialize global variables
function initializeVariables(){
  current_mark = x;
  x_won = 0;
  o_won = 0;
}

// Attach an event listener to all board cells and reset button
function attachEventListeners() {
  document.querySelectorAll('.board-cell').forEach(item => {
    item.addEventListener('click', event => {
      let element = event.target;
      // Check if cell is a valid candidate
      if(element.innerText == null || element.innerText == ""){
        // condition ? option 1: option 2
        current_mark = current_mark == x ? o : x;
        element.innerText = current_mark;
      }

      if (didWin()) {
        alert(current_mark + " Won!");
        current_mark === x ? x_won++ : o_won++;
        resetBoard();
        setScoreBoard();
      }
    })
  });
  document.querySelector('#reset-button').addEventListener('click', event => {
    resetGame();
  })
}

// Update the score on the page
function setScoreBoard(){
  document.querySelector("#x-score").innerText = x_won;
  document.querySelector("#o-score").innerText = o_won;
}

// Reset the board
function resetBoard(){
  // Clear the content of each cell
  document.querySelectorAll('.board-cell').forEach(item => {
    item.innerText = '';
  });
  // Start with o again
  current_mark = x;
}

// Checks if there is a winner
function didWin(){
  let value_1 = document.getElementById('cell-1').innerText;
  let value_2 = document.getElementById('cell-2').innerText;
  let value_3 = document.getElementById('cell-3').innerText;

  let value_4 = document.getElementById('cell-4').innerText;
  let value_5 = document.getElementById('cell-5').innerText;
  let value_6 = document.getElementById('cell-6').innerText;

  let value_7 = document.getElementById('cell-7').innerText;
  let value_8 = document.getElementById('cell-8').innerText;
  let value_9 = document.getElementById('cell-9').innerText;

  // Check if all content in row 1 are the same 1 2 3 => 6
  if(value_1 != '' && value_1 === value_2 && value_2 === value_3){
    return true;
  }
  // Check if all content in row 2 are the same 4 5 6 => 15
  if(value_4 != '' && value_4 === value_5 && value_5 === value_6){
    return true;
  }
  // Check if all content in row 3 are the same 7 8 9 => 24
  if(value_7 != '' && value_7 === value_8 && value_8 === value_9){
    return true;
  }
  // Check if all content in column 1 are the same 1 4 7 => 12
  if(value_1 != '' && value_1 === value_4 && value_4 === value_7){
    return true;
  }
  // Check if all content in column 2 are the same 2 5 8 => 15
  if(value_2 != '' && value_2 === value_5 && value_5 === value_8){
    return true;
  }
  // Check if all content in column 3 are the same 3 6 9 => 18
  if(value_3 != '' && value_3 === value_6 && value_6 === value_9){
    return true;
  }
  // Check if all content in diagonal 1 are the same 1 5 9 => 15
  if(value_1 != '' && value_1 === value_5 && value_5 === value_9){
    return true;
  }
  // Check if all content in diagonal 2 are the same 3 5 7 => 15
  if(value_3 != '' && value_3 === value_5 && value_5 === value_7){
    return true;
  }

  // No winner detected
  return false;
}


