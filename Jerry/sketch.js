
let img;

function preload(){
 img = loadImage('cat.jpg');
}


function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(220);
cat(mouseX, 0, 200, 200, 10);
cat(200, mouseY, 200, 200, 5);
cat(200, 0, 200, 200, 20)
cat(0, 200, 200, 200, 2)
}


function cat(tx, ty, tw, th, tsw){
image(img, tx,ty, tw, th)
filter(GRAY);
strokeWeight(tsw);
line(tx, ty, (tw+tx), (th+ty));
}