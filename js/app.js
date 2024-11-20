// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay

let _open = document.querySelector(".modal-btn");
let _modal = document.querySelector(".modal-overlay");
let _close = document.querySelector(".close-btn");

_open.addEventListener("click", ouvrir);

function ouvrir(){
    _modal.classList.add("open-modal");
}

_close.addEventListener("click", fermer);
function fermer(){
    _modal.classList.remove("open-modal");
}