//! BÀI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN

const THUE_60 = 0.05;
const THUE_60_120 = 0.1;
const THUE_120_210 = 0.15;
const THUE_210_384 = 0.2;
const THUE_384_624 = 0.25;
const THUE_624_960 = 0.3;
const THUE_TREN_960 = 0.35;


function mainBT3() {
    var fullName = changeId('hoTen').value;
    var tongTN = Number(changeId('tongThuNhap').value);
    var phuThuoc = Number(changeId('ngươiPhuThuoc').value);

    var thuNhapCT = calcThuNhapChiuThue(tongTN, phuThuoc);

    var taxTNCT = calcThueThuNhapCaNhan(thuNhapCT, THUE_60, THUE_60_120, THUE_120_210, THUE_210_384, THUE_384_624, THUE_624_960, THUE_TREN_960);

    document.getElementById("txtTienThue").innerHTML = "- Họ tên: " + fullName + ";<br> - Tiền thuế thu nhập cá nhân: " + taxTNCT.toLocaleString() + " đồng"
}


function changeId(id) {
    return document.getElementById(id);
}


function calcThuNhapChiuThue(totalThuNhap, soNguoiPhuThuoc) {
    var thuNhapChiuThue = 0;
    
    if (0 <= soNguoiPhuThuoc) {
        thuNhapChiuThue = totalThuNhap - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
        
    } else {
        alert('Số người phụ thuộc không hợp lệ!')
    }

    return thuNhapChiuThue;
}


function calcThueThuNhapCaNhan(thuNhapChiuThue, thue_60, thue_60_120, thue_120_210, thue_210_384, thue_384_624, thue_624_960, thue_tren_960) {
    var thueTNCN = 0;

    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60e+6) {
        thueTNCN = thuNhapChiuThue * thue_60;

    } else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
        thueTNCN = (60e+6 * thue_60) + ((thuNhapChiuThue - 60e+6) * thue_60_120);

    } else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {
        thueTNCN = (60e+6 * thue_60) + (60e+6 * thue_60_120) + ((thuNhapChiuThue - 120e+6) * thue_120_210);

    } else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
        thueTNCN = (60e+6 * thue_60) + (60e+6 * thue_60_120) + (90e+6 * thue_120_210) + ((thuNhapChiuThue - 210e+6) * thue_210_384);

    } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        thueTNCN = (60e+6 * thue_60) + (60e+6 * thue_60_120) + (90e+6 * thue_120_210) + (174e+6 * thue_210_384) + ((thuNhapChiuThue - 384e+6) * thue_384_624);

    } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {
        thueTNCN = (60e+6 * thue_60) + (60e+6 * thue_60_120) + (90e+6 * thue_120_210) + (174e+6 * thue_210_384) + (240e+6 * thue_384_624) + ((thuNhapChiuThue - 624e+6) * thue_624_960);

    } else if (thuNhapChiuThue > 960e+6) {
        thueTNCN = (60e+6 * thue_60) + (60e+6 * thue_60_120) + (90e+6 * thue_120_210) + (174e+6 * thue_210_384) + (240e+6 * thue_384_624) + (336e+6 * thue_624_960) + ((thuNhapChiuThue - 960e+6) * thue_tren_960);
    } else {
        alert('Vui lòng kiểm tra lại tổng thu nhập cả năm!')
    }
    
    return thueTNCN;
}