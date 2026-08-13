export const profile = {
  name: 'Shevon Krishmal',
  fullName: 'T M S K Appuhamy',
  title: 'Software Engineer',
  tagline:
    'Building reliable enterprise solutions across manufacturing, scheduling, and cloud ERP.',
  summary:
    'Software Engineer focused on developing reliable enterprise solutions, solving complex technical challenges, and driving continuous improvement. Thrive in collaborative engineering environments, working with diverse teams to deliver effective solutions and shared technical and business objectives.',
  dateOfBirth: '1998.11.22',
  nic: '199832700492',
  email: 'shevonkrishmal1998@gmail.com',
  phone: '+94 77 628 7052',
  address: "No: 20/4, St. Anne's Lane, Katukurunda, Moratuwa.",
  location: 'Moratuwa, Sri Lanka',
  linkedin: 'https://linkedin.com/in/shevon-krishmal-18ab461b5/',
  github: 'https://github.com/shevonkrishmal',
  credly: 'https://www.credly.com/users/shevon-krishmal.e0b60150/badges/credly',
  cvPath: '/cv/Shevon-Krishmal-CV.pdf',
  cvFileName: 'Shevon-Krishmal-CV.pdf',
  photo: '/images/profile.png',
}

export const education = [
  {
    id: 'sliit',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in Information Technology',
    specialization: 'Specializing in Software Engineering',
    period: 'January 2019 – January 2023',
    logo: '/logos/sliit.png',
    highlights: [
      'Undergraduate research published on IEEE Xplore',
      'Hands-on project work across MERN, IoT, mobile, and enterprise integration',
    ],
  },
  {
    id: 'school',
    school: "St. Sebastian's College, Moratuwa",
    degree: 'G.C.E. Advanced Level & Ordinary Level',
    specialization: 'Physical Science stream',
    period: 'January 2004 – August 2017',
    logo: '/logos/school.png',
    highlights: [
      'G.C.E. Advanced Level (2017) — Physical Science stream',
      'G.C.E. Ordinary Level (2014)',
      'Member of Science Society and Art Society (drawing)',
      'Treasurer of YCS Society (2009 – 2017)',
      'Football Team Vice-Captain',
    ],
  },
]

export const courses = [
  {
    id: 'slita',
    title: 'Merchandising Management',
    issuer: 'SLITA | Sri Lanka Institute of Textile & Apparel',
    period: 'January 2018 – August 2018',
  },
  {
    id: 'british-council',
    title: 'English Language',
    issuer: 'British Council Sri Lanka',
    period: '',
  },
]

export const experiences = [
  {
    id: 'ifs',
    role: 'Software Engineer',
    company: 'IFS R&D International (Pvt) Ltd',
    location: 'Sri Lanka',
    period: 'August 2022 – August 2026',
    logo: '/logos/ifs.png',
    summary:
      'Software Engineer on the Manufacturing team, contributing to the development and continuous evolution of IFS Cloud ERP. Delivered enterprise software solutions across complex functional requirements, technical challenges, and the full product development lifecycle.',
    highlights: [
      'Contributed to product development, enhancements, defect resolution, and platform stabilization across seven consecutive IFS Cloud release tracks (22R2–26R2).',
      'Provided technical customer support for APP10/IEE and Cloud tracks by investigating and resolving customer-reported issues.',
      'Built deep expertise in General Manufacturing processes, including end-to-end Shop Order flows, Scheduling, Visualization, CAMRO, and Estimates components.',
      'Continuously upskilled in AI-assisted development tools and emerging engineering practices.',
      'Collaborated with cross-functional teams on debugging, code reviews, testing, defect analysis, and continuous product improvement.',
    ],
    focusAreas: [
      {
        title: 'MSO (Manufacturing Scheduling Optimization)',
        points: [
          'Core contributor to MSO, collaborating with the PSO engine team on complex scheduling logic.',
          'Interpreted PSO XML output to diagnose engine behavior and issues.',
          'Delivered work in resource handling, availability, split model logic, operation blocks, tool resources, Gantt restructuring, automatic scheduling triggers, and planner support.',
          'Resolved 200+ defects within the MSO component.',
          'Supported MFGVIZ and built working knowledge of APB, CBS, and CBSINT.',
        ],
      },
      {
        title: 'CAMRO, CRO & Estimating (ESTMAN / ESTPRD)',
        points: [
          'Contributed to development and customer support across CAMRO, CRO, and Estimate components.',
          'Delivered the Order Summary for Order Structure feature and a CAMRO data-visualization Lobby.',
          'Resolved approximately 100 customer support cases across these components.',
        ],
      },
      {
        title: 'Additional responsibilities',
        points: [
          'Technical Coordinator for APP10.',
          'QA counterpart supporting quality assurance for the team.',
          'Contributed to general release management across multiple release cycles.',
          'Delivered time zone conversion enhancements across MSO, MFGVIZ, and CBSINT.',
          'Active member of the team welfare committee.',
        ],
      },
    ],
    domains: [
      'MSO',
      'MFGVIZ',
      'CBS',
      'CBSINT',
      'CROMFG',
      'CAMRO',
      'CRO',
      'ESTMAN',
      'ESTPRD',
      'SHPORD',
      'APP10',
      'IEE',
      'APB',
      'PSO XML',
    ],
  },
  {
    id: 'wenthura',
    role: 'Intern Software Engineer',
    company: 'Wenthura Solutions (Private) Limited',
    location: 'Sri Lanka',
    period: 'July 2021 – January 2022',
    logo: '/logos/wenthura.png',
    summary:
      'Built administrative and front-office platforms for hospital and e-commerce workflows.',
    highlights: [
      'Designed and implemented a platform to manage front-office work in a hospital management system.',
      'Implemented delivery management administrative duties and an e-commerce website admin panel to analyze sales details.',
    ],
    focusAreas: [],
    domains: ['Hospital systems', 'E-commerce admin', 'Delivery management'],
  },
]

