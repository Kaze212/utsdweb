const textEl1 = document.getElementById('text1');
const textEl2 = document.getElementById('text2');
const textEl3 = document.getElementById('text3');

const text1 = 'This website most Likely about the maker which known as Zidan.'
const text2 = '"Close Your Eyes And Let The World Paint The Thousand Pictures."'
const text3 = '"Photo Is The Closest Thing That Humanity Get To Time Machine!"';

let idx1 = 1;
let idx2 = 1;
let idx3 = 1;
let speed = 75;

function writeText() {
    textEl1.innerText = text1.slice(0, idx1);
    idx1++;

    textEl2.innerText = text2.slice(0, idx2);
    idx2++;

    textEl3.innerText = text3.slice(0, idx3);
    idx3++;

    if (idx1 > text1.length) {
        idx1 = 1;
    }

    if (idx2 > text2.length) {
        idx2 = 1; 
    }

    if (idx3 > text3.length) {
        idx3 = 1; 
    }

    setTimeout(writeText, speed);
}

writeText();
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

