$(document).ready(function($){
$('.counter-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});







	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');


 $('#youtube-video').magnificPopup({
 	type:'iframe',
 	iframe: {
 

  patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=', 
      src: '//www.youtube.com/embed/%id%?autoplay=1' 

   
  },
});




 $('.owl-carousel-testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
 item:1
});





	var mixer = mixitup('.portfolio-content');


}(jQuery));





