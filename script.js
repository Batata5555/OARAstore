let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function closePanels() {
    document.getElementById('cartPanel').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
    alert("تمت إضافة " + name + " للسلة بنجاح!");
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('total-price').innerText = total;
    const list = document.getElementById('cart-items');
    list.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee; font-size:13px">
            <span>${item.name}</span>
            <span>${item.price} ₪</span>
        </div>
    `).join('');
}

function sendToWhatsApp() {
    const city = document.getElementById('city').value;
    const payment = document.getElementById('payment').value;
    if(!city) return alert("يرجى إدخال المدينة لتوصيل الطلب");
    
    let msg = `طلب جديد من OARA STORE:\n\n`;
    cart.forEach(i => msg += `• ${i.name} - ${i.price}₪\n`);
    msg += `\n📍 المدينة: ${city}\n💳 الدفع: ${payment}\n💰 المجموع: ${total} ₪`;
    
    window.open(`https://wa.me/970568486065?text=${encodeURIComponent(msg)}`);
}

