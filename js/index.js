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
    closeBurger();
}

function loadBlogs() {
    $("#main").load("../pages/blogs.html");
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
    if (counter > 3) {
        counter = 1
    }
}, 5000);