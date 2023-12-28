const daftarBarang = {
    '001': { nama: 'Barang A', harga: 10000 },
    '002': { nama: 'Barang B', harga: 20000 },
    '003': { nama: 'Barang C', harga: 30000 }
  };
  
  const transaksi = {
    penjualan: [],
    pembelian: []
  };
  
  function tampilkanDaftarBarang() {
    let daftarHTML = 'Kode | Barang | Harga\n';
    Object.keys(daftarBarang).forEach(kode => {
      const { nama, harga } = daftarBarang[kode];
      daftarHTML += `${kode} | ${nama} | ${harga}\n`;
    });
    document.getElementById('daftarBarang').innerText = daftarHTML;
  }
  
  function tampilkanTransaksi() {
    let transaksiHTML = 'Jenis | Kode Barang | Nama Barang | Harga\n';
    ['penjualan', 'pembelian'].forEach(jenis => {
      transaksi[jenis].forEach(item => {
        transaksiHTML += `${jenis.charAt(0).toUpperCase()} | ${item.kode} | ${item.nama} | ${item.harga}\n`;
      });
    });
    document.getElementById('transaksi').innerText = transaksiHTML;
  }
  
  function submitTransaksi() {
    const kode = document.getElementById('kode').value;
    const banyak = parseInt(document.getElementById('banyak').value, 10);
  
    if (!daftarBarang[kode]) {
      alert('Barang tidak ditemukan.');
      return;
    }
  
    const totalHarga = daftarBarang[kode].harga * banyak;
  
    alert(`Total pembayaran adalah: Rp ${totalHarga}`);
  
    setTimeout(() => {
      const uangDibayarkan = parseFloat(prompt('Masukkan jumlah uang yang akan dibayarkan:'));
  
      if (isNaN(uangDibayarkan) || uangDibayarkan < totalHarga) {
        alert('Tambahkan uang pembayaran anda. TIDAK MENERIMA HUTANG!');
        return;
      }
  
      const kembalian = uangDibayarkan - totalHarga;
  
      alert(`\Terima Kasih!\nTotal Kembalian Anda : Rp ${kembalian}`);
  
      transaksi['penjualan'].push({ kode, nama: daftarBarang[kode].nama, harga: totalHarga });
      tampilkanTransaksi();
  
    }, 0);
  }
  
  tampilkanDaftarBarang();
  