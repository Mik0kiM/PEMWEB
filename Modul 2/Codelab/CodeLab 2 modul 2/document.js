document
  .getElementById("daftarButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
      alert("Semua data harus diisi.");
    } else {
      // Lakukan tindakan selanjutnya, misalnya, mengirimkan data ke server.
      alert("Data berhasil disubmit.");
      // Clear form jika diperlukan:
      // document.getElementById("registrationForm").reset();
    }
  });