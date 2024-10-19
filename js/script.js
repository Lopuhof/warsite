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
            if (dataObjects[i].author > dataObjects[j].author) {
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
                <div class="container-cards-element-img"><img ${data[i].string} alt="book_${i + 1}"></div>
                <div class="container-cards-element-text">
                <h4 class="author">${data[i].author}</h4>
                <h4 class="book-title">${data[i].title}</h4>
                <h4 class="book-year">${data[i].year}</h4>
                <hr class="under-project-book"><p class="book-description">${data[i].description}</p></div>
                <button class="scale" id="scale_${i + 1}">Увеличить</button>
            </div>
        `);
    };
/* 
    for (let i = 0; i < data.length; i = i + 1) {
        for (let j = i; j < data.length; j = j + 1) {
            if (cards[i].childNodes[3].childNodes[1].innerText > cards[j].childNodes[3].childNodes[1].innerText) {
                let temp = cards[i];
                cards[i] = cards[j];
                cards[j] = temp;
            };
        };
    };
 */
    return cards;
};
    
const cardsArr = generateCards(cardsData);
domElements.containerCards.innerHTML = cardsArr.join('');

// Сортировка книг по автору

let cardElement = document.querySelectorAll('.container-cards-element');
let authors = document.querySelectorAll('.author');

console.log(cardElement[0]);


 
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

let leftLinks = document.querySelector('.left-links');
let closeBtn = document.querySelector('.close-links');

function close(item) {
    closeBtn.onclick = function() {
        item.style.display = 'none';
    };
};

close(leftLinks);

//Делаем модальные окна

function generateModalsWindows(data) {
    const modalsArray = [];

    for (let i = 0; i < cardsData.length; i = i + 1) {
        modalsArray.push(`
           <div class="modalsWindows-modal modalsWindows-modal_${i + 1}">
                <div class="modalsWindows-modal-content modal-content_${i + 1}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${i + 1}.jpg' alt="img_${i + 1}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark"></i></div>
                </div>
            </div> 
        `);
    };

    return modalsArray;
};

const modalWindowsArray = generateModalsWindows(cardsData);
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

let modalWindowsCollection = document.querySelectorAll('.modalsWindows-modal');
let closeModalBtnNewClass = document.querySelectorAll('.modalsWindows-modal-content-close');

for (let i = 0; i < cardsData.length; i = i + 1) {
    closeModalBtnNewClass[i].classList.add('closeModal');
};

let closeModalBtn = document.querySelectorAll('.closeModal');

function closeModalWindow(array) {
    for (let i = 0; i < cardsData.length; i = i + 1) {
        closeModalBtn[i].addEventListener('click', function() {
            array[i].style.display = 'none';
        });
    };
};

closeModalWindow(modalWindowsCollection);

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

let cardElements = document.querySelectorAll('.container-cards-element');

console.log(cardElements[0].childNodes[3].childNodes[1].innerText);


