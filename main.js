Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 100
});

Webcam.attach("#webcam_div");

function capture()
{
    Webcam.snap(function (data_uri){
        document.getElementById("webcam_results_div").innerHTML = "<img id ='captured_image' src='"+data_uri+"'/>";
    })
}

console.log("ml5 version =", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ic0KUZFWJ/model.json", modelLoaded)

function modelLoaded()
{
    console.log("Model Loaded");
}