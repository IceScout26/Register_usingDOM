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
    pendaftarList.push({ name, age, money });

    // clear input
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    tampilkanData();
});