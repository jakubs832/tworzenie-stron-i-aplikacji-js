const hiddenInput = document.querySelector("#hidden-input");
const outputDiv = document.querySelector("#output");

console.log(hiddenInput.dataset);

document.querySelector("#generate").addEventListener("click", () => {
    outputDiv.innerHTML = "";

    const input1 = document.createElement("input");
    input1.value = hiddenInput.dataset.song1;

    const input2 = document.createElement("input");
    input2.value = hiddenInput.dataset.song2;

    const input3 = document.createElement("input");
    input3.value = hiddenInput.dataset.song3;

    outputDiv.append(input1, document.createElement("br"), input2, document.createElement("br"), input3)
});