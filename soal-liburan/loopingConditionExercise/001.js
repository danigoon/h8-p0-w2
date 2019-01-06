/*
    ============
    Generate Bar
    ============
    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan
    - p => panjang
    - t => tinggi
*/

function generateBar(p,t) {
  if (p < t) {
    return 'panjang harus lebih besar daripada tinggi'
  }
  else {
    for (var i = 0; i < t; i++) {
      var str = '';
      for (var j = 0; j < p; j++) {
        if (i === 0 || i === t - 1) {
          str += 'o'
        }
        else {
          if (j === 0 || j === p -1) {
            str += 'o'
          }
          else {
            str += ' '
          }
        }
      }
      console.log(str);
    }
  }
}

// console.log(generateBar(4,3));//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) //
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

console.log(generateBar(4,5)); // panjang harus lebih besar daripada tinggi
