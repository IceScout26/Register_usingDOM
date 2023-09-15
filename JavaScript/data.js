const pendaftarList = []; // Array untuk menyimpan data pendaftar

// Fungsi untuk menghitung rata-rata umur dan uang sangu
function hitungRataRata() {
    let totalUmur = 0;
    let totalUangSangu = 0;

    for (const pendaftar of pendaftarList) {
        totalUmur += pendaftar.umur;
        totalUangSangu += pendaftar.uangSangu;
    }

    const rataRataUmur = totalUmur / pendaftarList.length;
    const rataRataUangSangu = totalUangSangu / pendaftarList.length;

    return {
        rataRataUmur,
        rataRataUangSangu
    };
}

// Fungsi untuk menampilkan data pendaftar dan resume
function tampilkanData() {
    const averageAge = document.getElementById("average-age");
    const averageMoney = document.getElementById("average-money");
    const pendaftarTable = document.getElementById("pendaftar-list");
    const {
        rataRataUmur,
        rataRataUangSangu
    } = hitungRataRata();

    // Tampilkan resume
    resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu.toFixed(0)} dengan rata-rata umur ${rataRataUmur.toFixed(0)}`;

    // Tampilkan data pendaftar
    pendaftarTable.innerHTML = "";
    for (const pendaftar of pendaftarList) {
        const row = `
            <tr>
                <td>${pendaftar.nama}</td>
                <td>${pendaftar.umur}</td>
                <td>${pendaftar.uangSangu}</td>
            </tr>
        `;
        pendaftarTable.innerHTML += row;
    }
}

// Event listener untuk form submission
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("name").value;
    const umur = parseInt(document.getElementById("age").value);
    const uangSangu = parseFloat(document.getElementById("money").value);

    // Validasi input
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Data tidak valid. Pastikan Nama minimal 10 karakter, Umur minimal 25 tahun, dan Uang Sangu antara 100 ribu hingga 1 juta.");
        return;
    }

    // Tambahkan data pendaftar ke array
    pendaftarList.push({
        nama,
        umur,
        uangSangu
    });

    // Kosongkan input
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    // Tampilkan data terbaru
    tampilkanData();
});