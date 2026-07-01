import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect } from "react";
import { getAllBloodRequests } from "../../../api/bloodRequest.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

import {
  Search,
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
  Heading6,
} from "lucide-react";

import "./HospitalBloodRequests.css";

const HospitalBloodRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const { requestId } = useParams();
  const { id } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const fetchBloodRequests = async () => {

      try {
        const data = await getAllBloodRequests();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching blood requests:", error);
      }
    };

    fetchBloodRequests();
  }, []);

  











  const [activeFilter, setActiveFilter] =
    useState("All");



  const filters = [
    "All",
    "Active",
    "Emergency",
    "Fulfilled",
    "Closed",
  ];

  return (
    <>
      <Header />

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

            <Link to="/hospital/blood-requests/create">
              <button className="primary-btn">
                <Plus size={16} />
                Create Request
              </button>
            </Link>



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
                className={`status-filter-btn ${activeFilter === item
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
                (request.unitsFulfilled /
                  request.unitsNeeded) *
                100;

              return (
                <div
                  className="request-card"
                  key={request._id}
                  onClick={() =>
                    navigate(
                      `/hospital/blood-requests/${request._id}`
                    )
                  }
                >
                  {/* CLICKABLE AREA */}

                  <div className="request-card-content">
                    <div className="request-top">
                      <div className="blood-icon">
                        <Droplets />
                      </div>

                      <div className="request-info">
                        <div className="request-title-row">
                          <h5>
                            Pateint's Name
                          </h5>

                          <ArrowUpRight
                            size={18}
                            className="arrow-icon"
                          />
                        </div>

                        <div className="request-tags">
                          <span className="blood-tag">
                            {request.bloodGroup}
                          </span>

                          <span
                            className={`status-tag ${request.status ===
                              "Active"
                              ? "active-tag"
                              : request.status ===
                                "Closed"
                                ? "closed-tag"
                                : "fulfilled-tag"
                              }`}
                          >
                            {request.status}
                          </span>


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
                          {request.unitsFulfilled}
                          /
                          {request.unitsNeeded}
                        </h4>
                      </div>

                      <div>
                        <span>
                          Posted
                        </span>

                        <p>
                          {request.hospital.hospitalName}
                        </p>
                      </div>

                      <div>
                        <span>
                          Date
                        </span>

                        <h6>
                          {new Date(request.createdAt).toLocaleDateString()}
                        </h6>
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Activity size={16} />
                    </button>

                    <button
                      className="danger-tool"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <CircleCheckBig size={16} />
                    </button>

                    <button
                      className="danger-tool"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <XCircle size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HospitalBloodRequests;