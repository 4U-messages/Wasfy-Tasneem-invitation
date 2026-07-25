const enterBtn = document.getElementById("enterBtn");
const intro = document.querySelector(".intro");
const invite = document.getElementById("invite");
const music = document.getElementById("music");

// --------------------
// Music
// --------------------

music.volume = 0.5;

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    musicStarted = true;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked.");
        });
    }

}

// محاولة التشغيل بمجرد فتح الموقع
window.addEventListener("load", () => {
    startMusic();
});

// أول تفاعل من المستخدم
document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("scroll", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });


// --------------------
// Open Invitation
// --------------------

enterBtn.addEventListener("click", () => {

    startMusic();

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        invite.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

});


// --------------------
// Scroll Animation
// --------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".content").forEach(el => {
    observer.observe(el);
});


// --------------------
// Disable Text Selection
// --------------------

document.addEventListener("selectstart", (e) => {
    e.preventDefault();
});


// --------------------
// Disable Image Drag
// --------------------

document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
});


// --------------------
// Button Hover Effect
// --------------------

enterBtn.addEventListener("mousemove", (e) => {

    const rect = enterBtn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    enterBtn.style.setProperty("--x", `${x}px`);
    enterBtn.style.setProperty("--y", `${y}px`);

});
