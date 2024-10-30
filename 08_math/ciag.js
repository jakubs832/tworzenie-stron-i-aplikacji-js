const first = document.querySelector("#first");
const second = document.querySelector("#second");
const ile = document.querySelector("#ile");
const output = document.querySelector("#output");
const output2 = document.querySelector("#output2");

function addOutput(content) {
    const li = document.createElement("li");
    li.innerHTML = content;
    output.append(li);
}

ile.addEventListener("change", () => {
    ile.value = Math.floor(Math.abs(ile.value));
});

document.querySelector("#calculate").addEventListener("click", () => {
    output.innerHTML = "";
    output2.textContent = "";

    if (!ile.value || ile.value < 1) {
        output2.textContent = "Ilość wyrazów ciągu musi być liczbą naturalną większą lub równą 1.";
        return;
    }

    const firstVal = parseFloat(first.value);
    if (isNaN(firstVal)) {
        output2.textContent = "Pierwszy wyraz ciągu musi być liczbą rzeczywistą.";
        return;
    }

    const secondVal = parseFloat(second.value);
    if (isNaN(secondVal)) {
        output2.textContent = "Drugi wyraz ciągu musi być liczbą rzeczywistą.";
        return;
    }

    const diff = secondVal - firstVal;

    if (ile.value >= 1) addOutput("a<sub>1</sub> = " + firstVal);
    if (ile.value >= 2) addOutput("a<sub>2</sub> = " + (firstVal + diff));
    if (ile.value >= 3) addOutput("a<sub>3</sub> = " + (firstVal + 2 * diff));
    if (ile.value > 6) addOutput("...");
    if (ile.value >= 4) addOutput("a<sub>" + (ile.value - (ile.value - 4)) + "</sub> = " + (firstVal + (ile.value - (ile.value - 4)) * diff));
    if (ile.value >= 5) addOutput("a<sub>" + (ile.value - (ile.value - 5)) + "</sub> = " + (firstVal + (ile.value - (ile.value - 5)) * diff));
    if (ile.value >= 6) addOutput("a<sub>" + ile.value + "</sub> = " + (firstVal + ile.value * diff));

    const sum = (firstVal + ile.value * diff) / 2 * ile.value;
    output2.textContent = "Suma " + ile.value + " początkowych wyrazów ciągu: " + sum;
});