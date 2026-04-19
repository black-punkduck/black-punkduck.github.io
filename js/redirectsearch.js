import data from '/json/tags.json' with { type: 'json' };                
let btnSearch = document.getElementById('SearchButton');
let btnInp = document.getElementById('mySearch');

// Function to handle the search navigation
function performSearch() {
    window.location.href = '/findings/index.html?q=' + encodeURI(btnInp.value);
}

// Click listener for the button
btnSearch.addEventListener('click', performSearch);

// Keypress listener for the input field (Enter key)
btnInp.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});