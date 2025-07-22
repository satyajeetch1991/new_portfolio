import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  cpp,
  machine_learning,
  machine,
  canva,
  express,
  meta,
  github,
  soft,
  shopify,
  carrent,
  jobit,
  tripguide,
  bootstarp,
  python,
  ten,
  cet,
  btech,
  MERN,
  virtual_intern,
  projectmanagement,
  cdacbootcamp,
  aws,
  cv,
  portfolio,
  INC_Hack,
  GSSoc,
  gcp_milestone,
  copy_right
} from "../assets";

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  // {
  //   name: "HTML",
  //   icon: html,
  // },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "C++",
  //   icon: cpp,
  // },
  {
    name: "Machine Learning",
    icon: machine_learning,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Bootstrap",
    icon: bootstarp,
  },
  {
    name: "Express.js",
    icon: express,
  }
];

const experiences = [
  {
    title: "☁ Open Source & Cloud Contributor",
    company_name: "Google Cloud | GitHub | GSSoC",
    icon: github,
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
      "Participated in the Google Cloud Arcade Program, a gamified learning platform by Google Cloud.",
      "Earned the Advanced Milestone Badge by completing hands-on labs in Compute Engine, Cloud Functions, BigQuery, and Kubernetes Engine.",
      "Gained practical experience in deploying scalable cloud-based applications and understanding GCP architecture.",
      "Contributed to multiple open-source repositories by fixing bugs, implementing features, and enhancing documentation.",
      "Proficient in Git, GitHub workflows (pull requests, branching, issue tracking), and collaborative development.",
      "Participated in GSSoC, actively engaging with the open-source community while following best coding practices."
    ],
  },
  {
    title: "💻 MERN Stack Developer",
    company_name: "Projects / Open Source | 2025 – Present",
    icon: soft,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Jul 2025",
    points: [
      "Built full-stack web apps using MongoDB, Express.js, React.js, and Node.js.",
      "Created RESTful APIs, integrated frontend with backend.",
      "Designed responsive UIs using React Hooks and Redux.",
      "Deployed apps on Vercel, Netlify, and Render, with backend on Cyclic.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
   {
    name: "CV",
    description:
      "A print-friendly, minimalist CV web page designed for easy sharing and professional presentation. Built with TypeScript for strong typing and maintainability, this project emphasizes clean design and ease of customization.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
    ],
    image: cv, // Replace with your image import or path
    source_code_link: "https://github.com/satyajeetch1991/CV",
  },
  {
    name: "Financial Advisor",
    description:
      "A full-stack web application providing AI-powered financial advice, tailored for rural India. The platform lets users input their personal and business details to receive personalized investment, savings, and budgeting recommendations, with support for multiple languages and business profiles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python (fastapi/flask)",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "google-gemini",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide, // replace with your actual image import or path
    source_code_link: "https://github.com/satyajeetch1991/Financial_Advisior",
  },
  {
    name: "Portfolio",
    description:
      "A modern, interactive portfolio website to showcase projects, experience, and skills. Built with React.js and Tailwind CSS, it features animated sections, a project gallery, and responsive design. Integrates 3D/animation libraries and supports a wide range of technologies for project showcasing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "yellow-text-gradient",
      },
    ],
    image: portfolio, // replace with your actual image import or path
    source_code_link: "https://github.com/satyajeetch1991/portfolio",
  },
];

const achievements = [
  {
    name: "INC Hackathon Winner",
    image: INC_Hack,
    description: "Won 1st place in a national coding hackathon."
  },
  {
    name: "GSSoC Contributor",
    image: GSSoc,
    description: "Contributed to major open source projects in GirlScript Summer of Code."
  },
  {
  name: "Google Cloud Advanced Milestone Winner",
  image: gcp_milestone, // make sure to import your image file as gcp_milestone
  description: "Achieved the Advanced Milestone in Google Cloud Arcade December 2024 challenge by completing all trivia weeks and technical modules like Advanced Conversation Design and Agent Summarization. Received exclusive swag including a hoodie, backpack, and mug.",
}
,
  {
    name: "Copyright Holder",
    image: copy_right,
    description: "Recognized for original work and copyright achievement."
  },
];

const certifications = [
  {
    name: "Full Stack Web Development – MERN Stack",
    image: MERN,
    description: "Completed MERN stack full stack development course from Unstop, covering MongoDB, Express, React, and Node.js."
  },
 
  {
    name: "Machine Learning Specialization by Stanford University",
    image: machine,
    description: "Completed the Machine Learning Specialization on Coursera by Andrew Ng, covering supervised, unsupervised learning, and deep learning fundamentals."
  },
  {
    name: "Career Essentials in Project Management",
    image: projectmanagement,
    description: "Completed Microsoft and LinkedIn’s Project Management learning path, covering the fundamentals of managing teams and projects."
  },
  {
    name: "AWS Certified Developer – Associate (DVA-C02) Cert Prep",
    image: aws,
    description: "Completed AWS Developer Associate certification prep on LinkedIn Learning, covering cloud application development and core AWS services."
  },
  {
    name: "AI Bootcamp – C-DAC Pune",
    image: cdacbootcamp,
    description: "Successfully completed a Bootcamp on Artificial Intelligence conducted by C-DAC Pune in association with Vishwakarma Institute of Information Technology, Pune from September 23 to September 27, 2024. This intensive program, organized under the FutureSkills PRIME initiative by MeitY & NASSCOM, covered essential AI concepts, real-world applications, and skill-building for AI readiness."
  },
   {
    name: "Generative AI Virtual Internship – Google Cloud",
    image: virtual_intern,
    description: "Completed a 10-week virtual internship on Generative AI by Google Cloud under AICTE and EduSkills, covering real-world GenAI applications."
  },
];

const conferences = [];

const education = [
  {
    title: "10th Standard",
    institution: "DudhGanga Valley Public School Ispurli - 90.60%",
    icon: ten, // Use ten logo from assets
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Passed with distinction.",
      "Participated and presented a project in the school-level Science Exhibition.",
      "Built a strong academic foundation in Mathematics and Science.",
    ],
  },
  {
    title: "CET/JEE",
    institution: "P. B. Patil Highschool And Junior College Mudal And Science Academy - CET/JEE:97.62/91.01",
    icon: cet, // Use cet logo from assets
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Secured first class.",
      "Qualified CET/JEE entrance exams for engineering admission.",
    ],
  },
  {
    title: "B.Tech",
    institution: "Vishwakarma Institute of Information Technology Pune - CGPA: 8.73 / 10 ",
    
    icon: btech, // Use btech logo from assets
    iconBg: "#383E56",
    date: "2021 - Present",
     
    points: [
      "Pursuing Computer Science and Engineering with a focus on Full Stack Development and AI/ML.",
      "Developed multiple academic and personal projects using technologies like React, Node.js, and Python.",
      "Active member of the coding club; participated in inter-college hackathons.",
    ],
  },
];


const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "cv",
    title: "CV",
    url: "https://cv-mu-blush.vercel.app/",
    external: true
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export { services, technologies, experiences, education, testimonials, projects, achievements, certifications, conferences, navLinks };