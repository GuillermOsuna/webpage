$(document).ready(main);



var contador=1;
function main(){

$(".mas").hover(function(){
    $('#eventos_izquierda').css("-webkit-filter", "grayscale(100%)");
    $('#eventos_izquierda').css("filter", "grayscale(100%)");
    }, function(){
    $('#eventos_izquierda').css("-webkit-filter", "grayscale(0%)");
    $('#eventos_izquierda').css("filter", "grayscale(0%)");
});

$(".mas_der").hover(function(){
    $('#eventos_derecha').css("-webkit-filter", "grayscale(100%)");
    $('#eventos_derecha').css("filter", "grayscale(100%)");
    }, function(){
    $('#eventos_derecha').css("-webkit-filter", "grayscale(0%)");
    $('#eventos_derecha').css("filter", "grayscale(0%)");
});

$(".mas_segundo").hover(function(){
    $('#eventos_izquierda_segundo').css("-webkit-filter", "grayscale(100%)");
    $('#eventos_izquierda_segundo').css("filter", "grayscale(100%)");
    }, function(){
    $('#eventos_izquierda_segundo').css("-webkit-filter", "grayscale(0%)");
    $('#eventos_izquierda_segundo').css("filter", "grayscale(0%)");
});

$(".mas_der_segundo").hover(function(){
    $('#eventos_derecha_segundo').css("-webkit-filter", "grayscale(100%)");
    $('#eventos_derecha_segundo').css("filter", "grayscale(100%)");
    }, function(){
    $('#eventos_derecha_segundo').css("-webkit-filter", "grayscale(0%)");
    $('#eventos_derecha_segundo').css("filter", "grayscale(0%)");
});




$('.mas').click(function(){

		if(contador==1){

			$('.flecha').css('width', '100%');
			$('#cont').animate({
				right:'39%'
			});
			$('#cont').css('top', '930px');

		$('.mas').animate({
				right:'1%'
			});
		$('.mas').css('margin-top', '350px');
		$('#txt').css('opacity', '1');
			contador=0;
		}
		else{
		
			$('.flecha').css('width', '53%');
			$('#cont').animate({
				right:'60%'
			});
			$('#cont').css('top', '1050px');

			$('.mas').css('margin-top', '185px');
			$('.mas').animate({
				right:'48%'
			});
			$('#txt').css('opacity', '0');


			contador=1;
		}
	});




var contador_der=1;
$('.mas_der').click(function(){

		if(contador_der==1){

			$('.flecha_der').css('left', '-10%');
			$('#cont_der').animate({
				right:'39%'
			});
			$('#cont_der').css('top', '1330px');

		$('.mas_der').animate({
				right:'96%'
			});
		$('.mas_der').css('margin-top', '350px');
		$('#txt_der').css('opacity', '1');
			contador_der=0;
		}
		else{
		
			$('.flecha_der').css('left', '40%');
			$('#cont_der').animate({
				right:'20%'
			});
			$('#cont_der').css('top', '1450px');

			$('.mas_der').css('margin-top', '185px');
			$('.mas_der').animate({
				right:'48%'
			});
			$('#txt_der').css('opacity', '0');


			contador_der=1;
		}
	});



$('.mas_segundo').click(function(){

		if(contador==1){

			$('.flecha_segundo').css('width', '100%');
			$('#cont_segundo').animate({
				right:'39%'
			});
			$('#cont_segundo').css('top', '1730px');

		$('.mas_segundo').animate({
				right:'1%'
			});
		$('.mas_segundo').css('margin-top', '350px');
		$('#txt_segundo').css('opacity', '1');
			contador=0;
		}
		else{
		
			$('.flecha_segundo').css('width', '53%');
			$('#cont_segundo').animate({
				right:'60%'
			});
			$('#cont_segundo').css('top', '1850px');

			$('.mas_segundo').css('margin-top', '185px');
			$('.mas_segundo').animate({
				right:'48%'
			});
			$('#txt_segundo').css('opacity', '0');


			contador=1;
		}
	});



var contador_der=1;
$('.mas_der_segundo').click(function(){

		if(contador_der==1){

			$('.flecha_der_segundo').css('left', '-10%');
			$('#cont_der_segundo').animate({
				right:'39%'
			});
			$('#cont_der_segundo').css('top', '2130px');

		$('.mas_der_segundo').animate({
				right:'96%'
			});
		$('.mas_der_segundo').css('margin-top', '350px');
		$('#txt_der_segundo').css('opacity', '1');
			contador_der=0;
		}
		else{
		
			$('.flecha_der_segundo').css('left', '40%');
			$('#cont_der_segundo').animate({
				right:'20%'
			});
			$('#cont_der_segundo').css('top', '2250px');

			$('.mas_der_segundo').css('margin-top', '185px');
			$('.mas_der_segundo').animate({
				right:'48%'
			});
			$('#txt_der_segundo').css('opacity', '0');


			contador_der=1;
		}
	});




}






