document.querySelector("#show").addEventListener("click", ()=>{
    let imie = prompt("Podaj swoje imie");
    if(imie != null) {
        alert("Witaj " + imie);
    } else {
        alert("Anulowałeś akcję, a okienko zwróciło " + imie);
    }
});