export const profile = {
  name: 'Shevon Krishmal',
  fullName: 'T M S K Appuhamy',
  title: 'Software Engineer',
  tagline:
    'Building reliable enterprise solutions in manufacturing ERP — from scheduling optimization to Cloud Web development.',
  summary:
    'Software Engineer focused on developing reliable enterprise solutions, solving complex technical challenges, and driving continuous improvement. Thrive in collaborative engineering environments, working with diverse teams to combine expertise, deliver effective solutions, and achieve shared technical and business objectives.',
  email: 'shevonkrishmal1998@gmail.com',
  phone: '+94 77 628 7052',
  address: "No: 20/4, St. Anne's Lane, Katukurunda, Moratuwa",
  linkedin: 'https://linkedin.com/in/shevon-krishmal-18ab461b5/',
  github: 'https://github.com/shevonkrishmal',
  cvPath: '/cv/Shevon-Krishmal-CV.pdf',
  cvFileName: 'Shevon-Krishmal-CV.pdf',
  degree:
    'BSc (Hons) in Information Technology Specializing in Software Engineering',
  languages: [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Sinhala', level: 'Native or Bilingual Proficiency' },
  ],
  interests: [
    'Robotics (Arduino, Raspberry Pi)',
    'Image processing',
    'AI Engineering',
    'Data science',
  ],
}

export const education = [
  {
    id: 'sliit',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Jan 2019 – Jan 2023',
    degree:
      'BSc (Hons) in Information Technology Specializing in Software Engineering',
    logo: '/logos/sliit.png',
    type: 'Higher Education' as const,
  },
  {
    id: 'sebastian',
    institution: "St. Sebastian's College Moratuwa",
    period: 'Jan 2004 – Aug 2017',
    degree: 'G.C.E. Advanced Level (Physical Science) · G.C.E. Ordinary Level',
    logo: '/logos/sebastian.png',
    type: 'School' as const,
    highlights: [
      'G.C.E. Advance Level (2017) — Physical Science stream',
      'G.C.E. Ordinary Level (2014)',
      'Member of Science Society',
      'Member of Art Society (drawing)',
      'Treasurer of YCS Society (2009 – 2017)',
      'Football Team Vice-Captain',
    ],
  },
  {
    id: 'slita',
    institution: 'Sri Lanka Institute of Textile & Apparel (SLITA)',
    period: 'Jan 2018 – Aug 2018',
    degree: 'Merchandising Management',
    logo: null,
    type: 'Course' as const,
  },
  {
    id: 'british-council',
    institution: 'British Council Sri Lanka',
    period: 'Course',
    degree: 'English Language',
    logo: null,
    type: 'Course' as const,
  },
]

