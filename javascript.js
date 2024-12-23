document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-bar input').value;
        alert('Searching for: ' + searchInput);
    });
});