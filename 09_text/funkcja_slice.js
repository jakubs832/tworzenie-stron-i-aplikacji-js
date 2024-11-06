const input = document.querySelector("#input");

document.querySelector("#start").addEventListener("click",()=>{
    document.querySelector("#ostart").textContent = input.textContent.slice(26, 36)
});

document.querySelector("#end").addEventListener("click",()=>{
    document.querySelector("#oend").textContent = input.textContent.slice(-12, -5)
});