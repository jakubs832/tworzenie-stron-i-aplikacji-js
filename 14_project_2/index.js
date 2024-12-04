const colors = [
    "szary",
    "niebieski",
    "czerwony",
    "zolty",
    "zielony"
];

const color = document.querySelector("#color");

color.addEventListener("change", () => {
    document.querySelector("#prev").src = `images/${colors[color.value]}.png`;
});

document.querySelector("#model").addEventListener("change", () => {
    document.querySelector("#modelform").submit();
})