$(window).scroll(function(){

  //this function tells how far the postion one has scrolled from the top
  var wScroll=$(this).scrollTop();
  // translate and transform simply change the position of the div when scrolled
  $('.logo').css({
    // when you devide by two,the midground moves at half the slow speed
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  $('.back-bird').css({
    // when you devide by four,the backbird moves at half the speed of the for bird
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.fore-bird').css({
    //this makes the forebird like move at a really slower speed as the rest
        'transform' : 'translate(0px, '+ wScroll/40 +'%)'
  });
  // delayed trigger
  if(wScroll > $('.clothes-pics').offset().top -
  // these window allows the elements to scroll in after a certain measurement of the browser window
  ($(window).height() / 1.2)){
    // itterating over each figure and manipulating it using this function
    $('.clothes-pics figure').each(function(i){
      // this delays any action until a certain time reaches
       setTimeout(function(){
       // this adds the is showing class when the scroll position reaches this div
      // the i represents each clothe and 150 is the amount of seconds then adds 150 to the second div and so on
       $('.clothes-pics figure').eq(i).addClass('is-showing');
     }, 150 * (i+1));
    });


  }
  // start by getting another scroll position and if bigger than large-window,
  if (wScroll > $('.large-window').offset().top -$(window).height()) {
      //this replicates the image in the periscope to give a parralax effect that makes it seem like two images at once
     $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top +'px')})

     var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)

     $('.window-tint').css({'opacity': opacity})

  }

});
