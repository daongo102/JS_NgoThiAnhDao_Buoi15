const GIA_50_DAU = 500;
const GIA_50_KE = 650;
const GIA_100_KE = 850;
const GIA_150_KE = 1100;
const GIA_CL = 1300;

function mainBT2() {
    var hoTen = changeId('inputHoTen').value;
    var soKw = changeId('inputKw').value;

    var totalTienDien = calcTienDien(soKw,GIA_50_DAU,GIA_50_KE,GIA_100_KE,GIA_150_KE,GIA_CL);    
    
    document.getElementById('txtTienDien').innerHTML = "- Khách hàng: " + hoTen + ";<br> - Tiền điện: " + totalTienDien.toLocaleString() + " đồng";
}

function changeId(id){
    return document.getElementById(id);
}

function calcTienDien(soKw,gia_50dau,gia_50ke,gia_100ke,gia_150ke,gia_cl){
    var total = 0;

    if (0 < soKw && soKw <= 50) {
        total = soKw * gia_50dau;
        
    } else if (50 < soKw && soKw <= 100) {
        total= (gia_50dau * 50) + ((soKw - 50) * gia_50ke);
        
    } else if (100 < soKw && soKw <= 200) {
        total = ((gia_50dau + gia_50ke) * 50) + ((soKw - 100) * gia_100ke);
     
    } else if (200 < soKw && soKw <= 350) {
        total = ((gia_50dau + gia_50ke) * 50) + (gia_100ke * 100) + ((soKw - 200) * gia_150ke);
       
    } else if (soKw > 350) {
        total = ((gia_50dau + gia_50ke) * 50) + (gia_100ke * 100) + (gia_150ke * 150) + ((soKw - 350) * gia_cl);
       
    } else {
        alert('Vui lòng kiểm tra lại số Kw!')
    }

    return total;
}