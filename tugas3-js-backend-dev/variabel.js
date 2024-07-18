// Program penghitung diskon

const diskon = 0.4; //Mendeklarasi diskon sebesar 40%
let harga = 50000;
var potonganDiskon;

console.log(`Harga barang anda: ${harga}`);

potonganDiskon = harga * diskon;
console.log(`Anda mendapatkan potongan diskon sebesar: ${potonganDiskon}`);

harga -= potonganDiskon;
console.log(`Harga barang anda saat ini menjadi: ${harga}`);

console.log(`Harga barang anda memiliki harga yang lebih tinggi dibandingkan diskon: ${harga >= potonganDiskon}`);
