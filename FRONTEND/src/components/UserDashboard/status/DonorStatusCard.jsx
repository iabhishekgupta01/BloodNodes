// DonorStatusCard.jsx

import "./DonorStatusCard.css";

import {
  HeartPulse,
  ShieldCheck,
  CalendarDays,
  Clock3,
  Award,
} from "lucide-react";

export default function DonorStatusCard() {
  return (
    <div className="donor-status-card">

      {/* TOP */}

      <div className="status-top">

        <div className="status-icon">
          <HeartPulse size={26} />
        </div>

        <div>

          <h2>
            Eligible To Donate
          </h2>

          <p>
            You can donate blood now
          </p>

        </div>

      </div>

      {/* STATUS BADGES */}

      <div className="status-badges">

        <div className="status-badge verified">

          <ShieldCheck size={14} />

          Verified Donor

        </div>

        <div className="status-badge active">

          <Award size={14} />

          Active Donor

        </div>

      </div>

      {/* INFO */}

      <div className="status-info-grid">

        <div className="status-info-card">

          <div className="info-icon">
            <CalendarDays size={18} />
          </div>

          <div>

            <span>
              Last Donation
            </span>

            <strong>
              12 March 2026
            </strong>

          </div>

        </div>

        <div className="status-info-card">

          <div className="info-icon">
            <Clock3 size={18} />
          </div>

          <div>

            <span>
              Next Eligible
            </span>

            <strong>
              Available Now
            </strong>

          </div>

        </div>

      </div>

      {/* DONATION STREAK */}

      <div className="donation-streak">

        <div className="streak-top">

          <h3>
            Donation Streak
          </h3>

          <span>
            🔥 6 Donations
          </span>

        </div>

        <div className="streak-progress">

          <div className="streak-fill"></div>

        </div>

      </div>

    </div>
  );
}