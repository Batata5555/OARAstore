let cart = [];

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    document.getElementById('cart-count').innerText = cart.length;
    alert(`تمت إضافة ${name} إلى السلة!`);
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items-list');
    const totalDisp = document.getElementById('total-price');
    list.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        list.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:10px;"><span>${item.name}</span><span>${item.price} ₪</span></div>`;
    });
    totalDisp.innerText = total;
    modal.style.display = "block";
}

function closeCart() {
    document.getElementById('cart-modal').style.display = "none";
}

function checkout(method) {
    if (cart.length === 0) return alert("السلة فارغة!");
    let msg = "طلب جديد من OARA STORE:%0A";
    cart.forEach(i => msg += `- ${i.name} (${i.price} ₪)%0A`);
    let total = cart.reduce((s, i) => s + i.price, 0);
    msg += `%0Aالإجمالي: ${total} ₪%0Aالدفع: ${method==='wa'?'واتساب':'عند الاستلام'}`;
    
    if (method === 'whatsapp') {
        window.open(`https://wa.me/970590000000?text=${msg}`); // غير الرقم هنا
    } else {
        alert("تم استلام طلبك! سنقوم بالتواصل معك.");
        cart = []; document.getElementById('cart-count').innerText = "0";
        closeCart();
    }
}

function smoothOpen(cat) {
    document.getElementById('welcome-area').style.display = 'none';
    document.getElementById('products-section').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    document.querySelectorAll('.card').forEach(c => {
        c.style.display = (c.getAttribute('data-category') === cat) ? 'block' : 'none';
    });
    setTimeout(() => { document.getElementById('products-section').style.opacity = '1'; }, 50);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function smoothBack() { location.reload(); }
