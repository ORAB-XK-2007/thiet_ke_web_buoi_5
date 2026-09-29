function xuatThu() {
    const ngayStr = document.getElementById("ngay").value;
    const thangStr = document.getElementById("thang").value;
    const namStr = document.getElementById("nam").value;
    const resultElement = document.getElementById("ketQua");

    if (ngayStr === "" || thangStr === "" || namStr === "") {
        resultElement.innerText = "Vui lòng nhập đầy đủ ngày, tháng, năm!";
        return;
    }

    const ngay = parseInt(ngayStr, 10);
    const thang = parseInt(thangStr, 10);
    const nam = parseInt(namStr, 10);

    const d = new Date(nam, thang - 1, ngay);

    if (d.getFullYear() !== nam || (d.getMonth() + 1) !== thang || d.getDate() !== ngay) {
        resultElement.innerText = "Ngày tháng năm không hợp lệ!";
        return;
    }

    const mangThu = [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
    ];

    const tenThu = mangThu[d.getDay()];

    resultElement.innerText = `${tenThu} Ngày ${ngay} tháng ${thang} năm ${nam}`;
}