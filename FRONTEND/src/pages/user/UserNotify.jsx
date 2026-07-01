import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Bell, Droplets, Info, Check, X, XCircle } from "lucide-react";
import "./UserNotify.css";

// Simulated Backend Data Structure
const initialNotifications = [
  {
    id: "notif_001",
    type: "blood-request",
    referenceId: "req_9921", // ID to navigate to the specific request
    patient: "Rahul Sharma",
    blood: "O+",
    hospital: "CityCare Hospital",
    distance: "2.3 km",
    time: "3m ago",
  },
  {
    id: "notif_002",
    type: "message",
    referenceId: "msg_8832", // ID to navigate to a specific message/thread
    text: "Your previous donor request was successfully accepted.",
    time: "18m ago",
  },
  {
    id: "notif_003",
    type: "blood-request",
    referenceId: "req_9922",
    patient: "Neha Patel",
    blood: "A+",
    hospital: "Apollo Hospital",
    distance: "5.8 km",
    time: "32m ago",
  },
];

const UserNotify = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);

  // Quick Action: Remove from feed
  const handleRemove = (e, id) => {
    e.stopPropagation(); // Prevents clicking the card background
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // Quick Action: Accept/Reject
  const handleAction = (e, id, actionType) => {
    e.stopPropagation(); // Prevents clicking the card background
    console.log(`Action: ${actionType} on notification ${id}`);
    
    // Optimistic UI update: remove it from the list once acted upon
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // Card Click: Navigate to Details
  const handleCardClick = (item) => {
    if (item.type === "blood-request") {
      navigate(`/blood-requests/${item.referenceId}`);
    } else {
      navigate(`/messages/${item.referenceId}`);
    }
  };

  return (
    <>
      <Header />
      <div className="notify-page">
        <div className="notify-container">
          
          <div className="notify-header">
            <div className="header-title">
              <Bell size={20} />
              <h2>Notifications</h2>
            </div>
            {notifications.length > 0 && (
              <span className="badge">{notifications.length} New</span>
            )}
          </div>

          <div className="notify-list">
            {notifications.length === 0 ? (
              <div className="empty-state glass-panel">
                <p>You're all caught up! No new notifications.</p>
              </div>
            ) : (
              notifications.map((item) => (
                <div 
                  key={item.id} 
                  className="notify-row-item glass-panel"
                  onClick={() => handleCardClick(item)}
                >
                  
                  {item.type === "blood-request" ? (
                    <>
                      <div className="row-icon blood-icon">
                        <Droplets size={18} />
                      </div>
                      
                      <div className="row-content">
                        <div className="text-main">
                          <span className="fw-600 text-dark">{item.patient}</span> needs <span className="fw-700 text-danger">{item.blood}</span>
                        </div>
                        <div className="text-sub">
                          {item.hospital} <span className="dot">•</span> {item.distance} <span className="dot">•</span> {item.time}
                        </div>
                      </div>

                      <div className="row-actions">
                        <button className="action-btn accept" onClick={(e) => handleAction(e, item.id, 'accepted')} title="Accept">
                          <Check size={16} />
                        </button>
                        <button className="action-btn reject" onClick={(e) => handleAction(e, item.id, 'rejected')} title="Pass">
                          <X size={16} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row-icon msg-icon">
                        <Info size={18} />
                      </div>
                      
                      <div className="row-content">
                        <div className="text-main text-dark fw-500">
                          {item.text}
                        </div>
                        <div className="text-sub">
                          {item.time}
                        </div>
                      </div>

                      <div className="row-actions">
                        <button className="action-btn dismiss" onClick={(e) => handleRemove(e, item.id)} title="Dismiss">
                          <XCircle size={16} />
                        </button>
                      </div>
                    </>
                  )}

                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserNotify;