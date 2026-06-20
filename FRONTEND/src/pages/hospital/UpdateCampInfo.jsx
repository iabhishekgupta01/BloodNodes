// UpdateCampInfo.jsx

import "./UpdateCampInfo.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getDonationCampById,updateDonationCamp } from "../../api/donationCamp.js";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";


import {
  Loader2,
  Tent,
  MapPin,
  CalendarDays,
  Clock3,
  FileText,
  ImagePlus,
  Users,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function UpdateCampInfo() {
    const navigate = useNavigate();
    const [camp, setCamp] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [donors, setDonors] = useState(120);
    const interested = 120;
    const {id} = useAuth();
    const campId = useParams().id;

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsLoading(true);
        const updatedCampData = {
            campName: camp.campName,
            date: camp.date,
            time: camp.time,
            description: camp.description,
            location: camp.location,
            
        };
        console.log("Updated Camp Data:", updatedCampData);
        try {
             const result=await updateDonationCamp(campId, updatedCampData);
             console.log("Update result:", result);
             if(result){
                alert("Camp updated successfully!");
                navigate(`/camps/${campId}`);
             }
            
            
        }
        catch (error) {
            setErrorMessage(error.message || "An error occurred while updating camp information.");
        }finally {
            setIsLoading(false);
        }
    };


    const isOrganizer = camp && camp.organizerId && camp.organizerId._id === id;
    if (!isOrganizer) {
        return (
            <div className="update-camp-page">
                <Header />
                <div className="not-authorized">
                    <h2>Unauthorized Access</h2>
                    <p>You do not have permission to edit this camp information.</p>
                    <button onClick={() => navigate("/camps")} className="primary-btn">
                        Back to Camps
                    </button>
                </div>
                <Footer />
            </div>
        );
      };

  return (
    <><Header />
    <div className="update-camp-page">

      <div className="update-camp-card">

        {/* HEADER */}

        <div className="update-header">

          <div>

            <div className="update-badge">

              <CheckCircle2 size={15} />

              Update Donation Camp

            </div>

            <h1>
              Update Camp Information
            </h1>

            <p>
              Modify donation camp details and status
            </p>

          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3786/3786741.png"
            alt="Camp"
          />

        </div>

        {/* FORM */}

        <form
          className="update-form"
          onSubmit={handleUpdate}
        >

          {/* CAMP NAME */}

          <div className="input-group">

            <label>
              Camp Name
            </label>

            <div className="input-box">

              <Tent size={18} />

              <input
                type="text"
                onChange={(e) => setCamp({...camp, campName: e.target.value})}
                value={camp ? camp.campName : ""}
                
                placeholder="Enter Camp Name"
              />

            </div>

          </div>

          {/* STATUS */}

          <div className="input-group">

            <label>
              Camp Status
            </label>

            <div className="custom-select">

              <div className="select-left">

                <CheckCircle2 size={18} />

                <select>

                  <option>
                    Select Status
                  </option>

                  <option>
                    Upcoming
                  </option>

                  <option>
                    Ongoing
                  </option>

                  <option>
                    Completed
                  </option>

                  <option>
                    Cancelled
                  </option>

                </select>

              </div>

              <ChevronDown size={18} />

            </div>

          </div>

          {/* CITY */}

          <div className="input-group">

            <label>
              City
            </label>

            <div className="input-box">

              <MapPin size={18} />

              <input
                type="text"
                onChange={(e) => setCamp({...camp, location: {...camp.location, city: e.target.value}})}
                value={camp && camp.location ? camp.location.city : ""}
                placeholder="Enter City"
              />

            </div>

          </div>

          {/* STATE */}

          <div className="input-group">

            <label>
              State
            </label>

            <div className="input-box">

              <MapPin size={18} />

              <input
                type="text"
                placeholder="Enter State"
                onChange={(e) => setCamp({...camp, location: {...camp.location, state: e.target.value}})}
                value={camp && camp.location ? camp.location.state : ""}
              />

            </div>

          </div>

          {/* DATE */}

          <div className="input-group">

            <label>
              Camp Date
            </label>

            <div className="input-box">

              <CalendarDays size={18} />

              <input
                type="date"
                onChange={(e) => setCamp({...camp, date: e.target.value})}
                
              />

            </div>

          </div>

          {/* TIME */}

          <div className="input-group">

            <label>
              Camp Time
            </label>

            <div className="input-box">

              <Clock3 size={18} />

              <input
                type="time"
                onChange={(e) => setCamp({...camp, time: e.target.value})}
                value={camp ? camp.time : ""}
              /> 

            </div>

          </div>

          {/* EXPECTED DONORS */}

          <div className="input-group">

            <label>
              Expected Donors
            </label>

            <div className="input-box">

              <Users size={18} />

              <input
                type="number"
                placeholder="Expected Donors"
                onChange={(e)=> setDonors(e.target.value)
                }
                value={donors}
              />

            </div>

          </div>

          {/* PINCODE */}

          <div className="input-group">

            <label>
              Pincode
            </label>

            <div className="input-box">

              <MapPin size={18} />

              <input
                type="number"
                placeholder="Enter Pincode"
                onChange={(e) => setCamp({...camp, location: {...camp.location, pincode: e.target.value}})}
                value={camp && camp.location ? camp.location.pincode : ""}
              />

            </div>

          </div>

          {/* ADDRESS */}

          <div className="input-group full-width">

            <label>
              Full Address
            </label>

            <div className="textarea-box">

              <MapPin size={18} />

              <textarea
                placeholder="Enter Full Camp Address..."
                onChange={(e) => setCamp({...camp, location: {...camp.location, address: e.target.value}})}
                value={camp && camp.location ? camp.location.address : ""}
              ></textarea>

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="input-group full-width">

            <label>
              Description
            </label>

            <div className="textarea-box">

              <FileText size={18} />

              <textarea
                placeholder="Update camp details..."
                onChange={(e) => setCamp({...camp, description: e.target.value})}
                value={camp ? camp.description : ""}
              ></textarea>

            </div>

          </div>

          {/* IMAGE */}

          <div className="input-group full-width">

            <label>
              Update Camp Image
            </label>

            <label className="upload-box">

              <div className="upload-icon">

                <ImagePlus size={22} />

              </div>

              <div>

                <h4>
                  Upload New Banner / Image
                </h4>

                <p>
                  Optional
                </p>

              </div>

              <input type="file" />

            </label>

          </div>

          {/* BUTTONS */}

          <div className="button-row">

            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate(`/camps/${campId}`)}
            >

              Cancel

            </button>

            <button
                    type="submit"
                    className="primary-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 size={18} className="animate-spin" /> 
                    ) : (
                      <CheckCircle2 size={18} />
                    )}

                    {isLoading ? "Updating..." : "Update Camp"}
                  </button>

          </div>

        </form>

      </div>

    </div>
    <Footer /></>
  );
}