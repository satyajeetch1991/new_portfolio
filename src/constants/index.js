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
  {
    title: "AIML Developer",
    icon: backend,
  },
];

const technologies = [
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

// UPDATED - use this when rendering technologies:
export const renderTechnologies = () => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
    {technologies.map((tech) => (
      <div
        key={tech.name}
        className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24"
        title={tech.name}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </div>
    ))}
  </div>
);

const experiences = [
  {
    title: "☁️ Open Source & Cloud Contributor",
    company_name: "Google Cloud | GitHub | GSSoC",
    icon: github,
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
      "Participated in the Google Cloud Arcade Program...",
      "Earned the Advanced Milestone Badge...",
      "Gained practical experience in deploying scalable apps...",
      "Contributed to open-source repositories...",
      "Proficient in Git, GitHub workflows...",
      "Participated in GSSoC...",
    ],
  },
  {
    title: "💻 MERN Stack Developer",
    company_name: "Projects / Open Source | 2025 – Present",
    icon: soft,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Jul 2025",
    points: [
      "Built full-stack apps using MERN stack...",
      "Created RESTful APIs...",
      "Designed responsive UIs using Hooks and Redux...",
      "Deployed apps on Vercel, Netlify, Render...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product...",
    name: "Sara Lee",
    designation: "CFO",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success...",
    name: "Chris Brown",
    designation: "COO",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%...",
    name: "Lisa Wang",
    designation: "CTO",
  },
];

const projects = [
  {
    name: "CV",
    description:
      "A print-friendly, minimalist CV web page...",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "docker", color: "green-text-gradient" },
    ],
    image: cv,
    source_code_link: "https://github.com/satyajeetch1991/CV",
  },
  {
    name: "Financial Advisor",
    description:
      "A full-stack app for AI-powered financial advice tailored for rural India...",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "python (fastapi/flask)", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "google-gemini", color: "yellow-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/satyajeetch1991/Financial_Advisior",
  },
  {
    name: "Portfolio",
    description:
      "A modern, interactive portfolio website...",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "threejs", color: "yellow-text-gradient" },
    ],
    image: portfolio,
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
    description: "Contributed to GirlScript Summer of Code open source."
  },
  {
    name: "Google Cloud Advanced Milestone Winner",
    image: gcp_milestone,
    description: "Completed all modules in Google Cloud Arcade Challenge."
  },
  {
    name: "Copyright Holder",
    image: copy_right,
    description: "Recognized for original work and copyright."
  },
];

const certifications = [
  {
    name: "Full Stack Web Development – MERN Stack",
    image: MERN,
    description: "Course on MongoDB, Express, React, Node.js (Unstop)"
  },
  {
    name: "Machine Learning Specialization by Stanford",
    image: machine,
    description: "Andrew Ng’s ML Specialization on Coursera"
  },
  {
    name: "Project Management – Microsoft",
    image: projectmanagement,
    description: "Microsoft & LinkedIn learning path for PM basics"
  },
  {
    name: "AWS Certified Developer – Associate",
    image: aws,
    description: "Prep for AWS Dev certification via LinkedIn"
  },
  {
    name: "AI Bootcamp – C-DAC Pune",
    image: cdacbootcamp,
    description: "Bootcamp on AI under FutureSkills PRIME (MeitY & NASSCOM)"
  },
  {
    name: "Generative AI Virtual Internship – Google Cloud",
    image: virtual_intern,
    description: "10-week virtual internship under AICTE + EduSkills"
  },
];

const conferences = [];

const education = [
  {
    title: "10th Standard",
    institution: "DudhGanga Valley Public School Ispurli - 90.60%",
    icon: ten,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Passed with distinction",
      "Participated in science exhibition",
      "Strong foundation in Maths and Science"
    ],
  },
  {
    title: "CET/JEE",
    institution: "P. B. Patil Highschool – CET:97.62 / JEE:91.01",
    icon: cet,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Secured first class",
      "Qualified engineering entrance exams"
    ],
  },
  {
    title: "B.Tech",
    institution: "VIIT Pune – CGPA: 8.73 / 10",
    icon: btech,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Pursuing CSE with focus on Full Stack & AI/ML",
      "Developed multiple academic/personal projects",
      "Active hackathon participant & club member"
    ],
  },
];

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "cv", title: "CV", url: "https://cv-mu-blush.vercel.app/", external: true },
  { id: "contact", title: "Contact" },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
  achievements,
  certifications,
  conferences,
  navLinks,
  renderTechnologies // 🔥 Don't forget to use this in your component!
};
