// CreateDonationCamp.jsx

import "./CreateDonationCamp.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createCamp } from "../../api/donationCamp.js";


import { useState } from "react";
import {Loader2} from "lucide-react";

import {
  Tent,
  MapPin,
  CalendarDays,
  Clock3,
  FileText,
  ImagePlus,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";

export default function CreateDonationCamp() {

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    campName: "",
    location: {
      address: "",
      city: "",
      state: "",
      pincode: "",
    },
    date: "",
    time: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    const data = {
      ...formData,
      image: selectedFile
    }

    try {
      const result = await createCamp(data);
      navigate("/camps");
    } catch (error) {
      setIsError(true);
      if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An error occurred while creating the camp. Please try again.");
      }
      console.log("Error creating camp:", error);

    } finally {
      setIsLoading(false);
    }
  };


  const handleImageUpload = (e) => {
    setSelectedFile(e.target.files?.[0] || null);
  };

  return (
    <><Header />
      <div className="create-camp-page">

        {/* LEFT SECTION */}

        <div className="camp-left">

          <div className="camp-overlay"></div>

          <div className="camp-left-content">

            <div className="camp-badge">

              <Tent size={15} />

              Donation Camp Setup

            </div>

            <h1>
              Organize
              <br />
              Blood Donation Camps
            </h1>

            {/* STICKER */}

            <div className="camp-image">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3786/3786741.png"
                alt="Donation Camp"
              />

            </div>

            {/* MINI CARDS */}

            <div className="camp-mini-cards">

              <div className="mini-card">
                🩸 Better donor reach
              </div>

              <div className="mini-card">
                🚑 Emergency support
              </div>

              <div className="mini-card">
                ❤️ Community awareness
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="camp-right">



          <div className="camp-card">

            {isError && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}


            {/* HEADER */}

            <div className="camp-header">

              <div>

                <h2>
                  Create Donation Camp
                </h2>

                <p>
                  Step {step} of 3
                </p>

              </div>


              <div className="step-indicator">

                <span className={step >= 1 ? "active-step" : ""}></span>

                <span className={step >= 2 ? "active-step" : ""}></span>

                <span className={step >= 3 ? "active-step" : ""}></span>

              </div>

            </div>

            {/* FORM */}

            <form
              className="camp-form"
              onSubmit={handleSubmit}
            >

              {/* STEP 1 */}

              {step === 1 && (

                <div className="step-wrapper">

                  <div className="input-group">

                    <label>
                      Camp Name
                    </label>

                    <div className="input-box">

                      <Tent size={18} />

                      <input
                        type="text"
                        placeholder="Enter Camp Name"
                        value={formData.campName}
                        onChange={handleInputChange}
                        name="campName"
                      />

                    </div>

                  </div>

                  <div className="input-group">

                    <label>
                      City
                    </label>

                    <div className="input-box">

                      <MapPin size={18} />

                      <input
                        type="text"
                        placeholder="Enter City"
                        value={formData.location.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            location: { ...formData.location, city: e.target.value }
                          })
                        }
                      />

                    </div>

                  </div>

                  <div className="input-group">

                    <label>
                      State
                    </label>

                    <div className="input-box">

                      <MapPin size={18} />

                      <input
                        type="text"
                        placeholder="Enter State"
                        value={formData.location.state}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            location: { ...formData.location, state: e.target.value }
                          })
                        }
                      />

                    </div>

                  </div>

                  <div className="input-group">

                    <label>
                      Pincode
                    </label>

                    <div className="input-box">

                      <MapPin size={18} />

                      <input
                        type="number"
                        placeholder="Enter Pincode"
                        value={formData.location.pincode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            location: { ...formData.location, pincode: e.target.value }
                          })
                        }
                      />

                    </div>

                  </div>

                </div>

              )}

              {/* STEP 2 */}

              {step === 2 && (

                <div className="step-wrapper">

                  <div className="input-group full-width">

                    <label>
                      Full Address
                    </label>

                    <div className="textarea-box">

                      <MapPin size={18} />

                      <textarea
                        placeholder="Enter Complete Address..."
                        value={formData.location.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            location: { ...formData.location, address: e.target.value }
                          })
                        }
                      ></textarea>

                    </div>

                  </div>

                  <div className="input-group">

                    <label>
                      Camp Date
                    </label>

                    <div className="input-box">

                      <CalendarDays size={18} />

                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            date: e.target.value
                          })
                        }
                      />

                    </div>

                  </div>

                  <div className="input-group">

                    <label>
                      Camp Time
                    </label>

                    <div className="input-box">

                      <Clock3 size={18} />

                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            time: e.target.value
                          })
                        }
                      />

                    </div>

                  </div>

                </div>

              )}

              {/* STEP 3 */}

              {step === 3 && (

                <div className="step-wrapper">

                  <div className="input-group full-width">

                    <label>
                      Description
                    </label>

                    <div className="textarea-box">

                      <FileText size={18} />

                      <textarea
                        placeholder="Short description about the donation camp..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value
                          })
                        }
                      ></textarea>

                    </div>

                  </div>

                  <div className="input-group full-width">

                    <label>
                      Upload Camp Image
                    </label>

                    <label className={`upload-box ${selectedFile ? "uploaded" : ""}`}>

                      <div className="upload-icon">
                        {selectedFile ? (
                          <CheckCircle size={22} />
                        ) : (
                          <ImagePlus size={22} />
                        )}
                      </div>

                      <div>
                        <h4>
                          {selectedFile
                            ? "Image Selected ✓"
                            : "Upload Banner / Camp Image"}
                        </h4>

                        <p>
                          {selectedFile
                            ? "Ready to upload"
                            : "Optional"}
                        </p>
                      </div>

                      <input
                        type="file"
                        accept="image/*"

                        onChange={handleImageUpload}
                      />

                    </label>

                  </div>

                </div>

              )}

              {/* BUTTONS */}

              <div className="button-row">

                {step > 1 && (

                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() =>
                      setStep((prev) => prev - 1)
                    }
                  >

                    <ChevronLeft size={18} />

                    Previous

                  </button>

                )}

                {step < 3 ? (

                  <button
                    type="button"
                    className="primary-btn"
                    onClick={(e) => {
                      e.stopPropagation();

                      setTimeout(() => {
                        setStep((prev) => prev + 1);
                      }, 0);
                    }
                    }
                  >

                    Next

                    <ChevronRight size={18} />

                  </button>

                ) : (

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

                    {isLoading ? "Creating..." : "Create Camp"}
                  </button>

                )}

              </div>

            </form>

          </div>

        </div>

      </div>
      <Footer /></>
  );
}