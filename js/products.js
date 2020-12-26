import { products } from "./data.js";

const listProducts = document.querySelector(".list-products");
const cartOverlay = document.querySelector(".cart-overlay");
const cartOpenBtn = document.querySelector(".cart-open-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartProducts = document.querySelector(".cart-products");
let cart = [];
window.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  cart = getItemFromLocal("cart");
  changeCart();
});
const getItemFromLocal = (list) => {
  return localStorage.getItem(list) ? JSON.parse(localStorage.getItem(list)) : [];
};
const setItemFromLocal = (list, value) => {
  localStorage.setItem(list, JSON.stringify(value));
};
const renderProducts = (products) => {
  const result = products.map((product) => {
    return `<article class="product-item " data-id="${product.id}">
    <div class="img-product"><img src='./assets/images/${product.image}' alt=${product.title}/></div>
    <div class="info-product">
      <p class="name-product">${product.title}</p>
      <p class="old-price-product">${product.price} VNĐ</p>
      <p class="new-price-product">${
        product.sale ? (product.price - product.price * (30 / 100)).toFixed(0) : product.price
      } VNĐ</p>
    </div>
    <div class="add-to-cart">
      <button>Thêm vào giỏ</button>
    </div>
  </article>`;
  });
  listProducts.innerHTML = result.join("");
  const btnAddToCart = document.querySelectorAll(".add-to-cart");
  btnAddToCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = e.currentTarget.parentElement;
      const id = item.dataset.id;
      const product = products.find((item) => item.id == id);
      if (cart.some((cartItem) => cartItem.id == id)) {
        cartOverlay.classList.add("show");
        changeCart();
      } else {
        cart.push(product);
      }
    });
  });
};
cartOpenBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
  changeCart();
});
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});
const listCartItems = () => {
  return cart
    .map((product) => {
      return ` <article class="cart-product" data-id=${product.id}>
    <img src="./assets/images/${product.image}" alt=${product.title}>
    <div class="detail-product">
      <h3 class="title">${product.title}</h3>
      ${product.status ? '<span class="icon"><i class="fas fa-check-circle"></i></span>' : ""}
      
      <h5 class="price">${product.price}</h5>
    </div>
    <div class='btn-center'>
      <button class="remove-product"><i class="fas fa-trash remove-product-icon"></i></button>
    </div>
  </article>`;
    })
    .join("");
};
const renderCartProducts = () => {
  const result = listCartItems();
  const priceTotal = document.querySelector(".price-total");
  const price = cart.reduce((total, item) => {
    if (item.status === false) {
      return total + item.price;
    }
    return total;
  }, 0);
  priceTotal.innerHTML = `${price} VND`;
  cartProducts.innerHTML = result;
};
const changeCart = () => {
  renderCartProducts();
  setItemFromLocal("cart", cart);
};
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-product-icon")) {
    const id = e.target.parentElement.parentElement.parentElement.dataset.id * 1;
    cart = cart.filter((product) => product.id !== id);
    console.log(cart.filter((product) => product.id !== id));
    changeCart();
  }
  if (e.target.classList.contains("clear-btn")) {
    cart = [];
    changeCart();
  }
  if (e.target.classList.contains("checkout-btn")) {
    cart = cart.map((item) => ({ ...item, status: true }));
    changeCart();
  }
});
const controlOption = document.querySelector(".control-option");
controlOption.addEventListener("change", () => {
  if (controlOption.value === "inc") {
    const newProducts = products.sort((a, b) => {
      if (a.sale === false && b.sale === false) {
        return a.price - b.price;
      } else if (a.sale === true && b.sale === false) {
        return (a.price - a.price * (30 / 100)).toFixed(0) - b.price;
      } else if (a.sale === false && b.sale === true) {
        return a.price - (b.price - b.price * (30 / 100)).toFixed(0);
      } else {
        return (a.price - a.price * (30 / 100)).toFixed(0) - (b.price - b.price * (30 / 100)).toFixed(0);
      }
    });
    renderProducts(newProducts);
  }
  if (controlOption.value === "dec") {
    const newProducts = products.sort((a, b) => {
      if (a.sale === false && b.sale === false) {
        return b.price - a.price;
      } else if (b.sale === true && a.sale === false) {
        return (b.price - b.price * (30 / 100)).toFixed(0) - a.price;
      } else if (b.sale === false && a.sale === true) {
        return b.price - (a.price - a.price * (30 / 100)).toFixed(0);
      } else {
        return (b.price - b.price * (30 / 100)).toFixed(0) - (a.price - a.price * (30 / 100)).toFixed(0);
      }
    });
    renderProducts(newProducts);
  }
});
