let img;
let b;
let b2;
let b3;
const barWidth = 100;
let lastBar = -255;
let mouse_trail = [];
let x;
let speed;

function preload() {
img = loadImage('cd.png')
}

function setup() {
createCanvas(1000, 1000)
colorMode(HSB, width, height, 100);
noStroke();
x = 2;
speed = 3;
b = new BSpread(255,100);
b2 = new BSpread(100,255);
b3= new BSpread(150,200);
}

function draw() {
background(250, 255, 255)
b.display();
 b.move();
  b2.display();
 b2.move();
  b3.display();
 b3.move();
let whichBar = mouseX / barWidth;
if (whichBar !== lastBar) {
  let barX = whichBar * barWidth;
  fill(barX, mouseY, 100);
  rect(barX, 0, barWidth, height);
  lastBar = whichBar;
}
mouse_trail.push(new p5.Vector(mouseX, mouseY));
if (mouse_trail.length > 30) {
mouse_trail.shift();
}
for (let i = 0; i < mouse_trail.length; i++) {
let p = mouse_trail[i];
let size = 40.0 * i / mouse_trail.length;
circle(p.x, p.y, size);
}
x = x + speed;
if (x > 600) {
 speed = -speed;
}
if (x < 0) {
 speed = speed * -1;
}
image(img, x, 250, 400, 400)
}

class BSpread {
  constructor(tempx,tempy){
  this.x=tempx;
    this.y=tempy;
    this.r=100;
    this.xspeed=2;
     this.yspeed=2;
    this.xdirection=random(3);
    this.ydirection=random(3);
  }
   display(){
     noStroke();
   ellipse(this.x,this.y,this.r);
   }
   move() {
     this.x+=this.xspeed*this.xdirection
       this.y+=this.yspeed*this.ydirection
       if(this.x>width||this.x<0) {
         fill(255)             
         this.xdirection=-this.xdirection;
       }
       if(this.y>height||this.y<0){
          fill(255)
         this.ydirection=-this.ydirection;
       }
     }
   }
  
  


