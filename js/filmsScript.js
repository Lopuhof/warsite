const domElements = {
    filmsAreal: document.getElementById('containerFilms-cards'),
    search: {
        input: document.getElementById('search_string'),
        button: document.getElementById('button-search'),
    },
};

function createFilms(filmsData) {

    const filmsCards = [];

    for (let i = 0; i < filmsData.length; i = i + 1) {
        filmsCards.push(`
            <div class="container-cards-element">
                <video controls="controls" src="../video/${i + 1}.mp4" class="container-cards-element-video"></video>
                <h4 class="video-title">${filmsData[i].title}<br>(${filmsData[i].yearOfCreate})</h4>
                <hr class="under-project">
                <div class="video-text">${filmsData[i].description}</div>
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