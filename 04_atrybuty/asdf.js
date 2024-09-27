const attrs_element = document.querySelector("#attr");

const dataset = attrs_element.dataset;
const attributes = attrs_element.attributes;

console.log({dataset});
console.log({attributes});


const output_div = document.querySelector("#output");

const show_btn = document.querySelector("#show");
show_btn.addEventListener("click", () => {
    const p_id = document.createElement("p");
    p_id.innerHTML = "Atrybut: <b>data-id</b> ma wartość: " + dataset.id;
    const p_type = document.createElement("p");
    p_type.innerHTML = "Atrybut: <b>data-type</b> ma wartość: " + dataset.type;
    const p_value = document.createElement("p");
    p_value.innerHTML = "Atrybut: <b>data-value</b> ma wartość: " + dataset.value;
    const p_born_date = document.createElement("p");
    p_born_date.innerHTML = "Atrybut: <b>data-born-date</b> ma wartość: " + dataset.bornDate;
    const p_relationship_status = document.createElement("p");
    p_relationship_status.innerHTML = "Atrybut: <b>data-relationship-status</b> ma wartość: " + dataset.relationshipStatus;
    const p_id2 = document.createElement("p");
    p_id2.innerHTML = "Atrybut: <b>id</b> ma wartość: " + attrs_element.id;
    output_div.append(p_id, p_type, p_value, p_born_date, p_relationship_status, p_id2)
})