//! BÀI 4: TÍNH TIỀN CÁP

const PHI_HD_ND = 4.5;
const PHI_DVCB_ND = 20.5;
const PHI_CAOCAP_ND = 7.5;

const PHI_HD_DN = 15;
const PHI_DVCB_DN = 75;
const PHI_DVCB_T11_DN = 5;
const PHI_CAOCAP_DN = 50;

function mainBT4() {
    var khachHang = changeId('chonKH').value;
    var maKHang = changeId('maKH').value;
    var soKenhCC = Number(changeId('kenhCaoCap').value);
    var soKNoi = Number(changeId('ketNoi').value);

    var loaiKH = checkTypeKH(khachHang);

    var tienCap = 0;
    switch (loaiKH) {
        case "Nhà Dân":
            tienCap = calcTienCap(PHI_HD_ND, PHI_DVCB_ND, 0, 0, soKenhCC, PHI_CAOCAP_ND);
            break;
        case "Doanh Nghiệp":
            tienCap = calcTienCap(PHI_HD_DN, PHI_DVCB_DN, PHI_DVCB_T11_DN, soKNoi, soKenhCC, PHI_CAOCAP_DN);
        default:
            break;
    }

    document.getElementById('txtTienCap').innerHTML = "- Mã khách hàng: " + maKHang + ";<br>- Tiền cáp: " + "$" + tienCap.toLocaleString();

}


function changeId(id) {
    return document.getElementById(id);
}


function clickKH(khachHang) {
    var khachHang = changeId('chonKH').value;

    if (khachHang == "Nhà Dân") {
        document.getElementById("tabKetNoi").style.visibility = "hidden";

    } else {
        document.getElementById("tabKetNoi").style.visibility = "visible";
    }
}


function checkTypeKH(phanLoai) {

    if (phanLoai == "Nhà Dân") {
        return "Nhà Dân";

    } else if (phanLoai == "Doanh Nghiệp") {
        return "Doanh Nghiệp";

    } else {
        alert('Bạn chưa chọn phân loại khách hàng!')
        return "";
    }
}


// function calcTienCap(phi_hopdong, phi_dvcb, phi_dvcb_t11, ketNoi, kenh_cc, phi_thuekenh) {

//     if ((0 < ketNoi && ketNoi <= 10) || kenh_cc > 0) {
//         return phi_hopdong + phi_dvcb + (kenh_cc * phi_thuekenh);

//     } else if (10 < ketNoi && kenh_cc > 0) {
//         return phi_hopdong + phi_dvcb + (phi_dvcb_t11 * ketNoi) + (kenh_cc * phi_thuekenh);

//     } else {
//         alert('Vui lòng kiểm tra lại dữ liệu!')
//         return 0;
//     }
// }

function calcTienCap(phi_hopdong, phi_dvcb, phi_dvcb_t11, ketNoi, kenh_cc, phi_thuekenh) {

    if (kenh_cc >= 0 && ketNoi == 0) {
        return phi_hopdong + phi_dvcb + (kenh_cc * phi_thuekenh);

    } else if (0 <= ketNoi && ketNoi <= 10 && kenh_cc >= 0) {
        return phi_hopdong + phi_dvcb + (kenh_cc * phi_thuekenh);

    }else if (10 < ketNoi && kenh_cc >= 0) {
        return phi_hopdong + phi_dvcb + (phi_dvcb_t11 * ketNoi) + (kenh_cc * phi_thuekenh);

    } else {
        alert('Vui lòng kiểm tra lại dữ liệu!')
        return 0;
    }
}