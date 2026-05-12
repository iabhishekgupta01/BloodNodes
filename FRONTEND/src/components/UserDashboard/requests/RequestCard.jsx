// RequestCard.jsx

import "./RequestCard.css";

import {
  Droplets,
  MapPin,
  Clock3,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function RequestCard({
  request,
  onClick,
  active,
  accepted,
}) {
  return (
    <div
      className={
        active
          ? "request-card active-request-card"
          : "request-card"
      }
      onClick={onClick}
    >

      {/* TOP */}

      <div className="request-card-top">

        <div>

          <div className="hospital-row">

            <h3>
              {request.hospital}
            </h3>

            <span className="verified-badge">

              <ShieldCheck size={12} />

              Verified

            </span>

          </div>

          <div className="request-time">

            <Clock3 size={13} />

            {request.time}

          </div>

        </div>

        <div
          className={
            request.urgency === "Critical"
              ? "urgency-badge critical"
              : "urgency-badge urgent"
          }
        >

          <AlertTriangle size={13} />

          {request.urgency}

        </div>

      </div>

      {/* BLOOD */}

      <div className="blood-section">

        <div className="blood-group">

          <Droplets size={18} />

          <span>
            {request.blood}
          </span>

        </div>

        <div className="units-needed">

          🧪 {request.units} Units

        </div>

      </div>

      {/* BOTTOM */}

      <div className="request-footer">

        <div className="distance">

          <MapPin size={14} />

          {request.distance}

        </div>

        {!accepted ? (

          <button className="view-btn">

            View Details

            <ArrowRight size={15} />

          </button>

        ) : (

          <div className="accepted-status">

            Accepted

          </div>

        )}

      </div>

    </div>
  );
}