// PopupModal.jsx

import "./PopupModal.css";

import {
  X,
} from "lucide-react";

export default function PopupModal({
  open,
  title,
  subtitle,
  children,
  onClose,
}) {

  if (!open) return null;

  return (
    <div className="popup-overlay">

      <div className="popup-modal">

        {/* CLOSE */}

        <button
          className="popup-close-btn"
          onClick={onClose}
        >

          <X size={18} />

        </button>

        {/* CONTENT */}

        <div className="popup-content">

          <h2>
            {title}
          </h2>

          {subtitle && (
            <p>
              {subtitle}
            </p>
          )}

          <div className="popup-body">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}