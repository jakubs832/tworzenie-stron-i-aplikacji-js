const p1 = document.querySelector("#jeden");
const p2 = document.querySelector("#dwa");
const p3 = document.querySelector("#trzy");
const p4 = document.querySelector("#cztery");

document.querySelector("button").addEventListener("click", () => {
    let losowa = Math.floor(Math.random() * 30) + 1;

    p1.textContent = `Wylosowana liczba to: ${losowa}`;
    p1.style.color = "darkorchid";

    p2.textContent = "";
    if (losowa >= 20) {
        p2.textContent = "Wylosowana liczba jest większa lub równa 20";
    }
    p2.style.color = "magenta";

    if (losowa % 2 == 0) {
        p3.textContent = "Liczba jest parzysta";
    } else {
        p3.textContent = "Liczba nie jest parzysta";
    }
    p3.style.color = "navy";


    if (losowa <= 10) {
        p4.textContent = "Pierwsza dziesiątka";
    } else if (losowa <= 20) {
        p4.textContent = "Druga dziesiątka";
    } else {
        p4.textContent = "Trzecia dziesiątka";
    }
    p4.style.color = "deeppink";
});