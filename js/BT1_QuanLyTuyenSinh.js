//! BÀI 1: QUẢN LÝ TUYỂN SINH

function mainBT1() {
    var diemChuan = Number(changeId("diemChuanInp").value);
    var diemM1 = Number(changeId("diemMon1").value);
    var diemM2 = Number(changeId("diemMon2").value);
    var diemM3 = Number(changeId("diemMon3").value);

    var UTDT = Number(changeId("uuTienDoiTuong").value);
    var UTKV = Number(changeId("uuTienKhuVuc").value);
    var khongUTKV = changeId('khongKVUT').value;
    var khongUTDT = changeId('khongDTUT').value;


    var typeDiemUT = checkTypeUT(khongUTDT, khongUTKV, UTDT, UTKV);

    var diem_UuTien = calcDiemUuTien(typeDiemUT, UTDT, UTKV);

    var ketQuaTS = txtThongBao(diem_UuTien, diemM1, diemM2, diemM3, diemChuan);

    document.getElementById('txtTuyenSinh').innerHTML = ketQuaTS;
}


function changeId(id) {
    return document.getElementById(id);
}


function checkTypeUT(k_UuTien_DT, k_UuTien_KV, uuTien_DT, uuTien_KV) {

    if (k_UuTien_DT == "0" && (k_UuTien_KV == "X" || k_UuTien_KV == "x") && uuTien_DT == 0 && uuTien_KV == 0) {
        return "Không thuộc ưu tiên";

    } else if ((k_UuTien_KV == "X" || k_UuTien_KV == "x") && uuTien_DT > 0 && uuTien_KV == 0 && k_UuTien_DT == "") {
        return "Thuộc ưu tiên đối tượng";

    } else if (uuTien_KV > 0 && (k_UuTien_DT == "0") && uuTien_DT == 0 && k_UuTien_KV == "") {
        return "Thuộc ưu tiên khu vực";

    } else if (uuTien_KV > 0 && uuTien_DT > 0 && k_UuTien_DT == "" && k_UuTien_KV == "") {
        return "Thuộc ưu tiên khu vực và đối tượng";

    } else {
        alert("Vui lòng kiểm tra mục điểm ưu tiên!")
        return "";
    }
}


function calcDiemUuTien(loaiUT, uuTien_DT, uuTien_KV) {

    if (loaiUT == "Không thuộc ưu tiên") {
        return 0;

    } else if (loaiUT == "Thuộc ưu tiên đối tượng") {
        return uuTien_DT;

    } else if (loaiUT == "Thuộc ưu tiên khu vực") {
        return uuTien_KV;

    } else if (loaiUT == "Thuộc ưu tiên khu vực và đối tượng") {
        return uuTien_DT + uuTien_KV;
        
    } else {
        return 0;
    }
}


function txtThongBao(diem_UuTien, diemMonT1, diemMonT2, diemMonT3, diem_chuan) {

    var tongDiem = diem_UuTien + diemMonT1 + diemMonT2 + diemMonT3;

    if (diemMonT1 == 0 || diemMonT2 == 0 || diemMonT3 == 0) {
        return "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";

    } else if ((0 < diemMonT1 && diemMonT1 <= 10) && (0 < diemMonT2 && diemMonT2 <= 10) && (0 < diemMonT3 && diemMonT3 <= 10) && tongDiem >= diem_chuan) {
        return "Bạn đã đậu. Tổng điểm: " + tongDiem;

    } else if ((0 < diemMonT1 && diemMonT1 <= 10) && (0 < diemMonT2 && diemMonT2 <= 10) && (0 < diemMonT3 && diemMonT3 <= 10) && tongDiem < diem_chuan) {
        return "Bạn đã rớt. Tổng điểm: " + tongDiem;

    } else {
        alert("Vui lòng check lại điểm!")
        return 0;
    }
}
