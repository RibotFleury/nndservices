// Fonction pour afficher les messages d'erreur
const displayError = (id, message, type = "error") => {
  const errorElement = document.getElementById(`${id}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.className =
      type === "error"
        ? "error-message text-danger"
        : "error-message text-success";
  }
};

// Validation du nom
const validateTextField = (id, minLength = 3, maxLength = 50, fieldLabel) => {
  const input = document.getElementById(id);
  if (input.value.length < minLength) {
    displayError(
      id,
      `Le ${fieldLabel} doit contenir au moins ${minLength} caractères.`
    );
    return false;
  } else if (input.value.length > maxLength) {
    displayError(
      id,
      `Le ${fieldLabel} doit contenir moins de ${maxLength} caractères.`
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation du numéro de téléphone (10 chiffres)
const validatePhoneNumber = (id) => {
  const phone = document.getElementById(id).value;
  const phoneRegex = /^[0-9]{10}$/; // Format de numéro de téléphone : 10 chiffres
  if (!phoneRegex.test(phone)) {
    displayError(id, "Numéro de téléphone invalide. Utilisez 10 chiffres.");
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation de l'email
const validateEmail = (id) => {
  const email = document.getElementById(id).value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format basique d'email
  if (!emailRegex.test(email)) {
    displayError(
      id,
      "Adresse email invalide. Veuillez entrer une adresse valide."
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation des adresses
const validateAddress = (pickupId) => {
  const pickupAddress = document.getElementById(pickupId).value;
  console.log(`Pickup Address: ${pickupAddress}`);
  if (pickupAddress.length < 5) {
    displayError(pickupId, "L'adresse de ramassage est trop courte.");
    return false;
  }
  displayError(pickupId, "", "success");
  return true;
};

// Validation de la date de déménagement
const validateMovingDate = (id) => {
  const movingDate = new Date(document.getElementById(id).value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Réinitialiser les heures pour la comparaison
  if (movingDate < today) {
    displayError(
      id,
      "La date de junk ne peut pas être antérieure à aujourd'hui."
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation du nombre de pièces
const validateSize = (id) => {
  const size = document.getElementById(id).value;
  if (isNaN(size) || size <= 0) {
    displayError(id, "Le nombre de pièces doit être un nombre positif.");
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation des champs texte
const validateTextarea = (id, minLength = 10, fieldLabel) => {
  const textarea = document.getElementById(id);
  if (textarea.value.length < minLength) {
    displayError(
      id,
      `${fieldLabel} doit contenir au moins ${minLength} caractères.`
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation en temps réel pour les champs de saisie
document
  .getElementById("name-field")
  .addEventListener("input", () =>
    validateTextField("name-field", 5, 50, "Nom")
  );
document
  .getElementById("tel-field")
  .addEventListener("input", () => validatePhoneNumber("tel-field"));
document
  .getElementById("email-field")
  .addEventListener("input", () => validateEmail("email-field"));
document
  .getElementById("date-demenage-field")
  .addEventListener("change", () => validateMovingDate("date-demenage-field"));

document
  .getElementById("pickup-address-field")
  .addEventListener("input", () => validateAddress("pickup-address-field"));

document
  .getElementById("subject-field")
  .addEventListener("input", () =>
    validateTextarea("subject-field", 10, "Détails sur les articles")
  );
document
  .getElementById("message-field")
  .addEventListener("input", () =>
    validateTextarea("message-field", 10, "Services supplémentaires")
  );
// Validation du formulaire au moment de la soumission
document.getElementById("moving-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateTextField("name-field", 3, 50, "Nom");
  const isPhoneValid = validatePhoneNumber("tel-field");
  const isAddressValid = validateAddress(
    "pickup-address-field",
    "dropoff-address-field"
  );
  const isDateValid = validateMovingDate("date-demenage-field");

  if (isNameValid && isPhoneValid && isAddressValid && isDateValid) {
    alert("Formulaire soumis avec succès !");
  } else {
    alert("Veuillez corriger les erreurs.");
  }
});
