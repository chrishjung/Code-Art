let lnBranch;
let rotBranch1;
let rotBranch2;



function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width/2, height)
  branch(150);
}


function branch(lnBranch){
rotBranch1 = mouseX;
rotBranch2 = mouseY;
stroke(0, 0, 0)
line(0, 0, 0, -lnBranch);
fill(255,0, 124)
quad(20, -lnBranch,0, 20, 10, 30, 20, 10, 20 , 10 , 20, 10)
//MOVE ORIGIN AND ROTATE
translate(0, -lnBranch) 

//RECURSIVE CODE
if(lnBranch > 4){

push();
rotate(rotBranch1);
 branch(lnBranch/1.5)
 pop();
 push();
 rotate(-rotBranch2);
 branch(lnBranch/1.6)
 pop();

}
} 
