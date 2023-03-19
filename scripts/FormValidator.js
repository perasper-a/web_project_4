class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
    this.button = this.formElement.querySelector(settings.submitButtonSelector)
  }
  _hasValidInputs = () =>
    this.inputList.every((input) => input.validity.valid === true);

  enableButton() {
    this.button.classList.remove(this.settings.inactiveButtonClass);
    this.button.disabled = false;
  }
  disableButton() {
      this.button.classList.add(this.settings.inactiveButtonClass);
      this.button.disabled = true;
  }
  _toggleButton = () => {
    if (this._hasValidInputs()) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  };
  _showInputError = (input) => {
    const { inputErrorClass } = this.settings;
    const errorSpan = this.formElement.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
  };
  _hideInputError = (input) => {
    const { inputErrorClass } = this.settings;
    const ErrorSpan = this.formElement.querySelector(`#${input.id}-error`);
    ErrorSpan.textContent = "";
    input.classList.remove(inputErrorClass);
  };
  _checkInputValidity = (input) => {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, input.validationMessage);
    }
  };
  _setEventListener = () => {
    const { inputSelector } = this.settings;
    this.inputList = Array.from(
      this.formElement.querySelectorAll(inputSelector)
    );

    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButton();
      });
    });
  };
  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListener();
  }
  resetValidation() {
    this._toggleButton(); 
    this.inputList.forEach((input) => {
      this._hideInputError(input) 
    });

  }
}

export default FormValidator;