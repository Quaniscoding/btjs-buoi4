document.getElementById('sapXep').onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').value * 1;
    var soThuHai = document.getElementById('soThuHai').value * 1;
    var soThuBa = document.getElementById('soThuBa').value * 1;
    var xuatRa;
    if (soThuBa > soThuHai && soThuBa > soThuNhat && soThuHai > soThuNhat) {
        var xuatRa = "Sắp xếp theo thứ tự tăng dần là " + soThuNhat + ", " + soThuHai + ", " + soThuBa;
        document.getElementById('xuatRa').innerHTML = xuatRa;
    } else if (soThuHai > soThuNhat && soThuHai > soThuBa && soThuBa > soThuNhat) {
        var xuatRa = "Sắp xếp theo thứ tự tăng dần là " + soThuNhat + ", " + soThuBa + ", " + soThuHai;
        document.getElementById('xuatRa').innerHTML = xuatRa;
    } else if (soThuNhat > soThuHai && soThuHai > soThuBa && soThuNhat > soThuBa) {
        var xuatRa = "Sắp xếp theo thứ tự tăng dần là " + soThuBa + ", " + soThuHai + ", " + soThuNhat;
        document.getElementById('xuatRa').innerHTML = xuatRa;
    } else if (soThuNhat > soThuHai && soThuBa > soThuHai && soThuBa > soThuNhat) {
        var xuatRa = "Sắp xếp theo thứ tự tăng dần là " + soThuHai + ", " + soThuNhat + ", " + soThuBa;
        document.getElementById('xuatRa').innerHTML = xuatRa;
    }

    else if (soThuBa > soThuNhat && soThuNhat > soThuHai && soThuBa > soThuHai) {
        var xuatRa = "Sắp xếp theo thứ tự tăng dần là " + soThuHai + ", " + soThuNhat + ", " + soThuBa;
        document.getElementById('xuatRa').innerHTML = xuatRa;
    }
    else if (soThuHai > soThuNhat && soThuNhat > soThuBa && soThuHai > soThuBa) {
        var xuatRa = "Sắp xếp theo thứ tự tăng dần là " + soThuBa + ", " + soThuNhat + ", " + soThuHai;
        document.getElementById('xuatRa').innerHTML = xuatRa;
    }
}

document.getElementById('cauHoi').onclick = function () {
    var nguoiHoi = document.getElementById('nguoiHoi').value;
    var cauHoiPhuHop;
    if (nguoiHoi == "B") {
        var cauHoiPhuHop = "Chào bố!"
        document.getElementById('cauHoiPhuHop').innerHTML = cauHoiPhuHop;
    } else if (nguoiHoi == "M") {
        var cauHoiPhuHop = "Chào Mẹ!"
        document.getElementById('cauHoiPhuHop').innerHTML = cauHoiPhuHop;
    } else if (nguoiHoi == "A") {
        var cauHoiPhuHop = "Chào Anh Trai!"
        document.getElementById('cauHoiPhuHop').innerHTML = cauHoiPhuHop;
    } else if (nguoiHoi == "E") {
        var cauHoiPhuHop = "Chào Em Gái!"
        document.getElementById('cauHoiPhuHop').innerHTML = cauHoiPhuHop;
    }
}
document.getElementById('tim').onclick = function () {
    var soThu1 = document.getElementById('soThu1').value * 1;
    var soThu2 = document.getElementById('soThu2').value * 1;
    var soThu3 = document.getElementById('soThu3').value * 1;
    var timRa;
    if (soThu1 % 2 == 0 && soThu2 % 2 == 0 && soThu3 % 2 == 0) {
        var timRa = "Có 3 số chẵn và 0 số lẻ";
        document.getElementById('dapAn').innerHTML = timRa;
    } else if (soThu1 % 2 !== 0 && soThu2 % 2 == 0 && soThu3 % 2 == 0) {
        var timRa = "Có 2 số chẵn và 1 số lẻ";
        document.getElementById('dapAn').innerHTML = timRa;
    } else if (soThu1 % 2 !== 0 && soThu2 % 2 !== 0 && soThu3 % 2 == 0) {
        var timRa = "Có 1 số chẵn và 2 số lẻ";
        document.getElementById('dapAn').innerHTML = timRa;
    } else if (soThu1 % 2 == 0 && soThu2 % 2 !== 0 && soThu3 % 2 !== 0) {
        var timRa = "Có 1 số chẵn và 2 số lẻ";
        document.getElementById('dapAn').innerHTML = timRa;
    } else if (soThu1 % 2 == 0 && soThu2 % 2 !== 0 && soThu3 % 2 == 0) {
        var timRa = "Có 2 số chẵn và 1 số lẻ";
        document.getElementById('dapAn').innerHTML = timRa;
    }
}
document.getElementById('timHinhTamGiac').onclick = function () {
    var canh1 = document.getElementById('canh1').value * 1;
    var canh2 = document.getElementById('canh2').value * 1;
    var canh3 = document.getElementById('canh3').value * 1;
    var timTinhTamGiac;
    if (canh1 * canh1 == canh2 * canh2 + canh3 * canh3 || canh2 * canh2 == canh1 * canh1 + canh3 * canh3 || canh3 * canh3 == canh2 * canh2 + canh1 * canh1) {
        var timTinhTamGiac = "Đây là tam giác vuông"
        document.getElementById('dapAnTamGiac').innerHTML = timTinhTamGiac;
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        var timTinhTamGiac = "Đây là tam giác cân"
        document.getElementById('dapAnTamGiac').innerHTML = timTinhTamGiac;
    } else if (canh1 == canh2 && canh2 == canh3) {
        var timTinhTamGiac = "Đây là tam giác đều"
        document.getElementById('dapAnTamGiac').innerHTML = timTinhTamGiac;
    }
}