import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResidencySurvey } from "@/Residents/data/ResidencySurvey";
import { apiService, type SurveyInput } from "@/CMS/api"; // Adjust path if needed

const SurveyEngine = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({}); // Simple state to hold answers
  const q = ResidencySurvey[currentStep];
  const navigate = useNavigate();

  // 2. Handle Answer Selection
  const handleSelect = (value: string | number | boolean) => {
    setAnswers({ ...answers, [q.id]: value });
  };

  // 3. Handle Final Submission
  const handleFinish = async () => {
    const residentId = localStorage.getItem("residentId");
    if (!residentId) return;

    try {
      // 1. Convert the stipend string to a pure number for Strapi's Number field
      const rawStipend = answers["q1_stipend_rating"] || "0";
      const numericStipend = parseInt(rawStipend.replace(/[^0-9]/g, "")) || 0;

      const payload: SurveyInput = {
        q1_stipend_rating: numericStipend,
        q2_work_hours: answers["q2_work_hours"] || "Not specified",
        q3_toxicity_comment: answers["q3_toxicity_comment"]
          ? `Rating: ${answers["q3_toxicity_comment"]}`
          : "No rating",
        q4_hands_on_satisfied: true,
        q5_future_recommendation:
          answers["q5_future_recommendation"] || "Not specified",
        resident: Number(residentId),
      };

      await apiService.submitSurvey(payload);
      alert("Success! Check Strapi now.");
      navigate("/profile");
    } catch (error: any) {
      console.error("Submission Error:", error.response?.data);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white">
      {/* Progress Bar */}
      <div className="w-full max-w-xl bg-slate-800 h-2 rounded-full mb-8">
        <div
          className="bg-teal-400 h-2 rounded-full transition-all duration-500"
          style={{
            width: `${((currentStep + 1) / ResidencySurvey.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl backdrop-blur-lg">
        <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">
          {q.section}
        </span>
        <h2 className="text-2xl font-semibold mt-2 mb-6">{q.question}</h2>

        {/* Dynamic Input based on Type */}
        {/* Dynamic Input based on Type */}
        <div className="space-y-3">
          {/* 1. Handle Radio (Strings/Numbers) */}
          {q.type === "radio" &&
            q.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  answers[q.id] === opt
                    ? "border-teal-400 bg-teal-500/20"
                    : "border-slate-700"
                }`}
              >
                {opt}
              </button>
            ))}

          {/* 2. Handle Boolean (Yes/No) */}
          {q.type === "boolean" && (
            <div className="flex gap-4">
              {["Yes", "No"].map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleSelect(choice === "Yes")} // Converts "Yes" to true, "No" to false
                  className={`flex-1 p-4 rounded-xl border transition-all ${
                    answers[q.id] === (choice === "Yes")
                      ? "border-teal-400 bg-teal-500/20"
                      : "border-slate-700"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          )}

          {/* 3. Handle Text Input */}
          {q.type === "text" && (
            <textarea
              value={answers[q.id] || ""}
              onChange={(e) => handleSelect(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 min-h-[150px] outline-none focus:border-teal-400"
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="text-slate-400 hover:text-white disabled:opacity-0"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (currentStep === ResidencySurvey.length - 1) {
                handleFinish();
              } else {
                setCurrentStep((prev) => prev + 1);
              }
            }}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all"
          >
            {currentStep === ResidencySurvey.length - 1
              ? "Finish"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyEngine;
