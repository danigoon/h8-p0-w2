
function persegi(param1,param2)
{
    if (param1 === 0 || param2 === 0) {
      return 'invalid input'
    }
    else {

      for (var i = 0; i < param2; i++) {
        var string = '';
        for (var j = 0; j < param1; j++) {
          if (i === 0 || i === param2 - 1) {
            string += '#'
          }
          else {
            if (j === 0) {
              string += '#'
            }
            else if (j === param1 - 1) {
              string += '#'
            }
            else {
              string += ' '
            }
          }
        }
        console.log(string);
      }
    }
}

console.log(persegi(5,7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value
console.log(persegi(4,0)) // invalid value
