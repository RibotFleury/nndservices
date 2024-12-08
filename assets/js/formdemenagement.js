// Language data for both English and French translations
const languageData = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    navDonate: "Donate",
    formTitle: "Get a quick quote for moving services",
    labelName: "Name",
    labelTel: "Tel.",
    labelEmail: "E-mail",
    labelMovingDate: "Moving Date",
    labelMovingTime: "Moving Time",
    labelSize: "Size of the Move (Number of rooms)",
    labelPickupAddress:
      "Pick-up Address (address, city, province, Postal code)",
    labelDropoffAddress:
      "Drop-off Address (address, city, province, Postal code)",
    labelAccessPU: "Accessibility Pick-up Address",
    labelAccessDO: "Accessibility Drop-off Address",
    labelSubject: "Subject (Details about large or delicate items)",
    labelMessage: "Additional Services (Packing, unpacking, storage needs)",
    submitButton: "Send Message",
    footerTitle: "NND SERVICES",
    movingService: "MOVING SERVICE",
    deliveryService: "DELIVERY SERVICE",
    junkRemoval: "JUNK REMOVAL SERVICE",
    followUs: "Follow Us",
    footerFollowUsTitle: "Follow Us",
    footerServicesTitle: "Our Services",

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
    formTitle: "Obtenez un devis rapide pour les services de déménagement",
    labelName: "Nom",
    labelTel: "Tél.",
    labelEmail: "E-mail",
    labelMovingDate: "Date de Déménagement",
    labelMovingTime: "Heure de Déménagement",
    labelSize: "Taille du Déménagement (Nombre de chambres)",
    labelPickupAddress:
      "Adresse de Ramassage (adresse, ville, province, code postal)",
    labelDropoffAddress:
      "Adresse de Dépôt (adresse, ville, province, code postal)",
    labelAccessPU: "Accessibilité de l'Adresse de Ramassage",
    labelAccessDO: "Accessibilité de l'Adresse de Dépôt",
    labelSubject: "Sujet (Détails sur les objets volumineux ou délicats)",
    labelMessage:
      "Services Supplémentaires (Emballage, déballage, besoins de stockage)",
    submitButton: "Envoyer le Message",
    footerTitle: "SERVICES NND",
    movingService: "SERVICE DE DÉMÉNAGEMENT",
    deliveryService: "SERVICE DE LIVRAISON",
    junkRemoval: "SERVICE DE DÉBARRAS",
    followUs: "Suivez-nous",
    footerFollowUsTitle: "Suivez-nous",
    footerServicesTitle: "Nos Services",

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
  document.getElementById("sous-titre").textContent = lang.formTitle;
  document.getElementById("label-name").textContent = lang.labelName;
  document.getElementById("label-tel").textContent = lang.labelTel;
  document.getElementById("label-email").textContent = lang.labelEmail;
  document.getElementById("label-date").textContent = lang.labelMovingDate;
  document.getElementById("label-time").textContent = lang.labelMovingTime;
  document.getElementById("label-size").textContent = lang.labelSize;
  document.getElementById("label-pickup-address").textContent =
    lang.labelPickupAddress;
  document.getElementById("label-dropoff-address").textContent =
    lang.labelDropoffAddress;
  document.getElementById("label-access-pu").textContent = lang.labelAccessPU;
  document.getElementById("label-access-do").textContent = lang.labelAccessDO;
  document.getElementById("label-subject").textContent = lang.labelSubject;
  document.getElementById("label-message").textContent = lang.labelMessage;
  document.getElementById("submit-button").textContent = lang.submitButton;

  //footer update
  document.getElementById("moving-service").textContent = lang.movingService;
  document.getElementById("delivery-service").textContent =
    lang.deliveryService;
  document.getElementById("junk-removal").textContent = lang.junkRemoval;
  document.getElementById("footer-title").textContent = lang.footerTitle;
  document.getElementById("footer-services-title").textContent =
    lang.footerServicesTitle;
  document.getElementById("footer-follow-us-title").textContent =
    lang.footerFollowUsTitle;

  document.getElementById("footer-copyright").textContent =
    lang.footerCopyright;
  document.getElementById("design").textContent = lang.footerDesignedBy;
  document.getElementById("ribo").textContent = lang.footerRibo;
}

// Call `changeLanguage()` on page load to initialize the language
window.onload = function () {
  changeLanguage();
};
