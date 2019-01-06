function soal1(param)
{
  var str = ''
  if (param === 0) {
    return 'invalid parameter'
  }
  else if (param === 1) {
    return '[\'*\']'
  }
  else {
    for (var i = 1; i <= param; i++) {
      if (param % 2 === 1) {
        if (i === ((param -1) / 2) + 1) {
          str += "'*',"
        }
        else if (i === param) {
          str += "''"
        }
        else {
          str += "'',"
        }
      }
      else if (param % 2 === 0) {
        if (i === param / 2 || i === param / 2 + 1) {
          str += "'*',"
        }
        else if (i === param) {
          str += "''"
        }
        else {
          str += "'',"
        }
      }
    }
  }
  return '['+str+']'
}
console.log( soal1(4))
