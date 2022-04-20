let pos = 0;
let direction = 0;
const pacMen = []; // This array holds all the pacmen
let pageWidth = document.getElementById('box').offsetWidth;
let pageHeight = document.getElementById('box').offsetHeight;

// This function returns an object with random values
let setToRandom = (scale) => {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
let makePac = () => {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);
  let pacSize = Math.floor(Math.random() * 150);
  

  let game = document.getElementById('game');
  let newPac = document.createElement('div');
  newPac.id = 'PacMan';
  newPac.className = 'pacman';
  newPac.style.width = pacSize;
  newPac.style.height = pacSize
  

  game.appendChild(newPac);

  let pacEye = document.createElement('div');
  pacEye.className = 'pacman__eye';
  newPac.appendChild(pacEye);

  let pacMouth = document.createElement('div');
  pacMouth.id = 'PacMan-Mouth';
  pacMouth.className = 'pacman__mouth-1';
  newPac.appendChild(pacMouth);

  randomColorPacMan()
  randomColorBackground()

  newPac.style.left = position.x;
  newPac.style.top = position.y;

  // return details in an object
  return {
    position,
    velocity,
    newPac,
  };
}

let raveTime = '';

let raveMode = () => {
  randomColorPacMan();
  randomColorBackground();

  raveTime = setTimeout(raveMode, 500);
}

let updateMouth = () => {
  let mouth = document.querySelectorAll('#PacMan-Mouth');

  for (let i = 0; i < mouth.length; i++) {
    if (mouth[i].classList.contains('pacman__mouth-1')){
      mouth[i].classList.remove('pacman__mouth-1');
      mouth[i].classList.add('pacman__mouth-2');
    } else if (mouth[i].classList.contains('pacman__mouth-2')) {
      mouth[i].classList.remove('pacman__mouth-2');
      mouth[i].classList.add('pacman__mouth-1');
    }
  }

  setTimeout(updateMouth, 400);
  
}

let update = () => {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newPac.style.left = item.position.x;
    item.newPac.style.top = item.position.y;
  });

  setTimeout(update, 20);
}

let checkCollisions = (item) => {
  // TODO: detect collision with all walls and make pacman bounce
  if (
    item.position.x + item.velocity.x + item.newPac.offsetWidth > pageWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newPac.offsetHeight > pageHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

let makeOne = () => {
  pacMen.push(makePac()); // add a new PacMan
}

let randomColorBackground = () => {
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    let pacsMouth = document.querySelectorAll('#PacMan-Mouth');

    for (let i = 0; i < pacsMouth.length; i++) {
        pacsMouth[i].style.background =  "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    
    document.body.style.backgroundColor =  "rgb(" + red + ", " + green + ", " + blue + ")";
}


let randomColorPacMan = () => {
    let red = Math.floor(Math.random() *255)
    let green = Math.floor(Math.random() *255)
    let blue = Math.floor(Math.random() *255)
    let pacs = document.querySelectorAll('#PacMan');

    for (let i = 0; i < pacs.length; i++) {
        pacs[i].style.background =  "rgb(" + red + ", " + green + ", " + blue + ")";
    }
}

let resetColors = () => {
    clearTimeout(raveTime);
    
    let pacsMouth = document.querySelectorAll('#PacMan-Mouth');
    let pacs = document.querySelectorAll('#PacMan');

    for (let i = 0; i < pacs.length; i++) {
        pacs[i].style.background =  "#F2D648";
    }

    for (let i = 0; i < pacsMouth.length; i++) {
        pacsMouth[i].style.background =  'white';
    }

    document.body.style.backgroundColor =  "white";
}

let stopGame = () => {
  window.location.reload();
}