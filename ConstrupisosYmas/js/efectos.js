

var contador=0;
var dHeight = $(this).height()-$(window).height();


var angulo = 0;
var angulo2=0;
setInterval(function(){
      angulo+=2;
      angulo2+=-3;
     $(".medio_circulo_principal").rotate(angulo);
     $(".medio_circulo_principal2").rotate(angulo2);
},10);

$(document).ready(carga);
$(document).ready(main);

function main(){
	$('.menu_sandwich_seleccion').click(function(){
		//$('nav').toggle()


		if(contador==1){
			$('.menu_sandwich_btns').animate({
				top:'-270px'
			});
			$('.menu_sandwich ul .a').css("margin-left", "0px");
			$('.menu_sandwich ul .b').css("margin-left", "0px");
			$('.menu_sandwich ul .c').css("margin-left", "0px");

			$('.menu_sandwich_cerrar_a').css("color", "rgba(255, 255, 255, 0)");
			$('.menu_sandwich_cerrar_b').css("color", "rgba(255, 255, 255, 0)");
			contador=0;
		}else
		{
			$('.menu_sandwich_btns').animate({
					
				top:'66px'
			});

			$('.menu_sandwich ul .a').css("margin-left", "100px");
			$('.menu_sandwich ul .b').css("margin-left", "100px");
			$('.menu_sandwich ul .c').css("margin-left", "100px");

			$('.menu_sandwich_cerrar_a').css("color", "rgba(255, 255, 255, 1)");
			$('.menu_sandwich_cerrar_b').css("color", "rgba(255, 255, 255, 1)");

			contador=1;
		}
	});
	$('.bienvenida_imgs_mnsj_img').hover(function(){
		$('.bienvenida_imgs_mnsj_img_blur').css("background-color", "rgba(0, 0, 0, .6)");
		$('.bienvenida-texto-onblur').css("color", "white");},
		 function(){ $(".bienvenida_imgs_mnsj_img_blur").css("background-color", "rgba(0, 0, 0, .3)");
		 $(".bienvenida-texto-onblur").css("color", "transparent");
		});


		$('.bienvenida_imgs_mnsj_img_2').hover(function(){
		$('.bienvenida_imgs_mnsj_img_blur_2').css("background-color", "rgba(0, 0, 0, .6)");
			$('.bienvenida-texto-onblur2').css("color", "white");},
		 function(){ $(".bienvenida_imgs_mnsj_img_blur_2").css("background-color", "rgba(0, 0, 0, .3)");
		 	$(".bienvenida-texto-onblur2").css("color", "transparent");
		});

		

/*
	$("#presentacion > div:gt(0)").hide();
		
		setInterval(function(){
			$("#presentacion > div:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#presentacion");
		},3000);

*/

		$('.boton_leermas').hover(function(){
		$('.boton_leermas').css("background-color", "rgba(0, 105, 183, 1)");
		$('.boton_leermas').css("border-color", "rgba(0, 105, 183, 1)");},
		 function(){ 
		 	$(".boton_leermas").css("background-color", "rgba(0, 105, 183, 0)");
		 	$(".boton_leermas").css("border-color", "rgba(255, 255, 255, 1)");
		});



	$('.servicios-tipodeservicios-seccion').hover(function(){
		$('.servicios-tipodeservicios-blur').css("bottom", "0px");
		$('.servicios-tipodeservicios-blur-first').css("bottom", "0px");
			},
		 function(){ 
		 	$(".servicios-tipodeservicios-blur").css("bottom", "240px");
		 	$('.servicios-tipodeservicios-blur-first').css("bottom", "240px");
		 	
		});


		$('.servicios-tipodeservicios-seccion_2').hover(function(){
		$('.servicios-tipodeservicios-blur_2').css("bottom", "0px");
		$('.servicios-tipodeservicios-blur-first_2').css("bottom", "0px");
		},
		 function(){ 
		 	$(".servicios-tipodeservicios-blur_2").css("bottom", "240px");
		 	$('.servicios-tipodeservicios-blur-first_2').css("bottom", "240px");
		 	
		});


		$('.servicios-tipodeservicios-seccion').click(function(){
			$('.servicios-rentas').css("display", "block");
			$('.servicios-construccion').css("display", "none");
			
			});
		
		$('.servicios-tipodeservicios-seccion_2').click(function(){
			$('.servicios-rentas').css("display", "none");
			$('.servicios-construccion').css("display", "block");
			});




		var elemento = $("#elem1");
var posicion = elemento.position();
console.log("posicion de mi elemento","left: " + posicion.left + ", top: " + posicion.top );


};

function carga()
    {
        contador_s =0;
        var imageUrl = "../img/portada2.jpeg";
        cronometro = setInterval(
            function(){
                contador_s++;
                	
                    if(contador_s==1){
                		$('#divBackgroundPresentation').removeClass('presentacion_imagen_2').addClass('presentacion_imagen_0');
                	}
                	if(contador_s==3){
               		 	$('#divBackgroundPresentation').removeClass('presentacion_imagen_0').addClass('presentacion_imagen_1');
                	}
                	if(contador_s==6){
                		$('#divBackgroundPresentation').removeClass('presentacion_imagen_1').addClass('presentacion_imagen_2');
                	}
                	if(contador_s==9){
                		contador_s=0;
                	}
                	console.log(contador_s);
            },1000);
    };







