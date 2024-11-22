const table = document.querySelector("table");
const colsInput = document.querySelector("#cols");
const rowsInput = document.querySelector("#rows");

document.querySelector("#generate").addEventListener("click", () => {
    table.innerHTML = "";

    if(colsInput.value > 500) colsInput.value = 500;
    if(colsInput.value < 0) colsInput.value = 0;
    if(rowsInput.value > 500) rowsInput.value = 500;
    if(rowsInput.value < 0) rowsInput.value = 0;

    for(let i = 0; i < rowsInput.value; i++) {
        const row = document.createElement("tr");
        for(let j = 0; j < colsInput.value; j++) {
            const cell = document.createElement("td");
            cell.textContent = `${i+1}|${j+1}`;
            row.append(cell);
        }
        table.append(row);
    }
});