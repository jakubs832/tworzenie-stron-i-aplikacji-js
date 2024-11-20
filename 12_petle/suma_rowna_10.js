const fieldset = document.querySelector("fieldset");

let sum10 = 0;

for(let i = 100; i <= 999; i++) {
    let i_string = i.toString();
    let sum = parseInt(i_string[0]) + parseInt(i_string[1]) + parseInt(i_string[2]);

    const span = document.createElement("span");
    span.textContent = i;
    if(sum == 10) {
        span.style.color = "red";
        span.style.fontWeight = "bold";
        sum10++;
    }

    fieldset.append(span);
    fieldset.append(i == 999 ? "." : ", ");
}

document.querySelector("h3").textContent = "Liczba liczb których suma cyfr wynosi 10: " + sum10;