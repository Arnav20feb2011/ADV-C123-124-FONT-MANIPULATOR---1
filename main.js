function preload(){

}

function setup(){
canvas=createCanvas(400,300);
canvas.position(500,150);
video=createCapture(VIDEO);
video.size(400,300);
video.position(0,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);


}

function modelLoaded(){
    console.log("Model is Loaded");
}
 
function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}


function draw(){

}