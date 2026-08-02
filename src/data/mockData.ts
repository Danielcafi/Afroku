export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  startingPrice: number;
  rating: number;
  reviewsCount: number;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  category: string;
  guideName: string;
  guideAvatar?: string;
  guideTitle?: string;
  location: string;
  city: string;
  duration: string;
  groupSize: string;
  languages: string[];
  rating: number;
  reviewsCount: number;
  price: number;
  badge?: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  coordinates: { lat: number; lng: number };
}

export interface Guide {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewsCount: number;
  toursCompleted: number;
  languages: string[];
  avatar: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  avatar: string;
  comment: string;
  rating: number;
}

export const INCONTOURNABLES: Destination[] = [
  {
    id: "ganvie",
    name: "Ganvié",
    location: "Lac Nokoué, Bénin",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    startingPrice: 25000,
    rating: 4.9,
    reviewsCount: 324
  },
  {
    id: "ouidah",
    name: "Ouidah",
    location: "Atlantique, Bénin",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    startingPrice: 15000,
    rating: 4.8,
    reviewsCount: 512
  },
  {
    id: "pendjari",
    name: "Parc Pendjari",
    location: "Atacora, Bénin",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    startingPrice: 45000,
    rating: 4.9,
    reviewsCount: 189
  },
  {
    id: "abomey",
    name: "Palais d'Abomey",
    location: "Zou, Bénin",
    image: "https://images.unsplash.com/photo-1572953109213-3be62398eb95?auto=format&fit=crop&w=800&q=80",
    startingPrice: 10000,
    rating: 4.7,
    reviewsCount: 276
  },
  {
    id: "porte-non-retour",
    name: "Porte du Non-Retour",
    location: "Plage de Ouidah, Bénin",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    startingPrice: 12000,
    rating: 4.9,
    reviewsCount: 410
  },
  {
    id: "natitingou",
    name: "Natitingou & Tata Somba",
    location: "Atacora, Bénin",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    startingPrice: 30000,
    rating: 4.8,
    reviewsCount: 145
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    slug: "visite-ganvie-village-lacustre",
    title: "Visite de Ganvié & Village lacustre",
    category: "Culture & Nature",
    guideName: "Jean Guede Local",
    guideAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    guideTitle: "Guide Certifié Ganvié",
    location: "Cotonou / Abomey-Calavi, Bénin",
    city: "Cotonou",
    duration: "4 heures",
    groupSize: "2 - 12 personnes",
    languages: ["Français", "Anglais", "Fon"],
    rating: 4.9,
    reviewsCount: 124,
    price: 25000,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572953109213-3be62398eb95?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Surnommée la Venise africaine, la cité lacustre de Ganvié est unique au monde. Édifiée sur des pirogues par le peuple Tofinu au XVIIIe siècle pour échapper aux razzias de chasseurs d'esclaves, la ville compte aujourd'hui plus de 30 000 habitants vivant exclusivement sur l'eau.",
    highlights: [
      "Balade en pirogue à la découverte du plus grand village lacustre d'Afrique",
      "Rencontre chaleureuse avec les populations locales et pêcheurs",
      "Découverte du marché flottant et des techniques de pêche traditionnelles",
      "Visite du marché d'artisanat flottant et dégustation de poisson frais"
    ],
    included: [
      "Transport A/R en pirogue à moteur sécurisée avec gilets",
      "Guide touristique certifié parlant français & anglais",
      "Frais d'accès à la cité lacustre",
      "Bouteille d'eau fraîche & collation locale"
    ],
    excluded: [
      "Dépenses personnelles et souvenirs",
      "Pourboires pour le piroguier"
    ],
    coordinates: { lat: 6.4678, lng: 2.4217 }
  },
  {
    id: "exp-2",
    slug: "histoire-culture-ouidah",
    title: "Histoire & Culture de Ouidah",
    category: "Histoire & Vaudou",
    guideName: "Marie Houeton",
    guideAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    guideTitle: "Historienne & Guide Ouidah",
    location: "Ouidah, Bénin",
    city: "Ouidah",
    duration: "6 heures",
    groupSize: "1 - 10 personnes",
    languages: ["Français", "Anglais"],
    rating: 4.8,
    reviewsCount: 98,
    price: 15000,
    badge: "Populaire",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Explorez Ouidah, capitale spirituelle du Vaudou et haut lieu de mémoire de la traite négrière. Visitez le Temple des Pythons, le Fort Portugais et parcourez la Route des Esclaves jusqu'à la Porte du Non-Retour.",
    highlights: [
      "Visite guidée du Temple des Pythons sacrés",
      "Parcours de la Route des Esclaves de 4 km jusqu'à la plage",
      "Méditation à la Porte du Non-Retour",
      "Découverte de la Forêt Sacrée de Kpassè"
    ],
    included: ["Guide historien dédié", "Entrées aux sites & musées", "Eau minérale"],
    excluded: ["Repas du midi", "Transport vers Ouidah"],
    coordinates: { lat: 6.3631, lng: 2.0853 }
  },
  {
    id: "exp-3",
    slug: "safari-parc-pendjari",
    title: "Safari au Parc de Pendjari",
    category: "Nature & Aventure",
    guideName: "Kora Randonnée",
    guideAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    guideTitle: "Guide Écologiste Pendjari",
    location: "Parc de Pendjari, Bénin",
    city: "Natitingou",
    duration: "1 Journée",
    groupSize: "2 - 6 personnes",
    languages: ["Français", "Anglais", "Waama"],
    rating: 4.9,
    reviewsCount: 156,
    price: 45000,
    badge: "Incontournable",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Plongez au cœur de l'une des plus importantes réserves de faune sauvage d'Afrique de l'Ouest. Observez éléphants, lions de l'Afrique de l'Ouest, hippopotames, babouins et antilopes dans leur habitat naturel.",
    highlights: [
      "Safari 4x4 tôt le matin au lever du soleil",
      "Observation des troupeaux d'éléphants aux points d'eau",
      "Visite des cascades de Tanougou en fin de safari"
    ],
    included: ["Véhicule 4x4 ouvert de safari avec chauffeur", "Guide pisteur certifié", "Déjeuner pic-nique local"],
    excluded: ["Taxe d'entrée du Parc", "Hébergement nuitée"],
    coordinates: { lat: 11.2000, lng: 1.5000 }
  },
  {
    id: "exp-4",
    slug: "decouverte-palais-abomey",
    title: "Découverte du Palais de Abomey",
    category: "Histoire & Patrimoine",
    guideName: "Bio Bioba",
    guideAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    guideTitle: "Guide du Patrimoine UNESCO",
    location: "Abomey, Bénin",
    city: "Abomey",
    duration: "3 heures",
    groupSize: "1 - 15 personnes",
    languages: ["Français", "Fon"],
    rating: 4.7,
    reviewsCount: 110,
    price: 10000,
    image: "https://images.unsplash.com/photo-1572953109213-3be62398eb95?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572953109213-3be62398eb95?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Explorez les Palais Royaux d'Abomey, classés au patrimoine mondial de l'UNESCO. Découvrez la légende des 12 rois du Dahomey, les célèbres Amazones guerrières et les bas-reliefs historiques.",
    highlights: [
      "Visite des trônes et reliques royales en bronze et or",
      "Découverte de l'histoire héroïque des Amazones Agodjié",
      "Démonstration d'artisanat royal d'applique et tissage"
    ],
    included: ["Billet d'entrée au musée royal", "Guide conférencier"],
    excluded: ["Autorisation photo spéciale"],
    coordinates: { lat: 7.1829, lng: 1.9912 }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Martin",
    country: "France",
    flag: "🇫🇷",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    comment: "Ganvié a été une expérience magique et le système de réservation en ligne avec confirmation immédiate sur Afroku m'a beaucoup rassurée avant mon départ.",
    rating: 5.0
  },
  {
    id: "2",
    name: "James Anderson",
    country: "Canada",
    flag: "🇨🇦",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    comment: "Notre guide à Ouidah était exceptionnel. La possibilité de payer via Mobile Money ou Carte bancaire directement sur le site simplifie énormément le voyage au Bénin.",
    rating: 4.9
  },
  {
    id: "3",
    name: "Clara Bernard",
    country: "Bénin",
    flag: "🇧🇯",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
    comment: "En tant que Béninoise passionnée de notre patrimoine, Afroku me permet de redécouvrir mon pays facilement tout en soutenant nos guides locaux.",
    rating: 5.0
  }
];

export const PARTNERS = [
  { name: "Ministère du Tourisme", subtitle: "RÉPUBLIQUE DU BÉNIN" },
  { name: "BÉNIN RÉVÉLÉ", subtitle: "GOUVERNEMENT DU BÉNIN" },
  { name: "UNESCO", subtitle: "PATRIMOINE MONDIAL" },
  { name: "AIR FRANCE", subtitle: "COMPAGNIE AÉRIENNE" },
  { name: "MOOV AFRICA", subtitle: "RÉSEAU MOBILE" },
  { name: "MTN", subtitle: "EVERYWHERE YOU GO" },
  { name: "FedaPay", subtitle: "PAIEMENT EN LIGNE" }
];
