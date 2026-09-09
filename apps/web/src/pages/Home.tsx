import { useState } from "react";
import { PageId } from "../components/Header";

interface HomePageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Home({ onNavigate, onOpenAdmissionModal }: HomePageProps) {
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);

  return (
    <div className="homepage-wrap animate-fade-in">
      <section className="kingster-hero-wrap" id="top">
        <div className="hero-banner">
          {/* Eager high-priority campus image with smooth progressive fade */}
          <img
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1280&q=70"
            alt="Horizon Academy Academic Campus"
            className={`hero-banner-bg-img ${heroImgLoaded ? "is-loaded" : ""}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setHeroImgLoaded(true)}
          />
          <div className="hero-banner-overlay" />
          <div className="container hero-content">
            <div className="hero-badge-row">
              <span className="hero-badge">
                <span className="badge-dot" /> CBSE SENIOR SECONDARY SCHOOL · ESTD. 1998
              </span>
              <span className="hero-motto">“Vidya Dadati Vinayam” — Knowledge Bestows Humility</span>
            </div>

            <h1 className="hero-heading">
              Where Ambition Meets <em className="text-shimmer">Academic Distinction.</em>
            </h1>

            <p className="hero-description">
              Horizon Academy is a benchmark 10+2 CBSE institution in Delhi/NCR, combining
              rigorous NCERT excellence with Atal Tinkering Lab (ATL) robotics, national Olympiads,
              and specialized Senior Secondary streams in Science, Commerce, and Humanities.
            </p>

            <div className="hero-cta-group">
              <button onClick={() => onOpenAdmissionModal()} className="btn-hero-primary">
                <span>Admissions Open (2026-27)</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="btn-hero-secondary">
                <span>Explore 10+2 Streams</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </button>
              <button onClick={() => onNavigate("admissions", "admission-steps")} className="btn-hero-ghost">
                <span>Admission Process & Info →</span>
              </button>
            </div>

            <div className="hero-highlights-strip">
              <div className="highlight-pill">
                <strong>100%</strong>
                <span>CBSE Board Pass Rate</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-pill">
                <strong>98.4%</strong>
                <span>Class 12 City Topper</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-pill">
                <strong>40+ PGT/TGT</strong>
                <span>Master Faculty</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-pill">
                <strong>ATL Lab</strong>
                <span>NITI Aayog Approved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container floating-cards-container">
          <div className="floating-cards-grid">
            <div className="floating-card">
              <div className="card-top-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <span className="card-stage">NURSERY — CLASS V</span>
              <h3 className="card-title">Foundational Wing</h3>
              <p className="card-text">
                Play-based experiential learning following NEP 2020. Child-centric smart classrooms,
                phonics, and foundational numeracy.
              </p>
              <button onClick={() => onNavigate("academics", "foundational-wing")} className="card-link-btn">
                <span>Explore Wing Curriculum</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="floating-card">
              <div className="card-top-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <span className="card-stage">CLASS VI — CLASS X</span>
              <h3 className="card-title">Secondary School</h3>
              <p className="card-text">
                Rigorous NCERT syllabus, Olympiad training, ATL robotics projects,
                and stellar Class 10 Board exam coaching.
              </p>
              <button onClick={() => onNavigate("academics", "secondary-wing")} className="card-link-btn">
                <span>View Class IX-X Details</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="floating-card card-accent">
              <div className="card-top-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <span className="card-stage">CLASS XI — XII (10+2)</span>
              <h3 className="card-title">Senior Secondary Streams</h3>
              <p className="card-text">
                Specialized Science (PCM/PCB), Commerce, and Humanities with integrated
                IIT-JEE, NEET, CUET, and CA Foundation mentoring.
              </p>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="card-link-btn">
                <span>Explore 3 Streams</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="floating-card">
              <div className="card-top-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <span className="card-stage">10-ACRE ENVIRONMENT</span>
              <h3 className="card-title">Campus & Co-Curriculars</h3>
              <p className="card-text">
                Atal Tinkering Lab, sports turf ground, 4-House leadership, composite
                science labs, and 100% GPS-tracked bus fleet.
              </p>
              <button onClick={() => onNavigate("facilities", "facilities-overview")} className="card-link-btn">
                <span>View Campus Facilities</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-hook container">
        <div className="hook-split-grid">
          <div className="hook-text-col">
            <span className="section-eyebrow">ESTABLISHED 1998 · LEGACY OF EXCELLENCE</span>
            <h2 className="section-title">
              Why Discerning Parents Choose <em>Horizon Academy</em>
            </h2>
            <p className="hook-lead">
              For over 28 years, Horizon Academy has built an impeccable reputation for blending
              rigorous academic achievement in CBSE Board Examinations with deep-seated Indian ethics.
            </p>
            <div className="hook-points-list">
              <div className="hook-point-item">
                <span className="point-icon">★</span>
                <div>
                  <strong>Proven CBSE Board Supremacy:</strong>
                  <p>100% 1st division pass record with city-highest scores (98.4%) across all three 10+2 streams.</p>
                </div>
              </div>
              <div className="hook-point-item">
                <span className="point-icon">★</span>
                <div>
                  <strong>NITI Aayog Approved ATL STEM Center:</strong>
                  <p>Hands-on 3D printing, IoT sensors, and robotics from Class VI upwards.</p>
                </div>
              </div>
              <div className="hook-point-item">
                <span className="point-icon">★</span>
                <div>
                  <strong>Complete Transparency & SARAS Compliance:</strong>
                  <p>Full statutory disclosures, certified safety standards, and transparent fee policies.</p>
                </div>
              </div>
            </div>

            <div className="hook-btn-row">
              <button onClick={() => onNavigate("about", "legacy-heritage")} className="btn-hero-primary">
                Read Our 28-Year Story & Leadership →
              </button>
            </div>
          </div>

          <div className="hook-visual-col">
            <div className="hook-badge-card">
              <div className="badge-shield-graphic">
                <span>28+</span>
                <small>YEARS OF TRUST</small>
              </div>
              <div className="badge-card-content">
                <h4>14,000+ Alumni Worldwide</h4>
                <p>Thriving across IITs, AIIMS, Delhi University, IIMs, civil services, and multinational leadership.</p>
                <div className="badge-stats-row">
                  <div><strong>100%</strong><span>Board Pass</span></div>
                  <div><strong>1:20</strong><span>Faculty Ratio</span></div>
                  <div><strong>10 Acres</strong><span>Campus</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-streams-hook">
        <div className="container">
          <div className="center-heading">
            <span className="section-eyebrow">SPECIALIZED 10+2 PATHWAYS</span>
            <h2 className="section-title">Senior Secondary Pathways (Class XI & XII)</h2>
            <p className="section-subtitle">
              Each stream is engineered with specialized subject groups and dedicated competitive coaching
              to launch students into India's foremost colleges.
            </p>
          </div>

          <div className="streams-preview-grid">
            <div className="stream-preview-card">
              <span className="stream-pill-tag">SCIENCE STREAM</span>
              <h3>Medical & Non-Medical (PCM / PCB)</h3>
              <p>Physics, Chemistry, Maths, Biology, Computer Science, and integrated JEE/NEET mentorship.</p>
              <ul className="stream-feature-bullets">
                <li>Individual senior practical workstations</li>
                <li>Atal Tinkering Lab project integration</li>
                <li>Daily problem-solving tutorials</li>
              </ul>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="stream-card-cta">
                View Science Syllabus & Labs →
              </button>
            </div>

            <div className="stream-preview-card">
              <span className="stream-pill-tag">COMMERCE STREAM</span>
              <h3>Business & Financial Leadership</h3>
              <p>Accountancy, Business Studies, Economics, Applied Maths, IP, and CUET / CA Foundation cell.</p>
              <ul className="stream-feature-bullets">
                <li>Tally ERP & stock market simulation</li>
                <li>Annual Youth Entrepreneurship Conclave</li>
                <li>Top admissions in SRCC & Hindu College</li>
              </ul>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="stream-card-cta">
                View Commerce Syllabus →
              </button>
            </div>

            <div className="stream-preview-card">
              <span className="stream-pill-tag">HUMANITIES STREAM</span>
              <h3>Policy, Law & Social Sciences</h3>
              <p>History, Political Science, Psychology, Sociology, Legal Studies, and CLAT / UPSC foundation.</p>
              <ul className="stream-feature-bullets">
                <li>Horizon Model United Nations (MUN)</li>
                <li>Psychology laboratory & psychometrics</li>
                <li>National Youth Parliament laureates</li>
              </ul>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="stream-card-cta">
                View Humanities Syllabus →
              </button>
            </div>
          </div>

          <div className="streams-hook-footer">
            <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="btn-hero-primary">
              Compare All 3 Streams & Subject Groups →
            </button>
          </div>
        </div>
      </section>

      <section className="section-leader-hook container">
        <div className="leader-hook-box">
          <div className="leader-hook-quote-side">
            <span className="section-eyebrow eyebrow-light">FROM THE PRINCIPAL'S DESK</span>
            <blockquote className="leader-hook-quote">
              “True education is not merely the accumulation of facts, but the training of the mind
              to think analytically, empathize deeply, and act with moral integrity.”
            </blockquote>
            <div className="leader-hook-author">
              <strong>Dr. Rajeshwari Swaminathan</strong>
              <span>M.Sc. (Physics), M.Ed., Ph.D. | Principal & Director of Academics</span>
              <small>National CBSE Educator Awardee</small>
            </div>
            <button onClick={() => onNavigate("about", "principal-message")} className="btn-cta-gold">
              Read Principal's Full Address & Philosophy →
            </button>
          </div>

          <div className="leader-hook-seal-side">
            <div className="official-seal-badge">
              <span className="seal-star-big">★</span>
              <strong>HORIZON ACADEMY</strong>
              <span>OFFICIAL CBSE SEAL</span>
              <small>AFFIL NO. 2130845</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section-adm-hook container">
        <div className="adm-hook-banner">
          <div className="adm-hook-text">
            <span className="adm-live-badge">🔴 ADMISSIONS OPEN · SESSION 2026–27</span>
            <h2 className="adm-hook-title">Begin Your Child's Journey of Excellence</h2>
            <p className="adm-hook-sub">
              Seats filling fast for Pre-Primary (Nursery, LKG, UKG), Class I, Class IX,
              and Class XI (Science, Commerce & Humanities). Review fee structures and schedule your campus tour.
            </p>
            <div className="adm-hook-buttons">
              <button onClick={() => onOpenAdmissionModal()} className="btn-hero-primary">
                Apply Online Now (2026-27)
              </button>
              <button onClick={() => onNavigate("admissions", "admission-steps")} className="btn-call-desk">
                Admission Process & Eligibility →
              </button>
            </div>
          </div>

          <div className="adm-hook-facts">
            <div className="fact-box">
              <span className="fact-label">Registration Deadline</span>
              <strong className="fact-val">Session 2026–27</strong>
            </div>
            <div className="fact-box">
              <span className="fact-label">Affiliation Status</span>
              <strong className="fact-val">10+2 CBSE All Streams</strong>
            </div>
            <div className="fact-box">
              <span className="fact-label">Age Eligibility</span>
              <strong className="fact-val">As per NEP 2020</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-campus-hook">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">WORLD-CLASS INFRASTRUCTURE</span>
              <h2 className="section-title">Life on Our 10-Acre Campus</h2>
            </div>
            <button onClick={() => onNavigate("facilities", "facilities-overview")} className="text-link-decorated">
              Explore All Facilities & Clubs →
            </button>
          </div>

          <div className="campus-preview-grid">
            <div className="campus-card-teaser">
              <span className="teaser-icon">⚡</span>
              <h3>Atal Tinkering Lab (ATL)</h3>
              <p>NITI Aayog recognized innovation hub with 3D printers, IoT sensors, and robotics.</p>
            </div>

            <div className="campus-card-teaser">
              <span className="teaser-icon">🔬</span>
              <h3>Composite Science Labs</h3>
              <p>Senior physics, chemistry & biotechnology labs equipped for CBSE board practicals.</p>
            </div>

            <div className="campus-card-teaser">
              <span className="teaser-icon">⚽</span>
              <h3>Sports & Turf Arena</h3>
              <p>Cricket turf ground, basketball courts, 200m track, and certified NIS coaches.</p>
            </div>

            <div className="campus-card-teaser">
              <span className="teaser-icon">🏛️</span>
              <h3>The Four House System</h3>
              <p>Raman, Tagore, Ashoka, and Shivaji houses developing camaraderie and leadership.</p>
            </div>
          </div>

          <div className="center-btn-row">
            <button onClick={() => onNavigate("facilities", "house-system")} className="btn-call-desk">
              Discover Campus Life & House Standings →
            </button>
          </div>
        </div>
      </section>

      <section className="section-bulletin-hook container">
        <div className="bulletin-split-grid">
          <div className="bulletin-left">
            <div className="block-header">
              <div>
                <span className="section-eyebrow">OFFICIAL NOTICES</span>
                <h3 className="block-title">Latest Circulars</h3>
              </div>
              <button onClick={() => onNavigate("circulars", "circulars-archive")} className="link-academic-calendar">
                All Notices Archive →
              </button>
            </div>

            <div className="bulletin-quick-list">
              <div className="bulletin-quick-item">
                <span className="item-date">04 Oct 2026</span>
                <div>
                  <strong>Online Registration Open for Session 2026-27 (10+2 Streams)</strong>
                  <span className="item-ref">Ref: HA/ADM/26-27/01</span>
                </div>
              </div>
              <div className="bulletin-quick-item">
                <span className="item-date">28 Sep 2026</span>
                <div>
                  <strong>CBSE AISSE & AISSCE Class 10/12 Board Practical Exam Schedule</strong>
                  <span className="item-ref">Ref: CBSE/COORD/2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bulletin-right">
            <div className="block-header">
              <div>
                <span className="section-eyebrow">CAMPUS DIARY</span>
                <h3 className="block-title">Upcoming Event</h3>
              </div>
              <button onClick={() => onNavigate("circulars", "academic-calendar")} className="link-academic-calendar">
                Full 2026-27 Calendar →
              </button>
            </div>

            <div className="event-feature-box">
              <div className="event-date-badge">
                <span className="badge-month">OCT</span>
                <strong className="badge-day">18</strong>
                <span className="badge-year">2026</span>
              </div>
              <div className="event-feature-info">
                <h4>Inter-School ATL Robotics & STEM Conclave</h4>
                <p>09:30 AM – 03:00 PM · Horizon Raman Auditorium & ATL Labs</p>
                <button onClick={() => onNavigate("circulars", "circulars-archive")} className="event-join-link">
                  View Event Schedule & Invitation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-visit-hook container">
        <div className="visit-hook-card">
          <div>
            <span className="section-eyebrow eyebrow-light">COME SAY HELLO</span>
            <h2 className="visit-hook-heading">Experience Our Campus in Person</h2>
            <p className="visit-hook-desc">
              Book a campus tour with our admission counselors, meet faculty, and inspect our classrooms.
              Located at Sector 14, Institutional Area, New Delhi / NCR.
            </p>
          </div>
          <div className="visit-hook-actions">
            <button onClick={() => onNavigate("contact", "tour-booking")} className="btn-cta-gold">
              Schedule a Campus Tour →
            </button>
            <a href="tel:+911128904455" className="btn-hero-ghost">
              Call Admissions: +91 11 2890 4455
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
