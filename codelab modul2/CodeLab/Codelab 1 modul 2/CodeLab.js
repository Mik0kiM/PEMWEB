function tambah() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 + angka2;

    alert("Hasil Penjumlahan = " + hasil);
}

function ngulang() {
    document.getElementById("myForm").reset();
}
