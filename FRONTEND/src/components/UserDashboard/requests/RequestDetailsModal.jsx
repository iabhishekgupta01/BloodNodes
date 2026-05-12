// RequestDetailsModal.jsx

import "./RequestDetailsModal.css";

import {
  X,
  Phone,
  MapPin,
  ShieldCheck,
  Clock3,
  Droplets,
  Navigation,
} from "lucide-react";

export default function RequestDetailsModal({
  request,
  onClose,
  onAccept,
  acceptedRequest,
}) {

  if (!request) return null;

  return (
    <div className="modal-overlay">

      <div className="request-modal">

        {/* CLOSE */}

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {/* IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
          alt="Hospital"
          className="modal-image"
        />

        {/* CONTENT */}

        <div className="modal-content">

          <div className="modal-top">

            <div>

              <h2>
                {request.hospital}
              </h2>

              <div className="verified">

                <ShieldCheck size={14} />

                Verified Hospital

              </div>

            </div>

            <div
              className={
                request.urgency === "Critical"
                  ? "modal-urgency critical"
                  : "modal-urgency urgent"
              }
            >
              {request.urgency}
            </div>

          </div>

          <p className="patient-description">

            Emergency surgery patient requires
            immediate blood donation support.

          </p>

          {/* INFO GRID */}

          <div className="modal-grid">

            <div>

              <Droplets size={16} />

              <span>
                Blood Group:
              </span>

              <strong>
                {request.blood}
              </strong>

            </div>

            <div>

              🧪

              <span>
                Units Needed:
              </span>

              <strong>
                {request.units}
              </strong>

            </div>

            <div>

              <Clock3 size={16} />

              <span>
                Request Time:
              </span>

              <strong>
                {request.time}
              </strong>

            </div>

            <div>

              <Navigation size={16} />

              <span>
                Distance:
              </span>

              <strong>
                {request.distance}
              </strong>

            </div>

            <div>

              <Phone size={16} />

              <span>
                Contact:
              </span>

              <strong>
                +91 9876543210
              </strong>

            </div>

            <div>

              <MapPin size={16} />

              <span>
                Address:
              </span>

              <strong>
                Bhopal Medical Road
              </strong>

            </div>

          </div>

          {/* BUTTON */}

          {!acceptedRequest ? (

            <button
              className="accept-request-btn"
              onClick={onAccept}
            >
              Accept Request
            </button>

          ) : (

            <div className="already-accepted">

              Request Already Accepted

            </div>

          )}

        </div>

      </div>

    </div>
  );
}