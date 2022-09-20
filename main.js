Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">' ;
    });
}
function speak() { var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is  " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

}



function speak0(){ var synth = window.speechSynthesis;
     speak_data_1 = "The first prediction is " + prediction_1; 
     speak_data_2 = "And the second prediction is " + prediction_2; 
     var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
 synth.speak(utterThis); }
 console.log('ml5version', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iuol6ixy8/model.json', modelloaded);
function modelloaded (){
    console.log("speak");
}
function check() {
img = document.getElementById("photo");
classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);

    }
}
function check() {
    img = document.getElementById("photo");
    classifier.classify(img, gotResult);
    }
    function gotResult(error, results) {
        if (error) {
            console.error(error);
        }
        else {
            console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;

        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if (results[0].label == "Yo Yo") {
            document.getElementById("Gesture_emoji").innerHTML = "&#128077;";
        }

        if (results[0].label == "Thumbs-up") {
            document.getElementById("Gesture_emoji").innerHTML = "&#128077;";
        }

        if (results[0].label == "Nice") {
            document.getElementById("Gesture_emoji").innerHTML = "&#128076;";
        }

        if (results[0].label == "Victory") {
            document.getElementById("Gesture_emoji").innerHTML = "&#9996;";
        }

        



        if (results[1].label == "Yo Yo") {
            document.getElementById("Gesture_emoji2").innerHTML = "&#128077;";
        }

        if (results[1].label == "Thumbs-up") {
            document.getElementById("Gesture_emoji2").innerHTML = "&#128077;";
        }

        if (results[1].label == "Nice") {
            document.getElementById("Gesture_emoji2").innerHTML = "&#128076;";
        }

        if (results[1].label == "Victory") {
            document.getElementById("Gesture_emoji2").innerHTML = "&#9996;";
        }

        }
        }