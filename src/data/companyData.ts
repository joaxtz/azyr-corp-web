import { ServiceDetail, CourseCard, TeamMember, LocationDetail } from '../types';

export const COMPANY_INFO = {
  name: 'AZYR Group of Companies',
  tagline: 'Bigger Vision. Stronger Together.',
  heroHeadline: 'Building Partnerships. Empowering People. Creating Opportunities.',
  heroSubtext:
    'AZYR Group of Companies is a diversified enterprise driving international business excellence across commerce, enterprise support infrastructure, and human capital development. We bridge global vision with local execution to empower organizations worldwide.',
  aboutSummary:
    'AZYR Group of Companies stands at the intersection of international commerce, technology enablement, and specialized talent development. With operational hubs across the Americas and Asia-Pacific, we build resilient enterprise partnerships and high-performing support ecosystems.',
  visionStatement:
    'To be an internationally recognized corporate conglomerate that sets benchmarks in collaborative commerce, enterprise capability, and sustainable business growth across global markets.',
  missionStatement:
    'To empower businesses and individuals through scalable operational partnerships, industry-leading technical support, responsive customer care, and transformative professional education.',
  quote: 'Bigger Vision. Stronger Together.',
  contactEmail: 'contact@azyrgroup.com',
  inquiryEmail: 'inquiries@azyrgroup.com',
  phoneMexico: '+52 (81) 8000-2997',
  phoneIndia: '+91 (80) 4190-8800',
  foundedYear: '2016',
};

export const WHY_AZYR_POINTS = [
  {
    id: 'excellence',
    title: 'Professional Excellence',
    description:
      'We institute rigorous operational benchmarks, ISO-aligned quality frameworks, and institutional discipline in every corporate engagement.',
    iconName: 'Award',
  },
  {
    id: 'partnerships',
    title: 'Business Partnerships',
    description:
      'We forge high-trust, mutual-growth alliances that scale seamlessly with our enterprise partners from pilot execution to global rollout.',
  iconName: 'Handshake',
  },
  {
    id: 'customer-centric',
    title: 'Customer-Centric Approach',
    description:
      'Our dedicated client advocacy and omnichannel communication architecture ensure empathetic, timely, and high-satisfaction interactions.',
    iconName: 'Users',
  },
  {
    id: 'technical-expertise',
    title: 'Technical Expertise',
    description:
      'Certified systems engineers, tier-3 support architects, and rapid troubleshooting pipelines safeguard business continuity 24/7.',
    iconName: 'Cpu',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description:
      'Through executive masterclasses and vocational training modules, we continuously nurture talent to meet dynamic market paradigms.',
    iconName: 'GraduationCap',
  },
  {
    id: 'global-reach',
    title: 'Global Reach',
    description:
      'Strategically positioned across Monterrey, Mexico and Bengaluru, India, our multinational infrastructure delivers follow-the-sun execution.',
    iconName: 'Globe2',
  },
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'ecommerce-partnerships',
    title: 'E-Commerce & Quick-Commerce Partnerships',
    badge: 'Enterprise Commerce',
    shortDesc:
      'Accelerating rapid retail and multichannel digital commerce through synchronized fulfillment infrastructure and agile brand integration.',
    fullDesc:
      'AZYR Group partners with enterprise retailers, direct-to-consumer innovators, and rapid on-demand delivery networks. We deliver full-spectrum supply chain orchestration, vendor management, platform synchronization, and last-mile agility designed for frictionless high-velocity distribution.',
    iconName: 'ShoppingBag',
    checklist: [
      'Strategic operational support',
      'Professional service delivery',
      'Scalable partnership models',
      'Dedicated account management',
      'Reliable business collaboration',
    ],
  },
  {
    id: 'customer-support',
    title: 'Customer Support Services',
    badge: 'Omnichannel CX',
    shortDesc:
      'Delivering white-glove, multilingual customer support ecosystems that transform inquiries into lasting brand loyalty.',
    fullDesc:
      'Our customer care division combines empathetic human talent with unified communication channels. From live voice and chat to proactive escalation resolution, we ensure every interaction reinforces trust, enhances lifetime retention, and exceeds service-level commitments.',
    iconName: 'Headphones',
    checklist: [
      'Customer assistance',
      'Query management',
      'Customer communication',
      'Order and service support',
      'Professional customer experience',
    ],
  },
  {
    id: 'technical-support',
    title: 'Technical Support Services',
    badge: 'Engineering & SLA',
    shortDesc:
      'Mission-critical technical assistance, software diagnostic triage, and enterprise IT troubleshooting for maximum uptime.',
    fullDesc:
      'Our tier-1 through tier-3 technical specialists manage complex cloud infrastructure, application errors, integration diagnostics, and user endpoint challenges. Supported by rigorous SLA frameworks and escalation protocols, we resolve technical bottlenecks before they impact commerce.',
    iconName: 'Wrench',
    checklist: [
      'Technical assistance',
      'Troubleshooting support',
      'Customer technical support',
      'Issue resolution',
      'Professional technical assistance',
    ],
  },
  {
    id: 'online-courses',
    title: 'Online Professional Courses',
    badge: 'Human Capital Development',
    shortDesc:
      'Curated professional upskilling programs and certification pathways designed for modern corporate and international workplace excellence.',
    fullDesc:
      'AZYR Academy empowers working professionals, emerging leaders, and corporate teams with market-responsive curricula. Blending interactive live workshops, real-world case simulations, and recognized credentialing, our courses build high-impact capabilities across core disciplines.',
    iconName: 'BookOpen',
    checklist: [
      'HR Professional Course',
      'Personality Development Course',
      'Foreign Language Courses',
      'Professional Skills Development',
    ],
  },
];

