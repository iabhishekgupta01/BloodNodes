// EligibilityProgress.jsx

import "./EligibilityProgress.css";

export default function EligibilityProgress({
  currentStep,
  totalSteps,
}) {

  const progress =
    (currentStep / totalSteps) * 100;

  return (
    <div className="eligibility-progress-wrapper">

      <div className="progress-top">

        <span>
          Step {currentStep} / {totalSteps}
        </span>

        <span>
          {Math.round(progress)}%
        </span>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

    </div>
  );
}