// RequestsList.jsx

import "./RequestsList.css";

import RequestCard from "./RequestCard";

const requests = [
  {
    id: 1,
    hospital: "City Care Hospital",
    blood: "O+",
    urgency: "Critical",
    units: 2,
    distance: "3.2 km",
    time: "10 mins ago",
  },

  {
    id: 2,
    hospital: "Apollo Hospital",
    blood: "B-",
    urgency: "Urgent",
    units: 1,
    distance: "5.1 km",
    time: "22 mins ago",
  },

  {
    id: 3,
    hospital: "Red Cross Center",
    blood: "AB+",
    urgency: "Critical",
    units: 4,
    distance: "2.4 km",
    time: "35 mins ago",
  },

  {
    id: 4,
    hospital: "People's Hospital",
    blood: "A+",
    urgency: "Urgent",
    units: 3,
    distance: "4.8 km",
    time: "40 mins ago",
  },
];

export default function RequestsList({
  selectedRequest,
  setSelectedRequest,
  acceptedRequest,
}) {
  return (
    <div className="requests-wrapper">

      <div className="requests-header">

        <div>

          <h2>
            Recent Blood Requests
          </h2>

          <p>
            Nearby hospitals needing donors
          </p>

        </div>

      </div>

      {/* HORIZONTAL SCROLL */}

      <div className="requests-scroll hide-scrollbar">

        {requests.map((request) => (

          <RequestCard
            key={request.id}
            request={request}
            active={
              selectedRequest?.id ===
              request.id
            }
            accepted={
              acceptedRequest &&
              acceptedRequest.id !== request.id
            }
            onClick={() =>
              setSelectedRequest(request)
            }
          />

        ))}

      </div>

    </div>
  );
}