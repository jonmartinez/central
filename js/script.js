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