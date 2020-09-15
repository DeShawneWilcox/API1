const baseUrl = 'https://pokeapi.co/api/v2/pokemon/{name}/'
let url;
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
nav.style.display = 'none';
let pageNumber = 0;


searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    // console.log(e);
    e.preventDefault();
    url = `${baseURL}&page=${pageNumber}&q=${searchTerm.value}`;
    
    fetch(url)
    .then(function (result) {
        console.log(result)
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {
    console.log('Display Results', json);
    // console.log(json.response.docs);
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }















}

function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}

function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
}
