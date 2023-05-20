export const initialCards = [
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

export const settings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error",
};

// buttons and other DOM elements

export const openEditModalButton = document.querySelector(
  ".profile__name-button"
);
export const openAddCardModalButton = document.querySelector(
  ".profile__button-add"
);
export const cardsList = document.querySelector(".cards__list");

// Forms

export const profileModalForm = document.querySelector(".popup__form_profile");
export const addCardModalForm = document.querySelector(".popup__form_card");
export const inputName = document.querySelector(".form__input_type_name");
export const inputJob = document.querySelector(".form__input_type_job");

// Rest

export const popupAddCardSelector = ".popup_type_add-card";
export const popupProfileSelector = ".popup_type_profile";
export const popupImagePreviewSelector = ".popup_type_preview";
export const cardTemplateSelector = "#card-template";
export const cardsListSelector = ".cards__list";
export const profileNameSelector = ".profile__name-info";
export const profileJobSelector = ".profile__info-job";
export const addCardSubmitButton = ".form__button_disabled";
