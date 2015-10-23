//Main Js

// var init = function(){
//   console.log("ebifw");
// }
//
// module.exports = init();


// Llamar a los botones
var btnAgregar = document.getElementById("btn-agregar"),
    btnQuitar = document.getElementById("btn-quitar"),
    pasosLista = document.getElementById("lista-pasos"),
    adjuntosLista = document.getElementById("lista-adjuntos");

console.log("A ver si es cierto");


btnAgregar.onclick = function(e){

  var newInputText = document.createElement('input');
  newInputText.setAttribute('name','paso');
  newInputText.setAttribute('placeholder','Agregue el contenido del paso');
  newInputText.setAttribute('class','form-control');

  var newInputFile = document.createElement('input');
  newInputFile.setAttribute('name','adjunto');
  newInputFile.setAttribute('type','file');
  newInputFile.setAttribute('class','form-control');

  e.preventDefault();
  pasosLista.appendChild(newInputText);
  adjuntosLista.appendChild(newInputFile);
}

btnQuitar.onclick = function(e){
  e.preventDefault();
  console.log("Erase Me");
  var lastPaso = pasosLista.lastElementChild;
  var lastAdjunto = adjuntosLista.lastElementChild;
  if (pasosLista.childElementCount > 1) {
    pasosLista.removeChild(lastPaso);
    adjuntosLista.removeChild(lastAdjunto);
  }
}
