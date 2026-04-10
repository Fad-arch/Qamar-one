const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const room = document.getElementById("room");
const totalText = document.getElementById("total");
const form = document.getElementById("bookingForm");
const popup = document.getElementById("popup");

function calculateTotal() {
    if (checkin.value && checkout.value && room.value) {
        let start = new Date(checkin.value);
        let end = new Date(checkout.value);

        let days = (end - start) / (1000 * 60 * 60 * 24);

        if (days > 0) {
            let price = room.value;
            let total = days * price;
            totalText.innerText = "Total: " + total + " DA";
        } else {
            totalText.innerText = "Invalid dates";
        }
    }
}

checkin.addEventListener("change", calculateTotal);
checkout.addEventListener("change", calculateTotal);
room.addEventListener("change", calculateTotal);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    popup.style.display = "flex";
});

function closePopup() {
    popup.style.display = "none";
    form.reset();
    totalText.innerText = "Total: 0 DA";
}

