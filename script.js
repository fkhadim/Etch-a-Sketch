const board = document.querySelector('.board');
const slider = document.querySelector('.slider');
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const msg = document.querySelector('.msg');

let gridWH = board.offsetWidth;
let currentColour = 'black';
let cellNum = slider.value;

function removeBoard(){
  while(board.lastElementChild){
    board.removeChild(board.lastElementChild);
  }
}

function clearBoard(){
  clear.addEventListener('click', () => {
    cell.forEach((e)=> {
      e.target.style.backgroundColor = 'white';
    })
  })
}
function colourCheck() {
  black.addEventListener('click', ()=>{
    currentColour = 'black';
  })
  rainbow.addEventListener('click', ()=>{
    currentColour = 'rainbow';
  })
  eraser.addEventListener('click', ()=>{
    currentColour = 'white';
  })
}

function draw(e){
  if(currentColour === 'black'){
  e.target.style.backgroundColor = 'black'
  }
  else if(currentColour === 'rainbow'){
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255))}, ${Math.random() * (255)}, ${Math.random() * (255)})`
  }
  else if(currentColour === 'white'){
    e.target.style.backgroundColor = `white`
  }
}

function drawBoard(){
  for(let i = 0; i < cellNum; i++){
    let row = document.createElement('div')
    row.style.display = 'flex'
    row.style.flexDirection = 'row'
    row.classList.add('row');
    for(let i = 0; i < cellNum; i++){
      let cell = document.createElement('div')
      cell.classList.add('cell')
      cell.style.width = `${(gridWH / cellNum)}px`
      cell.style.height = `${(gridWH / cellNum)}px`
      cell.addEventListener('mouseover', draw)
      row.appendChild(cell)
      clear.addEventListener(('click'), () => {
        cell.style.backgroundColor = 'white';
      })
    }
    board.appendChild(row);
  }
}


function game(){
  drawBoard();
  slider.oninput = function(){
    if (this.value > 70){
      msg.style.backgroundColor = 'red'
      msg.textContent = 'please enter a value below 70'
    }
    else{
      msg.backgroundColor = 'none'
      msg. textContent = ''
      cellNum = this.value
      removeBoard();
      drawBoard();
    }
  }
  colourCheck();
  clearBoard();
}

game();