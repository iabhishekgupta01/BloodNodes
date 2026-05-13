import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  HeartHandshake,
  CalendarDays,
  MapPin,
  Clock3,
  Droplets,
  CheckCircle2,
  Award,
  ArrowUpRight,
} from "lucide-react";

import "./UserDonationHistory.css";

const UserDonationHistory = () => {
  const donations = [
    {
      id: 1,
      hospital: "CityCare Hospital",
      blood: "O+",
      units: 1,
      location: "Indore",
      date: "15 May 2026",
      time: "10:24 AM",
      status: "Completed",
    },

    {
      id: 2,
      hospital: "Apollo Hospital",
      blood: "A+",
      units: 1,
      location: "Bhopal",
      date: "12 Feb 2026",
      time: "03:40 PM",
      status: "Completed",
    },

    {
      id: 3,
      hospital: "Medilife Hospital",
      blood: "O+",
      units: 1,
      location: "Ujjain",
      date: "21 Oct 2025",
      time: "11:15 AM",
      status: "Completed",
    },
  ];

  return (
    <><Header />
    <div className="donation-history-page section-sm fade-up">
      <div className="container">
        {/* TOP */}

        <div className="history-top">
          <div>
            <h2>
              Donation History
            </h2>

            <p>
              Your recent blood donations
            </p>
          </div>

          <div className="history-badge">
            <Award size={15} />3 Donations
          </div>
        </div>

        {/* STATS */}

        <div className="history-stats">
          <div className="stat-card">
            <HeartHandshake
              size={18}
            />
            <div>
              <h3>3</h3>
              <p>Total Donations</p>
            </div>
          </div>

          <div className="stat-card">
            <Droplets size={18} />
            <div>
              <h3>O+</h3>
              <p>Blood Group</p>
            </div>
          </div>

          <div className="stat-card">
            <CheckCircle2
              size={18}
            />
            <div>
              <h3>100%</h3>
              <p>Successful</p>
            </div>
          </div>
        </div>

        {/* LIST */}

        <div className="history-list">
          {donations.map((item) => (
            <div
              className="history-card"
              key={item.id}
            >
              {/* LEFT */}

              <div className="history-main">
                <div className="blood-icon">
                  <Droplets />
                </div>

                <div className="history-info">
                  <div className="title-row">
                    <h3>
                      {
                        item.hospital
                      }
                    </h3>

                    <span className="blood-tag">
                      {
                        item.blood
                      }
                    </span>
                  </div>

                  <div className="history-meta">
                    <span>
                      <CalendarDays
                        size={12}
                      />
                      {item.date}
                    </span>

                    <span>
                      <Clock3
                        size={12}
                      />
                      {item.time}
                    </span>

                    <span>
                      <MapPin
                        size={12}
                      />
                      {
                        item.location
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="history-side">
                <span className="status-tag">
                  {
                    item.status
                  }
                </span>

                <button className="open-btn">
                  <ArrowUpRight
                    size={14}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer /></>
  );
};

export default UserDonationHistory;