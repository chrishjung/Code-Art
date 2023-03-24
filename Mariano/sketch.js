//variables for each image
let img1;
let img2;
let BG;

function preload() {
 img2 = loadImage('frame.png');
 img1 = loadImage('woodblock.png');
}
function setup() {
  createCanvas(1600, 1017);
}

function draw() {
  //loading all three images
  clear()
  woodblock(300, 0, 300, 300, 10);
  woodblock(650, 0, 300, 300, 5);
  woodblock(1000, 0, 300, 300, 5);
  woodblock(300, 350, 300, 300, 10);
  woodblock(650, 350, 300, 300, 5);
  woodblock(1000, 350, 300, 300, 5);
  woodblock(300, 700, 300, 300, 10);
  woodblock(650, 700, 300, 300, 5);
  woodblock(1000, 700, 300, 300, 5);
  image(img2, 0, 0, width, height)
  
}


function frame(){
image(img2, 0, 0)
}

function woodblock(tx, ty, tw, th){
 image(img1, tx, ty, tw, th) 
}

//this is how to make any function

// you can make a function out of everything, for example; if we remove the loading

// image into this function, of course it doesn't work anymore. But if you add
// 'cat();' into any other function below. It works, not only that, that applies
// to filter, stroke, and line. Not only that but you can multiply that

