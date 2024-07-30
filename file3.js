let cartItems = [];
let totalAmount = 0.0;

function addToCart(name, price, image) {
    cartItems.push({ name, price, image });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cart = document.getElementById('cart-items');
    cart.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" width="50" height="50"> ${item.name} - Rs ${item.price.toFixed(2)}`;
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
    if (cart.style.display === 'none' || cart.style.display === '') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
}

function buyNow() {
    alert('Thank you for your purchase!');
    cartItems = [];
    totalAmount = 0.0;
    updateCart();
    toggleCart();
}
