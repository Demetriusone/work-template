import 'babel-polyfill';
import 'svgxuse';
import './Common';


const menu = [
    {
        id: 1,
        title: "Nike - Кроссовки Air Max Exosense SE",
        category: "nike",
        price: 2799,
        img: "./img/AW20-OBM1G4_00X_F1.webp",
        desc: `Кроссовки из коллекции Nike. Модель выполнена из сочетания текстильного и синтетического материалов.`,
    },
    {
        id: 2,
        title: "Nike - Кроссовки Legend Essential 2",
        category: "nike",
        price: 2599,
        img: "./img/nike-02.webp",
        desc: `Кроссовки из коллекции Nike. Модель выполнена из сочетания текстильного и синтетического материалов. `,
    },
    {
        id: 3,
        title: "Nike - Кроссовки Superrep Go",
        category: "nike",
        price: 6.99,
        img: "./img/nike-03.webp",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Puma - Кроссовки X-Ray",
        category: "puma",
        price: 2099,
        img: "./img/puma-01.webp",
        desc: `Кроссовки из коллекции Puma. Модель выполнена из сочетания текстильной ткани и искусственной кожи.
- SoftFoam - мягкая и амортизирующая стелька, идеально прилегающая к стопе. `,
    },
    {
        id: 5,
        title: "Puma - Кроссовки RS-Fast Mix",
        category: "puma",
        price: 3599,
        img: "./img/puma-02.webp",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Puma - Кроссовки X-Ray",
        category: "puma",
        price: 2099,
        img: "./img/puma-03.webp",
        desc: `Кроссовки из коллекции Puma. Модель выполнена из сочетания искусственной кожи и текстильного материала.`,
    },
    {
        id: 7,
        title: "adidas - Кроссовки Fluidstreet",
        category: "adidas",
        price: 8.99,
        img: "./img/adidas-01.webp",
        desc: `Кроссовки из коллекции adidas. Модель выполнена из сочетания текстильного и синтетического материалов. `,
    },
    {
        id: 8,
        title: "adidas - Кроссовки Courtsmash",
        category: "adidas",
        price: 1699,
        img: "./img/adidas-02.webp",
        desc: `Кроссовки из коллекции adidas. Модель выполнена из сочетания натуральной кожи и текстильного материала.  `,
    },
    {
        id: 9,
        title: "adidas - Кроссовки Galaxy 5",
        category: "adidas",
        price: 1299,
        img: "./img/adidas-03.webp",
        desc: `Кроссовки из коллекции adidas. Модель выполнена из сочетания текстильной ткани и искусственной кожи.`,
    },
];


const sectionCenter = document.querySelector('.section-center')


window.addEventListener("DOMContentLoaded", function (){
    let displayMenu = menu.map(function (item){
        return `<article class="menu-item">
<img src=${item.img} alt=${item.title} />
        <div>
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price} UAH</h4>
        <p class="item-text">${item.desc}</p>
        </header>
        </div>
        </article>
        `
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})


let num  = 10;

 checkjs: for(let i = 2; i < num; i++) {
     console.log(`this is i ${i}`)
     for(let j = 2; j < i; j++) {
        console.log(`this is j  ${j}`);
        if(i % j === 0) continue checkjs ;

    }
    console.log(`this is integer   ${i}`);
}






