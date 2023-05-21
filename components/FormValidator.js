class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
    this.button = this.formElement.querySelector(this.settings.submitButtonSelector);
    this.inputList = [...this.formElement.querySelectorAll(this.settings.inputSelector)];
  }
  resetFormErrors() {
    this.inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
  resetValidation() {
    this._toggleButton();
    this.resetFormErrors();
  }


  _hasValidInputs = () =>
    this.inputList.every((input) => input.validity.valid === true);

  _enableButton() {
    this.button.classList.remove(this.settings.inactiveButtonClass);
    this.button.disabled = false;
  }
  disableButton() {
    this.button.classList.add(this.settings.inactiveButtonClass);
    this.button.disabled = true;
  }
  _toggleButton = () => {
    if (this._hasValidInputs()) {
      this._enableButton();
    } else {
      this.disableButton();
    }
  };
  _showInputError = (input) => {
    const { inputErrorClass } = this.settings;
    const errorEl = this.formElement.querySelector(`#${input.id}-error`);
    errorEl.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
  };
  _hideInputError = (input) => {
    const { inputErrorClass } = this.settings;
    const errorEl = this.formElement.querySelector(`#${input.id}-error`);
    errorEl.textContent = "";
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

}

export default FormValidator;
