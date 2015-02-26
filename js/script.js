function pulsada (tecla) 
{
	var listaNodosPantalla = document.getElementsByClassName('pantalla');
	var nodoTextoPantalla = listaNodosPantalla[0].firstChild;
	switch(tecla) {
		case 'C':
		nodoTextoPantalla.nodeValue = ' ';
		break;
		case '=':
		var resultado = eval(nodoTextoPantalla.nodeValue);
		nodoTextoPantalla.nodeValue = resultado;
		break;
		default:
		nodoTextoPantalla.nodeValue = nodoTextoPantalla.nodeValue + tecla;
		break;
	}
}

function btn (tecla) 
{
	var pantalla = document.getElementById("pantalla");
	switch(tecla) {
		case 'C':
			pantalla.value= ' ';
		break;
		case '=':
			var resultado = eval(pantalla.value);
			pantalla.value = resultado;
			dibujar();
		break;
		case 'R':
			var resultado = "Math.sqrt("+pantalla.value+")";
			pantalla.value=resultado;
		break;
		case 'R3':
			var resultado = "Math.cbrt("+pantalla.value+")";
			pantalla.value=resultado;
		break;
		case 'e':
			var resultado = "Math.exp("+pantalla.value+")";
			pantalla.value=resultado;
		break;
		case 'P':
			var resultado = "Math.pow("+pantalla.value+","+3+")";
			pantalla.value=resultado;
		break;
		case 'Sen':
			var resultado = "Math.sin("+pantalla.value+")";
			pantalla.value=resultado;
		break;
		case 'Cos':
			var resultado = "Math.cos("+pantalla.value+")";
			pantalla.value=resultado;
		break;
		default:
			pantalla.value= pantalla.value + tecla;
		break;
	}
}

function dibujar() 
{
	var canvas = document.getElementById('canvas');
        var contexto = canvas.getContext('2d');
	contexto.lineWidth=2; //Defino el ancho de la linea en pixeles
        contexto.translate(250,250);
	contexto.strokeStyle = '#00A8FF'; //Defino el color en hexagesimal
	//contexto.
 
	//EJEX
	contexto.beginPath(); // Pongo el lapiz
	contexto.moveTo(-250,0); // lo Ubico para iniciar el dibujo
	contexto.lineTo(250,0); // trazo la linea hasta este punto
	contexto.stroke(); // levanto el lapiz
	contexto.closePath(); // me alisto para realizar otra parte del dibujo
	//EJE Y
	contexto.beginPath(); // Pongo el lapiz
	contexto.moveTo(0,250);// lo Ubico para iniciar el dibujo
	contexto.lineTo(0,-250);// trazo la linea hasta este punto
	contexto.stroke();// levanto el lapiz
	contexto.closePath();// me alisto para realizar otra parte del dibujo
        var x=-250;
        contexto.strokeStyle = '#000'; //Defino el color en hexagesimal
        contexto.beginPath();
        contexto.lineTo(-250,-250*-1);
        contexto.lineTo(250,250*-1);
        contexto.stroke();
	
}