export const ONLINE_COURSES: CourseCard[] = [
  {
    id: 'hr-pro',
    title: 'HR Professional Course',
    tagline: 'Strategic Talent & Organizational Architecture',
    description:
      'Comprehensive curriculum spanning modern talent acquisition, performance appraisal frameworks, labor jurisprudence, and employee engagement strategies in distributed workplaces.',
    duration: '12 Weeks',
    delivery: 'Live Interactive + Capstone Case Studies',
    keyTopics: ['Strategic Talent Acquisition', 'Performance Metrics & OKRs', 'Global Labor Compliance', 'Employee Relations & Culture'],
  },
  {
    id: 'personality-dev',
    title: 'Personality Development Course',
    tagline: 'Executive Presence & Interpersonal Mastery',
    description:
      'Immersive personal mastery program focusing on executive communication, boardroom diplomacy, negotiation psychometrics, and confident professional projection.',
    duration: '8 Weeks',
    delivery: 'Virtual Cohort + 1-on-1 Feedback Labs',
    keyTopics: ['Executive Voice & Stance', 'Persuasive Business Negotiation', 'Emotional Intelligence in Crisis', 'Public Speaking & Presentations'],
  },
  {
    id: 'foreign-languages',
    title: 'Foreign Language Courses',
    tagline: 'Multilingual Fluency for Global Commerce',
    description:
      'Specialized business language immersion tailored for cross-border negotiations, client relations, and multinational teamwork across Spanish, English, and French.',
    duration: '16 Weeks',
    delivery: 'Native Expert Facilitators + Immersion Labs',
    keyTopics: ['Corporate Spanish & Commercial Terminology', 'Business English for Cross-Border M&A', 'Conversational French', 'Cultural Nuance & Protocol'],
  },
  {
    id: 'skills-dev',
    title: 'Professional Skills Development',
    tagline: 'Applied Analytical & Technological Acumen',
    description:
      'High-impact vocational modules covering agile project management, business data interpretation, structured problem-solving, and cross-functional leadership.',
    duration: '10 Weeks',
    delivery: 'Self-Paced Hybrid + Weekly Masterminds',
    keyTopics: ['Agile Project Governance', 'Data-Driven Decision Making', 'Conflict Mediation', 'Digital Workflow Automation'],
  },
];

