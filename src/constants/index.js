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
  canva,
  express,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  bootstarp,
  python,
  ten,
  cet,
  btech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
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
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "python",
    icon: python,
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
    name: "nextjs",
    icon: next,
   
  },{
    name: "java",
    icon: java,
  },{
    name: "cpp",
    icon: cpp,
  },{
    name: "machine learning",
    icon: machine_learning,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "canva",
    icon: canva,
  },{
    name: "bootstarp",
    icon: bootstarp,
  },
  {
    name: "expressjs",
    icon: express,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/satyajeetchavan",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/satyajeetchavan",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/satyajeetchavan",
  },
];

const achievements = [
  {
    title: "Google Code-In Finalist",
    description: "Selected as a finalist in Google Code-In for outstanding open source contributions.",
    year: 2023,
    link: "https://codein.withgoogle.com/"
  }, {
    title: "Google Code-In Finalist",
    description: "Selected as a finalist in Google Code-In for outstanding open source contributions.",
    year: 2023,
    link: "https://codein.withgoogle.com/"
  }, {
    title: "Google Code-In Finalist",
    description: "Selected as a finalist in Google Code-In for outstanding open source contributions.",
    year: 2023,
    link: "https://codein.withgoogle.com/"
  },
  // Add more achievements here
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    description: "Amazon Web Services Solutions Architect – Associate.",
    year: 2024,
    link: "https://aws.amazon.com/certification/"
  }, {
    title: "AWS Certified Solutions Architect",
    description: "Amazon Web Services Solutions Architect – Associate.",
    year: 2024,
    link: "https://aws.amazon.com/certification/"
  }, {
    title: "AWS Certified Solutions Architect",
    description: "Amazon Web Services Solutions Architect – Associate.",
    year: 2024,
    link: "https://aws.amazon.com/certification/"
  },
  // Add more certifications here
];

const conferences = [
  {
    title: "React Summit",
    description: "Attended React Summit 2024, Amsterdam.",
    year: 2024,
    link: "https://reactsummit.com/"
  },
  {
    title: "React Summit",
    description: "Attended React Summit 2024, Amsterdam.",
    year: 2024,
    link: "https://reactsummit.com/"
  },{
    title: "React Summit",
    description: "Attended React Summit 2024, Amsterdam.",
    year: 2024,
    link: "https://reactsummit.com/"
  },
  // Add more conferences here
];

const education = [
  {
    title: "10th Standard",
    institution: "Your School Name",
    icon: ten, // Use ten logo from assets
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Passed with distinction.",
      "Participated in science exhibition.",
    ],
  },
  {
    title: "CET/JEE",
    institution: "Your Junior College Name",
    icon: cet, // Use cet logo from assets
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Secured first class.",
      "Member of the cultural committee.",
    ],
  },
  {
    title: "B.Tech",
    institution: "Your Engineering College Name",
    icon: btech, // Use btech logo from assets
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Pursuing Computer Science and Engineering.",
      "Active member of coding club.",
    ],
  },
];

export { services, technologies, experiences, education, testimonials, projects, achievements, certifications, conferences };
