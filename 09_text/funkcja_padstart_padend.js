const input = document.querySelector("#input");

document.querySelector("#start").addEventListener("click", ()=>{
    input.textContent = input.textContent.padStart(20, "_");
});

document.querySelector("#end").addEventListener("click", ()=>{
    input.textContent = input.textContent.padEnd(30, ".");
});