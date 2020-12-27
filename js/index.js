// ==================== Create auto product ==================== 
const listProduct = [{
        id: "pd-001",
        nameImg: "san_pham_1.jpg",
        name: "Temp product 1",
        oldPrice: "120.000 VNĐ",
        newPrice: "99.000 VNĐ"
    },
    {
        id: "pd-002",
        nameImg: "san_pham_2.jpg",
        name: "Temp product 2",
        oldPrice: "100.000 VNĐ",
        newPrice: "79.000 VNĐ"
    },
    {
        id: "pd-003",
        nameImg: "san_pham_3.jpg",
        name: "Temp product 3",
        oldPrice: "1220.000 VNĐ",
        newPrice: "700.000 VNĐ"
    },
    {
        id: "pd-004",
        nameImg: "san_pham_4.jpg",
        name: "Temp product 4",
        oldPrice: "20.000 VNĐ",
        newPrice: "9.000 VNĐ"
    },
    {
        id: "pd-005",
        nameImg: "san_pham_5.jpg",
        name: "Temp product 5",
        oldPrice: "20.000 VNĐ",
        newPrice: "15.000 VNĐ"
    },
    {
        id: "pd-006",
        nameImg: "san_pham_6.jpg",
        name: "Temp product 6",
        oldPrice: "120.000 VNĐ",
        newPrice: "99.000 VNĐ"
    },
    {
        id: "pd-007",
        nameImg: "san_pham_1.jpg",
        name: "Temp product 7",
        oldPrice: "120.000 VNĐ",
        newPrice: "99.000 VNĐ"
    },
    {
        id: "pd-008",
        nameImg: "san_pham_2.jpg",
        name: "Temp product 8",
        oldPrice: "100.000 VNĐ",
        newPrice: "79.000 VNĐ"
    },
    {
        id: "pd-009",
        nameImg: "san_pham_3.jpg",
        name: "Temp product 9",
        oldPrice: "1220.000 VNĐ",
        newPrice: "700.000 VNĐ"
    },
    {
        id: "pd-010",
        nameImg: "san_pham_4.jpg",
        name: "Temp product 10",
        oldPrice: "20.000 VNĐ",
        newPrice: "9.000 VNĐ"
    },
    {
        id: "pd-011",
        nameImg: "san_pham_5.jpg",
        name: "Temp product 11",
        oldPrice: "20.000 VNĐ",
        newPrice: "15.000 VNĐ"
    },
    {
        id: "pd-012",
        nameImg: "san_pham_6.jpg",
        name: "Temp product 12",
        oldPrice: "120.000 VNĐ",
        newPrice: "99.000 VNĐ"
    },
]

function createProduct(n) {
    return `<div class="product-item" id="${listProduct[n]['id']}">
        <div class="img-product" style="background-image:  url(../assets/images/${listProduct[n]['nameImg']});"></div>
        <div class="info-product">
            <p class="name-product">${listProduct[n]['name']}</p>
            <p class="old-price-product">${listProduct[n]['oldPrice']}</p>
            <p class="new-price-product">${listProduct[n]['newPrice']}</p>
        </div>
        <div class="add-to-cart">
            <button>Thêm vào giỏ</button>
        </div>
    </div>`;
}

function createAllProduct() {
    for (var i = 0; i < 12; i++)
        $('#lst-product').append(createProduct(i));
}

// ==================== routing navigation ==================== 
function closeBurger() {
    if ($(window).width() <= 1024)
        $('.burger').click();
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
    createAllProduct();
    closeBurger();
}

function loadBlogs() {
    $("#main").load("../pages/blogs.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-blogs").addClass("link-active");
    document.title = "PetShop | Bài viết";
    closeBurger();
}

function loadDetailBlog() {
    $("#main").load("../pages/detail-blog.html");
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-blogs").addClass("link-active");
    document.title = "PetShop | Bài viết";
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
    $("#main").load("../pages/account.html");
    $(".nav-links, li, a").removeClass("link-active");
    document.title = "PetShop | Tài khoản";
}

function loadCart() {
    $("#main").load("../pages/cart.html");
    $(".nav-links, li, a").removeClass("link-active");
    document.title = "PetShop | Giỏ hàng";
}

$(document).ready(function() {
    loadHome();
});

// ====================================== Nav ======================================
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

// ====================================== Drop down for account zone ======================================
function dropdownAccount() {
    document.getElementById("accountDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.account-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Slide show
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);


function clearSubcribeForm() {
    $('#emailSubcribe').val('');
}


function clearSearch() {
    $('#search').val('');
}