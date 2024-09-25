document.querySelector("#zad1").addEventListener("click", () => {
    document.querySelector("h6").innerHTML = "<i>Świetnie!</i>";
});

document.querySelector("#zad2").addEventListener("click", () => {
    document.querySelector("h5").innerText = "<i>Świetnie!</i>";
});

document.querySelector("#zad3").addEventListener("click", () => {
    document.querySelector("#p3").setAttribute("dir", "rtl");
});

document.querySelector("#zad4").addEventListener("click", () => {
    alert(document.querySelector("#p4").getAttribute("title"));
});