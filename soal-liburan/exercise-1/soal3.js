function soal3(param)
{
  var arr = []
  var newArr = [];
  for (var i = 1; i <= param * param; i++) {
    arr.push(i)
    if (arr.length === param) {
      newArr.push(arr)
      arr = []
    }
  }
  return newArr
}

console.log(soal3(6))
