function smoothOpen(cat) {
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    // 1. تصفية المنتجات أولاً وهي مخفية
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = (card.getAttribute('data-category') === cat) ? 'block' : 'none';
    });

    // 2. تلاشي القائمة الرئيسية للخارج
    mainMenu.style.opacity = '0';
    mainMenu.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        mainMenu.style.display = 'none';
        
        // 3. إظهار قسم المنتجات "ككتلة" أولاً ثم تفعيل الشفافية
        productsSection.style.display = 'block';
        backBtn.style.display = 'block';
        
        setTimeout(() => {
            productsSection.style.opacity = '1';
            productsSection.style.transform = 'translateY(0)';
        }, 50); // تأخير بسيط جداً لضمان ثبات العرض

        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 400); 
}

function smoothBack() {
    // العودة للرئيسية بنعومة
    const mainMenu = document.getElementById('main-menu');
    const productsSection = document.getElementById('products-section');
    const backBtn = document.getElementById('backBtn');

    productsSection.style.opacity = '0';
    setTimeout(() => {
        productsSection.style.display = 'none';
        backBtn.style.display = 'none';
        mainMenu.style.display = 'grid';
        setTimeout(() => { mainMenu.style.opacity = '1'; }, 50);
    }, 400);
}
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
