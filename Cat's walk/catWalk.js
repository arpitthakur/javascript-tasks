const img = document.querySelector("img");
let walkImg = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
let danceGif =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";


let styleOfimg = 0;

let incCounter = 0;
let screenWidth = window.innerWidth;
let imgWidth = img.width;
let totalTime = (screenWidth - imgWidth) / 10;

const fiveSecondWait = 5000 / 50; 

function catWalk() {
  

  img.style.left = `${styleOfimg}px`;
  incCounter += 1;

  if (incCounter < totalTime / 2) {
     
    styleOfimg += 10;
  } else if (
    incCounter >= totalTime / 2 &&
    incCounter < totalTime / 2 + fiveSecondWait
  ) {
   
    img.src == walkImg ? (img.src = danceGif) : pass;
  } else if (
    incCounter >= totalTime / 2 + fiveSecondWait &&
    incCounter < totalTime + fiveSecondWait + imgWidth / 10
  ) {
    
    styleOfimg += 10;
    img.src == danceGif ? (img.src = walkImg) : pass;
  } else {
    styleOfimg = 0;
    incCounter = 0;
  }
}


let show = setInterval(catWalk, 50);
body.onload = show;