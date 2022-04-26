const quantities = document.querySelectorAll('.quantity');
const prices = document.querySelectorAll('.product-price');
const subTotalValue = document.querySelector('#subtotal');
const totalValue = document.querySelector('#total');

let total = 0
let subTotal = 0;

for (let i = 0; i < quantities.length; i++) {
    subTotal = 0;
    subTotal += parseInt(prices[i].innerText) * parseInt(quantities[i].defaultValue);
    total += subTotal;
}

subTotalValue.innerHTML = `&#8369;${total}`
totalValue.innerHTML = `&#8369;${total}`

