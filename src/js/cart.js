$(document).ready(function() {
    createAllCart();
    document.getElementById("total").innerHTML = `Tổng tiền: ${calculateTotal()}.000 VNĐ`;
});