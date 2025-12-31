let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = JSON.parse(localStorage.getItem("total")) || 0;

updateCart();

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    saveCart();
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");

    cartItems.innerHTML = "";
    cart.forEach(p => {
        cartItems.innerHTML += `<p>${p.item} - ₹${p.price}</p>`;
    });

    totalEl.innerText = total;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    alert("Order placed successfully! Total ₹" + total);
    cart = [];
    total = 0;
    saveCart();
    updateCart();
}
