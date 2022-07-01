console.log("This is a form validation project");

const namee = document.getElementById('namee');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validNamee = false;
let validEmail = false;
let validPhone = false;



// console.log(name, email, phone)

// Validating Name, Email and Phone.
namee.addEventListener('blur', () => {
    console.log('name is blurred');

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;

    let str = namee.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Name is valid');

        // Removing red error class 
        namee.classList.remove('is-invalid');

        validNamee = true;
    }
    else {
        console.log('Not matched');

        // Giving red error
        namee.classList.add('is-invalid');

        validNamee = false;

    }
});

email.addEventListener('blur', () => {
    console.log('email is blurred');

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Email is valid');

        // Removing red error class 
        email.classList.remove('is-invalid');

        validEmail = true;
    }
    else {
        console.log('Not matched');

        // Giving red error
        email.classList.add('is-invalid');

        validEmail = false;

    }
});

phone.addEventListener('blur', () => {
    console.log('phone is blurred');

    let regex = /^([0-9]){10}$/;

    let str = phone.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log('phone is valid');

        // Removing red error class 
        phone.classList.remove('is-invalid');

        validPhone = true;
    }
    else {
        console.log('Not matched');

        // Giving red error
        phone.classList.add('is-invalid');

        validPhone = false;

    }
});

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {

    console.log("You clicked on submit", e);

    e.preventDefault();

    if (validNamee && validEmail && validPhone) {

        console.log('Phone, email and user are valid. Submitting the form.');

        let success = document.getElementById('success');

        success.classList.remove('d-none');
        failure.classList.add('d-none');
    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form, Please check again and correct the errors.');

        let failure = document.getElementById('failure');

        failure.classList.remove('d-none');
        success.classList.add('d-none');


    }

})