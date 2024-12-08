// Language data for English and French translations
const languageData = {
  en: {
    aboutTitle: "About",
    storyTitle: "Our Story",
    storyText:
      "NND SERVICES was founded with a simple mission: to make life easier for our customers through reliable and efficient service. We understand the challenges of moving, delivering important items, and clearing out clutter, which is why we offer a range of solutions designed to meet your specific needs. Our team is committed to providing high-quality service, ensuring that every job is done right the first time.",
    valuesTitle: "Our Values",
    valuesText:
      "At NND SERVICES, we believe in integrity, professionalism, and community. These values guide everything we do, from handling your possessions with care to ensuring a positive impact on the communities we serve. We take pride in being a company you can trust, where customer satisfaction is our top priority.",
    servicesTitle: "Our Services",
    servicesText:
      "We offer a full suite of services, including moving, delivery, junk removal, and a unique donation program that helps connect people with those in need. Whether you are relocating, sending a package, or clearing out your home, we are here to help with a friendly and efficient approach.",
    communityTitle: "Our Commitment to the Community",
    communityText:
      "Giving back is at the heart of what we do. Through our donation service, we help reduce waste by redistributing gently used items to families and organizations in need. This initiative not only supports those who could benefit from your donations but also contributes to a more sustainable and caring community.",
    chooseUsTitle: "Why Choose Us?",
    chooseUsText:
      "Choosing NND SERVICES means choosing a partner who values your time, your belongings, and your trust. With a team of experienced professionals, a commitment to excellence, and a strong focus on customer care, we strive to exceed your expectations with every service.",
    footerTitle: "NND SERVICES",
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
    aboutTitle: "À Propos",
    storyTitle: "Notre Histoire",
    storyText:
      "NND SERVICES a été fondé avec une mission simple : faciliter la vie de nos clients grâce à un service fiable et efficace. Nous comprenons les défis liés au déménagement, à la livraison d'articles importants et au désencombrement, c'est pourquoi nous offrons une gamme de solutions adaptées à vos besoins spécifiques. Notre équipe s'engage à fournir un service de haute qualité, en veillant à ce que chaque travail soit bien fait dès la première fois.",
    valuesTitle: "Nos Valeurs",
    valuesText:
      "Chez NND SERVICES, nous croyons en l'intégrité, le professionnalisme et la communauté. Ces valeurs guident tout ce que nous faisons, qu'il s'agisse de manipuler vos biens avec soin ou de garantir un impact positif sur les communautés que nous servons. Nous sommes fiers d'être une entreprise de confiance, où la satisfaction des clients est notre priorité absolue.",
    servicesTitle: "Nos Services",
    servicesText:
      "Nous offrons une gamme complète de services, y compris le déménagement, la livraison, l'enlèvement des encombrants et un programme de dons unique qui aide à connecter les gens avec ceux qui en ont besoin. Que vous déménagiez, envoyiez un colis ou débarrassiez votre maison, nous sommes là pour vous aider avec une approche amicale et efficace.",
    communityTitle: "Notre Engagement envers la Communauté",
    communityText:
      "Redonner est au cœur de ce que nous faisons. Grâce à notre service de dons, nous contribuons à réduire les déchets en redistribuant des articles légèrement usagés à des familles et des organisations dans le besoin. Cette initiative soutient non seulement ceux qui peuvent bénéficier de vos dons, mais contribue également à une communauté plus durable et solidaire.",
    chooseUsTitle: "Pourquoi Nous Choisir ?",
    chooseUsText:
      "Choisir NND SERVICES, c'est choisir un partenaire qui valorise votre temps, vos biens et votre confiance. Avec une équipe de professionnels expérimentés, un engagement envers l'excellence et un fort accent sur le service à la clientèle, nous nous efforçons de dépasser vos attentes avec chaque service.",
    footerTitle: "NND SERVICES",
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

  // Change text content based on language selection
  document.getElementById("about-title").textContent = lang.aboutTitle;
  document.getElementById("story-title").textContent = lang.storyTitle;
  document.getElementById("story-text").textContent = lang.storyText;
  document.getElementById("values-title").textContent = lang.valuesTitle;
  document.getElementById("values-text").textContent = lang.valuesText;
  document.getElementById("services-title").textContent = lang.servicesTitle;
  document.getElementById("services-text").textContent = lang.servicesText;
  document.getElementById("community-title").textContent = lang.communityTitle;
  document.getElementById("community-text").textContent = lang.communityText;
  document.getElementById("choose-us-title").textContent = lang.chooseUsTitle;
  document.getElementById("choose-us-text").textContent = lang.chooseUsText;

  // Footer
  document.getElementById("footer-title").textContent = lang.footerTitle;
  document.getElementById("footer-services-title").textContent =
    lang.footerServicesTitle;
  document.getElementById("moving-service").textContent = lang.movingService;
  document.getElementById("delivery-service").textContent =
    lang.deliveryService;
  document.getElementById("junk-removal").textContent = lang.junkRemoval;
  document.getElementById("footer-follow-us-title").textContent =
    lang.footerFollowUsTitle;

  document.getElementById("footer-copyright").textContent =
    lang.footerCopyright;
  document.getElementById("design").textContent = lang.footerDesignedBy;
  document.getElementById("ribo").textContent = lang.footerRibo;
}

// Initialize the language on page load
window.onload = function () {
  changeLanguage();
};
