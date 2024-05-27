const navLinksConatiner = document.querySelector("#nav-container");
const navToggle = document.querySelector("#navToggle");

navToggle.addEventListener("click", () => {
    navLinksConatiner.classList.toggle("show");
    navToggle.classList.toggle("fa-bars");
    navToggle.classList.toggle("fa-close");
    document.body.classList.toggle("stop-scroll")
})
