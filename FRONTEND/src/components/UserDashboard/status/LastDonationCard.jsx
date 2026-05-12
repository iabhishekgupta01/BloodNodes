// LastDonationCard.jsx

import "./LastDonationCard.css";

import {
  Building2,
  CalendarDays,
  Droplets,
  CheckCircle2,
} from "lucide-react";

export default function LastDonationCard() {
  return (
    <div className="last-donation-card">

      <div className="donation-header">

        <h2>
          Last Donation
        </h2>

        <div className="completed-badge">

          <CheckCircle2 size={14} />

          Completed

        </div>

      </div>

      <div className="hospital-section">

        <div className="hospital-icon">
          <Building2 size={20} />
        </div>

        <div>

          <h3>
            City Care Hospital
          </h3>

          <p>
            Emergency Blood Request
          </p>

        </div>

      </div>

      <div className="donation-details">

        <div>

          <CalendarDays size={16} />

          <span>
            12 March 2026
          </span>

        </div>

        <div>

          <Droplets size={16} />

          <span>
            O+ Blood
          </span>

        </div>

      </div>

    </div>
  );
}