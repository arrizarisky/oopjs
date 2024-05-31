// // Object lateral
// //probelm: ribet buat object yang banyak
// let cewe = {
//     nama: "Tarisyah",
//     energy: 10,
//     cinta: function (love) {
//         this.energy += love
//         console.log(`Halo ${this.nama}, AYlovyu`)  
//     }
// }

// //function declaration
// //Update => pembuatan object.create() dalam function declaration untuk menyederhanakan kode
// const methodPria = {
//     cinta: function (love) {
//         this.energy += love
//         console.log(`Halo ${this.nama}, AYlovyu`)  
//     },
//     main: function (main) {
//         this.energy -= main
//         console.log(`Halo ${this.nama}, main`)
//     }
// }
// function pria (nama, energy) {
//     let pria = Object.create(methodPria) //mengambil data dari object parent yang bernama methodPria, untuk menghubungkan object dalam fungsi ini dengan object methodPria atau object yang lain
//     pria.nama = nama
//     pria.energy = energy
//     return pria
// }

// let arriza = pria("Arreza", 10)
// let risky = pria("Risky", 10) 

//Constructor function
function pria2 (nama, energy) {
    this.nama = nama
    this.energy = energy
}

pria2.prototype.love = function (love) {
    this.energy += love
    alert(`Halo ${this.nama}, AYlovyu`)  
}
let arriza2 = new pria2("arriza", 10)

//versi class

class pria {
    constructor(nama, energy) {
        this.nama = nama
        this.energy = energy
    }
    love(love) {
        this.energy += love
        alert(`Halo ${this.nama}, AYlovyu`)  
    }
}
let arrizarisky = new pria("Arreza", 10)

let angka = [1, 2, 3, 4, 5]
alert(angka.splice(2, 1))
