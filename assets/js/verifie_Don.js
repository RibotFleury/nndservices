// Fonction pour afficher les messages d'erreur

function getErrorMessage(key, replacements = {}) {
  const selectedLanguage = document.getElementById("language-select").value;
  let message = languageData[selectedLanguage].errors[key];
  for (const placeholder in replacements) {
    message = message.replace(`{${placeholder}}`, replacements[placeholder]);
  }
  return message;
}

const displayError = (id, messageKey, replacements = {}, type = "error") => {
  const errorElement = document.getElementById(`${id}-error`);
  if (errorElement) {
    const message = getErrorMessage(messageKey, replacements);
    errorElement.textContent = message;
    errorElement.className =
      type === "error"
        ? "error-message text-danger"
        : "error-message text-success";
  }
};
// Validation du nom
const validateTextField = (id, minLength = 5, maxLength = 50, fieldLabel) => {
  const input = document.getElementById(id);
  if (input.value.length < minLength) {
    displayError(id, "nameTooShort", { field: fieldLabel, min: minLength });
    return false;
  } else if (input.value.length > maxLength) {
    displayError(id, "nameTooLong", { field: fieldLabel, max: maxLength });
    return false;
  }
  displayError(id, "", {}, "success");
  return true;
};

// Validation du numéro de téléphone (10 chiffres)
const validatePhoneNumber = (id) => {
  const phone = document.getElementById(id).value;
  const phoneRegex = /^[0-9]{9,}$/;
  if (!phoneRegex.test(phone)) {
    displayError(id, "invalidPhone");
    return false;
  }
  displayError(id, "", {}, "success");
  return true;
};

// Validation de l'email
const validateEmail = (id) => {
  const email = document.getElementById(id).value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format basique d'email
  if (!emailRegex.test(email)) {
    displayError(id, "invalidEmail");
    return false;
  }
  displayError(id, "", {}, "success");
  return true;
};
// Validation de la date de déménagement
const validateMovingDate = (id) => {
  const movingDate = new Date(document.getElementById(id).value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Réinitialiser les heures pour la comparaison
  if (movingDate < today) {
    displayError(id, "pastDate");
    return false;
  }
  displayError(id, "", {}, "success");
  return true;
};
// Validation des adresses
const validateAddress = (pickupId) => {
  const pickupAddress = document.getElementById(pickupId).value;
  if (pickupAddress.length < 5) {
    displayError(pickupId, "pickupAddressTooShort");
    return false;
  }
  displayError(pickupId, "", {}, "success");
  return true;
};
// Validation des champs texte
const validateTextarea = (id, minLength = 10, fieldLabel) => {
  const textarea = document.getElementById(id);
  if (textarea.value.length < minLength) {
    displayError(id, "textareaTooShort", { field: fieldLabel, min: minLength });
    return false;
  }
  displayError(id, "", {}, "success");
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
  .getElementById("description-field")
  .addEventListener("input", () =>
    validateTextarea("description-field", 10, "Détails sur les articles")
  );
document
  .getElementById("condition-field")
  .addEventListener("input", () =>
    validateTextarea("condition-field", 10, "Services supplémentaires")
  );
document
  .getElementById("handling-field")
  .addEventListener("input", () =>
    validateTextarea("handling-field", 10, "Services supplémentaires")
  );
document
  .getElementById("addition-field")
  .addEventListener("input", () =>
    validateTextarea("addition-field", 10, "Services supplémentaires")
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
