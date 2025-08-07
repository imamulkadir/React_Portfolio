import wsdLogo from "./assets/images/wsd.png";
import apurbaLogo from "./assets/images/apurba.png";
import impitLogo from "./assets/images/impit.png";
import ubuntuLogo from "./assets/images/ubuntu.png";
import windowsLogo from "./assets/images/windows.png";
import dreamweaverLogo from "./assets/images/dreamweaver.png";
import microsoftOfficeLogo from "./assets/images/microsoftoffice.png";
import androidStudioLogo from "./assets/images/androidstudio.png";
import phpMyAdminLogo from "./assets/images/phpmyadmin.png";
import bootstrapLogo from "./assets/images/bootstrap.png";
import cssLogo from "./assets/images/css.png";
import githubLogo from "./assets/images/github.png";
import htmlLogo from "./assets/images/html.png";
import javascriptLogo from "./assets/images/javascript.png";
import flaskLogo from "./assets/images/flask.png";
import mysqlLogo from "./assets/images/mysql.png";
import phpLogo from "./assets/images/php.png";
import vscodeLogo from "./assets/images/vscode.png";
import reactLogo from "./assets/images/react.png";
import gitLogo from "./assets/images/git.png";
import jqueryLogo from "./assets/images/jquery.png";
import wordpressLogo from "./assets/images/wordpress.png";
import jsxLogo from "./assets/images/jsx.png";
import tsxLogo from "./assets/images/tsx.png";
import tailwindLogo from "./assets/images/tailwind.png";
import firebaseLogo from "./assets/images/firebase.png";
import mongodbLogo from "./assets/images/mongodb.png";
import nodejsLogo from "./assets/images/nodejs.png";

const header = [
  {
    name: "Imamul Kadir",
    email: "imamulkadiroyan@gmail.com",
    LinkedIN: "https://linkedin.com/in/imamulkadir",
    GitHub: "https://github.com/imamulkadir",
    contact: "+8801717836672",
  },
];

