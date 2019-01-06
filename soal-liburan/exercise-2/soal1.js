/*
    analisa sendiri dengan apa yang diminta soal melalui test case.
    wajib menggunakan pseudocode
    PSEUDOCODE HERE :

*/
function soal1(param)
{
  var arr = []
  if ( param === 0) {
    return 'invalid input'
  }
  else {
    counter = 0
    for (var i = 1; i <= param + 1; i++) {
      counter += 1
      if (counter === 1) {
        arr.push('!')
        //console.log(arr);
        //console.log(counter);
      }
      else if (counter === 2) {
        arr.push('@')
        //console.log(arr);
        //console.log(counter);
      }else if (counter === 3) {
        arr.push('#')
        //console.log(arr);
        //console.log(counter);
      }
      else {
        counter = 0
        //console.log(arr);
        //console.log(counter);
      }
    }
  }
  return arr
}

console.log(soal1(3))
 //output : ['!','@','#']

console.log(soal1(6));
 //output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input
