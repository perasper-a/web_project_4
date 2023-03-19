// imports
export const openedPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("mousedown", handleMouseDown);
};

// functions
const previewPopup = document.querySelector(".popup_type-preview");

const popupImage = previewPopup.querySelector(".popup__image");
export function handleImagePreview(data) {
  popupImage.src = data.link;
  popupImage.alt = `image preview${data.name}`;
  openedPopup(previewPopup);
}
const handleKeyDown = (evt) => {
  const openedPopup = document.querySelector(".popup_open");
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    openedPopup && closePopup(openedPopup);
  }
};
const handleMouseDown = (evt) => {
  const openedPopup = document.querySelector(".popup_open");
  if (evt.target.classList.contains("popup_open")) {
    closePopup(evt.target);
  }
};
export const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("mousedown", handleMouseDown);
};
