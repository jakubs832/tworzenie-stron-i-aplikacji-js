const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const output = document.querySelector("#output");
const outputreszta = document.querySelector("#outputreszta");

function update() {
    n1.value = Math.round(n1.value);
    n2.value = Math.round(n2.value);
    
    let wynik = parseInt(n1.value / n2.value)

    if(isNaN(wynik)) {
        output.value = "";
        outputreszta.value = "";
    } else {
        output.value = wynik;
        outputreszta.value = n1.value % n2.value;
    }
}

n1.addEventListener("change", update);
n2.addEventListener("change", update);