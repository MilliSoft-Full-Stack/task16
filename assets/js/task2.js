document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../img/rose1.png',
        '../img/rose2.png',
        '../img/rose3.png',
        '../img/rose4.png',
        '../img/rose5.png'
    ];

    let currentIndex = 0;
    const mainImage = document.querySelector('.main img');
    const leftArrow = document.querySelector('#left-arrow');
    const rightArrow = document.querySelector('#right-arrow');
    const image = document.querySelectorAll('.all img');

    function showImage(index) {
        mainImage.src = images[index];
    }

    leftArrow.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    rightArrow.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    image.forEach((image, index) => {
        image.addEventListener('click', function() {
            currentIndex = index;
            showImage(currentIndex);
        });
    });
});