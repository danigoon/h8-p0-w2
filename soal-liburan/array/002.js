/*
    ======================
    String to Multidimensi
    ======================
    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... )
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col
    [EXAMPLE]
    stringToMultidimensi("0120194124213712")
    jumlah char : 16
    row dan col = akat 16
    row dan col = 4
    output:
    [
         1 2 3 4
        [0,1,2,0], 1
        [1,9,4,1], 2
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]
 */

 function stringToMultidimensi(str) {
   var checkInt = Number.isInteger(Math.sqrt(str.length));
   var stringLength = Math.sqrt(str.length);
   var arr = [];

   if (checkInt === false) {
     console.log('char count invalid');
   }
   else {
     var counter = 0
     for (var i = 0; i < stringLength; i++) {
       var tempArr = [];
       for (var j = 0; j < stringLength; j++) {
         tempArr.push(str[counter])
         counter++
       }
       arr.push(tempArr)
     }
   }
   console.log(arr);
 }

 stringToMultidimensi("0120194124213712")
 /*
    [
        [0,1,2,0],
        [1,9,4,1],
        [2,4,2,1],
        [3,7,1,2]
    ]
 */

stringToMultidimensi("01201941242137127")
 /*
    // char count invalid
 */
