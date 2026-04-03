function validatorGenerator(stringToValidate) { // Funzione che si occuperà della validazione dei miei dati.
    const numberValidation = parseInt(stringToValidate, 10); // Faccio il parseInt, il Number() ha il problema che mi restituisce 0 se gli passo una stringa vuota
    if (!isNaN(numberValidation)) { // In questo caso deve validarmi i numeri, quindi restituisco una funzione che valida quello
        return function validateNumber(numberToValidate) {
            if (numberToValidate <= 0) { // A noi per ora basta controllare che il numero non sia inferiore o uguale a 0
                return -1; // Se lo è, restituiamo codice d'errore;
            }
            // Altrimenti restituiamo il numero
            return numberToValidate;
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
    const finalPrice = basePriceKm * kilometers;

    //Ricordiamoci che noi dal select otterremo come value, 0 per i minori, 1 per gli adulti e 2 per i senior
    if (age == 0) {
        finalPrice -= finalPrice * minorSale;
    }
    else if (age == 2) {
        finalPrice -= finalPrice * seniorSale;
    }

    //Ritorniamo il prezzo finale
    return finalPrice;
}


function createTicket(name, surname, kilometers, price) {
    const ticketName = document.querySelector("#nome-p");
    const ticketOfferta = document.querySelector("#offerta-p");
    const ticketCarrozza = document.querySelector("#carrozza-p");
    const ticketCodice = document.querySelector("#codice-p");
    const ticketCosto = document.querySelector("#costo-p");

}