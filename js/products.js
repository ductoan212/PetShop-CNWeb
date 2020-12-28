$(document).ready(function() {
    createAllProduct(listProduct);
});

function detailProduct(id) {
    console.log("123");
    console.log(id);
    loadDetailProduct(id);
}
// {
//     id: "pd-001",
//     nameImg: "san_pham_1.jpg",
//     name: "Temp product 1",
//     oldPrice: 120,
//     newPrice: 99,
// },
function sortProductByPrice(list) {
    var temp = list.slice();
    for (var i = 0; i < temp.length; i++) {
        console.log(i);
        for (var j = i + 1; j < temp.length; j++) {
            if (temp[i]['newPrice'] > temp[j]['newPrice']) {
                const item = temp[i];
                temp[i] = temp[j];
                temp[j] = item;
            }
        }
    }
    return temp;
}

$("#select-sort").change(function() {
    // alert($("#select-sort").select());
    // alert($("#select-sort option:selected").val());
    const val = $("#select-sort option:selected").val();
    switch (val) {
        case "0":
            $("#lst-product").html('');
            createAllProduct(listProduct);
            console.log(listProduct)
            break;
        case "1":
            $("#lst-product").html('');
            const newList = sortProductByPrice(listProduct);
            createAllProduct(newList);
            break;
        case "2":
            $("#lst-product").html('');
            var newList2 = sortProductByPrice(listProduct);
            createAllProduct(newList2.reverse());
            break;
    }
});