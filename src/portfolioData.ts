import { PortfolioData } from "./types/portfolio.types";

export const portfolioData: PortfolioData = {
  greeting: {
    title: "Hello 👋.",
    title2: "Rohan",
    logo_name: "rohan.d()",
    nickname: "rohan / picleric",
    full_name: "Rohan Deoli",
    subTitle: "Programmer, Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
    resumeLink: "https://drive.google.com/file/d/1NQugCN-EtZs3haRtbgFGxgSaF5Xr8SzA/view?usp=drivesdk",
    mail: "mailto:rohan.deoli98@gmail.com",
  },
  socialMediaLinks: {
    github: "https://github.com/rohandeoli",
    linkedin: "https://www.linkedin.com/in/rohan-deoli/",
    gmail: "rohan.deoli98@gmail.com",
    twitter: "https://twitter.com/rohan1010",
  },
  skills: {
    data: [
      {
        title: "Front End Development",
        fileName: "FullStackImg",
        skills: [
          "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
          "⚡ Building responsive website front end using Angular and ReactJS",
          "⚡ Integrating backend services with ReactJS and NodeJS",
          "⚡ Integrating Third Party APIs",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: { color: "#E34F26" },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: { color: "#1572B6" },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
          },
          {
            skillName: "Angular",
            fontAwesomeClassname: "simple-icons:angular",
            style: { backgroundColor: "#FFFFFF", color: "#B52E31" },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: { color: "#61DAFB" },
          },
          {
            skillName: "ElectronJS",
            fontAwesomeClassname: "simple-icons:electron",
            style: { color: "#47848F" },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: { color: "#E94E32" },
          },
        ],
      },
      {
        title: "Back End Development",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Building highly scalable backend applications",
          "⚡ Building RESTful APIs in Node, Express",
          "⚡ Experience with Continuous Integration",
          "⚡ Integration of third party services",
          "⚡ Building microservices",
        ],
        softwareSkills: [
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
            style: { color: "#339933" },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: { color: "#336791" },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: { color: "#47A248" },
          },
          {
            skillName: "Docker",
            fontAwesomeClassname: "simple-icons:docker",
            style: { color: "#1488C6" },
          },
          {
            skillName: "GitHub Actions",
            fontAwesomeClassname: "simple-icons:githubactions",
            style: { color: "#5b77ef" },
          },
        ],
      },
    ],
  },
  degrees: [
    {
      title: "Graphic Era Deemed University",
      subtitle: "Bachelors in Technology",
      alt_name: "GEU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Majored in Computer Science and Engineering.",
        "⚡ Focused on Data Structures, Algorithms, Operating Systems and Web Development.",
        "⚡ Other areas of focus included Machine Learning, Computer Vision.",
        "⚡ Participated in various hackathons and coding competitions.",
      ],
      website_link: "http://www.geu.ac.in/",
    },
  ],
  certifications: [
    {
      title: "Responsive Web Design",
      subtitle: "Free Code Camp",
      logo_path: "fcc.png",
      certificate_link: "https://www.freecodecamp.org/certification/rohan1010/responsive-web-design",
      alt_name: "Free Code Camp",
      color_code: "#47A048",
    },
  ],
  experience: {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description: "Experienced Software Engineer with almost 4 years of expertise in UI Development using Angular and proficiency in Node.js. Dedicated to ongoing learning and adept at assimilating new technologies to devise innovative solutions. Demonstrated ability to design, develop, and enhance solutions by consistently delivering efficient and high-quality code at scale. Committed to staying abreast of industry trends and best practices to contribute effectively to software development projects.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work Experience",
        experiences: [
          {
            title: "Specialist Programmer L2",
            company: "Infosys Ltd.",
            company_url: "https://www.infosys.com/",
            logo_path: "crest.png",
            duration: "Apr 2024 - Present",
            location: "Bengaluru, Karnataka",
            description: [
              "Led the strategic migration of PwC’s mission-critical internal application, Flex, from a monolithic AngularJS/.NET architecture to a modern Angular Micro Frontend design.",
              "This migration resulted in a significant improvement in application performance, scalability, and user experience for managing client deliverables, approvals, and tracking.",
            ],
            contributions: [
              "Improved application load time by 40%",
              "Reduced average transaction processing time by 50%",
              "Independent deployment and updates of individual application features.",
              "Enhanced maintainability and reduced technical debt.",
            ],
            color: "#0071C5",
          },
          {
            title: "Specialist Programmer",
            company: "Infosys Ltd.",
            company_url: "https://www.infosys.com/",
            logo_path: "crest.png",
            duration: "Jan 2022 - Apr 2024",
            location: "Bengaluru, Karnataka",
            description: [
              "Developed and maintained JRA, a critical internal Job Requisition Portal used across PwC for creating job postings.",
              "The platform integrates seamlessly with Workday, automatically fetching and synchronizing job data to ensure efficient and accurate job information management. The platform is developed using Angular and Nest.JS",
            ],
            contributions: [
              "Implemented the Workday integration, automating job data synchronization and reducing manual data entry by 50%.",
              "Developed multiple workflows which reduced the job posting cycle time by 50%.",
            ],
            color: "#0071C5",
          },
          {
            title: "Digital Specialist Engineer",
            company: "Infosys Ltd.",
            company_url: "https://www.infosys.com/",
            logo_path: "crest.png",
            duration: "Jan 2021 - Jan 2022",
            location: "Bengaluru, Karnataka",
            description: [
              "Served as a UI Developer for the Indian Income Tax project, responsible for the design, implementation, and maintenance of the end-to-end flow for statutory forms within the web application. Platform was built on Angular and Springboot.",
              "Key contributions focused on significantly enhancing the user experience (UX) and resolving critical bugs, resulting in a demonstrably improved taxpayer experience.",
            ],
            contributions: [
              "Implemented dynamic form validations that reduced the average form completion time by 20%.",
              "Collaborated with back-end developers to optimize data flow and improve form submission performance by 20%.",
              "DSuccessfully resolved critical bugs that affected form submission and processing, preventing potential taxpayer issues.",
            ],
            color: "#0071C5",
          },
        ],
      },
    ],
  },
  projectsHeader: {
    title: "Projects",
    description: "My projects leverage a wide array of cutting-edge technology tools. Below is a selection of my projects, with the understanding that not all are currently available on GitHub.",
    avatar_image_path: "projects_image.svg",
  },
  projects: [
    {
      id: "0",
      name: "Blockchain Mining Using GPU",
      url: "https://github.com/rohandeoli/blockchain_gpu",
      description: "The project aims to provide mining solution for CPU as well as GPU. IF YOU INTEND TO MINE ON GPU, NVIDIA CARD WITH CUDA IS REQUIRED. (Tested with Nvidia GeFroce 920M, Nvidia Tesla K80)",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "C++", iconifyClass: "logos-c-plusplus" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/blockchain_gpu", iconifyClass: "ri:github-fill" },
      ],
    },
    {
      id: "1",
      name: "Online Portfolio Website",
      url: "https://github.com/rohandeoli/web-portfolio",
      description: "This is my personal portfolio website, built using React and Material UI. It showcases my projects, skills, and experiences.",
      languages: [
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "Material UI", iconifyClass: "logos-material-ui" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/web-portfolio", iconifyClass: "ri:github-fill" },
        { name: "Live Demo", url: "https://rohandeoli.netlify.app/", iconifyClass: "ri:external-link-fill" },
      ],
    },
    {
      id: "2",
      name: "8085 Microprocessor Simulator",
      url: "https://github.com/rohandeoli/8085-Microprocessor-Simulator",
      description: "A simulator for the 8085 microprocessor, built using C++. It allows users to simulate the execution of assembly language programs.",
      languages: [
        { name: "C++", iconifyClass: "logos-c-plusplus" },
        { name: "C", iconifyClass: "logos-c" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/8085-Microprocessor-Simulator", iconifyClass: "ri:github-fill" },
      ],
    },
    {
      id: "3",
      name: "Smart Home Security System",
      url: "https://github.com/rohandeoli/Smart-Home-Security-System",
      description: "A smart home security system that is built on Arduino platform. It supports pin based locking system as well as ability to reset password over email.",
      languages: [
        { name: "C++", iconifyClass: "logos-c-plusplus" },
        { name: "Arduino", iconifyClass: "logos-arduino" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/Smart-Home-Security-System", iconifyClass: "ri:github-fill" },
      ],
    },
  ],
  contactData: {
    title: "Contact Me",
    profile_image_path: "hari-crop.png",
    description: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. I am also open to any kind of feedback and suggestions.",
    resumeLink: "https://drive.google.com/file/d/1Co3W20DC5fPfTC2NzmjdMQAe3tZtjGFF/view?usp=sharing",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I write about my learnings and experiences in the field of technology. I also write about my experiences in open source and other projects.",
    link: "https://medium.com/@rohan.deoli98",
    avatar_image_path: "blogs_image.svg",
  },
};
