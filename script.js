function smoothOpen(cat) {
    const hero = document.querySelector('.hero');
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    // تصفية المنتجات
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = (card.getAttribute('data-category') === cat) ? 'block' : 'none';
    });

    // إخفاء "الزحام"
    hero.style.display = 'none';
    mainMenu.style.display = 'none';

    // إظهار المنتجات في مساحة واسعة
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
