import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import {
  Search,
  Filter,
  CalendarDays,
  Clock3,
  Droplets,
  AlertTriangle,
  CircleCheckBig,
  XCircle,
  Activity,
  Eye,
  Plus,
  ArrowUpRight,
} from "lucide-react";

import "./HospitalBloodRequests.css";

const HospitalBloodRequests = () => {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const requests = [
    {
      id: 1,
      patient: "Rahul Sharma",
      blood: "O+",
      units: 2,
      fulfilled: 1,
      status: "Active",
      urgency: "Critical",
      created: "2 hours ago",
      date: "15 May 2026",
    },

    {
      id: 2,
      patient: "Anjali Patel",
      blood: "A+",
      units: 1,
      fulfilled: 1,
      status: "Fulfilled",
      urgency: "Normal",
      created: "Yesterday",
      date: "14 May 2026",
    },

    {
      id: 3,
      patient: "Vikas Jain",
      blood: "B+",
      units: 2,
      fulfilled: 0,
      status: "Closed",
      urgency: "Critical",
      created: "3 days ago",
      date: "12 May 2026",
    },

    {
      id: 4,
      patient: "Neha Verma",
      blood: "AB+",
      units: 1,
      fulfilled: 0,
      status: "Active",
      urgency: "Emergency",
      created: "5 mins ago",
      date: "15 May 2026",
    },
  ];

  const filters = [
    "All",
    "Active",
    "Emergency",
    "Fulfilled",
    "Closed",
  ];

  return (
    <><Header />
    <div className="hospital-requests-page section fade-up">
      <div className="container">
        {/* TOP */}

        <div className="requests-topbar">
          <div>
            <h2>Blood Requests</h2>

            <p>
              Manage all hospital blood
              requests
            </p>
          </div>

          <button className="primary-btn create-btn">
            <Plus size={18} />
            Create Request
          </button>
        </div>

        {/* FILTERS */}

        <div className="card filters-card">
          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search patient or blood group"
            />
          </div>

          <div className="filters-right">
            <div className="filter-input">
              <Clock3 size={16} />

              <select>
                <option>
                  Most Recent
                </option>

                <option>
                  Oldest First
                </option>

                <option>
                  Units Needed
                </option>
              </select>
            </div>

            <div className="filter-input">
              <CalendarDays size={16} />

              <input type="date" />
            </div>
          </div>
        </div>

        {/* STATUS FILTERS */}

        <div className="status-filters">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() =>
                setActiveFilter(item)
              }
              className={`status-filter-btn ${
                activeFilter === item
                  ? "active-filter"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* REQUESTS */}

        <div className="requests-grid">
          {requests.map((request) => {
            const percentage =
              (request.fulfilled /
                request.units) *
              100;

            return (
              <div
                className="request-card"
                key={request.id}
              >
                {/* CLICKABLE AREA */}

                <div className="request-card-content">
                  <div className="request-top">
                    <div className="blood-icon">
                      <Droplets />
                    </div>

                    <div className="request-info">
                      <div className="request-title-row">
                        <h3>
                          {
                            request.patient
                          }
                        </h3>

                        <ArrowUpRight
                          size={18}
                          className="arrow-icon"
                        />
                      </div>

                      <div className="request-tags">
                        <span className="blood-tag">
                          {
                            request.blood
                          }
                        </span>

                        <span
                          className={`status-tag ${
                            request.status ===
                            "Active"
                              ? "active-tag"
                              : request.status ===
                                "Closed"
                              ? "closed-tag"
                              : "fulfilled-tag"
                          }`}
                        >
                          {
                            request.status
                          }
                        </span>

                        {(request.urgency ===
                          "Critical" ||
                          request.urgency ===
                            "Emergency") && (
                          <span className="urgent-tag">
                            <AlertTriangle size={13} />
                            {
                              request.urgency
                            }
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div className="request-details">
                    <div>
                      <span>
                        Units
                      </span>

                      <h4>
                        {
                          request.fulfilled
                        }
                        /
                        {
                          request.units
                        }
                      </h4>
                    </div>

                    <div>
                      <span>
                        Posted
                      </span>

                      <h4>
                        {
                          request.created
                        }
                      </h4>
                    </div>

                    <div>
                      <span>
                        Date
                      </span>

                      <h4>
                        {
                          request.date
                        }
                      </h4>
                    </div>
                  </div>

                  {/* PROGRESS */}

                  <div className="progress-wrapper">
                    <div className="progress-top">
                      <span>
                        Fulfillment
                      </span>

                      <span>
                        {percentage}%
                      </span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* QUICK TOOLS */}

                <div className="request-tools">
                  <button>
                    <Eye size={16} />
                  </button>

                  <button>
                    <Activity size={16} />
                  </button>

                  <button>
                    <CircleCheckBig
                      size={16}
                    />
                  </button>

                  <button className="danger-tool">
                    <XCircle size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer/></>
  );
};

export default HospitalBloodRequests;