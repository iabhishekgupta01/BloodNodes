// UpdateBloodRequest.jsx

import "./UpdateBloodRequest.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Droplets,
  Activity,
  FileText,
  ImagePlus,
  HeartPulse,
  AlertTriangle,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

function UpdateBloodRequest() {
  return (
    <><Header />
    <div className="update-request-page">

      <div className="update-card">

        {/* HEADER */}

        <div className="update-header">

          <div>

            <div className="update-badge">

              <CheckCircle2 size={15} />

              Update Existing Request

            </div>

            <h1>
              Update Blood Request
            </h1>

            <p>
              Modify request status and fulfilled units
            </p>

          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
            alt="Update Request"
          />

        </div>

        {/* FORM */}

        <form className="update-form">

          {/* BLOOD GROUP */}

          <div className="input-group">

            <label>
              Blood Group
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

          {/* TOTAL UNITS */}

          <div className="input-group">

            <label>
              Total Units Needed
            </label>

            <div className="input-box">

              <Activity size={18} />

              <input
                type="number"
                placeholder="Enter Units"
              />

            </div>

          </div>

          {/* FULFILLED */}

          <div className="input-group">

            <label>
              Fulfilled Units
            </label>

            <div className="input-box">

              <HeartPulse size={18} />

              <input
                type="number"
                placeholder="Fulfilled Units"
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
                    Select Status
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

                  <option>
                    Fulfilled
                  </option>

                  <option>
                    Closed
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
                placeholder="Update patient or emergency details..."
              ></textarea>

            </div>

          </div>

          {/* PHOTO */}

          <div className="input-group full-width">

            <label>
              Update Photo (Optional)
            </label>

            <label className="upload-box">

              <div className="upload-icon">

                <ImagePlus size={22} />

              </div>

              <div>

                <h4>
                  Upload New Report / Photo
                </h4>

                <p>
                  JPG, PNG supported
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
            >

              Cancel

            </button>

            <button className="submit-btn">

              <CheckCircle2 size={18} />

              Update Request

            </button>

          </div>

        </form>

      </div>

    </div>
    <Footer /></>
  );
}

export default UpdateBloodRequest;