const form = document.querySelector("form");

const pesel = document.querySelector("#pesel");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const colorFields = document.querySelectorAll("[name='color']");

form.addEventListener("submit", (e) => {
    pesel.style.backgroundColor = null;
    firstname.style.backgroundColor = null;
    lastname.style.backgroundColor = null;
    for(const field of colorFields) {
        field.style.outline = null;
    }

    let valid = true;

    if(pesel.value.length != 11) {
        pesel.style.backgroundColor = "lightcoral";
        valid = false;
    }
    if(firstname.value.length == 0) {
        firstname.style.backgroundColor = "lightcoral";
        valid = false;
    }
    if(lastname.value.length == 0) {
        lastname.style.backgroundColor = "lightcoral";
        valid = false;
    }

    if(document.querySelector("[name='color']:checked") == null) {
        for(const field of colorFields) {
            field.style.outline = "2px solid lightcoral";
        }
        valid = false;
    }

    if(!valid) e.preventDefault();
});