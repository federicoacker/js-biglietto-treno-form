function validatorGenerator(stringToValidate) { // Funzione che si occuperà della validazione dei miei dati.
    const numberValidation = Number(stringToValidate); // Trasformo in number, in pratica se a questa funzione do una stringa che contiene un numero o un numero, 
    // lei mi restituisce la funzione per i numeri
    if (!isNaN(numberValidation)) { // In questo caso deve validarmi i numeri, quindi restituisco una funzione che valida quello
        return function validateNumber(numberToValidate) {
            if(typeof(numberToValidate) === "string" && numberToValidate.length !== 0){ // Se ti arriva una stringa nel numberValidator ( cosa che succede di prassi per il nostro utilizzo, controlla che non sia vuota)
                const number = Number(numberToValidate); // Convertila in numero
                if(isNaN(number)){ // Se è NaN allora restituisci codice d'errore
                    return -1;
                }
                if (number <= 0) { // A noi per ora basta controllare che il numero non sia inferiore o uguale a 0
                    return -1; // Se lo è, restituiamo codice d'errore;
                }
                // Altrimenti restituiamo il numero
                return number;
            }
            else if(typeof(numberToValidate) === number && !isNaN(numberToValidate)){ // Altrimenti se ti arriva un numero
                if (number <= 0) { // A noi per ora basta controllare che il numero non sia inferiore o uguale a 0
                    return -1; // Se lo è, restituiamo codice d'errore;
                }
                // Altrimenti restituiamo il numero
                return number;
            }
            return -1; // Altrimenti caso estremo, ti è stato dato tipo un array, allora restituisci errore
        }
    }
    // Nel caso in cui la stringa che riceviamo (Che so sicuramente essere una stringa visto che viene da un input) 
    // non è un number allora restituiamo una funzione che valida la stringa
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


// FUNZIONE CHE CALCOLA IL PREZZO
function calculatePrice(kilometers, ageCategory) {
    //Andiamo a definire le costanti per il calcolo del prezzo
    const basePriceKm = 0.21;
    const minorSale = 0.2;
    const seniorSale = 0.4;
    let finalPrice = basePriceKm * kilometers;

    //Ricordiamoci che noi dal select otterremo come value, 0 per i minori, 1 per gli adulti e 2 per i senior
    if (ageCategory == 0) {
        finalPrice -= finalPrice * minorSale;
    }
    else if (ageCategory == 2) {
        finalPrice -= finalPrice * seniorSale;
    }

    //Ritorniamo il prezzo finale
    return finalPrice;
}

// La funzione che crea il biglietto, semplicemente, si prende tutte le field da modificare, le modifica con i valori giusti che le sono passati
// o per valori come carrozza e codice, genera dei valori

function createTicket(name, surname, ageCategory, price) {
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