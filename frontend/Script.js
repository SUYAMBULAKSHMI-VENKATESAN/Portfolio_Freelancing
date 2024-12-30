var sidemenu1 = document.getElementById("sidemenu");

function openmenu() {
    sidemenu1.style.right = "0";
}

function closemenu() {
    sidemenu1.style.right = "-200px"
}



const typed = new Typed('.multiple-text', {
    strings: ['Ghost writter', 'Artist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    showCursor: false,
});

