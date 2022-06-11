const popupEl = document.querySelector(".popup");

const formEl = document.querySelector(".form");
const openEditModalButton = document.querySelector(".profile__name-button");
const popupExitButton = document.querySelector(".popup__exit");
const profileName = document.querySelector(".profile__span-names");
const profileJob = document.querySelector(".profile__content-info");
const profileEditButton = document.querySelector(".profile__span-button");
const NameEdit = document.querySelector(".form__input_type_name");
const JobEdit = document.querySelector(".form__input_type_desc");

function openPopup() {
  NameEdit.value = profileName.textContent;
  JobEdit.value = profileJob.textContent;
  popupEl.classList.add("popup_open");
}

function closePopup() {
  popupEl.classList.remove("popup_open");
}

profileEditButton.addEventListener("click", openPopup);

popupExitButton.addEventListener("click", closePopup);

function handleSubmit(event) {
  event.preventDefault();
  profileName.textContent = NameEdit.value;
  profileJob.textContent = JobEdit.value;
  closePopup();
} 

formEl.addEventListener("submit", handleSubmit); 