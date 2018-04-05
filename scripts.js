var $fade =  $(".hello"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade.each(function () {
      
        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMiddle < windowBottom) {
          $(this).addClass("FadeIn");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();
