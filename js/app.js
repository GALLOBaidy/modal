// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay



//On crée nos variable pour pouvoir cibler nos balises button grâce à leur class
let _open = document.querySelector(".modal-btn");
let _modal = document.querySelector(".modal-overlay");
let _close = document.querySelector(".close-btn");

//On ajoute un événement click sur du button "open modal"
_open.addEventListener("click", ouvrir);

//La fonction s'éxécute dès que l'événement est déclenché
//Ajout de la class "open-modal"
function ouvrir(){
    _modal.classList.add("open-modal");
}

//On ajoute un événement click sur du button qui a la class "close-btn"
_close.addEventListener("click", fermer);

//La fonction s'éxécute dès que l'événement est déclenché
//On retire la class "open-modal"
function fermer(){
    _modal.classList.remove("open-modal");
}