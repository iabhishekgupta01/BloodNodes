import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Bell,
  Droplets,
  MapPin,
  Clock3,
  ArrowUpRight,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

import "./UserNotify.css";

const UserNotify = () => {
  const notifications = [
    {
      id: 1,
      type: "request",
      patient: "Rahul Sharma",
      blood: "O+",
      hospital: "CityCare Hospital",
      distance: "2.3 km",
      time: "3m ago",
    },

    {
      id: 2,
      type: "message",
      title: "Donation Approved",
      message:
        "Your donor request was accepted.",
      time: "18m ago",
    },

    {
      id: 3,
      type: "request",
      patient: "Neha Patel",
      blood: "A+",
      hospital: "Apollo Hospital",
      distance: "5.8 km",
      time: "32m ago",
    },

    {
      id: 4,
      type: "message",
      title: "Thank You",
      message:
        "You helped save a patient today.",
      time: "1h ago",
    },
  ];

  return (
    <><Header />
    <div className="user-notify-page section-sm fade-up">
      <div className="container">
        {/* TOP */}

        <div className="notify-top">
          <div className="notify-heading">
            <Bell size={17} />
            <h3>Notifications</h3>
          </div>

          <span className="notify-count">
            4 New
          </span>
        </div>

        {/* LIST */}

        <div className="notify-list">
          {notifications.map((item) => (
            <div
              className="notify-card"
              key={item.id}
            >
              {/* BLOOD REQUEST */}

              {item.type === "request" && (
                <>
                  <div className="notify-main">
                    <div className="notify-icon request-icon">
                      <Droplets />
                    </div>

                    <div className="notify-info">
                      <div className="notify-row">
                        <h4>
                          {
                            item.patient
                          }
                        </h4>

                        <span className="blood-tag">
                          {
                            item.blood
                          }
                        </span>
                      </div>

                      <p>
                        Blood request from{" "}
                        {
                          item.hospital
                        }
                      </p>

                      <div className="notify-meta">
                        <span>
                          <MapPin
                            size={11}
                          />
                          {
                            item.distance
                          }
                        </span>
                      </div>

                      {/* QUICK ACTIONS */}

                      <div className="quick-actions">
                        <button className="accept-btn">
                          Accept
                        </button>

                        <button className="reject-btn">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="notify-side">
                    <button className="open-btn">
                      <ArrowUpRight
                        size={14}
                      />
                    </button>

                    <span className="notify-time">
                      <Clock3
                        size={11}
                      />
                      {item.time}
                    </span>
                  </div>
                </>
              )}

              {/* MESSAGE */}

              {item.type === "message" && (
                <>
                  <div className="notify-main">
                    <div className="notify-icon message-icon">
                      {item.title.includes(
                        "Approved"
                      ) ? (
                        <CheckCircle2 />
                      ) : (
                        <HeartHandshake />
                      )}
                    </div>

                    <div className="notify-info">
                      <div className="notify-row">
                        <h4>
                          {item.title}
                        </h4>
                      </div>

                      <p>
                        {
                          item.message
                        }
                      </p>
                    </div>
                  </div>

                  <div className="notify-side">
                    <span className="notify-time">
                      <Clock3
                        size={11}
                      />
                      {item.time}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer /></>
  );
};

export default UserNotify;