const input = document.querySelector("#input");

document.querySelector("#wie").addEventListener("click", ()=>{
    input.textContent = input.textContent.toUpperCase();
});

document.querySelector("#ma").addEventListener("click", ()=>{
    input.textContent = input.textContent.toLowerCase();
});

document.querySelector("#prz").addEventListener("click", ()=>{
    input.textContent = "Euklides z Aleksandrii (stgr. Εὐκλείδης) - grecki matematyk";
});