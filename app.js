// // Deklarasi Variabel

// // Versi ES5 : Tahun 2015
// var nilaiPertama = 15;
// console.log(nilaiPertama);

// // Versi ES6 

// // Let & Const : Let nilai dari variabelnya dapat diubah sedangkan nilai dari Const tidak dapat diubah.
// // Contoh Let
// let nilai = 20;
// console.log(nilai);
// nilai = 50;
// console.log(nilai);

// // Contoh Const
// const nilai2 = 90;
// console.log(nilai2);
// // nilai2 = 100;
// // console.log(nilai2);

// // Tipe data string :
// let nama = "Maulana Rafinda";
// let email = 'maulanansn@gmail.com';
// console.log("Halo nama saya",nama, ". Email", email,".");
// // Menggunakan Template Literal
// console.log(`Halo nama saya ${nama}. Email: ${email}`);

// // Booelan
// let firstLogic = true;
// console.log(firstLogic);


// Ternary Operator :
// Boolean Expression. Kalau sebelah kiri untuk nilai Boolean True, sedangkan Yang sebelah paling kanan adalah False.
let color  = "green.";

let colorResult = (color === "red") ? "STOP" : (color === "yellow") ? "PREPARE" : (color === "green") ? "GO" : 'INVALID INPUT';

console.log(colorResult);


// Contoh kasus :
// “Mahasiswa yang lulus akan mendapatkan grade, IPK diatas 3.5 grade Cumlaude, IPK 3
// sampai 3.5 grade Baik, IPK dibawah 3 Cukup,”

let grade = 3;

if (grade > 3.5) {
    console.log("Cumlaude");
}
// 3 - 3.5
else if (grade >= 3 && grade <= 3.5) {
    console.log("Baik");
} else {
    console.log("Cukup");
}