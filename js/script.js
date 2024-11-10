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
    console.log(event);
    event.preventDefault();

    const username = usernameInput.value.trim();
    const km = kmInput.value.trim();
    const eta = parseInt(etaInput.value.trim());

    const kmPrice = 0.21;
    prezzoBase = (km * kmPrice);
    let sconto = 0;


    if (eta < 18) {
        offerPercElem.innerHTML = ("20%");
        sconto = 0.2;
    } else if (eta >= 65) {
        offerPercElem.innerHTML = ("40%");
        sconto = 0.4;
    } else {
        offerPercElem.innerHTML = ("0%");
        sconto = 0;
    }


    passengerNameElem.innerHTML = username;
    offerPercElem.innerHTML = `${sconto}%`;
    wagonNumElem.innerHTML = Math.floor((Math.random() * 10) + 1);
    cpCodeElem.innerHTML = Math.floor((Math.random() * 99999) + 1);
    totalCostElem.innerHTML = (prezzoBase - (prezzoBase * sconto)).toFixed(2);

    cardElem.classList.remove("d-none");

    formElem.reset();
});