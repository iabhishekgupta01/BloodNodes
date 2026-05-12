 
 import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.css';

function HomePage() {
    return (
        <>
            <Header />
            
            <main className="home-main">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Connecting Blood Donors & Hospitals During Emergencies
                            </h1>
                            <p className="hero-subtitle">
                                Real-time emergency blood coordination powered by AI. Hospitals create requests, nearby donors receive alerts instantly, and lives are saved faster.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn-primary">Become a Donor</button>
                                <button className="btn-secondary">Emergency Request</button>
                            </div>
                            <div className="hero-trust">
                                <p>✓ Verified by Medical Professionals</p>
                                <p>✓ Secure & Compliant</p>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-card card-1">
                                <span className="card-icon">🩸</span>
                                <p>Blood Request</p>
                            </div>
                            <div className="hero-card card-2">
                                <span className="card-icon">✓</span>
                                <p>Donor Match</p>
                            </div>
                            <div className="hero-card card-3">
                                <span className="card-icon">⚡</span>
                                <p>Emergency Alert</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="features-container">
                        <h2 className="section-title">Core Features</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🎯</div>
                                <h3>Emergency Blood Matching</h3>
                                <p>AI-powered matching connects hospitals with nearby blood donors in seconds during critical moments.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>AI Inventory Scan</h3>
                                <p>Intelligent blood inventory management and real-time tracking across connected hospitals.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔔</div>
                                <h3>Nearby Donor Alerts</h3>
                                <p>Instant notifications to registered donors within proximity when their blood type is needed urgently.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏥</div>
                                <h3>Live Donation Camps</h3>
                                <p>Organize and manage blood donation camps with real-time coordination and donor participation tracking.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="how-it-works">
                    <div className="how-container">
                        <h2 className="section-title">How It Works</h2>
                        <div className="workflow-timeline">
                            <div className="workflow-step">
                                <div className="step-number">1</div>
                                <h3>Hospital Creates Request</h3>
                                <p>Hospital quickly creates an emergency blood request with specific blood type and urgency level.</p>
                            </div>
                            <div className="workflow-arrow">→</div>
                            <div className="workflow-step">
                                <div className="step-number">2</div>
                                <h3>Nearby Donors Get Alert</h3>
                                <p>Registered donors within proximity receive instant alert notifications on their devices.</p>
                            </div>
                            <div className="workflow-arrow">→</div>
                            <div className="workflow-step">
                                <div className="step-number">3</div>
                                <h3>Donor Accepts Request</h3>
                                <p>Available donors accept the request and provide estimated time of arrival.</p>
                            </div>
                            <div className="workflow-arrow">→</div>
                            <div className="workflow-step">
                                <div className="step-number">4</div>
                                <h3>Hospital Receives Help</h3>
                                <p>Hospital receives confirmed donor information and coordinates the donation process.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="stats-section">
                    <div className="stats-container">
                        <h2 className="section-title">Making a Difference</h2>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">5,000+</div>
                                <p>Registered Donors</p>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">250+</div>
                                <p>Connected Hospitals</p>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">1,500+</div>
                                <p>Lives Saved</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency CTA Section */}
                <section className="emergency-cta">
                    <div className="cta-content">
                        <h2>Every Minute Matters in Blood Emergencies</h2>
                        <p>Join BloodNode today and help save lives in your community</p>
                        <div className="cta-buttons">
                            <button className="btn-primary-large">Get Started Now</button>
                            <button className="btn-secondary-large">Learn More</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default HomePage;