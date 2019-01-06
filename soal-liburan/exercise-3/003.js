function soal3(param)
{
  var obj = {under20:'', over20:''};
  var tempArrUnder20 = [];
  var tempArrOver20 = [];
  for (var i = 0; i < param.length; i++) {
    if (param[i][1] < 20) {
      tempArrUnder20.push(param[i][0])
      obj.under20 = tempArrUnder20
    }
    else {
      tempArrOver20.push(param[i][0])
      obj.over20 = tempArrOver20
    }
  }
  return obj
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/
