import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  MapPin,
  CalendarDays,
  Clock3,
  Users,
  Pencil,
  Trash2,
  Building2,
  Phone,
  Mail,
  HeartHandshake,
} from "lucide-react";
import "./HospitalCampDetails.css";

const HospitalCampDetails = () => {
  const camp = {
    title: "Mega Blood Donation Camp",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop",
    city: "Indore",
    state: "Madhya Pradesh",
    address: "Apollo Community Hall, Vijay Nagar",
    date: "18 May 2026",
    time: "10:00 AM - 5:00 PM",
    interested: 128,
    organizer: "CityCare Hospital",
    phone: "+91 9876543210",
    email: "citycarehospital@gmail.com",
    description:
      "This donation camp is organized to support emergency blood requirements across nearby hospitals. Donors will receive refreshments, health screening, and donor certificates after successful donation.",
  };

  return (
    <><Header />
    <div className="hospital-camp-page section fade-up">
      <div className="container">
        <div className="hospital-camp-wrapper">
          {/* LEFT */}
          <div className="hospital-camp-left">
            <div className="camp-image-card">
              <img src={camp.image} alt="camp" />

              <div className="camp-image-overlay">
                <div className="camp-badge">
                  <HeartHandshake size={16} />
                  Active Camp
                </div>
              </div>
            </div>

            <div className="card camp-description-card">
              <div className="camp-title-row">
                <h2>{camp.title}</h2>

                <div className="camp-actions">
                  <button className="secondary-btn action-btn">
                    <Pencil size={18} />
                    Update
                  </button>

                  <button className="delete-btn action-btn">
                    <Trash2 size={18} />
                    Delete
                  </button>
                </div>
              </div>

              <p className="camp-description">{camp.description}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hospital-camp-right">
            <div className="card info-card">
              <div className="info-item">
                <MapPin size={20} />
                <div>
                  <span>Location</span>
                  <p>
                    {camp.address}, {camp.city}, {camp.state}
                  </p>
                </div>
              </div>

              <div className="info-item">
                <CalendarDays size={20} />
                <div>
                  <span>Date</span>
                  <p>{camp.date}</p>
                </div>
              </div>

              <div className="info-item">
                <Clock3 size={20} />
                <div>
                  <span>Time</span>
                  <p>{camp.time}</p>
                </div>
              </div>

              <div className="info-item">
                <Users size={20} />
                <div>
                  <span>Interested Donors</span>
                  <p>{camp.interested} people</p>
                </div>
              </div>
            </div>

            <div className="card hospital-card">
              <div className="hospital-header">
                <Building2 size={22} />
                <h3>{camp.organizer}</h3>
              </div>

              <div className="hospital-contact">
                <div>
                  <Phone size={18} />
                  <span>{camp.phone}</span>
                </div>

                <div>
                  <Mail size={18} />
                  <span>{camp.email}</span>
                </div>
              </div>
            </div>

            <div className="card quick-tools-card">
              <h3>Quick Tools</h3>

              <div className="tools-grid">
                <button className="tool-btn">
                  View Registrations
                </button>

                <button className="tool-btn">
                  Download Donor List
                </button>

                <button className="tool-btn">
                  Share Camp
                </button>

                <button className="tool-btn">
                  Mark Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/></>
  );
};

export default HospitalCampDetails;