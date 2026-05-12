// RightSidebar.jsx

import "./RightSidebar.css";

import {
  HeartPulse,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">

      {/* STATUS */}

      <div className="status-card">

        <div className="status-icon">
          <HeartPulse size={24} />
        </div>

        <h2>Eligible</h2>

        <p>
          You can donate blood now
        </p>

      </div>

      {/* LAST DONATION */}

      <div className="info-card">

        <div className="info-top">

          <CalendarDays size={18} />

          <h3>Last Donation</h3>

        </div>

        <h4>
          12 March 2026
        </h4>

        <p>
          City Care Hospital
        </p>

      </div>

      {/* NEXT ELIGIBILITY */}

      <div className="info-card">

        <div className="info-top">

          <CheckCircle2 size={18} />

          <h3>Next Eligible</h3>

        </div>

        <h4>
          28 May 2026
        </h4>

        <p>
          18 days remaining
        </p>

      </div>

    </div>
  );
}