export const CORE_VALUES = [
  {
    id: 'professionalism',
    title: 'Professionalism',
    description:
      'Unwavering integrity, meticulous execution, and strict adherence to international corporate governance across every transaction.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Continually challenging legacy paradigms with scalable digital methodologies, intelligent workflows, and modern service architectures.',
    iconName: 'Lightbulb',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'Believing deeply that synergy creates exponential impact. We cultivate transparent, cooperative environments with partners and teams.',
    iconName: 'Users2',
  },
  {
    id: 'continuous-growth',
    title: 'Continuous Growth',
    description:
      'Relentless dedication to learning, evolutionary skill building, and sustainable value creation for all stakeholders.',
    iconName: 'TrendingUp',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'james-willson',
    name: 'James Willson',
    role: 'Regional Head Manager',
    photoUrl: '/src/assets/images/james_willson_1790591867456.jpg',
    department: 'Executive Leadership & Regional Operations',
    location: 'Monterrey, Mexico / Bengaluru, India',
    bio: 'With over eighteen years of cross-border enterprise management experience, James oversees AZYR’s global operational roadmap and regional execution. He spearheads strategic partnerships in rapid commerce and ensures seamless alignment between North American and Asian business units.',
    credentials: ['Strategic Operations Lead', 'Global Supply Chain Architecture', 'Cross-Border M&A Advisory'],
  },
  {
    id: 'sophia-cole',
    name: 'Sophia Cole',
    role: 'Human Resource Head',
    photoUrl: '/src/assets/images/sophia_cole_1790591887417.jpg',
    department: 'People Operations & AZYR Academy',
    location: 'Monterrey, Mexico',
    bio: 'Sophia leads human capital strategy, global talent acquisition, and the academic governance of the AZYR Professional Courses division. She has pioneered people-first organizational cultures and institutional learning frameworks that empower thousands of professionals.',
    credentials: ['Talent Architecture & Culture', 'Corporate Curriculum Design', 'Global Diversity & Inclusion'],
  },
  {
    id: 'paul-smith',
    name: 'Paul Smith',
    role: 'Technical Engineer Head',
    photoUrl: '/src/assets/images/paul_smith_1790591902059.jpg',
    department: 'Technology Infrastructure & Tier-3 Support',
    location: 'Bengaluru, India',
    bio: 'Paul directs AZYR’s enterprise technology operations, technical support infrastructure, and mission-critical cloud integrations. Under his stewardship, AZYR maintains 99.98% SLA compliance for client support desks and runs continuous automated diagnostics systems.',
    credentials: ['Enterprise IT Infrastructure', 'High-Availability Architectures', 'SLA & Incident Governance'],
  },
];

export const LOCATIONS: LocationDetail[] = [
  {
    id: 'mexico-hq',
    name: 'Headquarters Mexico',
    type: 'Global Corporate Headquarters',
    country: 'Mexico',
    city: 'Monterrey, Nuevo León',
    address: 'Boulevard Díaz Ordaz 130, Santa María, 64650 Monterrey, N.L., Mexico',
    phone: '+52 (81) 8000-2997',
    email: 'monterrey@azyrgroup.com',
    businessHours: 'Monday – Friday: 8:00 AM – 6:00 PM CST',
    timezone: 'CST (UTC-6)',
    coordinates: {
      lat: 25.6698,
      lng: -100.3792,
    },
    highlights: [
      'Executive Corporate Directorate',
      'Americas Commercial & Quick-Commerce Hub',
      'Bilingual Customer Experience Center',
      'Regional Governance & Compliance',
    ],
  },
  {
    id: 'india-office',
    name: 'India Office Bengaluru',
    type: 'Regional Operations & Tech Hub',
    country: 'India',
    city: 'Bengaluru, Karnataka',
    address: 'Tower D, Tower C, & Outer Ring Rd, Bellandur, Bengaluru, Karnataka 560103, India',
    phone: '+91 (80) 4190-8800',
    email: 'bengaluru@azyrgroup.com',
    businessHours: 'Monday – Friday: 9:00 AM – 7:00 PM IST',
    timezone: 'IST (UTC+5:30)',
    coordinates: {
      lat: 12.9298,
      lng: 77.6836,
    },
    highlights: [
      'Global Technical Support Command Center',
      'Asia-Pacific Logistics Operations',
      'AZYR Academy Engineering Lab',
      '24/7 SLA Diagnostics Infrastructure',
    ],
  },
];
