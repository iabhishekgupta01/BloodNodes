import React from "react";

import {
  Droplets,
  ArrowLeft,
  House,
  SearchX,
} from "lucide-react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-page">
      {/* BG BLURS */}

      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>

      <div className="notfound-card fade-up">
        {/* ICON */}

        <div className="notfound-icon">
          <Droplets />
        </div>

        {/* ERROR */}

        <div className="error-text">
          <span>404</span>
        </div>

        {/* CONTENT */}

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for
          does not exist or may have
          been moved.
        </p>

        {/* MINI INFO */}

        <div className="mini-strip">
          <SearchX size={14} />
          BloodNode could not find this
          route
        </div>

        {/* ACTIONS */}

        <div className="action-buttons">
          <button className="home-btn">
            <House size={16} />
            Go Home
          </button>

          <button className="back-btn">
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;