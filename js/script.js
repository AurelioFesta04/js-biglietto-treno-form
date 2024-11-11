// elementi form
const formElem = document.getElementById("user-form");
const usernameInput = document.getElementById("username");
const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const submitButtonElem = document.getElementById("submit-btn");
const cardElem = document.querySelector(".d-none");

// elementi card
const passengerNameElem = document.getElementById("nome-passeggero");
const offerPercElem = document.getElementById("percentuale-offerta");
let wagonNumElem = document.getElementById("numero-carrozza");
let cpCodeElem = document.getElementById("codice-cp");
const totalCostElem = document.getElementById("costo-totale");

formElem.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const username = usernameInput.value.trim();
    const km = kmInput.value.trim();
    const eta = parseInt(etaInput.value.trim());

    const kmPrice = 0.21;
    const prezzoBase = (km * kmPrice);
    let percentualeSconto = 0;


    if (eta === "Minorenne (da 0 a 17)") {
        percentualeSconto = 20;
    } else if (eta === "Over 65 (da 65 in poi)") {
        percentualeSconto = 40;
    } else {
        percentualeSconto = 0;
    }

    let prezzoConSconto = (prezzoBase - (prezzoBase * percentualeSconto)).toFixed(2);

    passengerNameElem.innerHTML = username;
    offerPercElem.innerHTML = `${percentualeSconto}%`;
    wagonNumElem.innerHTML = Math.floor((Math.random() * 10) + 1);
    cpCodeElem.innerHTML = Math.floor((Math.random() * 99999) + 10000);
    totalCostElem.innerHTML = `${prezzoConSconto}€`;

    cardElem.classList.remove("d-none");

    formElem.reset();
});