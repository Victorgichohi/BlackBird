$(window).scroll(function(){

  //this function tells how far the postion one has scrolled from the top
  var wScroll=$(this).scrollTop();
  // translate and transform simply change the position of the div when scrolled
  $('.logo').css({
    // when you devide by two,the midground moves at half the slow speed
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });


});
