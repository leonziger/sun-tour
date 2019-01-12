import { maskInput } from 'vanilla-text-mask';


const phoneMask = ['+','3','8', '0', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

export default {
  mask() {
    return maskInput({
      inputElement: document.querySelector('.callback__phone'),
      mask: phoneMask,
      showMask: true
    });
  }
};


