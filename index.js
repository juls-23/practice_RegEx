'use strict';

const form = document.getElementById('root-form');

const validationText = document.getElementById('validation-text');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  validationText.remove()
  const {target:{textInput}} = e;
  const inputValue = textInput.value.trim();
  const validator =  /^[^<>:"\/\|?*]+\.(pn|jp)g$/; 
  if(validator.test(inputValue)){
    validationText.remove()
    validationText.style.color = 'black'
    validationText.innerText = 'submited'
    form.reset();
  } else {
    validationText.style.color = 'red'
    validationText.innerText = 'not valid input'
    form.reset();
  }
  document.body.append(validationText);
})



