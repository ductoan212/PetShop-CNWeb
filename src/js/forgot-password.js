function passwordRetrieval() {
    var checkEmail = document.getElementById("txtEmail").value;

    if (checkEmail == "" || checkEmail == null) {
        alert("Mời nhập tên đăng nhập hoặc email", "OK", "Cancel");
        return;
    }
    location.assign("./login.html");
}


function backToIndex() {
    location.assign("../index.html");
}