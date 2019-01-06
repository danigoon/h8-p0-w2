// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
  var arr = [];
  if (param.length % 2 === 1) {
    param.push('instruktur')
    for (var i = 1; i <= param.length - (param.length / 2); i++) {
      var newArr = [];
      if (i === param.length / 2) {
        newArr.push(param[i-1], param[param.length - 1])
      }else {
        newArr.push(param[i-1], param[param.length - (i+1)])
      }
      arr.push(newArr)
    }
  }
  else {
    for (var i = 1; i <= param.length - (param.length / 2); i++) {
      var newArr = [];
      newArr.push(param[i-1], param[param.length - i])
      arr.push(newArr)
    }
  }
  return arr;
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output:
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]
