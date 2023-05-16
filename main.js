const submitButton = document.querySelector('.submit-button')
const errorMessage = document.querySelector('.error-message')
const firstPassword = document.querySelector('.firstPassword')
const confirmPassword = document.querySelector('.confirm')
const error = document.querySelector('error')

submitButton.addEventListener('click', ()=> {
    if (firstPassword.value !== confirmPassword) {
        errorMessage.textContent = '* Password does not match'

        firstPassword.classList.add('error')
    }
})