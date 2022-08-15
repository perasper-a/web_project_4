const cardPopupEl = document.querySelector(".popup_add-card");

const formEl = document.querySelector(".form");
const openEditModalButton = document.querySelector(".profile__name-button");
const popupCardExitButton = document.querySelector(".popup__exit-card");
const profileName = document.querySelector(".profile__span-names");
const profileJob = document.querySelector(".profile__content-info");
const addCardButton = document.querySelector(".profile__button");
const titleEdit = document.querySelector(".form__input_type_title");
const addUrl = document.querySelector(".form__input_type_url");


function togglePopup() {
    cardPopupEl.classList.toggle("popup_open");
  }
  
addCardButton.addEventListener("click", togglePopup);

popupCardExitButton.addEventListener("click", togglePopup);

function handleSubmit(event) {
    event.preventDefault();
    togglePopup();
  } 


  cardPopupEl.addEventListener("submit", handleSubmit); 