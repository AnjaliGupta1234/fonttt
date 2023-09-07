function setup(){
    
    video = createCapture(VIDEO);
    video.size(500 , 500);

    canvas = createCanvas(400 , 450);
    canvas.position(600 , 130);
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);

}

 function modelLoaded(){
    console.log('PoseNet Is Initialized');
 }


function draw(){
    background('#6a00ff');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}