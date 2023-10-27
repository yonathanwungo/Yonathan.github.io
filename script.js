function kalkulator() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("hasil").innerText = "Error : Silahkan Masukkan Angka Yang Valid.";
    } else {
        const x = -b / a;
        document.getElementById("hasil").innerText = `${x}`;
    }
}