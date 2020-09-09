console.log('it works');
const nextArrow = document.querySelector('.arrow-next');
console.log(nextArrow);
let index = 0;

function nextImage() {
    index += 1;
    if (index > images.length - 1) {
        index = 0;
    }
}