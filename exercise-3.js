var nama = 'Dontu';
var peran = 'd';

if (nama ===''){
  console.log('Nama harus diisi!');
}
else if (peran === ''){
  console.log('Halo',nama,'Pilih peranmu untuk memulai game!');
}
else if (peran === 'kesatria'){
  console.log('Selamat datang di Dunia Proxytia,',nama);
  console.log('Halo Kesatria',nama,', kamu dapat menyerang dengan senjatamu!');
}
else if (peran === 'tabib'){
  console.log('Selamat datang di Dunia Proxytia,', nama);
  console.log('Halo Tabib',nama,', kamu akan membantu temanmu yang terluka.');
}
else if (peran === 'penyihir'){
  console.log('Selamat datang di Dunia Proxytia,',nama);
  console.log('Halo Penyihir',nama,', ciptakan keajaiban yang membantu kemenanganmu!');
}
else if (nama !==''){
  console.log('Kamu harus memilih salah satu (kesatria,tabib,penyihir)..');
}
