const input = document.querySelector("#input");

document.querySelector("#edge").addEventListener("click", ()=>{
    input.textContent = input.textContent.replace("Edge", "Janusz Explorer");
});

document.querySelector("#ms").addEventListener("click", ()=>{
    input.textContent = input.textContent.replaceAll("Microsoft", "JanuszPol");
});