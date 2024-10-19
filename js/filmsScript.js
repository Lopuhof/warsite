const domElements = {
    filmsAreal: document.getElementById('containerFilms-cards'),
    search: {
        input: document.getElementById('search_string'),
        button: document.getElementById('button-search'),
    },
};

function sortOfDataFilms(dataOfFilms) {
    for (let i = 0; i < dataOfFilms.length; i = i + 1) {
        for (let j = i; j < dataOfFilms.length; j = j + 1) {
            if (dataOfFilms[i].title > dataOfFilms[j].title) {
                let temp = dataOfFilms[i];
                dataOfFilms[i] = dataOfFilms[j];
                dataOfFilms[j] = temp;
            };
        };
    };

    return dataOfFilms;
};

sortOfDataFilms(cardsFilmsData);

function createFilms(filmsData) {

    const filmsCards = [];

    for (let i = 0; i < filmsData.length; i = i + 1) {
        filmsCards.push(`
            <div class="container-cards-element">
                <video controls="controls" ${filmsData[i].string} class="container-cards-element-video"></video>
                <h4 class="video-title">${filmsData[i].title}<br>(${filmsData[i].yearOfCreate})</h4>
                <hr class="under-project">
                <div class="video-text"><p class="film-description">${filmsData[i].description}</p></div>
                <hr class="under-project">    
            </div>
        `);
    };

    return filmsCards; 
};

const filmsCardsArr = createFilms(cardsFilmsData);
domElements.filmsAreal.innerHTML = filmsCardsArr.join('');

{
    let searchValue = '';
    domElements.search.input.oninput = function(event) {
        searchValue = event.target.value;
        filterSearch();
    };
    domElements.search.button.onclick = () => {
        filterSearch();
    };

    function filterSearch() {
        const rgx = new RegExp(searchValue, 'i');
        let filteredCardsData = cardsFilmsData.filter(card => {
            if (rgx.test(card.yearOfCreate) || rgx.test(card.title) || rgx.test(card.description)) {
                return true;
            } else {
                return false;
            };
        });

        const newFilteredCardsHTML = createFilms(filteredCardsData);
        domElements.filmsAreal.innerHTML = newFilteredCardsHTML.join('');
    };
};
 
let leftLinks = document.querySelector('.left-links');
let closeBtn = document.querySelector('.close-links');

function close(item) {
    closeBtn.onclick = function() {
        item.style.display = 'none';
    };
};

close(leftLinks); 

let filmsTitles = document.querySelectorAll('.video-title');

function cropTitles(title) {
    for (let i = 0; i < title.length; i = i + 1) {
        if (title[i].innerText.length > 23) {
            title[i].textContent = title[i].innerText.slice(0, 21) + '...';
        };
    };

    return title;
};

cropTitles(filmsTitles);

let textOfFilms = document.querySelectorAll('.film-description');

function cropDescriptions(description) {
    for (let i = 0; i < description.length; i = i + 1) {
        if (description[i].innerText.length > 241) {
            description[i].textContent = description[i].innerText.slice(0, 238) + '...';
        };
    };

    return description;
};

cropDescriptions(textOfFilms);