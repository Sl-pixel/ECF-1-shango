
var btndons = document.querySelectorAll('.btndon');
btndons.forEach(function(btndon) {
    btndon.addEventListener('click', function() {
        btndons.forEach(function(btn) {
            btn.classList.remove('selectionner');
        });
        btndon.classList.add('selectionner');
    });
});


var donTimes = document.querySelectorAll('.donTime');
donTimes.forEach(function(donTime) {
    donTime.addEventListener('click', function() {
        donTimes.forEach(function(btn) {
            btn.classList.remove('timeSelect');
        });
        donTime.classList.add('timeSelect');
    });
   
});
    
// animaux caroussel 
var displayAnimaux = document.getElementById('displayAnimaux');
nom = document.getElementById('displayName')
histoire = document.getElementById('petHistoire')

function afficherLuna() {

  displayAnimaux.style.backgroundImage = "url('ECF PIC/luna.avif')";
  displayAnimaux.style.backgroundSize = 'cover';
  displayAnimaux.style.backgroundRepeat = 'no-repeat';
  displayAnimaux.style.backgroundPosition = 'center';
  nom.innerHTML= 'Luna'
  histoire.innerHTML = 'Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle vie maintenant des jours heureux dans sa nouvelle famille.'


}
  
function afficherOscar() {
  displayAnimaux.style.backgroundImage = "url('ECF PIC/oscar.avif')";
  displayAnimaux.style.backgroundSize = 'cover';
  displayAnimaux.style.backgroundRepeat = 'no-repeat';
  displayAnimaux.style.backgroundPosition = 'center';
  nom.innerHTML= 'Oscar'
  histoire.innerHTML = 'Trouvé dans la rue avec une patte cassée, Oscar a été soignée et a retrouvé sa joie de vivre. Il vie maintenant des jours heureux dans sa nouvelle famille.'
}
  
function afficherMax() {

  displayAnimaux.style.backgroundImage = "url('ECF PIC/max.avif')"; 
  displayAnimaux.style.backgroundSize = 'cover';
  displayAnimaux.style.backgroundRepeat = 'no-repeat';
  displayAnimaux.style.backgroundPosition = 'center';
  nom.innerHTML= 'Max'
  histoire.innerHTML = 'Trouvé dans la rue avec une patte cassée, Max a été soignée et a retrouvé sa joie de vivre. Il vie maintenant des jours heureux dans sa nouvelle famille.'

  
}

var boxes = document.querySelectorAll('.box');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        boxes.forEach(function(b) {
            b.classList.remove('petSelect');
        });
        box.classList.add('petSelect');
    });
});



  
    // form JS
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // recuperation des input 
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    // recuperation des div d'erreur
    var errorUsername = document.getElementById("error-username");
    var errorEmail = document.getElementById("error-email");
    var errorMessage = document.getElementById("error-message");

    let isValid = true;
    // reset les message error
    errorUsername.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMessage.innerHTML = "";  
    // validation utilisateur
    if (username === "") {
            errorUsername.innerHTML = "Le nom d'utilisateur est obligatoire.";
          isValid = false;
    }
    // validation mail
    let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(email)) {
        errorEmail.innerHTML = "Veuillez entrer une adresse e-mail valide.";
        isValid = false;
    }
   
  // validation message
    if (message === "") {
      errorMessage.innerHTML = "Le message est obligatoire pour valider l'envoie.";
      isValid = false;
  }

  if (isValid) {
    alert("Formulaire envoyé avec succès!");
}
});
  