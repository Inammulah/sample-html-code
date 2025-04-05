document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".seat.available");

    seats.forEach(seat => {
        seat.addEventListener("click", function () {
            if (!seat.classList.contains("booked")) {
                seat.classList.toggle("selected");
            }
        });
    });
});
