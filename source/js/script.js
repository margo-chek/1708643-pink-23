document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.page-header__toggle')) {
    const headerMain = document.querySelector('.page-header');
    const navMain = document.querySelector('.page-header__nav');
    const navToggle = document.querySelector('.page-header__toggle');
    // Убираем класс
    navMain.classList.remove('page-header__nav--nojs');
    // Добавляем обработчик события для кнопки
    navToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (headerMain.classList.contains('page-header--closed')) {
        headerMain.classList.remove('page-header--closed');
        headerMain.classList.add('page-header--opened');
      } else {
        headerMain.classList.add('page-header--closed');
        headerMain.classList.remove('page-header--opened');
      }
    });
  }

});


if (document.querySelector('.submit__button')) {
  var failurePopUp = document.querySelector('.popup-error'),
    successPopUp = document.querySelector('.popup-submit-ok');
  var formFeedback = document.querySelector('.page-form__container'),
    btn = document.querySelector('.submit__button'),
    inputs = formFeedback.querySelectorAll('input[required]');

  failurePopUp.classList.remove('popup-error--visible');
  successPopUp.classList.remove('popup-submit-ok--visible');

//обработка клика отправки формы -> показ модальных окон
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    Array.from(inputs).find(function (el) {
      if (el.value == '') {
        failurePopUp.classList.add('popup-error--visible');
      } else {
        successPopUp.classList.add('popup-submit-ok--visible');
      }
    });
  });

//закрывает модальное окно
  failurePopUp.querySelector('.popup-error__button').addEventListener('click', function () {
    failurePopUp.classList.remove('popup-error--visible');
  });

//закрывает модальное окно
  successPopUp.querySelector('.popup-submit-ok__button').addEventListener('click', function () {
    successPopUp.classList.remove('popup-submit-ok--visible');
  });
}
