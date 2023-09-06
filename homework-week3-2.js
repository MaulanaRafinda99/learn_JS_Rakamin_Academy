// Menggunakan Ternary Operator
// - Diketahui SPBU memiliki logika sebagai berikut
//     - Jika plat kuning atau motor maka BBM subsidi
//     - Jika mobil CC kurang dari 1500 maka PERTAMAX
//     - Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo
let prompt = require("prompt-sync")();

let transportationType = prompt ("Input Jenis Kendaraaan atau jenis CC Mobil : ");

let fuelResult = (transportationType === "Plat Warna Kuning") ? "BBM Subsidi" : 
(transportationType === "Motor") ? "BBM Subsidi" :(transportationType < 1500) ? "BBM Pertamax" :
(transportationType >= 1500) ? "BBM Pertamax Turbo" : 'Invalid Input';

console.log(fuelResult);

