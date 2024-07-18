const readline = require("readline");

const dayNumber = 2;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input angka: ", (angka) => {
  if (angka % 2 === 0) {
    console.log("ankga anda adalah genap");
  } else {
    console.log("ankga anda adalah ganjil");
  }

  switch (dayNumber) {
    case 1:
      console.log("Hari ini adalah hari Senin");
      break;
    case 2:
      console.log("Hari ini adalah hari Selasa");
      break;
    case 3:
      console.log("Hari ini adalah hari Rabu");
      break;
    case 4:
      console.log("Hari ini adalah hari Kamis");
      break;
    case 5:
      console.log("Hari ini adalah hari Jum'at");
      break;
    case 6:
      console.log("Hari ini adalah hari Sabtu");
      break;
    case 7:
      console.log("Hari ini adalah hari Minggu");
      break;
    default:
      console.log("Input salah");
  }

  rl.close();
});
