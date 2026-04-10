// دالة لتغيير الصورة الرئيسية في صفحة تفاصيل الغرفة
function changeImage(imageSrc) {
    // تغيير مصدر الصورة الرئيسية
    document.getElementById("mainImage").src = imageSrc;
    
    // تحديث الصورة المصغرة النشطة
    let thumbnails = document.getElementsByClassName("thumb");
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumb");
        if (thumbnails[i].src === imageSrc) {
            thumbnails[i].classList.add("active-thumb");
        }
    }
}