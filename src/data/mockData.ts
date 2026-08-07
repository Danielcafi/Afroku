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

export interface ArtisanProduct {
  id: string;
  name: string;
  artisanName: string;
  location: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
  description: string;
}

export interface CulturalEvent {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  dates: string;
  city: string;
  venue: string;
  category: string;
  ticketPrice: number;
  image: string;
  description: string;
  badge?: string;
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
    image: "/Ganvie.jpg",
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
    image: "/penjari.jpg",
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
    image: "/Ganvie.jpg",
    gallery: [
      "/Ganvie.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Surnommée la Venise africaine, la cité lacustre de Ganvié est unique au monde.",
    highlights: ["Balade en pirogue", "Marché flottant", "Dégustation de poisson frais"],
    included: ["Pirogue sécurisée", "Guide certifié", "Eau fraîche"],
    excluded: ["Dépenses personnelles"],
    coordinates: { lat: 6.4678, lng: 2.4217 }
  },
  {
    id: "exp-2",
    slug: "histoire-culture-ouidah",
    title: "Histoire & Culture de Ouidah",
    category: "Histoire & Vaudou",
    guideName: "Marie Houeton",
    guideAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    guideTitle: "Historienne Ouidah",
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
    gallery: ["https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"],
    description: "Explorez Ouidah, capitale spirituelle du Vaudou et lieu de mémoire.",
    highlights: ["Temple des Pythons", "Route des Esclaves", "Porte du Non-Retour"],
    included: ["Guide historien", "Entrées aux musées"],
    excluded: ["Repas"],
    coordinates: { lat: 6.3631, lng: 2.0853 }
  }
];

export const ARTISANAT_PRODUCTS: ArtisanProduct[] = [
  {
    id: "art-1",
    name: "Tam-Tam Djembé Sculpté Traditionnel",
    artisanName: "Maître Artisan Kossi (Abomey)",
    location: "Abomey, Bénin",
    category: "Instruments Musique",
    price: 35000,
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    inStock: true,
    description: "Djembé taillé à la main dans du bois d'acajou avec peau de chèvre naturelle. Son puissant et authentique."
  },
  {
    id: "art-2",
    name: "Masque Zangbéto Ceremoniel Vaudou",
    artisanName: "Atelier Art & Tradition (Ouidah)",
    location: "Ouidah, Bénin",
    category: "Masques & Sculptures",
    price: 45000,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    inStock: true,
    description: "Pièce de collection en paille tressée et bois sacré représentant le gardien de la nuit Zangbéto."
  },
  {
    id: "art-3",
    name: "Tissu Tissé Kanvo (Bazin & Coton Roi)",
    artisanName: "Coopérative des Tisseurs d'Abomey",
    location: "Zou, Bénin",
    category: "Tenues & Textiles",
    price: 28000,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    inStock: true,
    description: "Étoffe traditionnelle Kanvo tissée à la main sur métier en bois. Idéal pour tenues d'apparat et cérémonies."
  },
  {
    id: "art-4",
    name: "Statuette Royale en Bronze du Dahomey",
    artisanName: "Fonderie Royale de Kpodji",
    location: "Abomey, Bénin",
    category: "Sculptures & Bronze",
    price: 55000,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    inStock: true,
    description: "Reproduction fidèle à la cire perdue d'une statuette de lion symbole du Roi Glèlè."
  }
];

