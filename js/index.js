// ==================== Create auto product ====================
const listProduct = [{
        id: "pd-001",
        nameImg: "san_pham_1.jpg",
        name: "Sản phẩm 1",
        oldPrice: 120,
        newPrice: 99,
    },
    {
        id: "pd-002",
        nameImg: "san_pham_2.jpg",
        name: "Sản phẩm 2",
        oldPrice: 100,
        newPrice: 79,
    },
    {
        id: "pd-003",
        nameImg: "san_pham_3.jpg",
        name: "Sản phẩm 3",
        oldPrice: 1220,
        newPrice: 700,
    },
    {
        id: "pd-004",
        nameImg: "san_pham_4.jpg",
        name: "Sản phẩm 4",
        oldPrice: 20,
        newPrice: 9,
    },
    {
        id: "pd-005",
        nameImg: "san_pham_5.jpg",
        name: "Sản phẩm 5",
        oldPrice: 20,
        newPrice: 15,
    },
    {
        id: "pd-006",
        nameImg: "san_pham_6.jpg",
        name: "Sản phẩm 6",
        oldPrice: 120,
        newPrice: 99,
    },
    {
        id: "pd-007",
        nameImg: "san_pham_1.jpg",
        name: "Sản phẩm 7",
        oldPrice: 55,
        newPrice: 23,
    },
    {
        id: "pd-008",
        nameImg: "san_pham_2.jpg",
        name: "Sản phẩm 8",
        oldPrice: 212,
        newPrice: 199,
    },
    {
        id: "pd-009",
        nameImg: "san_pham_3.jpg",
        name: "Sản phẩm 9",
        oldPrice: 100,
        newPrice: 99,
    },
    {
        id: "pd-010",
        nameImg: "san_pham_4.jpg",
        name: "Sản phẩm 10",
        oldPrice: 88,
        newPrice: 75,
    },
    {
        id: "pd-011",
        nameImg: "san_pham_5.jpg",
        name: "Sản phẩm 11",
        oldPrice: 75,
        newPrice: 23,
    },
    {
        id: "pd-012",
        nameImg: "san_pham_6.jpg",
        name: "Sản phẩm 12",
        oldPrice: 45,
        newPrice: 40,
    },
];

function createProduct(item) {
    return `<div class="product-item" id="${item["id"]}" >
        <div onClick="detailProduct('${item["id"]}')">
            <div class="img-product" style="background-image:  url(../assets/images/${item["nameImg"]});"></div>
            <div class="info-product">
                <p class="name-product">${item["name"]}</p>
                <p class="old-price-product">${item["oldPrice"]}.000 VNĐ</p>
                <p class="new-price-product">${item["newPrice"]}.000 VNĐ</p>
            </div>
        </div>
        <div class="add-to-cart">
            <button id="btn-${item["id"]}" onclick="addToCart('${item["id"]}')">Thêm vào giỏ</button>
        </div>
    </div>`;
}

function createAllProduct(list) {
    for (var i = 0; i < list.length; i++) {
        $("#lst-product").append(createProduct(list[i]));
    }
}



function getProductWithId(id) {
    for (var i = 0; i < listProduct.length; i++) {
        if (listProduct[i]["id"] == id) return listProduct[i];
    }
    return null;
}


//==================== Store list item in cart ====================
var listCart = [];

function createItemCart(item) {
    return `<div class="item-product" id="${item["info"]["id"]}">
                <div class="img-product" style="background-image:  url(../assets/images/${item["info"]["nameImg"]});"></div>
                <div class="info-product">
                    <div class="name-price">
                        <p class="name-product">${item["info"]["name"]}</p>
                        <p class="price-product">${item["info"]["newPrice"]}.000 VNĐ</p>
                    </div>
                    <div class="quantity-product">
                        <button onClick="minusNumProduct('${item["info"]["id"]}')" class="btn-quantity">-</button>
                        <input id="qua-${item["info"]["id"]}" type="number" min="1" value="${item["quantity"]}" readonly>
                        <button onClick="plusNumProduct('${item["info"]["id"]}')" class="btn-quantity">+</button>
                    </div>
                    <div id="sum-${item["info"]["id"]}" class="sum-price-product">${item["sum"]}.000 VNĐ</div>
                </div>
                <div class="delete-product">
                    <img src="../assets/icons/remove.png" id="img-${item["info"]["id"]}" onclick="removeItemOnCart('${item["info"]["id"]}')">
                </div>
            </div>`;
}

function createAllCart() {
    for (var i = 0; i < listCart.length; i++) {
        $("#list-cart").append(createItemCart(listCart[i]));
        console.log(createItemCart(listCart[i]));
    }
}

function plusNumProduct(id) {
    const quantity = parseInt($(`#qua-${id}`).val()) + 1;
    $(`#qua-${id}`).val(quantity);
    updateTotal();
}

function minusNumProduct(id) {
    const quantity = parseInt($(`#qua-${id}`).val()) - 1;
    if (quantity < 1) {
        removeItemOnCart(id);
        return;
    }
    $(`#qua-${id}`).val(quantity);
    updateTotal();
}

function calculateTotal() {
    var s = 0;
    for (var i = 0; i < listCart.length; i++) {
        var temp = listCart[i]["info"]["newPrice"] * listCart[i]["quantity"];
        listCart[i]["sum"] = temp;
        s += temp;
    }
    // console.log(s);
    return s;
}

