console.log("hello world");
const popupEl = document.querySelector(".popup");


// buttons and other DOM elements
const openEditModalButton = document.querySelector(".profile__name-button");
const popupExitButton = document.querySelector(".popup__exit");
const profileNameInput = document.querySelector(".form__input_type_name");
const profileJobInput = document.querySelector(".form__input_type_desc");
const profileName = document.querySelector(".profile__span-name");
const profileJob = document.querySelector(".profile__content-info");

const profileEditButton = document.querySelector("#profile-edit-button")


profileEditButton.addEventListener("click", function() {
  const popupEl = document.querySelector(".popup");
 popupEl.style.visibility = "visible";
  }
);
