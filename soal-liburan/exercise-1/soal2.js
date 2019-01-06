function soal2(param)
{
  for (var i = 0; i < param.length; i++) {
    var objArr = [{firsname:param[i][0], lastname:param[i][1], hobbies:param[i][2], profession:param[i][3]}];
    //console.log(param[i][j])

    console.log(objArr)
  }
}

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] ,
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

//console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] ,
// ['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));
