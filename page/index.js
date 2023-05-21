import './index.css';

// imports
import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  initialCards,
  openEditModalButton,
  openAddCardModalButton,
  cardsList,
  profileModalForm,
  addCardModalForm,
  inputName,
  inputJob,
  settings,
  popupAddCardSelector,
  popupProfileSelector,
  popupImagePreviewSelector,
  cardTemplateSelector,
  cardsListSelector,
  profileNameSelector,
  profileJobSelector,
  addCardSubmitButton,
} from "../utils/constants.js";



// instances

const handleAddCardSubmit = (data) => {
  renderCard({ name: data["title"], link: data["link"] }, cardsList);
  addCardPopup.close();
};
const addCardPopup = new PopupWithForm(
  popupAddCardSelector,
  handleAddCardSubmit
);
addCardPopup.setEventListeners();

const handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo(data.name, data.job);
  addProfilePopup.close();
};

const addProfilePopup = new PopupWithForm(
  popupProfileSelector,
  handleProfileFormSubmit
);
addProfilePopup.setEventListeners();

const imagePopup = new PopupWithImage(popupImagePreviewSelector);
imagePopup.setEventListeners();

// rendercard
function createCard(data) {
  const card = new Card(data, cardTemplateSelector, () => {
    imagePopup.open(data.name, data.link);
  });

  const cardElement = card.createCard();
  return cardElement;
}

const renderCard = (data) => {
  const cardElement = createCard(data);
  section.addItem(cardElement);
};

const section = new Section(
  { items: initialCards, renderer: renderCard },
  cardsListSelector
);
section.renderItems();
const userInfo = new UserInfo({
  profileNameSelector: profileNameSelector,
  profileJobSelector: profileJobSelector,
});
// eventHandlers
openEditModalButton.addEventListener("click", function () {
  const profileData = userInfo.getUserInfo();
  addProfilePopup.open();
  addProfilePopup.setInputValues(profileData);
  profileFormValidator.resetValidation(); 
});

openAddCardModalButton.addEventListener("click", function () {
  addCardPopup.open();
  
  addCardFormValidator.disableButton();
  addCardFormValidator.resetValidation();
});

// form
const profileFormValidator = new FormValidator(settings, profileModalForm);
const addCardFormValidator = new FormValidator(settings, addCardModalForm);
profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();



