const baseUrl = 'https://pokeapi.co/api/v2/'
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nav = document.querySelector('nav');
const section = document.querySelector('section');


searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
     //console.log(e);
    e.preventDefault();

    url = `${baseUrl}pokemon/${searchTerm.value}`;
    
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
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    } 

    let card = json; // is card correct? Should this be an object/property from json data?

    if (card.length === 0) {
        console.log('no results');
    } else {
        // for (i = 0, i < card.length, i++) {
            const avitar = document.createElement('img');
            const name = document.createElement('h1');
            const height = document.createElement('h4');
            const weight = document.createElement('h4');
        
            avitar.src = card.sprites.front_default;
            avitar.alt = card.name;
            name.className = 'pokémonName';
            name.innerText = card.name;
            name.style = 'font-family: Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif; color: black;';
               
            height.className = 'pokémonHeight';
            height.innerText = `${card.height} inches.`;
            height.style = 'font-family: Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif; color: #f7f307;';
            weight.className = 'pokémonWeight';
            weight.innerText = `${card.weight} pounds`;
            weight.style = 'font-family: Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif; color: red;';

            section.appendChild(avitar);
            section.appendChild(name);
            section.appendChild(height);
            section.appendChild(weight);
            fetch(url);
        }
    }
//}
