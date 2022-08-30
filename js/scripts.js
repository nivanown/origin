$(document).ready(function(){

	/*- header -*/
	$nav = $('.header');
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h) {
			$nav.addClass('fixed');
		} else {
			$nav.removeClass('fixed');
		}
	});

	/*- to-top -*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.to-top').fadeIn();
		} else {
			$('.to-top').fadeOut();
		}
	});

	$('.to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	/*- menu-btn -*/
	var siteToggle = $('.menu-btn'),
		siteMenu= $('.header__sub-menu');

	siteToggle.on('click', function(){
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hd');
	});

});