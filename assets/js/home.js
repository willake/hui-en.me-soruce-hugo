import common from './common.js';

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

setTimeout(() => {
    $(".nav__mobile__button").click(function(){
        common.ToggleMenu();
    });
    
    $(".nav__mobile__dropdown__item").click(function(){
        common.ToggleMenu();
    });
    
    if (!isMobile) {
        var introVideo = $("#intro__video");

        introVideo.attr("autoplay", "autoplay");
        introVideo.get(0).play();
    }
}, 200);
// $("#intro__video").attr( "autoplay", "autoplay" );


