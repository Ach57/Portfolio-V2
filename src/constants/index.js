const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Systems", imgPath: "/images/system.svg" },
  { text: "Workflow", imgPath: "/images/workflow.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Systems", imgPath: "/images/system.svg" },
  { text: "Workflow", imgPath: "/images/workflow.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Github Repositories" },
  { value: 5, suffix: "+", label: "Collaborative Projects" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Problem-Solving Focus" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Passion",
    desc: "Driven by genuine curiosity and a desire to create meaningful solutions. Whether it's learning new technologies, building from scratch, or refining processes.",
  },
  {
    imgPath: "/images/shield.png",
    title: "Reliable",
    desc: "Consistently follow up on the projects and ensuring that its finished.",
  },
  {
    imgPath: "/images/gear.png",
    title: "Hard Working",
    desc: "Puts effort into tackling new challenges and constantly evolving skill set to push projects beyond further",
  },
  {
    imgPath: "/images/adaptability.png",
    title: "Adaptability",
    desc: "Always open to learn new things and refining my workflows.",
  },
  {
    imgPath: "/images/ideas.png",
    title: "Problem Solving",
    desc: "Approaching challenges methodically, breaking down obstacles and finding smart ways around them.",
  },
  {
    imgPath: "/images/terminal.png",
    title: "Technical Proficiency",
    desc: "Fluent in multiple languages and tools, and know how to leverage them effectively to build practical solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python Knowledge",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Node Js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    name: "React Along side with HTML, CSS, JS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Object Oriented Programming",
    modelPath: "/models/csharp_model.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "Relational and Non Relational Data bases",
    modelPath: "/models/database_model.glb",
    scale: 70,
    rotation: [0, Math.PI / 2, Math.PI / 2],
  },
];

const expCards = [
  {
    review:
      "Starting my second internship at Saputo Inc. as part of the Digital Workplace team. Excited to continue growing and contributing on this new journey!",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Digital WorkPlace IT Analyst Intern",
    date: "May 2025 - Present",
    responsibilities: [
      "Identify and develop new automations and processes using Logic Apps, Azure Functions, SharePoint and coding",
      "Deliver exceptional service to our global internal customers, addressing all their workplace collaboration system needs.",
      "Update and maintain automations and workflows for SharePoint / Teams.",
    ],
  },
  {
    review:
      "It was my first internship at Nestle Health Science in Fall 2024 and I'm glad about the new connections I made and the new things I learnt.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "IT Analyst",
    date: "August 2024 - December 2024",
    responsibilities: [
      "Organized large data sets using Python libraries (e.g., Pandas, openpyxl) to create easy-to-understand visualizations.",
      "Built custom tools and automated workflows to streamline data analysis, helping reduce manual tasks and increase efficiency across the team.",
      "Worked closely with teams across various departments, including Taxes, and HR, to ensure seamless collaboration and project success.",
    ],
  },
  {
    review:
      "Born in Tunisia, I moved to Canada at 18 to pursue a life of purpose—focused on turning knowledge and experience into real-world impact",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Bachelor's in Computer Science, Joint Major Data Science",
    date: "September 2022 - September 2026",
    responsibilities: [
      "Developing expertise in machine learning, web development, and algorithm design through hands-on projects and academic research.",
      "On a mission to bridge the gap between theory and impactful solutions — using tech to solve real problems and drive innovation.",
      "Gaining experience in collaborative software projects, research, and cross-functional problem solving within academic and extracurricular teams.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "Linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/achraf-c-0bbb19177/",
  },

  {
    name: "GitHub",
    imgPath: "/images/github.png",
    link: "https://github.com/Ach57",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
