Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured-image' src = '" + data_uri + "'/>";
    });
}

console.log("hello");

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y7Vszntr0/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

