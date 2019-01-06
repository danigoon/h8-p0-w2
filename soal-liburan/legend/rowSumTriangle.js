/*
    ================
    Row Sum Triangle
    ================
    [INSTRUCTION]
    diberikan sebuah segitiga yang berisi angka - angka ganjil
    1
    3 5
    7 9 11
    13 15 17 19
    21 23 25 27 29
    31 33 35 37 39 41
    ...
    tugas kalian adalah dapat mengetahui jumlah angka per baris bila
    baris nya disebutkan.
    [EXAMPLE]
    rowSumTriangle(4)
    dibaris 4 terdapat angka :
    13 + 15 + 17 + 19 = 64
    output: 64
    rowSumTriangle(27)
    output : 19683
*/

function rowSumTriangle(row) {
  var number = 1;
  var arr = [];
  for (var i = 0; i < row; i++) {
    var tempArr = [];
    for (var j = 0; j <= i; j++) {
      if (number % 2 === 1) {
        tempArr.push(number)
        number += 2
      }
    }
    arr.push(tempArr)
    if (arr.length === row) {
      var sumRow = 0;
      for (var k = 0; k < arr[arr.length - 1].length; k++) {
        sumRow += arr[arr.length - 1][k]
      }
    }
  }
  return sumRow
}

console.log(rowSumTriangle(4));// 64

console.log(rowSumTriangle(27)); // 19683
