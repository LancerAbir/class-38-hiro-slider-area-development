(function($){
    'use strict';


      jQuery(document).ready(function($){
         $(".homepage-slider-area").owlCarousel({
             items: 1,
             dots: true,
             nav: true,
             autoplay: false,
             navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
             loop: true,
             animateOut: 'fadeOut'
             
         })
      });



      jQuery(window).load(function(){
          
      });




    
})(jQuery);