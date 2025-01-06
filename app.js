let singleItems = Array.from(document.querySelectorAll('.single-item'));
let perviewSection = document.querySelector('.preview');
let cross = document.querySelector('.cross');
let previewImg = document.querySelector('.preview-img');
let rightArrow = document.querySelector('.right');
let leftArrow = document.querySelector('.left'); // Fixed selector
let currentIndex = 0;

singleItems.map((el, index) => {
    el.addEventListener('click', function () {
        // Activate preview section
        perviewSection.classList.add('preview-active');
        currentIndex = index; // Set the current index
        previewImg.src = singleItems[currentIndex].src; // Show the clicked image

        // Right arrow functionality
        rightArrow.addEventListener('click', function () {
            currentIndex++;
            if (currentIndex >= singleItems.length) {
                currentIndex = 0; // Loop back to the first image
            }
            previewImg.src = singleItems[currentIndex].src; // Update the image
        });

        // Left arrow functionality
        leftArrow.addEventListener('click', function () {
            currentIndex--;
            if (currentIndex <= 0) {
                currentIndex = singleItems.length - 1; // Loop back to the last image
            }
            previewImg.src = singleItems[currentIndex].src; // Update the image
        });
    });

    // Remove preview
    cross.addEventListener('click', function () {
        perviewSection.classList.remove('preview-active');
    });

    // Close preview when clicking outside the image
    perviewSection.addEventListener('click', function (e) {
        if (e.target.classList.contains('preview-active')) {
            perviewSection.classList.remove('preview-active');
        }
    });
});
