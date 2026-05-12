// EligibilityQuestions.jsx

import "./EligibilityQuestions.css";

import { useState } from "react";

import EligibilityProgress from "./EligibilityProgress";
import QuestionCard from "./QuestionCard";
import EligibilityResult from "./EligibilityResult";

const questions = [
  "Are you above 18 years old?",

  "Have you donated blood in the last 3 months?",

  "Are you currently taking medication?",

  "Are you feeling healthy today?",

  "Did you sleep properly last night?",
];

export default function EligibilityQuestions() {

  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {

    const updatedAnswers = [
      ...answers,
      answer,
    ];

    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {

      setStep(step + 1);

    }

  };

  const completed =
    answers.length === questions.length;

  return (
    <div className="eligibility-questions-wrapper">

      {!completed ? (

        <>
          <EligibilityProgress
            currentStep={step + 1}
            totalSteps={questions.length}
          />

          <QuestionCard
            question={questions[step]}
            onAnswer={handleAnswer}
          />
        </>

      ) : (

        <EligibilityResult
          eligible={true}
        />

      )}

    </div>
  );
}