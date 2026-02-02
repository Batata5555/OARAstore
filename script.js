let cart = [];
let total = 0;

// وظيفة الفئات (تصفية المنتجات)
function filterProducts(category, event) {
    // 1. تحديث شكل الأزرار (إزالة active من الجميع ووضعها على المختار)
    const links = document.querySelectorAll('.categories a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');

    // 2. تصفية المنتجات في الشبكة
    const products = document.querySelectorAll('.card');
    products.forEach(product => {
        const productCat = product.getAttribute('data-category');
        if (category === 'all' || productCat === category) {
            product.style.display = 'block'; // إظهار
        } else {
            product.style.display = 'none'; // إخفاء
        }
    });
}

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
    alert("تمت إضافة " + name + " للسلة!");
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
    if(!city) return alert("يرجى إدخال المدينة");
    
    let msg = `طلب جديد من OARA STORE:\n\n`;
    cart.forEach(i => msg += `• ${i.name} - ${i.price}₪\n`);
    msg += `\n📍 المدينة: ${city}\n💳 الدفع: ${payment}\n💰 المجموع: ${total} ₪`;
    
    window.open(`https://wa.me/970568486065?text=${encodeURIComponent(msg)}`);
}

function smoothOpen(cat) {
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    // تلاشي الواجهة الرئيسية
    mainMenu.style.opacity = '0';
    mainMenu.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        mainMenu.style.display = 'none';
        
        // إظهار المنتجات بنعومة
        productsSection.style.display = 'block';
        backBtn.style.display = 'block';
        
        // تفعيل الأنيميشن بعد لحظة بسيطة
        setTimeout(() => {
            productsSection.style.opacity = '1';
            productsSection.style.transform = 'translateY(0)';
        }, 50);

        filterProducts(cat);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500);
}

function smoothBack() {
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    productsSection.style.opacity = '0';
    productsSection.style.transform = 'translateY(20px)';

    setTimeout(() => {
        productsSection.style.display = 'none';
        backBtn.style.display = 'none';
        
        mainMenu.style.display = 'grid';
        setTimeout(() => {
            mainMenu.style.opacity = '1';
            mainMenu.style.transform = 'translateY(0)';
        }, 50);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500);
}

function filterProducts(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = (card.getAttribute('data-category') === category) ? 'block' : 'none';
    });
}
