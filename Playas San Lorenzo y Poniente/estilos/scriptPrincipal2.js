$(document).on("ready",configurarApp);

function configurarApp (){
	var canvas = document.getElementById("miCanvas");
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
	dibujaFooter(canvas,ctx)
}

function dibujaFooter(canvas,ctx){
	ctx.fillStyle = "rgba(0,0,0,0.8";
	ctx.moveTo(0,0);
	ctx.quadraticCurveTo(0,-50,canvas.width-100,canvas.height-50);
	ctx.fill();
}