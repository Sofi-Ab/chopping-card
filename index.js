

const all_datas = [
    {
        description: 'Ensemble ',
        image: './images/ustensiles.png',
        prix: '45$',
        categorie: 'Fouet'
    },
    {
        description: 'Ensemble de 4',
        image: './images/ustencil6.png',
        prix: '20$',
        categorie: 'Fouet'
    },

    {
        description: 'Ensemble de 7',
        image: './images/ustencil.7.avif',
        prix: '40$',
        categorie: 'Fouet'
    },
// categories des ensembles
    {
        description: 'cuiere',
        image: './images/img8.avif',
        prix: '30$',
        categorie: 'Ensemble'
    },
    
    {
        description: 'cuiere bois',
        image: './images/img5.avif',
        prix: '10$',
        categorie: "Ensemble"
    },
    {
        description: 'cuiere bois',
        image: './images/img4avif.avif',
        prix: '20$',
        categorie: "Ensemble"
    },



    {
        description: 'Ensemble pour enfant',
        image: './images/img13.avif',
        prix: '15$',
        categorie: "Ensemble"
    },

    {
        description: 'poelle antiadesive',
        image: './images/poelle10.png',
        prix: '15$',
        categorie: "Poelles"
    },
    {
        description: 'poelle antiadesive duo',
        image: './images/poelle.9.avif',
        prix: '15$',
        categorie: "Poelles"
    },
    {
        description: 'poelle classique ',
        image: './images/img7.png',
        prix: '15$',
        categorie: "Poelles"
    },

    {
        description: 'fouet simple',
        image: './images/img14.avif',
        prix: '15$',
        categorie: "Bois"
    },
    {
        description: 'fouet double',
        image: './images/img1avif.avif',
        prix: '15$',
        categorie: "Bois"
    },
    {
        description: 'fouet bois ',
        image: './images/img2.png',
        prix: '15$',
        categorie: "Bois"
    }
]


const produit = document.querySelector('.product-container')
const generate = (el)=>{
    produit.innerHTML = ''
    for (let i = 0; i < el.length; i++) {
        const element = el[i];
        produit.innerHTML += `<div class="box">
    <img src="${element.image}" alt="img">
    <h3>${element.description}</h3>
    <div class="content">
        <span>$100</span>
        <a href="">add to cart</a>
    </div>
    </div>`
    }
}
generate(all_datas)




let filter;
//------------------------filter

let cards_boutton = document.querySelectorAll('.btn')
cards_boutton.forEach(element => {
    element.addEventListener("click", function() {
        if (element.textContent === "Ensemble") {
           filter = all_datas;
        }
        else{
            filter = all_datas.filter((data) =>data.categorie === element.textContent.trim());
        }
        generate(filter);
    
      });
});


/* ********************input au click**************** */
let inputCard = document.getElementById('search')
inputCard.addEventListener('input', () => {
    let inputValue = inputCard.value.toLowerCase().trim()
    filter = all_datas.filter((data) => data.categorie.toLowerCase().includes(inputValue) || data.description.toLowerCase().includes(inputValue) || data.prix.toLowerCase().includes(inputValue) );
    generate(filter);
   });


  /* ********************open and close**************** */

const cart_icon = document.querySelector(".header-icon");
const cart = document.querySelector('.cart-box');
const close_cart =document.querySelector('#cart-close');

cart_icon.addEventListener("click", () => {
cart.classList.remove("active");
});

close_cart.addEventListener('click', () => {
    cart.classList.remove("active");
});


// Start when the document is ready
if(document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded');
}else{
    start();
}
function start(){

}

// Ajouter un evenement
console.log(cartRemove_btns);
function addEvents(){
    // reamove items form cart
    let cartRemove_btns = document.querySelectorAll('#cart-remove');
    
    cartRemove_btns.forEach(btn => {
        btn.addEventListener('click', handle_removeCartItem);
    });
}
function handle_removeCartItem(){
    this.cart.remove();
}