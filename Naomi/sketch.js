let capture
let imgBorder1
let imgBorder2
let alpha1
let alpha2

function windowResized() {
  resizeCanvas(windowWidth*0.7, windowHeight*0.7) 
 }

function setup() {
  createCanvas(windowWidth*0.7, windowHeight*0.7)
  capture = createCapture(VIDEO)
  capture.hide()
}

function preload(){
  imgBorder1 = loadImage('image/imgborder1.png')
  imgBorder2 = loadImage('image/imgborder2.png')
}

function draw() {
  background(255, 255, 255);
  image(capture, 10, 20, height*0.95*1.25, height*0.95)
  value = imgBorder1
  tint (255, alpha2)
  image (imgBorder2, 0, 0, width, height)
  tint(255, alpha1)
  image(imgBorder1, 0, 0, width, height)
}
  

function keyPressed(){
  if (keyCode === 32 ) {
    if (alpha2==0){
      alpha2=255
      alpha1=0
    }
    else
    alpha2=0
    alpha1=255
    }
  } 
  if (key === 'f') {
let fs = fullscreen();
fullscreen(!fs) 
}

