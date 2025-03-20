let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    let product = { name: productName, price: price };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

function viewCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems && cartItems.length > 0) {
        let cartSummary = cartItems.map(item => `${item.name} - ${item.price} VNĐ`).join('\n');
        alert(`Giỏ hàng:\n${cartSummary}`);
    } else {
        alert('Giỏ hàng của bạn hiện đang trống.');
    }
}