export const projects = [
  {
    id: 'hydroponic',
    title: 'Autonomous Hydroponic Environment with Live Remote Consulting',
    subtitle: 'Strawberry farming research system',
    description:
      'Undergraduate research project combining IoT sensing, computer vision, and remote monitoring for autonomous hydroponic strawberry farming.',
    technologies: ['IoT', 'OpenCV', 'Python', 'ReactJS', 'Grafana'],
    link: 'https://ieeexplore.ieee.org/document/10025041',
    linkLabel: 'IEEE publication',
    featured: true,
  },
  {
    id: 'postal',
    title: 'Postal Management System',
    subtitle: 'Web application',
    description: 'End-to-end postal operations management system with web interfaces backed by a relational database.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    featured: false,
  },
  {
    id: 'event-planning',
    title: 'Event Planning System (ITP)',
    subtitle: 'Full-stack web platform',
    description: 'Collaborative event planning platform built with the MERN stack for organizing and managing events.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    featured: false,
  },
  {
    id: 'healthcare',
    title: 'Health Care Mobile Application',
    subtitle: 'Android application',
    description: 'Mobile healthcare application with cloud-backed data and real-time services.',
    technologies: ['Java', 'Android', 'Firebase'],
    featured: false,
  },
  {
    id: 'shopping',
    title: 'Shopping Platform System',
    subtitle: 'Enterprise-integrated commerce',
    description: 'Shopping platform with MERN front/back ends and WSO2 EI for enterprise service bus integration.',
    technologies: ['MERN', 'WSO2 EI', 'ESB'],
    featured: false,
  },
  {
    id: 'procurement',
    title: 'Procurement Management Tool',
    subtitle: 'Web + mobile',
    description: 'Procurement workflows spanning web and mobile clients for purchasing and vendor management.',
    technologies: ['MERN', 'Flutter'],
    featured: false,
  },
  {
    id: 'bookstore',
    title: 'Online Bookstore Web Application',
    subtitle: 'Web + mobile',
    description: 'Online bookstore with catalog, ordering, and companion mobile experiences.',
    technologies: ['MERN', 'Flutter'],
    featured: false,
  },
]

export const certifications = [
  {
    id: 'ifs-web-dev',
    title: 'IFS Cloud Web Developer',
    type: 'Certified Practitioner',
    issuer: 'IFS',
    detail: 'IFS Cloud Web Developer',
    image: '/certs/ifs-cloud-web-developer.png',
  },
  {
    id: 'ifs-cloud-build',
    title: 'Lifecycle Experience Cloud Build Place',
    type: 'Learning Achievement',
    issuer: 'IFS',
    detail: 'Cloud Build Place for Developers',
    image: '/certs/ifs-cloud-build-place.png',
  },
  {
    id: 'ifs-pso-arch',
    title: 'IFS PSO — Architecture & Technical Components',
    type: 'Learning Achievement',
    issuer: 'IFS',
    detail: 'Deployment and Installation · PSO Architecture Fundamentals',
    image: '/certs/ifs-pso-architecture.png',
  },
  {
    id: 'ifs-pso-deploy',
    title: 'IFS PSO — Deployment Methodologies',
    type: 'Learning Achievement',
    issuer: 'IFS',
    detail: 'Deployment and Installation · Deployment Methodologies',
    image: '/certs/ifs-pso-deployment-methodologies.png',
  },
  {
    id: 'ifs-pso-sched',
    title: 'IFS PSO — Scheduling Concepts',
    type: 'Learning Achievement',
    issuer: 'IFS',
    detail: 'Scheduling Concepts · Core Scheduling Principles',
    image: '/certs/ifs-pso-scheduling-concepts.png',
  },
]

export const skills = {
  languages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PL/SQL', 'C', 'Java', 'Python'],
  frameworks: ['ReactJS', 'OpenCV', 'NodeJS', 'IFS Aurena Framework', 'Tailwind CSS'],
  databases: ['SQL', 'MongoDB', 'Firebase'],
  tools: ['JIRA', 'Bitbucket', 'GitHub', 'Claude', 'Cursor AI', 'Figma', 'Draw.io'],
  interests: ['Robotics (Arduino, Raspberry Pi)', 'Image processing', 'AI Engineering', 'Data science'],
}

export const languages = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Sinhala', level: 'Native or Bilingual Proficiency' },
]

export const references = [
  {
    name: 'Nishadi Mannapperuma',
    role: 'Director Quality Assurance Manufacturing — IFS',
    email: 'nishadi.mannapperuma@ifs.com',
    phone: '+94 71 809 6766',
  },
  {
    name: 'Shanuka Wijayatunga',
    role: 'Software Architect Manufacturing — IFS',
    email: 'shanuka.wijayatunga@ifs.com',
    phone: '+94 71 228 0682',
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
]
