
const popupEl = document.querySelector(".popup");

const formEl = document.querySelector(".form");
const openEditModalButton = document.querySelector(".profile__name-button");
const popupExitButton = document.querySelector(".popup__exit");
const profileName = document.querySelector(".profile__span-names");
const profileJob = document.querySelector(".profile__content-info");
const profileEditButton = document.querySelector(".profile__span-button");
const NameEdit = document.querySelector(".form__name-input");
const JobEdit = document.querySelector(".form__input_type_desc");

function openPopup() {
  popupEl.classList.add("popup__open");
}

function closePopup() {
  popupEl.classList.remove("popup__open");
}

profileEditButton.addEventListener("click", openPopup); {
   openPopup();
};

popupExitButton.addEventListener("click", closePopup ); {
  closePopup();
};

NameEdit.value = profileName.textContent;
JobEdit.value = profileJob.textContent;

formEl.addEventListener("submit", function (event) { 
  event.preventDefault(); 
  profileName.textContent = NameEdit.value; 
  profileJob.textContent = JobEdit.value; 
  closePopup(); 
}); 



