// Toutes les données du site vivent ici.
// Pour ajouter un produit : copie un objet, change les champs, dépose sa marque
// (lettrage noir sur fond transparent) dans /public/marks/.

export const products = [
  {
    slug: "mai-coach",
    name: "Mai Coach",
    mark: "/marks/mai-coach.png",
    status: "En ligne",
    tagline: "Programmes et e-books d'entraînement.",
    lead: "Mai est l'espace fitness et motivation de Marlon. Des e-books d'entraînement et de cuisine, téléchargeables juste après l'achat, et des quêtes quotidiennes pour tenir le rythme jour après jour.",
    action: { label: "Ouvrir mai-coach", href: "https://mai-coach.vercel.app/" },
    sections: [
      {
        title: "Dans la boutique",
        items: [
          "Venta's 5/7 Workout — un programme de musculation sur cinq à sept jours.",
          "Venta's Cookbook — les repas qui vont avec l'entraînement.",
          "Marlon's Workout — en préparation.",
        ],
      },
      {
        title: "Comment ça marche",
        ordered: true,
        items: [
          "Choisissez votre programme et réglez l'achat.",
          "Téléchargez l'e-book immédiatement après le paiement.",
          "Entraînez-vous et suivez vos progrès.",
        ],
      },
      {
        title: "Quêtes quotidiennes",
        items: [
          "Boire 2,5 L d'eau.",
          "Faire 10 000 pas.",
          "Prendre sa créatine.",
        ],
      },
    ],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/maicoa.ch/" },
      { label: "TikTok", href: "https://tiktok.com/@maicoa.ch" },
      { label: "YouTube", href: "https://youtube.com/@maicoach" },
      { label: "getmaicoach@gmail.com", href: "mailto:getmaicoach@gmail.com" },
    ],
  },
  {
    slug: "collectra",
    name: "Collectra",
    mark: "/marks/collectra.png",
    status: "En développement",
    tagline: "Toute votre collection, pièce par pièce.",
    lead: "Collectra range ce que vous collectionnez. Une page d'accueil sobre, la photo de votre choix en couverture, puis vos catégories et vos pièces derrière. Vos collections vous suivent d'un appareil à l'autre.",
    action: { label: "Bientôt sur l'App Store", href: null },
    sections: [
      {
        title: "Dans l'application",
        items: [
          "Un accueil épuré, avec la photo de collection que vous choisissez.",
          "Des catégories pour organiser l'intérieur de chaque collection.",
          "Une fiche par pièce : photo, nom, catégorie, marque, description.",
        ],
      },
      {
        title: "Votre compte",
        items: [
          "Vos pièces sont enregistrées dans le cloud, pas seulement sur le téléphone.",
          "Un compte, et la même collection sur tous vos appareils.",
        ],
      },
      {
        title: "Partage",
        items: [
          "Envoyez une collection depuis le partage natif d'iOS, par Messages ou ailleurs.",
        ],
      },
    ],
    links: [],
  },
  {
    slug: "lisko",
    name: "Lisko",
    mark: "/marks/lisko.png",
    status: "À venir",
    tagline: "En cours d'écriture.",
    lead: "Lisko est la prochaine application de l'atelier. Rien n'est encore public : le projet est au stade des premières idées.",
    action: { label: null, href: null },
    // TODO : remplacer par le vrai contenu quand Lisko sera défini.
    sections: [
      {
        title: "Ce qui est décidé",
        items: [
          "Le nom et la marque.",
          "Le reste s'écrit en ce moment.",
        ],
      },
    ],
    links: [],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
