export type Category = 'residential' | 'commercial' | 'industrial';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  cover: string; // hero image
  gallery: string[];
  location: string;
  city: string;
  type: string;
  priceFrom?: string;
  status: 'Under Construction' | 'Nearing Possession' | 'Delivered' | 'New Launch';
  badge: string;
  year?: string;
  rera?: string;
  overview: string;
  highlights: string[];
  amenities: string[];
  specs: { label: string; value: string }[];
}

// Premium architectural / interior imagery (4K) used to enrich galleries.
const I = {
  lobby: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop',
  living: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2400&auto=format&fit=crop',
  bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2400&auto=format&fit=crop',
  kitchen: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2400&auto=format&fit=crop',
  pool: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2400&auto=format&fit=crop',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2400&auto=format&fit=crop',
  facade: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2400&auto=format&fit=crop',
  tower: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop',
  retail: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2400&auto=format&fit=crop',
  retail2: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2400&auto=format&fit=crop',
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop',
  warehouse: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2400&auto=format&fit=crop',
  factory: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2400&auto=format&fit=crop',
  industrial: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2400&auto=format&fit=crop',
  aerial: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2400&auto=format&fit=crop',
  garden: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2400&auto=format&fit=crop',
};

const RES_AMENITIES = [
  'Rooftop Infinity Pool',
  'State-of-the-art Clubhouse',
  'Fully-equipped Fitness Centre',
  'Landscaped Central Greens',
  'Indoor & Outdoor Sports Courts',
  "Children's Play Zones",
  '24×7 Security & CCTV',
  'High-speed Lifts',
  'Power Backup',
  'Ample Covered Parking',
];

