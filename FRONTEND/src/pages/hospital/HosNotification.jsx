import React from "react";

import {
  Bell,
  Droplets,
  MapPin,
  Phone,
  ArrowUpRight,
  Clock3,
  AlertCircle,
  MessageCircleMore,
} from "lucide-react";

import "./HosNotification.css";

const HosNotification = () => {
  const notifications = [
    {
      id: 1,
      type: "donor",
      donor: "Aman Verma",
      blood: "O+",
      distance: "2.4 km",
      phone: "+91 9876543210",
      request: "Rahul Sharma Request",
      time: "2m ago",
    },

    {
      id: 2,
      type: "message",
      title: "Low O- Inventory",
      message:
        "Only 2 units remaining",
      time: "12m ago",
    },

    {
      id: 3,
      type: "donor",
      donor: "Neha Patel",
      blood: "A+",
      distance: "5.1 km",
      phone: "+91 9123456789",
      request: "Anjali Patel Request",
      time: "20m ago",
    },

    {
      id: 4,
      type: "message",
      title: "Request Closed",
      message:
        "Vikas Jain request fulfilled",
      time: "1h ago",
    },
  ];

  return (
    <div className="hos-notify-page section-sm fade-up">
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
              {/* DONOR */}

              {item.type === "donor" && (
                <>
                  <div className="notify-main">
                    <div className="notify-icon donor-icon">
                      <Droplets />
                    </div>

                    <div className="notify-info">
                      <div className="notify-row">
                        <h4>
                          {item.donor}
                        </h4>

                        <span className="blood-tag">
                          {item.blood}
                        </span>
                      </div>

                      <p>
                        accepted blood
                        request
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

                        <span>
                          <Phone
                            size={11}
                          />
                          {
                            item.phone
                          }
                        </span>
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
                        "Low"
                      ) ? (
                        <AlertCircle />
                      ) : (
                        <MessageCircleMore />
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
  );
};

export default HosNotification;