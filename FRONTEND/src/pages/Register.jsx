import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { registerHospital, registerUser } from "../api/authApi.js";

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

import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("donor");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    registrationNumber: "",
    address: "",
    pincode: "",
    licenseNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setStep(1);
    setError("");
    setSuccess("");
  };

  const validateStep = (currentStep) => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const address = formData.address.trim();
    const pincode = formData.pincode.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (currentStep === 1) {
      if (!name || !email || !phone) {
        return "Name, email and phone number are required.";
      }

      if (activeTab === "hospital" && !formData.licenseNumber.trim()) {
        return "Hospital license number is required.";
      }

      if (activeTab === "ngo" && !formData.registrationNumber.trim()) {
        return "NGO registration number is required.";
      }
    }

    if (currentStep === 2) {
      if ((activeTab === "donor" || activeTab === "ngo") && !formData.bloodGroup) {
        return "Please select a blood group.";
      }

      if (!address || !pincode) {
        return "Address and pincode are required.";
      }
    }

    if (currentStep === 3) {
      if (!password || !confirmPassword) {
        return "Password and confirm password are required.";
      }

      if (password !== confirmPassword) {
        return "Password and confirm password do not match.";
      }
    }

    return "";
  };

  const nextStep = () => {
    const validationMessage = validateStep(step);

    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setError("");

    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (step < 3) {
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const address = formData.address.trim();
    const pincode = formData.pincode.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!name || !email || !phone || !address || !pincode || !password || !confirmPassword) {
      setError("Please complete all required fields before continuing.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    try {
      setLoading(true);

      if (activeTab === "hospital") {
        if (!formData.licenseNumber.trim()) {
          setError("Please enter the hospital license number.");
          return;
        }

        const response = await registerHospital({
          hospitalName: name,
          liscenseNumber: formData.licenseNumber.trim(),
          email,
          phone,
          password,
          address,
          pincode,
        });

        if (response.status >= 400) {
          setError(response.message || "Hospital registration failed.");
          return;
        }
      } else {
        if (!formData.bloodGroup) {
          setError("Please select a blood group.");
          return;
        }

        const response = await registerUser({
          name,
          email,
          phone,
          password,
          bloodGroup: formData.bloodGroup,
          address,
          pincode,
        });

        if (response.status >= 400) {
          setError(response.message || "Registration failed.");
          return;
        }
      }

      setSuccess("Account created successfully. Redirecting to login...");
      setTimeout(() => navigate("/login"), 1200);
    } catch (registerError) {
      setError(
        registerError?.message ||
          registerError?.response?.data?.message ||
          "Unable to register right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
              type="button"
              onClick={() => handleTabChange("donor")}
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
              type="button"
              onClick={() => handleTabChange("ngo")}
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
              type="button"
              onClick={() => handleTabChange("hospital")}
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

          <form id="register-form" className="form-grid" onSubmit={handleSubmit}>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <Input
                  name="name"
                  icon={<User size={18} />}
                  label={
                    activeTab === "hospital"
                      ? "Hospital Name"
                      : activeTab === "ngo"
                      ? "NGO Name"
                      : "Full Name"
                  }
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Input
                  name="email"
                  icon={<Mail size={18} />}
                  label="Email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  name="phone"
                  icon={<Phone size={18} />}
                  label="Mobile Number"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {activeTab === "hospital" && (
                  <Input
                    name="licenseNumber"
                    icon={<ShieldCheck size={18} />}
                    label="License Number"
                    placeholder="License Number"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                  />
                )}

                {activeTab === "ngo" && (
                  <Input
                    name="registrationNumber"
                    icon={<ShieldCheck size={18} />}
                    label="Registration Number"
                    placeholder="Registration Number"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                  />
                )}
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                {(activeTab === "donor" || activeTab === "ngo") && (
                  <div className="input-group">
                    <label>Blood Group</label>

                    <div className="input-box">
                      <Droplets size={18} />

                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                      >
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
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <Input
                  name="pincode"
                  icon={<Hash size={18} />}
                  label="Pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
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
                  name="password"
                  icon={<Lock size={18} />}
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <Input
                  name="confirmPassword"
                  icon={<Lock size={18} />}
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </>
            )}

            {error ? <div className="register-feedback register-error">{error}</div> : null}
            {success ? <div className="register-feedback register-success">{success}</div> : null}

          </form>

          {/* BUTTONS */}
          <div className="button-row">

            {step > 1 && (
              <button
                className="secondary-btn"
                type="button"
                onClick={prevStep}
              >
                <ArrowLeft size={18} />
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                className="primary-btn"
                type="button"
                onClick={nextStep}
              >
                Next
                <ArrowRight size={18} />
              </button>
            ) : (
              <button className="primary-btn" type="submit" form="register-form" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
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
  name,
  icon,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="input-group">

      <label>{label}</label>

      <div className="input-box">
        {icon}

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}