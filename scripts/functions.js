// FUNZIONE CHE GENERA VALIDATORI DI DATI
function validatorGenerator(typeString) { // Funzione che si occuperà di generare validatori per i miei dati
    if (typeString === "number") { //Se la typestring inserita è number, allora voglio un validatore di nummeri
        return function validateNumber(numberToValidate) {
            if(typeof(numberToValidate) === "string" && numberToValidate.length !== 0){ // Se ti arriva una stringa nel numberValidator ( cosa che succede di prassi per il nostro utilizzo, controlla che non sia vuota)
                const number = Number(numberToValidate); // Convertila in numero
                if(isNaN(number) || number <= 0){ // Se è NaN o è <=0 allora restituisci codice d'errore
                    return -1;
                }
                // Altrimenti restituiamo il numero
                return number;
            }
            else if(typeof(numberToValidate) === "number" && !isNaN(numberToValidate)){ // Altrimenti se ti arriva un numero
                if (numberToValidate <= 0) { // A noi per ora basta controllare che il numero non sia inferiore o uguale a 0
                    return -1; // Se lo è, restituiamo codice d'errore;
                }
                // Altrimenti restituiamo il numero
                return numberToValidate;
            }
            return -1; // Altrimenti caso estremo, ti è stato dato tipo un array, allora restituisci errore
        }
    }
    // Se la typestring è "string" allora voglio il validatore per le stringhe
    if (typeString === "string"){
        return function validateString(stringToValidate) {
            if (stringToValidate.length === 0) { //Se la stringa che mi hai dato è vuota, ritorna codice d'errore
                return -1;
            }
            for (let i = 0; i < stringToValidate.length; i++) {
                const currentChar = stringToValidate[i];
                if (!isNaN(Number(currentChar))) { // Se uno dei caratteri della stringa è un numero
                    return -1; // Restituisco codice d'errore
                }
            }
            // A questo punto dovrebbe essere tutto okay con la mia stringa
            return stringToValidate;
        }
    }
}


// FUNZIONE CHE CALCOLA IL PREZZO
function calculatePrice(kilometers, ageCategory) {
    //Andiamo a definire le costanti per il calcolo del prezzo
    const basePriceKm = 0.21;
    const minorSale = 0.2;
    const seniorSale = 0.4;
    let finalPrice = basePriceKm * kilometers;

    //Ricordiamoci che noi dal select otterremo come value, 0 per i minori, 1 per gli adulti e 2 per i senior
    if (Number(ageCategory) === 0) {
        finalPrice -= finalPrice * minorSale;
    }
    else if (Number(ageCategory) === 2) {
        finalPrice -= finalPrice * seniorSale;
    }

    //Ritorniamo il prezzo finale
    return finalPrice;
}

//FUNZIONE CHE CREA IL BIGLIETTO
function createTicket(name, surname, ageCategory, price) {// La funzione che crea il biglietto, semplicemente, si prende tutte le field da modificare, le modifica con i valori giusti che le sono passati
// o per valori come carrozza e codice, genera dei valori
    const ticketName = document.querySelector("#nome-p");
    const ticketOfferta = document.querySelector("#offerta-p");
    const ticketCarrozza = document.querySelector("#carrozza-p");
    const ticketCodice = document.querySelector("#codice-p");
    const ticketCosto = document.querySelector("#costo-p");

    const carrozza = Math.floor(Math.random() * 10) + 1;
    const codice = `TI-${Math.floor(Math.random() * 99999)}`;

    ticketName.innerText =  `${name} ${surname}`;
    ticketOfferta.innerText = (ageCategory == 0) ? "Offerta Minorenni" : (ageCategory == 1) ? "Offerta Standard" : "Offerta per Senior";
    ticketCarrozza.innerText = `Carrozza n.${carrozza}`;
    ticketCodice.innerText = codice;
    ticketCosto.innerText = `${price.toFixed(2)} ${'\u20AC'} `;

}

// FUNZIONE HANDLER PER IL SUBMIT
function formSubmitHandler(event){
    event.preventDefault();

    // LOAD DELLE VARIABILI //

    let name = nameElem.value;
    let surname = surnameElem.value; 
    let kilometers = Number(kilomElem.value);
    const ageCategory = ageElem.value; // Per questi, non ho bisogno di fare validazione, visto che è un select e quindi i value glieli ho dati io

    // VALIDAZIONE //
    const stringValidator = validatorGenerator("string"); // Creo la funzione di validazione delle stringhe
    const numberValidator = validatorGenerator("number"); // Creo la funzione di validazione dei numeri

    name = stringValidator(name);
    if(name === -1){
        alert("Hai inserito un valore non valido nel Nome");
        return;
    }
    surname = stringValidator(surname);
    if(surname === -1){
        alert("Hai inserito un valore non valido nel Cognome");
        return;
    }
    kilometers = numberValidator(kilometers);
    if(kilometers === -1){
        alert("Hai inserito un valore non valido per i Chilometri");
        return;
    }

    // POST VALIDAZIONE //
    // Per questo, devo prima andare a creare l'html del biglietto completato
    const price = calculatePrice(kilometers, ageCategory);

    createTicket(name, surname, ageCategory, price);
    nameElem.value = "";
    surnameElem.value = "";
    kilomElem.value = "";
    ageElem.value = "0";

    ticketWrapper.classList.remove("d-none");
    newTicketBtn.classList.remove("d-none");
    formWrapper.classList.add("d-none");
}

// FUNZIONE HANDLER PER IL BOTTONE PER RITORNARE ALLA SCHERMATA INIZIALE

function newTicketBtnClickHandler(){
    ticketWrapper.classList.add("d-none");
    newTicketBtn.classList.add("d-none");
    formWrapper.classList.remove("d-none");
}