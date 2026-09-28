/**
 * Types definition for AZYR Group of Companies corporate website
 */

export type PageId = 'home' | 'about' | 'services' | 'leadership' | 'locations' | 'contact';

export interface ServiceChecklistItem {
  title: string;
  description?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  checklist: string[];
}

export interface CourseCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  delivery: string;
  keyTopics: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
  department: string;
  location: string;
  credentials: string[];
}

export interface LocationDetail {
  id: string;
  name: string;
  type: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  businessHours: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  highlights: string[];
}

export interface ContactFormState {
  fullName: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}
