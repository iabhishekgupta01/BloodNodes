import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { getBloodRequestById } from "../../api/bloodRequest.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { updateBloodStatus } from "../../api/bloodRequest.js";


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
  Mail,
} from "lucide-react";

import "./HospitalBloodRequestDetails.css";

const HospitalBloodRequestDetails = () => {
  const [status, setStatus] =
    useState("Active");
  const { requestId } = useParams();
  const { id } = useAuth();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);



  useEffect(() => {
    const fetchRequestDetails = async () => {
      setIsLoading(true);

      try {
        const data = await getBloodRequestById(requestId);
        setRequest(data);
        setStatus(data.status);
      } catch (error) {
        console.error(
          "Error fetching blood request details:",
          error
        );
        setError(
          error.message ||
          "Failed to fetch blood request details"
        );
        setShowErrorMessage(true);
      }

      setIsLoading(false);
    }

    fetchRequestDetails();
  }, [requestId]);

  const handleStatusChange = async (newStatus) => {
    try {
      const updatedRequest = {

        ...request,
        status: newStatus,
      };

      await updateBloodStatus(requestId, {
        status: newStatus
      });

      setRequest(updatedRequest);
      setStatus(newStatus);
      setSuccessMessage(

        `Request status updated to "${newStatus}".`
      );
      setShowSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(null);
        setShowSuccessMessage(false);
      }, 4000);
    } catch (error) {
      console.error(
        "Error updating request status:",
        error
      );
      setError(
        error.message ||
        "Failed to update request status"
      );
      setShowErrorMessage(true);
      setTimeout(() => {
        setError(null);
        setShowErrorMessage(false);
      }, 4000);
    }
  };







  if (!request) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h3>Loading request details...</h3>
      </div>
    );
  }


  const percentage =
    (request.unitsFulfilled /
      request.unitsNeeded) *
    100;

  const statusOptions = ['active', 'fulfilled', 'emergency', 'closed'];

  return (
    <><Header />
      <div className="hospital-request-page section fade-up">
        <div className="container">

          <div
            style={{
              position: "fixed",
              top: "60px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              width: "400px",
              maxWidth: "90%",
            }}
          >
            {showSuccessMessage && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> {successMessage}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowSuccessMessage(false)}
                ></button>
              </div>
            )}

            {showErrorMessage && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowErrorMessage(false)}
                ></button>
              </div>
            )}
          </div>


          {/* TOP COMPACT BAR */}

          <div className="card compact-request-bar">
            <div className="compact-left">
              <div className="compact-blood-icon">
                <Droplets />
              </div>

              <div>
                <div className="compact-title-row">
                  <h3>Pateint's Name</h3>

                  <div className="compact-tags">
                    <span className="blood-tag">
                      {request.bloodGroup}
                    </span>

                    <span className="critical-tag">
                      {request.status}
                    </span>
                  </div>
                </div>

                <div className="compact-meta">
                  <span>
                    <MapPin size={14} />
                    {request.hospital.address}
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
                      <h2>Pateint's Name</h2>

                      <div className="tag-group">
                        <span className="blood-tag">
                          {request.bloodGroup}
                        </span>

                        <span className="critical-tag">
                          {request.status}
                        </span>
                      </div>
                    </div>

                    <div className="mini-details">
                      <span>
                        <MapPin size={15} />
                        {request.hospital.address}
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
                        {request.hospital.contact.phone}
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
                        request.acceptedBy
                          .length
                      }{" "}
                      people responded
                    </p>
                  </div>

                  <div className="donor-count">
                    <Users size={18} />

                    {
                      request.acceptedBy
                        .length
                    }
                  </div>
                </div>

                <div className="donors-grid">
                  {request.acceptedBy.map(
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
                                  donor.bloodGroup
                                }
                              </span>

                              <span>
                                3 {" "}
                                Donations
                              </span>

                              <span className="distance-tag">
                                <MapPin size={13} />
                                6 {" "}
                                km away
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="donor-card-bottom">
                          <span
                            className={`status-pill ${donor.status ===
                              "requested"
                              ? "confirmed"
                              : "pending"
                              }`}
                          >
                            {
                              donor.status
                            }
                          </span>

                          <button
                            className="contact-btn"
                            onClick={() => setSelectedDonor(donor)}
                          >
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
                        className={`status-option ${status ===
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
                          onChange={() => handleStatusChange(item)}
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

                <div className="tools-list"
                  onClick={() => navigate(`/hospital/blood-requests/${requestId}/edit`)}
                >
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
      <Footer />

      {/* ADD THIS DIALOG BOX CODE */}
      {selectedDonor && (
        <div className="modal-overlay" onClick={() => setSelectedDonor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Contact Donor</h3>
              <button className="close-icon-btn" onClick={() => setSelectedDonor(null)}>
                <XCircle size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <span>Phone Number</span>

                  <h4>{selectedDonor.phone || "Not provided"}</h4>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <span>Email Address</span>
                  <h4>{selectedDonor.email || "Not provided"}</h4>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              {selectedDonor.phone && (
                <a href={`tel:${selectedDonor.phone}`} className="action-btn call-btn">
                  Call Now
                </a>
              )}
              {selectedDonor.email && (
                <a href={`mailto:${selectedDonor.email}`} className="action-btn email-btn">
                  Send Email
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};



export default HospitalBloodRequestDetails;