export const PROJECTS: Project[] = [
  {
    slug: 'city-of-dreams',
    name: 'City of Dreams',
    tagline: 'A township that thinks like a city.',
    category: 'residential',
    cover: '/projects/cityofdream.avif',
    gallery: ['/projects/cityofdream.avif', I.living, I.pool, I.bedroom, I.garden, I.kitchen],
    location: 'Landran–Kharar Highway, Sector 127',
    city: 'Mohali',
    type: '2 & 3 BHK Residences',
    priceFrom: '₹49.77 Lacs',
    status: 'Under Construction',
    badge: 'Flagship',
    rera: 'PBRERA-SAS79-PR0832',
    overview:
      'City of Dreams is M PRO\'s flagship township — a self-contained world of landscaped boulevards, resort-grade amenities and thoughtfully planned 2 & 3 BHK homes. Designed for families who want the energy of a city with the calm of a private estate.',
    highlights: [
      'Master-planned township across acres of green',
      'Resort-style clubhouse & infinity pool',
      'Walk-to-everything retail promenade',
      'Future-ready smart home provisioning',
    ],
    amenities: RES_AMENITIES,
    specs: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Possession', value: 'Under Construction' },
      { label: 'Starting Price', value: '₹49.77 Lacs' },
      { label: 'Location', value: 'Sector 127, Mohali' },
    ],
  },
  {
    slug: 'montefiore-towers',
    name: 'MonteFiore Towers',
    tagline: 'Sky homes for the few.',
    category: 'residential',
    cover: '/projects/montefiore.webp',
    gallery: ['/projects/montefiore.webp', I.lobby, I.living, I.bedroom, I.gym, I.pool],
    location: 'High Ground Road',
    city: 'Zirakpur',
    type: '3 & 4 BHK Sky Homes',
    priceFrom: '₹1.20 Cr',
    status: 'Under Construction',
    badge: 'Premium',
    rera: 'PBRERA-SAS81-PR0911',
    overview:
      'MonteFiore Towers raises the bar for luxury high-rise living in Zirakpur. Expansive 3 & 4 BHK sky homes with double-height lobbies, panoramic balconies and a private residents\' club perched above the city.',
    highlights: [
      'Double-height arrival lobby',
      'Panoramic corner balconies',
      'Sky lounge & private dining',
      'Concierge-grade services',
    ],
    amenities: RES_AMENITIES,
    specs: [
      { label: 'Configuration', value: '3 & 4 BHK' },
      { label: 'Possession', value: 'Under Construction' },
      { label: 'Starting Price', value: '₹1.20 Cr' },
      { label: 'Location', value: 'High Ground Road, Zirakpur' },
    ],
  },
  {
    slug: 'mpro-f-towers',
    name: 'M PRO F Towers',
    tagline: 'Ready to move. Ready to love.',
    category: 'residential',
    cover: '/projects/ftowers.webp',
    gallery: ['/projects/ftowers.webp', I.living, I.kitchen, I.bedroom, I.gym],
    location: 'Canal Road West',
    city: 'Ludhiana',
    type: '2 & 3 BHK Apartments',
    priceFrom: '₹54.90 Lacs',
    status: 'Nearing Possession',
    badge: 'Ready Soon',
    rera: 'PBRERA-LDH-PR0455',
    overview:
      'M PRO F Towers brings refined apartment living to the heart of Ludhiana. With possession around the corner, these 2 & 3 BHK homes pair smart layouts with a full suite of lifestyle amenities — move-in ready elegance.',
    highlights: [
      'Possession-ready inventory',
      'Prime Canal Road West address',
      'Efficient, light-filled layouts',
      'Clubhouse & landscaped podium',
    ],
    amenities: RES_AMENITIES,
    specs: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Possession', value: 'Nearing Possession' },
      { label: 'Starting Price', value: '₹54.90 Lacs' },
      { label: 'Location', value: 'Canal Road West, Ludhiana' },
    ],
  },
  {
    slug: 'mpro-housing-park',
    name: 'M PRO Housing Park',
    tagline: 'Room to breathe, room to grow.',
    category: 'residential',
    cover: '/projects/housingpark.webp',
    gallery: ['/projects/housingpark.webp', I.garden, I.living, I.pool, I.bedroom],
    location: 'Chandigarh–Delhi Highway',
    city: 'Zirakpur',
    type: 'Residential Community',
    priceFrom: '₹45.00 Lacs',
    status: 'Under Construction',
    badge: 'New',
    rera: 'PBRERA-SAS80-PR0788',
    overview:
      'M PRO Housing Park is a green-first residential community on the Chandigarh–Delhi Highway. Generous open spaces, tree-lined walkways and family-friendly amenities make it a calm retreat with citywide connectivity.',
    highlights: [
      'Green-first master plan',
      'Excellent highway connectivity',
      'Jogging & cycling tracks',
      'Community amphitheatre',
    ],
    amenities: RES_AMENITIES,
    specs: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Possession', value: 'Under Construction' },
      { label: 'Starting Price', value: '₹45.00 Lacs' },
      { label: 'Location', value: 'Chandigarh–Delhi Highway, Zirakpur' },
    ],
  },
  {
    slug: 'mpro-parivaas',
    name: 'M PRO Parivaas',
    tagline: 'Built around family.',
    category: 'residential',
    cover: '/projects/parivaas.webp',
    gallery: ['/projects/parivaas.webp', I.living, I.bedroom, I.garden, I.kitchen],
    location: 'Zirakpur–Patiala Highway, Banur',
    city: 'Banur',
    type: '2 & 3 BHK Apartments',
    priceFrom: '₹84.57 Lacs',
    status: 'Under Construction',
    badge: 'Family',
    rera: 'PBRERA-SAS82-PR0840',
    overview:
      'M PRO Parivaas is designed for multi-generational living — spacious 2 & 3 BHK homes set within a secure, amenity-rich enclave on the Banur growth corridor. A neighbourhood that grows with your family.',
    highlights: [
      'Multi-generational layouts',
      'Secure gated enclave',
      'Senior-friendly landscaping',
      'Dedicated kids\' zones',
    ],
    amenities: RES_AMENITIES,
    specs: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Possession', value: 'Under Construction' },
      { label: 'Starting Price', value: '₹84.57 Lacs' },
      { label: 'Location', value: 'Banur' },
    ],
  },
  {
    slug: 'mpro-olympia',
    name: 'M PRO Olympia',
    tagline: 'An active life, by design.',
    category: 'residential',
    cover: '/projects/olympia.webp',
    gallery: ['/projects/olympia.webp', I.gym, I.pool, I.living, I.garden],
    location: 'Villages Kishanpura & Sanauli',
    city: 'Tricity',
    type: '2 & 3 BHK Apartments',
    priceFrom: '₹49.77 Lacs',
    status: 'Under Construction',
    badge: 'Value',
    rera: 'PBRERA-SAS83-PR0867',
    overview:
      'M PRO Olympia is built for movement — a sports-led community with courts, tracks and an athletic clubhouse at its heart. Smartly priced 2 & 3 BHK homes for buyers who want wellness woven into everyday life.',
    highlights: [
      'Sports-led master plan',
      'Athletic clubhouse',
      'Multiple sports courts',
      'Best-in-class value',
    ],
    amenities: RES_AMENITIES,
    specs: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Possession', value: 'Under Construction' },
      { label: 'Starting Price', value: '₹49.77 Lacs' },
      { label: 'Location', value: 'Kishanpura & Sanauli' },
    ],
  },
  {
    slug: 'rio-one',
    name: 'RIO ONE',
    tagline: 'The address retail has been waiting for.',
    category: 'commercial',
    cover: '/projects/rio-one.webp',
    gallery: ['/projects/rio-one.webp', I.retail, I.retail2, I.office],
    location: 'VIP Road',
    city: 'Zirakpur',
    type: 'Showrooms · 19,900 Sq.Yd',
    priceFrom: '₹52.50 Lacs',
    status: 'Under Construction',
    badge: 'Commercial',
    rera: 'PBRERA-SAS84-PR0901',
    overview:
      'RIO ONE is a high-street retail destination on Zirakpur\'s VIP Road — engineered for visibility, footfall and frontage. Double-height showrooms, a vibrant promenade and one of the most strategic commercial addresses in the Tricity.',
    highlights: [
      'Prime VIP Road frontage',
      'Double-height showrooms',
      'High-footfall promenade',
      'Ample customer parking',
    ],
    amenities: [
      'Grand entrance plaza',
      'Escalators & high-speed lifts',
      'Central air-conditioning provision',
      '24×7 security & surveillance',
      'Dedicated loading bays',
      'Multi-level parking',
    ],
    specs: [
      { label: 'Asset Type', value: 'Retail Showrooms' },
      { label: 'Land Parcel', value: '19,900 Sq.Yd' },
      { label: 'Starting Price', value: '₹52.50 Lacs' },
      { label: 'Location', value: 'VIP Road, Zirakpur' },
    ],
  },
  {
    slug: 'mpro-city-gate',
    name: 'M PRO City Gate',
    tagline: 'Where commerce meets the crowd.',
    category: 'commercial',
    cover: I.retail2,
    gallery: [I.retail2, I.retail, I.office, I.tower],
    location: 'Zirakpur',
    city: 'Zirakpur',
    type: 'Retail & Office Spaces',
    priceFrom: '₹60.00 Lacs',
    status: 'New Launch',
    badge: 'New Launch',
    overview:
      'M PRO City Gate blends retail and workspace into a single landmark — a gateway destination designed for brands that want to be seen. Flexible floor plates, signage-grade frontage and effortless connectivity.',
    highlights: [
      'Mixed-use retail + office',
      'Signage-grade frontage',
      'Flexible floor plates',
      'Gateway location',
    ],
    amenities: [
      'Grand atrium',
      'High-speed elevators',
      'Food court provision',
      'Smart building systems',
      'Valet & multi-level parking',
      '24×7 facility management',
    ],
    specs: [
      { label: 'Asset Type', value: 'Retail & Office' },
      { label: 'Status', value: 'New Launch' },
      { label: 'Starting Price', value: '₹60.00 Lacs' },
      { label: 'Location', value: 'Zirakpur' },
    ],
  },
  {
    slug: 'mpro-siel-industrial-estate',
    name: 'M PRO SIEL Industrial Estate',
    tagline: 'Built for the business of building.',
    category: 'industrial',
    cover: '/projects/siel.webp',
    gallery: ['/projects/siel.webp', I.warehouse, I.factory, I.industrial],
    location: 'Rajpura',
    city: 'Rajpura',
    type: 'Manufacturing Estate',
    status: 'Under Construction',
    badge: 'Industrial',
    overview:
      'M PRO SIEL Industrial Estate is a fully-serviced manufacturing destination at Rajpura — plug-and-play plots and units with the power, roads and approvals industry needs to move fast. Scale without the setup headache.',
    highlights: [
      'Plug-and-play industrial units',
      'Wide internal road network',
      'Assured power & water',
      'Single-window approvals support',
    ],
    amenities: [
      'High-tension power supply',
      'Effluent & waste management',
      'Wide load-bearing roads',
      'Worker amenities & canteen',
      '24×7 security',
      'Logistics & loading zones',
    ],
    specs: [
      { label: 'Asset Type', value: 'Industrial Estate' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Rajpura' },
      { label: 'Approvals', value: 'Single-window support' },
    ],
  },
  {
    slug: 'mpro-star-hills',
    name: 'M PRO Star Hills',
    tagline: 'Industry with an address.',
    category: 'industrial',
    cover: I.factory,
    gallery: [I.factory, I.warehouse, I.industrial, I.aerial],
    location: 'Derabassi',
    city: 'Derabassi',
    type: 'Industrial Park',
    status: 'Under Construction',
    badge: 'Industrial',
    overview:
      'M PRO Star Hills is a planned industrial park in Derabassi engineered for modern manufacturing and warehousing. Designed for efficiency, scale and a workforce-friendly environment.',
    highlights: [
      'Modern industrial park',
      'Warehouse-ready plots',
      'Strong logistics access',
      'Workforce-friendly planning',
    ],
    amenities: [
      'Reliable power infrastructure',
      'Internal road network',
      'Common utilities',
      'Security & surveillance',
      'Green buffer zones',
      'Truck parking & loading',
    ],
    specs: [
      { label: 'Asset Type', value: 'Industrial Park' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Derabassi' },
      { label: 'Use', value: 'Manufacturing & Warehousing' },
    ],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const byCategory = (cat: Category) => PROJECTS.filter((p) => p.category === cat);

export const CATEGORY_META: Record<
  Category,
  { title: string; kicker: string; lede: string; hero: string }
> = {
  residential: {
    title: 'Residential',
    kicker: 'Homes from 1 to 4 BHK',
    lede: 'Landmark homes across the Tricity — from value-smart apartments to panoramic sky residences, each delivered with M PRO\'s signature on-time promise.',
    hero: '/projects/cityofdream.avif',
  },
  commercial: {
    title: 'Commercial',
    kicker: 'Showrooms · High-Streets · Offices',
    lede: 'Flagship retail and workspace destinations engineered for footfall, frontage and future-proof returns at the Tricity\'s most strategic addresses.',
    hero: '/projects/rio-one.webp',
  },
  industrial: {
    title: 'Industrial',
    kicker: 'Estates · Parks · Warehousing',
    lede: 'Fully-serviced industrial estates around Rajpura, Derabassi and Banur — plug-and-play infrastructure built for manufacturing scale.',
    hero: '/projects/siel.webp',
  },
};
