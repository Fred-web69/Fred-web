
// Mode of the brush.
var brushMode;

// Time since brush was pressed down (resets when released).
var pressTime;

// Planned: toggle brush settings
var brushToggle;

// Brush color.
var brushColor;

// [TOGGLE] When true: shows confirmation message when resetting
var resetWarning;

// [TOGGLE] When true: shows notice after saving
var saveMessage;

var recording;

function setup() {
    initializeFields();
    createCanvas(1000, 800);
    background(200);
    noStroke();
    frameRate(60);
    ellipseMode(CENTER);
    print("CONTROLS");
    print("[1] [2] [3] [4]    || select brush");
    print("[5] [6] [7] [8]    || select eraser");
    print("[Q] [W] [E] [R]    || select color | red-green");
    print("[T] [Y] [U] [I]    || select color | blue-magenta");
    print("[O] [P]            || select color | grey-black");
    print("[S]                || save canvas");
    print("[D], then [SPACE]  || record canvas");
    print("[A], then [SPACE]  || reset canvas");
}

// //////////////////////////////////////////////////////////BRUSH DESIGNS
function brush101() {
/*
[EXPERIMENTAL]
   */
}

function brush1() {
    /*
[BRUSH 1] Stimulates a real paintbrush.
   */
    fzDrawLine(pmouseX, pmouseY, mouseX, mouseY, brushColor, pressTime + 2);
}

function brush2() {
    /*
[BRUSH 2] Simulates a calligraphy pen.
   */
    fzDrawQuad(pmouseX, pmouseY, mouseX, mouseY, brushColor, pressTime / 4 + 2);
}

function brush3() {
    /*
[BRUSH 3] Simulates an airbrush.
   */
    fzDrawDots_20(mouseX, mouseY, brushColor, 1, pressTime / 4 + 12);
}

function brush4() {
    /*
[BRUSH 4] Simulates a pencil.
   */
    fzDrawDots_100(mouseX, mouseY, brushColor, 1, pressTime / 16 + 4);
    fzDrawDots_20(mouseX, mouseY, brushColor, 1, pressTime / 12 + 6);
}

function brush5() {
    fzDrawLine(pmouseX, pmouseY, mouseX, mouseY, color(200), pressTime / 2);
}

function brush6() {
    fzDrawLine(pmouseX, pmouseY, mouseX, mouseY, color(200), pressTime + 2);
}

function brush7() {
    fzDrawLine(pmouseX, pmouseY, mouseX, mouseY, color(200), pressTime * 2 + 4);
}

function brush8() {
    fzDrawLine(pmouseX, pmouseY, mouseX, mouseY, color(200), pressTime * 4 + 8);
}

// /////////////////////////////////////////////////////CUSTOM FUNCTIONS
function fzDrawLine(xBefore, yBefore, x, y, strokeColor, strength) {
    stroke(strokeColor);
    strokeWeight(strength / 5);
    line(xBefore, yBefore, x, y);
    strokeWeight(0);
    noStroke();
}

function fzDrawQuad(xBefore, yBefore, x, y, strokeColor, strength) {
    noStroke();
    fill(strokeColor);
    // quad(xBefore, yBefore + strength, xBefore, yBefore - strength, x, y + strength, x, y-strength); I FUCKING SAID TO DRAW A QUADRILATERAL WHAT THE FUCK IS THIS SHIT
    // much better
    quad(xBefore, yBefore + strength, xBefore, yBefore - strength, x, y - strength, x, y + strength);
}

function fzDrawDots(x, y, strokeColor, strength, area) {
    stroke(strokeColor);
    strokeWeight(strength);
    point(x - random(-area, area), y - random(-area, area));
    noStroke();
}

function fzDrawDots_5(x, y, strokeColor, strength, area) {
    // five repetitions of fzDrawDots
    fzDrawDots(x, y, strokeColor, strength, area);
    fzDrawDots(x, y, strokeColor, strength, area);
    fzDrawDots(x, y, strokeColor, strength, area);
    fzDrawDots(x, y, strokeColor, strength, area);
    fzDrawDots(x, y, strokeColor, strength, area);
}

function fzDrawDots_20(x, y, strokeColor, strength, area) {
    // twenty repetitions of fzDrawDots
    fzDrawDots_5(x, y, strokeColor, strength, area);
    fzDrawDots_5(x, y, strokeColor, strength, area);
    fzDrawDots_5(x, y, strokeColor, strength, area);
    fzDrawDots_5(x, y, strokeColor, strength, area);
}

