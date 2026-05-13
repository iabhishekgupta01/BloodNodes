import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Droplets,
  Pencil,
  Activity,
  Users,
  CircleCheckBig,
  Clock3,
  FileText,
  Download,
  Share2,
  CheckCircle2,
  XCircle,
  HeartPulse,
  MapPin,
  CalendarDays,
  Phone,
} from "lucide-react";

import "./HospitalBloodRequestDetails.css";

const HospitalBloodRequestDetails = () => {
  const [status, setStatus] =
    useState("Active");

  const request = {
    patient: "Rahul Sharma",
    bloodGroup: "O+",
    age: 24,
    city: "Indore",
    date: "15 May 2026",
    unitsNeeded: 2,
    unitsFulfilled: 1,
    urgency: "Critical",
    phone: "+91 9876543210",

    description:
      "Rahul Sharma requires urgent O+ blood for a scheduled surgery. Donors should be medically fit and carry valid ID proof during the donation process.",

    donors: [
      {
        name: "Aman Verma",
        blood: "O+",
        donations: 4,
        distance: 3.2,
        status: "Confirmed",
      },

      {
        name: "Rohit Patel",
        blood: "O+",
        donations: 2,
        distance: 6.5,
        status: "Pending",
      },

      {
        name: "Vikas Jain",
        blood: "O+",
        donations: 7,
        distance: 1.4,
        status: "Confirmed",
      },
    ],
  };

  const percentage =
    (request.unitsFulfilled /
      request.unitsNeeded) *
    100;

  const statusOptions = [
    "Active",
    "In Progress",
    "Fulfilled",
    "Closed",
  ];

  return (
    <><Header />
    <div className="hospital-request-page section fade-up">
      <div className="container">
        {/* TOP COMPACT BAR */}

        <div className="card compact-request-bar">
          <div className="compact-left">
            <div className="compact-blood-icon">
              <Droplets />
            </div>

            <div>
              <div className="compact-title-row">
                <h3>{request.patient}</h3>

                <div className="compact-tags">
                  <span className="blood-tag">
                    {request.bloodGroup}
                  </span>

                  <span className="critical-tag">
                    {request.urgency}
                  </span>
                </div>
              </div>

              <div className="compact-meta">
                <span>
                  <MapPin size={14} />
                  {request.city}
                </span>

                <span>
                  <CalendarDays size={14} />
                  {request.date}
                </span>

                <span>
                  <HeartPulse size={14} />
                  {request.unitsNeeded} Units
                  Needed
                </span>
              </div>
            </div>
          </div>

          <div className="compact-progress">
            <div className="compact-progress-top">
              <span>
                {request.unitsFulfilled}/
                {request.unitsNeeded} Units
              </span>

              <span>{percentage}%</span>
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

        <div className="hospital-request-layout">
          {/* LEFT */}

          <div className="request-main">
            {/* MOBILE HERO */}

            <div className="card mobile-request-card">
              <div className="hero-top">
                <div className="blood-box">
                  <Droplets />
                </div>

                <div className="hero-info">
                  <div className="hero-title-row">
                    <h2>{request.patient}</h2>

                    <div className="tag-group">
                      <span className="blood-tag">
                        {request.bloodGroup}
                      </span>

                      <span className="critical-tag">
                        {request.urgency}
                      </span>
                    </div>
                  </div>

                  <div className="mini-details">
                    <span>
                      <MapPin size={15} />
                      {request.city}
                    </span>

                    <span>
                      <CalendarDays size={15} />
                      {request.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="progress-wrapper">
                <div className="progress-head">
                  <h4>
                    Blood Units Progress
                  </h4>

                  <span>
                    {
                      request.unitsFulfilled
                    }
                    /
                    {request.unitsNeeded}
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

            {/* PATIENT DESCRIPTION */}

            <div className="card patient-description-card">
              <div className="section-header">
                <div>
                  <h3>Patient Details</h3>

                  <p>
                    Emergency surgery blood
                    request
                  </p>
                </div>
              </div>

              <div className="patient-description-content">
                <p>
                  {
                    request.description
                  }
                </p>

                <div className="patient-contact-box">
                  <Phone size={18} />

                  <div>
                    <span>
                      Patient Contact
                    </span>

                    <h4>
                      {request.phone}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* DONORS */}

            <div className="card donors-card">
              <div className="section-header">
                <div>
                  <h3>
                    Accepted Donors
                  </h3>

                  <p>
                    {
                      request.donors
                        .length
                    }{" "}
                    people responded
                  </p>
                </div>

                <div className="donor-count">
                  <Users size={18} />

                  {
                    request.donors
                      .length
                  }
                </div>
              </div>

              <div className="donors-grid">
                {request.donors.map(
                  (
                    donor,
                    index
                  ) => (
                    <div
                      className="donor-card-item"
                      key={index}
                    >
                      <div className="donor-card-top">
                        <div className="donor-avatar">
                          {donor.name.charAt(
                            0
                          )}
                        </div>

                        <div>
                          <h4>
                            {donor.name}
                          </h4>

                          <div className="donor-meta">
                            <span>
                              {
                                donor.blood
                              }
                            </span>

                            <span>
                              {
                                donor.donations
                              }{" "}
                              Donations
                            </span>

                            <span className="distance-tag">
                              <MapPin size={13} />
                              {
                                donor.distance
                              }{" "}
                              km away
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="donor-card-bottom">
                        <span
                          className={`status-pill ${
                            donor.status ===
                            "Confirmed"
                              ? "confirmed"
                              : "pending"
                          }`}
                        >
                          {
                            donor.status
                          }
                        </span>

                        <button className="contact-btn">
                          Contact
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <div className="request-sidebar">
            {/* STATUS */}

            <div className="card">
              <div className="sidebar-title">
                <Activity size={20} />
                <h3>
                  Request Status
                </h3>
              </div>

              <div className="status-radio-group">
                {statusOptions.map(
                  (item) => (
                    <label
                      className={`status-option ${
                        status ===
                        item
                          ? "selected-status"
                          : ""
                      }`}
                      key={item}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={item}
                        checked={
                          status ===
                          item
                        }
                        onChange={() =>
                          setStatus(
                            item
                          )
                        }
                      />

                      <span className="radio-circle"></span>

                      {item}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* ACTIONS */}

            <div className="card">
              <div className="sidebar-title">
                <CircleCheckBig size={20} />
                <h3>
                  Manage Request
                </h3>
              </div>

              <div className="tools-list">
                <button className="tool-btn">
                  <Pencil size={18} />
                  Edit Request
                </button>

                <button className="tool-btn">
                  <Download size={18} />
                  Export Donor List
                </button>

                <button className="tool-btn">
                  <Share2 size={18} />
                  Share Request
                </button>

                <button className="tool-btn">
                  <CheckCircle2 size={18} />
                  Verify Donors
                </button>

                <button className="tool-btn">
                  <Users size={18} />
                  Manage Responses
                </button>
              </div>

              <button className="close-request-btn">
                <XCircle size={19} />
                Close Blood Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/></>
  );
};

export default HospitalBloodRequestDetails;