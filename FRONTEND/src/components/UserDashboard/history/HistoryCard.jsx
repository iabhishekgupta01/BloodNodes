// HistoryCard.jsx

import "./HistoryCard.css";

import {
  Building2,
  CalendarDays,
  Droplets,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function HistoryCard({
  item,
}) {
  return (
    <div className="history-card">

      {/* LEFT */}

      <div className="history-left">

        <div className="hospital-icon">

          <Building2 size={20} />

        </div>

        <div>

          <h3>
            {item.hospital}
          </h3>

          <div className="history-meta">

            <span>

              <CalendarDays size={14} />

              {item.date}

            </span>

            <span>

              <Droplets size={14} />

              {item.blood}

            </span>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="history-right">

        <div className="units-box">

          🧪 {item.units} Unit

        </div>

        <div
          className={
            item.status === "Completed"
              ? "status-badge completed"
              : "status-badge pending"
          }
        >

          {item.status === "Completed" ? (
            <CheckCircle2 size={14} />
          ) : (
            <Clock3 size={14} />
          )}

          {item.status}

        </div>

      </div>

    </div>
  );
}