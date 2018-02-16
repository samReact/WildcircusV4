$(document).ready(function () {
	$('#fullpage').fullpage({
		sectionsColor: ['#333', '#333', '#333', '#333', '#333', '#333'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
		menu: '#menu',
		controlArrows: true,
		lazyLoading: false,
		// navigation: true,
		scrollingSpeed: 600
	});


	//====================================================================//



	$('#section1 .btn ').mouseover(function () {
		$('.rounded-circle, h2').css({
				'transform': 'rotate(1080deg)',
				'transition': 'transform 1.5s ease-out'
			}),
			$('.hidden').slideDown(1000)
	});

	$('#section1').mouseleave(function () {
		$('.rounded-circle, h2').css({
				'transform': 'rotate(-1080deg)',
				'transition': 'transform 1.5s ease-out'
			}),
			$('.hidden').slideUp(1000)
	});



	//====================================================================//


	$('#section2 .carousel-item').mouseover(function () {
		$('#section2 img').css({
				'transform': 'scale(1.1)',
				'transition': 'transform 1.5s ease-out'
			}),
			$('.carousel-caption').fadeTo(200, 1).css({
				'backgroundColor': 'rgba(0, 0, 0, .5)',
				'transition': 'transform 1.5s ease-out'
			});
	});


	$('#section2').mouseleave(function () {
		$('#section2 img').css({
				'transform': 'scale(1)',
				'transition': 'transform 1.5s ease-out'
			}),
			$('.carousel-caption').fadeTo(200, 0);
	});



	//====================================================================//

	$('#section3').mouseover(function () {
		$('.table').css({
			'transform': 'scale(1)',
			'transition': 'transform 1.5s ease-out'
		})
	});

	$('#section3').mouseout(function () {
		$('.table').css({
			'transform': 'scale(0.5)',
			'transition': 'transform 1.5s ease-out'
		})
	});


	//===================================================================//






	//====================================================================//

	$('#section4 .btn').sparkleHover({
		colors: ['mediumpurple', 'orangered', '#36BEC1', 'yellow'],
		num_sprites: 12,
		lifespan: 3000,
		radius: 500,
		sprite_size: 10,
		shape: 'circle'

	});

	//====================================================================//


});


var x = ["mediumpurple", "transparent"];

var i = 0;

function myLoop() {
	setTimeout(function () {
		$('#section1 .btn').css('backgroundColor', x[i]);
		i++;
		if (i < 2) {
			myLoop();
		} else {
			i = 0;
			myLoop();
		}

	}, 500);
}


myLoop();


$('.carousel').carousel({

	interval: 2000

});
