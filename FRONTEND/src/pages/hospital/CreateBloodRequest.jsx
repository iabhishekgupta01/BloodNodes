// CreateBloodRequest.jsx

import "./CreateBloodRequest.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createBloodRequest } from "../../api/bloodRequest.js";
import { CheckCircle } from "lucide-react";

import { CheckCircle2 } from "lucide-react";
import { Loader2 } from "lucide-react";


import {
  Droplets,
  Activity,
  FileText,
  ImagePlus,
  HeartPulse,
  ShieldAlert,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";

export default function CreateBloodRequest() {

  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [bloodData, setBloodData] = useState({
    bloodGroup: "",
    unitsNeeded: "",
    status: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const {name,value,file } = e.target;
    if (name === "image") {
      setBloodData((prevData) => ({
        ...prevData,
        image: files[0],
      }));
    } else {
      setBloodData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setBloodData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const response = await createBloodRequest(bloodData);

      console.log("Blood request created:", response);
      navigate("/hospital/dashboard");
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message || "Failed to create blood request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <><Header />
      <div className="create-request-page">

        {/* LEFT SECTION */}

        <div className="request-left">

          <div className="left-overlay"></div>

          <div className="left-content">

            <div className="left-top">

              <div className="left-badge">

                <ShieldAlert size={15} />

                Smart Emergency Request

              </div>

              <h1>
                Connect Patients
                <br />
                With Donors Faster
              </h1>

            </div>

            {/* IMAGE */}

            <div className="left-image">

              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop"
                alt="Healthcare"
              />

            </div>

            {/* MINI INFO */}

            <div className="left-bottom">

              <div className="left-mini-card">

                <span>
                  🩸
                </span>

                Real-time donor reach

              </div>

              <div className="left-mini-card">

                <span>
                  🚑
                </span>

                Emergency coordination

              </div>

              <div className="left-mini-card">

                <span>
                  ❤️
                </span>

                Trusted blood network

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="request-right">

          <div className="request-card">

            {/* HEADER */}

            <div className="card-header">

              <h2>
                Patient Request
              </h2>

              <p>
                Fill required details carefully
              </p>

            </div>

            {/* FORM */}

            <form className="request-form" onSubmit={handleSubmit}>

              {/* BLOOD GROUP */}

              <div className="input-group">

                <label>
                  Blood Group Needed
                </label>

                <div className="custom-select">

                  <div className="select-left">

                    <Droplets size={18} />

                    <select name="bloodGroup" value={bloodData.bloodGroup} onChange={handleChange}>

                      <option >
                        Select Blood Group
                      </option>

                      <option>A+</option>
                      <option>A-</option>

                      <option>B+</option>
                      <option>B-</option>

                      <option>O+</option>
                      <option>O-</option>

                      <option>AB+</option>
                      <option>AB-</option>

                    </select>

                  </div>

                  <ChevronDown size={18} />

                </div>

              </div>

              {/* UNITS */}

              <div className="input-group">

                <label>
                  Units Needed
                </label>

                <div className="input-box">

                  <Activity size={18} />

                  <input
                    type="number"
                    placeholder="Enter Units"
                    name="unitsNeeded"
                    value={bloodData.unitsNeeded}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* STATUS */}

              <div className="input-group">

                <label>
                  Request Status
                </label>

                <div className="custom-select">

                  <div className="select-left">

                    <AlertTriangle size={18} />

                    <select name="status" value={bloodData.status} onChange={handleChange}>

                      <option>
                        Select Status
                      </option>

                      <option>
                        active
                      </option>

                      <option>
                        fulfilled
                      </option>

                      <option>
                        emergency
                      </option>

                      

                    </select>

                  </div>

                  <ChevronDown size={18} />

                </div>

              </div>

              {/* DESCRIPTION */}

              <div className="input-group full-width">

                <label>
                  Patient Description
                </label>

                <div className="textarea-box">

                  <FileText size={18} />

                  <textarea
                    placeholder="Short patient or emergency details..."
                    name="description"
                    value={bloodData.description}
                    onChange={handleChange}
                  ></textarea>

                </div>

              </div>

              {/* PHOTO */}

              


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
                            : "Upload Banner / Request Image"}
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

              {/* BUTTON */}

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

            </form>

          </div>

        </div>

      </div>
      <Footer /></>
  );
}