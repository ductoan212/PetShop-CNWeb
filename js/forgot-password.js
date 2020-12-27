function passwordRetrieval()
{
    var checkEmail = document.getElementById("txtEmail").value;

    if(checkEmail == "" || checkEmail == null)
    {
        alert("Mời nhập tên đăng nhập hoặc email", "OK", "Cancel");
    }
    else if (checkEmail == "petshop@gm.uit.edu.vn")
    {
        location.assign("../index.html");
    }
}