const languageData = {
  en: {
    pageTitle: "Services",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    navDonate: "Donate",
    servicesHeader: "Services",
    movingServiceTitle: "MOVING SERVICE",
    movingServiceDesc:
      "NND SERVICES offers reliable and efficient moving solutions tailored to your needs. Whether you are relocating across town or to a new city, our professional team ensures your belongings are safely packed, transported, and delivered to your new home. We handle everything from small apartments to large houses, making your move as stress-free as possible.",
    deliveryServiceTitle: "DELIVERY SERVICE",
    deliveryServiceDesc:
      "Our delivery service at NND SERVICES is designed to be quick, secure, and convenient. Whether you need to send or receive packages, boxes, or larger items, we provide a seamless delivery experience. We ensure timely pick-up and drop-off, so your items reach their destination safely and on time.",
    junkServiceTitle: "JUNK REMOVAL SERVICE",
    junkServiceDesc:
      "NND SERVICES provides efficient junk removal solutions to help you declutter your space. From old furniture and appliances to yard waste and construction debris, our team handles all types of unwanted items. We are committed to disposing of or recycling your junk responsibly, leaving you with a clean and tidy space.",
    getAFreeQuote: "GET A FREE QUOTE",
    callToActionTitle: "Call To Action",
    callToActionDesc:
      "Through our donation service, NND SERVICES connects people who want to give away gently used furniture or other items with those in need. We collect your donated items and ensure they are delivered to families or organizations that can make good use of them. This service not only helps the environment by reducing waste but also supports community members in need.",
    donateBtn: "DONATE",
    footerServicesTitle: "Our Services",
    movingService: "Moving Services",
    deliveryService: "Delivery Services",
    junkRemoval: "Junk Removal Services",
    footerCopyright: "All Rights Reserved",
    footerDesignedBy: "Designed by ",
    footerRibo: "EvolveD",
  },
  fr: {
    pageTitle: "Services",
    navHome: "Accueil",
    navServices: "Services",
    navAbout: "À Propos",
    navContact: "Contact",
    navDonate: "Faire un Don",
    servicesHeader: "Services",
    movingServiceTitle: "SERVICE DE DÉMÉNAGEMENT",
    movingServiceDesc:
      "NND SERVICES propose des solutions de déménagement fiables et efficaces adaptées à vos besoins. Que vous déménagiez dans la même ville ou dans une autre, notre équipe de professionnels veille à ce que vos affaires soient emballées, transportées et livrées en toute sécurité dans votre nouvelle maison. Nous gérons tout, des petits appartements aux grandes maisons, pour rendre votre déménagement aussi simple et sans stress que possible.",
    deliveryServiceTitle: "SERVICE DE LIVRAISON",
    deliveryServiceDesc:
      "Notre service de livraison chez NND SERVICES est conçu pour être rapide, sécurisé et pratique. Que vous ayez besoin d'envoyer ou de recevoir des colis, des boîtes ou des objets plus volumineux, nous offrons une expérience de livraison sans accroc. Nous assurons un ramassage et une livraison rapides pour que vos objets arrivent en toute sécurité et à temps à leur destination.",
    junkServiceTitle: "SERVICE DE DÉBARRAS",
    junkServiceDesc:
      "NND SERVICES propose des solutions efficaces de débarras pour vous aider à désencombrer votre espace. Qu'il s'agisse de vieux meubles, d'appareils électroménagers, de déchets de jardin ou de gravats de construction, notre équipe prend en charge tous types d'objets non désirés. Nous nous engageons à éliminer ou recycler vos objets de manière responsable, en vous laissant un espace propre et bien rangé.",
    getAFreeQuote: "OBTENEZ UN DEVIS GRATUIT",
    callToActionTitle: "Appel à l'Action",
    callToActionDesc:
      "Grâce à notre service de dons, NND SERVICES met en relation des personnes qui souhaitent donner des meubles ou d'autres articles en bon état avec ceux qui en ont besoin. Nous collectons vos dons et nous assurons qu'ils sont livrés à des familles ou des organisations qui en feront bon usage. Ce service aide non seulement à réduire les déchets, mais il soutient également les membres de la communauté dans le besoin.",
    donateBtn: "FAIRE UN DON",
    footerServicesTitle: "Nos Services",
    movingService: "Services de déménagement",
    deliveryService: "Services de livraison",
    junkRemoval: "Services de débarras",
    footerCopyright: "Tous droits réservés",
    footerDesignedBy: "Conçu par ",
    footerRibo: "EvolveD",
  },
};

// Function to change the language dynamically
function changeLanguage() {
  const selectedLanguage = document.getElementById("language-select").value;
  const lang = languageData[selectedLanguage];

  document.getElementById("page-title").textContent = lang.pageTitle;
  document.getElementById("nav-home").textContent = lang.navHome;
  document.getElementById("nav-services").textContent = lang.navServices;
  document.getElementById("nav-about").textContent = lang.navAbout;
  document.getElementById("nav-contact").textContent = lang.navContact;
  document.getElementById("nav-donate").textContent = lang.navDonate;
  document.getElementById("services-header").textContent = lang.servicesHeader;
  document.getElementById("moving-service-title").textContent =
    lang.movingServiceTitle;
  document.getElementById("moving-service-desc").textContent =
    lang.movingServiceDesc;
  document.getElementById("moving-service-quote").textContent =
    lang.getAFreeQuote;
  document.getElementById("delivery-service-title").textContent =
    lang.deliveryServiceTitle;
  document.getElementById("delivery-service-desc").textContent =
    lang.deliveryServiceDesc;
  document.getElementById("delivery-service-quote").textContent =
    lang.getAFreeQuote;
  document.getElementById("junk-service-title").textContent =
    lang.junkServiceTitle;
  document.getElementById("junk-service-desc").textContent =
    lang.junkServiceDesc;
  document.getElementById("junk-service-quote").textContent =
    lang.getAFreeQuote;
  document.getElementById("call-to-action-title").textContent =
    lang.callToActionTitle;
  document.getElementById("call-to-action-desc").textContent =
    lang.callToActionDesc;
  document.getElementById("call-to-action-btn").textContent = lang.donateBtn;
  document.getElementById("footer-services-title").textContent =
    lang.footerServicesTitle;
  document.getElementById("moving-service").textContent = lang.movingService;
  document.getElementById("delivery-service").textContent =
    lang.deliveryService;
  document.getElementById("junk-removal").textContent = lang.junkRemoval;

  document.getElementById("footer-copyright").textContent =
    lang.footerCopyright;
  document.getElementById("design").textContent = lang.footerDesignedBy;
  document.getElementById("ribo").textContent = lang.footerRibo;

  // document.getElementById("footer-follow-us-title").textContent =
  //   lang.footerFollowUsTitle;
  // document.getElementById("footer-credits").textContent = lang.footerCredits;
}

// Initialize language on page load
window.onload = function () {
  changeLanguage();
};
