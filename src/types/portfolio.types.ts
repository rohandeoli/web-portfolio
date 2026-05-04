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
  nickname: string;
  full_name: string;
  subTitle: string;
  resumeLink: string;
  mail: string;
}

export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
  style: React.CSSProperties;
}

export interface Skill {
  title: string;
  fileName: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface Degree {
  title: string;
  subtitle: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
  logo_path?: string;
}

export interface Certification {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
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
  subtitle: string;
  description: string;
  header_image_path: string;
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
  avatar_image_path: string;
}

export interface ContactData {
  title: string;
  profile_image_path: string;
  description: string;
  resumeLink: string;
}

export interface BlogSection {
  title: string;
  subtitle: string;
  link: string;
  avatar_image_path: string;
}

export interface PortfolioData {
  greeting: Greeting;
  socialMediaLinks: SocialMediaLinks;
  skills: {
    data: Skill[];
  };
  degrees: Degree[];
  certifications: Certification[];
  experience: Experience;
  projectsHeader: ProjectsHeader;
  projects: Project[];
  contactData: ContactData;
  blogSection: BlogSection;
}
