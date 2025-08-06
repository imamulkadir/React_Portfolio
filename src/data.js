import wsdLogo from "./assets/images/wsd.png";
import apurbaLogo from "./assets/images/apurba.png";
import impitLogo from "./assets/images/impit.png";

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
    degree: "B.Sc. in Computer Science and Engineering",
    university: "Daffodil International University",
    year: "2020",
    CGPA: "3.70",
    thesis:
      "aEye: Safe Navigation in Footpath for Visually Impaired Using Computer Vision Techniques",
  },
  {
    degree: "H.S.C",
    group: "Science",
    institution: "Notre Dame College",
    year: "2014",
    GPA: "5.00",
  },
  {
    degree: "S.S.C",
    group: "Science",
    institution: "Kishoreganj Govt. Boys' High School",
    year: "2012",
    GPA: "5.00",
  },
];

const achievements = [
  "Board Scholarship - General, 2006 (Primary School Certificate Exam)",
  "Board Scholarship - General, 2012 (Secondary School Certificate Exam)",
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
  "JavaScript",
  "PHP",
  "Python",
  "HTML",
  "CSS",
  "Bootstrap",
  "jQuery",
  "WordPress",
  "React",
  "Flask",
  "VS Code",
  "Git",
  "GitHub",
  "Android Studio",
  "MySQL Workbench",
  "phpMyAdmin",
  "Dreamweaver",
  "Code::Blocks",
  "Microsoft Office",
  "MySQL",
  "Microsoft Access",
  "Windows",
  "Linux (Ubuntu)",
];

const projects = [
  {
    title: "Portfolio Website",
    description: "Developed portfolio website",
    link: "https://imamulkadir.github.io",
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"],
  },
  {
    title: "Text Recognition",
    description: "Android app to detect text from live images",
    technologies: ["Firebase ML Kit", "Java"],
  },
  {
    title: "Covid-19 Self-Assessment",
    description: "Website to check if user needs to consult doctor",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Calculator",
    description: "Simple calculator with basic operations",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

const certifications = [
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    provider: "Coursera",
    certificate: "https://coursera.org/share/321af908e09f3f8e04c347a9612c21c6",
  },
  {
    title: "Website Development (HTML, CSS) – Intermediate",
    provider: "Udemy",
    certificate:
      "https://udemy.com/certificate/UC-67bbd294-e4cd-4c93-b725-12a8062ffd53",
  },
  {
    title: "HTML, JavaScript & Bootstrap – Certification Course",
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
  achievements,
  publications,
  skills,
  projects,
  certifications,
};
