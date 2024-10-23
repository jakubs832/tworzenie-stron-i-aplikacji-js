let number = parseFloat(prompt("Podaj liczbę rzeczywistą:"));
if (isNaN(number)) {
    alert("Złe dane.");
    location.reload();
}

document.querySelector("#user").textContent = `Podana liczba: ${number}`;
document.querySelector("#abs").textContent = `abs(${number}) = ${Math.abs(number)}`;
document.querySelector("#ceil").textContent = `ceil(${number}) = ${Math.ceil(number)}`;
document.querySelector("#floor").textContent = `floor(${number}) = ${Math.floor(number)}`;
document.querySelector("#max").textContent = `max(${number}) = ${Math.max(number)}`;
document.querySelector("#min").textContent = `min(${number}) = ${Math.min(number)}`;
document.querySelector("#pow").textContent = `pow(${number}, 2) = ${Math.pow(number, 2)}`;
document.querySelector("#round").textContent = `round(${number}) = ${Math.round(number)}`;
document.querySelector("#sqrt").textContent = `sqrt(${number}) = ${Math.sqrt(number)}`;

document.querySelector("#refresh").addEventListener("click", () => {
    location.reload();
});