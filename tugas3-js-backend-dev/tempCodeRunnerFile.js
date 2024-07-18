const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input angka: ", (angka) => {
  if (angka % 1) {
    console.log("ankga anda adalah genap");
  } else {
    console.log("ankga anda adalah ganjil");
  }

  rl.close();
});
