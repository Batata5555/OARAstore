let cart = [];

// دالة إضافة المنتج وتحديث العداد
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    document.getElementById('cart-count').innerText = cart.length;
    alert("تمت إضافة " + name + " بنجاح! 🛒");
}

// دالة فتح السلة
function showCart() {
    const list = document.getElementById('cart-items-list');
    const totalDisp = document.getElementById('total-price');
    list.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        list.innerHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f5f5f5;">
            <span>${item.name}</span>
            <span>${item.price} ₪</span>
        </div>`;
    });
    totalDisp.innerText = total;
    document.getElementById('cart-modal').style.display = "block";
}

function closeCart() {
    document.getElementById('cart-modal').style.display = "none";
}

// دالة الدفع - تم وضع رقمك 970568486065 هنا
function checkout(method) {
    if (cart.length === 0) return alert("السلة فارغة!");
    let msg = "طلب جديد من OARA STORE:%0A";
    cart.forEach(i => msg += "- " + i.name + " (" + i.price + " ₪)%0A");
    let total = cart.reduce((s, i) => s + i.price, 0);
    msg += "%0Aالإجمالي: " + total + " ₪";

    if (method === 'whatsapp') {
        // الرقم الجديد المعتمد
        window.open("https://wa.me/970568486065?text=" + msg); 
    } else {
        alert("تم استلام طلبك (دفع عند الاستلام).");
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
}

function smoothBack() { location.reload(); }
