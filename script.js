function smoothOpen(cat) {
    const welcomeArea = document.getElementById('welcome-area');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    // 1. تصفية المنتجات
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = (card.getAttribute('data-category') === cat) ? 'block' : 'none';
    });

    // 2. إخفاء الشرح والأقسام فوراً لتوفير مساحة
    welcomeArea.style.display = 'none';

    // 3. إظهار المنتجات وحدها
    productsSection.style.display = 'block';
    backBtn.style.display = 'block';
    
    setTimeout(() => {
        productsSection.style.opacity = '1';
    }, 50);

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function smoothBack() {
    location.reload(); 
}
