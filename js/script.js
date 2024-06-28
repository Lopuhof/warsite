const domElements = {
containerCards: document.getElementById('container-cardsId'),
search: {
    input: document.getElementById('search_string'),
    button: document.getElementById('button-search'),
    },    
};

let leftLinks = document.querySelector('.left-links');
let closeBtn = document.querySelector('.close-links');

function generateCards(data) {

    const cards = [];
    for (let i = 0; i < data.length; i = i + 1) {
        cards.push(`
            <div class="container-cards-element">
                <div class="container-cards-element-img"><img src="../image/books/${i + 1}.jpg" alt="book_${i + 1}"></div>
                <div class="container-cards-element-text">
                <h4 class="author">${data[i].author}</h4>
                <h4 class="book-title">${data[i].title}<br>(1946)</h4>
                <hr class="under-project under-project-book"><p>${data[i].description}</p><hr class="under-project"></div>
                <button class="scale">Увеличить</button>
            </div>
        `);
    };

    return cards;
};
    
const cardsArr = generateCards(cardsData);
domElements.containerCards.innerHTML = cardsArr.join('');
 
//Поиск книги по автору, названию или описанию

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
        let filteredCardsData = cardsData.filter(card => {
            if (rgx.test(card.author) || rgx.test(card.title) || rgx.test(card.description)) {
                return true;
            } else {
                return false;
            };
        });

        const newFilteredCardsHTML = generateCards(filteredCardsData);
        domElements.containerCards.innerHTML = newFilteredCardsHTML.join('');
    };
};

function close(item) {
    closeBtn.onclick = function() {
        item.style.display = 'none';
    };
};

close(leftLinks);

//Увеличиваем обложки книг
let bigPicture = document.querySelector('.scale');
