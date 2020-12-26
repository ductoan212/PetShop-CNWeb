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

// ====================================== Back to Top ======================================
//Get the button
var btnToTop = document.getElementById("btnToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Slide show
// var counter = 1;
// setInterval(function() {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 3) {
//         counter = 1
//     }

// }, 5000);