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
  if(wScroll > $('.clothes-pics').offset().top){
    // itterating over each figure and manipulating it using this function
    $('.clothes-pics figure').each(function(){

      $('.clothes-pics figure').addClass('.is-showing');

    });


  }

});
