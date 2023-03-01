const inputs = document.querySelectorAll('input');
const patterns = {
    phone: /^\d{11}$/,
    f_Name: /^[a-z\d]{5,12}$/i,
    password: /^[\w@_]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// validation function
function validate(field, regex) {
    if(regex.test(field.value) == true) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target, e.target.nextElementSibling);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});