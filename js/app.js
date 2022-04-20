document.getElementById("year").innerHTML = new Date().getFullYear()


window.onscroll = function() {myFunction(), scrollFunction()};
// window.onmouseover = function() {cardTextBG()}

let header = document.getElementById("myHeader");

let sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// let card = document.getElementById('card-hover')
// let cardBG = document.getElementsByID('card-bg')

// card.addEventListener('mouseover', function() {
//   cardBG.style.width = '100%';
// });

// // let cardTextBG = () => {
//     cardBG.style.width = '100%';
// }