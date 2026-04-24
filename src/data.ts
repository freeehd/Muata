export interface Project {
  slug: string;
  title: string;
  category: 'Backend' | 'Real-Time' | 'Mobile' | 'Game' | 'Web' | 'AI/Research' | 'Hardware';
  shortDescription: string;
  longDescription: string;
  problem?: string;
  approach?: string;
  techStack: string[];
  features: string[];
  challenges?: Array<{ challenge: string; solution: string }>;
  metrics?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  researchPaperUrl?: string;
  images: {
    thumbnail: string;
    gallery?: string[];
    alt: string;
  };
  featured: boolean;
  order: number;
  dateCompleted: string;
}

export const projects: Project[] = [
  {
    slug: 'chat-room',
    title: 'Real-Time Chat Room Application',
    category: 'Real-Time',
    shortDescription: 'WebSocket-powered messaging with Flask-SocketIO for real-time group communication.',
    longDescription: `A web-based chat platform enabling users to create and join rooms for real-time messaging. Built with Flask-SocketIO for bidirectional WebSocket communication, the application manages concurrent user sessions, room lifecycle, and instant message broadcasting.

The system demonstrates real-time architecture patterns, session management, and scalable event-driven design—skills directly applicable to collaborative tools, live dashboards, and IoT command systems.`,
    problem: 'Managing real-time synchronization between multiple users in a scalable way without heavy overhead.',
    approach: 'Leveraged Flask-SocketIO for its robust event-handling and support for horizontal scaling via Redis if needed.',
    techStack: ['Python', 'Flask', 'Flask-SocketIO', 'JavaScript', 'HTML/CSS'],
    features: [
      'Create/join chat rooms via unique codes',
      'Real-time message broadcasting to all participants',
      'Session management: track users per room',
      'Real-time notifications: user join/leave events',
      'Auto-close empty rooms to conserve resources'
    ],
    challenges: [
      {
        challenge: 'Managing concurrent user connections',
        solution: 'Implemented room-based session tracking with automatic cleanup'
      },
      {
        challenge: 'Ensuring message delivery reliability',
        solution: 'Added acknowledgment callbacks and reconnection logic'
      }
    ],
    metrics: ['Tested with 50+ concurrent users', 'Sub-100ms message latency'],
    githubUrl: 'https://github.com/siddig395/chat_room',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      alt: 'Chat Room interface showing real-time messaging'
    },
    featured: true,
    order: 1,
    dateCompleted: '2024'
  },
  {
    slug: 'ai-uric-acid-detection',
    title: 'AI-Powered Uric Acid Detection System',
    category: 'AI/Research',
    shortDescription: 'Machine learning model for non-invasive uric acid detection using bio-sensor data.',
    longDescription: `Master's research project developing an AI-powered electronic machine for detecting uric acid levels in blood using bio-sensor data and machine learning algorithms. The system aims to enable early disease prevention through accessible, non-invasive diagnostics.

This project combines signal processing, feature engineering, and supervised learning to classify uric acid levels from sensor readings. It demonstrates the intersection of medical electronics, AI, and hardware-software integration.`,
    problem: 'Invasive blood tests are painful and expensive for regular uric acid monitoring.',
    approach: 'Using non-invasive bio-sensors paired with a Random Forest classifier to predict levels from physical indicators.',
    techStack: ['Python', 'Machine Learning', 'Bio-sensors', 'Signal Processing', 'Pandas', 'Scikit-learn'],
    features: [
      'Bio-sensor data preprocessing and feature extraction',
      'Supervised learning models for classification',
      'Cross-validation and performance evaluation',
      'Hardware-software integration for real-time inference',
      'Ethical considerations in medical AI deployment'
    ],
    metrics: ['Research in progress', 'Published at IEEE ICSIMA 2025'],
    githubUrl: 'https://github.com/siddig395/ai-uric-acid-research',
    researchPaperUrl: 'https://ieeexplore.ieee.org/document/icsima2025',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      alt: 'Architecture diagram of AI uric acid detection system'
    },
    featured: true,
    order: 2,
    dateCompleted: 'In Progress'
  },
  {
    slug: 'fitness-app',
    title: 'FitnessApp — Workout Tracker',
    category: 'Mobile',
    shortDescription: 'Flutter mobile app for tracking workouts, health metrics, and fitness progress.',
    longDescription: `A cross-platform mobile application built with Flutter to help users track fitness progress, manage workouts, and monitor health metrics. The app offers an intuitive interface for logging activities, setting goals, and visualizing progress over time.

Firebase integration enables real-time data sync across devices, user authentication, and cloud storage. The project demonstrates mobile architecture patterns, state management, and cross-platform development best practices.`,
    problem: 'Fragmented fitness tracking across multiple apps makes it hard to see holistic progress.',
    approach: 'A single hub for all health data using Flutter for cross-platform consistency and Firebase for instant sync.',
    techStack: ['Dart', 'Flutter', 'Firebase', 'Git'],
    features: [
      'Log workouts and daily activities',
      'Set and track fitness goals',
      'Real-time data sync across devices',
      'Progress visualization with charts',
      'Push notifications for routine maintenance',
      'User authentication and personalized profiles'
    ],
    challenges: [
      {
        challenge: 'Real-time sync across platforms',
        solution: 'Firebase Firestore with optimized queries and offline persistence'
      },
      {
        challenge: 'Cross-platform performance consistency',
        solution: 'Flutter\'s native compilation + performance profiling'
      }
    ],
    metrics: ['Supports 15+ workout types', 'Handles 1K+ daily active users'],
    githubUrl: 'https://github.com/siddig395/FitnessApp--flutter-',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      alt: 'FitnessApp interface showing workout logging'
    },
    featured: true,
    order: 3,
    dateCompleted: '2024'
  },
  {
    slug: 'personal-finance-app',
    title: 'Personal Finance System',
    category: 'Backend',
    shortDescription: 'Python CLI tool for tracking income/expenses with data visualization.',
    longDescription: `A Python-based command-line application for personal finance tracking. Users can add transactions with date, amount, category, and description; view summaries within custom date ranges; and generate visual plots of financial trends.

The project demonstrates data handling with pandas, visualization with matplotlib, and CLI design principles. It serves as a foundation for more complex financial analytics or web API integration.`,
    techStack: ['Python', 'Pandas', 'Matplotlib', 'CSV'],
    features: [
      'Add transactions with date, amount, category, description',
      'View summaries within custom date ranges',
      'Auto-calculate: total income, expenses, net balance',
      'Generate visual plots of financial trends over time',
      'Command-line interface with intuitive prompts'
    ],
    metrics: ['Processes 10K+ transactions in < 2s', 'CSV export functionality'],
    githubUrl: 'https://github.com/siddig395/presonal_fincance_app',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
      alt: 'Finance app CLI and visualization'
    },
    featured: false,
    order: 4,
    dateCompleted: '2024'
  },
  {
    slug: 'iron-haven',
    title: 'Iron Haven Gym Website',
    category: 'Web',
    shortDescription: 'Responsive, visually engaging website for a modern gym.',
    longDescription: `A fully responsive website designed to promote Iron Haven gym and fitness center. The site showcases services, membership plans, client reviews, and interactive elements to drive conversions.

Built with mobile-first CSS, modern animations, and performance optimization, the project demonstrates frontend development skills, UX design principles, and cross-browser compatibility.`,
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'AOS', 'Typed.js'],
    features: [
      'Fully responsive design (mobile-first approach)',
      'Interactive animations on scroll (AOS library)',
      'Dynamic typing text effects (Typed.js)',
      'Service showcase + pricing + testimonials sections',
      'Cross-browser compatibility testing'
    ],
    metrics: ['Lighthouse performance score: 92', 'Mobile load time: 1.8s'],
    githubUrl: 'https://github.com/siddig395/IronHaven',
    liveDemoUrl: 'https://mohammedmuatasim.framer.website/iron-haven',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      alt: 'Iron Haven website homepage'
    },
    featured: false,
    order: 5,
    dateCompleted: '2024'
  },
  {
    slug: 'voltage-regulator',
    title: 'Automatic Voltage Regulator',
    category: 'Hardware',
    shortDescription: 'Field-deployed voltage regulation system enhancing grid stability in Sudan.',
    longDescription: `Developed and deployed an Automatic Voltage Regulator for Sudan Electricity Holding Company, enhancing the stability of electricity transportation across the grid. This hardware-software integration project involved control system design, field testing, and collaboration with infrastructure teams.`,
    problem: 'Frequent voltage fluctuations causing damage to industrial equipment in remote stations.',
    approach: 'Custom embedded control system with real-time feedback loops to stabilize output.',
    techStack: ['Control Systems', 'Electrical Engineering', 'SCADA', 'Field Deployment'],
    features: [
      'Voltage stabilization algorithm implementation',
      'Integration with existing grid infrastructure',
      'Field testing and calibration across stations',
      'Documentation for maintenance and scaling',
      'Cross-functional engineering collaboration'
    ],
    metrics: ['Deployed at 6 stations across Sudan', 'Improved stability metrics by 15%'],
    githubUrl: 'https://github.com/siddig395/voltage-regulator-docs',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
      alt: 'Voltage regulator system diagram'
    },
    featured: true,
    order: 6,
    dateCompleted: '2021'
  },
  {
    slug: 'aim-trainer',
    title: 'Aim Trainer Game',
    category: 'Game',
    shortDescription: 'Pygame-based reflex trainer for improving aiming skills.',
    longDescription: `A Python/Pygame game designed to improve aiming skills and reaction time for FPS gamers. Targets appear at random positions and grow over time; players must click before they disappear. Lives are lost on missed targets, with score tracking for progression.`,
    techStack: ['Python', 'Pygame'],
    features: [
      'Randomly positioned targets',
      'Lives and score tracking system',
      'Progressive difficulty scaling',
      'Real-time event handling'
    ],
    metrics: ['Maintains 60 FPS', 'Sub-16ms frame time'],
    githubUrl: 'https://github.com/siddig395/aim_trainer',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
      alt: 'Aim Trainer gameplay'
    },
    featured: false,
    order: 7,
    dateCompleted: '2024'
  },
  {
    slug: 'green-soldier',
    title: 'Green Soldier — 2D Shooter',
    category: 'Game',
    shortDescription: '2D shooter game with custom level editor.',
    longDescription: `A comprehensive Pygame project featuring both a 2D shooter game and a visual level editor. Players control a soldier fighting through levels with movement, shooting, jumping, and grenade mechanics. The integrated level editor allows users to place objects visually.`,
    techStack: ['Python', 'Pygame'],
    features: [
      'Comprehensive movement & combat mechanics',
      'Enemy AI and combat system',
      'Integrated visual level editor',
      'Save/load custom levels',
      'Adjustable difficulty parameters'
    ],
    challenges: [
      {
        challenge: 'Gameplay balance and difficulty tuning',
        solution: 'Iterative playtesting with adjustable parameters'
      },
      {
        challenge: 'Intuitive editor UI',
        solution: 'User feedback integration and simplified controls'
      }
    ],
    metrics: ['Supports 20+ custom levels', 'Level creation time reduced by 70%'],
    githubUrl: 'https://github.com/siddig395/green-solider',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
      alt: 'Green Soldier gameplay'
    },
    featured: false,
    order: 8,
    dateCompleted: '2024'
  }
];

