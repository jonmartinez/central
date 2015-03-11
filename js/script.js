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
		case 'Graf':
	/*			document.getElementById('tmp').innerHTML='<canvas id="canvas" width="500" height="500" style="background-color:#FFFFF1;">Su navegador no permite utilizar canvas.</canvas><br>';
				dibujarPlano(pantalla);*/
				
				ancho=document.getElementById('txtAncho').value;
				alto=document.getElementById('txtAlto').value;
				document.getElementById('tmp').innerHTML='<canvas id="canvas" width="'+ancho+'" height="'+alto+'" style="background-color:#FFFFF1;">Su navegador no permite utilizar canvas.</canvas><br>';
				dibujarPlano(pantalla);
			break;
		default:
			pantalla.value= pantalla.value + tecla;
		break;
	}
}

function dibujarPlano(pantalla) 
{
	var canvas = document.getElementById('canvas');
	var contexto = canvas.getContext('2d');
	var ancho=canvas.width;
	var alto=canvas.height;
	contexto.translate(ancho/2,alto/2);
	//contexto.clearRect(-250, -250, canvas.width, canvas.height);
	contexto.lineWidth=1; //Defino el ancho de la linea en pixeles
	contexto.strokeStyle = '#000'; //Defino el color en hexagesimal
	
	//	contexto.restart();
 	//EJEX
	contexto.beginPath(); // Pongo el lapiz
	contexto.moveTo((ancho/2)*-1,0); // lo Ubico para iniciar el dibujo
	contexto.lineTo((ancho/2),0); // trazo la linea hasta este punto
	contexto.stroke(); // levanto el lapiz
	contexto.closePath(); // me alisto para realizar otra parte del dibujo
	//EJE Y
	contexto.beginPath(); // Pongo el lapiz
	contexto.moveTo(0,alto);// lo Ubico para iniciar el dibujo
	contexto.lineTo(0,alto*-1);// trazo la linea hasta este punto
	contexto.stroke();// levanto el lapiz
	contexto.closePath();// me alisto para realizar otra parte del dibujo	
	//defino las escalas
	var x = document.getElementById('txtEscalax').value;
	var y = document.getElementById('txtEscalay').value;
	var escalax=(ancho/2)/x;
	var escalay=(alto/2)/y;
	var i = (x)*(-1);
	//escribo los puntos en x
	puntosEnX(contexto,ancho/2,x,escalax);
	//escribo los puntos en y
	puntosEnY(contexto,alto/2,y,escalay);
	
	//escribir en otro color
	contexto.strokeStyle = '#00A8FF'; //Defino el color en hexagesimal
	contexto.beginPath();
//	alert(pantalla.value);
	for(x=i;x<=(i*-1);x+=0.2)
	{
		contexto.lineTo(x*escalax,eval(pantalla.value)*(escalay*-1));
		contexto.stroke();
	}
}

function puntosEnX(contexto,ancho,x,escalax)
{
	contador=x*-1;
	for (i=ancho*-1;i<=ancho;i+=escalax) 
	{
		contexto.font = "bold 12px sans-serif";
		contexto.fillText(contador,i,0);
		contador++;
	}
}

function puntosEnY(contexto,alto,y,escalay)
{
	contador=y;
	for (i=alto*-1;i<=alto;i+=escalay) 
	{
		contexto.font = "bold 12px sans-serif";
		contexto.fillText(contador,0,i);
		contador--;
		//contexto.fillText(i,0,(i*escalay-1)*-1);
	}
}
