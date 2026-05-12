// MobileBottomBar.jsx

import "./MobileBottomBar.css";

import {
  Home,
  Droplets,
  Clock3,
  HeartPulse,
  User,
} from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar">

      <button className="bottom-item active-bottom">

        <div className="bottom-icon">
          <Home size={22} />
        </div>

        <span>Home</span>

      </button>

      <button className="bottom-item">

        <div className="bottom-icon">
          <Droplets size={22} />
        </div>

        <span>Requests</span>

      </button>

      <button className="bottom-item center-btn">

        <div className="center-circle">
          <HeartPulse size={26} />
        </div>

      </button>

      <button className="bottom-item">

        <div className="bottom-icon">
          <Clock3 size={22} />
        </div>

        <span>History</span>

      </button>

      <button className="bottom-item">

        <div className="bottom-icon">
          <User size={22} />
        </div>

        <span>Profile</span>

      </button>

    </div>
  );
}