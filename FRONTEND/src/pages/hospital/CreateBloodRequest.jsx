// CreateBloodRequest.jsx

import "./CreateBloodRequest.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

          <form className="request-form">

            {/* BLOOD GROUP */}

            <div className="input-group">

              <label>
                Blood Group Needed
              </label>

              <div className="custom-select">

                <div className="select-left">

                  <Droplets size={18} />

                  <select>

                    <option>
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

                  <select>

                    <option>
                      Select Request Status
                    </option>

                    <option>
                      Emergency
                    </option>

                    <option>
                      Urgent
                    </option>

                    <option>
                      Normal
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
                ></textarea>

              </div>

            </div>

            {/* PHOTO */}

            <div className="input-group full-width">

              <label>
                Upload Photo (Optional)
              </label>

              <label className="upload-box">

                <div className="upload-icon">

                  <ImagePlus size={22} />

                </div>

                <div>

                  <h4>
                    Upload Report / Photo
                  </h4>

                  <p>
                    JPG, PNG supported
                  </p>

                </div>

                <input type="file" />

              </label>

            </div>

            {/* BUTTON */}

            <button className="submit-btn">

              <HeartPulse size={18} />

              Create Blood Request

            </button>

          </form>

        </div>

      </div>

    </div>
    <Footer /></>
  );
}