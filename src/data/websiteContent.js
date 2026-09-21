/**
 * websiteContent.js
 * ---------------------------------------------------------------------------
 * Single source of truth for all site content.
 * Replace placeholder copy here without touching component/design code.
 *
 * Icon names map to lucide-react icons. See src/components/Icon.jsx.
 * ---------------------------------------------------------------------------
 */

export const PLACEHOLDER = {
  service: 'Detailed service information will be added.',
  solution: 'Solution details coming soon.',
  industry: 'Industry-specific solutions and capabilities will be added soon.',
  resource: 'Content coming soon.',
  careers: 'Current opportunities will be updated here.',
  generic: 'Content coming soon.',
}

export const brand = {
  name: 'Ritexo Technologies',
  shortName: 'Ritexo',
  tagline: 'Connecting Talent. Delivering Technology.',
  logo: '/assets/ritexo-logo.png', // Replace this file with the official logo.
  meaning: 'RITEXO = Reliability + Innovation + Technology + Excellence + Operations',
  meaningAlt: 'RITEXO = Rising Ideas Through Excellence & Operations',
  keywords: ['Innovation', 'Excellence', 'Reliability'],
  email: 'ritexotech@gmail.com',
  phones: ['8105603136', '9110264289'],
  website: 'www.ritexo.com',
  location: 'Bangalore, India',
  copyright: '© 2026 Ritexo Technologies. All Rights Reserved.',
}

export const company = {
  overview:
    'Ritexo Technologies represents a commitment to delivering reliable technology solutions, innovative services, operational excellence, and skilled talent that help organizations transform and grow.',
  vision:
    'To become a globally trusted technology and consulting partner empowering businesses through innovation, talent, and digital transformation.',
  mission:
    'To deliver innovative technology solutions, managed services, and skilled professionals that accelerate business growth and operational excellence.',
  positioning:
    'Ritexo Technologies is a technology consulting, managed services, and resource augmentation company delivering end-to-end IT support, enterprise application services, HR technology consulting, infrastructure management, and digital transformation solutions.',
}

export const coreValues = [
  { title: 'Integrity', icon: 'ShieldCheck', description: 'We act with honesty, transparency, and accountability.' },
  { title: 'Innovation', icon: 'Lightbulb', description: 'We continuously seek better ways to solve business challenges.' },
  { title: 'Excellence', icon: 'Award', description: 'We strive for the highest standards in everything we do.' },
  { title: 'Customer Success', icon: 'HeartHandshake', description: "Our customers' success drives our success." },
  { title: 'Collaboration', icon: 'Users', description: 'We build strong partnerships with clients, employees, and stakeholders.' },
  { title: 'Continuous Learning', icon: 'GraduationCap', description: 'We embrace growth, learning, and future technologies.' },
]

// RITEXO expanded — used in the "Why Ritexo" section.
export const whyRitexo = [
  { title: 'Reliability', icon: 'ShieldCheck', description: 'Reliable technology and service delivery.' },
  { title: 'Innovation', icon: 'Lightbulb', description: 'Continuously seeking better ways to solve business challenges.' },
  { title: 'Technology', icon: 'Cpu', description: 'Technology-driven solutions for organizations.' },
  { title: 'Excellence', icon: 'Award', description: 'High standards across our services.' },
  { title: 'Talent', icon: 'Users', description: 'Skilled professionals and consulting expertise.' },
  { title: 'Operations', icon: 'Settings2', description: 'Focus on operational excellence.' },
]

export const services = [
  { slug: 'technology-consulting', title: 'Technology Consulting', icon: 'Lightbulb', description: PLACEHOLDER.service },
  { slug: 'managed-services', title: 'Managed Services', icon: 'Server', description: PLACEHOLDER.service },
  { slug: 'resource-augmentation', title: 'Resource Augmentation', icon: 'UserPlus', description: PLACEHOLDER.service },
  { slug: 'it-support', title: 'IT Support', icon: 'LifeBuoy', description: PLACEHOLDER.service },
  { slug: 'enterprise-application-services', title: 'Enterprise Application Services', icon: 'AppWindow', description: PLACEHOLDER.service },
  { slug: 'infrastructure-management', title: 'Infrastructure Management', icon: 'Network', description: PLACEHOLDER.service },
  { slug: 'hr-technology-consulting', title: 'HR Technology Consulting', icon: 'Users', description: PLACEHOLDER.service },
  { slug: 'digital-transformation', title: 'Digital Transformation', icon: 'Rocket', description: PLACEHOLDER.service },
]

// Subset shown in the home "What We Do" section.
export const whatWeDo = [
  'technology-consulting',
  'managed-services',
  'resource-augmentation',
  'enterprise-application-services',
  'infrastructure-management',
  'digital-transformation',
]

