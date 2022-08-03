'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let bin = String(num).split('').reverse();
let dec = 0;
for (let i = 0; i<bin.length;i++){
  dec += Number(bin[i])*2**i;
}
 return dec;
}

function DecimalABinario(num) {
  // tu codigo aca
let result = "";
while(num > 0){
  result = (num%2) + result;
  num = Math.floor(num/2);
 }
return result;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}