let bookingModal = document.getElementById("bookingModal");
let bookTableBtn = document.querySelector(".hero button"); // knappen i hero sektionen
let closeBtn = document.querySelector(".close-btn");

//När man klickar på "Boka bord" öppnas modalen
bookTableBtn.addEventListener("click", function () {
    bookingModal.style.display = "block";
});

// När man trycker på X
closeBtn.addEventListener("click", function () {
    bookingModal.style.display = "none";
});

//stänger modalen om man klickar utanför 
window.addEventListener("click", function (event) {
    if (event.target === bookingModal) {
        bookingModal.style.display = "none";
    }
});