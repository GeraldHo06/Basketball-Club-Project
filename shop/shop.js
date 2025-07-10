function filterItems(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn =>
    btn.textContent.toLowerCase().includes(category)
  );
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.shop-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

let cart = [];

function addToCartElement(button) {
  const card = button.closest('.shop-card');
  const id = card.dataset.id;
  const title = card.dataset.title;
  const price = parseFloat(card.dataset.price);

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, title, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>${item.title} - RM${item.price.toFixed(2)}</div>
      <div class="cart-controls">
        <button onclick="changeQuantity('${item.id}', -1)">➖</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${item.id}', 1)">➕</button>
      </div>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: RM${total.toFixed(2)}`;
}

function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  updateCart();
}

function showCheckout() {
  if (cart.length === 0) {
    alert("Please add something to the cart before checkout.");
    return;
  }

  document.getElementById('checkout-form').style.display = 'block';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

document.getElementById('checkoutform').addEventListener('submit', function (e) {
  e.preventDefault();

  const thankYou = document.getElementById('thank-you');

  document.getElementById('fullname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('address').value = '';

  cart = [];
  updateCart();

  thankYou.style.display = 'block';

  setTimeout(() => {
    thankYou.style.display = 'none';
    document.getElementById('checkout-form').style.display = 'none';
  }, 3000);
});
