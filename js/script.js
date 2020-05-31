// JavaScript Element by st4zz

// Test Event Scroll
$('.nav-link').on('click', function(e) {

	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	$('html , body').animate({
	 scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
   });

// Parallax Effect
	$(window).scroll(function(){
	   var iScroll = $(this).scrollTop();

   // Gallery Photo Effect
   if( iScroll > $('.gallery').offset().top -1 ) {
	   $('.gallery .thumbnail').each(function(i) {
		   setTimeout(function() {
			   $('.gallery .thumbnail').eq(i).addClass('foto');
		   }, 300 * (i+1));
	   });
}

});