function fzDrawDots_100(x, y, strokeColor, strength, area) {
    // a hundred repetitions of fzDrawDots
    fzDrawDots_20(x, y, strokeColor, strength, area);
    fzDrawDots_20(x, y, strokeColor, strength, area);
    fzDrawDots_20(x, y, strokeColor, strength, area);
    fzDrawDots_20(x, y, strokeColor, strength, area);
    fzDrawDots_20(x, y, strokeColor, strength, area);
}

function mouseReleased() {
    pressTime = 0;
}

function draw() {
    // /////////STATUS BAR
    noStroke();
    fill(40);
    rect(0, height - 40, width, height);
    fill(255);
    if (brushMode >= 1) {
        text("Brush " + brushMode, 15, height - 15);
    } else {
        textSize(15);
        fill(255, 208, 0);
        text("Please select a brush (1-8)", 15, height - 15);
    }
    if (brushColor == color(0, 0, 0)) {
    } else {
        fill(brushColor);
        text("|", 70, height - 15);
    }
    if (resetWarning == 1) {
        textSize(15);
        fill(255, 0, 0);
        text("You are about to reset the canvas. Press SPACE to confirm.", width - 410, height - 15);
    }
    if (saveMessage == 1) {
        textSize(15);
        fill(0, 255, 0);
        text("Saved to 'screenshots.'", width - 150, height - 15);
    }
    if (recording == 2) {
        textSize(15);
        fill(64, 214, 255);
        text("Recordings are not supported here. Press SPACE to continue anyways.", width - 490, height - 15);
    }
    if (recording == 1) {
        saveFrame("recordings/x_xxx_#####.png");
    }
}

function keyPressed() {
    if (key == '!') {
        brushMode = 101;
    }
    if (key == '0') {
        brushMode = 0;
    }
    if (key == '1') {
        brushMode = 1;
    }
    if (key == '2') {
        brushMode = 2;
    }
    if (key == '3') {
        brushMode = 3;
    }
    if (key == '4') {
        brushMode = 4;
    }
    if (key == '5') {
        brushMode = 5;
    }
    if (key == '6') {
        brushMode = 6;
    }
    if (key == '7') {
        brushMode = 7;
    }
    if (key == '8') {
        brushMode = 8;
    }
    if (key == 'q' || key == 'Q') {
        brushColor = color(255, 0, 0);
    }
    if (key == 'w' || key == 'W') {
        brushColor = color(255, 127, 0);
    }
    if (key == 'e' || key == 'E') {
        brushColor = color(255, 255, 0);
    }
    if (key == 'r' || key == 'R') {
        brushColor = color(0, 255, 0);
    }
    if (key == 't' || key == 'T') {
        brushColor = color(0, 255, 255);
    }
    if (key == 'y' || key == 'Y') {
        brushColor = color(0, 0, 255);
    }
    if (key == 'u' || key == 'U') {
        brushColor = color(127, 0, 255);
    }
    if (key == 'i' || key == 'I') {
        brushColor = color(255, 0, 255);
    }
    if (key == 'o' || key == 'O') {
        brushColor = color(127, 127, 127);
    }
    if (key == 'p' || key == 'P') {
        brushColor = color(0, 0, 0);
    }
    if (key == 'a' || key == 'A') {
        resetWarning = 1;
    }
    if (key == ' ' && resetWarning == 1) {
        textSize(15);
        background(200);
        resetWarning = 0;
    }
    if (key == 's' || key == 'S') {
        saveFrame("screenshots/x_xxx_####.png");
        delay(500);
        saveMessage = 1;
    }
    if (key == 'd' || key == 'D') {
        recording = 2;
    }
    if (key == ' ' && recording == 2) {
        recording = 1;
    }
}

function mouseDragged() {
    if (brushMode == 101) {
        brush101();
    }
    if (brushMode == 1) {
        brush1();
    }
    if (brushMode == 2) {
        brush2();
    }
    if (brushMode == 3) {
        brush3();
    }
    if (brushMode == 4) {
        brush4();
    }
    if (brushMode == 5) {
        brush5();
    }
    if (brushMode == 6) {
        brush6();
    }
    if (brushMode == 7) {
        brush7();
    }
    if (brushMode == 8) {
        brush8();
    }
    if (pressTime < 100) {
        pressTime = pressTime + 1;
    }
    resetWarning = 0;
    saveMessage = 0;
    if (recording == 2) {
        recording = 0;
    }
}

function initializeFields() {
    brushMode = 0;
    pressTime = 0;
    brushToggle = 0;
    brushColor = color(0, 0, 0);
    resetWarning = 0;
    saveMessage = 0;
    recording = 0;
}
