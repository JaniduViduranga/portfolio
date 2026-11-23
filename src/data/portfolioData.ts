import profilePic from '../assets/profile-picture.jpg';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  value?: string;
  type?: 'link' | 'email' | 'phone';
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Web Development' | 'Databases & Systems';
  description: string;
  icon: string;
  level?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'All' | 'Web' | 'Mobile';
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
  icon: string;
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
    role: 'Undergraduate Student',
    university: 'Sabaragamuwa University of Sri Lanka',
    degreeProgram: 'Computing and Information Systems',
    tagline: 'Passionate about creating digital solutions that solve real-world problems. Currently pursuing Computing and Information Systems at Sabaragamuwa University of Sri Lanka.',
    profileImage: profilePic,
    bio: [
      "I'm a dedicated undergraduate student pursuing Computing and Information Systems at Sabaragamuwa University of Sri Lanka. My journey in technology began with a curiosity about how digital solutions can solve real-world problems.",
      "With a strong foundation in multiple programming languages and web technologies, I enjoy creating efficient, scalable applications that make a difference. I'm constantly learning and staying updated with the latest industry trends and best practices.",
      "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow developers to create meaningful digital experiences."
    ],
    highlights: [
      { label: 'Current Degree', value: 'BSc in Computing & Information Systems' },
      { label: 'Academic Year', value: '2022 / 2023' },
      { label: 'Primary Focus', value: 'Full-Stack Web Development & Software Engineering' },
      { label: 'Location', value: 'Sri Lanka' }
    ]
  },

  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
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

  skills: [
    {
      name: 'HTML',
      category: 'Web Development',
      description: 'Semantic markup and modern HTML5 features',
      icon: 'fab fa-html5'
    },
    {
      name: 'CSS',
      category: 'Web Development',
      description: 'Responsive design and modern CSS techniques',
      icon: 'fab fa-css3-alt'
    },
    {
      name: 'JavaScript',
      category: 'Languages',
      description: 'Interactive web applications and ES6+ features',
      icon: 'fab fa-js'
    },
    {
      name: 'C Programming',
      category: 'Languages',
      description: 'System programming and algorithmic thinking',
      icon: 'fas fa-code'
    },
    {
      name: 'Java',
      category: 'Languages',
      description: 'Object-oriented programming and application development',
      icon: 'fab fa-java'
    },
    {
      name: 'Python',
      category: 'Languages',
      description: 'Data analysis, web development, and automation',
      icon: 'fab fa-python'
    },
    {
      name: 'Web Development',
      category: 'Web Development',
      description: 'Full-stack web application development',
      icon: 'fas fa-globe'
    },
    {
      name: 'Database Management',
      category: 'Databases & Systems',
      description: 'SQL, database design, and optimization',
      icon: 'fas fa-database'
    }
  ] as SkillItem[],

  projects: [
    {
      id: 'hotel-booking',
      title: 'Hotel Booking Website',
      description:
        'Book hotels in Sri Lanka using this comprehensive booking platform with user-friendly interface and secure payment integration.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      icon: 'fas fa-hotel',
      liveUrl: 'https://hotelBooking.com',
      githubUrl: 'https://github.com/janidu',
      featured: true
    },
    {
      id: 'x-app',
      title: 'X App',
      description:
        'Creating an innovative mobile application with modern features and intuitive user experience design.',
      tags: ['Mobile Dev', 'UI/UX', 'Backend'],
      category: 'Mobile',
      icon: 'fas fa-mobile-alt',
      liveUrl: 'https://app.com',
      githubUrl: 'https://github.com/janidu',
      featured: true
    }
  ] as ProjectItem[],

  education: [
    {
      degree: 'Computing and Information Systems',
      institution: 'Sabaragamuwa University of Sri Lanka',
      year: '2022/2023',
      description:
        'Currently pursuing undergraduate degree with focus on software development, database systems, and information technology management.',
      icon: 'fas fa-graduation-cap'
    }
  ] as EducationItem[]
};
