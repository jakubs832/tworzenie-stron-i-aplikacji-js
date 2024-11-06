const input = document.querySelector("#input");

document.querySelector("#start").addEventListener("click",()=>{
    document.querySelector("#ostart").textContent = input.textContent.substring(9, 19)
});

document.querySelector("#end").addEventListener("click",()=>{
    document.querySelector("#oend").textContent = input.textContent.substring(27)
});