export const EVENTS: CulturalEvent[] = [
  {
    id: "evt-1",
    slug: "vodun-days-2027",
    title: "Vodun Days 2027 - Ouidah",
    organizer: "Gouvernement du Bénin & Afroku",
    dates: "09 - 10 Janvier 2027",
    city: "Ouidah",
    venue: "Plage de la Porte du Non-Retour & Cité Historique",
    category: "Festival International & Culturel",
    ticketPrice: 15000,
    badge: "Incontournable Mondial",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    description: "Le plus grand rassemblement mondial célébrant les arts, la mémoire et la spiritualité Vaudou. Concerts géants, cérémonies sacrées, danses Egungun et Zangbéto."
  },
  {
    id: "evt-2",
    slug: "welove-eya-festival",
    title: "WeLoveEya Festival 2026",
    organizer: "Eya Centre Culturel",
    dates: "15 Novembre 2026",
    city: "Cotonou",
    venue: "Centre Culturel EYA, Cotonou",
    category: "Musique & Concert Urban",
    ticketPrice: 10000,
    badge: "Populaire Jeunesse",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    description: "Le grand festival afro-urbain à Cotonou réunissant les plus grands artistes béninois et internationaux pour une nuit d'ambiance inoubliable."
  },
  {
    id: "evt-3",
    slug: "fitheb-2026",
    title: "FITHEB - Festival Int. du Théâtre du Bénin",
    organizer: "Ministère de la Culture",
    dates: "01 - 05 Décembre 2026",
    city: "Cotonou & Porto-Novo",
    venue: "Le Palais des Congrès de Cotonou",
    category: "Théâtre & Arts de la Scène",
    ticketPrice: 5000,
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80",
    description: "Rencontre majeure des troupes théâtrales d'Afrique et du monde entier avec spectacles de rue, contes et pièces contemporaines."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Martin",
    country: "France",
    flag: "FR",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    comment: "J'ai pu réserver mes billets pour les Vodun Days à Ouidah et acheter un tam-tam authentique livré directement à mon hôtel à Cotonou via Afroku !",
    rating: 5.0
  },
  {
    id: "2",
    name: "James Anderson",
    country: "Canada",
    flag: "CA",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    comment: "Le concert WeLoveEya était fantastique. Saisir mon numéro Mobile Money et recevoir mon pass QR Code instantanément sur mon téléphone a été hyper fluide.",
    rating: 4.9
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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "guide-complet-vodun-days-2027",
    title: "Guide Complet des Vodun Days 2027 : Dates, Access et Conseils",
    excerpt: "Tout ce que vous devez savoir pour vivre pleinement les Vodun Days à Ouidah : programme, billetterie, hébergements et conseils de terrain.",
    category: "Événements",
    author: "Rédaction Afroku",
    publishedAt: "15 Juin 2026",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    tags: ["Vodun Days", "Ouidah", "Festival", "Culture"]
  },
  {
    id: "blog-2",
    slug: "safari-pendjari-conseils-pratiques",
    title: "Safari dans le Parc de la Pendjari : Guide Pratique pour un Expérience Inoubliable",
    excerpt: "Quand partir, que voir, comment préparer son safari ? Découvrez nos conseils pour observer éléphants, lions et buffles dans leur habitat naturel.",
    category: "Nature & Safari",
    author: "Guide Certifié",
    publishedAt: "2 Juin 2026",
    readTime: 12,
    image: "/penjari.jpg",
    tags: ["Pendjari", "Safari", "Faune", "Nature"]
  },
  {
    id: "blog-3",
    slug: "gastronomie-beninoise-top-10-plats",
    title: "Top 10 des Plats Béninois à Goûter Absolument",
    excerpt: "Du kuli-kuli au wagassi, en passant par le pâte et le sauce d'arachide : un tour d'horizon de la gastronomie béninoise qui vous donnera l'eau à la bouche.",
    category: "Gastronomie",
    author: "Chef Amoussou",
    publishedAt: "28 Mai 2026",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    tags: ["Gastronomie", "Cuisine", "Bénin", "Tradition"]
  },
  {
    id: "blog-4",
    slug: "ganvie-venise-africaine-tourisme-durable",
    title: "Ganvié : Comment le Tourisme Lacustre Soutient l'Économie Locale",
    excerpt: "Découvrez comment les visiteurs contribuent directement au bien-être des habitants de Ganvié tout en vivant une expérience culturelle unique sur les eaux du lac Nokoué.",
    category: "Tourisme Durable",
    author: "Rédaction Afroku",
    publishedAt: "20 Mai 2026",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    tags: ["Ganvié", "Lacustre", "Durable", "Communauté"]
  },
  {
    id: "blog-5",
    slug: "palais-abomey-histoire-royaute-dahomeenne",
    title: "Les Palais Royaux d'Abomey : Plongée au Cœur de l'Histoire Dahoméenne",
    excerpt: "Classés au patrimoine mondial de l'UNESCO, les palais d'Abomey racontent 300 ans d'histoire. Suivez-nous dans cette immersion historique unique.",
    category: "Histoire & Patrimoine",
    author: "Historien Béninois",
    publishedAt: "15 Mai 2026",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    tags: ["Abomey", "UNESCO", "Palais", "Histoire"]
  },
  {
    id: "blog-6",
    slug: "artisanat-beninois-savoir-faire",
    title: "L'Artisanat Béninois : Un Savoir-Faire Transmis de Génération en Génération",
    excerpt: "Des bronze d'Abomey aux tissus bogolan, découvrez les artisans qui perpétuent les traditions ancestrales du Bénin et comment les soutenir.",
    category: "Artisanat",
    author: "Rédaction Afroku",
    publishedAt: "10 Mai 2026",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    tags: ["Artisanat", "Bronze", "Bogolan", "Tradition"]
  }
];
