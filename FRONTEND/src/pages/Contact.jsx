
import "./ContactPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

function ContactPage() {
  return (
    <><Header />
    <section className="contact-page section">

      {/* HERO */}

      <div className="container">

        <div className="contact-hero fade-up">

          <div className="contact-hero-left">

            <span className="contact-badge">
              ❤️ Contact BloodNode
            </span>

            <h1>
              We’re Here To
              <span> Help & Support</span>
            </h1>

            <p>
              Whether you want to organize a donation camp,
              report an emergency blood request, partner with us,
              or simply ask a question — our team is ready to help.
            </p>

            <div className="hero-support-cards">

              <div className="support-card">
                <div className="support-icon">
                  <HeartHandshake size={22} />
                </div>

                <div>
                  <h4>Emergency Support</h4>
                  <p>
                    Assistance for urgent blood requests.
                  </p>
                </div>
              </div>

              <div className="support-card">
                <div className="support-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h4>Trusted Healthcare Network</h4>
                  <p>
                    Connected hospitals and medical teams.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="contact-hero-right fade-up">

            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
                alt="Healthcare Support"
              />
            </div>

            <div className="floating-contact-card top-float">
              🩸 24/7 Support Team
            </div>

            <div className="floating-contact-card bottom-float">
              🏥 Partnered With Hospitals
            </div>

          </div>

        </div>

      </div>


      {/* MAIN CONTACT SECTION */}

      <div className="container">

        <div className="contact-main-grid">

          {/* LEFT INFO */}

          <div className="contact-info-section fade-up">

            <div className="section-mini-title">
              CONTACT DETAILS
            </div>

            <h2>
              Reach Out Anytime
            </h2>

            <p className="contact-info-text">
              Our team works with healthcare organizations,
              volunteers and donors to make blood donation more
              accessible and supportive for everyone.
            </p>


            {/* CONTACT CARDS */}

            <div className="contact-info-grid">

              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h4>Email Address</h4>
                  <p>support@bloodnode.org</p>
                  <span>
                    Send us your questions anytime.
                  </span>
                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h4>Phone Number</h4>
                  <p>+91 98765 43210</p>
                  <span>
                    Available for urgent assistance.
                  </span>
                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4>Office Address</h4>
                  <p>Indore, Madhya Pradesh</p>
                  <span>
                    Supporting donors across multiple cities.
                  </span>
                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <Clock3 size={22} />
                </div>

                <div>
                  <h4>Working Hours</h4>
                  <p>24/7 Emergency Assistance</p>
                  <span>
                    General support: 9 AM – 8 PM
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="contact-form-wrapper fade-up">

            <div className="form-top">

              <span className="form-badge">
                💬 Send Message
              </span>

              <h3>
                Let’s Connect
              </h3>

              <p>
                Fill out the form below and our team will get back
                to you as soon as possible.
              </p>

            </div>


            <form className="contact-form">

              <div className="input-grid">

                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>


              <div className="input-grid">

                <div className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="input-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                  />
                </div>

              </div>


              <div className="input-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>
              </div>


              <button className="send-btn">
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* HELP SECTION */}

      <div className="container">

        <div className="help-section fade-up">

          <div className="help-content">

            <span className="help-badge">
              💡 Need Quick Help?
            </span>

            <h2>
              Common Questions & Support
            </h2>

            <p>
              Our support team can guide you regarding donation
              eligibility, nearby camps, emergency blood requests,
              hospital partnerships and donor registrations.
            </p>

          </div>

          <div className="help-cards">

            <div className="help-card">
              <MessageCircle size={24} />
              <h4>Donation Guidance</h4>
              <p>
                Learn about blood donation process and eligibility.
              </p>
            </div>

            <div className="help-card">
              <HeartHandshake size={24} />
              <h4>Emergency Requests</h4>
              <p>
                Assistance for urgent blood requirement situations.
              </p>
            </div>

            <div className="help-card">
              <ShieldCheck size={24} />
              <h4>Hospital Partnerships</h4>
              <p>
                Connect with healthcare organizations and NGOs.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
    <Footer /></>
  );
}

export default ContactPage;
