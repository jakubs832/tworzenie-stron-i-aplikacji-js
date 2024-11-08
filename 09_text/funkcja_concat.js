const input = document.querySelector("#input");

document.querySelector("#do").addEventListener("click", ()=>{
    input.textContent = input.textContent.concat("!");
});