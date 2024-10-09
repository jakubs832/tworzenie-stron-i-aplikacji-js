const pMiesiac = document.querySelector("#miesiac");
const pKwartal = document.querySelector("#kwartal");

let miesiac = Math.floor(Math.random() * 15) + 1;

pMiesiac.textContent = miesiac;

switch (miesiac) {
    case 1:
    case 2:
    case 3:
        pKwartal.textContent = "I kwartał";
        break;
    case 4:
    case 5:
    case 6:
        pKwartal.textContent = "II kwartał";
        break;
    case 7:
    case 8:
    case 9:
        pKwartal.textContent = "III kwartał";
        break;
    case 10:
    case 11:
    case 12:
        pKwartal.textContent = "IV kwartał";
        break;
    default:
        pKwartal.textContent = "Błędny numer miesiąca";
        break;
}