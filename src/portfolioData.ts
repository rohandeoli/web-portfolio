import { PortfolioData } from "./types/portfolio.types";

export const portfolioData: PortfolioData = {
  greeting: {
    title: "Hello 👋.",
    title2: "Rohan",
    logo_name: "rohan.d()",
    nickname: "rohan / picleric",
    full_name: "Rohan Deoli",
    subTitle: "Senior Full Stack Engineer & Specialist Programmer | 5+ Years of Expertise in Architecting Scalable Web Ecosystems 🔥.",
    resumeLink: "https://drive.google.com/file/d/1_wBCEEgbqTyPPt78wHIVMZiGe20iwoKB/view?usp=sharing",
    mail: "mailto:rohan.deoli98@gmail.com",
    siteUrl: "https://rohandeoli.netlify.app",
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
        title: "Frontend Engineering & Architecture",
        skills: [
          "⚡ Architecting highly interactive, performant User Interfaces for enterprise-scale applications",
          "⚡ Specializing in Angular Micro-Frontend (MFE) migrations and React ecosystem integration",
          "⚡ Implementing robust State Management and design patterns for maintainable codebases",
          "⚡ Optimizing web performance and accessibility (a11y) standards",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: { color: "#E34F26" },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "simple-icons:css3",
            style: { color: "#1572B6" },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
          },
          {
            skillName: "TypeScript",
            fontAwesomeClassname: "simple-icons:typescript",
            style: { color: "#3178C6" },
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
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: { color: "#E94E32" },
          },
        ],
      },
      {
        title: "Backend & Cloud Infrastructure",
        skills: [
          "⚡ Engineering scalable Microservices using Node.js, NestJS, and Spring Boot",
          "⚡ Designing robust RESTful and GraphQL APIs for seamless data flow",
          "⚡ Implementing CI/CD pipelines and automated deployment strategies",
          "⚡ Database modeling and optimization with PostgreSQL and MongoDB",
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
        "⚡ Majored in Computer Science and Engineering with a focus on core software principles.",
        "⚡ Deep-dived into Data Structures, Algorithms, Operating Systems, and Web Engineering.",
        "⚡ Explored Advanced Machine Learning and Computer Vision through academic projects.",
        "⚡ Active participant in national-level hackathons and technical symposiums.",
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
    subtitle: "A Journey of Technical Leadership and Innovation",
    description: "Senior Software Engineer with over 5 years of industry experience, specializing in crafting high-performance UI ecosystems and scalable backend architectures. Proven track record in leading critical digital transformations, migrating monolithic systems to modern Micro-Frontend designs, and delivering robust solutions for global clients like PwC. Adept at bridging the gap between complex business requirements and elegant technical implementations.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Professional Experience",
        experiences: [
          {
            title: "Specialist Programmer L2",
            company: "Infosys Ltd.",
            company_url: "https://www.infosys.com/",
            logo_path: "crest.png",
            duration: "Apr 2024 - Present",
            location: "Bengaluru, Karnataka",
            description: [
              "Spearheading the strategic architectural migration of PwC’s mission-critical 'Flex' application from a legacy AngularJS/.NET monolith to a cutting-edge Angular Micro-Frontend ecosystem.",
              "Driving technical excellence by establishing best practices for modularity, performance, and cross-team collaboration within a distributed MFE environment.",
            ],
            contributions: [
              "Optimized core application load times by 40% through lazy loading and component modularization.",
              "Reduced transaction processing latency by 50% by re-engineering state management and API data flows.",
              "Enabled independent, parallel deployment cycles for various business units, significantly increasing release velocity.",
              "Mentored junior developers and conducted deep-dive technical sessions on MFE architecture.",
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
              "Architected and maintained JRA, a high-traffic internal Job Requisition Portal integrated with PwC’s global talent systems.",
              "Engineered a seamless integration with Workday using Angular and Nest.JS, ensuring real-time data synchronization for thousands of job postings.",
            ],
            contributions: [
              "Automated 50% of manual job data entry by implementing robust Workday API integrations.",
              "Designed and deployed streamlined approval workflows, slashing the job posting lifecycle by 50%.",
              "Ensured 99.9% uptime for the portal through proactive monitoring and performance tuning.",
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
              "Played a pivotal role as a UI Developer for the Indian Income Tax project, a high-visibility national-scale digital transformation.",
              "Responsible for designing and implementing end-to-end statutory form flows, prioritizing user experience and data integrity.",
            ],
            contributions: [
              "Engineered dynamic, highly-validated form modules that improved taxpayer completion rates by 20%.",
              "Collaborated across full-stack teams to optimize API response handling, boosting form submission speeds by 20%.",
              "Resolved critical, high-impact bugs during peak filing seasons, ensuring a stable experience for millions of users.",
            ],
            color: "#0071C5",
          },
        ],
      },
    ],
  },
  projectsHeader: {
    title: "Project Portfolio",
    description: "A curated selection of my technical contributions, ranging from blockchain solutions to systems engineering. These projects demonstrate my ability to tackle complex challenges across different domains.",
    avatar_image_path: "projects_image.svg",
  },
  projects: [
    {
      id: "0",
      name: "GPU-Accelerated Blockchain Mining",
      url: "https://github.com/rohandeoli/blockchain_gpu",
      description: "A high-performance mining solution supporting both CPU and GPU execution. Optimized specifically for NVIDIA CUDA architectures to maximize hash rates and efficiency.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "C++", iconifyClass: "logos-c-plusplus" },
        { name: "CUDA", iconifyClass: "logos-nvidia" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/blockchain_gpu", iconifyClass: "ri:github-fill" },
      ],
    },
    {
      id: "1",
      name: "Interactive Personal Portfolio",
      url: "https://github.com/rohandeoli/web-portfolio",
      description: "A modern, high-polish portfolio built with React 19, MUI, and Framer Motion. Features a 'Refined Interactive' aesthetic with dark-mode-first styling and dynamic SEO.",
      languages: [
        { name: "TypeScript", iconifyClass: "logos-typescript" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "MUI", iconifyClass: "logos-material-ui" },
        { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
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
      description: "A comprehensive low-level simulator for the 8085 architecture. Enables assembly language execution, register tracking, and memory mapping for academic and hobbyist use.",
      languages: [
        { name: "C++", iconifyClass: "logos-c-plusplus" },
        { name: "Systems Design", iconifyClass: "simple-icons:cpu" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/8085-Microprocessor-Simulator", iconifyClass: "ri:github-fill" },
      ],
    },
    {
      id: "3",
      name: "Smart IoT Security System",
      url: "https://github.com/rohandeoli/Smart-Home-Security-System",
      description: "An integrated home security solution using the Arduino platform. Features secure PIN-based locking, remote email password resets, and real-time sensor monitoring.",
      languages: [
        { name: "C++", iconifyClass: "logos-c-plusplus" },
        { name: "Arduino", iconifyClass: "logos-arduino" },
        { name: "IoT", iconifyClass: "logos-internetcomputer" },
      ],
      links: [
        { name: "Github", url: "https://github.com/rohandeoli/Smart-Home-Security-System", iconifyClass: "ri:github-fill" },
      ],
    },
  ],
  contactData: {
    title: "Get In Touch",
    profile_image_path: "hari-crop.png",
    description: "I am always open to discussing high-impact projects, architectural challenges, or senior-level opportunities. Whether you have a question or just want to connect, my inbox is always open.",
    resumeLink: "https://drive.google.com/file/d/1_wBCEEgbqTyPPt78wHIVMZiGe20iwoKB/view?usp=sharing",
  },
  blogSection: {
    title: "Technical Writing",
    subtitle: "I share deep-dives into software architecture, frontend performance, and my journey in the tech ecosystem. Bridging the gap between code and conceptual understanding.",
    link: "https://medium.com/@rohan.deoli98",
    avatar_image_path: "blogs_image.svg",
  },
};
