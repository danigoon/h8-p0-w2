/*
    wajib pseudocode.
    Jawaban pseudocode disini

*/

function soal2(param)
{
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var arr = [];
  var counter = 0;
  if (param === 0) {
    return 'invalid input'
  }
  else {
    for (var i = 0; i < param; i++) {
      var tempArr = [];
      for (var j = 0; j < param; j++) {
        if (counter === alfabet.length) {
          counter = 0;
          tempArr.push(alfabet[counter])
          counter++
        }
        else {
          tempArr.push(alfabet[counter]);
          counter++
        }
      }
      arr.push(tempArr)
    }
  }

  return arr
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

// console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

// console.log(soal2(0)) // invalid input
