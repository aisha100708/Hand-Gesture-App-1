prediction_1 = "";
prediction_2 = "";
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
            document.getElementById("result").innerHTML = "<img src='"+data_url+"' id='captured_image'>";
        }
    );
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2tlJtpIlp/model.json", modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}
function speak() {
    var synth = window.speechSynthesis;
    prediction_1 = "The 1st prediction is " + prediction_1;
    prediction_2 = "The 2nd prediction is " + prediction_2;
    var utterance = new SpeechSynthesisUtterance(prediction_1 + prediction_2);
    synth.speak(utterance);
}
//speak();
function identify() {
    new_image = document.getElementById("captured_image");
    classifier.classify(new_image, getResult);
}
function getResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        document.getElementById("hand_gesture_name_1").innerHTML = prediction_1;
        document.getElementById("hand_gesture_name_2").innerHTML = prediction_2;
        if (prediction_1 == "Victory") {
            document.getElementById("hand_gesture_symbol_1").innerHTML = "&#9996;";
        }
        if (prediction_1 == "Amazing") {
            document.getElementById("hand_gesture_symbol_1").innerHTML = "&#128076;";
        }
        if (prediction_1 == "Best") {
            document.getElementById("hand_gesture_symbol_1").innerHTML = "&#128077;";
        }
        if (prediction_2 == "Victory") {
            document.getElementById("hand_gesture_symbol_2").innerHTML = "&#9996;";
        }
        if (prediction_2 == "Amazing") {
            document.getElementById("hand_gesture_symbol_2").innerHTML = "&#128076;";
        }
        if (prediction_2 == "Best") {
            document.getElementById("hand_gesture_symbol_2").innerHTML = "&#128077;";
        }
        speak();
    }
}