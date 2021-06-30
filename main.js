song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("defaulter.mp3");
    song2 = loadSound("dhaka.mp3");
}

function setup(){
    canvas = createCanvas(600, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function draw(){
    image(video, 0, 0, 600, 480);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}