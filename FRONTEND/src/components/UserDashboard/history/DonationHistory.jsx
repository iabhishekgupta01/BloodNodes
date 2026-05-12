// DonationHistory.jsx

import "./DonationHistory.css";

import {
  Clock3,
  ArrowRight,
} from "lucide-react";

import HistoryCard from "./HistoryCard";

const historyData = [
  {
    id: 1,
    hospital: "City Care Hospital",
    blood: "O+",
    date: "12 March 2026",
    status: "Completed",
    units: 1,
  },

  {
    id: 2,
    hospital: "Apollo Hospital",
    blood: "B+",
    date: "18 February 2026",
    status: "Completed",
    units: 2,
  },

  {
    id: 3,
    hospital: "People's Hospital",
    blood: "A-",
    date: "07 January 2026",
    status: "Pending",
    units: 1,
  },
];

export default function DonationHistory() {
  return (
    <div className="donation-history-wrapper">

      {/* HEADER */}

      <div className="history-header">

        <div>

          <h2>
            Donation History
          </h2>

          <p>
            Your recent donations and requests
          </p>

        </div>

        <button className="view-all-btn">

          View Full

          <ArrowRight size={16} />

        </button>

      </div>

      {/* LIST */}

      <div className="history-cards-list">

        {historyData.map((item) => (

          <HistoryCard
            key={item.id}
            item={item}
          />

        ))}

      </div>

      {/* FOOTER */}

      <div className="history-footer">

        <div className="history-summary">

          <Clock3 size={16} />

          Last donation was 58 days ago

        </div>

      </div>

    </div>
  );
}