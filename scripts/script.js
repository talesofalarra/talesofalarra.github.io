// Code goes here

$(document).ready(function() {

  // Floating back to top button --------------------

  var amountScrolled = 20;
  $(window).scroll(function() {
  	if ( $(window).scrollTop() > amountScrolled ) {
  		$('a.back-to-top').fadeIn('fast');
  	} else {
  		$('a.back-to-top').fadeOut('fast');
  	}
  });

  $('.back-to-top').click(function() {
  	$('html, body').animate({
  		scrollTop: 0
  	}, 500);
  	return false;
  });
  // --------------------------------------


});
