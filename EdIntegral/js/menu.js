$(document).ready(main);

var contador=1;
var dHeight = $(this).height()-$(window).height();
function main(){
	$('.menu_bar').click(function(){
		//$('nav').toggle()

		if(contador==1){
			$('#menu2').animate({
				left:'0%'
			});
			contador=0;
		}else
		{
			$('#menu2').animate({
					
				left:'100%'
			});
			contador=1;
		}
	});
}
