function smoothOpen(cat) {
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    // تصفية المنتجات
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = (card.getAttribute('data-category') === cat) ? 'block' : 'none';
    });

    // حركة التلاشي
    mainMenu.style.opacity = '0';
    setTimeout(() => {
        mainMenu.style.display = 'none';
        productsSection.style.display = 'block';
        backBtn.style.display = 'block';
        setTimeout(() => {
            productsSection.style.opacity = '1';
            productsSection.style.transform = 'translateY(0)';
        }, 50);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 400);
}

function smoothBack() {
    location.reload(); // أضمن طريقة للعودة لشاشة الـ 2x2 دون مشاكل في التنسيق
}
