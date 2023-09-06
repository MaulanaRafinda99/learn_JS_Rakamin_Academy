// Potongan kode yang dapat digunakan kembali (reusable).

// Function yang tanpa mengembalikan nilai sama sekali.
function  person(name) {
    console.log("Halo, nama saya adalah "+name);
}
person("Maulana Rafinda")

// Function yang memiliki return atau yang memiliki nilai balik.
function perkalian(nilai1,nilai2) {
    return nilai1 * nilai2;
}

let hasil = perkalian(4,7);
console.log("Hasil perkalian : "+hasil);

// Function yang memiliki nilai default
function pengurangan(nilai1, nilai2 = 10) {
    return nilai1 - nilai2;
}
let hasil_default = pengurangan(20);
console.log("Hasil Pengurangan : "+hasil_default);


// Arrow function
let hasil_arrow = (nilai1, nilai2) => nilai1 * nilai2;
console.log(hasil_arrow(3,7));
