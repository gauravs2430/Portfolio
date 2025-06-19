let navbar = document.querySelector(".navbar");

let height = navbar.offsetHeight;
navbar.style.top = `-${navbar.offsetHeight + 15}px`;

window.addEventListener('load', () => {
    setTimeout(() => {
        navbar.style.top = '15px';
    }, 500);
});

let lastScrollTop = 0;
window.addEventListener('scroll', function () {

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop ) {
        // Scrolling Down → Hide navbar
        navbar.style.top = `-${navbar.offsetHeight + 15}px`;
    } else {
        if (currentScroll < lastScrollTop) {
            // Scrolling Up → Show navbar
            setTimeout(() => {
                navbar.style.top = "15px";
            }, 500);
        }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
