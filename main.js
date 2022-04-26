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

function identify()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresults);
}

function gotresults(error, results)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(results);
        document.getElementById("object_results").innerHTML=results[0].label;
        document.getElementById("accuracy_results").innerHTML=results[0].confidence.toFixed(3)*100+"%";
    }
}