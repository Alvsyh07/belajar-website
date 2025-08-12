const pesanHover = document.getElementById("pesan-hover");

pesanHover.addEventListener("mouseover", function() {
    pesanHover.style.backgroundColor = "lightgreen";
    pesanHover.style.color = "black";
    pesanHover.style.padding = "10px";
    pesanHover.style.borderRadius = "8px";
});

pesanHover.addEventListener("mouseout", function() {
    pesanHover.style.backgroundColor = "";
    pesanHover.style.color = "";
    pesanHover.style.padding = "";
    pesanHover.style.borderRadius = "";
});
// 1. GLOBAL - Date()
const waktuSekarang = document.getElementById("waktu-sekarang");
let sekarang = new Date();
waktuSekarang.textContent = "Waktu sekarang: " + sekarang.toLocaleString();

// 2. PROPERTY - .length
const inputKata = document.getElementById("input-kata");
const jumlahKarakter = document.getElementById("jumlah-karakter");

inputKata.addEventListener("input", function() {
  jumlahKarakter.textContent = "Jumlah karakter: " + inputKata.value.length;
});

// 3. METHOD - .toUpperCase()
const btnUppercase = document.getElementById("btn-uppercase");
const hasilUppercase = document.getElementById("hasil-uppercase");

btnUppercase.addEventListener("click", function() {
  hasilUppercase.textContent = inputKata.value.toUpperCase();
});

// FUNCTION DECLARATION
function sapa(nama) {
  return `Halo, ${nama}! Selamat datang di website pribadi Alvisyahputra.`;
}

// FUNCTION EXPRESSION
const hitungLuasPersegi = function(sisi) {
  return `Luas persegi dengan sisi ${sisi} adalah ${sisi * sisi} m².`;
};

// ARROW FUNCTION
const kaliDua = (angka) => `Hasil kali dua dari ${angka} adalah ${angka * 2}.`;

// Tampilkan hasil ke HTML
document.getElementById("output-fungsi").innerHTML = `
  ${sapa("Alvi")}<br>
  ${hitungLuasPersegi(4)}<br>
  ${kaliDua(7)}
`;
// GLOBAL VARIABLE
let pemilik = "Alvisyahputra";

function tampilkanPemilik() {
  // LOCAL VARIABLE
  let status = "Mahasiswa Santren Koding & Staff Ara Tour";
  return `${pemilik} - ${status}`;
}

// Tampilkan hasil ke HTML
document.getElementById("output-scope").textContent = tampilkanPemilik();
