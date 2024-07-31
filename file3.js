let cartItems = [];
let totalAmount = 0.0;

function addToCart(name, price, image) {
    cartItems.push({ name, price, image });
    totalAmount += price;
    updateCart();
}

function removeFromCart(index) {
    totalAmount -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cart = document.getElementById('cart-items');
    cart.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" height="50"> 
            ${item.name} - Rs ${item.price.toFixed(2)}
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;
        cart.appendChild(li);
    });

    document.getElementById('total').innerText = totalAmount.toFixed(2);

    const buyNowButton = document.getElementById('buy-now');
    if (cartItems.length > 0) {
        buyNowButton.style.display = 'block';
    } else {
        buyNowButton.style.display = 'none';
    }
}

function toggleCart() {
    const cart = document.getElementById('cart');
    const productList = document.getElementById('product-list');
    if (cart.style.display === 'none' || cart.style.display === '') {
        cart.style.display = 'block';
        productList.style.display = 'none';
    } else {
        cart.style.display = 'none';
        productList.style.display = 'flex';
    }
}

function buyNow() {
    alert('Thank you for your purchase!');
    cartItems = [];
    totalAmount = 0.0;
    updateCart();
    toggleCart();
}
