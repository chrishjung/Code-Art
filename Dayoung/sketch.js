let InBranch;
let rotBranch1;
let rotBranch2;

function setup() {
  createCanvas(400, 400);
angleMode (DEGREES)
}

function draw() {
  background(200, 200, 400)
  translate (width/2, height);
  branch (100);
}

function branch (InBranch) {
  rotBranch1 = mouseX;
  rotBranch2 = mouseY;
  stroke (0, 0, 0)
  line (0, 0, 0, -InBranch);
  ellipse (0, -InBranch, 10);
  //MOVE ORIGIN AND ROTATE
  translate(0, -InBranch);
  rotate (30)
  //RECURSIVE CODE
  if (InBranch > 4) {
  
    push ();
    rotate (rotBranch1);
    branch (InBranch/1.2);
    pop ();
    push ();
    rotate (-rotBranch2);
    branch (InBranch/1.6);
    pop ()
  }
}