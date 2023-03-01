const productContainers = [...document.querySelectorAll('.product-container')];
const nextbutton = [...document.querySelectorAll('.next-button')];
const prebutton = [...document.querySelectorAll('.pre-button')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextbutton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    prebutton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})