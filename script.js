// MEMBUAT 100 NILAI RANDOM(1-50) PADA 1 ARRAY

let array = [];

for (let i = 0; i < 100; i++) {
  array.push(Math.floor(Math.random() * 50) + 1);
}

// Mmebuat array menjadi 2 berdasarkan index nya
let genap = [];
let ganjil = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    genap.push(array[i]);
  } else {
    ganjil.push(array[i]);
  }
}

// Membuat fungsi untuk menghitung max, min, total, dan rata rata

function hitungArray(array) {
  let min = array[0];
  let max = array[0];
  let total = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    total += array[i];
  }
  let rataRata = total / array.length;
  return { min, max, total, rataRata };
}

// Menghitung nilai min, max, total , dan rata rata pada setiap array

let hasilGenap = hitungArray(genap);
let hasilGanjil = hitungArray(ganjil);

// Menampilkan hasil
console.log("Array dengan jumlah index 100:", array);
console.log("Araay genap dengan jumlah index 50:", genap);
console.log("Array ganjil dengan jumlah index 50:", ganjil);
console.log("Min, Max, Total, rata-rata pada array genap:", hasilGenap);
console.log("Min, Max, Total, rata-rata pada array ganjil:", hasilGanjil);

// Membandingkan nilai min, max, total dan rata rata

if (hasilGenap.min < hasilGanjil.min) {
  console.log("Min lebih besar pada array genap");
} else if (hasilGenap.min > hasilGanjil.min) {
  console.log("Min lebih besar pada array ganjil");
} else {
  console.log("Min memiliki nilai sama antara array genap dan ganjil");
}

if (hasilGenap.max > hasilGanjil.max) {
  console.log("Max lebih besar pada array genap");
} else if (hasilGenap.max < hasilGanjil.max) {
  console.log("Max lebih besar pada array ganjil");
} else {
  console.log("Max memiliki nilai sama antara array genap dan ganjil");
}

if (hasilGenap.total < hasilGanjil.total) {
  console.log("Total lebih besar pada array genap");
} else if (hasilGenap.total > hasilGanjil.total) {
  console.log("Total lebih besar pada array ganjil");
} else {
  console.log("Total memiliki nilai sama antara array genap dan ganjil");
}

if (hasilGenap.rataRata < hasilGanjil.rataRata) {
  console.log("Rata-rata lebih besar pada array genap");
} else if (hasilGenap.rataRata > hasilGanjil.rataRata) {
  console.log("Rata-rata lebih besar pada array ganjil");
} else {
  console.log("Rata-rata memiliki nilai sama antara array genap dan ganjil");
}
