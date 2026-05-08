export interface SocialMediaLinks {
  github: string;
  linkedin: string;
  gmail: string;
  twitter: string;
}

export interface Greeting {
  title: string;
  title2: string;
  logo_name: string;
  full_name: string;
  subTitle: string;
  resumeLink: string;
  mail: string;
  siteUrl: string;
}

export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
  style: React.CSSProperties;
}

export interface Skill {
  title: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface Degree {
  title: string;
  subtitle: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

export interface Certification {
  title: string;
  subtitle: string;
  certificate_link: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  company_url: string;
  duration: string;
  location: string;
  description: string[];
  contributions: string[];
  color: string;
}

export interface ExperienceSection {
  title: string;
  experiences: WorkExperience[];
}

export interface Experience {
  title: string;
  description: string;
  sections: ExperienceSection[];
}

export interface ProjectLanguage {
  name: string;
  iconifyClass: string;
}

export interface ProjectLink {
  name: string;
  url: string;
  iconifyClass: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  languages: ProjectLanguage[];
  links: ProjectLink[];
}

export interface ProjectsHeader {
  title: string;
  description: string;
}

export interface ContactData {
  title: string;
  description: string;
}

export interface PortfolioData {
  greeting: Greeting;
  socialMediaLinks: SocialMediaLinks;
  skills: {
    data: Skill[];
  };
  location: string;
  currentFocus: string;
  degrees: Degree[];
  certifications: Certification[];
  experience: Experience;
  projectsHeader: ProjectsHeader;
  projects: Project[];
  contactData: ContactData;
}
