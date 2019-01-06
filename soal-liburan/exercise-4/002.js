function soal2(param)
{
  if (param.length < 3) {
    return 'invalid input'
  }
  else {
    var hasilKali = param[0] * param[param.length -1];
    if (param.length % 2 === 1) {
      if (param[(param.length - 1) / 2] === '') {
        param[(param.length - 1) / 2] = hasilKali
      }
      else {
        param[(param.length - 1) / 2] = param[param.length - 1]
      }
    }
    else {
      param[param.length / 2 -1] = hasilKali
      param[param.length / 2] = hasilKali
    }
  }
  return param
}

// console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

// console.log(soal2([20,'','','','','','',30]))
// // [20,'','',600,600,'','',30])
//
// console.log(soal2([6,'','','','','',9]))
// // [6,'','',54,'','',9]
//
// console.log(soal2([1,2])) // invalid input
// console.log(soal2([1])) // invalid input
// console.log(soal2([])) // invalid input
