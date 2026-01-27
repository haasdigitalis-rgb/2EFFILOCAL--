import { MapPin, BarChart3, MessageSquare, Users, Layers, Phone } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'Combo Magique', href: '#magic-combo' },
  { name: 'Services', href: '#services' },
  { name: 'Audit Gratuit', href: '#audit' },
  { name: 'Marque Blanche', href: '#white-label' },
  { name: 'Communiqué', href: '#communique' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Référencer',
    subtitle: 'Contrôle de la présence locale',
    description: 'Nous assurons que 100% de votre réseau est référencé et administrable. Création, revendication et validation des fiches Google Business Profile.',
    icon: MapPin,
    color: 'bg-blue-50 text-blue-600',
    features: ['Création/Suppression de points de vente', 'Mise à jour (Horaires, Tel, Adresse)', 'Optimisation SEO Local']
  },
  {
    id: 2,
    title: 'Animer',
    subtitle: 'Animation commerciale locale',
    description: 'Transformez vos fiches en vitrines dynamiques. Nous relayons vos temps forts commerciaux et actualités pour booster le trafic en magasin.',
    icon: Layers,
    color: 'bg-green-50 text-green-600',
    features: ['Google Posts & Actualités', 'Mise en avant Produits', 'Relais des campagnes Ads']
  },
  {
    id: 3,
    title: 'Converser',
    subtitle: 'Gestion des avis & e-réputation',
    description: 'Ne laissez aucun avis sans réponse. Nous collectons, analysons et répondons aux avis clients pour soigner votre image de marque.',
    icon: MessageSquare,
    color: 'bg-yellow-50 text-yellow-600',
    features: ['Réponse sous 3j ouvrés', 'Traitement des questions/réponses', 'Escalade des avis critiques']
  }
];

export const STATS = [
  { value: '72%', label: 'Des consommateurs visitent un magasin à moins de 5km après une recherche locale.' },
  { value: '+50%', label: 'De visibilité grâce à une fiche Google optimisée et animée régulièrement.' },
  { value: '10 ans', label: "D'expertise reconnue (Fondé en 2015) dans la gestion de contenus Drive-to-Store." },
];