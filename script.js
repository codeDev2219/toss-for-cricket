let coin = document.querySelector('.toss-result');
let flipbtn = document.querySelector('button');

let heads = document.getElementById('heads');
let tails = document.getElementById('tails');


flipbtn.addEventListener('click', function (c) {

    let vari = Math.floor((Math.random() * 2));

    if (vari === 1) {
        coin.innerHTML = "Head!";
        heads.style.display = 'block';
        tails.style.display = 'none';
    }
    else {
        coin.innerHTML = "Tails!";
        tails.style.display = 'block';
        heads.style.display = 'none';
    }

})