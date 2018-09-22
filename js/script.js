$(window).on('load', function () {
    var $preloader = $('.loader')
       $preloader.delay(350).fadeOut('slow');
});

$(document).ready(function () {
  
$("#menu-order-button").click(function () {
  location.href = "/order-now.html";
});

$("#bg-button").click(function () {
  location.href = "/technology.html";
});

$('.video-preroll').click(function () {
  $(this).fadeOut();
  // let video = $('#vimeo-video');
  // let src = video.attr('src');
  // video.attr('src', src + '?autoplay=true');
})
if ($(window).width() <= 768) {
  let paralaxBlock = $('.paralax');
  (paralaxBlock).each(function(i, el) { 
      let thisBlock = $(this);
      thisBlock.removeClass('paralax paralax-bg15 paralax-bg4 paralax-bg3 paralax05 paralax1 paralax2 paralax3 paralaxBottom1')
    });
}
console.log();

$(window).scroll(function() {
    let introBlock = $(".main__intro-block");
    let animateBlock = $('.animatable');
    let sTop = $(this).scrollTop();
    let paralaxBlock = $('.paralax');

    // Adaptive opacity Intro

    $(introBlock).each(function(i, el) { 
      let opacityNow = (sTop-200) / 500;
      if (sTop > 0 && opacityNow <= 0.995 && opacityNow >= 0) { 
        $(introBlock).css({
          opacity: function() {
            return opacityNow;
          }
        });
      }
      if (sTop < 200) {
        $(introBlock).css('z-index', '-1');
        $('.main__intro').css('z-index', '1');
      } else if (sTop > 200) {
        $(introBlock).css('z-index', '2');
        $('.main__intro').css('z-index', '0');
      }
    });

    // Block anitamion

    $(animateBlock).each(function(i, el) { 
      let thisBlock = $(this);
      if ($(window).scrollTop()-10 > thisBlock.offset().top - $(window).height()) {


        if (thisBlock.hasClass('slide-top')) {

          // Personal delay
          if (thisBlock.hasClass('animate-delay')) {
            thisBlock.delay(this.getAttribute('data-delay')).animate({
              opacity: 1,
              top: 0
            },1000);
          }

          thisBlock.delay(200).animate({
              opacity: 1,
              top: 0
            },1000);
        }


        // opacity & going left
        if (thisBlock.hasClass('slide-left')) {
          thisBlock.delay(500).animate({
              opacity: 1,
              left: 0
            },1500);
        }


        // opacity & going right
        if (thisBlock.hasClass('slide-right')) {
          thisBlock.delay(500).animate({
              opacity: 1,
              left: 0
            },1500);
        }


        // Usual change opacity
        thisBlock.delay(200).animate({
              opacity: 1
            },1000);
      }
    });

    // Paralax

  $(paralaxBlock).each(function(i, el) { 
          let thisBlock = $(this);
          let scrolled = $(window).scrollTop();
          let blokOffset = thisBlock.offset().top - $(window).height();
          if (scrolled > blokOffset) {

            // Paralax intro block
            if (thisBlock.hasClass('paralax-bg15')) {
              thisBlock.css('top',(0-(scrolled))*0.15+'px');
            };
            if (thisBlock.hasClass('paralax-bg4')) {
              thisBlock.css('top',(0-(scrolled))*0.4+'px');
            };
            if (thisBlock.hasClass('paralax-bg3')) {
              thisBlock.css('top',(0-(scrolled))*0.3+'px');
            };

            // Paralax any block
            if (thisBlock.hasClass('paralax05')) {
              thisBlock.css('top',(0-(scrolled-thisBlock.offset().top))*0.05+'px');
            };
            if (thisBlock.hasClass('paralax1')) {
              thisBlock.css('top',(0-(scrolled-thisBlock.offset().top))*0.1+'px');
            };
            if (thisBlock.hasClass('paralax2')) {
              thisBlock.css('top',(0-(scrolled-thisBlock.offset().top))*0.2+'px');
            };
            if (thisBlock.hasClass('paralax3')) {
              thisBlock.css('top',(0-(scrolled-thisBlock.offset().top))*0.3+'px');
            }
            if (thisBlock.hasClass('paralaxBottom1')) {
              thisBlock.css('top',(0+(scrolled-thisBlock.offset().top))*0.1+'px').css('left',(0+(scrolled-thisBlock.offset().top))*0.1+'px');
            }
          }
        });

});

  

});

