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

/* ========== FORM VALIDATION ========= */

const $formMessage = document.getElementById("message");
let pattern = $formMessage.dataset.pattern;
let regex = new RegExp(pattern);

const $span = document.createElement("span");
$span.classList.add("message-error", "none");
$span.textContent = $formMessage.title;
$formMessage.insertAdjacentElement("afterend", $span);

$formMessage.addEventListener("keyup", (e) => {
    return !regex.exec($formMessage.value)
        ? $span.classList.remove("none")
        : $span.classList.add("none");
});

/* ========== FORMSUBMIT ========= */

const contactForm = () => {
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target);

        fetch("https://formsubmit.co/ajax/62987e9729982c507c0906c6046f216f", {
            method: "POST",
            body: new FormData(e.target),
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
                console.log(json);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    contactForm();
});
