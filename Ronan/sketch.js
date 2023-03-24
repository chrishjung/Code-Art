let rectx = 0
let recty = 0
let speed = 10;
let speedy = 10
let r = 200
let cr = 150
let cr2 = 400
let cr3 = 50
let colorchange = 1
let imageName
let impact
let blob
let canvas2
function preload()
{
  imageName = loadImage('images/Asset 6.png')
  impact = loadImage('images/Asset 1.png')
  blob = loadImage('images/Asset 4.png')
  //image(blob, rectx + (10 * speed) - 25, recty + (10 * speedy) - 25,cr3, cr3)
}
function setup() { 
  rectx;
  speed;
  canvas2 = createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  //translate(rectx + (10 * speed) - 25, recty + (10 * speedy) - 25)
  //image(imageName, 500, 250)
  //r = random(1, 255)
  background(0, 0, 0, 10);
  noStroke();
  fill(r, 221, r, 60)
  r = r + colorchange
  if(r > 255)
  {
    colorchange = colorchange * -1
  }
  else if(r < 0)
  {
    colorchange = colorchange * -1
  }
  tint(r, 221, r)
  image(imageName, 0 + rectx - 50, 0 + recty - 50, 100, 100)
  circle(rectx, recty,cr)
  fill(r, 221, r)
  noTint()
  //image(blob, rectx + (10 * speed) - 25, recty + (10 * speedy) - 25,cr3, cr3)
  rectx = rectx + speed;
  recty = recty + speedy;
  // if(rectx > 500 && speedy !== -10)//right moving up
  // {
  //   speed = speed * -1
  //   speedy = 10
  //   imageName = loadImage('images/Asset 8.png')
  //   circle(500 + rectx, 250 + recty,cr)
  //   //circle(500 + rectx, 250 + recty, cr)
  //   // do
  //   // {
  //   //   cr = cr +10
  //   // }
  //   // while(cr < 500)
  // }
  // if(rectx > 500 && speedy == -10)//right moving down
  // {
  //   speed = speed * -1
  //   speedy = speedy * 1
  //   imageName = loadImage('images/Asset 7.png')
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  if(rectx > (windowWidth/2) - 50 && recty < (windowHeight/2) - 50)//top right
  {
    if(recty < 0)//top right top side
    {
      if(speed > 0)//moving right
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 6.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speed < 0)//moving left
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 8.png')
        noTint()
        //image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
    if(rectx > windowWidth - 50)//top right right side
    {
      if(speedy > 0)//moving down
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 8.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speedy < 0)//moving up
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 7.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
  }

  if(rectx > (windowWidth/2) - 50 && recty > (windowHeight/2) - 50)//bottom right
  {
    if(recty > windowHeight - 50)//bottom right bottom
    {
      if(speed > 0)//moving right
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 5.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speed < 0)//moving left
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 7.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
    if(rectx > windowWidth - 50)//bottom right right
    {
      if(speedy > 0)//moving down
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 8.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speedy < 0)//moving up
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 7.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
  }

  if(rectx < (windowWidth/2) - 50 && recty < (windowHeight/2) - 50)//top left 
  {
    if(recty < 0)//top left top
    {
      if(speed > 0)//moving right
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 6.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speed < 0)//moving left
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 8.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
    if(rectx < 0)//top left left
    {
      if(speedy > 0)//moving down
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 6.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speedy < 0)//moving up
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 5.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
  }

  if(rectx < (windowWidth/2) - 50 && recty > (windowHeight/2) - 50)//bottom left
  {
    if(recty > windowHeight - 50)//bottom left bottom
    {
      if(speed > 0)//moving right
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 5.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speed < 0)//moving left
      {
        speedy = speedy * -1
        imageName = loadImage('images/Asset 7.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
    if(rectx < 0)//bottom left left
    {
      if(speedy > 0)//moving down
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 6.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
      if(speedy < 0)//moving up
      {
        speed = speed * -1
        imageName = loadImage('images/Asset 5.png')
        noTint()
        image(impact, rectx - (cr2/2), recty - (cr2/2), cr2, cr2)
        //fill(r, 221, r)
        circle(rectx, recty,cr)
      }
    }
  }
  // if(rectx < -450)//left
  // {
  //   speed = speed * -1
  //   imageName = loadImage('images/Asset 5.png')
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  // if(recty > 250)//bottom
  // {
  //   speedy = speedy * -1
  //   imageName = loadImage('images/Asset 5.png')
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  // if(rectx < 0 && recty > 250)//bottom left
  // {
  //   imageName = loadImage('images/Asset 7.png')
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  // // if(recty < -200)//top
  // // {
  // //   speedy = speedy * -1
  // //   imageName = loadImage('images/Asset 8.png')
  // //   circle(500 + rectx, 250 + recty,cr)
  // // }
  // if(recty < -200 && rectx < 250)//top left
  // {
  //   imageName = loadImage('images/Asset 6.png')
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  // if(recty > 250 && rectx > 500)//bottom right
  // {
  //   imageName = loadImage('images/Asset 7.png')
  //   circle(500 + rectx, 250 + recty,cr)
  // }

  
}

function mouseClicked()
{
  // rectx = mouseX - 500//rectx + speed;
  // recty = mouseY - 250//recty + speedy;
  // circle(500 + rectx, 250 + recty, cr)
  // if((mousex + 500) > (rectx - 50) && (mousex + 500) < (rectx + 50))
  // {
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  // else if((mouseY + 500) > (recty - 50) && (mouseY + 500) < (recty + 50))
  // {
  //   circle(500 + rectx, 250 + recty,cr)
  // }
  // return false
  
}

function mouseDragged()
{
  // rectx = mouseX - 500//rectx + speed;
  // recty = mouseY - 250//recty + speedy;
  circle(mouseX, mouseY, cr)
}