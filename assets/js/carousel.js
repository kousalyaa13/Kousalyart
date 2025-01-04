// carousel.js
// List of image URLs
const imageLists = {
    "imperfections-images": [
        "images/imperfections1.JPG",
        "images/imperfectionsb&w.jpg",
        "images/imperfectionscloseup.JPG.png"
    ],
    "lung-images": [
        "images/lung1.JPG",
        "images/lung2.webp"
    ]
};

// Get the image list name from the data attribute
const sliderContainer = document.querySelector(".image-slider");
const imageListName = sliderContainer.dataset.images;

// Set the images based on the data attribute
const images = imageLists[imageListName] || []; // Default to empty array if not found

let currentIndex = 0; // Start with the first image
let interval; // Store the interval for auto-switching

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Function to update the image source
function updateImage() {
    document.getElementById("slider-image").src = images[currentIndex];
}

// Start automatic image switching
function startAutoSwitch() {
    if (!interval) {
        interval = setInterval(showNextImage, 5000); // Change image every 5 seconds
    }
}

// Pause automatic switching when user interacts with buttons
function pauseAutoSwitch() {
    clearInterval(interval);
    interval = null; // Reset interval variable after clearing it
}

// Event listeners for buttons (check for existence before adding event listeners)
document.querySelector(".next-btn")?.addEventListener("click", () => {
    pauseAutoSwitch();
    showNextImage();
    startAutoSwitch();
});

document.querySelector(".prev-btn")?.addEventListener("click", () => {
    pauseAutoSwitch();
    showPrevImage();
    startAutoSwitch();
});

// Initialize the carousel
updateImage(); // Ensure the first image is displayed right away
startAutoSwitch();
