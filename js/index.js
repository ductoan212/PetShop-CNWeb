// ==================== Create auto product ==================== 
const listProduct = [{
        id: "pd-001",
        nameImg: "san_pham_1.jpg",
        name: "Temp product 1",
        oldPrice: 120,
        newPrice: 99
    },
    {
        id: "pd-002",
        nameImg: "san_pham_2.jpg",
        name: "Temp product 2",
        oldPrice: 100,
        newPrice: 79
    },
    {
        id: "pd-003",
        nameImg: "san_pham_3.jpg",
        name: "Temp product 3",
        oldPrice: 1220,
        newPrice: 700
    },
    {
        id: "pd-004",
        nameImg: "san_pham_4.jpg",
        name: "Temp product 4",
        oldPrice: 20,
        newPrice: 9
    },
    {
        id: "pd-005",
        nameImg: "san_pham_5.jpg",
        name: "Temp product 5",
        oldPrice: 20,
        newPrice: 15
    },
    {
        id: "pd-006",
        nameImg: "san_pham_6.jpg",
        name: "Temp product 6",
        oldPrice: 120,
        newPrice: 99
    },
    {
        id: "pd-007",
        nameImg: "san_pham_1.jpg",
        name: "Temp product 7",
        oldPrice: 55,
        newPrice: 23
    },
    {
        id: "pd-008",
        nameImg: "san_pham_2.jpg",
        name: "Temp product 8",
        oldPrice: 212,
        newPrice: 199
    },
    {
        id: "pd-009",
        nameImg: "san_pham_3.jpg",
        name: "Temp product 9",
        oldPrice: 100,
        newPrice: 99
    },
    {
        id: "pd-010",
        nameImg: "san_pham_4.jpg",
        name: "Temp product 10",
        oldPrice: 88,
        newPrice: 75
    },
    {
        id: "pd-011",
        nameImg: "san_pham_5.jpg",
        name: "Temp product 11",
        oldPrice: 75,
        newPrice: 23
    },
    {
        id: "pd-012",
        nameImg: "san_pham_6.jpg",
        name: "Temp product 12",
        oldPrice: 45,
        newPrice: 40
    },
]

function createProduct(n) {
    return `<div class="product-item" id="${listProduct[n]['id']}" onClick="detailProduct('${listProduct[n]['id']}')">
        <div class="img-product" style="background-image:  url(../assets/images/${listProduct[n]['nameImg']});"></div>
        <div class="info-product">
            <p class="name-product">${listProduct[n]['name']}</p>
            <p class="old-price-product">${listProduct[n]['oldPrice']}.000 VNĐ</p>
            <p class="new-price-product">${listProduct[n]['newPrice']}.000 VNĐ</p>
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

function getProductWithId(id) {
    for (var i = 0; i < listProduct.length; i++) {
        if (listProduct[i]['id'] == id)
            return listProduct[i];
    }
    return null;
}

// ==================== routing navigation ==================== 
function closeBurger() {
    var classList = document.getElementById('check-nav').className.split(/\s+/);;
    if (classList.length == 2)
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

function loadDetailProduct(id) {
    $("#main").load("../pages/detail-product.html", function() {
        var product = getProductWithId(id);
        document.getElementById('img-product').style.backgroundImage = `url(../assets/images/${product['nameImg']})`;
        document.getElementById('old-price').innerHTML = `${product['oldPrice']}.000 VNĐ`;
        document.getElementById('new-price').innerHTML = `${product['newPrice']}.000 VNĐ`;
        console.log(a);
    });
    $(".nav-links, li, a").removeClass("link-active");
    $("#to-products").addClass("link-active");
    document.title = "PetShop | Sản phẩm";
    createAllProduct();
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