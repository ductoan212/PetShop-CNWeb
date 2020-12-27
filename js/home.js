// Click product in home page

$(".item-san-pham").click(function() {
    loadProducts();
    topFunction();
});

$(".item-blog").click(function() {
    loadDetailBlog();
    topFunction();
});

$("#read-more-about-us").click(function() {
    loadAboutUs();
    topFunction();
});