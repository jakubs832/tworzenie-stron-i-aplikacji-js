const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");

document.querySelector("#start").addEventListener("click", ()=>{
    console.log(input.textContent.split("|"));
});

document.querySelector("#start2").addEventListener("click", ()=>{
    console.log(input2.textContent.split(" ").slice(0, 17));
});