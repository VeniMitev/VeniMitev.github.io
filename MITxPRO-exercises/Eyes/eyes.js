const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';


  for (let i = 0; i < 3; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};


function randomColorBackground(){
  let red = Math.floor(Math.random() *255);
  let green = Math.floor(Math.random() *255);
  let blue = Math.floor(Math.random() *255);
  
  document.body.style.backgroundColor =  "rgb(" + red + ", " + green + ", " + blue + ")";
  document.getElementById("body").style.background =  "rgb(" + red + ", " + green + ", " + blue + ")";
}