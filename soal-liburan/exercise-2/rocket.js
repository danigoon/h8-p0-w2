/*
    membuat bendera scotlandia
    output hanya menggunakan console.log string yang isinya
    hanya berupa spasi kosong dan char *
     petunjuk :
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
  if (param < 3 || param % 2 === 0) {
    return 'invalid input'
  }
  else {
    for (var i = 1; i <= param; i++) {
      var str = '\''
      for (var j = 0; j < param + 1; j++) {
        if (j === param) {
          str += '\''
        }
        else if (j === param -i) {
          str += '*'
        }
        else if (j === i - 1) {
          str += '*'
        }
        else {
          str += ' '
        }
      }
      console.log(str);
    }
  }
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

// console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/
