//---------------------------------------
//1. Melakukan Looping Menggunakan While|
//---------------------------------------

//LOOPING PERTAMA
console.log('LOOPING PERTAMA');
var i = 2;
while (i < 21){
  console.log(i + ' - '+'I love coding');
  i+= 2;
}

//LOOPING KEDUA
console.log('LOOPING KEDUA');
var i = 20;
while(i > 0){
  console.log(i + ' - ' + 'I will become fullstack developer');
  i-= 2;
}

//-------------------------------------
//2. Melakukan Looping Menggunakan For|
//-------------------------------------

//LOOPING PERTAMA
console.log('LOOPING PERTAMA');
for (var i = 1; i < 21; i++){
  console.log(i + ' - ' + 'I love coding');
}
//LOOPING KEDUA
console.log('LOOPING KEDUA');
for (var i = 20;i > 0;i--){
  console.log(i + ' - ' + 'I will become fullstack developer');
}

//--------------------------
//3. Angka Ganjil dan Genap|
//--------------------------

//LOOPING GANJIL-GENAP
for (var i= 1;i <= 100;i++){
  if (i % 2 == 0){
    console.log('Counter sekarang:',i);
    console.log('Genap');
  }
  else if (i % 2 == 1){
    console.log('Counter sekarang:',i);
    console.log('Ganjil');
  }
}
console.log('\n\n\n\n')

//LOOPING KELIPATAN 3
for (var j= 1;j <= 100;j += 2){
  console.log('Counter sekarang:',j);
  if (j % 3 == 0){
    console.log(j,'kelipatan 3.');
  }
  else {
    console.log("''")
  }
   console.log('\n')
}
console.log('\n\n\n\n')

//LOOPING KELIPATAN 6
for (var k= 1;k <= 100;k += 5){
  console.log('Counter sekarang:',k);
  if (k % 6 == 0){
    console.log(k,'kelipatan 6.');
  }
  else {
    console.log("''")
  }
   console.log('\n')
}
console.log('\n\n\n\n')

//LOOPING KELIPATAN 10
for (var j= 1;j <= 100;j += 9){
  console.log('Counter sekarang:',j);
  
  if (j % 10 == 0){
    console.log(j,'kelipatan 10.');
  }
  else {
    console.log("' '");
  }
   console.log('\n')
}

