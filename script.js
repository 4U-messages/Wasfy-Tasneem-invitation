const opening = document.getElementById("opening");
const main = document.getElementById("main");

const openBtn = document.getElementById("openInvitation");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const icon = musicBtn.querySelector("i");

/* ================= Opening ================= */

openBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    opening.style.opacity = "0";
    opening.style.pointerEvents = "none";

    setTimeout(() => {

        opening.style.display = "none";

        main.classList.add("show");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },900);

});

/* ================= Music ================= */

let playing = true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        icon.classList.remove("fa-volume-high");
        icon.classList.add("fa-volume-xmark");

    }else{

        music.play();

        icon.classList.remove("fa-volume-xmark");
        icon.classList.add("fa-volume-high");

    }

    playing=!playing;

});

/* ================= Countdown ================= */

const target = new Date("August 7, 2026 19:00:00").getTime();

setInterval(()=>{

    const now = new Date().getTime();

    const diff = target-now;

    const days=Math.floor(diff/(1000*60*60*24));

    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

    const seconds=Math.floor((diff%(1000*60))/1000);

    document.getElementById("days").textContent=days;
    document.getElementById("hours").textContent=hours;
    document.getElementById("minutes").textContent=minutes;
    document.getElementById("seconds").textContent=seconds;

},1000);

/* ================= Scroll Animation ================= */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section,.card,.location-card").forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});
