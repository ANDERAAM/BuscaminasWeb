
var Nivel;var Nombre;

function Inicio(){
  Nivel  = document.getElementById("NivelJuego").value;
  Nombre = document.getElementById("N_Usuario").value;
  if(Nivel=="Facil")  TableroF();
  if(Nivel=="Medio")  TableroM();
  if(Nivel=="Dificil")TableroF();
}

function TableroF(){
  document.getElementById("CTOTAL").style.display="none";
  for(var i=0;i<=10;i++){
  for(var p=0;p<=10;p++){
  var bloque = document.createElement("div");
  bloque.id=i+"."+p;
  TableroCompleto.appendChild(div);
  bloque.setAttribute('class','Bloque');
  document.getElementById("TableroCompleto").innerHTML=bloque;
  }
  }
alert("Hola_Mundo");
}
