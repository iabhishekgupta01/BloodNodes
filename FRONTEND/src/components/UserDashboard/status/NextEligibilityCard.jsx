// NextEligibilityCard.jsx

import "./NextEligibilityCard.css";

import {
  Clock3,
  CalendarClock,
  HeartPulse,
} from "lucide-react";

export default function NextEligibilityCard() {
  return (
    <div className="next-eligibility-card">

      <div className="next-top">

        <div className="next-icon">
          <HeartPulse size={24} />
        </div>

        <div>

          <h2>
            Next Eligibility
          </h2>

          <p>
            Donation recovery tracking
          </p>

        </div>

      </div>

      {/* DAYS */}

      <div className="days-remaining">

        <Clock3 size={20} />

        <div>

          <h3>
            18 Days Remaining
          </h3>

          <span>
            Recovery period active
          </span>

        </div>

      </div>

      {/* DATE */}

      <div className="eligibility-date">

        <CalendarClock size={18} />

        Eligible Again:
        <strong>
          28 May 2026
        </strong>

      </div>

      {/* PROGRESS */}

      <div className="eligibility-progress">

        <div className="eligibility-fill"></div>

      </div>

    </div>
  );
}