export const experience = [
  {
    id: 'ifs',
    role: 'Software Engineer',
    company: 'IFS R&D International (Pvt) Ltd',
    location: 'Sri Lanka',
    period: 'Aug 2022 – Aug 2026',
    logo: '/logos/ifs.png',
    summary:
      'Software Engineer on the Manufacturing team, contributing to the development and continuous evolution of IFS Cloud ERP. Delivering enterprise software solutions within the Manufacturing domain across complex functional requirements, technical challenges, and the full product development lifecycle.',
    highlights: [
      'Contributed across seven consecutive IFS Cloud release tracks (22R2–26R2): product development, enhancements, defect resolution, and platform stabilization.',
      'Provided technical customer support for APP10/IEE and Cloud tracks by investigating and resolving customer-reported issues.',
      'Built functional and technical expertise in General Manufacturing — end-to-end Shop Order flows, Scheduling, Visualization, CAMRO, and Estimates.',
      'Served as Technical Coordinator for APP10 and QA counterpart for the team.',
      'Delivered time zone conversion enhancements across MSO, MFGVIZ, and CBSINT.',
      'Active member of the team welfare committee.',
    ],
    focusAreas: [
      {
        title: 'MSO (Manufacturing Scheduling Optimization)',
        points: [
          'Core contributor to MSO, collaborating with the PSO engine team on complex scheduling logic.',
          'Strong capability reading and interpreting PSO XML output to diagnose engine behavior.',
          'Delivered work in Resource handling, Resource availability, Split model logic, Operation blocks, Tool resources, Gantt restructuring, automatic scheduling triggers, and Planner support.',
          'Resolved 200+ defects within the MSO component.',
          'Supported MFGVIZ; working knowledge of APB, CBS, and CBSINT.',
        ],
      },
      {
        title: 'CAMRO, CRO & Estimating (ESTMAN / ESTPRD)',
        points: [
          'Contributed to development and customer support across CAMRO, CRO, and Estimate components.',
          'Delivered Order Summary for Order Structure and a CAMRO data-visualization Lobby.',
          'Resolved approximately 100 customer support cases across these components.',
        ],
      },
    ],
    components: [
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
    period: 'Jul 2021 – Jan 2022',
    logo: '/logos/wenthura.png',
    summary:
      'Built and shipped product features across hospital management, delivery operations, and e-commerce admin analytics.',
    highlights: [
      'Designed and implemented a platform to manage front-office work in a hospital management system.',
      "Implemented delivery management administrative duties and an e-commerce website admin panel to analyze sales details.",
    ],
    focusAreas: [],
    components: [],
  },
]

export const projects = [
  {
    id: 'hydroponic',
    title:
      'Autonomous Hydroponic Environment with Live Remote Consulting System for Strawberry Farming',
    type: 'Research',
    description:
      'IEEE-published research project combining IoT sensing, computer vision, and remote consulting for strawberry hydroponic farming.',
    tech: ['IoT', 'OpenCV', 'Python', 'ReactJS', 'Grafana'],
    link: 'https://ieeexplore.ieee.org/document/10025041',
  },
  {
    id: 'postal',
    title: 'Postal Management System',
    type: 'Academic',
    description: 'Web application for managing postal operations and workflows.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    link: null,
  },
  {
    id: 'event',
    title: 'Event Planning System (ITP)',
    type: 'Academic',
    description: 'Full-stack event planning platform built with the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: null,
  },
  {
    id: 'healthcare',
    title: 'Health Care Mobile Application',
    type: 'Academic',
    description: 'Android healthcare application backed by Firebase.',
    tech: ['Java', 'Android', 'Firebase'],
    link: null,
  },
  {
    id: 'shopping',
    title: 'Shopping Platform System',
    type: 'Academic',
    description:
      'E-commerce platform integrated with WSO2 Enterprise Integrator (ESB).',
    tech: ['MERN', 'WSO2 EI'],
    link: null,
  },
  {
    id: 'procurement',
    title: 'Procurement Management Tool',
    type: 'Academic',
    description: 'Procurement workflows with web and mobile clients.',
    tech: ['MERN', 'Flutter'],
    link: null,
  },
  {
    id: 'bookstore',
    title: 'Online Bookstore Web Application',
    type: 'Academic',
    description: 'Online bookstore with web frontend and Flutter companion app.',
    tech: ['MERN', 'Flutter'],
    link: null,
  },
]

export const certifications = [
  {
    id: 'ifs-web-dev',
    title: 'IFS Cloud Web Developer',
    issuer: 'IFS',
    kind: 'Certified Practitioner',
    image: '/certs/ifs-cloud-web-developer.png',
  },
  {
    id: 'ifs-lifecycle',
    title: 'Lifecycle Experience Cloud Build Place for Developers',
    issuer: 'IFS',
    kind: 'Learning Achievement',
    image: '/certs/ifs-lifecycle-cloud-build.png',
  },
  {
    id: 'ifs-pso-arch',
    title: 'IFS PSO — Architecture & Technical Components Fundamentals',
    issuer: 'IFS',
    kind: 'Deployment and Installation',
    image: '/certs/ifs-pso-architecture.png',
  },
  {
    id: 'ifs-pso-sched',
    title: 'IFS PSO — Core Scheduling Principles',
    issuer: 'IFS',
    kind: 'Scheduling Concepts',
    image: '/certs/ifs-pso-core-scheduling.png',
  },
  {
    id: 'ifs-pso-deploy',
    title: 'IFS PSO — Deployment Methodologies',
    issuer: 'IFS',
    kind: 'Deployment and Installation',
    image: '/certs/ifs-pso-deployment-methodologies.png',
  },
]

export const skills = {
  languages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PL/SQL', 'C', 'Java', 'Python'],
  frameworks: [
    'ReactJS',
    'OpenCV',
    'NodeJS',
    'IFS Aurena Framework',
    'Tailwind CSS',
  ],
  databases: ['SQL', 'MongoDB', 'Firebase'],
  tools: [
    'JIRA',
    'Bitbucket',
    'GitHub',
    'Figma',
    'Draw.io',
    'Claude',
    'Cursor AI',
  ],
}

export const references = [
  {
    name: 'Nishadi Mannapperuma',
    title: 'Director Quality Assurance Manufacturing — IFS',
    email: 'nishadi.mannapperuma@ifs.com',
    phone: '+94 71 809 6766',
  },
  {
    name: 'Shanuka Wijayatunga',
    title: 'Software Architect Manufacturing — IFS',
    email: 'shanuka.wijayatunga@ifs.com',
    phone: '+94 71 228 0682',
  },
]
