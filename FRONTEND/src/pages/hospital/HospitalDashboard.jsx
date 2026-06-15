import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Bell,
  Activity,
  Droplets,
  Plus,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Clock3,
  CalendarDays,
  Shield,
  Sparkles,
  Building2,
  HeartPulse,
  TrendingUp,
  Users,
  Syringe,
  ChevronRight,
} from "lucide-react";

import "./HospitalDashboard.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HospitalDashboard = () => {
  const navigate = useNavigate();

  const requests = [
    {
      id: "rahul-sharma",
      patient: "Rahul Sharma",
      blood: "O+",
      progress: 50,
      units: "1/2",
      urgent: true,
    },

    {
      id: "anjali-patel",
      patient: "Anjali Patel",
      blood: "A+",
      progress: 100,
      units: "2/2",
      urgent: false,
    },
  ];

  const inventory = [
    {
      group: "O+",
      units: 16,
      percent: 82,
    },

    {
      group: "A+",
      units: 7,
      percent: 45,
    },

    {
      group: "AB-",
      units: 2,
      percent: 14,
      low: true,
    },

    {
      group: "B+",
      units: 11,
      percent: 66,
    },
  ];

  return (
    <><Header />
    <div className="hospital-dashboard">
      {/* BACKGROUND */}

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      <div className="container section-sm">
        {/* HERO */}

        <div className="dashboard-hero fade-up">
          <div>
            <div className="hero-chip">
              <Sparkles size={13} />
              BloodNode Hospital Panel
            </div>

            <h1>
              Hospital Dashboard
            </h1>

            <p>
              Real-time blood request &
              inventory monitoring
            </p>
          </div>

          <button
            type="button"
            className="hero-btn"
            onClick={() =>
              navigate(
                "/hospital/blood-requests/create"
              )
            }
          >
            <Plus size={16} />
            Create Request
          </button>
        </div>

        {/* LAYOUT */}

        <div className="dashboard-layout">
          {/* LEFT PANEL */}

          <aside className="left-panel">
            {/* NOTIFICATIONS */}

            <div className="dash-card glass fade-up">
              <div className="card-head">
                <h3>
                  <Bell size={15} />
                  Notifications
                </h3>

                <span className="live-pill">
                  Live
                </span>
              </div>

              <div className="notify-list">
                <button
                  type="button"
                  className="notify-item"
                  onClick={() =>
                    navigate(
                      "/hospital/blood-requests/rahul-sharma"
                    )
                  }
                >
                  <div className="notify-icon blue">
                    <Droplets
                      size={15}
                    />
                  </div>

                  <div>
                    <h4>
                      O+ request accepted
                    </h4>

                    <p>
                      2 mins ago
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                  />
                </button>

                <button
                  type="button"
                  className="notify-item"
                  onClick={() =>
                    navigate(
                      "/hospital/inventory"
                    )
                  }
                >
                  <div className="notify-icon yellow">
                    <AlertCircle
                      size={15}
                    />
                  </div>

                  <div>
                    <h4>
                      Low AB- stock
                    </h4>

                    <p>
                      Immediate refill
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                  />
                </button>

                <button
                  type="button"
                  className="notify-item"
                  onClick={() =>
                    navigate(
                      "/hospital/notifications"
                    )
                  }
                >
                  <div className="notify-icon green">
                    <CheckCircle2
                      size={15}
                    />
                  </div>

                  <div>
                    <h4>
                      Request fulfilled
                    </h4>

                    <p>
                      12 mins ago
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                  />
                </button>
              </div>
            </div>

            {/* MINI ALERT */}

            <div className="mini-alert-card fade-up">
              <div className="alert-glow"></div>

              <div className="mini-alert-content">
                <HeartPulse size={18} />

                <div>
                  <h4>
                    Emergency Active
                  </h4>

                  <p>
                    2 requests need quick
                    response
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/hospital/notifications"
                  )
                }
              >
                Manage
              </button>
            </div>
          </aside>

          {/* CENTER */}

          <main className="center-panel">
            {/* ACTIONS */}

            <div className="actions-grid fade-up">
              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/hospital/blood-requests/create"
                  )
                }
              >
                <Plus size={18} />
                <span>
                  Create Request
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/hospital/camps/create")
                }
              >
                <CalendarDays
                  size={18}
                />
                <span>
                  Create Camp
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/hospital/inventory")
                }
              >
                <Droplets
                  size={18}
                />
                <span>
                  Inventory
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/hospital/dashboard")
                }
              >
                <Building2
                  size={18}
                />
                <span>
                  Hospital
                </span>
              </button>
            </div>

            {/* ACTIVE REQUESTS */}

            <div className="dash-card solid fade-up">
              <div className="card-head">
                <h3>
                  <Activity size={15} />
                  Active Requests
                </h3>

                <button
                  type="button"
                  className="view-btn"
                  onClick={() =>
                    navigate(
                      "/hospital/blood-requests"
                    )
                  }
                >
                  View All
                </button>
              </div>

              <div className="request-list">
                {requests.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      className="request-card"
                      key={index}
                    >
                      <div className="request-top">
                        <div>
                          <div className="request-title">
                            <h4>
                              {
                                item.patient
                              }
                            </h4>

                            <span className="blood-pill">
                              {
                                item.blood
                              }
                            </span>

                            {item.urgent && (
                              <span className="urgent-pill">
                                Critical
                              </span>
                            )}
                          </div>

                          <p>
                            {
                              item.units
                            }{" "}
                            fulfilled
                          </p>
                        </div>

                        <button
                          type="button"
                          className="mini-btn"
                          onClick={() =>
                            navigate(
                              `/hospital/blood-requests/${item.id}`
                            )
                          }
                        >
                          <ArrowUpRight
                            size={14}
                          />
                        </button>
                      </div>

                      <div className="progress">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${item.progress}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* LOWER GRID */}

            <div className="lower-grid">
              {/* ACTIVITY */}

              <div className="dash-card glass fade-up">
                <div className="card-head">
                  <h3>
                    <Clock3
                      size={15}
                    />
                    Activity
                  </h3>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h4>
                        Inventory updated
                      </h4>

                      <p>
                        O+ stock increased
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h4>
                        Request fulfilled
                      </h4>

                      <p>
                        Rahul Sharma case
                        completed
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h4>
                        New camp created
                      </h4>

                      <p>
                        Indore donation
                        camp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HOSPITAL STATUS */}

              <div className="dash-card glass fade-up">
                <div className="card-head">
                  <h3>
                    <Shield
                      size={15}
                    />
                    Hospital Status
                  </h3>
                </div>

                <div className="status-list">
                  <div>
                    <span>
                      Verified
                    </span>

                    <strong>
                      Yes
                    </strong>
                  </div>

                  <div>
                    <span>
                      Response Rate
                    </span>

                    <strong>
                      94%
                    </strong>
                  </div>

                  <div>
                    <span>
                      Active Requests
                    </span>

                    <strong>
                      12
                    </strong>
                  </div>

                  <div>
                    <span>
                      Donations Today
                    </span>

                    <strong>
                      18
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* ANALYTICS SECTION */}

            <div className="analytics-section fade-up">
              <div className="analytics-head">
                <h3>
                  <TrendingUp
                    size={16}
                  />
                  Analytics Overview
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/hospital/notifications")
                  }
                >
                  More
                  <ChevronRight
                    size={14}
                  />
                </button>
              </div>

              <div className="analytics-grid">
                <div className="analytics-card">
                  <div className="analytics-icon blue">
                    <Activity
                      size={18}
                    />
                  </div>

                  <div>
                    <h4>
                      126
                    </h4>

                    <p>
                      Total Requests
                    </p>
                  </div>
                </div>

                <div className="analytics-card">
                  <div className="analytics-icon green">
                    <Users
                      size={18}
                    />
                  </div>

                  <div>
                    <h4>38</h4>

                    <p>
                      Active Donors
                    </p>
                  </div>
                </div>

                <div className="analytics-card">
                  <div className="analytics-icon purple">
                    <Syringe
                      size={18}
                    />
                  </div>

                  <div>
                    <h4>7</h4>

                    <p>
                      Donation Camps
                    </p>
                  </div>
                </div>

                <div className="analytics-card">
                  <div className="analytics-icon orange">
                    <TrendingUp
                      size={18}
                    />
                  </div>

                  <div>
                    <h4>
                      94%
                    </h4>

                    <p>
                      Success Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* RIGHT */}

          <aside className="right-panel">
            <div className="dash-card solid inventory-card fade-up">
              <div className="card-head">
                <h3>
                  <Droplets
                    size={15}
                  />
                  Blood Inventory
                </h3>
              </div>

              <div className="inventory-list">
                {inventory.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      className="inventory-item"
                      key={index}
                    >
                      <div className="inventory-top">
                        <span>
                          {
                            item.group
                          }
                        </span>

                        <strong>
                          {
                            item.units
                          }
                        </strong>
                      </div>

                      <div className="inventory-bar">
                        <div
                          className={`inventory-fill ${
                            item.low
                              ? "low"
                              : ""
                          }`}
                          style={{
                            width: `${item.percent}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <button
                type="button"
                className="inventory-btn"
                onClick={() =>
                  navigate("/hospital/inventory")
                }
              >
                Update Inventory
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <Footer /></>
  );
};

export default HospitalDashboard;