// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "all 0.8s ease";
    observer.observe(card);
});

// Card tilt effect
cards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;
        const rotateX = (0.5 - y / rect.height) * 20;

        card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

// Hero title animation
const title = document.querySelector(".hero h1");

setInterval(() => {

    title.style.textShadow =
    "0 0 15px #ff003c, 0 0 35px #b400ff";

    setTimeout(() => {

        title.style.textShadow =
        "0 0 25px #ff003c";

    },700);

},2000);

// Welcome message
window.addEventListener("load",()=>{

    setTimeout(()=>{

        alert("❤️ Welcome ENGENE! Enjoy the ENHYPEN BIAS website ❤️");

    },500);

});
