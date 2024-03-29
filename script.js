

let productImg = document.getElementById('product-img');
let btn = document.getElementsByClassName('btn');

btn[0].onclick = function(){
    productImg.src = 'images/gallery-3.png';
    
    
    for (bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}


btn[1].onclick = function(){
    productImg.src = 'images/gallery-2.png';
     
    for (bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
btn[2].onclick = function(){
    productImg.src = 'images/gallery-4.png';
     
    for (bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}