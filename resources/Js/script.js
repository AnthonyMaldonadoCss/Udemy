	
/*BARRA DE NAVEGACION*/
window.addEventListener("scroll", function(){

	var navegacion_scroll = document.querySelector("nav");
	navegacion_scroll.classList.toggle("sticky", window.scrollY > 495)
})
/********************************/

/**/
window.addEventListener("scroll", function(){

	var navegacion_animation = document.getElementsByClassName('js--wp-1')[0];
	navegacion_animation.classList.toggle("animate__bounce", window.scrollY > 495)
})

window.addEventListener("scroll", function(){

	var navegacion_animation_img = document.getElementsByClassName('js--wp-2')[0];
	navegacion_animation_img.classList.toggle("animate__shakeX", window.scrollY > 1660)
})

window.addEventListener("scroll", function(){

	var navegacion_animation_plan = document.getElementsByClassName('js--wp-3')[0];
	navegacion_animation_plan.classList.toggle("animate__fadeInUp", window.scrollY > 3600)
})

window.addEventListener("scroll", function(){

	var navegacion_animation_plan_sub = document.getElementsByClassName('js--wp-4')[0];
	navegacion_animation_plan_sub.classList.toggle("animate__pulse", window.scrollY > 3600)
})


/*window.onscroll = function(){
	var y = window.scrollY;

	 console.log(y)
}*/
/***********/

var main_nav = document.getElementsByClassName('js--main-nav')[0];
icon = document.getElementsByClassName('js--nav-icon')[0];
var nav_responsive = document.getElementsByClassName('js--nav-icon')[0].onclick = ocultar;

function ocultar () {
	main_nav.classList.toggle('mobile-nav-icon');

};
