import Inputmask  from "inputmask";
export const listeners = () => {
    const cardNumber = document.querySelector('.card__number');
    const cardHolder = document.querySelector('.card__name');
    const cardDate = document.querySelector('.card__date');

    const cardHolderInput = document.querySelector('.input__holder');
    const cardNumberInput = document.querySelector('.input__number');
    const cardExpiryInput = document.querySelector('.input__date');
    const cardCvvInput = document.querySelector('.input__cvv');

    const dateMask = new Inputmask('99/99');
    const holderMask = new Inputmask('9999 9999 9999 9999');
    const cvvMask = new Inputmask('999');

    cardHolderInput.addEventListener('input', () => {
        cardHolderInput.value = cardHolderInput.value.replace(/(^[\s-])|([^a-z\s-])/i, '');
        cardHolder.textContent = cardHolderInput.value;
        if (cardHolderInput.value === '') {
            cardHolder.textContent = 'John Doe';
        }

    });

    cardNumberInput.addEventListener('input', () => {
        cardNumberInput.value = cardNumberInput.value.replace(/\D/ig,'');
        cardNumber.textContent = cardNumberInput.value;
        holderMask.mask(cardNumberInput);
        if (cardNumberInput.value === '') {
            cardNumber.textContent = 'xxxx xxxx xxxx xxxx';
        }
    });

    cardExpiryInput.addEventListener('input', () => {
        cardExpiryInput.value = cardExpiryInput.value.replace(/\D/ig, '');
        cardDate.textContent = cardExpiryInput.value;
        dateMask.mask(cardExpiryInput);
        if (cardExpiryInput.value === '') {
            cardDate.textContent = '04/24'
        }
    });

    cardCvvInput.addEventListener('input', () => {
        cardCvvInput.value = cardCvvInput.value.replace(/\D/ig, '');
        cvvMask.mask(cardCvvInput);
    })
}