
const submitButtonSelector = document.querySelector(".popup__button");
const profilePopupEl = document.querySelector(".popup_type-profile");
const cardPopupEl = document.querySelector(".popup_type-card");
const previewPopupEl = document.querySelector(".popup_type-preview");
const popupSelector = document.querySelector(".popup");

const profileformEl = document.querySelector(".profile-form");
const cardFormEl = document.querySelector(".card-form");

const profileEditButton = document.querySelector(".profile__span-button");
const addCardButton = document.querySelector(".profile__button");

const profileExitButton = document.querySelector(".popup__exit-profile");
const addCardExitButton = document.querySelector(".popup__exit-card");
const previewExitButton = document.querySelector(".popup__exit-preview");

const profileName = document.querySelector(".profile__span-names");
const profileJob = document.querySelector(".profile__content-info");

const nameEdit = document.querySelector(".form__input_type_name");
const jobEdit = document.querySelector(".form__input_type_desc");
const inputTitle = document.querySelector(".form__input_type_title");
const inputUrl = document.querySelector(".form__input_type_url");

const elementsList = document.querySelector(".elements__content");
const previewContent = document.querySelector(".popup__content-preview");

const popupImage = previewPopupEl.querySelector(".popup__image");
const previewCaption = previewPopupEl.querySelector(".popup__caption");

const exitButtons = document.querySelectorAll(".popup__exit");

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

const renderCard = (card) => {
  const cardElement = createCardEl(card);
  elementsList.prepend(cardElement);
};


function openPopup(popup) {
  popup.classList.add("popup_open");
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
}

function createCardEl(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".element");
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".element__image");
  const cardLikeButton = cardElement.querySelector(".element__button");
  const cardDeleteButton = cardElement.querySelector(".element__trash-button");
  const cardTitle = cardElement.querySelector(".element__nav-title");

  cardImage.src = card.link;
  cardImage.alt = `image preview of${card.name}`;
  cardTitle.textContent = card.name;

  cardDeleteButton.addEventListener("click", () => cardElement.remove());

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("element__button-active");
  });

  cardImage.addEventListener("click", () => handleImagePreview(card));

  return cardElement;
}

function handleImagePreview(card) {
  previewCaption.textContent = card.name;
  popupImage.src = card.link;
  popupImage.alt = `image preview of${card.name}`;
  openPopup(previewPopupEl);
}


profileEditButton.addEventListener("click", function () {
  openPopup(profilePopupEl);
  nameEdit.value = profileName.textContent;
  jobEdit.value = profileJob.textContent;
});


addCardButton.addEventListener("click", function () {
   openPopup(cardPopupEl)
  
  });

profileformEl.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameEdit.value;
  profileJob.textContent = jobEdit.value;
  closePopup(profilePopupEl);
});

cardFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  renderCard({ name: inputTitle.value, link: inputUrl.value });
  cardFormEl.reset();
  closePopup(cardPopupEl);
});

initialCards.forEach(renderCard);

exitButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});



document.addEventListener("keydown", function (evt){
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup); 
  }; 
});

