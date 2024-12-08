const languageData = {
  en: {
    pageTitle: "MOVING-SERVICE",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    navDonate: "Donate",
    heroTitle: "Let’s Move Together",
    heroDescription:
      "We specialize in moving, delivery, and junk removal, providing reliable and efficient solutions to simplify your life. Additionally, our donation program helps you give back by collecting and distributing gently used items to those in need. We are committed to delivering quality service with a community-focused approach. Let us handle the heavy lifting while you focus on what matters most.",
    btnGetStarted: "Get Started",
    btnWatchVideo: "Watch Video",
    serviceHours: "24|7",
    footerTitle: "NND SERVICES",
    footerAddress: "24 Abberfield Crescent NE",
    footerCity: "Calgary Alberta- T2A6N6",
    footerPhone: "+1 368 889 5240",
    footerEmail: "info@nndservices.com",
    footerServicesTitle: "Our Services",
    movingService: "Moving Services",
    deliveryService: "Delivery Services",
    junkRemoval: "Junk Removal Services",
    footerFollowUsTitle: "Follow Us",

    footerCopyright: "All Rights Reserved",
    footerDesignedBy: "Designed by ",
    footerRibo: "EvolveD",
  },
  fr: {
    pageTitle: "SERVICE DE DÉMÉNAGEMENT",
    navHome: "Accueil",
    navServices: "Services",
    navAbout: "À Propos",
    navContact: "Contact",
    navDonate: "Faire un Don",
    heroTitle: "Déplaçons-nous Ensemble",
    heroDescription:
      "Nous sommes spécialisés dans le déménagement, la livraison et l'enlèvement des encombrants, fournissant des solutions fiables et efficaces pour simplifier votre vie. De plus, notre programme de dons vous permet de redonner en collectant et en distribuant des articles légèrement usagés à ceux qui en ont besoin. Nous nous engageons à fournir un service de qualité avec une approche communautaire. Laissez-nous faire le gros du travail pendant que vous vous concentrez sur l'essentiel.",
    btnGetStarted: "Commencez",
    btnWatchVideo: "Regarder la Vidéo",
    serviceHours: "24|7",
    footerTitle: "NND SERVICES",
    footerAddress: "24 Abberfield Crescent NE",
    footerCity: "Calgary Alberta- T2A6N6",
    footerPhone: "+1 368 889 5240",
    footerEmail: "info@nndservices.com",
    footerServicesTitle: "Nos Services",
    movingService: "Services de déménagement",
    deliveryService: "Services de livraison",
    junkRemoval: "Services de débarras",
    footerFollowUsTitle: "Suivez-nous",

    footerCopyright: "Tous droits réservés",
    footerDesignedBy: "Conçu par ",
    footerRibo: "EvolveD",
  },
};

// Function to change language dynamically
function changeLanguage() {
  const selectedLanguage = document.getElementById("language-select").value;
  const lang = languageData[selectedLanguage];
  //signature language
  document.getElementById("footer-copyright").textContent =
    lang.footerCopyright;
  document.getElementById("design").textContent = lang.footerDesignedBy;
  document.getElementById("ribo").textContent = lang.footerRibo;
  //info sous service
  document.getElementById("moving-service").textContent = lang.movingService;
  document.getElementById("delivery-service").textContent =
    lang.deliveryService;
  document.getElementById("junk-removal").textContent = lang.junkRemoval;
  document.getElementById("footer-title").textContent = lang.footerTitle;
  document.getElementById("footer-services-title").textContent =
    lang.footerServicesTitle;
  document.getElementById("footer-follow-us-title").textContent =
    lang.footerFollowUsTitle;
  // Update page content
  document.getElementById("page-title").textContent = lang.pageTitle;
  document.getElementById("nav-home").textContent = lang.navHome;
  document.getElementById("nav-services").textContent = lang.navServices;
  document.getElementById("nav-about").textContent = lang.navAbout;
  document.getElementById("nav-contact").textContent = lang.navContact;
  document.getElementById("nav-donate").textContent = lang.navDonate;
  document.getElementById("hero-title").textContent = lang.heroTitle;
  document.getElementById("hero-description").textContent =
    lang.heroDescription;
  document.getElementById("btn-get-started").textContent = lang.btnGetStarted;
  document.getElementById("btn-watch-video").textContent = lang.btnWatchVideo;
  document.getElementById("service-hours").textContent = lang.serviceHours;

  // Update footer content

  document.getElementById("footer-address").textContent = lang.footerAddress;
  document.getElementById("footer-city").textContent = lang.footerCity;
  document.getElementById("footer-phone").textContent = lang.footerPhone;
  document.getElementById("footer-email").textContent = lang.footerEmail;
}

// Initialize language on page load
window.onload = function () {
  changeLanguage();
};
