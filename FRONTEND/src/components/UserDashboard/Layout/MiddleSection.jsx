// MiddleSection.jsx

import "./MiddleSection.css";

import {
  HeartPulse,
  CheckCircle2,
  ArrowRight,
  Navigation,
  Clock3,
  MapPin,
} from "lucide-react";

export default function MiddleSection({
  acceptedRequest,
  setAcceptedRequest,
  selectedRequest,
  locationShared,
  setLocationShared,
}) {

  const handleAccept = () => {

    if (!locationShared) {

      const allow = window.confirm(
        "Share location for route guidance?"
      );

      if (allow) {
        setLocationShared(true);
      }

      return;
    }

    setAcceptedRequest(selectedRequest);
  };

  return (
    <div className="middle-section">

      {/* ELIGIBILITY */}

      {!acceptedRequest && (
        <div className="dashboard-card">

          <div className="section-title">

            <div>
              <h2>Eligibility Check</h2>
              <p>
                Complete quick screening
              </p>
            </div>

          </div>

          <div className="eligibility-progress">

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span>65%</span>

          </div>

          <div className="question-card">

            <div className="question-icon">
              <HeartPulse size={24} />
            </div>

            <h3>
              Are you feeling healthy today?
            </h3>

            <div className="question-actions">

              <button className="primary-btn">
                Yes
              </button>

              <button className="secondary-btn">
                No
              </button>

            </div>

          </div>

        </div>
      )}

      {/* REQUEST DETAILS */}

      {!acceptedRequest && selectedRequest && (

        <div className="dashboard-card">

          <div className="request-details">

            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
              alt="Hospital"
            />

            <div className="details-content">

              <div className="details-top">

                <h2>
                  {selectedRequest.hospital}
                </h2>

                <span className="verified-badge">
                  <CheckCircle2 size={15} />
                  Verified
                </span>

              </div>

              <p className="patient-info">
                Emergency surgery patient requires
                immediate blood support.
              </p>

              <div className="details-grid">

                <div>
                  🩸 Blood Group:
                  <strong>
                    {selectedRequest.blood}
                  </strong>
                </div>

                <div>
                  📍 Distance:
                  <strong>
                    {selectedRequest.distance}
                  </strong>
                </div>

                <div>
                  🏥 Address:
                  <strong>
                    Bhopal Medical Road
                  </strong>
                </div>

                <div>
                  📞 Contact:
                  <strong>
                    +91 9876543210
                  </strong>
                </div>

              </div>

              <div className="details-actions">

                <button
                  className="primary-btn"
                  onClick={handleAccept}
                  disabled={acceptedRequest}
                >
                  Accept Request
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* MAP SECTION */}

      {acceptedRequest && (

        <div className="dashboard-card">

          <div className="section-title">

            <div>
              <h2>Route Navigation</h2>

              <p>
                Navigate to hospital
              </p>
            </div>

          </div>

          <div className="map-card">

            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
              alt="Map"
            />

          </div>

          <div className="route-info">

            <div className="route-box">
              <Navigation size={16} />
              3.2 km
            </div>

            <div className="route-box">
              <Clock3 size={16} />
              12 mins
            </div>

            <div className="route-box">
              <MapPin size={16} />
              {acceptedRequest.hospital}
            </div>

          </div>

        </div>

      )}

      {/* HISTORY */}

      {!acceptedRequest && (
        <div className="dashboard-card">

          <div className="section-title">

            <div>
              <h2>Donation History</h2>

              <p>
                Recent donations
              </p>
            </div>

          </div>

          <div className="history-list">

            <div className="history-item">

              <div>
                <h3>
                  City Care Hospital
                </h3>

                <p>
                  12 March 2026
                </p>
              </div>

              <span>
                Completed
              </span>

            </div>

            <div className="history-item">

              <div>
                <h3>
                  Apollo Hospital
                </h3>

                <p>
                  18 February 2026
                </p>
              </div>

              <span>
                Completed
              </span>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}