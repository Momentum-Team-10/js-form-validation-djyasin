let form = document.getElementById("parking-form");
let nameInput = document.getElementById('name');
let carYear = document.getElementById('car-year');
let stayLength = document.getElementById('days');
let cvv = document.getElementById('cvv');
let submitButton = document.getElementById('submit-button');
let carMake = document.getElementById('car-make');
let modelType = document.getElementById('car-model');
let creditCard = document.getElementById('credit-card');



console.log('Add validation!');

form.addEventListener('submit', (event) => {
    event.preventDefault();
//    validateName(nameInput);
//    validateCarYear(carYear);
//    validatestayLength(stayLength);
//    validateMake(carMake);
//    validateModel(modelType);
//   validateCC(creditCard);
//   validateCVV(cvv);
});

function validateName(input) {
    let errorEl = document.createElement('p')
    errorName.id = "name-error";
 
    if ((input.value) !== '') {
        errorName.innerText = "Please enter your name."
        document.getElementById('input-field').appendChild(errorEl)
        console.log(' enter name')
        nameInput.classList.add('invalid')
    } else {
        if (document.getElementById('name-error')) {
            document.getElementById('name-error').remove()
        }
        nameInput.classList.remove('invalid')
        nameInput.classList.add('valid')
}}