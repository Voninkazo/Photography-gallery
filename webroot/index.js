console.log('it works');
// grab all necessary elements
const bigImageContainer = document.querySelector('.big_image');
const images = document.querySelectorAll('.image_container');
const largeImgSrc = document.querySelector('.big_src');
const mdImgSrc = document.querySelector('.md_src');
const smImgSrc = document.querySelector('.sm_src');
console.log(bigImageContainer);
let currentImg;

// show image
function showImage(element) {
    largeImgSrc.srcset = element.children[0].srcset;
    mdImgSrc.srcset = element.children[1].srcset;
    smImgSrc.src = element.children[2].src;
    currentImg = element;
}

// loop through each image to add event listener to show each image in the big container
images.forEach(image => {
    image.addEventListener('click', e => {
        let img = e.target.parentElement;
        showImage(img);
    })
})