export interface Publication {
  title: string;
  venue: string;
  year: number;
  category: 'Medical AI' | 'Computer Vision' | 'Network Systems' | 'IoT';
  abstract: string;
  pdfUrl?: string;
  citation?: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: 'Machine Learning-Based Uric Acid Detection Using Bio-sensor Data for Disease Prevention',
    venue: 'IEEE 11th International Conference on Smart Instrumentation, Measurement and Applications (ICSIMA)',
    year: 2025,
    category: 'Medical AI',
    abstract: 'This research presents a machine learning approach for non-invasive detection of uric acid levels in blood using bio-sensor data. The system aims to enable early prevention of internal diseases through accessible, AI-driven diagnostics.',
    citation: 'Siddig, M. M. (2025). Machine Learning-Based Uric Acid Detection Using Bio-sensor Data for Disease Prevention. IEEE ICSIMA 2025.'
  },
  {
    title: 'AI-Driven Computer Vision for Defect Detection',
    venue: 'Computer Vision / Industrial AI Publication',
    year: 2025,
    category: 'Computer Vision',
    abstract: 'An exploration of computer vision techniques for automated defect detection in industrial settings, leveraging deep learning models for accuracy and efficiency.',
    citation: 'Siddig, M. M. (2025). AI-Driven Computer Vision for Defect Detection.'
  },
  {
    title: 'Communication Network Systems Colloquium',
    venue: 'CNETS 2023',
    year: 2023,
    category: 'Network Systems',
    abstract: 'Contributions to communication network systems research, focusing on infrastructure optimization and reliability.',
    citation: 'Siddig, M. M. (2023). Communication Network Systems Colloquium. CNETS 2023.'
  }
];
