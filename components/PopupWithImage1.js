import { Popup } from "./Popup1.js";

export class PopupWithImage extends Popup {
  open(name, link) {
    const image = document.querySelector(".popup__image");
    const caption = document.querySelector(".popup__caption");  // Select the caption element
    
    image.src = link;
    image.alt = name;
    caption.textContent = name;  // Update the caption
    
    super.open();
  }
}
