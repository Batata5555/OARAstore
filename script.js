// 1. مصفوفة تخزين المنتجات في السلة
let cart = [];

// 2. دالة إضافة المنتج وتحديث العداد
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    
    // تحديث رقم العداد في الهيدر فوراً
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
    
    alert("تمت إضافة " + name + " إلى السلة بنجاح! 🛒");
}

// 3. دالة فتح نافذة السلة وعرض المحتويات
function showCart() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items-list');
    const totalDisp = document.getElementById('total-price');
    
    if (!list || !totalDisp || !modal) return;

    list.innerHTML = ""; // مسح القائمة القديمة قبل التحديث
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        list.innerHTML += `
            <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f5f5f5; direction:rtl;">
                <span>${item.name}</span>
                <span>${item.price} ₪</span>
            </div>`;
    });

    totalDisp.innerText = total;
    modal.style.display = "block"; // إظهار النافذة
}

// 4. دالة إغلاق النافذة
function closeCart() {
    document.getElementById('cart-modal').style.display = "none";
}

// 5. دالة الدفع وإرسال الطلب عبر واتساب (تم تحديث الرقم هنا)
function checkout(method) {
    if (cart.length === 0) return alert("سلتك فارغة حالياً!");

    let msg = "طلب جديد من OARA STORE:%0A";
    cart.forEach(i => msg += "- " + i.name + " (" + i.price + " ₪)%0A");
    let total = cart.reduce((s, i) => s + i.price, 0);
    msg += "%0Aالإجمالي الكلي: " + total + " ₪";

    if (method === 'whatsapp') {
        // تم وضع رقمك المعتمد: 970568486065
        window.open("https://wa.me/970568486065?text=" + msg); 
    } else {
        alert("تم استلام طلبك (دفع عند الاستلام). شكراً لثقتك بنا!");
        cart = [];
        const count = document.getElementById('cart-count');
        if (count) count.innerText = "0";
        closeCart();
        location.reload();
    }
}

// 6. دالة فتح الأقسام وإخفاء الشرح (للمساحة الواسعة)
function smoothOpen(cat) {
    const welcome = document.getElementById('welcome-area');
    const section = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    if (welcome) welcome.style.display = 'none';
    if (section) section.style.display = 'block';
    if (backBtn) backBtn.style.display = 'block';
    
    document.querySelectorAll('.card').forEach(c => {
        c.style.display = (c.getAttribute('data-category') === cat) ? 'block' : 'none';
    });
    
    setTimeout(() => { 
        if (section) section.style.opacity = '1'; 
    }, 50);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function smoothBack() { location.reload(); }
