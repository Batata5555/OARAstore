const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1RvIYAjv7-UEqYyZaNRNN6uY2vdwQAygdng5aPAI870M/gviz/tq?tqx=out:json';
let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const data = JSON.parse(text.substr(47).slice(0, -2));
        allProducts = data.table.rows.map(row => ({
            name: row.c[0] ? row.c[0].v : 'منتج بدون اسم',
            price: row.c[1] ? row.c[1].v : '0',
            image: row.c[2] ? row.c[2].v : '',
            category: row.c[3] ? row.c[3].v : 'عام'
        }));
        renderCategories();
    } catch (e) { console.error("خطأ في جلب البيانات من الجدول"); }
}

function renderCategories() {
    const container = document.getElementById('dynamic-categories');
    const categories = [...new Set(allProducts.map(p => p.category))];
    container.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="showCategory('${cat}')">
            <div style="font-size:40px;">🛍️</div>
            <span>${cat}</span>
        </div>`).join('');
}

function showCategory(category) {
    const list = document.getElementById('products-list');
    const filtered = allProducts.filter(p => p.category === category);
    document.getElementById('welcome-area').style.display = 'none';
    document.getElementById('products-section').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    list.innerHTML = filtered.map(p => `
        <div class="card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p class="price">${p.price} ₪</p>
            <button class="add-btn" onclick="sendOrder('${p.name}', '${p.price}')">طلب عبر واتساب 💬</button>
        </div>`).join('');
}

function sendOrder(name, price) {
    const phone = "970568486065"; // رقمك الصحيح
    const text = `مرحباً OARA STORE، أريد طلب: ${name} بسعر ${price} ₪`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

fetchProducts();
