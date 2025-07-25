let btn = document.querySelectorAll('.btn')

btn.forEach(btn => {
    btn.addEventListener('click', function(){
        alert("Flower Added to Cart");
    });
});