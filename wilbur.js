$('.nav').stickThis({
  top:0
});


  lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'positionFromTop': 50
  })


//FADEIN TEXT ON PAGE LOAD//
window.onload = function() {
  window.setTimeout(fadein, 500);
}
function fadein() {
  document.querySelector('.fadein').style.opacity = '1';
}



//FADE IN TESTIMONIAL AFTER IMG CLICKED//
$(document).ready(function(){
    $(".t-image1").click(function(){
        $(".mark, .emma, .linda").hide()
        $(".natalie").fadeIn(800);
      $(this).removeClass('t-inactive');4
      $(this).addClass('t-active');
           $(".t-image2, .t-image3, .t-image4").removeClass("t-active")
        $(".t-image2, .t-image3, .t-image4").addClass("t-inactive")
    });
});
$(document).ready(function(){
    $(".t-image2").click(function(){
        $(".natalie, .emma, .linda").hide();
        $(".mark").fadeIn(800);
      $(this).removeClass('t-inactive');
      $(this).addClass('t-active');
        $(".t-image1, .t-image3, .t-image4").removeClass("t-active")
        $(".t-image1, .t-image3, t-image4").addClass("t-inactive")
    });
});
$(document).ready(function(){
    $(".t-image3").click(function(){
        $(".mark, .natalie, .linda").hide()
        $(".emma").fadeIn(800)
      $(this).removeClass('t-inactive');
      $(this).addClass('t-active');
        $(".t-image1, .t-image2, .t-image4").removeClass("t-active")
        $(".t-image1, .t-image2, .t-image4").addClass("t-inactive")
    });
});
$(document).ready(function(){
    $(".t-image4").click(function(){
        $(".mark, .natalie, .emma").hide()
        $(".linda").fadeIn(800)
      $(this).removeClass('t-inactive');
      $(this).addClass('t-active');
        $(".t-image1, .t-image2, .t-image3").removeClass("t-active")
        $(".t-image1, .t-image2, .t-image3").addClass("t-inactive")
    });
});




//SMOOTH SCROLLING//

// Select all links with hashes
$('a[href*="#"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top +5
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          }
        });
      }
    }
  });


//REMOVED THE BELOW DUE TO CLASHES WITH THE NAV LINKS GOING TOO FAR//
//   window.sr = ScrollReveal();
// sr.reveal('#section-about,.about,#section-work,.work-item,#section-testimonials', { duration: 800,easing: 'ease-in' });
