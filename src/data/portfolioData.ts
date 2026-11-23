import profilePic from '../assets/profile-picture.jpg';
import cakeOfParadiseImg from '../assets/Cake-of-paradise.png';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  value?: string;
  type?: 'link' | 'email' | 'phone';
}

export interface SkillItem {
  name: string;
  color: string;
  iconKey: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconKey: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'Web Development' | 'Network' | 'Data Analysis' | 'UI/UX Design';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  icon: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface AcademicHighlight {
  degree: string;
  institution: string;
  year: string;
  status: string;
  details: string;
  focusAreas: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

export const portfolioData = {
  personalInfo: {
    name: 'Janidu Viduranga',
    firstName: 'Janidu',
    headline: "Hi, I'm",
    role: 'Undergraduate Student · Software Developer',
    university: 'Sabaragamuwa University of Sri Lanka',
    degreeProgram: 'BSc (Hons) in Computing and Information Systems',
    tagline:
      'Passionate about building scalable digital solutions, reliable network systems, and intuitive user experiences. Currently pursuing Computing & Information Systems at Sabaragamuwa University of Sri Lanka.',
    profileImage: profilePic,
    bio: [
      "I am a dedicated undergraduate student pursuing a BSc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka. My journey in technology began with a strong curiosity for architecting digital systems that solve practical, real-world problems.",
      "With hands-on experience spanning modern web frameworks, systems programming, and database engineering, I thrive on turning complex requirements into clean, performant, and scalable applications. I'm continually learning and applying emerging best practices in software architecture.",
      "Outside of core development, I actively explore computer networking, data analytics, and user interface design to build well-rounded, user-centric software solutions."
    ],
    academic: {
      degree: 'BSc (Hons) in Computing and Information Systems',
      institution: 'Sabaragamuwa University of Sri Lanka',
      year: '2022 / 2023 - Present',
      status: 'Undergraduate Student',
      details:
        'Rigorous curriculum focusing on software engineering, object-oriented design, database architecture, network infrastructure, and enterprise system administration.',
      focusAreas: [
        'Full-Stack Software Engineering',
        'Database Architecture & Optimization',
        'Computer Networks & Protocols',
        'Data Structures & Algorithms'
      ]
    } as AcademicHighlight,
    highlights: [
      { label: 'Current Degree', value: 'BSc (Hons) Computing & Information Systems' },
      { label: 'Academic Year', value: '2022 / 2023 Cohort' },
      { label: 'Primary Specialization', value: 'Full-Stack Software & Systems Engineering' },
      { label: 'Status', value: 'Available for Internships & Collaborations' }
    ]
  },

  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ] as NavItem[],

  socialLinks: {
    linkedin: {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/janidu',
      icon: 'fab fa-linkedin-in',
      type: 'link'
    },
    github: {
      name: 'GitHub',
      url: 'https://github.com/janidu',
      icon: 'fab fa-github',
      type: 'link'
    },
    email: {
      name: 'Email',
      value: 'janiduviduranga78@gmail.com',
      url: 'mailto:janiduviduranga78@gmail.com',
      icon: 'fas fa-envelope',
      type: 'email'
    },
    phone: {
      name: 'Phone',
      value: '+94 766248015',
      url: 'tel:+94766248015',
      icon: 'fas fa-phone',
      type: 'phone'
    }
  },

  // 6 Categorized technical skill cards with authentic brand colors
  skillCategories: [
    {
      id: 'languages',
      title: 'Programming Languages',
      iconKey: 'code',
      description: 'Core languages for algorithmic logic, system programming, and scripts.',
      skills: [
        { name: 'JavaScript', color: '#F7DF1E', iconKey: 'javascript' },
        { name: 'TypeScript', color: '#3178C6', iconKey: 'typescript' },
        { name: 'Python', color: '#3776AB', iconKey: 'python' },
        { name: 'Java', color: '#ED8B00', iconKey: 'java' },
        { name: 'C', color: '#A8B9CC', iconKey: 'c' },
        { name: 'HTML5', color: '#E34F26', iconKey: 'html5' },
        { name: 'CSS3', color: '#1572B6', iconKey: 'css3' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      iconKey: 'frontend',
      description: 'Modern component frameworks, styling systems, and responsive interfaces.',
      skills: [
        { name: 'React.js', color: '#61DAFB', iconKey: 'react' },
        { name: 'Tailwind CSS', color: '#06B6D4', iconKey: 'tailwind' },
        { name: 'Responsive Web Design', color: '#38BDF8', iconKey: 'responsive' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      iconKey: 'backend',
      description: 'Server environments, microservices, REST APIs, and authentication.',
      skills: [
        { name: 'Node.js', color: '#339933', iconKey: 'node' },
        { name: 'Express.js', color: '#FFFFFF', iconKey: 'express' },
        { name: 'Flask', color: '#FFFFFF', iconKey: 'flask' },
        { name: 'REST APIs', color: '#2563EB', iconKey: 'restapi' },
        { name: 'JWT Authentication', color: '#D63AFF', iconKey: 'jwt' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      iconKey: 'database',
      description: 'Relational data modeling, NoSQL stores, and cloud backends.',
      skills: [
        { name: 'MySQL', color: '#4479A1', iconKey: 'mysql' },
        { name: 'MongoDB', color: '#47A248', iconKey: 'mongodb' },
        { name: 'Firebase', color: '#FFCA28', iconKey: 'firebase' },
        { name: 'PostgreSQL', color: '#4169E1', iconKey: 'postgresql' }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX & Design',
      iconKey: 'design',
      description: 'Design thinking, interactive wireframing, and component prototypes.',
      skills: [
        { name: 'Figma', color: '#F24E1E', iconKey: 'figma' },
        { name: 'Wireframing', color: '#A855F7', iconKey: 'wireframe' },
        { name: 'Prototyping', color: '#EC4899', iconKey: 'prototype' }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      iconKey: 'tools',
      description: 'Version control, developer IDEs, API testers, and mobile SDKs.',
      skills: [
        { name: 'Git', color: '#F05032', iconKey: 'git' },
        { name: 'GitHub', color: '#FFFFFF', iconKey: 'github' },
        { name: 'Postman', color: '#FF6C37', iconKey: 'postman' },
        { name: 'VS Code', color: '#007ACC', iconKey: 'vscode' },
        { name: 'Android Studio', color: '#3DDC84', iconKey: 'androidstudio' },
        { name: 'IntelliJ IDEA', color: '#FE315D', iconKey: 'intellij' }
      ]
    }
  ] as SkillCategory[],

  // Categorized project showcase with image support
  projects: [
    {
      id: 'cake-of-paradise',
      title: 'Cake of Paradise',
      description:
        'Full-stack commercial e-commerce platform for an artisanal cake business featuring product customization, an isolated Stripe payment service, Cloudinary media management, JWT authentication, and an operational admin dashboard.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      category: 'Web Development',
      icon: 'fas fa-birthday-cake',
      image: cakeOfParadiseImg,
      liveUrl: 'https://cake-of-paradise.vercel.app',
      githubUrl: 'https://github.com/JaniduViduranga/Cake-of-Paradise',
      featured: true,
    },
    {
      id: 'secure-exam-identity-capstone',
      title: 'Secure Identity Verification for Online Exams',
      description:
        'IS4110 Capstone Project preventing remote exam fraud through real-time AI facial recognition, multi-step student authentication, tamper-proof Polygon blockchain verification hashing, and an evaluator monitoring dashboard.',
      tags: ['React.js', 'Python', 'Flask', 'Node.js', 'Firebase', 'Polygon Blockchain'],
      category: 'Web Development',
      icon: 'fas fa-shield-alt',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: 'https://github.com/janidu',
      featured: true,
    },
    {
      id: 'sabra-sports-management',
      title: 'Sabra Sports & Tournament Hub',
      description:
        'University athletics and tournament platform built for Sabaragamuwa University sports teams, streamlining match schedules, team rosters, event announcements, and Inter-University Games coordination.',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      category: 'Web Development',
      icon: 'fas fa-trophy',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: 'https://github.com/janidu',
      featured: true,
    },
    {
      id: 'first-react-edu-platform',
      title: 'Interactive Learning Web App',
      description:
        'Mobile-responsive educational web application built with React.js, featuring structured study modules, interactive UI components, and fast client-side navigation deployed on Vercel.',
      tags: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
      category: 'Web Development',
      icon: 'fas fa-graduation-cap',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: 'https://github.com/janidu',
      featured: false,
    },
    {
      id: 'developer-portfolio',
      title: 'Personal Developer Portfolio',
      description:
        'Single-page interactive developer portfolio engineered with Vite, React, and TypeScript, featuring a centralized CSS token system, dynamic ambient lighting, categorized skills, and filterable project showcases.',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      icon: 'fas fa-laptop-code',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: 'https://github.com/janidu',
      featured: false,
    },
    {
      id: 'macroeconomic-bi-dashboard',
      title: 'Macroeconomic Intelligence Dashboard',
      description:
        'Interactive Power BI analytics dashboard analyzing inflation trends, interest rates, and USD/LKR exchange rate correlations to support data-driven financial decision-making.',
      tags: ['Power BI', 'Data Modeling', 'DAX', 'Data Visualization'],
      category: 'Data Analysis',
      icon: 'fas fa-chart-line',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: 'https://github.com/janidu',
      featured: false,
    },
    {
      id: 'tasksphere-ar-uiux',
      title: 'TaskSphere AR — 2050 Concept App',
      description:
        '12-screen mobile UI/UX prototype designed in Figma exploring localized day-activity micro-jobs and user well-being workflows for a 2050 future-of-work design competition.',
      tags: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
      category: 'UI/UX Design',
      icon: 'fas fa-layer-group',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: '',
      featured: false,
    }
  ] as ProjectItem[]
};
