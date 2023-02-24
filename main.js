// var SpeechRecognition = window.webkitSpeechRecognition;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerhtml = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerhtml = Content;
    console.log(Content);
    if (Content == "take my selfie" || Content == "selfie" ) {
        console.log("taking my selfie...");
        speak();
    }
}

function speak() {
    console.log("inside speak()");
}
