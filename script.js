const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("music");

// =======================
// Music
// =======================

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    musicStarted = true;

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Autoplay blocked.");
    });

}

// محاولة تشغيلها أول ما الصفحة تفتح
window.addEventListener("load", () => {
    startMusic();
});

// أول لمسة أو كليك أو سكرول
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("scroll", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });

// =======================
// Open Invitation
// =======================

enterBtn.addEventListener("click", () => {

    startMusic();

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        main.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});

// =======================
// Countdown
// =======================

const targetDate = new Date("August 7, 2026 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);

// =======================
// Disable Drag Images
// =======================

document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
});

// =======================
// Disable Text Selection
// =======================

document.addEventListener("selectstart", e => {
    e.preventDefault();
});
