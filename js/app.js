var turno=1;
var queTurno;
var arregloGato=new Array (9);
var celdas = document.getElementsByClassName('gato');

function ganaJugador(letra){

if( (arregloGato[0]==letra && arregloGato[1]==letra && arregloGato[2]==letra) ||
    (arregloGato[3]==letra && arregloGato[4]==letra && arregloGato[5]==letra) ||
    (arregloGato[6]==letra && arregloGato[7]==letra && arregloGato[8]==letra) ||
    (arregloGato[0]==letra && arregloGato[3]==letra && arregloGato[6]==letra) ||
    (arregloGato[1]==letra && arregloGato[4]==letra && arregloGato[7]==letra) ||
    (arregloGato[2]==letra && arregloGato[5]==letra && arregloGato[8]==letra) ||
    (arregloGato[0]==letra && arregloGato[4]==letra && arregloGato[8]==letra) ||
    (arregloGato[2]==letra && arregloGato[4]==letra && arregloGato[6]==letra))
{
  alert("Jugador "+ letra +" GANA!!!");
  //window.location.reload();
}
}

function gato (event){
//  alert(event.target);
var celda= event.target;
celda.removeEventListener("click",gato);
var idCelda= event.target.id;
var posicionAMarcar= idCelda[1]-1;
console.log(posicionAMarcar);

queTurno = turno%2;
if(queTurno == 0){
  celda.innerHTML = "X";
  celda.style.background = "#EC673A";
  arregloGato[posicionAMarcar] = "X";
  ganaJugador("X");
}
else {
  celda.innerHTML = "O";
  celda.style.background = "#1C5F81";
  arregloGato[posicionAMarcar] = "O";
  ganaJugador("O");
}
console.log(turno,queTurno,arregloGato);
if(turno >= 9){
  alert("empate!!!");
//  window.location.reload();
}
else {
  turno ++;
}
}

function cargarDocument(){
  var i=0;
  while(i< celdas.length){
    console.log(i, celdas[i]);
    celdas[i].addEventListener("click",gato);
    i ++;
  }

}

window.addEventListener("load",cargarDocument);

function recargar (){
  window.location.reload();
}
/*
var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName("gato");
//var celdas = document.getElementsByTagName("td");
// declaracion de funciones
function ganaJugador(letra){
if(
	(arregloGato[0]==letra && arregloGato[1]==letra && arregloGato[2]==letra)
	||
	(arregloGato[3]==letra && arregloGato[4]==letra && arregloGato[5]==letra)
	||
	(arregloGato[6]==letra && arregloGato[7]==letra && arregloGato[8]==letra)
	||
	(arregloGato[0]==letra && arregloGato[3]==letra && arregloGato[6]==letra)
	||
	(arregloGato[1]==letra && arregloGato[4]==letra && arregloGato[7]==letra)
	||
	(arregloGato[2]==letra && arregloGato[5]==letra && arregloGato[8]==letra)
	||
	(arregloGato[0]==letra && arregloGato[4]==letra && arregloGato[8]==letra)
	||
	(arregloGato[2]==letra && arregloGato[4]==letra && arregloGato[6]==letra)
  ){
	alert("jugador "+letra+" Gana ");
}else{

}

}

function gato(evento){
//se obtiene el id del documento html que se presiono
// se usa para poner el tache o circulo
var celda = evento.target;
celda.removeEventListener("click",gato);
var idCelda = evento.target.id;
//alert(idCelda);
//alert(idCelda.length);
//alert(idCelda[1]);
var posicionAMarcar = idCelda[1]-1;
//alert(posicionAMarcar);

	queTurno = turno%2;
	if(queTurno!=0)
	{
		celda.innerHTML = "X";
		celda.style.background = "#EC673A";
		arregloGato[posicionAMarcar] = "X";
		ganaJugador("X");
	}else if(queTurno==0){
		celda.innerHTML = "O";
		celda.style.background = "#1C5F81";
		arregloGato[posicionAMarcar] = "O";
		ganaJugador("O");
	}
	console.log(turno,queTurno,arregloGato);
	if(turno>9){
		alert("empate");
	}else{
		turno++;
	}
}

function cargarDocumento(){
//document.getElementById("C1").addEventListener("click",gato);;
//document.getElementByClassName("gato")[4].addEventListener("click",gato);
	n=0;
	while(n<celdas.length){
	celdas[n].addEventListener("click",gato);
	n++;
	}
}
//asignaion de eventos
window.addEventListener("load",cargarDocumento);*/
