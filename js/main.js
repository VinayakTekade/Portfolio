/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 15; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$("#owl-slider").owlCarousel({
    navigation: false,
    pagination: true,
    itemsCustom : [
        [0, 1],
        [700, 2],
        [960, 3]
     ],
    navigationText: false
});