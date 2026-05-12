// Badge.jsx

import "./Badge.css";

export default function Badge({
  text,
  type = "default",
}) {
  return (
    <div className={`badge badge-${type}`}>
      {text}
    </div>
  );
}