const domElements = {
    containerCards: document.getElementById('container-cardsId'),
    search: {
        input: document.getElementById('search_string'),
        button: document.getElementById('button-search'),
    },
    modalWindowContainer: document.getElementById('modalWindow'),    
};

function generateCards(data) {
    const cards = [];

    for (let i = 0; i < data.length; i = i + 1) {
        cards.push(`
            <div class="container-cards-element">
                <div class="container-cards-element-img"><img src="../image/books/${i + 1}.jpg" alt="book_${i + 1}"></div>
                <div class="container-cards-element-text">
                <h4 class="author">${data[i].author}</h4>
                <h4 class="book-title">${data[i].title}<br>(1946)</h4>
                <hr class="under-project-book"><p>${data[i].description}</p></div>
                <button class="scale" id="scale_${i + 1}">Увеличить</button>
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





