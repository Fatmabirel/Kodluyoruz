let number = 5;

if (number > 0) {
  console.log("Pozitif bir sayı girdiniz.");
} else if (number < 0) {
  console.log("Negatif bir sayı girdiniz.");
} else {
  console.log("Sıfır girdiniz.");
}

const sayi1 = 8;
const sayi2 = 3;

const toplam = sayi1 + sayi2;
const fark = sayi1 - sayi2;
const carpim = sayi1 * sayi2;
const bolum = sayi1 / sayi2;
const mod = sayi1 % sayi2;

console.log(`Toplam: ${sayi1} + ${sayi2} = ${toplam}`);
console.log(`Fark: ${sayi1} - ${sayi2} = ${fark}`);
console.log(`Çarpım: ${sayi1} * ${sayi2} = ${carpim}`);
console.log(`Bölüm: ${sayi1} / ${sayi2} = ${bolum}`);
console.log(`Mod: ${sayi1} % ${sayi2} = ${mod}`);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
