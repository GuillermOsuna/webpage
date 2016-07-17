$(document).scroll(function() {
  var c=$(window).height()-350;
  var dHeight = $(this).height()-$(window).height();
  var cont;
  var myWidth;
   myWidth = window.innerWidth;
	$('#prueba1').css('height', myWidth/4);

  if (dHeight >= $(this).scrollTop()) {
  $('#cabezera nav').css('background', 'rgba(255, 255, 255,' + $(this).scrollTop() / c + ')');
  $('#cabezera nav').css('box-shadow', '2px 1px 3px rgba(150,150,150,' + $(this).scrollTop() / c + ')');

  }	
  

		if (matchMedia) {
			var mq = window.matchMedia("(max-width: 920px)");
			mq.addListener(WidthChange);
			WidthChange(mq);
		}

		
		function WidthChange(mq) {
			if (mq.matches) {
				$('.navi').css('color', 'rgba(0,0,0,1)');	
			}
			else {
				$('.navi').css('color', 'rgba(255,255,255,1)');
					if($(this).scrollTop() / c>=.0 && $(this).scrollTop() / c<=.2){
	  	$('#cabezera nav ul li a').css('color', 'rgba(255,255,255,1)');
	  	$('.navi').css('color', 'rgba(255,255,255,1)');
	  		$(function() {
			  $('.navi').hover(function() {
			    $('.navi').css('color', 'rgba(100,100,100,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('.navi').css('color', 'rgba(255,255,255,1)');
			  });
			});

	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	  }





	  if($(this).scrollTop() / c>=.71){
	  	$('#cabezera nav ul li a').css('color', 'rgba(0,0,0,1)');
	  	$('.navi').css('color', 'rgba(0,0,0,1)');

	  	$(function() {
			  $('.navi').hover(function() {
			    $('.navi').css('color', 'rgba(139,96,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('.navi').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  }
			}



		}


		if($(this).scrollTop() / c>=.3){
  	$('#guion').css('bottom', '10%');
  	$('footer').css('z-index', '-1');
  }	
  if($(this).scrollTop() / c<=.3){
  	$('#guion').css('bottom', '100%');
  	$('footer').css('z-index', '-98');
  }
  if($(this).scrollTop() / c>=.8){
  	$('#back').css('z-index', '-100');
  	$('.inf_back').css('z-index', '-99');
  }	
	if($(this).scrollTop() / c<.8){
  	$('#back').css('z-index', '-50');
  	$('.inf_back').css('z-index', '-49');
  }	
});










