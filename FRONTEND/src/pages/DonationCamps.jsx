import { useState } from "react";
import "./DonationCamps.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Check,
  X,
} from "lucide-react";

function DonationCamps() {

  const [selectedCamp, setSelectedCamp] =
    useState(null);

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [interested, setInterested] =
    useState([]);

  const camps = [
    {
      id: 1,
      title: "Mega Blood Donation Drive",
      city: "Indore",
      day: "Today",
      date: "18 May 2026",
      time: "10:00 AM",
      organizer: "Apollo Hospital",
      image:
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Join our community blood donation drive and help patients in emergency need. Donors will receive free health screening, refreshments and digital certificates after donation.",

      hospitalInfo:
        "Apollo Hospital has been conducting community blood donation programs across multiple cities with experienced medical teams, proper donor care and safe blood collection facilities. Their staff will assist donors throughout the complete process including screening, recovery and post-donation support.",
    },

    {
      id: 2,
      title: "Youth Donor Camp",
      city: "Bhopal",
      day: "Tomorrow",
      date: "19 May 2026",
      time: "11:30 AM",
      organizer: "Red Cross Society",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",

      description:
        "A youth-focused donation camp encouraging first-time donors to participate in safe and guided blood donation activities.",

      hospitalInfo:
        "This camp is organized in collaboration with Red Cross Society and local healthcare professionals to ensure proper donor guidance, hygiene standards and emergency medical availability during the event.",
    },

    {
      id: 3,
      title: "Weekend LifeSaver Camp",
      city: "Indore",
      day: "Weekend",
      date: "21 May 2026",
      time: "09:00 AM",
      organizer: "Care CHL Hospital",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",

      description:
        "Weekend donation camp with awareness sessions, donor support and healthcare consultations for participants.",

      hospitalInfo:
        "Care CHL Hospital is managing donor registration, blood collection and post-donation monitoring with trained staff and proper healthcare support facilities available throughout the event.",
    },
  ];

  const filters = [
    "All",
    "Today",
    "Tomorrow",
    "Weekend",
    "Indore",
    "Bhopal",
  ];

  const filteredCamps = camps.filter(
    (camp) => {

      if (activeFilter === "All")
        return true;

      return (
        camp.day === activeFilter ||
        camp.city === activeFilter
      );
    }
  );

  const toggleInterested = (id) => {

    if (interested.includes(id)) {

      setInterested(
        interested.filter(
          (item) => item !== id
        )
      );

    } else {

      setInterested([
        ...interested,
        id,
      ]);

    }
  };

  return (
    <>
    <Header />

    <section className="donation-page section">

      <div className="container">

        {/* HERO */}

        {/* <div className="camp-hero">

          <div className="hero-left">

            <span className="hero-badge">
              🩸 Save Lives Together
            </span>

            <h1>
              Discover Nearby
              <span>
                {" "}
                Donation Camps
              </span>
            </h1>

            <p>
              Explore donation camps
              organized by trusted
              hospitals and healthcare
              communities near you.
            </p>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>120+</h3>
              <span>
                Upcoming Camps
              </span>
            </div>

            <div className="stat-card">
              <h3>35K+</h3>
              <span>
                Registered Donors
              </span>
            </div>

          </div>

        </div> */}

        {/* FILTERS */}

        <div className="filter-wrapper">

          {filters.map((filter) => (

            <button
              key={filter}
              className={`filter-chip ${
                activeFilter === filter
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>

          ))}

        </div>

        {/* GRID */}

        <div className="camp-grid">

          {filteredCamps.map((camp) => (

            <div
              key={camp.id}
              className="modern-camp-card"
              onClick={() =>
                setSelectedCamp(camp)
              }
            >

              {/* IMAGE */}

              <div className="card-image-wrap">

                <img
                  src={camp.image}
                  alt={camp.title}
                />

                <span className="live-badge">
                  🔴 Live Camp
                </span>

              </div>

              {/* CONTENT */}

              <div className="modern-card-content">

                <div className="title-row">

                  <h3>
                    {camp.title}
                  </h3>

                  {interested.includes(
                    camp.id
                  ) && (

                    <div className="interested-icon">
                      <Check size={16} />
                    </div>

                  )}

                </div>

                <p className="mini-description">
                  Organized with trusted
                  healthcare partners and
                  medical staff.
                </p>

                {/* INFO */}

                <div className="info-row">

                  <span>
                    <MapPin size={15} />
                    {camp.city}
                  </span>

                  <span>
                    <CalendarDays size={15} />
                    {camp.date}
                  </span>

                  <span>
                    <Clock3 size={15} />
                    {camp.time}
                  </span>

                </div>

                {/* HOSPITAL */}

                <div className="hospital-strip">
                  🏥 {camp.organizer}
                </div>

                {/* BUTTON */}

                <button
                  className={`interest-btn ${
                    interested.includes(
                      camp.id
                    )
                      ? "active"
                      : ""
                  }`}
                  onClick={(e) => {

                    e.stopPropagation();

                    toggleInterested(
                      camp.id
                    );
                  }}
                >
                  {interested.includes(
                    camp.id
                  )
                    ? "Interested ✓"
                    : "I'm Interested"}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedCamp && (

        <div
          className="sheet-overlay"
          onClick={() =>
            setSelectedCamp(null)
          }
        >

          <div
            className="bottom-sheet"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* IMAGE */}

            <div className="sheet-image-wrap">

              <img
                src={selectedCamp.image}
                alt={selectedCamp.title}
                className="sheet-image"
              />

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedCamp(null)
                }
              >
                <X size={18} />
              </button>

            </div>

            {/* CONTENT */}

            <div className="sheet-content">

              {/* HEADING */}

              <div className="sheet-heading">

                <div>

                  <span className="sheet-mini-badge">
                    🩸 Donation Camp
                  </span>

                  <h2>
                    {selectedCamp.title}
                  </h2>

                </div>

              </div>

              {/* TAGS */}

              <div className="sheet-tags">

                <span>
                  📍 {selectedCamp.city}
                </span>

                <span>
                  📅 {selectedCamp.date}
                </span>

                <span>
                  ⏰ {selectedCamp.time}
                </span>

              </div>

              {/* ABOUT */}

              <div className="sheet-section">

                <h4>
                  About This Camp
                </h4>

                <p className="sheet-description">
                  {
                    selectedCamp.description
                  }
                </p>

              </div>

              {/* ORGANIZER */}

              <div className="organizer-box">

                <div className="organizer-top">

                  <div className="organizer-icon">
                    🏥
                  </div>

                  <div>

                    <h3>
                      {
                        selectedCamp.organizer
                      }
                    </h3>

                    <span>
                      Healthcare Partner
                    </span>

                  </div>

                </div>

                <p className="organizer-description">
                  {
                    selectedCamp.hospitalInfo
                  }
                </p>

              </div>

              {/* EXTRA INFO */}

              <div className="camp-extra-info">

                <div className="extra-item">
                  🍎 Refreshments
                  available
                </div>

                <div className="extra-item">
                  🧑‍⚕️ Medical staff
                  available
                </div>

                <div className="extra-item">
                  📄 Digital donor
                  certificate
                </div>

              </div>

              {/* BUTTON */}

              <button
                className={`interest-btn full ${
                  interested.includes(
                    selectedCamp.id
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  toggleInterested(
                    selectedCamp.id
                  )
                }
              >
                {interested.includes(
                  selectedCamp.id
                )
                  ? "Interested ✓"
                  : "Mark Interested"}
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
    <Footer />
    </>
  );
}

export default DonationCamps;