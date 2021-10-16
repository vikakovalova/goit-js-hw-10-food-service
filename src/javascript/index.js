import menu from '../menu.json';
import menuTemplate from '../templates/menuItems.hbs';

const menuItemsListRef = document.querySelector('.js-menu');

const menuMarkup = menuTemplate(menu);
menuItemsListRef.insertAdjacentHTML('beforeend', menuMarkup);


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

switcherRef.addEventListener('change', () => {
    if (bodyRef.classList.contains(Theme.DARK)) {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('currentTheme', 'lightTheme');

    } else {
        bodyRef.classList.add(Theme.DARK);
        switcherRef.setAttribute('checked', true);
        localStorage.setItem('currentTheme', 'darkTheme');
    };
});

window.onload = checkTheme;

function checkTheme() {
    if (localStorage.getItem('currentTheme') === 'darkTheme') {
        switcherRef.setAttribute('checked', true);
        bodyRef.classList.add(Theme.DARK);
    }
}