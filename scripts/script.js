//Prima cosa, mi serve recuperare i vari field da cui vorrò leggere i dati
const formElem = document.querySelector("#ticket-form")
const nameElem = document.querySelector("#user-form-name");
const surnameElem = document.querySelector("#user-form-surname");
const kilomElem = document.querySelector("#user-form-kilometers");
const ageElem = document.querySelector("#user-form-age-category");

const ticketName = document.querySelector("#nome-p");
const ticketOfferta = document.querySelector("#offerta-p");
const ticketCarrozza = document.querySelector("#carrozza-p");
const ticketCodice = document.querySelector("#codice-p");
const ticketCosto = document.querySelector("#costo-p");

//Adesso, andiamo a creare la funzione che si occuperà di recuperare i dati quando viene fatto il submit
function formSubmitHandler(event){
    event.preventDefault();

    // LOAD DELLE VARIABILI //

    const name = nameElem.value;
    const surname = surnameElem.value; 
    const kilometers = kilomElem.value;
    const ageCategory = ageElem.value; // Per questi, non ho bisogno di fare validazione, visto che è un select e quindi i value glieli ho dati io

    // VALIDAZIONE //
    const stringValidator = validatorGenerator("string"); // Creo la funzione di validazione delle stringhe
    const numberValidator = validatorGenerator("1"); // Creo la funzione di validazione dei numeri

    if(stringValidator(name) === -1){
        alert("Hai inserito un valore non valido nel Nome");
        return;
    }
    if(stringValidator(surname) === -1){
        alert("Hai inserito un valore non valido nel Cognome");
        return;
    }
    if(numberValidator(kilometers) === -1){
        alert("Hai inserito un valore non valido per i Chilometri");
        return;
    }

    // POST VALIDAZIONE //
    // Per questo, devo prima andare a creare l'html del biglietto completato
    const price = calculatePrice(kilometers, ageCategory);

    createTicket(name, surname, kilometers, price);
}

formElem.addEventListener("submit", formSubmitHandler);