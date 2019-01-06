function benderaInggris(param)
{
  for (var i = 1; i <= param; i++) {
    var petik = '\''
    for (var j = 1; j <= param + 1; j++) {
      if (j === ((param - 1) / 2) + 1) {
        petik += '*'
      }
      else if (j === param + 1) {
        petik += '\''
      }
      else if (i === ((param - 1) / 2) + 1 ) {
        petik += '*'
      }
      else {
        petik += ' '
      }
    }
    console.log(petik);
  }

}
console.log(benderaInggris(11))
