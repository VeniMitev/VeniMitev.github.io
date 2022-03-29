    let pageWidth = document.getElementById('box').offsetWidth;
    
    var pos = 0;
    const pacArray = [
        // Going forward
        ["pacman__mouth-1", "pacman__mouth-2"],
        // Going back
        ["pacman__mouth-3", "pacman__mouth-4"]
    ];
    var direction = 0;
    var focus = 0;

    function Run() {
        let img = document.getElementById("PacMan");
        let mouth = document.getElementById("PacMan-Mouth")
        let imgWidth = document.getElementById('PacMan').offsetWidth;
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
        mouth.className = pacArray[direction][focus];
        if (direction) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
        
        setTimeout(Run, 200);
    }

    function randomColorBackground(){
        let red = Math.floor(Math.random() *255);
        let green = Math.floor(Math.random() *255);
        let blue = Math.floor(Math.random() *255);
        
        document.body.style.backgroundColor =  "rgb(" + red + ", " + green + ", " + blue + ")";
        document.getElementById("PacMan-Mouth").style.background =  "rgb(" + red + ", " + green + ", " + blue + ")";
    }
  

    function randomColorPacMan(){
        let red = Math.floor(Math.random() *255)
        let green = Math.floor(Math.random() *255)
        let blue = Math.floor(Math.random() *255)

        return document.getElementById("PacMan").style.background =  "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    function checkPageBounds(direction, imgWidth, pos, pageWidth) {
        
        if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
        if (direction == 1 && pos < 0) direction = 0;

        return direction;
    }

    function resetColors(){
        document.getElementById("PacMan").style.background =  "#F2D648";
        document.body.style.backgroundColor =  "white";
        document.getElementById("PacMan-Mouth").style.background = "white";
    }