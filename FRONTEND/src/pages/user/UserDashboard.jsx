import React, { useMemo, useState } from "react";

import {
  Bell,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  HeartPulse,
  CalendarDays,
  Clock3,
  ShieldCheck,
  Droplets,
  MapPinned,
  ChevronRight,
  Sparkles,
  GlassWater,
  Salad,
  Ban,
  Dumbbell,
  Syringe,
  HeartHandshake,
} from "lucide-react";

import "./UserDashboard.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const questions = [
  "Do you currently have fever, cold, cough, or any infection?",

  "Have you donated blood in the last 3 months?",

  "Have you ever tested positive for HIV/AIDS or hepatitis B/C?",

  "Are you taking antibiotics or strong medicines right now?",

  "Do you have any serious heart, kidney, or blood-related disease?",

  "Have you had surgery, tattoo, or piercing in the last 6 months?",

  "Have you consumed alcohol in the last 24 hours?",

  "Have you had malaria, dengue, or typhoid recently?",

  "For females: Are you pregnant or breastfeeding?",

  "Are you below 18 years of age or below 50 kg?",
];

const UserDashboard = () => {
  const [step, setStep] =
    useState(0);

  const [answers, setAnswers] =
    useState([]);

  const [finished, setFinished] =
    useState(false);

  const currentQuestion =
    questions[step];

  const eligible = useMemo(() => {
    return !answers.includes(
      "yes"
    );
  }, [answers]);

  const handleAnswer = (
    value
  ) => {
    const updated = [
      ...answers,
      value,
    ];

    setAnswers(updated);

    if (
      step ===
      questions.length - 1
    ) {
      setFinished(true);
    } else {
      setStep(step + 1);
    }
  };

  const resetEligibility = () => {
    setStep(0);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <><Header />
    <div className="user-dashboard">
      {/* BACKGROUND */}

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <div className="container section-sm">
        {/* HERO */}

        <div className="user-hero fade-up">
          <div>
            <div className="hero-chip">
              <Sparkles size={13} />
              BloodNode User Panel
            </div>

            <h1>
              Donation Dashboard
            </h1>

            <p>
              Check eligibility &
              prepare for safe blood
              donation
            </p>
          </div>
        </div>

        {/* LAYOUT */}

        <div className="dashboard-layout">
          {/* LEFT */}

          <aside className="left-panel">
            <div className="dash-card glass fade-up">
              <div className="card-head">
                <h3>
                  <Bell size={15} />
                  Notifications
                </h3>
              </div>

              <div className="notify-list">
                <button className="notify-item">
                  <div className="notify-icon blue">
                    <Droplets
                      size={15}
                    />
                  </div>

                  <div>
                    <h4>
                      New O+ request
                    </h4>

                    <p>
                      5 mins ago
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                  />
                </button>

                <button className="notify-item">
                  <div className="notify-icon green">
                    <CheckCircle2
                      size={15}
                    />
                  </div>

                  <div>
                    <h4>
                      Camp nearby
                    </h4>

                    <p>
                      2.4 km away
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                  />
                </button>
              </div>
            </div>
          </aside>

          {/* CENTER */}

          <main className="center-panel">
            {/* ELIGIBILITY */}

            <div className="eligibility-card fade-up">
              <div className="eligibility-top">
                <div>
                  <span className="step-pill">
                    Question{" "}
                    {Math.min(
                      step + 1,
                      questions.length
                    )}
                    /
                    {
                      questions.length
                    }
                  </span>

                  <h2>
                    Blood Donation
                    Eligibility
                  </h2>
                </div>

                <div className="heart-icon">
                  <HeartPulse />
                </div>
              </div>

              {!finished ? (
                <>
                  <div className="question-box">
                    <p>
                      {
                        currentQuestion
                      }
                    </p>
                  </div>

                  <div className="answer-buttons">
                    <button
                      className="yes-btn"
                      onClick={() =>
                        handleAnswer(
                          "yes"
                        )
                      }
                    >
                      Yes
                    </button>

                    <button
                      className="no-btn"
                      onClick={() =>
                        handleAnswer(
                          "no"
                        )
                      }
                    >
                      No
                    </button>
                  </div>

                  <div className="progress-line">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${
                          ((step +
                            1) /
                            questions.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </>
              ) : (
                <div className="result-box">
                  {eligible ? (
                    <>
                      <div className="result-icon success">
                        <CheckCircle2 />
                      </div>

                      <h3>
                        You are eligible
                        for donation
                      </h3>

                      <p>
                        Great! You can
                        proceed for blood
                        donation.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="result-icon danger">
                        <XCircle />
                      </div>

                      <h3>
                        You are not
                        eligible right now
                      </h3>

                      <p>
                        Your body may need
                        rest or recovery
                        before donation.
                      </p>
                    </>
                  )}

                  <button
                    className="retest-btn"
                    onClick={
                      resetEligibility
                    }
                  >
                    Retest Eligibility
                  </button>
                </div>
              )}
            </div>

            {/* CAMP BUTTON */}

            <div className="camp-banner fade-up">
              <div className="camp-left">
                <MapPinned
                  size={22}
                />

                <div>
                  <h3>
                    Explore Donation
                    Camps
                  </h3>

                  <p>
                    Find nearby camps &
                    donate safely
                  </p>
                </div>
              </div>

              <button>
                View Camps
                <ChevronRight
                  size={15}
                />
              </button>
            </div>

            {/* BENEFITS */}

            <div className="info-section fade-up">
              <div className="section-head">
                <h3>
                  Donation Advantages
                </h3>
              </div>

              <div className="info-grid">
                <div className="info-card">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
                    alt=""
                  />

                  <h4>
                    Saves Lives
                  </h4>

                  <p>
                    One donation can help
                    multiple patients.
                  </p>
                </div>

                <div className="info-card">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
                    alt=""
                  />

                  <h4>
                    Health Check
                  </h4>

                  <p>
                    Basic health screening
                    happens before
                    donation.
                  </p>
                </div>

                <div className="info-card">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                    alt=""
                  />

                  <h4>
                    Heart Health
                  </h4>

                  <p>
                    Regular donation may
                    support heart health.
                  </p>
                </div>
              </div>
            </div>

            {/* DOS AND DONTS */}

            <div className="tips-grid fade-up">
              {/* DO */}

              <div className="tips-card do-card">
                <div className="tips-head">
                  <ShieldCheck
                    size={18}
                  />
                  Before & After
                  Donation
                </div>

                <div className="tips-list">
                  <div>
                    <GlassWater
                      size={16}
                    />
                    Drink lots of water
                  </div>

                  <div>
                    <Salad
                      size={16}
                    />
                    Eat healthy meals
                  </div>

                  <div>
                    <Dumbbell
                      size={16}
                    />
                    Take proper rest
                  </div>
                </div>
              </div>

              {/* DONT */}

              <div className="tips-card dont-card">
                <div className="tips-head">
                  <Ban size={18} />
                  Avoid
                </div>

                <div className="tips-list">
                  <div>
                    <Ban size={16} />
                    Alcohol before
                    donation
                  </div>

                  <div>
                    <Ban size={16} />
                    Heavy exercise after
                    donation
                  </div>

                  <div>
                    <Syringe
                      size={16}
                    />
                    Donating when sick
                  </div>
                </div>
              </div>
            </div>

            {/* MOTIVATION */}

            <div className="motivation-card fade-up">
              <div className="motivation-content">
                <HeartHandshake
                  size={26}
                />

                <div>
                  <h3>
                    Donate Blood, Save
                    Humanity
                  </h3>

                  <p>
                    If your body is
                    already fighting
                    something, don’t make
                    it fight a needle too.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* RIGHT */}

          <aside className="right-panel">
            <div className="dash-card solid fade-up">
              <div className="card-head">
                <h3>
                  <Droplets
                    size={15}
                  />
                  Eligibility
                </h3>
              </div>

              <div className="eligibility-stats">
                <div>
                  <span>
                    Last Donation
                  </span>

                  <strong>
                    12 Jan 2026
                  </strong>
                </div>

                <div>
                  <span>
                    Time Remaining
                  </span>

                  <strong>
                    14 Days
                  </strong>
                </div>

                <div>
                  <span>
                    Next Eligible
                  </span>

                  <strong>
                    26 May 2026
                  </strong>
                </div>

                <div>
                  <span>
                    Status
                  </span>

                  <strong className="eligible">
                    Eligible Soon
                  </strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <Footer /></>
  );
};

export default UserDashboard;