document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.general a:first-child');
    const plusBtn = document.querySelector('.general a:last-child');
    const progressBar = document.querySelector('.second');
    const progressContainer = document.querySelector('.first');
    const percentageText = document.querySelector('p');

    let currentVolume = 10; 
    const step = 1; 

    
    function updateVolume(volume) {
        currentVolume = Math.min(Math.max(volume, 0), 100);
        /* if(volume>0&&volume<100) {
            currentVolume=volume
        } */
        progressBar.style.width = Math.round(currentVolume) + '%';
        percentageText.textContent = progressBar.style.width; 
    }

    
    plusBtn.addEventListener('click', function(event) {
        event.preventDefault();
        updateVolume(currentVolume + step);
    });

    
    minusBtn.addEventListener('click', function(event) {
        event.preventDefault();
        updateVolume(currentVolume - step);
    });

    
    progressContainer.addEventListener('click', function(event) {
        const clickPosition = event.offsetX;
        const containerWidth = progressContainer.clientWidth;
        const newVolume = (clickPosition / containerWidth) * 100;
        updateVolume(newVolume);
    });

    
});
