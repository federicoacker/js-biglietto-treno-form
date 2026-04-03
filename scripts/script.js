//Prima cosa, mi serve recuperare i vari field da cui vorrò leggere i dati
const formWrapper = document.querySelector("#form-wrapper");
const ticketWrapper = document.querySelector("#ticket-wrapper");
const formElem = document.querySelector("#ticket-form")
const nameElem = document.querySelector("#user-form-name");
const surnameElem = document.querySelector("#user-form-surname");
const kilomElem = document.querySelector("#user-form-kilometers");
const ageElem = document.querySelector("#user-form-age-category");
const newTicketBtn = document.querySelector("#new-ticket-btn");



//Adesso, andiamo a creare la funzione che si occuperà di recuperare i dati quando viene fatto il submit
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
    formWrapper.classList.add("d-none");
    newTicketBtn.classList.remove("d-none");
}

function newTicketBtnClickHandler(){
    ticketWrapper.classList.add("d-none");
    newTicketBtn.classList.add("d-none");
    formWrapper.classList.remove("d-none");
}

formElem.addEventListener("submit", formSubmitHandler);

newTicketBtn.addEventListener("click", newTicketBtnClickHandler);