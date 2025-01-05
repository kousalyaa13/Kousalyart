document.querySelectorAll('.tiles article').forEach((tile) => {
    tile.addEventListener('click', () => {
        // Toggle the 'active' class on click (tap on mobile)
        tile.classList.toggle('active');
    });
});
