const registerData = []; // Array for storing register data

// function for counting average age and money
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

// function for displaying data
function showData() {
    const showAgeAverage = document.getElementById("average-age");
    const showMoneyAverage = document.getElementById("average-money");
    const showRegisterData = document.getElementById("register-list");
    const {
        ageAverage,
        moneyAverage
    } = countAverage();

    // show register data
    registerTable.innerHTML = "";
    for (const register of registerData) {
        const row = `
            <tr>
                <td>${register.name}</td>
                <td>${register.age}</td>
                <td>${register.money}</td>
            </tr>
        `;
        showRegisterData.innerHTML += row;
    }
    showAgeAverage.innerHTML = `Rata-rata umur pendaftar ${ageAverage.toFixed(0)}`
    showMoneyAverage.innerHTML = `Rata-rata uang sangu pendaftar Rp ${moneyAverage.toFixed(2)},-`
}

// function for tab register
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const money = parseFloat(document.getElementById("money").value);

    // Validation input
    if (name.length < 10) {
        alert("nama terlalu pendek. Pastikan nama minimal 10 karakter.");
    } else if (age < 25) {
        alert("Maaf umur anda belum cukup untuk mendaftar. Minimal umur 25 tahun.");
    } else if (money < 100000 || money > 1000000) {
        alert("Uang Sangu tidak valid. Uang Sangu harus antara 100 ribu hingga 1 juta.");
    }else{
    // add data to array
    registerData.push({
        name,
        age,
        money
    });
    alert("Data Telah Diinput");

    // clear input
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    // show data for tab list register
    showData();
    }
});