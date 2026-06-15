import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Droplets, Mail, Lock, HeartPulse, ShieldCheck, ArrowRight } from "lucide-react";

import { login as loginRequest } from "../api/authApi";
import { useAuth } from "../context/AuthContext.jsx";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const response = await loginRequest(email, password);

      if (!response?.token || !response?.role || !response?.id) {
        throw new Error("Login succeeded but the server returned incomplete data.");
      }

      setAuth(response.role, response.id, response.token);
      navigate(response.role === "hospital" ? "/hospital/dashboard" : "/user/dashboard", { replace: true });
    } catch (loginError) {
      const message =
        loginError?.message ||
        loginError?.error ||
        loginError?.response?.data?.message ||
        "Unable to login right now. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
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
              src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
              alt="Healthcare"
            />
          </div>

          <div className="hero-text">
            <h1>Secure Healthcare Access</h1>

            <p>
              Fast and trusted emergency blood coordination platform.
            </p>
          </div>

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

      <div className="login-right">
        <div className="login-card">
          <div className="card-header">
            <h2>Welcome Back</h2>

            <p>
              Login to continue helping save lives.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="login-email">Email</label>

              <div className="input-box">
                <Mail size={18} />

                <input
                  id="login-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="login-password">Password</label>

              <div className="input-box">
                <Lock size={18} />

                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="login-meta-row">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <span className="forgot-row">Forgot Password?</span>
            </div>

            {error ? <div className="form-error" role="alert">{error}</div> : null}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="register-link">
            Don’t have an account?
            <span> <Link to="/register">Register</Link></span>
          </div>

        </div>
      </div>
    </div>
  );
}