export const ResidencySurvey = [
  {
    // Map to q1_stipend_rating (Number)
    id: "q1_stipend_rating",
    section: "STIPEND & FINANCIAL",
    question: "monthly stipend Rating (1-10 scale)",
    // Note: We will handle the string-to-number conversion in handleFinish
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    type: "radio"
  },
  {
    // Map to q2_work_hours (Text)
    id: "q2_work_hours",
    section: "PROGRAM IDENTITY",
    question: "work hours per week",
    options: ["0-20 hours", "20-40 hours", "40-60 hours", "60-80 hours", "80+ hours"],
    type: "radio"
  },
  {
    // Map to q3_toxicity_comment (Text)
    id: "q3_toxicity_comment",
    section: "Toxicity & Work Environment",
    question: "Overall department toxicity rating (1-10 scale)",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    type: "radio"
  },
  {
    // Map to q5_future_recommendation (Text)
    id: "q4_hands_on_satisfied", 
    section: "PROGRAM IDENTITY",
    question: "Satisfied with hands-on training opportunities?",
    options: ["Yes", "No"],
    type: "boolean"
  },
  {
    id: "q5_future_recommendation", // Used only for UI, not sent to SurveyResponse
    section: "PROGRAM IDENTITY",
    question: "q5_future_recommendation",
    type: "text",
  }
  
  
  
];