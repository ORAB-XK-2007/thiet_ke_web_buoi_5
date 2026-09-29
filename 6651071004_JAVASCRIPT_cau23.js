function tinhLuongThang() {

    const luongInput = document.getElementById("luongCoBan").value;
    const heSoInput = document.getElementById("heSoLuong").value;
    const oKetQua = document.getElementById("luongThang");

    if (luongInput === "" || heSoInput === "") {
        alert("Vui lòng nhập đầy đủ Lương và Hệ số lương!");
        return;
    }

    const luong = parseFloat(luongInput);
    const heSo = parseFloat(heSoInput);
    const tongLuong = luong * heSo;

    oKetQua.value = tongLuong;
}