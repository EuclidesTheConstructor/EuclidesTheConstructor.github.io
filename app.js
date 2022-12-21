
const patties = document.getElementById('patties');
const cheeses = document.getElementById('cheeses');
const tomatoes = document.getElementById('tomatoes');
const lettuces = document.getElementById('lettuces');
let price = 10;
priceDisplay = `${price}$`;

const p = document.getElementById('display-price'); 
p.innerHTML = priceDisplay;
;


function addPatty() {
    const patty = document.createElement('div');
    patty.id = 'patty';
    patties.appendChild(patty);
    price += 5;
    priceDisplay = `${price}$`;
    p.innerHTML = priceDisplay;
}
function addCheese() {
    const cheese = document.createElement('div');
    cheese.id = 'cheese';
    cheeses.appendChild(cheese);
    price += 3;
    priceDisplay = `${price}$`;
    p.innerHTML = priceDisplay;
}
function addTomato() {
    const tomato = document.createElement('div');
    tomato.id = 'tomato';
    tomatoes.appendChild(tomato);
    price += 2;
    priceDisplay = `${price}$`;
    p.innerHTML = priceDisplay;
}
function addLettuce() {
    const lettuce = document.createElement('div');
    lettuce.id = 'lettuce';
    lettuces.appendChild(lettuce);
    price += 1;
    priceDisplay = `${price}$`;
    p.innerHTML = priceDisplay;
}
function removePatty() {
    patties.removeChild(document.getElementById('patty'));
    if  ((price - 5) >= 10){
       price -= 5;
       priceDisplay = `${price}$`;
       p.innerHTML = priceDisplay;
    }
}
function removeCheese() {
    cheeses.removeChild(document.getElementById('cheese'));
    if  ((price - 3) >= 10){
        price -= 3;
        priceDisplay = `${price}$`;
        p.innerHTML = priceDisplay;
     }
}
function removeTomato() {
    tomatoes.removeChild(document.getElementById('tomato'));
    if  ((price - 2) >= 10){
        price -= 2;
        priceDisplay = `${price}$`;
        p.innerHTML = priceDisplay;
     }
}
function removeLettuce() {
    lettuces.removeChild(document.getElementById('lettuce'));
    if  ((price - 1) >= 10){
        price -= 1;
        priceDisplay = `${price}$`;
        p.innerHTML = priceDisplay;
     }
}