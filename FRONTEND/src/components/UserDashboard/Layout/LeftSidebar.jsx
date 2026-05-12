// LeftSidebar.jsx

import "./LeftSidebar.css";

import {
  Droplets,
  MapPin,
  Clock3,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const requests = [
  {
    id: 1,
    hospital: "City Care Hospital",
    blood: "O+",
    distance: "3.2 km",
    time: "10 mins ago",
    urgency: "Critical",
  },

  {
    id: 2,
    hospital: "Apollo Hospital",
    blood: "B-",
    distance: "5.1 km",
    time: "18 mins ago",
    urgency: "Urgent",
  },

  {
    id: 3,
    hospital: "Red Cross Center",
    blood: "AB+",
    distance: "2.4 km",
    time: "25 mins ago",
    urgency: "Critical",
  },
];

export default function LeftSidebar({
  selectedRequest,
  setSelectedRequest,
  acceptedRequest,
}) {
  return (
    <div className="left-sidebar">

      <div className="left-header">

        <div>
          <h2>Blood Requests</h2>
          <p>Nearby emergency requests</p>
        </div>

      </div>

      <div className="requests-list hide-scrollbar">

        {requests.map((request) => (

          <div
            key={request.id}
            className={
              selectedRequest?.id === request.id
                ? "request-item active-request"
                : "request-item"
            }
            onClick={() =>
              setSelectedRequest(request)
            }
          >

            <div className="request-top">

              <div className="hospital-name">

                <h3>
                  {request.hospital}
                </h3>

                <span>
                  <ShieldCheck size={13} />
                  Verified
                </span>

              </div>

              <div
                className={
                  request.urgency === "Critical"
                    ? "urgency critical"
                    : "urgency urgent"
                }
              >
                <AlertTriangle size={13} />

                {request.urgency}
              </div>

            </div>

            <div className="blood-row">

              <div className="blood-group">
                <Droplets size={16} />
                {request.blood}
              </div>

              <div className="request-distance">
                <MapPin size={14} />
                {request.distance}
              </div>

            </div>

            <div className="request-time">

              <Clock3 size={14} />

              {request.time}

            </div>

            {acceptedRequest?.id === request.id && (
              <div className="accepted-badge">
                Accepted
              </div>
            )}

          </div>

        ))}

      </div>
    </div>
  );
}