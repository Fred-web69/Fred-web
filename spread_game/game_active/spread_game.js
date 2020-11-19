var score = 8;
var framecount = 0;

 
function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
  textSize(20);
  frameRate(10);
} 


function draw() {
  
  background(220);
  
  framecount = framecount + 1;

  fill(50);
  textSize(30);
  text((int(score)), width/2, 50);


  if(framecount===1) {
   score = score * 1.02;
   framecount = 0;
  }
//after each millisecond, increase score by *1.02
  
  var n = 1;
  var x = 0;
  var y = 0;
  
  fill(0, 0, 0);
  triangle(45, 84, 52, 80, 45, 76);
  
  
  while(n<score) {
    x = (n % 70) * 10 + 50;
    y = int(n / 70) * 10 + 80;
    fill(255, 0, 0);
    circle(x, y, 5);
    n = n + 1;
  }
//modifies the # of dots as score increases
}



function mouseClicked() {
  if(score < 2){
    score = 0;
    //window.open("success.html","_self");

  } else {
    score = score - 1;
  }
}
//if mouse is clicked, score -1
//if score=0, open success.html
