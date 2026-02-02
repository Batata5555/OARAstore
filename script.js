// رابط جدول البيانات الخاص بك (تم تحويله لصيغة JSON للقراءة)
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1RvIYAjv7-UEqYyZaNRNN6uY2vdwQAygdng5aPAI870M/gviz/tq?tqx=out:json';

let cart = [];
let allProducts = [];

// دالة جلب المنتجات من الجدول تلقائياً
async function fetchProducts() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const data = JSON.parse(text.substr(47).slice(0, -2));
        
        allProducts = data.table.rows.map(row => ({
            name: row.c[0].v,
            price: row.c[1].v,
            image: row.c[2].v,
            category: row.c[3] ? row.c[3].v : 'watch'
        }));
        
        console.log("تم تحميل المنتجات بنجاح من OARA STORE");
    } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
    }
}

// دالة إرسال الطلب عبر واتساب (تم تثبيت رقمك الصحيح هنا)
function checkout(method) {
    if (cart.length === 0) return alert("السلة فارغة!");

    let message = "طلب جديد من OARA STORE:%0A";
    cart.forEach(item => {
        message += `- ${item.name} (${item.price} ₪)%0A`;
    });
    message += `%0Aالمجموع: ${document.getElementById('total-price').innerText} ₪`;

    if (method === 'whatsapp') {
        // الرقم الصحيح الخاص بك لضمان وصول الرسائل
        const phone = "970568486065"; 
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    } else {
        alert("تم تسجيل طلبك (دفع عند الاستلام). سنتصل بك قريباً!");
    }
}

// تشغيل جلب البيانات عند فتح الموقع
fetchProducts();
