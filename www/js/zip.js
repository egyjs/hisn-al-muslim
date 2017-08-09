console.log('inZip.js');

function checkIfFileExists(path){
    // path is the full absolute path to the file.
    window.resolveLocalFileSystemURL(path, fileExists, fileDoesNotExist);
}
function fileExists(fileEntry){
    console.log("File " + fileEntry.fullPath + " exists!");
}
function fileDoesNotExist(){
       if(document.URL.indexOf("fileNoExist.html") < 1){
            window.location = "fileNoExist.html";
        }
   }



    var statusDom = document.querySelector('#status');
    var progress  = document.querySelector('#ft-prog');

    function getAllDB(){
        console.log("getAllDB: start");
var fileTransfer = new FileTransfer();
    
var uri = encodeURI("https://github.com/el3zahaby/hisn-al-muslim/raw/master/ar.zip");
  fileTransfer.download(
    uri,
    cordova.file.externalApplicationStorageDirectory+ uri.substring(uri.lastIndexOf('/')+1),
    function(entry) {
      console.log('download complete: ' + entry.toURL());
        unzip(entry.toURL());
        progress.value = 0;
        statusDom.innerHTML = "";
    },
    function(error) {
      console.log('download error source ' + error.source);
      console.log('download error target ' + error.target);
      console.log('upload error code is ' + error.code);
    });
        
        
    fileTransfer.onprogress = function (progressEvent) {
        if (progressEvent.lengthComputable) {
            var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            statusDom.innerHTML = perc + "% loaded...";
            progress.value = perc;
            
            
        } else {
            if (statusDom.innerHTML == "") {
                statusDom.innerHTML = "Loading";
            } else {
                statusDom.innerHTML += ".";
            }
        }
    };
}
    

    
    
    function unzip(url){
        console.log("unzip start:" +url.substring(0, url.lastIndexOf('.'))+"/");
         zip.unzip(url, 
                   url.substring(0, url.lastIndexOf('.'))+"/", 
                   function(){
                      console.log('Zip decompressed successfully');
                      window.location = "index.html";
                   },function(progressEvent) {
                      progress = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                      statusDom.innerHTML = progress + "% Extraction...";
                      progress.value = progress;
        }
         );
    }

