export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface ProcessDayProps {
  day: number;
  title: string;
  description: string;
}

export interface ProcessTabProps {
  title: string;
  days: ProcessDayProps[];
}

export interface ReasonProps {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudyProps {
  category: string;
  title: string;
  description: string;
  image: string;
  results: {
    value: string;
    label: string;
  }[];
}