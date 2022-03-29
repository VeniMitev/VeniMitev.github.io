let position = 1; 
const gridSize = 100; 

function createGrid() {
  let grid = document.getElementById('target')
  for (let i = 0; i < 101; i++) {
    if (i > 0){
      let newDiv = document.createElement('div');
      newDiv.id = `n${i}`;
      newDiv.innerHTML = i;
      grid.appendChild(newDiv);
    }   
  }
}

function move() {
    setInterval(() => {
      if (position <= gridSize){
        toggle(position)
        toggle(position-1)
        position += 1;
      } 
    }, 100);
}

function toggle(position) {
  if(position > 0) {
    let activeCell = document.getElementById(`n${position}`);
    activeCell.classList.toggle('on');
  } else {
    return 0
  }
  
}

