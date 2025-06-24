document.addEventListener('DOMContentLoaded', () => {
    const learnMoreLinks = document.querySelectorAll('.learn-more');
    const textContainers = document.querySelectorAll('.text-container');

    learnMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            textContainers.forEach(container => {
                if (container.id === targetId) {
                    container.style.display = container.style.display === 'block' ? 'none' : 'block';
                } else {
                    container.style.display = 'none';
                }
            });
        });
    });

    textContainers.forEach(container => {
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.classList.add('close');
        closeButton.addEventListener('click', () => {
            container.style.display = 'none';
        });
        container.appendChild(closeButton);
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function changeImage() {
    images[currentIndex].classList.remove('active'); // Remove active class from current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].classList.add('active'); // Add active class to the next image
}

setInterval(changeImage, 5000); // Change image every 5 seconds
