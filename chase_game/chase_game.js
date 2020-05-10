var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =38000;
var gameState = "L1";

var bubble;
var virus;
var rainbow;

var windows;
var sjsu;
var minecraft;
var pmd;
var lofi;
var protest;
var warning;
var bathroom;
var space;
var windows2;
var congrats;

var toLevel = 50;
var fromLevel = 0;

function preload() {
bubble = loadImage('bubble.png');
virus = loadImage('coronavirus.png');
rainbow = loadImage('rainbow.gif');

windows = loadImage('background_windows.jpg');
sjsu = loadImage('background_sjsu.jpg');
minecraft = loadImage('background_minecraft.jpg');
pmd = loadImage('background_pmd.jpg');
lofi = loadImage('background_lofi.jpg');
protest = loadImage('background_protest.jpg');
warning = loadImage('background_warning.gif');
bathroom = loadImage('background_bathroom.gif');
space = loadImage('background_space.gif');
windows2 = loadImage('background_windows2.jpg');
congrats = loadImage('background_congrats.jpg');
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
    //COMPLETE//
  }
  if(gameState == "L2"){
    levelTwo();
    //COMPLETE//
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
  //text(("Score: " + score + " (" + int( score /toLevel *100) + "%) " ), width/2, 40);
  //text(("Score: " + score + " (" + int( (score -fromLevel) /toLevel *100) + "%) " ), width/2, 40);
  
  // ( 103 - 50 ) / 140 * 100 - 100
  
} // end draw

//start level one
function levelOne(){
  
  background(windows);

  text(("Level 1   (" + int( score /toLevel *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
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
  background(sjsu);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 70;
  var fromLevel = 50;
  var toLevel = 140;
  
  text(("Level 2   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);


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
  background(minecraft);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 49;
  var fromLevel = 140;
  var toLevel = 300;
  
  text(("Level 3   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);

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
  background(pmd);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 34;
  var fromLevel = 300;
  var toLevel = 600;
  
  text(("Level 4   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
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
  background(lofi);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 23;
  var fromLevel = 600;
  var toLevel = 1200;
  
  text(("Level 5   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
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
  background(protest);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 16;
  var fromLevel = 1200;
  var toLevel = 2400;
  
  text(("Level 6   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
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
  image(virus, ballx -9, bally -9, ballSize +3, ballSize +3);
} 
//end level six

//start level seven
function levelSeven(){
  background(warning);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 11;
  var fromLevel = 2400;
  var toLevel = 4800;
  
  stroke(255,255,255);
  strokeWeight(3);
  
  text(("Level 7   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
  strokeWeight(1);
  
  stroke(0);
  
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
  image(rainbow, ballx -6, bally -6, ballSize, ballSize);
  
  
} 
//end level seven

//start level eight
function levelEight(){
  background(bathroom);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 8;  
  var fromLevel = 4800;
  var toLevel = 9600;
  
  stroke(255,255,255);
  strokeWeight(3);
  
  text(("Level 8   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
  strokeWeight(1);
  
  stroke(0);
  
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
  background(space);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 5;  
  var fromLevel = 9600;
  var toLevel = 19200;
  
  stroke(255,255,255);
  strokeWeight(3);
  
  text(("Level 9   (" + int( (score -fromLevel) /(toLevel -fromLevel) *100) + "%) " ), width/2, height-20);
  text(("Score: " + score), width/2, 40);
    
  strokeWeight(1);
  
  stroke(0);
  
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
  background(windows2);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 4;  
  var fromLevel = 19200;
  var toLevel = 38400;
  
  text(("Level 10"), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
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
} 
//end level ten

//start level eleven
function levelEleven(){
  background(congrats);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  var ballSize = 2;  
  var fromLevel = 38400;
  var toLevel = 99999999;
  
  text(("Level 10"), width/2, height-20);
  text(("Score: " + score), width/2, 40);
  
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +int(random(115,329));
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} 
