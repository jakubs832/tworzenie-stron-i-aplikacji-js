const wynik = document.querySelector("#wynik");
const toggle = document.querySelector("#toggle");

wynik.style.display = "none";

toggle.addEventListener("click", ()=>{
    if(wynik.style.display == "none") {
        wynik.style.display = "inline";
        toggle.textContent = "Ukryj wynik";
    } else {
        wynik.style.display = "none";
        toggle.textContent = "Pokaż wynik";
    }
});