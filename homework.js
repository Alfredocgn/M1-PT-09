'use strict'

const parseLinkTitle = require("markdown-it/lib/helpers/parse_link_title");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivote = array[Math.floor(Math.random()*array.length)];
  let arrayLeft = [];
  let arrayRight = [];
  let arrayPivote = [];
  for (let i = 0; i<array.length;i++){

    if(array[i] === pivote){
      arrayPivote.push(array[i]);
    }


    if(array[i]>pivote){
      arrayRight.push(array[i]);
    
    }

    if (array[i]<pivote){
      arrayLeft.push(array[i]);
    }

  } return quickSort(arrayLeft).concat(arrayPivote,quickSort(arrayRight));



}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(arraylength === 1) return array;
  let division = split(array);
  let left = division [0];
  let right = division [1];
  return paste(mergeSort(left),mergeSort(right))
}

function split(array){
  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle,);
  return [left,right];
}

function paste(left,right){
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else {
      array.push(right[rightIndex]);
      rightIndex++
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
