/* ==========================
   BACKGROUND MUSIC
========================== */

const bgMusic = new Audio('assets/background-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;

/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        // Play background music
        bgMusic.play().catch(err => console.log("Autoplay might be blocked"));

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});


/* ==========================
   HERO PARALLAX
========================== */

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    if(heroBg){

        heroBg.style.transform =
            `translateY(${scrolled * 0.35}px) scale(1.08)`;

    }

});


/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".calendar-card,.calendar-text").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================
   FLOATING FLOWERS
========================== */

const flowers = document.querySelector(".flowers");

for(let i=0;i<25;i++){

    const flower = document.createElement("span");

    flower.style.left = Math.random()*100+"%";

    flower.style.animationDuration =
        (10 + Math.random()*10)+"s";

    flower.style.animationDelay =
        Math.random()*8+"s";

    flower.style.opacity =
        Math.random();

    flower.style.width =
        (10 + Math.random()*14)+"px";

    flower.style.height =
        flower.style.width;

    flowers.appendChild(flower);

}


/* ==========================
   SCROLL BUTTON EFFECT
========================== */

const scrollBtn = document.querySelector(".scroll-btn");

scrollBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    document.querySelector("#calendar").scrollIntoView({

        behavior:"smooth"

    });

});


/* ==========================
   TITLE ANIMATION
========================== */

const title = document.querySelectorAll(".hero-content h1");

title.forEach((item,index)=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";

    setTimeout(()=>{

        item.style.transition="1s";

        item.style.opacity="1";

        item.style.transform="translateY(0)";

    },2200+(index*400));

});


/* ==========================
   GOLD BUTTON GLOW
========================== */

setInterval(()=>{

    scrollBtn.classList.toggle("glow");

},1000);
