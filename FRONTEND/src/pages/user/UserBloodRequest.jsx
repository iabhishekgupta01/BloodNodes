import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Droplets,
  User,
  Building2,
  Phone,
  MapPin,
  Clock3,
  HeartPulse,
  Navigation,
  Check,
  X,
} from "lucide-react";

import "./UserBloodRequest.css";

const UserBloodRequest = () => {
  const request = {
    patient: "Rahul Sharma",
    age: 32,
    blood: "O+",

    hospital: "CityCare Hospital",
    hospitalPhone:
      "+91 9876543210",

    distance: "2.4 km away",
    posted: "12 mins ago",

    urgency: "Critical",
    status: "Active",

    unitsNeeded: 2,
    unitsFulfilled: 1,

    description:
      "Urgent blood required for emergency surgery. Donors should carry valid ID proof before visiting hospital.",
  };

  const progress =
    (request.unitsFulfilled /
      request.unitsNeeded) *
    100;

  return (
    <><Header />
    <div className="user-request-page section-sm fade-up">
      <div className="container">
        <div className="request-layout">
          {/* LEFT */}

          <div className="request-main">
            {/* PATIENT CARD */}

            <div className="request-card">
              {/* TOP */}

              <div className="request-top">
                <div className="blood-icon">
                  <Droplets />
                </div>

                <div className="top-info">
                  <div className="title-row">
                    <h2>
                      {
                        request.patient
                      }
                    </h2>

                    <span className="blood-tag">
                      {
                        request.blood
                      }
                    </span>

                    <span className="status-tag">
                      {
                        request.status
                      }
                    </span>
                  </div>

                  <div className="mini-info">
                    <span>
                      <User
                        size={12}
                      />
                      {
                        request.age
                      }{" "}
                      yrs
                    </span>

                    <span>
                      <Clock3
                        size={12}
                      />
                      {
                        request.posted
                      }
                    </span>

                    <span>
                      <HeartPulse
                        size={12}
                      />
                      {
                        request.urgency
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* HOSPITAL */}

              <div className="hospital-strip">
                <span>
                  <Building2
                    size={13}
                  />
                  {
                    request.hospital
                  }
                </span>

                <span>
                  <Phone
                    size={13}
                  />
                  {
                    request.hospitalPhone
                  }
                </span>

                <span>
                  <MapPin
                    size={13}
                  />
                  {
                    request.distance
                  }
                </span>
              </div>

              {/* PROGRESS */}

              <div className="progress-section">
                <div className="progress-top">
                  <span>
                    Blood Units
                  </span>

                  <strong>
                    {
                      request.unitsFulfilled
                    }
                    /
                    {
                      request.unitsNeeded
                    }{" "}
                    Fulfilled
                  </strong>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="description-box">
                <p>
                  {
                    request.description
                  }
                </p>
              </div>

              {/* ACTIONS */}

              <div className="action-row">
                <button className="accept-btn">
                  <Check size={14} />
                  Accept Request
                </button>

                <button className="reject-btn">
                  <X size={14} />
                  Reject
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}

          <div className="map-card">
            <div className="map-header">
              <div>
                <h3>
                  Hospital Location
                </h3>

                <p>
                  {
                    request.distance
                  }{" "}
                  from your current
                  location
                </p>
              </div>

              <button className="navigate-btn">
                <Navigation
                  size={14}
                />
                Navigate
              </button>
            </div>

            {/* MAP */}

            <div className="dummy-map">
              <div className="hospital-point">
                H
              </div>

              <div className="user-point">
                Y
              </div>

              <div className="map-line"></div>

              <div className="distance-pill">
                2.4 km
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer /></>
  );
};

export default UserBloodRequest;