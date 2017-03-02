<html>
<!-- Added by Jhonatan Wylder --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added -->
<head>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-store" />
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />
<META HTTP-EQUIV="Expires" CONTENT="0">
<script>
     var site = new Array(5)
     site[0] = "http://twitter.com";
     site[1] = "https://www.facebook.com";
     site[2] = "http://youtube.com.br";
     site[3] = "https://br.pinterest.com";
     site[4] = "https://www.instagram.com/";
     siteNumber = Math.floor(Math.random()* (site.length-1));
     var ref= site[siteNumber];

     delete window.document.referrer;
     window.document.__defineGetter__('referrer', function () {
         return ref;
     });
</script>
 <style>
  body{
   margin: 0px;
   padding: 0px;
   top: 0px;
   left: 0px;
  }
 </style>
</head>
<body>
<div id='player'></div>
<script>
var videoEscolhido;



var idVideos = [
"-wjxvgi9J-E",
"-wjxvgi9J-E",
"-wjxvgi9J-E",
"-wjxvgi9J-E",
"-wjxvgi9J-E",
"-wjxvgi9J-E"
];


var videoEscolhido = idVideos[Math.floor((Math.random() * idVideos.length))];
	

</script>




<script type="text/javascript" id="www-widgetapi-script" src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflyFv0K1/www-widgetapi.js" async=""></script>
<script src="https://www.youtube.com/iframe_api"></script>
    <script>

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '480',
          width: '854',
          autoplay: 1,
          start: 15,
          videoId: videoEscolhido,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }


      function onPlayerReady(event) {
        //event.target.playVideo();
      }


      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 200);
setTimeout(mute, 100);
          done = true;
        }
      }
      function stopVideo() {
player.playVideo();

        player.mute();
      }
function mute() { player.mute(); } 
    </script>
<SCRIPT LANGUAGE="JavaScript">   
<!-- Disable   
function disableselect(e){   
return false   
}   

function reEnable(){   
return true   
}   

//if IE4+   
document.onselectstart=new Function ("return false")   
document.oncontextmenu=new Function ("return false")   
//if NS6   
if (window.sidebar){   
document.onmousedown=disableselect   
document.onclick=reEnable   
}   
//-->   


</script>

</body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '-', 'auto');
  ga('send', 'pageview');

</script>

</html>﻿
