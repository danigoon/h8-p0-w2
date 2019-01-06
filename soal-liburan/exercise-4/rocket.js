function rocket(param)
{
  var arr = [];
  if (param % 2 === 1) {
    for (var i = 0; i < param; i++) {
      var tempArr = [];
      for (var j = 0; j < param; j++) {
        if (i === (param -1) / 2 && j === (param -1) / 2) {
          tempArr.push('*')
        }
        else {
          tempArr.push('')
        }
      }
      arr.push (tempArr)
    }
    return arr
  }
  else {
    for (var i = 0; i < param; i++) {
      var tempArr = [];
      for (var j = 0; j < param; j++) {
        if (i === param / 2 || i === param / 2 -1) {
          if (j === param / 2 || j === param / 2 - 1) {
            tempArr.push('*')
          }
          else {
            tempArr.push('')
          }
        }
        else {
          tempArr.push('')
        }
      }
      arr.push (tempArr)
    }
    return arr
  }

}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],

    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],

    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/
