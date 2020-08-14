var car, carImage;
var score = 0;
var sec = 0;
var end;

function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
}

function draw() {
  background("blue"); 
  sec++;
  textSize(20);
  textFont("Impact");
  fill("black");
  text("SCORE:"+score, 360, 50); 
  text("PRESS THE RIGHT ARROW TO MOVE FORWARD AND INCREASE THE SCORE", 125, 350); 
  car.shapeColor = "turquoise";
  if(keyCode === RIGHT_ARROW){
    car.x = car.x+50;
  }    
  if(car.x === 550){
    car.x = 400;
    score = score+1;
  }
  if(car.x === 400){
    keyCode=LEFT_ARROW;
  }
  if(sec===300){
    end = createSprite(800,200,50,100);
    end.shapeColor = "red";
      car.x = car.x+5;
  }
  if(car.x >= 750){
    car.x=750;
  }
  drawSprites();
}
  
