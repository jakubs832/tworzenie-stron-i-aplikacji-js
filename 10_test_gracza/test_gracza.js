for (const question of document.querySelectorAll("li")) {
    const hint = question.querySelector(".hint");
    const hintLink = question.querySelector(".hintlink");
    const answer = question.querySelector(".answer");
    const answerLink = question.querySelector(".answerlink");

    let clicks = 0;

    hintLink.addEventListener("click", e => {
        e.preventDefault();

        const answerText = answer.textContent;
        hint.style.display = "inline";
        switch (clicks) {
            case 0:
                hint.textContent = getStars(answerText.length) + " (" + answerText.length + ")";
                hintLink.innerHTML = "&blk34;";
                break;
            case 1:
                hint.textContent = answerText[0] + getStars(answerText.length - 1) + " (" + answerText.length + ")";
                hintLink.innerHTML = "&blk12;";
                break;
            case 2:
                hint.textContent = answerText[0] + getStars(answerText.length - 2) + answerText.slice(-1) + " (" + answerText.length + ")";
                hintLink.innerHTML = "&blk14;";
                break;
            case 3:
                hint.style.display = "none";
                hintLink.style.display = "none";
                answer.style.display = "inline";
                answerLink.style.display = "none";
                break;
        }
        clicks++;
    });

    answerLink.addEventListener("click", e => {
        e.preventDefault();

        const userAnswer = prompt("Podaj odpowiedź:");
        if (userAnswer == answer.textContent) {
            alert("Poprawna odpowiedź!");
            hint.style.display = "none";
            hintLink.style.display = "none";
            answer.style.display = "inline";
            answerLink.style.display = "none";
        }
    });
}

function getStars(count) {
    let stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*";
    }
    return stars;
}