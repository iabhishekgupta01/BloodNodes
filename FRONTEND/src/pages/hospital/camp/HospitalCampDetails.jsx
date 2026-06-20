import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {getDonationCampById, deleteDonationCamp} from "../../../api/donationCamp.js";
import {useParams} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext.jsx";

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
  const navigate = useNavigate();
  const [camp, setCamp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const interested = 120;
  const {id} = useAuth();

  const campId = useParams().id; 

  const isOrganizer = camp && camp.organizerId && camp.organizerId._id === id;
  const handleDelete = async() => {
    try{
      const confirmDelete = window.confirm("Are you sure you want to delete this camp?");
      if(!confirmDelete){
        return;
      }
      const response = await deleteDonationCamp(campId);
      alert(response.message);
      navigate("/camps");
    }catch(error){
      alert(error.message || "An error occurred while deleting the camp.");
    }

  };

  const handleUpdate = () => {
    navigate(`hospital/camps/${campId}/edit`);
  };


  

  useEffect(() => {
    const fetchCampDetails = async () => {
      try {
        
        const data = await getDonationCampById(campId);
        setCamp(data);
        
      }
        catch (error) {
        setErrorMessage(error.message || "An error occurred while fetching camp details.");
      }

      finally {
        setIsLoading(false);
      }
    };

    fetchCampDetails();
  }, []);

  if (isLoading) {
    return <div className="hospital-camp-page section fade-up"><p>Loading camp details...</p></div>;
  }
  

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
                
                


                {isOrganizer && (
                  <div className="camp-actions">
                    <button className="secondary-btn action-btn" onClick={handleUpdate}>
                      <Pencil size={18} />
                      Update
                    </button>

                  <button className="delete-btn action-btn"
                   onClick={handleDelete}
                  
                   >
                    <Trash2 size={18} />
                    Delete
                  </button>
                </div>)}
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
                    {camp.location.address}, {camp.location.city}, {camp.location.state}
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
                  <p>{interested} people</p>
                </div>
              </div>
            </div>

            <div className="card hospital-card">
              <div className="hospital-header">
                <Building2 size={22} />
                <h3>{camp.organizerId.hospitalName}</h3>
              </div>

              <div className="hospital-contact">
                <div>
                  <Phone size={18} />
                  <span>{camp.organizerId.contact.phone}</span>
                </div>

                <div>
                  <Mail size={18} />
                  <span>{camp.organizerId.contact.email}</span>
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