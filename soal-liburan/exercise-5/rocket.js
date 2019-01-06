function rocket(param)
{
  var arr = [];
  for (var i = 0; i < param; i++) {
    var tempArr = [];
    for (var j = 0; j < param; j++) {
      tempArr.push([i, j])
    }
    arr.push(tempArr)
  }
  return arr
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/
