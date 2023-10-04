console.log('ok choice');

const $ = require('jquery');
global.$ = global.jQuery = $;

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne l'élément avec l'ID "message"
    var messageElement = document.getElementById("message");

    // Vérifie si l'élément existe
    if (messageElement) {
        // Modifie le contenu de l'élément
        messageElement.textContent = "Bonjour, monde !";
    }
});