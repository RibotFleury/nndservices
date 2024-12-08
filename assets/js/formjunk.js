// Language data for both English and French translations
const languageData = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    navDonate: "Donate",
    formTitle: "Get a free quote for junk removal",
    labelName: "Name",
    labelTel: "Tel.",
    labelEmail: "E-mail",
    labelDate: "Date (When the junk removal should take place)",
    labelTime: "Time (When the junk removal should take place)",
    labelPickupAddress:
      "Pick-up Address (Address where junk will be collected)",
    labelSubject:
      "Quantity/Volume (Approximate amount of junk, example, number of items or truckloads)",
    labelMessage:
      "Accessibility (Information on ease of access to the items. Example: stairs, narrow hallways)",
    submitButton: "Send Message",
    footerTitle: "NND SERVICES",
    footerServicesTitle: "Our Services",
    movingService: "MOVING SERVICE",
    deliveryService: "DELIVERY SERVICE",
    junkRemoval: "JUNK REMOVAL SERVICE",
    followUs: "Follow Us",

    footerCopyright: "All Rights Reserved",
    footerDesignedBy: "Designed by ",
    footerRibo: "EvolveD",
    errors: {
      nameTooShort: "The field must contain at least {min} characters.",
      nameTooLong: "The field must contain less than {max} characters.",
      invalidPhone: "Invalid phone number. Use at least 9 digits.",
      invalidEmail: "Invalid email address. Please enter a valid email.",
      pickupAddressTooShort: "The pick-up address is too short.",
      dropoffAddressTooShort: "The drop-off address is too short.",
      sameAddress: "Pick-up and drop-off addresses cannot be identical.",
      pastDate: "The date cannot be earlier than today.",
      invalidSize: "The number of items must be a positive number.",
      textareaTooShort: "field must contain at least {min} characters.",
    },
  },
  fr: {
    navHome: "Accueil",
    navServices: "Services",
    navAbout: "À Propos",
    navContact: "Contactez-nous",
    navDonate: "Faire un don",
    formTitle: "Obtenez un devis gratuit pour le débarras",
    labelName: "Nom",
    labelTel: "Tél.",
    labelEmail: "E-mail",
    labelDate: "Date (Quand le débarras doit avoir lieu)",
    labelTime: "Heure (Quand le débarras doit avoir lieu)",
    labelPickupAddress:
      "Adresse de Ramassage (Adresse où les objets seront collectés)",
    labelSubject:
      "Quantité/Volume (Montant approximatif des objets, exemple, nombre d'articles ou de camions)",
    labelMessage:
      "Accessibilité (Informations sur la facilité d'accès aux objets. Exemple : escaliers, couloirs étroits)",
    submitButton: "Envoyer le Message",
    footerTitle: "NND SERVICES",
    footerServicesTitle: "Nos Services",
    movingService: "SERVICE DE DÉMÉNAGEMENT",
    deliveryService: "SERVICE DE LIVRAISON",
    junkRemoval: "SERVICE DE DÉBARRAS",
    followUs: "Suivez-nous",

    footerCopyright: "Tous droits réservés",
    footerDesignedBy: "Conçu par ",
    footerRibo: "EvolveD",
    errors: {
      nameTooShort: "Le champ doit contenir au moins {min} caractères.",
      nameTooLong: "Le champ doit contenir moins de {max} caractères.",
      invalidPhone:
        "Numéro de téléphone invalide. Utilisez au moins 9 chiffres.",
      invalidEmail:
        "Adresse email invalide. Veuillez entrer une adresse valide.",
      pickupAddressTooShort: "L'adresse de ramassage est trop courte.",
      dropoffAddressTooShort: "L'adresse de dépôt est trop courte.",
      sameAddress:
        "Les adresses de ramassage et de dépôt ne peuvent pas être identiques.",
      pastDate: "La date ne peut pas être antérieure à aujourd'hui.",
      invalidSize: "Le nombre d'item doit être un nombre positif.",
      textareaTooShort: "champ doit contenir au moins {min} caractères.",
    },
  },
};

// Function to dynamically switch language
function changeLanguage() {
  const selectedLanguage = document.getElementById("language-select").value;
  const lang = languageData[selectedLanguage];

  // Update form labels and text
  document.getElementById("label-name").textContent = lang.labelName;
  document.getElementById("label-tel").textContent = lang.labelTel;
  document.getElementById("label-email").textContent = lang.labelEmail;
  document.getElementById("label-date").textContent = lang.labelDate;
  document.getElementById("label-time").textContent = lang.labelTime;
  document.getElementById("label-pickup-address").textContent =
    lang.labelPickupAddress;
  document.getElementById("label-subject").textContent = lang.labelSubject;
  document.getElementById("label-message").textContent = lang.labelMessage;
  document.getElementById("submit-button").textContent = lang.submitButton;

  // Update footer content
  document.getElementById("footer-title").textContent = lang.footerTitle;
  document.getElementById("footer-services-title").textContent =
    lang.footerServicesTitle;
  document.getElementById("moving-service").textContent = lang.movingService;
  document.getElementById("delivery-service").textContent =
    lang.deliveryService;
  document.getElementById("junk-removal").textContent = lang.junkRemoval;
  document.getElementById("footer-follow-us-title").textContent = lang.followUs;

  document.getElementById("footer-copyright").textContent =
    lang.footerCopyright;
  document.getElementById("design").textContent = lang.footerDesignedBy;
  document.getElementById("ribo").textContent = lang.footerRibo;
  //form title
  document.getElementById("form-title").textContent = lang.formTitle;
}

// Call `changeLanguage()` on page load to initialize the language
window.onload = function () {
  changeLanguage();
};
