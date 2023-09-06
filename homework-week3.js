// Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku, berikut rentangnya : 
//     - Beku suhu minus - 100 sampai 0
//     - Cair suhu 1 sampai 100
//     - Uap suhu 101 sampai 500
//     - Suhu selain rentang tersebut tidak terdefinisi

let prompt = require("prompt-sync")();

let waterCondition = prompt("Input suhu air : ");

// Mengubah tipe data dari string menjadi integer / angka.
waterCondition = +waterCondition;

if (waterCondition >= -100 && waterCondition <= 0) {
    console.log("Kondisi air : Beku");
} else if (waterCondition >= 1 && waterCondition <= 100) {
    console.log("Kondisi air : Cair");
} else if (waterCondition >= 101 && waterCondition <= 500) {
    console.log("Kondisi air : Uap");
} else {
    console.log("Suhu air tidak terdefenisi");
}
