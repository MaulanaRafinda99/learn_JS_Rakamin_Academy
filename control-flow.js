// Percabangan pada JS ada 2 :
// 1. If Else
// 2. Switch Case

// Percabangan If
// Inisialisasi Variabel :

let ipk = 4;

if (ipk >= 3.5 && ipk <= 4) {
    // Perulangan dalam perulangan : Nested If
    if(ipk > 3.9) {
        console.log("Pin Emas");
    }
    console.log("Cumlaude");
} else if (ipk >= 3 && ipk < 3.5) {
    console.log("Baik");
} else if (ipk >= 2.5 && ipk < 3) {
    console.log("Baik");
} else {
    console.log("Wajib perbaikan nilai mata kuliah");
}

// Percabangan Switch Case
let terjemah = 9;

switch (terjemah) {
    case 1:
        console.log("Satu");
        break;

    case 2:
        console.log("Dua");
        break;
    
    case 3:
        console.log("Tiga");
        break;

    default:
        console.log("Tidak ada pada pilihan");
        break;
}