export const solutions = [
  { slug: 'digital-transformation', title: 'Digital Transformation', icon: 'Rocket', description: PLACEHOLDER.solution },
  { slug: 'technology-solutions', title: 'Technology Solutions', icon: 'Cpu', description: PLACEHOLDER.solution },
  { slug: 'workforce-solutions', title: 'Workforce Solutions', icon: 'Users', description: PLACEHOLDER.solution },
  { slug: 'enterprise-it-solutions', title: 'Enterprise IT Solutions', icon: 'Building2', description: PLACEHOLDER.solution },
  { slug: 'operational-excellence', title: 'Operational Excellence', icon: 'Gauge', description: PLACEHOLDER.solution },
]

export const industries = [
  { slug: 'banking-financial-services', title: 'Banking & Financial Services', icon: 'Landmark', description: PLACEHOLDER.industry },
  { slug: 'healthcare', title: 'Healthcare', icon: 'HeartPulse', description: PLACEHOLDER.industry },
  { slug: 'retail', title: 'Retail', icon: 'ShoppingBag', description: PLACEHOLDER.industry },
  { slug: 'technology', title: 'Technology', icon: 'Cpu', description: PLACEHOLDER.industry },
  { slug: 'manufacturing', title: 'Manufacturing', icon: 'Factory', description: PLACEHOLDER.industry },
  { slug: 'startups-enterprises', title: 'Startups & Enterprises', icon: 'Rocket', description: PLACEHOLDER.industry },
  { slug: 'other-industries', title: 'Other Industries', icon: 'Globe2', description: PLACEHOLDER.industry },
]

export const resources = [
  { slug: 'blog', title: 'Blog', icon: 'FileText', description: PLACEHOLDER.resource },
  { slug: 'case-studies', title: 'Case Studies', icon: 'ClipboardList', description: PLACEHOLDER.resource },
  { slug: 'insights', title: 'Insights', icon: 'Lightbulb', description: PLACEHOLDER.resource },
  { slug: 'news-updates', title: 'News & Updates', icon: 'Newspaper', description: PLACEHOLDER.resource },
  { slug: 'faqs', title: 'FAQs', icon: 'HelpCircle', description: PLACEHOLDER.resource },
]

export const careers = {
  heading: 'Build Your Future With Ritexo',
  text: 'We are building a team of skilled professionals who believe in innovation, excellence, collaboration, and continuous learning.',
  cta: 'View Open Positions',
  placeholder: PLACEHOLDER.careers,
}

// Contact form — options for "Service Interested In".
export const serviceOptions = services.map((s) => s.title)

// ---------------------------------------------------------------------------
// Navigation model — drives the Navbar + dropdowns. Keep routes in sync
// with the <Routes> defined in App.jsx.
// ---------------------------------------------------------------------------
export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    dropdown: [
      { label: 'Company Overview', to: '/about' },
      { label: 'Our Vision', to: '/about#vision' },
      { label: 'Our Mission', to: '/about#mission' },
      { label: 'Core Values', to: '/about#values' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    mega: true,
    dropdown: services.map((s) => ({ label: s.title, to: `/services/${s.slug}`, icon: s.icon })),
  },
  {
    label: 'Solutions',
    to: '/solutions',
    dropdown: solutions.map((s) => ({ label: s.title, to: `/solutions/${s.slug}`, icon: s.icon })),
  },
  {
    label: 'Industries',
    to: '/industries',
    dropdown: industries.map((s) => ({ label: s.title, to: `/industries/${s.slug}`, icon: s.icon })),
  },
  {
    label: 'Careers',
    to: '/careers',
    dropdown: [
      { label: 'Build Your Future With Ritexo', to: '/careers' },
      { label: 'View Open Positions', to: '/careers#openings' },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    dropdown: resources.map((s) => ({ label: s.title, to: `/resources/${s.slug}`, icon: s.icon })),
  },
  { label: 'Contact Us', to: '/contact' },
]

export const footer = {
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Vision', to: '/about#vision' },
        { label: 'Mission', to: '/about#mission' },
        { label: 'Core Values', to: '/about#values' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Technology Consulting', to: '/services/technology-consulting' },
        { label: 'Managed Services', to: '/services/managed-services' },
        { label: 'Resource Augmentation', to: '/services/resource-augmentation' },
        { label: 'IT Support', to: '/services/it-support' },
        { label: 'Digital Transformation', to: '/services/digital-transformation' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', to: '/resources/blog' },
        { label: 'Case Studies', to: '/resources/case-studies' },
        { label: 'Insights', to: '/resources/insights' },
        { label: 'FAQs', to: '/resources/faqs' },
      ],
    },
  ],
}
