import {el, mount, setChildren} from "../../node_modules/redom/dist/redom.es.js";

export const createApp = () => {
    const wrapper = el('.wrapper')
    const creditCard = el('.credit-card');
    const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
    const cardPersonal = el('.card__personal', el('span.card__name', {textContent: 'John Doe'}), el('span.card__date', '04/24'));
    setChildren(creditCard, cardNumber, cardPersonal)

    // Форма

    const form = el('form', {
        className: 'form',
        action: '#',
        id: 'form'
    });

    const cardHolderInput = el('.form__input-wrap form__input-wrap_holder',
        el('label.form__label form__holder-label','Card Holder'),
        el('input', {
            className: 'input input__holder',
            type: 'text',
            name: 'name'
        }));

    const holderValidate = el('h2.holder-validate')

    const cardNumberInput = el('.form__input-wrap form__input-wrap_number',
        el('label.form__label form__number-label','Card Number'),
        el('input', {
            className: 'input input__number',
            id: 'cardNumber',
            name: 'number'
        }));

    const numberValidate = el('h2.number-validate')

    const cardExpiryInput = el('.form__input-wrap form__input-wrap_date',
        el('label.form__label form__date-label','Card Expiry'),
        el('input', {
            className: 'input input__date',
            type: 'text',

        }));

    const cardCvvInput = el('.form__input-wrap form__input-wrap_cvv',
        el('label.form__label form__cvv-label','CVV'),
        el('input', {
            className: 'input input__cvv',
            type: 'text',
            maxLength: 3,
            name: 'cvv'
        }));

    const cvvValidate = el('h2.cvv-validate')

    const button = el('button.form__button', 'CHECK OUT')
    setChildren(form, cardHolderInput, holderValidate, cardNumberInput, numberValidate, cardExpiryInput, cardCvvInput, cvvValidate, button)
    const card = el('.card', [el('p.secure', 'Secure Checkout'), creditCard, form]);


    mount(wrapper, card);
    return wrapper;
}