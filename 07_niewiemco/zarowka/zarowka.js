const zarowka = document.querySelector("#zarowka");

const btnon = document.querySelector("#btnon");
const btnoff = document.querySelector("#btnoff");

const radioon = document.querySelector("#radioon");
const radiooff = document.querySelector("#radiooff");
radiooff.checked = true;

const toggle = document.querySelector("#toggle");
toggle.checked = false;

btnon.addEventListener("click", () => {
    zarowka.src = "on.png";
    radioon.checked = true;
    toggle.checked = true;
});

btnoff.addEventListener("click", () => {
    zarowka.src = "off.png";
    radiooff.checked = true;
    toggle.checked = false;
});

radioon.addEventListener("click", () => {
    zarowka.src = "on.png";
    toggle.checked = true;
});

radiooff.addEventListener("click", () => {
    zarowka.src = "off.png";
    toggle.checked = false;
});

toggle.addEventListener("click", () => {
    if(toggle.checked) {
        zarowka.src = "on.png";
        radioon.checked = true;
    } else {
        zarowka.src = "off.png";
        radiooff.checked = true;
    }  
});