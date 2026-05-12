// UserDashboard.jsx

import "./UserDashboard.css";

import LeftSidebar from "../components/userDashboard/layout/LeftSidebar";
import MiddleSection from "../components/userDashboard/layout/MiddleSection";
import RightSidebar from "../components/userDashboard/layout/RightSidebar";

import { useEffect, useState } from "react";

export default function UserDashboard() {

  const [locationShared, setLocationShared] =
    useState(false);

  const [acceptedRequest, setAcceptedRequest] =
    useState(null);

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  // LOCATION POPUP ON PAGE LOAD
  useEffect(() => {

    if (!locationShared) {

      setTimeout(() => {

        const allow = window.confirm(
          "Share your location for nearby blood requests?"
        );

        if (allow) {
          setLocationShared(true);
        }

      }, 600);

    }

  }, [locationShared]);

  return (
    <div className="user-dashboard">

      {/* LEFT SIDEBAR */}
      <div className="dashboard-left">

        <LeftSidebar
          selectedRequest={selectedRequest}
          setSelectedRequest={
            setSelectedRequest
          }
          acceptedRequest={acceptedRequest}
        />

      </div>

      {/* MIDDLE SECTION */}

      <div className="dashboard-middle">

        <MiddleSection
          locationShared={locationShared}
          setLocationShared={
            setLocationShared
          }
          acceptedRequest={acceptedRequest}
          setAcceptedRequest={
            setAcceptedRequest
          }
          selectedRequest={selectedRequest}
        />

      </div>

      {/* RIGHT SIDEBAR */}

      <div className="dashboard-right">

        <RightSidebar />

      </div>

    </div>
  );
}