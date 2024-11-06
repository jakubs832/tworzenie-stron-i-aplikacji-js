const input = document.querySelector("#input");

document.querySelector("#start").addEventListener("click",()=>{
    document.querySelector("#ostart").textContent = input.textContent.substr(27, 9)
});

document.querySelector("#end").addEventListener("click",()=>{
    document.querySelector("#oend").textContent = input.textContent.substr(37)
});