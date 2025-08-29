let cart = document.getElementById('cart');
let allBtn = document.querySelectorAll('.btn')
let total = 0;

for(let btn of allBtn){
    btn.addEventListener('click', function(){
        total++;
        cart.innerHTML = total;
    })
}