function soal2(param)
{
  if (param % 2 === 0) {
    return 'invalid input'
  }
  else {
    var arr = [];
    for (var i = 0; i < (param + 1) / 2; i++) {
      var tempArr = [];
      for (var j = 0; j < param; j++) {
        
      }
      arr.push(tempArr)
    }
    return arr
  }
}

console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

// console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

// console.log(soal2(4)) // invalid input
// console.log(soal2(2)) // invalid input
// console.log(soal2(6)) // invalid input
