function register() {
    var checkHo = document.getElementById("txtHo").value;
    var checkTen = document.getElementById("txtTen").value;
    var checkTenDN = document.getElementById("txtTenDN").value;
    var checkEmail = document.getElementById("txtEmail").value;
    var checkPassword = document.getElementById("txtMatKhau").value;
    var checkRepeatPassword = document.getElementById("txtLapLaiMK").value;

    if (checkHo == "" || checkHo == null) {
        alert('Chưa nhập "Họ". Mời nhập lại!!!', "OK");
    } else if (checkTen == "" || checkTen == null) {
        alert('Chưa nhập "Tên". Mời nhập lại!!!', "OK");
    } else if (checkTenDN == "" || checkTenDN == null) {
        alert('Chưa nhập "Tên đăng nhập". Mời nhập lại!!!', "OK");
    } else if (checkTenDN == "petshop@gm.uit.edu.vn") {
        alert('"Tên đăng nhập" đã tồn tại. Hãy nhập "Tên đăng nhập" khác!!!', "OK");
    } else if (checkEmail == "" || checkEmail == null) {
        alert('Chưa nhập "Email". Mời nhập lại!!!', "OK");
    } else if (checkEmail == "petshop@gm.uit.edu.vn") {
        alert('"Email" đã được sử dụng. Hãy nhập "Email" khác!!!', "OK");
    } else if (checkPassword == "" || checkPassword == null) {
        alert('Chưa nhập "Mật khẩu". Mời nhập lại!!!', "OK");
    } else if (checkRepeatPassword == "" || checkRepeatPassword == "") {
        alert('Nhập lại mật khẩu ở trên để xác nhận.', "OK");
    } else if (checkPassword != "" && checkPassword != null && checkRepeatPassword != "" && checkRepeatPassword != null &&
        checkRepeatPassword != checkPassword) {
        alert("Mật khẩu không khớp với mật khẩu phía trên. Mời nhập lại!!!");
    } else if (checkPassword != "" && checkPassword != null && checkRepeatPassword != "" && checkRepeatPassword != null &&
        checkRepeatPassword == checkPassword) {
        location.assign("../index.html");
    }
}


function redirectToIndex() {
    localStorage.setItem("isLogin", true);
    location.assign("../index.html");
}