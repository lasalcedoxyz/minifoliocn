import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  featured: boolean;
  status: ProjectStatus;
  projectType: 'personal' | 'client' | 'work';
  startDate?: string;
}

export type ProjectStatus =
  | 'live'
  | 'building'
  | 'archived';

export interface LinkItem {
  label?: string;
  href: string;
  icon?: IconType;
}

export interface Skill {
  name: string;
  proficiencyLevel?: 'beginner' | 'intermediate' | 'professional';
  logo?: Media;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  location?: Location;
  workplaceType?: 'onsite' | 'hybrid' | 'remote';
  description?: string;
  highlights?: string[];
  projects?: string[];
}

export interface Education {
  degree: string;
  institute?: string;
  instituteLogo?: Media;
  gpa?: string;
  description?: string;
  highlights?: string[];
}

interface Media {
  href: string;
  altText?: string;
  altDescription?: string;
}

interface Location {
  city?: string;
  state?: string;
  country?: string;
}


