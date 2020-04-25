var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState = "L1";


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
  
  text(("Score: " + score), width/2, 40);
} // end draw

//start level one
function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(4,8));
  }
  if(score>100){
    gameState = "L2";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
// end level one

// start level two
function levelTwo(){
  background(255,252,217);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 80;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(6,11));
  }
  if(score>200){
  gameState = "L3";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
// end level two

// start level three
function levelThree(){
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 64;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(8,14));
  }
  if(score>300){
    gameState = "L4";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
//end level three

//start level four
function levelFour(){
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 51;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(10,17));
  }
  if(score>400){
    gameState = "L5";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
//end level four

//start level five
function levelFive(){
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 40;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(12,20));
  }
  if(score>500){
    gameState = "L6";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
//end level five

//start level six
function levelSix(){
  text("Level 6", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 32;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(14,23));
  }
  if(score>600){
    gameState = "L7";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
//end level six

//start level seven
function levelSix(){
  text("Level 7", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 25;
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(14,23));
  }
  if(score>600){
    gameState = "L7";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
