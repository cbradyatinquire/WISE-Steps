var earthVideoStr="";
earthVideoStr += "<div class=\"video-js-box\">";
earthVideoStr += "<video id=\"earth-video\" class=\"video-js\" width=\"1030\" height=\"700\" controls=\"controls\" ";
earthVideoStr += "preload=\"auto\" autoplay=\"true\" loop=\"true\" poster=\"images\/earth-frame1.jpg\">";
earthVideoStr += "<source src=\"videos\/earth3.mp4\" type='video\/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"' \/>";
earthVideoStr += "<source src=\"videos\/earth3.webm\" type='video\/webm; codecs=\"vp8, vorbis\"' \/>";
earthVideoStr += "<source src=\"videos\/earth3.ogv\" type='video\/ogg; codecs=\"theora, vorbis\"' \/>";
earthVideoStr += "<object id=\"flash_fallback_1\" class=\"vjs-flash-fallback\" width=\"1030\" height=\"700\" type=\"application\/x-shockwave-flash\"";
earthVideoStr += "data=\"http:\/\/releases.flowplayer.org\/swf\/flowplayer-3.2.1.swf\">";
earthVideoStr += "<param name=\"movie\" value=\"http:\/\/releases.flowplayer.org\/swf\/flowplayer-3.2.1.swf\" \/>";
earthVideoStr += "<param name=\"allowfullscreen\" value=\"true\" \/>";
earthVideoStr += "<param name=\"flashvars\" value='config={\"playlist\":[\"images/earth-frame1.jpg\", {\"url\": \"videos/earth3.flv\",\"autoPlay\":false,\"autoBuffering\":true}]}' \/>";
earthVideoStr += "<img src=\"images/earth-frame1.jpg\" width=\"1030\" height=\"700\" alt=\"Poster Image\"";
earthVideoStr += "title=\"No video playback capabilities.\" \/>";
earthVideoStr += "<\/object>";
earthVideoStr += "<\/video>";
earthVideoStr += "<p class=\"vjs-no-video\">Playing a video of the Earth visualization with an <a href=\"http:\/\/videojs.com\">HTML5 Video Player<\/a>";
earthVideoStr += " because this browser doesn't support WebGL.<\/p>";
earthVideoStr += "<\/div>";
earthVideoStr += "";
