export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  university: string;
  major: string;
  year: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
  age: number;
  favoriteFood: string;
  foodCategory: 'Fast Food' | 'Asian' | 'Italian' | 'Mexican' | 'American' | 'Mediterranean' | 'Indian' | 'Other';
  dietaryRestrictions: string[];
  budgetRange: '$0-10' | '$10-20' | '$20-30' | '$30+';
  eatingFrequency: 'Daily' | 'Weekly' | 'Monthly' | 'Rarely';
  createdAt: Date;
}

export interface SurveyQuestion {
  id: string;
  type: 'text' | 'select' | 'multiselect' | 'radio' | 'number';
  question: string;
  options?: string[];
  required: boolean;
}

export interface SurveyResponse {
  studentId: string;
  questionId: string;
  answer: string | string[] | number;
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: SurveyQuestion[];
  responses: SurveyResponse[];
  createdAt: Date;
}