var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";
var a=10;

for (l=0; l < lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	// dibujarlinea(colorcito, 0, yi, xf, 300);
	// dibujarlinea("#fff300", 300, yi, xf, 0);
	// dibujarlinea("blue", a*l, 0, 300, a*l);
	// dibujarlinea("#fff300", 20, yi, xf,  0);
	dibujarlinea("GREEN", 0, a*l, a*l, 300);
  	dibujarlinea("blue", a*l, 0, 300, a*l);
  	dibujarlinea("BLACK", 300-a*l, 0, 0, a*l);
  	dibujarlinea("red", 300, a*l, 300-a*l, 300);
	console.log("Lineas " + l);
	
}

dibujarlinea(colorcito, 1,1,1,299);
dibujarlinea(colorcito, 1,299,299,299);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