const experience = [
  {
    company: "Wall Street Docs - WSD",
    role: "Filing Lead",
    duration: "June 1st, 2024 to Present",
    location: "Dhaka, Bangladesh",
    logo: wsdLogo,
    responsibilities: [
      "Managing and maintaining the core workload with precise and pertinent information.",
      "Developed an automation tool to simplify the filing process.",
      "Created a PWA to analyze client data and provide insights.",
      "Assign tasks fairly to optimize team productivity.",
      "Review and submit files to the SEC on time, meeting requirements.",
      "Train new team members, assign tasks, and monitor their work.",
      "Help team members solve issues for a smooth filing process.",
    ],
  },
  {
    company: "Apurba Technologies Ltd.",
    role: "Assistant Team Lead",
    duration: "September 15th, 2023 to May 31st, 2024",
    logo: apurbaLogo,
    responsibilities: [
      "Oversaw the management of critical workloads with accuracy.",
      "Coordinated task assignments to ensure fair distribution.",
      "Reviewed and submitted files to the SEC on time and accurately.",
      "Trained new team members, organized tasks, and tracked efficiency.",
      "Supported team members and resolved issues for smooth operations.",
    ],
  },
  {
    company: "Apurba Technologies Ltd.",
    role: "Filing Specialist",
    duration: "March 2021 to September 15th, 2023",
    logo: apurbaLogo,
    responsibilities: [
      "Converted Word documents into web pages for U.S. banks.",
      "Reviewed and edited files for consistency with originals.",
      "Ensured accuracy and compliance during file reviews.",
      "Converted and edited files for SEC submissions.",
      "Submitted files to meet regulatory requirements.",
    ],
  },
  {
    company: "IMPIT Ltd.",
    role: "Analyst - Business Development",
    duration: "November 2020 to February 2021",
    logo: impitLogo,
    responsibilities: [
      "Analyzed data to generate insights and provide data-driven recommendations.",
      "Communicated daily with U.S. clients to meet expectations.",
      "Handled property preservation tasks for bank-mortgaged properties.",
      "Ensured timely maintenance and reporting for client-managed properties.",
      "Collaborated with teams to streamline processes for property preservation.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science",
    group: "Computer Science and Engineering",
    institution: "Daffodil International University",
    year: "2020",
    GPA: "3.70",
  },
  {
    degree: "Higher Secondary Certificate",
    group: "Science",
    institution: "Notre Dame College",
    year: "2014",
    GPA: "5.00",
  },
  {
    degree: "Secondary School Certificate",
    group: "Science",
    institution: "Kishoreganj Govt. Boys' High School",
    year: "2012",
    GPA: "5.00",
  },
];

const publications = [
  {
    title: "Bangla Music Genre Classification Using Neural Network",
    authors:
      "Md. Afif Al Mamun, Imamul Kadir, Abdullah Al Azmi, AKM Shahariar Azad Rabby",
    conference: "SMART 2019, Moradabad, India (IEEE)",
    DOI: "10.1109/SMART46866.2019.9117400",
  },
];

const skills = [
  { name: "NodeJS", logo: nodejsLogo },
  { name: "ReactJS", logo: reactLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "JSX", logo: jsxLogo },
  { name: "TypeScript", logo: tsxLogo },
  { name: "jQuery", logo: jqueryLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "PHP", logo: phpLogo },
  { name: "Flask", logo: flaskLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "phpMyAdmin", logo: phpMyAdminLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Dreamweaver", logo: dreamweaverLogo },
  { name: "Android Studio", logo: androidStudioLogo },
  { name: "Office 365", logo: microsoftOfficeLogo },
  { name: "Ubuntu", logo: ubuntuLogo },
  { name: "Windows", logo: windowsLogo },
];

const projects = [
  {
    title: "React CRUD with Firebase",
    repo: "https://github.com/imamulkadir/React_crudFirebase",
    link: "", // Add your live URL if deployed
    description:
      "A CRUD application built using React and Firebase, allowing real-time create, read, update, and delete operations.",
    techStack: ["React", "Firebase", "Firestore", "Bootstrap"],
  },
  {
    title: "FoodyZone",
    repo: "https://github.com/imamulkadir/React_FoodyZone",
    link: "", // Add your live URL if deployed
    description:
      "A modern food ordering UI built with React showcasing food categories, trending items, and a responsive design.",
    techStack: ["React", "CSS Modules", "React Router"],
  },
  {
    title: "WhatGPT3",
    repo: "https://github.com/imamulkadir/React_WhatGPT3",
    link: "", // Add your live URL if deployed
    description:
      "A landing page inspired by OpenAI's GPT-3, presenting features, use cases, and UI/UX best practices.",
    techStack: ["React", "CSS", "Responsive Design"],
  },
  {
    title: "React Dice Game",
    repo: "https://github.com/imamulkadir/React_DiceGame",
    link: "#", // Add your live URL if deployed
    description:
      "A simple dice rolling game made with React to demonstrate state, effects, and user interaction.",
    techStack: ["React", "JavaScript", "CSS"],
  },
  {
    title: "React Contact Form",
    repo: "https://github.com/imamulkadir/React_ContactForm",
    link: "#", // Add your live URL if deployed
    description:
      "A fully functional contact form using React, including form validation and submission logic.",
    techStack: ["React", "Form Validation", "CSS"],
  },
  {
    title: "HTML Editor",
    repo: "https://github.com/imamulkadir/HTML_Editor",
    link: "#", // Add your live URL if deployed
    description:
      "A basic HTML editor that lets users type and render HTML content in real time using vanilla JS.",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

const certifications = [
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    provider: "Coursera",
    certificate: "https://coursera.org/share/321af908e09f3f8e04c347a9612c21c6",
  },
  {
    title: "Website Development (HTML, CSS) - Intermediate",
    provider: "Udemy",
    certificate:
      "https://udemy.com/certificate/UC-67bbd294-e4cd-4c93-b725-12a8062ffd53",
  },
  {
    title: "HTML, JavaScript & Bootstrap - Certification Course",
    provider: "Udemy",
    certificate:
      "https://udemy.com/certificate/UC-47a54e2e-5049-4af8-9bb8-d7d142e9e7a9",
  },
  {
    title: "The Complete WordPress Website Course",
    provider: "Udemy",
    certificate:
      "https://udemy.com/certificate/UC-2a1ee347-e146-4b74-9b54-7eb064d5f7c2",
  },
  {
    title: "Certified Facebook Marketing Professional | CPD Accredited",
    provider: "Udemy",
    certificate:
      "https://udemy.com/certificate/UC-6ea421cd-b0f1-4887-a9e9-e2203b100378",
  },
  {
    title: "Email Writing & Etiquette: Business Communication at Work",
    provider: "Udemy",
    certificate:
      "https://udemy.com/certificate/UC-7bbab084-948a-496e-b653-0f2ebb5143fc",
  },
];

export {
  header,
  experience,
  education,
  publications,
  skills,
  projects,
  certifications,
};
