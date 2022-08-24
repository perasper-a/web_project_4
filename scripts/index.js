const popupEl = document.querySelector(".popup");

const formEl = document.querySelector(".form");
const openEditModalButton = document.querySelector(".profile__name-button");
const popupExitButton = document.querySelector(".popup__exit");
const profileName = document.querySelector(".profile__span-names");
const profileJob = document.querySelector(".profile__content-info");
const profileEditButton = document.querySelector(".profile__span-button");
const NameEdit = document.querySelector(".form__input_type_name");
const JobEdit = document.querySelector(".form__input_type_desc");

// functions 

function formSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = NameEdit.value;
    profileJob.textContent = JobEdit.value;
    togglePopup ();
}

function togglePopup() {
    if (popupEl.classList.contains("popup_open")) {
     NameEdit.value = profileName.textContent;
     JobEdit.value = profileJob.textContent;
    }

    popupEl.classList.toggle("popup_open");

}

// evt handlers

formEl.addEventListener("submit",formSubmit);

profileEditButton.addEventListener("click", togglePopup);

popupExitButton.addEventListener("click", togglePopup);



//  card functionality
const cardPopupEl = document.querySelector(".card-popup");

const cardForm = document.querySelector (".card-form")
const popupCardExitButton = document.querySelector(".card-popup__exit");
const addCardButton = document.querySelector(".profile__button");
const titleEdit = document.querySelector(".form__input_type_title");
const addUrl = document.querySelector(".form__input_type_url");

const elementsList = document.querySelector(".elements__content")

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


function toggleCardPopup() {
    cardPopupEl.classList.toggle("card-popup_open");
  }
  
addCardButton.addEventListener("click", toggleCardPopup);

popupCardExitButton.addEventListener("click", toggleCardPopup);

function handleSubmit(event) {
    event.preventDefault();
    toggleCardPopup();
  } 

  cardForm.addEventListener("submit", handleSubmit);


  initialCards.forEach(card => {
    const cardTemplate = document.querySelector("#card-template").content.querySelector(".element"); 
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__nav-title");

    cardImage.style.backgroundImage = `url(${card.link})`;
    cardTitle.textContent = card.name;

    elementsList.append(cardElement);

    return cardElement;
  });
  




  



