import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api';

// 1. Define the Shapes of your data
export interface ResidentInput {
  fullName: string;
  email: string;
  password: string;
  contactNo: string;
  currentRole: 'JR1' | 'JR2' | 'JR3' | '';
  institute: string;
  specialty: string;
  about?: string;
  experience?: string;
}

export interface SurveyInput {
  q1_stipend_rating: number;
  q2_work_hours: string;
  q3_toxicity_comment: string;
  q4_hands_on_satisfied: boolean;
  q5_future_recommendation: string;
  resident: number; // This will be the ID of the resident
}

// 2. Create the Service Functions
export const apiService = {
  // Register Resident
  register: async (payload: ResidentInput) => {
    const response = await axios.post(`${API_BASE_URL}/residents`, { data: payload });
    return response.data; // This returns the resident object including the new ID
  },

  // Submit Survey
  submitSurvey: async (payload: SurveyInput) => {
    const response = await axios.post(`${API_BASE_URL}/survey-responses`, { data: payload });
    return response.data;
  }
};