let button = document.querySelectorAll('.scale');
let modals = document.querySelectorAll('.modalsWindows-modal');
let close = document.querySelectorAll('.fa-circle-xmark');

//открываем модальное окно

function viewModalWindow(item) {
    for (let i = 0; i < item.length; i = i + 1) {
        button[i].addEventListener('click', function() {
            item[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    };
};

//закрываем модальное окно

function closeModal(item) {
    for (let i = 0; i < item.length; i = i + 1) {
        close[i].addEventListener('click', function() {
            item[i].style.display = 'none';
            document.body.style.overflow = 'scroll';
        });
    };
};

viewModalWindow(modals);
closeModal(modals);

//делаем кнопки равными изображению 

let imgWidth = document.querySelectorAll('img');

function btnStyleWidth(btn, imgStyle) {
    for (let i = 0; i < btn.length; i = i + 1) {
        btn[i].style.width = `${imgStyle[2].width}` + 'px';
    };

    return btn;
};

btnStyleWidth(button, imgWidth);

//делаем заглушки для описания 

let mailDescription = document.querySelectorAll('.container-cards-element-text-mailDescription');

function capBookDescription(description) {
    for (let i = 0; i < description.length; i = i + 1) {
        if ((description[i].innerText.length === 0) || (description[i].innerText.length === undefined)) {
            description[i].textContent = 'Хорошее письмо для хороших читателей';
        };
    };

    return description;
};

capBookDescription(mailDescription);