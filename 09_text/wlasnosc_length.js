document.querySelector("#do").addEventListener("click", ()=>{
    const out = `Tekst powyżej ma długość ${document.querySelector("#input").textContent.length} znaków`;
    document.querySelector("#output").textContent = out;
});