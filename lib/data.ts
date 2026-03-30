import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mansiraikarhrr@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Mansi, I am reaching out to you because...',

    oldPortfolio: 'https://mansi-raikar.vercel.app/',

    resumeUrl: '/resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/MansiuR' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/mansiraikar/',
    },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        // {
        //     name: 'TypeScript',
        //     icon: '/logo/ts.png',
        // },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        // {
        //     name: 'Next.js',
        //     icon: '/logo/next.png',
        // },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        // {
        //     name: 'PostgreSQL',
        //     icon: '/logo/postgreSQL.png',
        // },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: ' AI Job Prep Platform',
        slug: 'interview-prep',
        liveUrl: '',
        year: 2025,
        description: `
     Developed a production-ready full-stack Gen AI application on the MERN stack that analyzes resumes
      against job descriptions, identifies skill gaps, generates interview questions, and produces
      ATS-optimized resumes — architected with a layered service–controller–model backend, prompt
      chaining, structured JSON output validation, and secure token management. <br/> <br/>

      Key Features:<br/>
<ul>
  <li>🎨 Modern Design: Designed a layered backend architecture (service–controller–model) with Express.js, handling
    file uploads via Multer and schema validation via Zod.</li>
  <li>🌀 Smooth Animations: Built dynamic React frontend with Context API and custom hooks for managing multi-step AI
output displays (skill gaps, prep plans, interview questions).
</li>
  <li>Integrated Google Gemini API with prompt chaining for structured JSON output across resume
  parsing, skill gap analysis, question generation, and ATS optimization</li>
  <li>Implemented JWT-based authentication with token blacklisting to support secure logout and
refresh token workflows.
</li>
  <li>Developed PDF generation pipeline using Puppeteer for downloadable ATS-optimized
resumes.</li>
</ul><br/>


      Technical Highlights:
<ul>
  <li>Utilized  React Router,Context API, Axios, Node.js, Express.js, MongoDB Atlas,
Mongoose, Multer, Zod, JWT (with blacklisting), Google Gemini API, Puppeteer, CORS Middleware.</li>
  <li>Developed modular and reusable UI components using React and Tailwind CSS</li>
  <li>Optimized image assets and layout structure for better performance</li>
  <li>Maintained clean, scalable code architecture for easy future updates</li>
</ul>

      `,
        role: `
      Full Stack MERN Developer <br/>
Owned the entire Backend & frontend development process:
<ul>
  <li>🎨 Designed and built all UI components using SCSS</li>
  <li>📱 Ensured fully responsive layouts across desktop</li>
  <li>⚡ Optimized performance by minimizing re-renders and asset size</li>
  <li>🚀 Deployed the project seamlessly on Render for live demonstration</li>
</ul>

      `,
        techStack: ['SCSS', 'CSS', 'Node.js', 'Express.js', 'Render'],
        thumbnail: '/projects/thumbnail/interview.png',
        longThumbnail: '/projects/long/interview.png',
        images: [
            '/projects/images/interview-1.png',
            '/projects/images/interview-2.png',
            '/projects/images/interview-3.png',
        ],
    },
    {
        title: 'Food-Reel',
        slug: 'food-reel',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/food-reel.png',
        longThumbnail: '/projects/long/food-reel.png',
        images: [
            '/projects/images/food-reel-1.png',
            '/projects/images/food-reel-3.png',
            '/projects/images/food-reel-5.png',
        ],
        liveUrl: 'https://food-reel-mng5.onrender.com',
        year: 2024,
        description:
            'A modern food discovery platform inspired by Zomato, combining traditional restaurant browsing with an immersive reels-style video feed. The application enables users to explore restaurants through short-form video content while providing restaurant partners with a dedicated dashboard to manage menus and promotional media, delivering a highly engaging and scalable food discovery experience.',
        role: `As a full-stack developer, I:<br/>
        - Architected a dual-role backend system (route–controller–service–model) using Express.js and MongoDB to manage separate workflows for users and restaurant partners.<br/>
        - Built a scalable media upload pipeline using Multer and ImageKit for handling video and image content with cloud CDN delivery.br/>
        - Developed a mobile-first React frontend featuring an infinite scroll-snapping reels feed for an engaging discovery experience.<br/>
        -Implemented secure authentication and authorization using JWT with HTTP-only cookies, bcryptjs hashing, and custom middleware for protected routes.<br/>
        -Designed real-time engagement features (likes, saves, bookmarks) using MongoDB atomic operations for optimized performance.`,
    },
    {
        title: 'AI-Application',
        slug: 'Ai-App',
        techStack: [
            'React.js',
            'Tavily',
            'Tailwind CSS',
            'Express.js',
            'Node.js',
        ],
        thumbnail: '/projects/thumbnail/ai-app.png',
        longThumbnail: '/projects/long/ai-app.png',
        images: [
            '/projects/images/ai-app-1.png',
            '/projects/images/ai-app-2.png',
            '/projects/images/ai-app-3.png',
        ],
        liveUrl: 'https://ai-app-vrh7.onrender.com',
        year: 2023,
        description:
            'An AI-powered search and answer engine inspired by Perplexity, designed to provide real-time, context-aware responses with structured outputs. The platform enables users to ask questions, receive concise AI-generated answers, and explore information interactively, delivering a fast and intelligent alternative to traditional search systems.',
        role: `As the full-stack developer, I:<br/>
        - Built a production-ready MERN stack application enabling real-time AI-powered query handling and response generation.<br/>
        - Integrated Generative AI APIs with prompt engineering techniques to deliver accurate, structured, and context-aware answers.<br/>
        - Designed a scalable backend architecture (service–controller–model) for handling user queries, sessions, and AI responses efficiently.<br/>
        - Developed a dynamic React frontend with smooth UX for conversational search and interactive result exploration.<br/>
        -Implemented secure authentication and API handling, ensuring reliable and safe user interactions.`,
    },
    {
        title: 'Mac-Os',
        slug: 'mac-os',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript'],
        thumbnail: '/projects/thumbnail/mac-os.png',
        longThumbnail: '/projects/long/mac-os.png',
        images: [
            '/projects/images/mac-os-1.png',
            '/projects/images/mac-os-2.png',
            '/projects/images/mac-os-3.png',
        ],
        sourceCode: 'https://github.com/MansiuR/Mac-os',
        liveUrl: 'https://mac-os-peach.vercel.app/',
        year: 2024,
        description:
            'A macOS-inspired interactive system interface built using React, replicating core desktop functionalities such as a dock, window management, and smooth UI interactions. The project focuses on delivering a realistic desktop-like experience within the browser with responsive design and fluid animations.',
        role: `As the Frontend Developer, I:<br/>
        -Designed and developed a macOS-style UI system using React with a focus on component reusability and performance.<br/>
        -Implemented interactive elements such as a dynamic dock, window controls, and app-like navigation behavior.<br/>
        -Created smooth animations and transitions to mimic native macOS user experience.<br/>
        -Ensured responsive design and cross-device compatibility for a seamless browser-based desktop experience.<br/>
        -Structured the frontend architecture for scalability and maintainability using modern React practices.`,
    },
    {
        title: 'Figma',
        slug: 'simple-figma',
        techStack: ['JavaScript', 'HTML', 'Drag & Drop', 'CSS'],
        thumbnail: '/projects/thumbnail/figma-proj.png',
        longThumbnail: '/projects/long/figma-proj.png',
        images: [
            '/projects/images/figma-proj-1.png',
            '/projects/images/figma-proj-2.png',
            '/projects/images/figma-proj-3.png',
        ],
        sourceCode: 'https://github.com/MansiuR/SimpleFigmaProj',
        liveUrl: 'https://simple-figma-proj.vercel.app/',
        year: 2025,
        description: `A browser-based Figma-inspired design editor that enables users to create, edit, and manage visual elements on a canvas. The application supports layering, drag-and-drop positioning, resizing, rotation, and property customization, along with export functionality, delivering a simplified yet powerful design tool experience.`,
        role: `As the Frontend Developer, I:<br/>
        -Built an interactive canvas editor using React, enabling users to create and manipulate shapes and text elements dynamically.<br/>
        -Implemented core design tool features such as drag-and-drop, resizing, rotation, and layer management.<br/>
       -Developed a properties panel for real-time editing of element attributes like size, color, text, and positioning.<br/>
       -Designed a structured state management system to handle complex UI interactions and element hierarchy.<br/>
    -Added export functionalities (JSON/HTML) to allow users to save and reuse their designs.<br/>
    Ensured smooth user experience with responsive layout and precise interaction handling.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'FULL STACK DEVELOPER (AI COHORT TRAINEE)',
        company: 'Sheryians Coding School',
        duration: 'Sep 2025 – Present',
    },
    {
        title: 'JAVA DEVELOPER INTERN',
        company: 'ISTUDIO, Pune',
        duration: 'Aug 2025 – Jan 2026 (6 Months)',
    },
    {
        title: 'JAVA DEVELOPER INTERN',
        company: 'HULK-HIRE, Hyderabad',
        duration: 'Apr 2025 – Jun 2025 (2 Months)',
    },
];
