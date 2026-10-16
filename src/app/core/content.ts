export const BUSINESS = {
  name: 'Son Shine Lawn Care',
  phoneDisplay: '(912) 481-4537',
  phoneHref: 'tel:+19124814537',
  tagline: 'Dependable lawn care. Honest service. A difference you can see.',
  hours: [
    'Mon-Fri: 7am–6pm',
    'Saturday: 8am–2pm',
  ],
  mission:
    'Our mission is to provide dependable, high-quality lawn care and landscaping services that enhance the beauty, health, and value of every property we serve. We are committed to delivering exceptional workmanship, honest communication, and reliable service while building lasting relationships with our customers. Through hard work, attention to detail, and a passion for what we do, we strive to exceed expectations, treat every property with care and respect, and create outdoor spaces our customers can be proud of. We believe in doing every job with integrity, serving others with excellence, and honoring God through our work.',
};

export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
];

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  detail?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Regular Lawn Maintenance',
    description:
      'Consistent mowing, edging, and tidy finishes that keep your property looking sharp week after week.',
    detail:
      'Scheduled lawn care with clean edges, neat beds, and a reliable finish—so your yard stays presentation-ready all season.',
  },
  {
    number: '02',
    title: 'Landscaping Services',
    description:
      'Thoughtful trimming, bed work, and detail landscaping that brings polish to your property.',
    detail:
      'From shrub shaping to bed maintenance and curb-appeal upgrades, we handle the detail work that elevates your outdoor space.',
  },
  {
    number: '03',
    title: 'Tree Removal',
    description:
      'Safe, professional tree removal to clear hazards and open up your landscape with care.',
    detail:
      'We assess, remove, and clean up thoroughly—leaving your property safer and ready for whatever comes next.',
  },
  {
    number: '04',
    title: 'Spraying Applications',
    description:
      'Targeted spraying applications to help control weeds, pests, and keep your lawn healthier.',
    detail:
      'Professional spraying applications tailored to your property’s needs, applied carefully with clear communication throughout.',
  },
];

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export const CORE_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Attention to detail',
    description: 'Sharp edges, clean lines, and a finished look—every visit.',
  },
  {
    number: '02',
    title: 'Honest communication',
    description: 'Clear expectations, responsive service, and no surprises.',
  },
  {
    number: '03',
    title: 'Respect for your property',
    description: 'We work carefully, clean thoroughly, and treat every home with care.',
  },
];

export const NEIGHBORHOODS = [
  'Rincon, GA',
  'Guyton, GA',
  'Screven County, GA',
  'Savannah, GA',
  'Brooklet, GA',
  'Pooler, GA',
  'Statesboro, GA',
];

export const SERVICE_AREA_GROUPS = [
  'Rincon, Guyton & Brooklet',
  'Savannah, Pooler & Statesboro',
  'Screven County & surrounding areas',
];

export interface TestimonialSlide {
  image: string;
  imageLabel: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: TestimonialSlide[] = [
  {
    image: '/images/results-1.jpg',
    imageLabel: 'Fresh, Even Mowing',
    quote:
      'Son Shine is dependable, professional, and genuinely cares about the quality of their work. Our yard has never looked better.',
    author: 'James M.',
    role: 'Recurring customer',
    initials: 'JM',
  },
  {
    image: '/images/results-2.jpg',
    imageLabel: 'Crisp Edging',
    quote:
      'They show up when they say they will and leave everything looking sharp. Communication is clear and the results speak for themselves.',
    author: 'Sarah K.',
    role: 'Homeowner',
    initials: 'SK',
  },
  {
    image: '/images/results-3.jpg',
    imageLabel: 'Landscaping Finish',
    quote:
      'Our yard cleanup and landscaping work was thorough and professional. The property finally has that finished look we wanted.',
    author: 'David R.',
    role: 'Local resident',
    initials: 'DR',
  },
];
