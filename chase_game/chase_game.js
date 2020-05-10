var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState = "L1";
var bubble;

var toLevel = 50;
var fromLevel = 0;
var levelCheck = 0;

function preload() {
bubble = loadImage('bubble.png');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "L4"){
    levelFour();
  }
  if(gameState == "L5"){
    levelFive();
  }
  if(gameState == "L6"){
    levelSix();
  }
  if(gameState == "L7"){
    levelSeven();
  }
  if(gameState == "L8"){
    levelEight();
  }
  if(gameState == "L9"){
    levelNine();
  }
  if(gameState == "L10"){
    levelTen();
  }
  if(gameState == "L11"){
    levelEleven();
  }
  
  //text(("Score: " + score ), width/2, 40);
  //text(("Testing: " + ballSize ), width/2, 40);
  //text(("Score: " + score + " (" + int( score /toLevel *100) + "%) " ), width/2, 40);
  //text(("Score: " + score + " (" + int( (score -fromLevel) /toLevel *100) + "%) " ), width/2, 40);
  
  // ( 103 - 50 ) / 140 * 100 - 100
  
} // end draw

//start level one
function levelOne(){
  text(("Score: " + score + " (" + int( score /toLevel *100) + "%) " ), width/2, 40);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);

  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(4,7));
  }
  if(score>49){
    gameState = "L2";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -50, bally -50, ballSize, ballSize);
  
} 
// end level one

// start level two
function levelTwo(){
  background(255,252,217);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 70;
  var fromLevel = 50;
  var levelCheck = 100;
  var toLevel = 140;
  
//SCORE AND PROGRESS
  text(("Testing " + score /toLevel), width/2, 40);
//SCORE AND PROGRESS

  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(5,10));
  }
  if(score>139){
  gameState = "L3";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -34, bally -37, ballSize, ballSize);
} 
// end level two

// start level three
function levelThree(){
  background(239,255,207);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 49;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(7,15));
  }
  if(score>299){
    gameState = "L4";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -24, bally -24, ballSize, ballSize);
} 
//end level three

//start level four
function levelFour(){
  background(255, 236, 199);
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 34;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(10,22));
  }
  if(score>599){
    gameState = "L5";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -17, bally -17, ballSize, ballSize);
} 
//end level four

//start level five
function levelFive(){
  background(163, 220, 255);
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 23;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(15,32));
  }
  if(score>1199){
    gameState = "L6";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -12, bally -12, ballSize, ballSize);
} 
//end level five

//start level six
function levelSix(){
  background(225, 158, 232);
  text("Level 6", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 16;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(21,48));
  }
  if(score>2399){
    gameState = "L7";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -8, bally -8, ballSize, ballSize);
} 
//end level six

//start level seven
function levelSeven(){
  background(176, 76, 99);
  text("Level 7", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 11;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(30,70));
  }
  if(score>4799){
    gameState = "L8";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -5, bally -5, ballSize, ballSize);
} 
//end level seven

//start level eight
function levelEight(){
  background(48, 45, 135);
  text("Level 8", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 8;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(42,103));
  }
  if(score>9599){
    gameState = "L9";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -4, bally -4, ballSize, ballSize);
} 
//end level eight

//start level nine
function levelNine(){
  background(186, 0, 0);
  text("Level 9", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 5;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(59,152));
  }
  if(score>19199){
    gameState = "L10";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
//end level nine

//start level ten
function levelTen(){
  background(255, 0, 0);
  text("Level 10", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 4;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(82,224));
  }
  if(score>38399){
    gameState = "L11";
  }
  
  line(ballx, bally, mouseX, mouseY);
  noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(0);
  image(bubble, ballx -3, bally -3, ballSize, ballSize);
} 
//end level ten

//start level eleven
function levelEleven(){
  background(0, 0, 0);
  text("How the fuck are you able to get this far", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 2;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(115,329));
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
