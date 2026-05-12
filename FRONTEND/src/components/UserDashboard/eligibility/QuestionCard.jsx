// QuestionCard.jsx

import "./QuestionCard.css";

import {
  HeartPulse,
} from "lucide-react";

export default function QuestionCard({
  question,
  onAnswer,
}) {
  return (
    <div className="question-card-wrapper">

      <div className="question-icon">

        <HeartPulse size={24} />

      </div>

      <h3>
        {question}
      </h3>

      <div className="question-buttons">

        <button
          className="yes-btn"
          onClick={() => onAnswer("yes")}
        >
          Yes
        </button>

        <button
          className="no-btn"
          onClick={() => onAnswer("no")}
        >
          No
        </button>

      </div>

    </div>
  );
}