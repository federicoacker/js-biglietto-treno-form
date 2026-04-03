//RECUPERO DEGLI ELEMENTI HTML
const formWrapper = document.querySelector("#form-wrapper");
const ticketWrapper = document.querySelector("#ticket-wrapper");
const formElem = document.querySelector("#ticket-form")
const nameElem = document.querySelector("#user-form-name");
const surnameElem = document.querySelector("#user-form-surname");
const kilomElem = document.querySelector("#user-form-kilometers");
const ageElem = document.querySelector("#user-form-age-category");
const newTicketBtn = document.querySelector("#new-ticket-btn");

// AGGIUNGO EVENT LISTENER
formElem.addEventListener("submit", formSubmitHandler);
newTicketBtn.addEventListener("click", newTicketBtnClickHandler);