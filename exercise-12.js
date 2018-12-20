//---------------------------------
//Logic Challenge - Konversi Menit|
//---------------------------------

function konversiMenit(menit) {
  
  var minute =  menit % 60
  var hour = (menit - minute) / 60
  strMinute = '' + minute
  if (strMinute.length === 1){
    return hour+':0'+minute
  }
  else {
    return hour+':'+minute
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00``
