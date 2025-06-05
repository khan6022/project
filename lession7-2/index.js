const closeButton = document.querySelector('.header-close');
const openButton = document.querySelector('.header-bar');
const headerMenu = document.querySelector('.header-menu');
closeButton.addEventListener('click', () => {
    headerMenu.classList.add('hide');
    headerMenu.classList.remove('show');    
});
openButton.addEventListener('click', () => {
    headerMenu.classList.add('show');
    headerMenu.classList.remove('hide');     
});


// const MENU = document.querySelectorAll('.header-item');
// const ARTICLE = document.querySelector('.article-container');

// console.log(MENU, ARTICLE);

// MENU.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log('Clicked!!!' , item.innerHTML);
//         ARTICLE.innerHTML = item.innerHTML;
//     });
// });
// HOME.addEventListener('click', () => {
//     console.log('Home!!!')   
// });
// ABOUT_US.addEventListener('click', () => {
//     console.log('About us!!!')   
// });

const MENU_ITEMS = document.querySelectorAll('.header-item');
const PAGES = document.querySelectorAll('.page');
console.log(MENU_ITEMS);
MENU_ITEMS.forEach((item, index) => {
    item.addEventListener('click', () => {
        PAGES.forEach((child) => {
            child.classList.remove('show');
            child.classList.add('hide');
        });
        console.log(PAGES[index]);
        PAGES[index].classList.add('show');
        PAGES[index].classList.remove('hide');
    });
});    