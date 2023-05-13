import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._previewCaption = this._popup.querySelector(".popup__caption");
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = `image preview of ${name}`;
    this._previewCaption.textContent = name;
    super.open();
  }
}