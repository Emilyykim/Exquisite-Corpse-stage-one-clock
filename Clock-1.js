<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chromatic Clock</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="sketch.js"></script>
</head>
<body>
</body>
</html>

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    frameRate(30);
}

function draw() {
    let seconds = (frameCount % (30 * 10)) / 30; // 10-second cycle
    let hue = map(seconds, 0, 10, 0, 360);
    background(hue, 100, 100);

    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(nf(seconds, 1, 2) + ' seconds', width / 2, height / 2);
}