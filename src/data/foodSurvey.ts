import { Survey } from '../types/survey';

export const universityFoodSurvey: Survey = {
  id: 'university-food-survey-2024',
  title: 'University Students Favorite Food Survey',
  description: 'Help us understand the food preferences and eating habits of university students across different campuses.',
  questions: [
    {
      id: 'personal-info',
      type: 'text',
      question: 'What is your name?',
      required: true
    },
    {
      id: 'university',
      type: 'select',
      question: 'Which university do you attend?',
      options: [
        'Stanford University',
        'MIT',
        'Harvard University',
        'UCLA',
        'Yale University',
        'UC Berkeley',
        'Princeton University',
        'University of Chicago',
        'Columbia University',
        'Duke University',
        'Northwestern University',
        'Caltech',
        'University of Pennsylvania',
        'Other'
      ],
      required: true
    },
    {
      id: 'major',
      type: 'text',
      question: 'What is your major?',
      required: true
    },
    {
      id: 'year',
      type: 'radio',
      question: 'What year are you in?',
      options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'],
      required: true
    },
    {
      id: 'favorite-food',
      type: 'text',
      question: 'What is your favorite food?',
      required: true
    },
    {
      id: 'food-category',
      type: 'select',
      question: 'Which category best describes your favorite food?',
      options: [
        'Fast Food',
        'Asian',
        'Italian',
        'Mexican',
        'American',
        'Mediterranean',
        'Indian',
        'Other'
      ],
      required: true
    },
    {
      id: 'dietary-restrictions',
      type: 'multiselect',
      question: 'Do you have any dietary restrictions? (Select all that apply)',
      options: [
        'None',
        'Vegetarian',
        'Vegan',
        'Gluten-Free',
        'Dairy-Free',
        'Nut Allergy',
        'Halal',
        'Kosher',
        'Other'
      ],
      required: false
    },
    {
      id: 'budget-range',
      type: 'radio',
      question: 'What is your typical budget for a meal?',
      options: ['$0-10', '$10-20', '$20-30', '$30+'],
      required: true
    },
    {
      id: 'eating-frequency',
      type: 'radio',
      question: 'How often do you eat your favorite food?',
      options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
      required: true
    },
    {
      id: 'campus-dining',
      type: 'radio',
      question: 'How satisfied are you with your campus dining options?',
      options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
      required: true
    }
  ],
  responses: [],
  createdAt: new Date('2024-01-01')
};