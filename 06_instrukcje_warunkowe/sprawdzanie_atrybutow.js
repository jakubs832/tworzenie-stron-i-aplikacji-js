const btn = document.querySelector("#toggle");
const text = document.querySelector("#text");
text.value = "Odblokuj edycję";
text.setAttribute("disabled", "");
let textValue = "";

btn.addEventListener("click", () => {
    text.toggleAttribute("disabled");
    if(text.hasAttribute("disabled")) {
        btn.textContent = "Edycja jest teraz niemożliwa";
        textValue = text.value;
        text.value = "Odblokuj edycję";
    } else {
        btn.textContent = "Można edytować";
        text.value = textValue;
    }
});