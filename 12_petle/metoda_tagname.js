document.querySelector("#find").addEventListener("click", () => {
    const div = document.querySelector("div");
    const content = div.querySelectorAll("*");
    console.log(content);
    for(const el of content) {;
        if(el.tagName == "STRONG") {
            el.style.border = "10px dotted green";
        }
    }
});