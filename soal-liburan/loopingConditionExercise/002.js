/*
    ===========
    Bar X dan O
    ===========
    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X
    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar
    - p => panjang
    - t => tinggi
    character yang pertama kali di cetak adalah x ,
    lalu o dan setelah itu o kemudian kembali lagi ke x
    [EXAMPLE]
    generateBarXO(4,3)
    output:
    xoox
    ooxo
    oxoo
    xoox
    generateBarXO(6,4)
    output:
    xooxoo
    xooxoo
    xooxoo
    xooxoo
*/

function generateBarXO(p,t) {
  var stringXandO = 'xoo';
  var counter = 0;
  for (var i = 0; i < t; i++) {
    var str = '';
    for (var j = 0; j < p; j++) {
      str += stringXandO[counter]
      counter++
      if (counter === stringXandO.length) {
        counter = 0
      }
    }
    console.log(str);
  }
}

generateBarXO(4,3)
/*
xoox
ooxo
oxoo
xoox
*/

generateBarXO(6,4)
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/
