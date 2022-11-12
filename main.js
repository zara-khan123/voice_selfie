var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content =="take my selfie")
    {
        speak();
    }
 
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_url)
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">'
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}
