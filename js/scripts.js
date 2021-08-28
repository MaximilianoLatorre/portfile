const ul = document.getElementById("ul");

ul.addEventListener("click", (e) => {
    for (let link of ul.children) {
        link.querySelector("a").classList.remove("active");
    }
    e.target.classList.add("active");
});

/* acvtive mobile nav */

const mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener("click", (e) => {
    for (let i of mobileNav.children) {
        i.classList.remove("active");
    }
    e.target.classList.add("active");
});

/*end acvtive mobile nav */

/* ====== HEADER SHOW/HIDE ====== */
const header = document.querySelector("#mobile-header");

let scrollShow = window.scrollY;

document.addEventListener("scroll", (e) => {
    let scrollNow = window.scrollY;
    if (scrollNow > scrollShow) {
        header.style.top = "-48px";
    } else {
        header.style.top = "0px";
    }
    scrollShow = scrollNow;
});

/* ========== SCROLL REVEAL ANIMATION ========= */
const sr = ScrollReveal({
    distance: "60px",
    duration: 2400,
    reset: true,
    useDelay: "onload",
});

sr.reveal(`.logo`, {
    origin: "left",
    reset: false,
    viewFactor: 0.2,
});

sr.reveal(`.nav_link_desk`, {
    origin: "right",
    interval: 200,
    reset: false,
});

sr.reveal(`.link-icon`, {
    origin: "top",
    interval: 200,
    reset: true,
});

sr.reveal(`.welcome, .card, .work-card, .skill_item`, {
    origin: "bottom",
    interval: 200,
    reset: true,
});

sr.reveal(`.hello, .title, .works__description, .contact-card`, {
    distance: "0px",
    opacity: 0,
});