function updateTotal() {
    for (var i = 0; i < listCart.length; i++) {
        temp = document.getElementById(listCart[i]["info"]["id"]);
        var quantity = $(`#qua-${listCart[i]["info"]["id"]}`).val();
        if (quantity < 1) {
            quantity = 1;
            $(`#qua-${listCart[i]["info"]["id"]}`).val(1);
        }
        var sum = listCart[i]["info"]["newPrice"] * quantity;
        listCart[i]["quantity"] = parseInt(quantity);
        listCart[i]["sum"] = parseInt(sum);
        $(`#sum-${listCart[i]["info"]["id"]}`).text(`${sum}.000 VNĐ`);
    }
    document.getElementById(
        "total"
    ).innerHTML = `Tổng tiền: ${calculateTotal()}.000 VNĐ`;
}

function checkout() {
    listCart = [];
    alert(
        "Cảm ơn bạn đã mua hàng. Sau khi thanh toán toàn bộ sản phẩm trong giỏ hàng sẽ bị xóa"
    );
    loadCart();
}

// ==================== add to cart ====================
function addToCart(id) {
    if (localStorage.getItem("isLogin") == null) {
        alert("Đăng nhập để mua hàng");
        return;
    }
    console.log(id);
    const product = {
        info: getProductWithId(id),
        quantity: 1,
        sum: 0,
    };
    // Kiem tra xem gio hang co chua
    var i = 0;
    while (i < listCart.length) {
        if (listCart[i]["info"]["id"] == id) break;
        i++;
    }
    console.log(i);
    if (i == listCart.length) {
        listCart.push(product);
    } else {
        listCart[i]["quantity"]++;
    }
    alert("Đã thêm vào giỏ hàng");
}

function removeItemOnCart(id) {
    console.log(id);
    // Tim vi tri cua item
    var i = 0;
    while (i < listCart.length) {
        if (listCart[i]["info"]["id"] == id) break;
        i++;
    }
    if (i == listCart.length) return;
    console.log(i);
    temp1 = listCart.slice(0, i);
    temp2 = listCart.slice(i + 1, listCart.length);
    listCart = temp1.concat(temp2);
    loadCart();
}

// ==================== routing navigation ====================
function closeBurger() {
    var classList = document.getElementById("check-nav").className.split(/\s+/);
    if (classList.length == 2) $(".burger").click();
}

function loadHome() {
    $("#main").load("../pages/home.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-home").addClass("link-active");
    document.title = "PetShop";
    closeBurger();
}

function loadProducts() {
    $("#main").load("../pages/products.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-products").addClass("link-active");
    document.title = "PetShop | Sản phẩm";
    createAllProduct(listProduct);
    closeBurger();
}

function loadDetailProduct(id) {
    $("#main").load("../pages/detail-product.html", function() {
        var product = getProductWithId(id);
        document.getElementById(
            "img-product"
        ).style.backgroundImage = `url(../assets/images/${product["nameImg"]})`;
        document.getElementById("name-product").innerHTML = product["name"];
        document.getElementById(
            "old-price"
        ).innerHTML = `${product["oldPrice"]}.000 VNĐ`;
        document.getElementById(
            "new-price"
        ).innerHTML = `${product["newPrice"]}.000 VNĐ`;
        document
            .getElementById("btn-add-to-cart")
            .setAttribute("onclick", `addToCart('${product["id"]}')`);
        console.log(a);
    });
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-products").addClass("link-active");
    document.title = "PetShop | Sản phẩm";
    // createAllProduct();
    closeBurger();
    topFunction();
}

function loadBlogs() {
    $("#main").load("../pages/blogs.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-blogs").addClass("link-active");
    document.title = "PetShop | Bài viết";
    closeBurger();
}

function loadDetailBlog() {
    if (localStorage.getItem("isLogin") == null) {
        alert("Đăng nhập để đọc tiếp");
        return;
    }
    $("#main").load("../pages/detail-blog.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-blogs").addClass("link-active");
    document.title = "PetShop | Bài viết";
    topFunction();
    closeBurger();
}

function loadAboutUs() {
    $("#main").load("../pages/about-us.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-about-us").addClass("link-active");
    document.title = "PetShop | Giới thiệu";
    closeBurger();
}

function loadContact() {
    $("#main").load("../pages/contact.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-contact").addClass("link-active");
    document.title = "PetShop | Liên hệ";
    closeBurger();
}

function loadAccount() {
    // $("#main").load("../pages/loading.html");
    $("#main").load("../pages/account.html");
    $(".nav-links, li, a").removeClass("link-active");

    document.title = "PetShop | Tài khoản";
}

function loadCart() {
    document.title = "PetShop | Giỏ hàng";
    if (listCart.length == 0) {
        $("#main").load("../pages/cart-empty.html");
    } else {
        $("#main").load("../pages/cart.html");
    }
    $(".nav-links, li, a").removeClass("link-active");
    document.getElementById(
        "total"
    ).innerHTML = `Tổng tiền: ${calculateTotal()}.000 VNĐ`;
}

function logout() {
    localStorage.removeItem("isLogin");
    location.assign("./index.html");
    console.log(localStorage.getItem("isLogin"));
}

function redirecToLogin() {
    location.assign("./pages/login.html");
}

$(document).ready(function() {
    loadHome();
    if (localStorage.getItem("isLogin")) {
        $("#login-true").removeClass("hidden");
        $("#login-false").addClass("hidden");
    } else {
        $("#login-true").addClass("hidden");
        $("#login-false").removeClass("hidden");
        console.log("Chua dang nhap");
    }
});

// ====================================== Nav ======================================
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /10}s`;
            }
        });
        //Burger animation
        burger.classList.toggle("toggle");
    });
};
navSlide();

// ====================================== Drop down for account zone ======================================
function dropdownAccount() {
    document.getElementById("accountDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches(".account-btn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

// Slide show
var counter = 1;
setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

function clearSubcribeForm() {
    $("#emailSubcribe").val("");
}

function clearSearch() {
    $("#search").val("");
}