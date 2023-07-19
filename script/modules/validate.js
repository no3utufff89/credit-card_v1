const validate = () => {
    const form = document.querySelector('.form');
    form.addEventListener('submit', e => {
        e.preventDefault()

        if (/([a-zA-Z]+)\s([a-zA-Z]+$)/.test(form['name'].value)) {
            document.querySelector('.holder-validate').textContent = 'Данные валидны';
        } else {
            document.querySelector('.holder-validate').textContent = 'Данные не валидны';
        }
        setTimeout(() => {
            document.querySelector('.holder-validate').style.opacity = 0;
        }, 2000);

        if (/\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(form['number'].value)) {
            document.querySelector('.number-validate').textContent = 'Данные валидны';
        } else {
            document.querySelector('.number-validate').textContent = 'Данные не валидны';
        }
        setTimeout(() => {
            document.querySelector('.number-validate').style.opacity = 0;
        }, 2000);

        if (/\d{3}$/.test(form['cvv'].value)) {
            document.querySelector('.cvv-validate').textContent = 'Данные валидны';
        } else {
            document.querySelector('.cvv-validate').textContent = 'Данные не валидны';
        }
        setTimeout(() => {
            document.querySelector('.cvv-validate').style.opacity = 0;
        }, 2000);
    })
}

export default validate;