const people = [];

document.querySelector("#a1").addEventListener("click", () => {
    people[0] = "Ritchie Blackmore";
    showPeople();
});

document.querySelector("#a2").addEventListener("click", () => {
    people[1] = "Jon Lord";
    showPeople();
});

document.querySelector("#a3").addEventListener("click", () => {
    people[2] = "Nick Simper";
    showPeople();
});

document.querySelector("#a4").addEventListener("click", () => {
    people[3] = "Ian Paice";
    showPeople();
});

document.querySelector("#a5").addEventListener("click", () => {
    people[4] = "Rod Evans";
    showPeople();
});

function showPeople() {
    document.querySelector("#out").textContent = 
        "Deep Purple - brytyjski zespół rockowy, założony w 1968 w składzie: " + 
        people.filter(String).join(", ") +
        ".";
}