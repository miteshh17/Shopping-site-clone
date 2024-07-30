let cart = [];
let total = 0;

function addToCart(dress, price, imageSrc) {
    cart.push({ dress, price, imageSrc });
    total += price;
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = item.imageSrc;
        img.alt = item.dress;
        img.style.width = '50px';
        img.style.height = 'auto';
        li.appendChild(img);

        const text = document.createTextNode(` ${item.dress} - Rs ${item.price.toFixed(2)}`);
        li.appendChild(text);

        cartElement.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);

    // Show "Buy Now" button if cart is not empty
    const buyNowButton = document.getElementById('buy-now');
    if (cart.length > 0) {
        buyNowButton.style.display = 'block';
    } else {
        buyNowButton.style.display = 'none';
    }
}

function buyNow() {
    alert('Thank you for your purchase! This is a dummy transaction.');
    cart = [];
    total = 0;
    updateCart();
}
