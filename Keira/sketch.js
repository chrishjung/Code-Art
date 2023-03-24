let lnBranch;
let r;
let g;
let b;

function setup() {
  createCanvas(1200, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2, height);
  branch(200);
}

function branch(lnBranch){


r = random(0, 255)
g = random(0, 255)
b = random(0, 255)
stroke(r, g, b);
fill (mouseX,mouseY,b);
line(0,0,0, - lnBranch);
ellipse (0, -lnBranch, 10);

//move n rotate origin
translate (0, -lnBranch)
rotate(30)
//recursive code
if(lnBranch > 4) {

  push();
  rotate(mouseY);
  branch (lnBranch/1.5)
  pop();
  push();
  rotate(mouseX);
  branch (lnBranch/1.6);
  pop();

}
}
