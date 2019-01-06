function soal3(param)
{
  var arrObject = {};
  for (var i = 0; i < param.length; i++) {
    param.sort()
    arrObject[param[i][0]] = '';
    var keys = Object.keys(arrObject)
    for (var j = 0; j <= keys.length - 1; j++) {
      arrObject[param[i][0]] = param.filter(hewan => hewan[0] === keys[j])
    }
  }
  return arrObject;
}

// console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
