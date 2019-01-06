//--------------------------
//Logic Challenge - X dan O|
//--------------------------

function xo(str) {
  // you can only write your code here!
  var counterX = 0;
  var counterO = 0;
 for (i= 0;i < str.length;i++){
   if (str[i] === 'x'){
     counterX += 1;
   }
   else {
     counterO += 1;
   }
 }
 console.log('x',counterX, 'o',counterO)
 if (counterX === counterO){
   return true
 }
 else {
   return false
 }
}

// TEST CASES

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

