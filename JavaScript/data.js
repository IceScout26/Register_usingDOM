const registerData = []; // Array untuk menyimpan data register

// Fungsi untuk menghitung rata-rata age dan uang sangu
function countAverage() {
    let totalAge = 0;
    let totalMoney = 0;

    for (const register of registerData) {
        totalAge += register.age;
        totalMoney += register.money;
    }

    const ageAverage = totalAge / registerData.length;
    const moneyAverage = totalMoney / registerData.length;

    return {
        ageAverage,
        moneyAverage
    };
}

// Fungsi untuk menampilkan data register dan resume
function tampilkanData() {
    const averageAge = document.getElementById("average-age");
    const averageMoney = document.getElementById("average-money");
    const registerTable = document.getElementById("register-list");
    const {
        ageAverage,
        moneyAverage
    } = countAverage();

    // Tampilkan data register
    registerTable.innerHTML = "";
    for (const register of registerData) {
        const row = `
            <tr>
                <td>${register.name}</td>
                <td>${register.age}</td>
                <td>${register.money}</td>
            </tr>
        `;
        registerTable.innerHTML += row;
    }
    averageAge.innerHTML = `Rata-rata umur pendaftar ${ageAverage.toFixed(0)}`
    averageMoney.innerHTML = `Rata-rata uang sangu pendaftar Rp ${moneyAverage.toFixed(2)},-`
}

// Event listener untuk form submission
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const money = parseFloat(document.getElementById("money").value);

    // Validasi input
    if (name.length < 10) {
        alert("nama terlalu pendek. Pastikan nama minimal 10 karakter.");
    } else if (age < 25) {
        alert("Maaf umur anda belum cukup untuk mendaftar. Minimal umur 25 tahun.");
    } else if (money < 100000 || money > 1000000) {
        alert("Uang Sangu tidak valid. Uang Sangu harus antara 100 ribu hingga 1 juta.");
    }else{
    // Tambahkan data register ke array
    registerData.push({
        name,
        age,
        money
    });
    alert("Data Telah Diinput");

    // Kosongkan input
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    // Tampilkan data terbaru
    tampilkanData();
    }
});