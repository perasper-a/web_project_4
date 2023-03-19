// imports

import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";
import { closePopup, handleImagePreview, openedPopup } from "./utils.js";

const settings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: ".form__input_type-error",
  errorClass: ".form__input-error"
};

// declarations
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//  popups
const profilePopup = document.querySelector(".popup_type-profile");
const addCardPopup = document.querySelector(".popup_type_add-card");
const previewPopup = document.querySelector(".popup_type-preview");

// buttons and other DOM elements
const openEditPopupButton = document.querySelector(".profile__name-button");
const openAddCardPopupButton = document.querySelector(".profile__button-add");
const closeEditPopupButton = document.querySelector(".popup__exit_profile");
const closeAddCardPopupButton = document.querySelector(".popup__exit_card");
const closePreviewPopupButton = document.querySelector(".popup__exit_preview");
const profileName = document.querySelector(".profile__name-info");
const profileJob = document.querySelector(".profile__content-info");

// eventHandlers
openEditPopupButton.addEventListener("click", function () {
  openedPopup(profilePopup);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  profileFormValidator.resetValidation();
});

openAddCardPopupButton.addEventListener("click", function () {
  openedPopup(addCardPopup);
  addCardPopupForm.reset();
  addCardFormValidator.resetValidation();
 
});

// Close Buttons
const closeButtons = document.querySelectorAll('.popup__exit');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


// Forms
const profilePopupForm = document.querySelector(".popup__form_profile");
const addCardPopupForm = document.querySelector(".popup__form_card");
const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_desc");
const inputTitle = document.querySelector(".form__input_type_title");
const inputLink = document.querySelector(".form__input_type_url");
const profileFormValidator = new FormValidator(settings, profilePopupForm);
const addCardFormValidator = new FormValidator(settings, addCardPopupForm);
profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
profilePopupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(profilePopup);
  profilePopupForm.reset(); 
});

// Card Create

addCardPopupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  renderCard({ name: inputTitle.value, link: inputLink.value }, cardsList);
  closePopup(addCardPopup);
});

// wrappers

const cardsList = document.querySelector(".cards__list");

const cardTemplateSelector = "#card-template";
const renderCard = (data, cardsList) => {
  const card = new Card(data, cardTemplateSelector, handleImagePreview);
  const cardElement = card.createCard();
  cardsList.prepend(cardElement);
};
initialCards.forEach((data) => {
  renderCard(data, cardsList);
});





 