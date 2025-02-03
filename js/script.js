const domElements = {
    containerCards: document.getElementById('container-cardsId'),
    search: {
        input: document.getElementById('search_string'),
        button: document.getElementById('button-search'),
    },
    modalWindowContainer: document.getElementById('modalWindow'), 
};

function sortOfData(dataObjects) {
    
    for (let i = 0; i < dataObjects.length; i = i + 1) {
        for (let j = i; j < dataObjects.length; j = j + 1) {
            if (dataObjects[i].author.surname > dataObjects[j].author.surname) {
                let temp = dataObjects[i];
                dataObjects[i] = dataObjects[j];
                dataObjects[j] = temp;
            };
        };
    };

    return dataObjects;
};

sortOfData(cardsData);

function generateCards(data) {
    const cards = [];

    for (let i = 0; i < data.length; i = i + 1) {
        cards.push(`
            <div class="container-cards-element">
                <div class="container-cards-element-img">
                    <img ${data[i].createString} alt="book_${i + 1}">
                </div>
                <div class="container-cards-element-text">
                    <h4 class="author">${data[i].author.surname} ${data[i].author.name} ${data[i].author.fatherName}</h4>
                    <h4 class="book-title">${data[i].title}</h4>
                    <h4 class="book-year">${data[i].year}</h4>
                    <hr class="under-project-book">
                    <p class="book-description">${data[i].description}</p>
                </div>
                ${cardsData[i].button}
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

// Закрываем левые ссылки

let leftLinks = document.querySelector('.left-links');
let closeBtn = document.querySelector('.close-links');

function closeLeftLinks(btn, item) {
    btn.onclick = function() {
        item.style.display = 'none';
    };
};

closeLeftLinks(closeBtn, leftLinks);

// Создаем модальные окна

function generateModalWindows(data) {
    const modalArr = [];

    for(let i = 0; i < data.length; i = i + 1) {
        modalArr.push(`
            ${data[i].modalWindow};
        `);
    };
    return modalArr;
};

const modalWindowsArray = generateModalWindows(cardsData);
domElements.modalWindowContainer.innerHTML = modalWindowsArray.join('');

//Создаем переменные с модальными окнами

let modal = document.querySelectorAll('.modalsWindows-modal');
let btn = document.querySelectorAll('.scale');

function modalWindow(element) {
    for (let i = 0; i < cardsData.length; i = i + 1) {
        btn[i].addEventListener('click', function() {
            element[i].style.display = 'block';
        });
    };
}; 

modalWindow(modal);

// Закрываем модальное окно

let closeModal = document.querySelectorAll('.xmark_modals');

console.log(closeModal);

function closeModalWindows(modalCloseBtn, modalWindow) {
    for (let i = 0; i < modal.length; i = i + 1) {
        modalCloseBtn[i].addEventListener('click', function() {
            modalWindow[i].style.display = 'none';
        });
    };
};

closeModalWindows(closeModal, modal);

// Обрезаем заголовки и аннотации

let bookTitles = document.querySelectorAll('.book-title');

function cropTitles(title) {
    for (let i = 0; i < title.length; i = i + 1) {
        if (title[i].innerText.length > 23) {
            title[i].textContent = title[i].innerText.slice(0, 21) + '...';
        };
    };

    return title;
};

cropTitles(bookTitles);

let text = document.querySelectorAll('.book-description');

function cropDescriptions(description) {
    for (let i = 0; i < description.length; i = i + 1) {
        if (description[i].innerText.length > 241) {
            description[i].textContent = description[i].innerText.slice(0, 238) + '...';
        };
    };

    return description;
};

cropDescriptions(text);

