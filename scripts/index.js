const PopupEl = document.querySelector(".popup");
const profilePopupEl = document.querySelector(".popup_type-profile");
const cardPopupEl = document.querySelector(".popup_type-card");
const previewPopupEl = document.querySelector(".popup_type-preview");

const formEl = document.querySelector(".form");
const cardForm = document.querySelector (".card-form")


const profileEditButton = document.querySelector(".profile__span-button");
const addCardButton = document.querySelector(".profile__button");

const popupExitButton = document.querySelector(".popup__exit-profile");
const popupCardExitButton = document.querySelector(".popup__exit-card");
const previewPopupExitButton = document.querySelector(".popup__exit-preview");

const profileName = document.querySelector(".profile__span-names");
const profileJob = document.querySelector(".profile__content-info");

const NameEdit = document.querySelector(".form__input_type_name");
const JobEdit = document.querySelector(".form__input_type_desc");
const inputTitle = document.querySelector(".form__input_type_title");
const inputUrl = document.querySelector(".form__input_type_url");

const elementsList = document.querySelector(".elements__content")
const previewContent = document.querySelector(".popup__content-preview")

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



// functions 

function formSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = NameEdit.value;
    profileJob.textContent = JobEdit.value;
    togglePopup(profilePopupEl);
}


function togglePopup(popupWindow) {
  if (!popupWindow.classList.contains("popup_open")) {
   NameEdit.value = profileName.textContent;
   JobEdit.value = profileJob.textContent;
  }

  popupWindow.classList.toggle("popup_open");

}



function createCardEl(card) {
  const cardTemplate = document.querySelector("#card-template").content.querySelector(".element"); 
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".element__image");
  const cardLikeButton = cardElement.querySelector(".element__button");
  const cardDeleteButton = cardElement.querySelector(".element__trash-button");
  const cardTitle = cardElement.querySelector(".element__nav-title");

  cardImage.src = card.link;
  cardTitle.textContent = card.name;

 cardDeleteButton.addEventListener("click", () => cardElement.remove());

 cardLikeButton.addEventListener("click", () => {
  cardLikeButton.classList.toggle("element__button-active");
});
  
 cardImage.addEventListener("click", () => onImagePreview(card));
  

  return cardElement;

}

function onImagePreview(card) {
const popupImage = previewPopupEl.querySelector(".popup__image");
popupImage.src = card.link;
togglePopup(previewPopupEl);
};

const onBinButtonClick = () => {

};

function handleSubmit(event) {
  event.preventDefault();
  togglePopup();
} 

function renderCard(card, wrapper) {

 wrapper.append(createCardEl(card));
}

// evt handlers

formEl.addEventListener("submit",formSubmit);

profileEditButton.addEventListener("click", () => togglePopup(profilePopupEl));

popupExitButton.addEventListener("click", () => togglePopup(profilePopupEl));



addCardButton.addEventListener("click", () => togglePopup(cardPopupEl));

popupCardExitButton.addEventListener("click", () => togglePopup(cardPopupEl));

cardForm.addEventListener("submit", handleSubmit);

//////////

previewPopupExitButton.addEventListener("click", () => togglePopup(previewPopupEl));


 initialCards.forEach(card => renderCard(card,elementsList));
  





