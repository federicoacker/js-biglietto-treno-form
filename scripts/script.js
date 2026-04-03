//Prima cosa, mi serve recuperare i vari field da cui vorrò leggere i dati
const formElem = document.querySelector("#ticket-form")
const nameElem = document.querySelector("#user-form-name");
const surnameElem = document.querySelector("#user-form-surname");
const kilomElem = document.querySelector("#user-form-kilometers");
const ageElem = document.querySelector("#user-form-age-category");

//Adesso, andiamo a creare la funzione che si occuperà di recuperare i dati quando viene fatto il submit
function formSubmitHandler(event){
    event.preventDefault();
}

formElem.addEventListener("submit", formSubmitHandler);