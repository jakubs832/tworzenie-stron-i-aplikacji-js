const form = document.querySelector("form");

for(let i = 1; i <= 100; i++) {
    const input = document.createElement("input");
    input.id = `i${i}`;
    input.name = "nazwa";
    input.style.margin = "10px";
    input.style.boxShadow = "5px 5px 0 lightblue";
    input.placeholder = `Element numer ${i}`;
    
    form.append(input);

    if(i % 5 == 0) {
        form.append(document.createElement("br"));
    }
}