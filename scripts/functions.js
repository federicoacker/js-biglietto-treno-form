function validatorGenerator(stringToValidate){ // Funzione che si occuperà della validazione dei miei dati.
    const numberValidation = parseInt(stringToValidate, 10); // Faccio il parseInt, il Number() ha il problema che mi restituisce 0 se gli passo una stringa vuota
    if(!isNaN(numberValidation)){ // In questo caso deve validarmi i numeri, quindi restituisco una funzione che valida quello
        return function validateNumber(numberToValidate){
            if(numberToValidate <= 0){ // A noi per ora basta controllare che il numero non sia inferiore o uguale a 0
                return -1; // Se lo è, restituiamo codice d'errore;
            }
            // Altrimenti restituiamo il numero
            return numberToValidate; 
        }
    }
    // Nel caso in cui la stringa che riceviamo (Che so sicuramente essere una stringa visto che viene da un input) 
    // non è un number allora restituiamo una funzione che valida la stringa
    return function validateString(stringToValidate){
        if(stringToValidate.length === 0){ //Se la stringa che mi hai dato è vuota, ritorna codice d'errore
            return -1;
        }
        for(let i = 0; i < stringToValidate.length; i++){
            const currentChar = stringToValidate[i];
            if(!isNaN(Number(currentChar))){ // Se uno dei caratteri della stringa è un numero
                return -1; // Restituisco codice d'errore
            }
        }
        // A questo punto dovrebbe essere tutto okay con la mia stringa
        return stringToValidate;
    }
}


// FUNZIONE CHE CALCOLA IL PREZZO
function calculatePrice() {
    // Seleziono tutti i field input nella mia form, questi vengono salvati in una nodelist,
    // so che indice 0 ho i chilometri e indice 1 ho l'età per come ho fatto la form
    const trainFormInputs = document.querySelectorAll('#formTreno input');
    // Associo alle mie variabili, kilometers e age, il value che recupero dalla form, inserito dall'utente (di default value 0)
    // che mi viene restituito come stringa
    kilometers = Number(trainFormInputs[0].value);
    age = Number(trainFormInputs[1].value);
    // Validazione di età e chilometraggio
    isKilometersValid = !(isNaN(kilometers) || kilometers <= 0)
    isAgeValid = !(isNaN(age) || age <= 0);

    if(!isKilometersValid){ alert("Il valore inserito per i chilometri non è valido");}
    if(!isAgeValid){ alert("Il valore inserito per l'età non è valido");}

    if (isAgeValid && isKilometersValid) {
        //Calcolo del prezzo
        finalPrice = basePriceKm * kilometers
        if (age < minorAge) {
            finalPrice -= finalPrice * minorSale;
        }
        else if (age >= seniorAge) {
            finalPrice -= finalPrice * seniorSale;
        }
        prezzoTotaleHTML.innerHTML = `Prezzo Totale: ${finalPrice.toFixed(2)} \u20AC`;
    }
    else {
        prezzoTotaleHTML.innerHTML = `Prezzo Totale:`; // Reset della sezione del prezzo in caso di utilizzi sequenziali con errori
        alert("Esecuzione interrotta perché uno o più valori non erano validi");
    }
}