let img1;
let img2;
let foodX;
let foodY;
let score;
let txt;

function preload() {
  score;
  img1 = loadImage('maxwellCat.png');
  img2 = loadImage('food.png');
  txt = text('score'+score, 10, 60);

}

function setup() {
  score = 0;
  createCanvas(400, 400);
  text('score:'+ score, 10, 60);
}
function draw() {
  background(220);
  image(img1, mouseX, mouseY, 100, 80);
//image(img2, mouseX+100, mouseY, 45, 15);
 if (key === 'f') {
    food();
  }
}



function food(){
  foodX = random(40, 360);
  foodY = random(40, 360);
  image(img2, foodX, foodY, 45, 15);

function checkForFood() {
    point(foodX, foodY);
    if (foodX = mouseX + 100, mouseY + 80) {
      score = score + 1;
      updateFood();
    }
  }
  
function updateFood() {
    food();
  }
  
}


