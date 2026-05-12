
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  HeartHandshake,
  Users,
  ShieldCheck,
  Droplets,
  ArrowRight,
} from "lucide-react";

function AboutPage() {
  return (
    <><Header />
    <section className="about-page section">

      {/* HERO */}

      <div className="container">

        <div className="about-hero">

          <div className="about-hero-left fade-up">

            <span className="about-badge">
              🩸 About BloodNode
            </span>

            <h1>
              Connecting Donors
              <span> With Lives</span>
            </h1>

            <p>
              BloodNode is a community-driven platform helping
              people discover blood donation camps, connect with
              donors, and support emergency blood requests in a
              safer and faster way.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Camps
              </button>

              <button className="secondary-btn">
                Become Donor
              </button>
            </div>

          </div>

          <div className="about-hero-right fade-up">

            <div className="hero-image-card main-card">
              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop"
                alt="Blood Donation"
              />
            </div>

            <div className="floating-card top-card">
              ❤️ 12,000+ Lives Supported
            </div>

            <div className="floating-card bottom-card">
              🏥 Trusted Hospitals & NGOs
            </div>

          </div>

        </div>
      </div>


      {/* MISSION */}

      <div className="mission-section">
        <div className="container">

          <div className="section-heading">
            <span>OUR PURPOSE</span>
            <h2>Why BloodNode Exists</h2>
            <p>
              Every minute someone needs blood during emergencies,
              surgeries or treatments. BloodNode helps bridge the
              gap between donors, hospitals and people in need.
            </p>
          </div>

          <div className="mission-grid">

            <div className="mission-card fade-up">
              <div className="mission-icon">
                <Droplets size={28} />
              </div>

              <h3>Easy Donation Access</h3>

              <p>
                Discover nearby blood donation camps and donation
                opportunities in just a few clicks.
              </p>
            </div>

            <div className="mission-card fade-up">
              <div className="mission-icon">
                <Users size={28} />
              </div>

              <h3>Community Support</h3>

              <p>
                Build a strong donor community that supports people
                during emergencies and urgent situations.
              </p>
            </div>

            <div className="mission-card fade-up">
              <div className="mission-icon">
                <ShieldCheck size={28} />
              </div>

              <h3>Trusted Healthcare Partners</h3>

              <p>
                We collaborate with hospitals and healthcare
                organizations for safe donation experiences.
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* STORY SECTION */}

      <div className="container">

        <div className="story-section">

          <div className="story-image fade-up">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
              alt="Community"
            />
          </div>

          <div className="story-content fade-up">

            <span className="mini-title">
              OUR STORY
            </span>

            <h2>
              Built To Make Blood Donation More Human
            </h2>

            <p>
              BloodNode was inspired by the idea that no one should
              struggle to find blood during critical moments.
              Instead of complicated systems and scattered contacts,
              we wanted to create a platform that feels simple,
              community-focused and accessible.
            </p>

            <p>
              Our mission is not just about technology — it’s about
              making people feel supported during difficult times.
            </p>

            <button className="story-btn">
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>


      {/* IMPACT */}

      <div className="impact-section">

        <div className="container">

          <div className="section-heading center">
            <span>OUR IMPACT</span>
            <h2>Together We’re Making A Difference</h2>
          </div>

          <div className="impact-grid">

            <div className="impact-card fade-up">
              <h3>25K+</h3>
              <p>Registered Donors</p>
            </div>

            <div className="impact-card fade-up">
              <h3>120+</h3>
              <p>Donation Camps</p>
            </div>

            <div className="impact-card fade-up">
              <h3>40+</h3>
              <p>Healthcare Partners</p>
            </div>

            <div className="impact-card fade-up">
              <h3>15K+</h3>
              <p>Lives Supported</p>
            </div>

          </div>

        </div>

      </div>


      {/* CTA */}

      <div className="container">

        <div className="about-cta fade-up">

          <div>
            <span className="cta-badge">
              ❤️ Join The Community
            </span>

            <h2>
              Your Small Donation Can Save Someone’s Life
            </h2>

            <p>
              Become part of a growing community of donors helping
              hospitals and patients during emergencies.
            </p>
          </div>

          <button className="cta-btn">
            Become A Donor
            <HeartHandshake size={18} />
          </button>

        </div>

      </div>

    </section>
    <Footer /></>
  );
}

export default AboutPage;


