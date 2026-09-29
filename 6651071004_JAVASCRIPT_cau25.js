function tinhTien() {
    const selectThucAn = document.getElementById("thucAn");
    const selectNuocUong = document.getElementById("nuocUong");
    const billBody = document.getElementById("billBody");
    const tongTienCell = document.getElementById("tongTien");

    billBody.innerHTML = "";
    let tongTien = 0;

    for (let i = 0; i < selectThucAn.options.length; i++) {
        const option = selectThucAn.options[i];
        if (option.selected) {
            const tenMon = option.text;
            const giaTien = parseFloat(option.value);
            tongTien += giaTien;

            const row = document.createElement("tr");
            row.innerHTML = `<td class="td-left">${tenMon}</td><td class="td-right">${giaTien}</td>`;
            billBody.appendChild(row);
        }
    }

    for (let i = 0; i < selectNuocUong.options.length; i++) {
        const option = selectNuocUong.options[i];
        if (option.selected) {
            const tenMon = option.text;
            const giaTien = parseFloat(option.value);
            tongTien += giaTien;

            const row = document.createElement("tr");
            row.innerHTML = `<td class="td-left">${tenMon}</td><td class="td-right">${giaTien}</td>`;
            billBody.appendChild(row);
        }
    }

    const isBanDem = document.querySelector('input[name="thoiDiem"]:checked').value === "dem";
    if (isBanDem) {
        tongTien = tongTien * 1.1;
    }

    tongTienCell.innerText = Math.round(tongTien) + " đồng";
    selectThucAn.selectedIndex = -1;
    selectNuocUong.selectedIndex = -1;

    for (let i = 0; i < selectThucAn.options.length; i++) {
        selectThucAn.options[i].selected = false;
    }
    for (let i = 0; i < selectNuocUong.options.length; i++) {
        selectNuocUong.options[i].selected = false;
    }
    
}
window.onload = function() {
    function batCheDoClickMulti(selectId) {
        const select = document.getElementById(selectId);
        select.addEventListener("mousedown", function(e) {
            e.preventDefault(); 
            
            const option = e.target;
            if (option.tagName === "OPTION") {
                option.selected = !option.selected; 
            }
        });
    }

    batCheDoClickMulti("thucAn");
    batCheDoClickMulti("nuocUong");
};