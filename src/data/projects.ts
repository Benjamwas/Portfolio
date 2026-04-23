import vendraminiimg from '../assets/images/20250104_104747.jpg';
import oasisimg from '../assets/images/OASIS-LOGO-1024x1024.png';

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  impact: string[];
  image: string;
  link: string;
  caseStudy?: string;
  results?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'vendrami-school',
    title: 'Vendramini School Portal',
    shortDescription: 'Comprehensive administrative platform for educational institutions.',
    overview: 'A robust, scalable system designed to digitize and streamline all administrative and academic processes for K-12 schools.',
    problem: 'School administrators were drowning in paperwork, making it difficult to track attendance accurately, generate report cards efficiently, and communicate effectively with parents.',
    solution: "We deployed a unified system that digitizes student records, automates attendance tracking, and provides a secure portal for parents to monitor their child's progress.",
    features: [
      'Digital student and staff records management',
      'Automated attendance tracking',
      'Dynamic grading and report card generation',
      'Secure parent portal with real-time updates',
      'Internal messaging and announcement system',
      'Online fee payment and financial management',
      'Comprehensive analytics dashboard for school administrators',
      'Mobile-friendly interface for on-the-go access',
      'Integration with third-party educational tools and platforms',
      'Role-based access control to ensure data security and privacy',
      'School administration tools for scheduling, resource management, and communication',
      'Remote learning capabilities with virtual classrooms and online assignments',
      'Automated notifications and reminders for parents and staff',
      'Customizable reporting features for academic performance and attendance trends',
      'Scalable architecture to support multiple schools within a district or educational network',
      'User-friendly interface designed for non-technical users, ensuring ease of adoption by school staff and parents'
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'Express', 'Redis', 'm-pesa API'],
    impact: [
      'Reduced manual administrative workload by 70%',
      'Eliminated paper waste for report cards and notices',
      'Improved parent engagement by 85%'
    ],
    link: 'https://vendraminischool.sc.ke',
    image: vendraminiimg,
    caseStudy: 'Implemented a complete digital transformation for a leading educational institution in Kenya, resulting in streamlined operations and enhanced parent-teacher communication.',
    results: [
      'Process automation saved 40+ hours per week',
      'Improved parent satisfaction by 90%',
      'Reduced administrative errors by 95%',
      'Increased student attendance rates by 15%',
      'Enhanced data security and compliance with educational regulations',
      'Scalable architecture that supports future growth and feature expansion',
      'Positive feedback from teachers and staff on usability and efficiency improvements',
      'Recognition as a model for digital transformation in education within the region',
      'Facilitated remote learning capabilities during school closures, ensuring continuity of education',
      'Integrated analytics dashboard provided actionable insights for school administrators to make data-driven decisions',
      'Established a secure and reliable communication channel between parents and teachers, fostering stronger relationships and community engagement',
      'Enabled real-time updates and notifications for parents, improving transparency and trust in the school’s operations',
      'Streamlined the grading process, allowing teachers to focus more on instruction and less on administrative tasks',
      'Provided a centralized platform for all school-related activities, enhancing overall organizational efficiency',
      'Easier school fees payment tracking and management, reducing financial discrepancies and improving cash flow',
      'Facilitated better systems for accounting tasks with automated financial reporting and integration with accounting software',
      'Enhanced data analytics capabilities for tracking student performance trends and identifying areas for improvement',
      'Improved communication and collaboration among staff members through integrated messaging and scheduling features',
      'Scalable infrastructure that can accommodate the growing needs of the school as it expands its student body and services'
    ]
  },
  {
    id: '2',
    slug: 'kutrrh-platform',
    title: 'KUTRRH Management System',
    shortDescription: 'Government healthcare administration and resource management platform.',
    overview: 'A comprehensive platform designed to streamline healthcare operations, patient management, and resource allocation for a major teaching and research hospital.',
    problem: 'The institution faced challenges with patient record management, appointment scheduling, and resource allocation, leading to inefficiencies and delayed service delivery.',
    solution: 'We developed an integrated healthcare management system that centralizes patient data, automates appointment scheduling, and optimizes resource utilization.',
    features: [
      'Integrated patient management system',
      'Automated appointment scheduling',
      'Electronic health records (EHR)',
      'Resource and inventory management',
      'Real-time analytics dashboard'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
    impact: [
      '50% reduction in patient wait times',
      'Improved resource utilization by 65%',
      'Enhanced data accuracy and accessibility'
    ],
    link: 'https://kutrrh.go.ke',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000&h=630',
    caseStudy: 'Transformed healthcare delivery at a major teaching hospital with an integrated management system that improved patient outcomes and operational efficiency.',
    results: [
      'Patient satisfaction increased by 75%',
      'Administrative workload reduced by 60%',
      'Cost savings of 2M+ annually'
    ]
  },
  {
    id: '3',
    slug: 'vendrami-ctc',
    title: 'Vendramini Career & Technical College',
    shortDescription: 'Educational technology platform for vocational training and skill development.',
    overview: 'A modern e-learning platform designed to deliver career and technical education, enabling students to develop in-demand skills through interactive modules and hands-on projects.',
    problem: 'Traditional vocational training methods were outdated, limiting student access to quality education and practical skills needed in the job market.',
    solution: 'We built a dynamic online learning platform that combines theoretical knowledge with practical projects, industry partnerships, and job placement support.',
    features: [
      'Interactive course modules and video lessons',
      'Hands-on project assignments',
      'Student progress tracking and analytics',
      'Industry partnership and job board integration',
      'Certificate generation and credential verification'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    impact: [
      '85% of students obtain employment within 3 months',
      '1000+ skilled professionals trained',
      'Industry partnerships with 50+ companies'
    ],
    link: 'https://vendraminictc.org',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=630',
    caseStudy: 'Revolutionized vocational training delivery by creating an accessible, industry-aligned platform that prepares students for real-world careers.',
    results: [
      'Student employment rate increased to 85%',
      'Industry partnership grew to 50+ companies',
      'Average course completion rate of 92%'
    ]
  },
  {
    id: '4',
    slug: 'ecotenable-website',
    title: 'Ecotenable Corporate Website',
    shortDescription: 'High-conversion corporate web presence for environmental consulting and climatetech services.',
    overview: 'A premium, SEO-optimized corporate website designed to establish environmental authority, showcase services, and develop policies for institutions and governments.',
    problem: "The client's previous website was outdated, slow, and failed to reflect their premium market positioning, resulting in a high bounce rate and low lead generation.",
    solution: 'We designed and developed a modern, lightning-fast website with focus on user experience, clear value propositions, and strategic conversion points.',
    features: [
      'Professional, high-end UI/UX design',
      'Dynamic service showcase and case study portfolio',
      'Integrated contact and lead capture forms',
      'SEO optimized architecture',
      'CMS integration for easy content updates',
      'BlockChain smart contract integration for secure policy development and verification',
      'AI-powered content generation and optimization for enhanced SEO and user engagement'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Solana Web3.js', 'OpenAI API'],
    impact: [
      '300% increase in organic traffic within 3 months',
      'Doubled the conversion rate of site visitors to leads',
      'Significantly improved brand perception and trust',
      'Established the client as a thought leader in the environmental consulting space',
      'Secured high-profile contracts with government and institutional clients',
      'Enhanced content strategy and SEO performance through AI-driven optimization'
    ],
    link: 'https://ecotenable.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000&h=630',
    caseStudy: 'Transformed a B2B environmental consulting firm into an industry thought leader through strategic web design and content optimization.',
    results: [
      'Lead generation increased by 250%',
      'Average deal value increased by 40%',
      'Brand awareness improved significantly'
    ]
  },
  {
    id: '5',
    slug: 'oasis-of-life',
    title: 'Oasis of Life Centres',
    shortDescription: 'Wellness and rehabilitation center management platform.',
    overview: 'A comprehensive platform designed to manage multiple wellness and rehabilitation centers, streamline patient care, and coordinate therapy programs.',
    problem: 'Managing multiple centers with different programs and therapies was uncoordinated, leading to poor patient experiences and operational inefficiencies.',
    solution: 'We developed an integrated platform that centralizes patient management across locations, coordinates therapy schedules, and tracks wellness outcomes.',
    features: [
      'Multi-location center management',
      'Patient intake and health records',
      'Therapy scheduling and tracking',
      'Wellness program customization',
      'Outcome measurement and reporting'
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'Auth0', 'Tailwind CSS'],
    impact: [
      'Improved patient retention by 78%',
      'Therapy scheduling efficiency increased by 80%',
      'Patient satisfaction scores improved to 4.8/5.0'
    ],
    link: 'https://oasisoflifecentres.org',
    image: oasisimg,
    caseStudy: 'Enhanced wellness center operations through an integrated platform that improved patient care coordination and center efficiency.',
    results: [
      'Patient load increased by 120%',
      'Operational efficiency improved by 65%',
      'Patient satisfaction at 95%'
    ]
  }
];