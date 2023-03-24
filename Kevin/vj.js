let inbranch;
let outbranch1;
let outbranch2;
let img;
function preload()
{
  img=loadImage("pictures/grass.png")
}
function setup(){
createCanvas(400,400)
angleMode(DEGREES);
}


function draw(){
  background(240);
  translate(width/2,height);
  branch(100);
}

function branch(inbranch)
{
outbranch1 =mouseX;
outbranch2=mouseY;
  stroke (0,0,0); 
  line(0,0,0,-inbranch);
  
  image(img,0,-inbranch,50,50) 
  translate(0,-inbranch)
  
  if(inbranch > 4 )
  {
    push();
    rotate(outbranch1);
    branch(inbranch/1.5);
    pop();
    push();
    rotate(-outbranch2);
    branch(inbranch/1.6);
    pop()
  
}
}