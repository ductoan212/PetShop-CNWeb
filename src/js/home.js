// Click product in home page

$(".item-san-pham").click(function() {
    loadProducts();
    topFunction();
});

$(".item-blog").click(function() {
    loadDetailBlog();

});

$("#read-more-about-us").click(function() {
    loadAboutUs();
    topFunction();
});