// EligibilityHero.jsx

import "./EligibilityHero.css";

import {
  HeartPulse,
  ShieldCheck,
  CalendarClock,
  Activity,
} from "lucide-react";

export default function EligibilityHero({
  eligibilityPercent = 65,
  eligible = true,
}) {
  return (
    <div className="eligibility-hero">

      {/* LEFT */}

      <div className="hero-left">

        <div className="hero-icon">
          <HeartPulse size={28} />
        </div>

        <div>

          <div className="hero-badge">

            <ShieldCheck size={14} />

            Donor Eligibility Active

          </div>

          <h2>
            {eligible
              ? "Eligible To Donate"
              : "Not Eligible"}
          </h2>

          <p>
            Complete quick health screening
            before accepting requests.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        <div className="percent-circle">

          <span>
            {eligibilityPercent}%
          </span>

        </div>

        <div className="eligibility-date">

          <CalendarClock size={16} />

          Next eligibility:
          <strong>
            28 May 2026
          </strong>

        </div>

      </div>

    </div>
  );
}