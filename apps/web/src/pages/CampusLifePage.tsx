import { PageId } from "../components/Header";
import CampusLife from "../components/CampusLife";
import { PageHero } from "../components/PageHero";

interface CampusLifePageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function CampusLifePage({ onNavigate }: CampusLifePageProps) {
  const clubs = [
    {
      name: "Robotics & AI Innovation Guild",
      category: "STEM & NITI Aayog ATL",
      desc: "ATL-powered tech innovators building Arduino, Raspberry Pi, and machine learning prototypes for national-level hackathons.",
      members: "85+ Active Innovators",
      schedule: "Tuesdays & Thursdays",
      icon: "fas fa-robot",
      badgeColor: "#2563eb",
      bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      iconColor: "#1d4ed8",
      highlight: "National ATL Marathon Finalists 2025",
    },
    {
      name: "Horizon Model United Nations (HMUN)",
      category: "Diplomacy & Geopolitics",
      desc: "Intensive training in international law, multilateral treaties, parliamentary rules of procedure, and crisis committee debate.",
      members: "110+ Student Delegates",
      schedule: "Wednesdays & Saturdays",
      icon: "fas fa-globe-americas",
      badgeColor: "#0284c7",
      bgGradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      iconColor: "#0284c7",
      highlight: "Best Delegation Award at Delhi Inter-School MUN",
    },
    {
      name: "Eco-Warriors & Sustainability Cell",
      category: "Environment & Botanical Care",
      desc: "Student-led organic kitchen gardens, electronic e-waste recycling drives, rainwater harvesting oversight, and Delhi heritage walks.",
      members: "95+ Green Volunteers",
      schedule: "Mondays & Fridays",
      icon: "fas fa-seedling",
      badgeColor: "#059669",
      bgGradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      iconColor: "#059669",
      highlight: "Zero-Single-Use-Plastic Campus Award",
    },
    {
      name: "Editorial & Oratory Society",
      category: "Literature, Journalism & Rhetoric",
      desc: "Publishers of the quarterly school magazine 'The Horizon Chronicle', host of national bilingual debates, and poetry slams.",
      members: "60+ Writers & Orators",
      schedule: "Wednesdays & Fridays",
      icon: "fas fa-feather-alt",
      badgeColor: "#d97706",
      bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      iconColor: "#b45309",
      highlight: "State Inter-School Bilingual Debate Champions",
    },
    {
      name: "Symphony & Classical Dance Ensemble",
      category: "Performing & Fine Arts",
      desc: "Professional instruction in Hindustani classical vocal, Tabla, Sitar, Western violin/keyboard, and classical Bharatnatyam.",
      members: "130+ Student Artists",
      schedule: "Daily Afternoon Sessions",
      icon: "fas fa-music",
      badgeColor: "#7c3aed",
      bgGradient: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
      iconColor: "#7c3aed",
      highlight: "State Youth Cultural Festival Gold Medals",
    },
    {
      name: "Taekwondo & Martial Arts Academy",
      category: "Physical Fitness & Self-Defense",
      desc: "NIS-certified martial arts instruction focusing on agility, discipline, black belt gradings, and CBSE zonal tournament representations.",
      members: "75+ Ranked Athletes",
      schedule: "Mon, Wed & Fri Mornings",
      icon: "fas fa-shield-halved",
      badgeColor: "#e11d2e",
      bgGradient: "linear-gradient(135deg, #fff1f2 0%, #fee2e2 100%)",
      iconColor: "#e11d2e",
      highlight: "8 State Gold Medals in CBSE Zonal Meet",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Facilities"
        onNavigate={onNavigate}
        kicker="10-Acre Campus · World-Class Facilities"
        title={<>A vibrant campus built for <em>holistic growth.</em></>}
        subtitle="Education flourishes when students are immersed in world-class research laboratories, dynamic athletic arenas, inspiring creative studios, and nurturing residential houses."
        imageUrl="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Sports Complex and Athletic Arena"
        primaryCtaLabel="Explore Campus Facilities"
        onPrimaryCtaClick={() => document.getElementById("facilities")?.scrollIntoView({ behavior: "smooth" })}
      />

      {/* Main Facilities & House System */}
      <CampusLife />

      {/* Co-Curricular Societies & Student Clubs */}
      <section className="section-clubs" id="co-curricular-clubs">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">PASSION BEYOND CLASSROOMS</span>
            <h2 className="section-title">Co-Curricular Societies &amp; <span>Student Clubs</span></h2>
            <p className="section-subtitle">
              Every Horizonian actively participates in at least one student society, cultivating leadership,
              collaborative teamwork, and expressive confidence.
            </p>
          </div>

          <div className="clubs-grid">
            {clubs.map((club, idx) => (
              <article
                className={`club-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                key={idx}
              >
                <div className="club-card-header">
                  <div
                    className="club-icon-circle"
                    style={{
                      background: club.bgGradient,
                      color: club.iconColor,
                      boxShadow: `0 8px 20px ${club.iconColor}25`,
                      border: `1px solid ${club.iconColor}30`,
                    }}
                  >
                    <i className={club.icon} />
                  </div>
                  <div>
                    <span
                      className="club-category-pill"
                      style={{ color: club.badgeColor }}
                    >
                      {club.category}
                    </span>
                    <h3 className="club-name">{club.name}</h3>
                  </div>
                </div>

                <p className="club-desc">{club.desc}</p>

                <div className="club-meta-strip">
                  <span className="club-meta-item">
                    <i className="fas fa-users" /> {club.members}
                  </span>
                  <span className="club-meta-item">
                    <i className="fas fa-calendar-alt" /> {club.schedule}
                  </span>
                </div>

                <div className="club-highlight-footer">
                  <i className="fas fa-award" />
                  <span>{club.highlight}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Monitored & Safe Transport Fleet */}
      <section className="section-transport" id="transport-fleet">
        <div className="container">
          <div className="transport-banner-card">
            <div className="transport-copy reveal-left">
              <span className="section-eyebrow eyebrow-light">STUDENT COMMUTE SAFETY</span>
              <h3 className="transport-title">100% Monitored &amp; GPS-Tracked AC Transport Fleet</h3>
              <p className="transport-desc">
                Horizon Academy operates a fleet of 35+ air-conditioned buses traversing every major neighborhood
                and residential sector across Delhi and NCR. Every vehicle is fitted with automated speed governors
                (capped at 40 km/h), dual HD CCTV cameras, emergency SOS panic buttons, first-aid kits, and certified female attendants.
              </p>

              <div className="transport-features-strip">
                <div className="trans-feat-pill">
                  <i className="fas fa-satellite-dish" />
                  <span>Live GPS Tracking via Parent App</span>
                </div>
                <div className="trans-feat-pill">
                  <i className="fas fa-tachometer-alt" />
                  <span>Speed Governors (Max 40 km/h)</span>
                </div>
                <div className="trans-feat-pill">
                  <i className="fas fa-video" />
                  <span>Dual HD CCTV in Every Bus</span>
                </div>
                <div className="trans-feat-pill">
                  <i className="fas fa-female" />
                  <span>Certified Female Attendants Onboard</span>
                </div>
              </div>
            </div>

            <div className="transport-action-box reveal-right">
              <div className="transport-icon-floating">
                <i className="fas fa-bus-alt" />
              </div>
              <h4>Check Your Bus Route &amp; Stop</h4>
              <p>
                Speak to our dedicated transport supervisor to confirm pick-up timings and route coverage in your residential area.
              </p>
              <div className="transport-contact-buttons">
                <a href="tel:+911128904455" className="btn-call-desk">
                  <i className="fas fa-phone-alt" /> Call Transport Desk
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate("contact", "campus-location")}
                  className="btn-hero-primary full-width"
                >
                  <i className="fas fa-route" /> View Route Map &amp; Stops
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
