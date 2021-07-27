objects = [];
status = "";
object_name = " ";

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(100, 270);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 300, 300);
  if (status != " ") {
  objectDetector.detect(video , gotResult)
  

  for(i = 0; i<objects.length; i++)
  {
    document.getElementById("status").innerHTML = "Status Object Detected!"
  
   fill("deepBlue");
   percent = floor(objects[i].confidence*100);
   text(objects[i].label+percent+"%", objects[i].x , objects[i].y)
   nofill();
   stroke("red");
   rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
   if(objects[i].label == "Input_1"){
     
   }
  }
}
}

function modelLoaded() {
  console.log('Model Loased');
  status = true;
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    objects = results;
  }
}

function start() {
  objectDetector = ml5.objectDetector("Cocossd", modelLoaded);
  object_name = document.getElementById("Inpit_1").value;
}