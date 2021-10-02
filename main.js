      
Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Initialize the Image Classifier method with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/Xye5Z1Pm9/model.json',modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  function check(){
      img=document.getElementById("selfie_image");
      classifier.classify(img,gotresult);
  }
  function gotresult(error,result){
if (error) {
    console.error(error);
} else {
    console.log(result);
    document.getElementById("result_name").innerHTML=result[0].label;
    document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(2);
}
  }