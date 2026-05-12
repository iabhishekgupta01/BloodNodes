// EligibilityResult.jsx

import "./EligibilityResult.css";

import {
  CheckCircle2,
  XCircle,
  CalendarClock,
  Clock3,
} from "lucide-react";

export default function EligibilityResult({
  eligible = true,
}) {
  return (
    <div className="eligibility-result-card">

      <div
        className={
          eligible
            ? "result-icon eligible"
            : "result-icon not-eligible"
        }
      >

        {eligible ? (
          <CheckCircle2 size={28} />
        ) : (
          <XCircle size={28} />
        )}

      </div>

      <h2>

        {eligible
          ? "Eligible To Donate"
          : "Not Eligible"}

      </h2>

      <p>

        {eligible
          ? "You can now accept blood requests."
          : "Recovery period is still active."}

      </p>

      <div className="result-info">

        <div>

          <Clock3 size={16} />

          <span>
            18 Days Remaining
          </span>

        </div>

        <div>

          <CalendarClock size={16} />

          <span>
            28 May 2026
          </span>

        </div>

      </div>

    </div>
  );
}