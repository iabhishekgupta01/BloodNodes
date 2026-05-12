// CreateDonationCamp.jsx

import "./CreateDonationCamp.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useState } from "react";

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
            onSubmit={(e) => e.preventDefault()}
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
                    ></textarea>

                  </div>

                </div>

                <div className="input-group">

                  <label>
                    Camp Date
                  </label>

                  <div className="input-box">

                    <CalendarDays size={18} />

                    <input type="date" />

                  </div>

                </div>

                <div className="input-group">

                  <label>
                    Camp Time
                  </label>

                  <div className="input-box">

                    <Clock3 size={18} />

                    <input type="time" />

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
                    ></textarea>

                  </div>

                </div>

                <div className="input-group full-width">

                  <label>
                    Upload Camp Image
                  </label>

                  <label className="upload-box">

                    <div className="upload-icon">

                      <ImagePlus size={22} />

                    </div>

                    <div>

                      <h4>
                        Upload Banner / Camp Image
                      </h4>

                      <p>
                        Optional
                      </p>

                    </div>

                    <input type="file" />

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
                    setStep(step - 1)
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
                  onClick={() =>
                    setStep(step + 1)
                  }
                >

                  Next

                  <ChevronRight size={18} />

                </button>

              ) : (

                <button
                  type="submit"
                  className="primary-btn"
                >

                  <CheckCircle2 size={18} />

                  Create Camp

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