const board = document.querySelector('.board')

let cellNum = 50;
let gridWH = board.offsetWidth;

function drawBoard(){
  for(let i = 0; i < cellNum; i++){
    let row = document.createElement('div')
    row.style.display = 'flex'
    row.style.flexDirection = 'row'
    for(let i = 0; i < cellNum; i++){
      let cell = document.createElement('div')
      cell.classList.add('cell')
      cell.style.width = `${(gridWH / cellNum) - 2}px`
      cell.style.height = `${(gridWH / cellNum) - 2}px`
      row.appendChild(cell)
    }
    board.appendChild(row);
  }
}


function game(){
  drawBoard();
}

game();