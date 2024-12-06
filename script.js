function konversiBulan() {
    // Mendapatkan input bulan dari pengguna
    var bulanInput = document.getElementById("bulan").value;
    var namaBulan;

    // Kondisi untuk mengecek bulan input
    switch (bulanInput) {
        case "1":
            namaBulan = "Januari";
            break;
        case "2":
            namaBulan = "Februari";
            break;
        case "3":
            namaBulan = "Maret";
            break;
        case "4":
            namaBulan = "April";
            break;
        case "5":
            namaBulan = "Mei";
            break;
        case "6":
            namaBulan = "Juni";
            break;
        case "7":
            namaBulan = "Juli";
            break;
        case "8":
            namaBulan = "Agustus";
            break;
        case "9":
            namaBulan = "September";
            break;
        case "10":
            namaBulan = "Oktober";
            break;
        case "11":
            namaBulan = "November";
            break;
        case "12":
            namaBulan = "Desember";
            break;
        default:
            namaBulan = "Input tidak valid! Harap masukkan angka antara 1 dan 12.";
            break;
    }

    // Menampilkan hasil konversi
    document.getElementById("hasil").innerHTML = "Bulan ke-" + bulanInput + " adalah " + namaBulan;
}
