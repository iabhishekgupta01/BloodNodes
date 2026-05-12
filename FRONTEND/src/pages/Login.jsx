// Login.jsx

import "./Login.css";
import { Link } from "react-router-dom";

import {
  Droplets,
  Mail,
  Lock,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Login() {
  return (
    <div className="login-page">

      {/* LEFT SECTION */}
      <div className="login-left">

        <div className="blur blur1"></div>
        <div className="blur blur2"></div>

        <div className="left-content">

          {/* BRAND */}
          <div className="brand">
            <div className="logo">
              <Droplets size={28} />
            </div>

            <h2>BloodNode</h2>
          </div>

          {/* IMAGE */}
          <div className="hero-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
              alt="Healthcare"
            />
          </div>

          {/* TEXT */}
          <div className="hero-text">
            <h1>Secure Healthcare Access</h1>

            <p>
              Fast and trusted emergency blood
              coordination platform.
            </p>
          </div>

          {/* MINI CARDS */}
          <div className="mini-cards">

            <div className="mini-card">
              <HeartPulse size={18} />
              Real-Time Emergency Response
            </div>

            <div className="mini-card">
              <ShieldCheck size={18} />
              Secure Platform Access
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="login-right">

        <div className="login-card">

          <div className="card-header">
            <h2>Welcome Back</h2>

            <p>
              Login to continue helping save lives.
            </p>
          </div>

          <form className="login-form">

            {/* EMAIL */}
            <div className="input-group">

              <label>Email</label>

              <div className="input-box">
                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            {/* PASSWORD */}
            <div className="input-group">

              <label>Password</label>

              <div className="input-box">
                <Lock size={18} />

                <input
                  type="password"
                  placeholder="Enter password"
                />
              </div>

            </div>

            {/* FORGOT */}
            <div className="forgot-row">
              <span>Forgot Password?</span>
            </div>

            {/* LOGIN BUTTON */}
            <button className="login-btn">
              Login
              <ArrowRight size={18} />
            </button>

          </form>

          {/* REGISTER */}
          <div className="register-link">
            Don’t have an account?
            <span> <Link to="/register" >Register</Link></span>
          </div>

        </div>
      </div>
    </div>
  );
}