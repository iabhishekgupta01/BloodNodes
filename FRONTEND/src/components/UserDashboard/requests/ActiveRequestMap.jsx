// ActiveRequestMap.jsx

import "./ActiveRequestMap.css";

import {
  Navigation,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  XCircle,
} from "lucide-react";

export default function ActiveRequestMap({
  acceptedRequest,
  onCancel,
}) {

  if (!acceptedRequest) return null;

  return (
    <div className="active-map-wrapper">

      {/* TOP */}

      <div className="map-header">

        <div>

          <div className="live-badge">
            <AlertTriangle size={15} />
            Emergency Route Active
          </div>

          <h2>
            Navigate To Hospital
          </h2>

          <p>
            Follow shortest route guidance
          </p>

        </div>

        <button
          className="cancel-route-btn"
          onClick={onCancel}
        >
          <XCircle size={18} />
          Cancel
        </button>

      </div>

      {/* HOSPITAL CARD */}

      <div className="hospital-route-card">

        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
          alt="Hospital"
        />

        <div className="hospital-content">

          <div className="hospital-top">

            <div>

              <h3>
                {acceptedRequest.hospital}
              </h3>

              <div className="verified-hospital">

                <ShieldCheck size={14} />

                Verified Hospital

              </div>

            </div>

            <div className="blood-needed">

              🩸 {acceptedRequest.blood}

            </div>

          </div>

          <div className="hospital-info-grid">

            <div>

              <Navigation size={16} />

              <span>
                Distance
              </span>

              <strong>
                {acceptedRequest.distance}
              </strong>

            </div>

            <div>

              <Clock3 size={16} />

              <span>
                ETA
              </span>

              <strong>
                12 mins
              </strong>

            </div>

            <div>

              <Phone size={16} />

              <span>
                Contact
              </span>

              <strong>
                +91 9876543210
              </strong>

            </div>

            <div>

              <MapPin size={16} />

              <span>
                Address
              </span>

              <strong>
                Bhopal Medical Road
              </strong>

            </div>

          </div>

        </div>

      </div>

      {/* MAP */}

      <div className="route-map-card">

        {/* MAP IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
          alt="Route Map"
          className="map-image"
        />

        {/* ROUTE OVERLAY */}

        <div className="route-overlay">

          <div className="route-point current-point">
            📍 You
          </div>

          <ArrowRight size={22} />

          <div className="route-point hospital-point">
            🏥 Hospital
          </div>

        </div>

      </div>

      {/* BOTTOM ACTIONS */}

      <div className="route-actions">

        <button className="navigate-btn">

          <Navigation size={18} />

          Start Navigation

        </button>

        <button className="contact-btn">

          <Phone size={18} />

          Contact Hospital

        </button>

      </div>

    </div>
  );
}