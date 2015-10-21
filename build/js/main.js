//Main Js

// var init = function(){
//   console.log("ebifw");
// }
//
// module.exports = init();


// Llamar a los botones
var btnAgregar = document.getElementById("btn-agregar"),
    btnQuitar = document.getElementById("btn-quitar"),
    pasosLista = document.getElementById("lista-pasos");

console.log("A ver si es cierto");


btnAgregar.onclick = function(e){

  var newInput = document.createElement('input');
  newInput.setAttribute('name','pasos');
  newInput.setAttribute('placeholder','Agregue el contenido del paso');
  newInput.setAttribute('class','form-control');

  e.preventDefault();
  pasosLista.appendChild(newInput);
}

btnQuitar.onclick = function(e){
  e.preventDefault();
  console.log("Erase Me");
  var lastPaso = pasosLista.lastElementChild;
  if (pasosLista.childElementCount > 1) {
    pasosLista.removeChild(lastPaso);
  }
}
