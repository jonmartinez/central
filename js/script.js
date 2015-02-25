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