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
});

sr.reveal(`.nav_link_desk, .link-icon`, {
    origin: "top",
    interval: 200,
});

sr.reveal(`.welcome, .card, .work-card`, {
    origin: "bottom",
    interval: 200,
});

sr.reveal(`.hello, .title, .works__description, .contact-card`, {
    distance: "0px",
    opacity: 0,
});
