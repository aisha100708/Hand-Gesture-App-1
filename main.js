Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpeg',
    png_quality: 100,
})
camera = document.getElementById("camera");
Webcam.attach(camera);
function capture() {
    Webcam.snap(
        function(data_url) {
            document.getElementById("result").innerHTML = "<img src='"+data_url+"' id='new_image'>";
        }
    );
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2tlJtpIlp/model.json", modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}