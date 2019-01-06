/*
    =========
    Triangel
    =========
    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid

    [EXAMPLE]
    triangel(5)
    output:
        *
       ***
      *****
     *******
    *********
    triangel(3)
    output:
        *
       ***
      *****
*/

function triangel(t) {
  if (t <= 1) {
    return 'invalid input'
  }
  else {
    var counter = 1;
    for (var i = 1; i <= t; i++) {
      var str = '';
      for (var j = 0; j < t + (t - 1); j++) {
        if (j === t - i) {
          str += '*'
        }
        else if (j > 0) {
          str += 'o'
        }
        else {
          str += ' '
        }
      }
      console.log(str);
    }
  }
}

triangel(3)
/*
      *
     ***
    *****
*/

// triangel(5)
/*
    *
   ***
  *****
 *******
*********
*/

triangel(1) // t is invalid
