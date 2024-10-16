const show = document.querySelector("#show");
show.checked = false;
show.addEventListener("change", ()=>{
    if(show.checked) {
        for(const num of document.querySelectorAll(".num")) {
            num.classList.remove("blur");
        }
    } else {
        for(const num of document.querySelectorAll(".num")) {
            num.classList.add("blur");
        }
    }
});