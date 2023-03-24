let xoffset =600
let maus;
let size=100 

let mousesize=100
let run=0
let pushu=0
let sped = 0
let spod =0
let span= 0
function preload (){
    maus=loadImage("pictures/maus.png");
    button=loadImage("pictures/pushu button.png")
    ran=loadImage("pictures/giphy.gif")
    running=loadImage("pictures/running fox.png")
    grassimg=loadImage("pictures/grass.png")
    mount=loadImage("pictures/mountain.png")
    tree=loadImage("pictures/tree.png")
}


function setup() {
    createCanvas( windowWidth,windowHeight)
    
   
}


function draw (){
    pushu=0
    background(123,123,123) 
    mountain(spod,0)
 mountain(spod,windowWidth) 
    trees(span,windowWidth)
    
    
    image (button,windowWidth/2,windowHeight/2,mousesize, mousesize)
    

    
    image (running,run,windowHeight/1.45,360,169)
    image(maus,mouseX,mouseY,size,size)

   if (mouseIsPressed)
    {size=90} 
    else{size=100} 
mousesize=100
    if(mouseIsPressed)
    {if(mouseX>width/2){if (mouseX<windowWidth/2+250){if(mouseY>windowHeight/2){if (mouseY <windowHeight/2+250){mousesize=90,pushu = true}}}}}



  if (pushu=== true){run=run+10,pushu=0,sped= sped-40 ,spod=spod-3 ,span=span-40}
  if(run>10){
   run=run-5}
  
trees(span,windowWidth);
 grass(sped,0);
 sped = sped-20
 spod= spod-3
 span= span-20

 grass(sped,1000/3)
 grass(sped,1000/3*2)
 grass(sped,1000/3*3)
 grass(sped,1000/3*4)
 
 
 if (sped<-1000/3)
 {sped=0}
 if (spod<-windowWidth)
 {spod=0}
 if (span<-windowWidth*random(2,9))
    {span=0}
 }
 

function grass(offset,clone){
image(grassimg ,offset+clone, windowHeight/1.45, 1000/3,200  )
}
  
function mountain(offset,clone){
    image(mount,offset+clone,0,windowWidth,windowHeight)
}
function trees(offset,clone){
    image(tree,offset+clone,windowHeight/2.2,300,300)
}

