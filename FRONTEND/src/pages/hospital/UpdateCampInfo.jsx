// UpdateCampInfo.jsx

import "./UpdateCampInfo.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
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
          onSubmit={(e) => e.preventDefault()}
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

              <input type="date" />

            </div>

          </div>

          {/* TIME */}

          <div className="input-group">

            <label>
              Camp Time
            </label>

            <div className="input-box">

              <Clock3 size={18} />

              <input type="time" />

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
            >

              Cancel

            </button>

            <button
              type="submit"
              className="primary-btn"
            >

              <CheckCircle2 size={18} />

              Update Camp

            </button>

          </div>

        </form>

      </div>

    </div>
    <Footer /></>
  );
}