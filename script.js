
var n = 1;  // Declare n outside the function to persist its state

function onClickMenu() {
    var navBar = document.querySelector('.nav-bar');
    var Menu = document.querySelector('.menu');

    if (navBar && Menu) {
        if (n === 1) {
            navBar.style.display = 'block';
            Menu.classList.add('icon');
            n = 0;
        } else {
            navBar.style.display = 'none';
            Menu.classList.remove('icon');
            n = 1;
        }
    }
}
