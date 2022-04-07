
// count of falling numbers
var numCount;

// distance between each tail
var tailDistance;

// increase in transparency with each tail
var tailOpacity;

var positionX;

// I should've used "basePositionY" for clarification but by this point it's probably too much work to change every single instance
var positionY;

var speed;

var opacity;

var colorR;

var size;

var type;

var tail1PositionY;

var tail2PositionY;

var tail3PositionY;

var tail4PositionY;

var tail5PositionY;

function setup() {
    initializeFields();
    createCanvas(690, 850);
    background(0);
    for (var i = 0; i < positionX.length; i = i + 1) {
        // activates for every positionX slot
        // position where the number starts
        positionX[i] = random(0, width);
        // 
        positionY[i] = random(0, height);
        speed[i] = random(5, 15);
        opacity[i] = random(100, 255);
        colorR[i] = random(31, 133);
        // colorR[i] = color(random(31,133), 181, 131, opacity[i]);
        size[i] = random(10, 20);
        type[i] = random(0, 2);
        // tail position is [tailDistance] below base position
        tail1PositionY[i] = positionY[i] - tailDistance;
        tail2PositionY[i] = tail1PositionY[i] - tailDistance;
        tail3PositionY[i] = tail2PositionY[i] - tailDistance;
        tail4PositionY[i] = tail3PositionY[i] - tailDistance;
        tail5PositionY[i] = tail4PositionY[i] - tailDistance;
    }
}

function draw() {
    background(0);
    for (var i = 0; i < positionX.length; i = i + 1) {
        // ///////BASE DROP//////////
        // draw number
        fill(colorR[i], 181, 131, opacity[i]);
        textSize(size[i]);
        text(int(type[i]), positionX[i], positionY[i]);
        // update position
        positionY[i] = positionY[i] + speed[i];
        // check boundaries
        if (positionY[i] >= height) {
            positionY[i] = 0;
        }
        // ////////TAIL 1 DROP//////////
        // draw tail
        // everything stays the same except opacity; it decreases.
        fill(colorR[i], 181, 131, opacity[i] - tailOpacity);
        textSize(size[i]);
        // replace all "positionY with tail1PositionY"
        text(int(type[i]), positionX[i], tail1PositionY[i]);
        // update tail position
        tail1PositionY[i] = tail1PositionY[i] + speed[i];
        // check boundaries
        if (tail1PositionY[i] >= height) {
            tail1PositionY[i] = 0;
        }
        // ////////TAIL 2 DROP////////////
        // draw tail
        // everything stays the same except opacity; it decreases.
        fill(colorR[i], 181, 131, opacity[i] - tailOpacity * 2);
        textSize(size[i]);
        // replace all "positionY with tail2PositionY"
        text(int(type[i]), positionX[i], tail2PositionY[i]);
        // update tail position
        tail2PositionY[i] = tail2PositionY[i] + speed[i];
        // check boundaries
        if (tail2PositionY[i] >= height) {
            tail2PositionY[i] = 0;
        }
        // ////////TAIL 3 DROP////////////
        // draw tail
        // everything stays the same except opacity; it decreases.
        fill(colorR[i], 181, 131, opacity[i] - tailOpacity * 3);
        textSize(size[i]);
        // replace all "positionY with tail3PositionY"
        text(int(type[i]), positionX[i], tail3PositionY[i]);
        // update tail position
        tail3PositionY[i] = tail3PositionY[i] + speed[i];
        // check boundaries
        if (tail3PositionY[i] >= height) {
            tail3PositionY[i] = 0;
        }
        // ////////TAIL 4 DROP////////////
        // draw tail
        // everything stays the same except opacity; it decreases.
        fill(colorR[i], 181, 131, opacity[i] - tailOpacity * 4);
        textSize(size[i]);
        // replace all "positionY with tail4PositionY"
        text(int(type[i]), positionX[i], tail4PositionY[i]);
        // update tail position
        tail4PositionY[i] = tail4PositionY[i] + speed[i];
        // check boundaries
        if (tail4PositionY[i] >= height) {
            tail4PositionY[i] = 0;
        }
        // ////////TAIL 5 DROP////////////
        // draw tail
        // everything stays the same except opacity; it decreases.
        fill(colorR[i], 181, 131, opacity[i] - tailOpacity * 5);
        textSize(size[i]);
        // replace all "positionY with tail5PositionY"
        text(int(type[i]), positionX[i], tail5PositionY[i]);
        // update tail position
        tail5PositionY[i] = tail5PositionY[i] + speed[i];
        // check boundaries
        if (tail5PositionY[i] >= height) {
            tail5PositionY[i] = 0;
        }
    }
}

function initializeFields() {
    numCount = 99;
    tailDistance = 50;
    tailOpacity = 50;
    positionX = new Array(numCount);
    positionY = new Array(numCount);
    speed = new Array(numCount);
    opacity = new Array(numCount);
    colorR = new Array(numCount);
    size = new Array(numCount);
    type = new Array(numCount);
    tail1PositionY = new Array(numCount);
    tail2PositionY = new Array(numCount);
    tail3PositionY = new Array(numCount);
    tail4PositionY = new Array(numCount);
    tail5PositionY = new Array(numCount);
}

