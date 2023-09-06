const fruits = ["Mangga", "Pisang", "Jeruk", "Durian"];

for (key in fruits) {
    console.log("For In "+key);
    console.log("For In "+fruits[key]);
}

console.log("==========================================");


for (val of fruits) {
    console.log("For Of " + val);
}

// Array Object : Hanya bisa menggunakan For In / Tidak dapat menggunakan For of.
const person = {name : "Maulana", age:22, sex:"Man"}

for (key in person) {
    console.log("For In " + key);
    console.log("For In " + person[key]);
}


// Studi case game menggunakan nilai acak.
console.log(Math.random());
for (let angka = 1; angka < 5; angka++) {
    if(angka === 4) {
        break;
    }
    console.log(angka);
}

