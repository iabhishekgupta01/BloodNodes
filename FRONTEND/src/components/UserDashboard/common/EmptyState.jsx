// EmptyState.jsx

import "./EmptyState.css";

import {
  HeartCrack,
} from "lucide-react";

export default function EmptyState({
  title = "No Data Available",
  subtitle = "Nothing to show right now.",
}) {
  return (
    <div className="empty-state">

      <div className="empty-icon">

        <HeartCrack size={34} />

      </div>

      <h2>
        {title}
      </h2>

      <p>
        {subtitle}
      </p>

    </div>
  );
}