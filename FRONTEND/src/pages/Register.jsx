// Register.jsx

import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


import "./Register.css";

import {
  Droplets,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Building2,
  ShieldCheck,
  Upload,
  Hash,
  HeartPulse,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Header from "../components/Header.jsx";

export default function Register() {
  const [activeTab, setActiveTab] = useState("donor");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
   
    <>
    <div className="register-page">

      {/* LEFT SECTION */}
      <div className="register-left">

        <div className="blur blur1"></div>
        <div className="blur blur2"></div>

        <div className="left-content">

          <div className="brand">
            <div className="logo">
              <Droplets size={28} />
            </div>

            <h2>BloodNode</h2>
          </div>

          <div className="hero-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Healthcare"
            />
          </div>

          <div className="hero-text">
            <h1>Emergency Blood Network</h1>

            <p>
              Connecting donors, NGOs and hospitals
              faster during emergencies.
            </p>
          </div>

          <div className="mini-cards">

            <div className="mini-card">
              <HeartPulse size={18} />
              Real-Time Emergency Coordination
            </div>

            <div className="mini-card">
              <ShieldCheck size={18} />
              Trusted Healthcare Platform
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="register-right">

        <div className="register-card">

          <div className="card-header">
            <h2>Create Account</h2>

            <p>
              Join BloodNode emergency network.
            </p>
          </div>

          {/* TABS */}
          <div className="tabs">

            <button
              className={
                activeTab === "donor"
                  ? "tab active-tab"
                  : "tab"
              }
              onClick={() => {
                setActiveTab("donor");
                setStep(1);
              }}
            >
              <User size={16} />
              Donor
            </button>

            <button
              className={
                activeTab === "ngo"
                  ? "tab active-tab"
                  : "tab"
              }
              onClick={() => {
                setActiveTab("ngo");
                setStep(1);
              }}
            >
              <HeartPulse size={16} />
              NGO
            </button>

            <button
              className={
                activeTab === "hospital"
                  ? "tab active-tab"
                  : "tab"
              }
              onClick={() => {
                setActiveTab("hospital");
                setStep(1);
              }}
            >
              <Building2 size={16} />
              Hospital
            </button>

          </div>

          {/* STEP INDICATOR */}
          <div className="step-indicator">

            <div className={step >= 1 ? "step active-step" : "step"}>
              1
            </div>

            <div className="line"></div>

            <div className={step >= 2 ? "step active-step" : "step"}>
              2
            </div>

            <div className="line"></div>

            <div className={step >= 3 ? "step active-step" : "step"}>
              3
            </div>

          </div>

          <form className="form-grid">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <Input
                  icon={<User size={18} />}
                  label={
                    activeTab === "hospital"
                      ? "Hospital Name"
                      : activeTab === "ngo"
                      ? "NGO Name"
                      : "Full Name"
                  }
                  placeholder="Enter Name"
                />

                <Input
                  icon={<Mail size={18} />}
                  label="Email"
                  placeholder="Enter Email"
                />

                <Input
                  icon={<Phone size={18} />}
                  label="Mobile Number"
                  placeholder="Phone Number"
                />

                {activeTab === "hospital" && (
                  <Input
                    icon={<ShieldCheck size={18} />}
                    label="License Number"
                    placeholder="License Number"
                  />
                )}

                {activeTab === "ngo" && (
                  <Input
                    icon={<ShieldCheck size={18} />}
                    label="Registration Number"
                    placeholder="Registration Number"
                  />
                )}
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                {activeTab === "donor" && (
                  <div className="input-group">
                    <label>Blood Group</label>

                    <div className="input-box">
                      <Droplets size={18} />

                      <select>
                        <option>Select Group</option>
                        <option>A+</option>
                        <option>B+</option>
                        <option>O+</option>
                        <option>AB+</option>
                        <option>A-</option>
                        <option>B-</option>
                        <option>O-</option>
                        <option>AB-</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="input-group full-width">
                  <label>Address</label>

                  <div className="textarea-box">
                    <MapPin size={18} />

                    <textarea
                      placeholder="Enter Address"
                    ></textarea>
                  </div>
                </div>

                <Input
                  icon={<Hash size={18} />}
                  label="Pincode"
                  placeholder="Pincode"
                />

                {activeTab === "hospital" && (
                  <div className="input-group">
                    <label>Upload License</label>

                    <div className="upload-box">
                      <Upload size={18} />

                      <input type="file" />
                    </div>
                  </div>
                )}
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <Input
                  icon={<Lock size={18} />}
                  label="Password"
                  placeholder="Password"
                  type="password"
                />

                <Input
                  icon={<Lock size={18} />}
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                />
              </>
            )}

          </form>

          {/* BUTTONS */}
          <div className="button-row">

            {step > 1 && (
              <button
                className="secondary-btn"
                onClick={prevStep}
              >
                <ArrowLeft size={18} />
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                className="primary-btn"
                onClick={nextStep}
              >
                Next
                <ArrowRight size={18} />
              </button>
            ) : (
              <button className="primary-btn">
                Create Account
              </button>
            )}

          </div>

          <div className="login-link">
            Already have an account?
            <span> <Link to="/login" >Login</Link></span>
          </div>

        </div>
      </div>
    </div>
 <Footer />
    </>
  );
}

function Input({
  icon,
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div className="input-group">

      <label>{label}</label>

      <div className="input-box">
        {icon}

        <input
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}