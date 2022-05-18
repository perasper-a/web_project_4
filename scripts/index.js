console.log("hello world");
const popupEl = document.querySelector(".popup");


const formEl = document.querySelector(".form");
const openEditModalButton = document.querySelector(".profile__name-button");
const popupExitButton = document.querySelector(".popup__exit");
const profileNameInput = document.querySelector(".form__input_type_name");
const profileJobInput = document.querySelector(".form__input_type_desc");
const profileName = document.querySelector(".profile__span-name");
const profileJob = document.querySelector(".profile__content-info");

const profileEditButton = document.querySelector("#profile-edit-button")



profileEditButton.addEventListener("click", function() {
popupEl.classList.add("popup__open");
 }
);

popupExitButton.addEventListener("click", function() {
 popupEl.classList.remove("popup__open");
  }
);

