var menu = document.querySelector('#menu');
var nav = document.querySelector(".navbar ul")

menu.addEventListener('click', function () {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
    }
})


