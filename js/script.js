const domElements = {
containerCards: document.getElementById('container-cardsId'),
search: {
    input: document.getElementById('search_string'),
    button: document.getElementById('button-search'),
    },
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

close(leftLinks, modalWindow);

//Создаем переменные с модальными окнами

let modal_1 = document.querySelector(`.modalsWindows-modal_1`);
let modal_2 = document.querySelector(`.modalsWindows-modal_2`);
let modal_3 = document.querySelector(`.modalsWindows-modal_3`);
let modal_4 = document.querySelector(`.modalsWindows-modal_4`);
let modal_5 = document.querySelector(`.modalsWindows-modal_5`);
let modal_6 = document.querySelector(`.modalsWindows-modal_6`);
let modal_7 = document.querySelector(`.modalsWindows-modal_7`);
let modal_8 = document.querySelector(`.modalsWindows-modal_8`);
let modal_9 = document.querySelector(`.modalsWindows-modal_9`);
let modal_10 = document.querySelector(`.modalsWindows-modal_10`);
let modal_11 = document.querySelector(`.modalsWindows-modal_11`);
let modal_12 = document.querySelector(`.modalsWindows-modal_12`);
let modal_13 = document.querySelector(`.modalsWindows-modal_13`);
let modal_14 = document.querySelector(`.modalsWindows-modal_14`);
let modal_15 = document.querySelector(`.modalsWindows-modal_15`);
let modal_16 = document.querySelector(`.modalsWindows-modal_16`);
let modal_17 = document.querySelector(`.modalsWindows-modal_17`);
let modal_18 = document.querySelector(`.modalsWindows-modal_18`);
let modal_19 = document.querySelector(`.modalsWindows-modal_19`);
let modal_20 = document.querySelector(`.modalsWindows-modal_20`);
let modal_21 = document.querySelector(`.modalsWindows-modal_21`);
let modal_22 = document.querySelector(`.modalsWindows-modal_22`);
let modal_23 = document.querySelector(`.modalsWindows-modal_23`);
let modal_24 = document.querySelector(`.modalsWindows-modal_24`);
let modal_25 = document.querySelector(`.modalsWindows-modal_25`);
let modal_26 = document.querySelector(`.modalsWindows-modal_26`);
let modal_27 = document.querySelector(`.modalsWindows-modal_27`);
let modal_28 = document.querySelector(`.modalsWindows-modal_28`);
let modal_29 = document.querySelector(`.modalsWindows-modal_29`);
let modal_30 = document.querySelector(`.modalsWindows-modal_30`);
let modal_31 = document.querySelector(`.modalsWindows-modal_31`);
let modal_32 = document.querySelector(`.modalsWindows-modal_32`);
let modal_33 = document.querySelector(`.modalsWindows-modal_33`);
let modal_34 = document.querySelector(`.modalsWindows-modal_34`);


function modalWindow_1(element) {
    let btn = document.getElementById('scale_1');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_1(modal_1);

function modalWindow_2(element) {
    let btn = document.getElementById('scale_2');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_2(modal_2);

function modalWindow_3(element) {
    let btn = document.getElementById('scale_3');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_3(modal_3);

function modalWindow_4(element) {
    let btn = document.getElementById('scale_4');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_4(modal_4);

function modalWindow_5(element) {
    let btn = document.getElementById('scale_5');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_5(modal_5);

function modalWindow_6(element) {
    let btn = document.getElementById('scale_6');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_6(modal_6);

function modalWindow_7(element) {
    let btn = document.getElementById('scale_7');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_7(modal_7);

function modalWindow_8(element) {
    let btn = document.getElementById('scale_8');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_8(modal_8);

function modalWindow_9(element) {
    let btn = document.getElementById('scale_9');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_9(modal_9);

function modalWindow_10(element) {
    let btn = document.getElementById('scale_10');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_10(modal_10);

function modalWindow_11(element) {
    let btn = document.getElementById('scale_11');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_11(modal_11);

function modalWindow_12(element) {
    let btn = document.getElementById('scale_12');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_12(modal_12);

function modalWindow_13(element) {
    let btn = document.getElementById('scale_13');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_13(modal_13);

function modalWindow_14(element) {
    let btn = document.getElementById('scale_14');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_14(modal_14);

function modalWindow_15(element) {
    let btn = document.getElementById('scale_15');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_15(modal_15);

function modalWindow_16(element) {
    let btn = document.getElementById('scale_16');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_16(modal_16);

function modalWindow_17(element) {
    let btn = document.getElementById('scale_17');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_17(modal_17);

function modalWindow_18(element) {
    let btn = document.getElementById('scale_18');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_18(modal_18);

function modalWindow_19(element) {
    let btn = document.getElementById('scale_19');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_19(modal_19);

function modalWindow_20(element) {
    let btn = document.getElementById('scale_20');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_20(modal_20);

function modalWindow_21(element) {
    let btn = document.getElementById('scale_21');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_21(modal_21);

function modalWindow_22(element) {
    let btn = document.getElementById('scale_22');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_22(modal_22);

function modalWindow_23(element) {
    let btn = document.getElementById('scale_23');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_23(modal_23);

function modalWindow_24(element) {
    let btn = document.getElementById('scale_24');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_24(modal_24);

function modalWindow_25(element) {
    let btn = document.getElementById('scale_25');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_25(modal_25);

function modalWindow_26(element) {
    let btn = document.getElementById('scale_26');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_26(modal_26);

function modalWindow_27(element) {
    let btn = document.getElementById('scale_27');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_27(modal_27);

function modalWindow_28(element) {
    let btn = document.getElementById('scale_28');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_28(modal_28);

function modalWindow_29(element) {
    let btn = document.getElementById('scale_29');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_29(modal_29);

function modalWindow_30(element) {
    let btn = document.getElementById('scale_30');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_30(modal_30);

function modalWindow_31(element) {
    let btn = document.getElementById('scale_31');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_31(modal_31);

function modalWindow_32(element) {
    let btn = document.getElementById('scale_32');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_32(modal_32);

function modalWindow_33(element) {
    let btn = document.getElementById('scale_33');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_33(modal_33);

function modalWindow_34(element) {
    let btn = document.getElementById('scale_34');
    btn.onclick = function() {
        element.style.display = 'block';
    };
};

modalWindow_34(modal_34);

let modalWindowsCollection = document.querySelectorAll('.modalsWindows-modal');
let closeModalBtn = document.querySelector('.close-modal');

function closeModal(item) {
    closeModalBtn.onclick = function() {
        item.style.display = 'none';
    };
};

closeModal(modalWindowsCollection[1]);

console.log(closeModalBtn);





