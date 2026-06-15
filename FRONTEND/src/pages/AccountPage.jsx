import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountPage = ({
  title,
  eyebrow,
  description,
  primaryAction,
  secondaryAction,
  quickLinks = [],
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="section-sm fade-up">
        <div className="container">
          <div className="card" style={{ padding: "2rem" }}>
            <span className="about-badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              {eyebrow}
            </span>

            <h1 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>{title}</h1>
            <p style={{ maxWidth: "56rem", marginTop: "1rem", lineHeight: 1.7, opacity: 0.85 }}>
              {description}
            </p>

            <div className="hero-buttons" style={{ marginTop: "1.5rem", flexWrap: "wrap" }}>
              <button className="primary-btn" type="button" onClick={() => navigate(primaryAction.to)}>
                {primaryAction.label}
                <ArrowRight size={18} />
              </button>

              {secondaryAction && (
                <button className="secondary-btn" type="button" onClick={() => navigate(secondaryAction.to)}>
                  {secondaryAction.label}
                </button>
              )}
            </div>
          </div>

          {quickLinks.length > 0 && (
            <div className="impact-grid" style={{ marginTop: "1.5rem" }}>
              {quickLinks.map((item) => (
                <button
                  key={item.to}
                  type="button"
                  className="impact-card"
                  onClick={() => navigate(item.to)}
                  style={{ textAlign: "left", border: "none", cursor: "pointer" }}
                >
                  <h3 style={{ marginBottom: "0.5rem" }}>{item.label}</h3>
                  <p style={{ margin: 0, opacity: 0.8 }}>{item.description}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountPage;
