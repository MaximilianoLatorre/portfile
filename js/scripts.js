/* ========== Pre-Loader ========== */
window.addEventListener("load", function () {
    const $loader = document.querySelector(".container_loader");
    setTimeout(function () {
        $loader.classList.add("fade");
    }, 3000);
});
/* ========== End Pre-Loader ========== */

const ul = document.getElementById("ul");

ul.addEventListener("click", (e) => {
    for (let link of ul.children) {
        link.querySelector("a").classList.remove("active");
    }
    e.target.classList.add("active");
});

/* active mobile nav */

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
    duration: 1000,
    reset: true,
    useDelay: "onload",
});

sr.reveal(`.logo`, {
    origin: "left",
    reset: false,
    delay: 3300,
    useDelay: "once",
});

sr.reveal(`.nav_link_desk`, {
    origin: "right",
    interval: 200,
    reset: false,
    delay: 3500,
    useDelay: "once",
});

sr.reveal(`.link-icon`, {
    origin: "top",
    interval: 200,
    reset: true,
});

sr.reveal(`.card, .work-card, .skill_item`, {
    origin: "bottom",
    interval: 200,
    reset: true,
});

sr.reveal(`.title, .works__description, .contact-card`, {
    distance: "0px",
    opacity: 0,
});

sr.reveal(`.hello, .welcome`, {
    origin: "bottom",
    interval: 300,
    reset: true,
    delay: 4200,
    useDelay: "once",
});

sr.reveal(`.name-header`, {
    duration: 1500,
    distance: "0px",
    opacity: 0,
    delay: 3300,
    reset: false,
    useDelay: "once",
});

/**
 * FORM VALIDATION
 */
const $formMessage = document.getElementById("message");
let pattern = $formMessage.dataset.pattern;
let regex = new RegExp(pattern);

const $span = document.createElement("span");
$span.classList.add("message-error", "none");
$span.textContent = $formMessage.title;
$formMessage.insertAdjacentElement("afterend", $span);

$formMessage.addEventListener("keyup", (e) => {
    console.log(pattern);
    console.log(regex.exec($formMessage.value));
    return !regex.exec($formMessage.value)
        ? $span.classList.remove("none")
        : $span.classList.add("none");
});
