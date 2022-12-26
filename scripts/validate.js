

const hasValidInputs = (inputList) => {
 return inputList.every((input) => input.validity.valid === true )
};

const toggleButton = (inputList, button, settings ) => {
 if (hasValidInputs(inputList)) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
 } else {
  button.disabled = true;
  button.classList.add(settings.inactiveButtonClass);
 }
};


const hideInputError = (input, formEl, {errorClass}) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  console.log(input.validationMessage);
  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
};

const showInputError = (input, formEl, {errorClass}) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  const error = input.validationMessage;
  errorSpan.textContent = error;
  errorSpan.classList.add(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
if(input.validity.valid) {
   hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};


const setEventListeners = (formEl, settings) => {
 const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
 const submitButton = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
     input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
      toggleButton(inputList, submitButton , settings);
     });
   })

  formEl.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButton(inputList, submitButton, settings);
    }, 0)
  })
};


const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
   formElements.forEach((formEl) => {
    formEl.addEventListener("submit" , (e => e.preventDefault()));
      setEventListeners(formEl, settings)
  
    });
};


enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  }); 