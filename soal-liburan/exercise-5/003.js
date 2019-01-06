function soal3(param)
{
  var arr = [];
  var number = 1;
  for (var i = 0; i < param; i++) {
    var tempArr = [];
    for (var j = 0; j < param; j++) {
      if (i % 2 === 0) {
        tempArr.push(number)
        number++
      }
      else {
        tempArr.unshift(number)
        number++
      }
    }
    arr.push(tempArr)
  }
  return arr
}

console.log(soal3(5))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

// console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]
*/

// console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]
*/
