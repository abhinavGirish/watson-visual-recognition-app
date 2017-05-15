var Messages = {
    // Add here your messages for the default language.
    // Generate a similar file with a language suffix containing the translated messages.
    // key1 : message1,
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){

    //MFP APIs should only be called within wlCommonInit() or after it has been called, to ensure that the APIs have loaded properly

	// Common initialization code goes here
    document.getElementById('app_version').textContent = WL.Client.getAppProperty("APP_VERSION");
    document.getElementById('mobilefirst').setAttribute('style', 'display:block;');
    document.getElementById('form').style.display = 'none';
    document.getElementById('cameraButton').addEventListener("click", takePic);
    
    console.log('cordova ready!!!');
    
    function takePic() {
        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
        document.getElementById('form').style.display = 'block';
    }
    
    function onSuccess(imageURI) {
        console.log('image capture successful');
        
        var image = document.getElementById('myImage');
        image.src = imageURI;
        
        console.log('image.src: ' + image.src);
        
        var apiKey = "c785b4f87f99cff950b2ab83ea8019bbbdc8a53c";
        var apiVersion = "2016-05-19";
        var url = "https://gateway-a.watsonplatform.net/visual-recognition/api";
        var post = "/v3/classify?api_key=" + apiKey + "&version=" + apiVersion;
        
        var fileuploadOptions = new FileUploadOptions();
        fileuploadOptions.fileKey = "images_file";
        fileuploadOptions.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        
        console.log('fileuploadOptions: ' + JSON.stringify(fileuploadOptions));
        
        var ft = new FileTransfer();
        ft.upload(image.src, encodeURI(url + post), win, fail, fileuploadOptions);
    }
    
    function onFail(message) {
        console.log('Failed because: ' + message);
    }
    
    function win(r) {
        console.log('Code = ' + r.responseCode);
        console.log('Response = ' + r.response);
        console.log('Sent = ' + r.bytesSent);
        //document.getElementById('info').innerHTML = r.response;

        var data = JSON.parse(r.response);
        var classes= data.images[0].classifiers[0].classes;
        //console.log("possible classes - "+data.images[0].classifiers.classes);
        var result = "<p>Detected the following possible items:<br/>";
        for(var i=0, len=classes.length; i<len; i++) {
            result += "<b> NAME: "+classes[i].class + " SCORE: "+ classes[i].score +" </b><br/>";   
        }
        document.getElementById('info').innerHTML = result;
        document.getElementById('mType').value = classes[0].class; 
    }
    
    function fail(error) {
        console.log('An error has occurred: Code = ' + error.code);
        console.log('upload error source: ' + error.source);
        console.log('upload error target: ' + error.target);
    }
    
    console.log("done!!!");
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, 'app.receivedEvent(...);' must be explicitly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update the DOM on a received event.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
