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
if(queTurno != 0){
  celda.innerHTML = "X";
  celda.style.background = "#EC673A";
  arregloGato[posicionAMarcar] = "X";
  ganaJugador("X");
}
else if (queTurno == 0) {
  celda.innerHTML = "O";
  celda.style.background = "#1C5F81";
  arregloGato[posicionAMarcar] = "O";
  ganaJugador("O");
}
console.log(turno,queTurno,arregloGato);
if(turno == 9){
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
