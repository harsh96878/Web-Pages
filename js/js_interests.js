$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20) 
        $(".navbar").addClass("sticky");
      else
        $(".navbar").removeClass("sticky");
    });
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  
    $('.interests').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {enabled: true},
        image: {
        markup: '<div class="mfp-figure">'+
                  '<div class="mfp-close"></div>'+
                  '<div class="mfp-img"></div>'+ // Floated left
                  '<div class="mfp-title"></div>'+ // This is floated right shows up on the right side
                  '<div class="mfp-bottom-bar">'+
                    '<div class="mfp-counter"></div>'+
                  '</div>'+
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
      
        cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 
      
        tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        },
      
        preloader: true,
      
      });
  });
  
  