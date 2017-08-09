// jQuery
document.addEventListener('deviceready', deviceready, false);
function deviceready(){
    initAd();
    $.getScript('js/zip.js', function(){
        checkIfFileExists( cordova.file.externalApplicationStorageDirectory+"ar/1.json" );
    });
}
var glob = {}; // Globally scoped object

    function ids(num,ID){
         glob.currentItem = num;
         glob.id = ID;
        
    }

$(document).ready(function(){
    
    
function getPhoneGapPath() {
    var path = window.location.pathname;
    var sizefilename = path.length - (path.lastIndexOf("/")+1);
    path = path.substr( path, path.length - sizefilename );
    return path;
}
        var output = '';
    
    
                $('#pagelist').on('pagebeforeshow', function() {
                $("#audio100").attr("src", "");
                
            });  
    
    
    
       var first  = $.getJSON("DB/ar/husn_ar.json", function(result){
            result.ar.sort(function (a, b) {
                return a.Title.localeCompare(b.Title);
            });
            $.each(result.ar, function(i, field){
               output += '<li onclick="ids('+i+','+field.ID+')"><a id="'+i+'"  data-role="button" href="#display" data-transition="slide">' + field.Title + '</a></li>';
            });
            $('#ar').html(output).listview("refresh");
            $('#ar li').click(function() {
                console.log("DB/ar/"+result.ar[glob.currentItem].ID+".json");
            });
            
            $('#display').on('pagebeforeshow', function() {
                window.plugins.AdMob.destroyBannerView();
                $(this).find('[data-role=header] .ui-title').text(result.ar[glob.currentItem].Title);
                $("#audio100").hide();
                $("#img100").show();
                 function audio100(){
                        $("#audio100").attr("src", result.ar[glob.currentItem].Audio_URL).attr("autoplay",'');
                        $("#audio100").show();
                        $("#img100").hide();

                } 
                $( "#img100" ).click(function() {
                    if(navigator.onLine) {
                    audio100();                    
                    }else{
                       alert('ليس عندك انترنت ,, لذلك لا يمكنك تشغيل المقطع الصوتي الان');
                    }
                    
                });
            });   

           
        });
            $('#display').on('pagebeforeshow', function() {
               $.getJSON(cordova.file.externalApplicationStorageDirectory+"ar/"+glob.id+".json", function(result2){
                    var firstkey = Object.keys(result2)[0];
                    console.log(result2[firstkey]);
                   var output2 = '';
                    $.each(result2[firstkey], function(i, field){
                   


function getExtension(path) {
    return path.split('.').pop();            // extract extension ignoring `.`
}

var media = ['img/examples/card_bg_1.jpg',
             'img/examples/card_bg_2.jpg',
             'img/examples/card_bg_3.jpg',
             'img/examples/card_bg_4.jpg',
             'img/examples/card_bg_5.jpg',
             'img/examples/card_bg_6.jpg',
             'img/examples/card_bg_7.jpg',
             'img/examples/card_bg_8.jpg',
             'img/examples/card_bg_9.jpg',
             'img/examples/card_bg_10.jpg',
             'img/examples/card_bg_11.jpg',
             'img/examples/card_bg_12.jpg',
            ];
var rand  = media[Math.floor(Math.random() * media.length)];
var ext   = getExtension(rand);

if(ext == 'png' || ext == 'jpg'|| ext == 'gif'){
 
    var img = '<img src="'+rand+'" title="'+field.ID+' | '+field.Text+'"/>';
    var share = "'"+field.Text+"\\n \\n \\n تم الارسال من *حصن المسلم* \\n \\n \\n', null, null, 'https://play.google.com/store/apps/details?id=com.el3zahaby.hisn'";
    output2 += '<div class="nd2-card"> <div class="card-media"> '+img+' <div class="card-media-overlay with-background"> <div class="card-title has-supporting-text"> <h5 class="card-subtitle">'+field.ID+'</h5> </div> <div class="card-action"> <div class="row between-xs"> <div class="col-xs-12"> <div class="box">'
    +'<a href="#!" onclick="window.plugins.socialsharing.share( '+share+' )" class="ui-btn ui-btn-inline waves-effect waves-purple"><i class="zmdi zmdi-share "></i></a></div> </div> </div> </div> </div> </div> <div class="card-supporting-text">'+field.Text+'</div> </div>';
}else {
    var video = '<video width="400" autoplay muted loop title="'+field.ID+' | '+field.Text+'">'
    +'<source src="'+rand+'" type="video/mp4">'
    +'</video>';
    output2 += '<div class="nd2-card"> <div class="card-media"> '+video+' </div> <div class="card-supporting-text">'+field.Text+'</div> </div>';
}                        
                        
                        
                    
                    
                    });
                   $('#definition').html(output2);
                   $("#htitle").text(firstkey+" | "+ result2[firstkey].length);
                   
                   
                   
                   
                });
            });   
        


    
});
    
    
