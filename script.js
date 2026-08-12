// ======================================
// PRAKTIK JAVASCRIPT DASAR
// ======================================

// 1. VARIABEL
const nama = "Fino";
let umur = 16;
const kelas = "10";
const nilai1 = 85;
const nilai2 = 90;
const nilai3 = 88;

// 2. STRING
const namaLengkap = nama.toUpperCase();

console.log("===== DATA SISWA =====");
console.log("Nama:", nama);
console.log("Nama huruf besar:", namaLengkap);
console.log("Umur:", umur);
console.log("Kelas:", kelas);

// 3. OPERATOR ARITMATIKA
const totalNilai = nilai1 + nilai2 + nilai3;
const rataRata = totalNilai / 3;

console.log("\n===== NILAI =====");
console.log("Nilai 1:", nilai1);
console.log("Nilai 2:", nilai2);
console.log("Nilai 3:", nilai3);
console.log("Total nilai:", totalNilai);
console.log("Rata-rata:", rataRata);

// 4. MATH
console.log("\n===== MATH =====");
console.log("Rata-rata dibulatkan:", Math.round(rataRata));
console.log("Nilai tertinggi:", Math.max(nilai1, nilai2, nilai3));
console.log("Nilai terendah:", Math.min(nilai1, nilai2, nilai3));

// 5. TEMPLATE LITERAL
const informasi = `
Nama siswa: ${nama}
Umur: ${umur} tahun
Kelas: ${kelas}
Rata-rata nilai: ${rataRata}
`;

console.log("\n===== INFORMASI =====");
console.log(informasi);

// 6. PERHITUNGAN TAMBAHAN
let poin = 100;

poin += 25;

console.log("Poin setelah ditambah:", poin);

// 7. TIPE DATA
console.log("\n===== TIPE DATA =====");
console.log("Tipe nama:", typeof nama);
console.log("Tipe umur:", typeof umur);
console.log("Tipe kelas:", typeof kelas);

// 8. CONTOH STRING LAIN
const kalimat = "Saya sedang belajar JavaScript";

console.log("\n===== STRING =====");
console.log("Kalimat:", kalimat);
console.log("Panjang kalimat:", kalimat.length);
console.log("Huruf besar:", kalimat.toUpperCase());
console.log("Huruf kecil:", kalimat.toLowerCase());
console.log("Potongan teks:", kalimat.slice(0, 10));