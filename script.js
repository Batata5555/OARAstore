function smoothOpen(cat) {
    const hero = document.getElementById('hero-section');
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    // تصفية المنتجات
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = (card.getAttribute('data-category') === cat) ? 'block' : 'none';
    });

    // إخفاء الواجهة بحركة ناعمة
    hero.style.display = 'none';
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
    // العودة للرئيسية بإعادة التحميل لضمان ظهور الشرح الكبير
    location.reload();
}
