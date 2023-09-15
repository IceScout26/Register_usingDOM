const registerData = []; // Array untuk menyimpan data register

// Fungsi untuk menghitung rata-rata umur dan uang sangu
function average() {
    let totalAge = 0;
    let totalMoney = 0;

    for (const register of registerData) {
        totalAge += register.age;
        totalMoney += register.money;
    }

    const averageAge = totalAge / registerData.length;
    const averageMoney = totalMoney / registerData.length;

    return {
        averageAge,
        averageMoney
    };
}

// Fungsi untuk menampilkan data register dan resume
function tampilkanData() {
    const resume = document.getElementById("resume");
    const registerTable = document.getElementById("list-data_register");
    const {
        averageAge,
        averageMoney
    } = average();

    // Tampilkan resume
    resume.innerHTML = `Rata-rata register memiliki uang sangu sebesar ${averageMoney.toFixed(2)} dengan rata-rata umur ${averageAge.toFixed(2)}`;

    // Tampilkan data register
    registerTable.innerHTML = "";
    for (const register of registerData) {
        const row = `
            <tr>
                <th>${register.name}</th>
                <th>${register.age}</th>
                <th>${register.money}</th>
            </tr>
        `;
        registerTable.innerHTML += row;
    }
}

// Event listener for form submission
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const money = parseFloat(document.getElementById("money").value);

    // Validasi input
    if (name.length < 10 || age < 25 || money < 100000 || money > 1000000) {
        alert("Data tidak valid. Pastikan Nama minimal 10 karakter, Umur minimal 25 tahun, dan Uang Sangu antara 100 ribu hingga 1 juta.");
        return;
    }

    // add data register to array
    registerData.push({
        name,
        age,
        money
    });

    // clear input
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    tampilkanData();
});