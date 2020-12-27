function login()
{
    var checkEmail = document.getElementById("txtEmail").value;
    var checkPassword = document.getElementById("txtPassword").value;
    
    if(checkEmail == "" || checkEmail == null)
    {
        alert("Vui lòng nhập tên đăng nhập hoặc email...", "OK", "Cancel");
    }
    else if(checkPassword == "" || checkPassword == null)
    {
        alert("Vui lòng nhập mật khẩu...", "OK", "Cancel");
    }
    else if(checkEmail == "petshop@gm.uit.edu.vn" && checkPassword == "123456")
    {
        location.assign("../index.html");
    }
    else
    {
        alert("Sai tên đăng nhập hoặc mật khẩu", "OK");
    }
}

function loginGG()
{
    location.assign("../index.html")
}

function loginFB()
{
    location.assign("../index.html")
}