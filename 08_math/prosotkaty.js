const width = document.querySelector("#width");
const height = document.querySelector("#height");
const color = document.querySelector("#color");

const draw = document.querySelector("#draw");

const rect = document.querySelector("#rect");

const obw = document.querySelector("#obw");
const pole = document.querySelector("#pole");


draw.addEventListener("click", () => {
    rect.style.width = width.value + "cm";
    rect.style.height = height.value + "cm";
    rect.style.backgroundColor = color.value;

    obw.textContent = `Obwód prostokąta jest równy ${width.value * 2 + height.value * 2}cm`;
    pole.textContent = `Pole prostokąta jest równe ${width.value * height.value}cm²`;
});