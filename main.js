const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const room = document.getElementById("room");
const total = document.getElementById("total");
const form = document.getElementById("bookingForm");
const popup = document.getElementById("popup");

// حساب السعر تلقائي
function calculatePrice() {
    let inDate = new Date(checkin.value);
    let outDate = new Date(checkout.value);
    let price = parseInt(room.value);

    if (inDate && outDate && price) {
        let days = (outDate - inDate) / (1000*60*60*24);

        if (days > 0) {
            let totalPrice = days * price;
            total.innerText = "Total: " + totalPrice + " DA";
        } else {
            total.innerText = "Total: 0 DA";
        }
    }
}

// Event listeners
checkin.addEventListener("change", calculatePrice);
checkout.addEventListener("change", calculatePrice);
room.addEventListener("change", calculatePrice);

// تأكيد الحجز
form.addEventListener("submit", function(e) {
    e.preventDefault();
    popup.style.display = "flex";
});

// اغلاق Popup
function closePopup() {
    popup.style.display = "none";
}