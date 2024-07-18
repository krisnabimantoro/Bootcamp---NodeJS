function luasLinkaran(r) {
  return 3.14 * r * r;
}

const r = 2;

console.log(`Luas lingkaran dari jari-jari ${r} = ${luasLinkaran(r)}`);

function kuadrat(...angkaKuadrat) {
  return angkaKuadrat.map(number => number * number);
}

const listAngka = [1,2,3,4]
const listAngkaKuadrat = kuadrat(...listAngka)

console.log(`\nList Ankga ${listAngka}`)
console.log(`List Ankga setelah dikuadratkan ${listAngkaKuadrat}`)