$(document).scroll(function() {
	var c=$(window).height()-350;
  var dHeight = $(this).height()-$(window).height();
  var cont;
  var myWidth;
   myWidth = window.innerWidth;
	//$('#prueba1').css('height', myWidth/4);

  if (dHeight >= $(this).scrollTop()) {
  $('#cabezera nav').css('background', 'rgba(255, 255, 255,' + $(this).scrollTop() / $(window).height() + ')');
  $('#cabezera nav').css('box-shadow', '2px 1px 3px rgba(150,150,150,' + $(this).scrollTop() / $(window).height() + ')');

  }	
  		
		if (matchMedia) {
			var mq = window.matchMedia("(max-width: 920px)");
			var mq1= window.matchMedia("(max-width: 480px)");
			mq.addListener(WidthChange);
			mq1.addListener(WidthChange1);
			WidthChange(mq);
			WidthChange1(mq1);
		}

		function WidthChange1(mq1) {
			if (mq1.matches) {
				$('.arrow_left').css('border-width', '500px 60px 0px 0px');
	  			$('.arrow_right').css('border-width', '0px 0px 500px 60px');
			if($(this).scrollTop() / $(window).height()>=.3){
				$('.arrow_left').css('border-width', '500px 60px 0px 0px');
			  	$('.arrow_right').css('border-width', '0px 0px 500px 60px');
			  }	
			  if($(this).scrollTop() / $(window).height()<.3){
				$('.arrow_left').css('border-width', '500px 0px 0px 0px');
			  	$('.arrow_right').css('border-width', '0px 0px 500px 0px');
			  }	

			}if (mq1.matches>480){
				$('.arrow_left').css('border-width', '500px 90px 0px 0px');
	  			$('.arrow_right').css('border-width', '0px 0px 500px 90px');

			}

		}

		
  		

		
		function WidthChange(mq) {
			if (mq.matches) {
				$('.navi').css('color', 'rgba(0,0,0,1)');	


				$(function() {
			  $('.navi').hover(function() {
			    $('.navi').css('color', 'rgba(139,96,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('.navi').css('color', 'rgba(0,0,0,1)');
			  });
			});

				$('.arrow_left').css('border-width', '500px 90px 0px 0px');
	  			$('.arrow_right').css('border-width', '0px 0px 500px 90px');
			if($(this).scrollTop() / $(window).height()>=.3){
				$('.arrow_left').css('border-width', '500px 90px 0px 0px');
			  	$('.arrow_right').css('border-width', '0px 0px 500px 90px');
			  }	
			  if($(this).scrollTop() / $(window).height()<.3){
				$('.arrow_left').css('border-width', '500px 0px 0px 0px');
			  	$('.arrow_right').css('border-width', '0px 0px 500px 0px');
			  }	




			}
			else {



				$('.navi').css('color', 'rgba(255,255,255,1)');

				$(function() {
			  $('.navi').hover(function() {
			    $('.navi').css('color', 'rgba(139,96,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('.navi').css('color', 'rgba(255,255,255,1)');
			  });
			});

				
					if($(this).scrollTop() / $(window).height()>=.0 && $(this).scrollTop() / $(window).height()<=.2){
	  	$('#cabezera nav ul li a').css('color', 'rgba(255,255,255,1)');
	  	$('.navi').css('color', 'rgba(255,255,255,1)');

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





	  if($(this).scrollTop() / $(window).height()>=.71){
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

	 



	  			if($(this).scrollTop() / c>=3){
			  	$('footer').css('z-index', '-1');
			  			}	
			  	if($(this).scrollTop() / c<=3){
			  	$('footer').css('z-index', '-98');
			  			}	

	  			

			  	$('.arrow_left').css('border-width', '500px 200px 0px 0px');
	  			$('.arrow_right').css('border-width', '0px 0px 500px 200px');
			if($(this).scrollTop() / $(window).height()>=.3){
				$('.arrow_left').css('border-width', '500px 200px 0px 0px');
			  	$('.arrow_right').css('border-width', '0px 0px 500px 200px');
			  }	
			  if($(this).scrollTop() / $(window).height()<.3){
				$('.arrow_left').css('border-width', '500px 0px 0px 0px');
			  	$('.arrow_right').css('border-width', '0px 0px 500px 0px');
			  }	



			//LLAVE DE ELSE 
		}

		


		//PONER DE ARUI ARRIBA TODO EL CODIGO 
	}
});










