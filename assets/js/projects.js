import common from "./common";

setTimeout(() => {
    $(".nav__mobile__button").click(function(){
        common.ToggleMenu();
    });
    
    $(".nav__mobile__dropdown__item").click(function(){
        common.ToggleMenu();
    });
}, 200);