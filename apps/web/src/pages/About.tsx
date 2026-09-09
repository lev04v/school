import { PageId } from "../components/Header";
import MandatoryDisclosure from "../components/MandatoryDisclosure";
import { PageHero } from "../components/PageHero";

interface AboutPageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function About({ onNavigate, onOpenAdmissionModal }: AboutPageProps) {
  const leadership = [
    {
      name: "Dr. Rajeshwari Swaminathan",
      role: "Principal & Director of Academics",
      qual: "M.Sc. (Physics), M.Ed., Ph.D. (Education)",
      exp: "28+ Years CBSE Leadership",
      award: "National CBSE Best Teacher Awardee",
    },
    {
      name: "Prof. H. S. Khurana",
      role: "Chairman & Patron",
      qual: "Former Senior Dean, Delhi University",
      exp: "35+ Years in Higher Education",
      award: "Padma Shri Nominee for Educational Reform",
    },
    {
      name: "Mrs. Meenakshi Sundaram",
      role: "Vice Principal & Head of Senior Secondary",
      qual: "M.A. (English Lit.), B.Ed.",
      exp: "22+ Years Senior Secondary Expertise",
      award: "CBSE Evaluator & State Gold Medalist",
    },
    {
      name: "Dr. Sunita Deshmukh",
      role: "Head of Senior Secondary Science & ATL",
      qual: "Ph.D. (Biotechnology), B.Ed.",
      exp: "18+ Years in NEET/JEE Mentorship",
      award: "State STEM Innovation Mentor",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="About Us"
        onNavigate={onNavigate}
        kicker="ESTABLISHED 1998 · NEW DELHI CBSE AFFILIATION"
        title={<>Our Heritage, Vision & <span className="text-shimmer">Academic Leadership</span></>}
        subtitle="Over 28 years of nurturing curious minds, producing CBSE Class 10 & 12 state toppers, and shaping ethical global citizens grounded in timeless Indian values."
        imageUrl="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Heritage Quadrangle and Library"
      />

      <section id="legacy-heritage" className="section-about-legacy container">
        <div className="legacy-grid">
          <div className="legacy-content">
            <span className="section-eyebrow">A QUARTER CENTURY OF EXCELLENCE</span>
            <h2 className="section-title">
              Educating with Purpose Since <em>1998</em>
            </h2>
            <p className="lead-paragraph">
              Founded under the aegis of the Horizon Educational Society, Horizon Academy was born
              with a clear vision: to provide premier Senior Secondary 10+2 education that blends
              rigorous academic frameworks with character, innovation, and civic responsibility.
            </p>
            <p>
              From our humble beginnings with 120 students to today’s sprawling 10-acre campus with over
              1,800 active scholars, Horizon Academy has consistently remained at the vanguard of
              Indian school education. Affiliated to the Central Board of Secondary Education (CBSE),
              New Delhi, our pedagogy embraces the National Education Policy (NEP 2020) while upholding
              our Sanskrit motto: <strong>“Vidya Dadati Vinayam”</strong> (Knowledge Bestows Humility).
            </p>

            <div className="legacy-pillars">
              <div className="legacy-pillar-box">
                <strong>Our Vision</strong>
                <p>To cultivate intellectual mastery, empathetic leadership, and scientific temper in every learner.</p>
              </div>
              <div className="legacy-pillar-box">
                <strong>Our Mission</strong>
                <p>To deliver world-class CBSE education backed by ATL robotics, holistic sports, and individualized mentoring.</p>
              </div>
            </div>
          </div>

          <div className="legacy-card-sidebar">
            <div className="legacy-stat-card">
              <span className="stat-giant">28+</span>
              <span className="stat-label">Years of Educational Pedagogy</span>
              <p className="stat-note">Over 14,000 alumni thriving in IITs, AIIMS, IIMs, civil services, and top global institutions.</p>
            </div>
            <div className="legacy-affiliation-box">
              <span className="badge-cbse">CBSE AFFILIATED</span>
              <h4>Central Board of Secondary Education</h4>
              <p>Affiliation Number: <strong>2130845</strong></p>
              <p>School Code: <strong>71204</strong></p>
              <p>Status: Senior Secondary (Pre-Primary to 10+2)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Full Address & Philosophy */}
      <section id="principal-message" className="section-principal-address container">
        <div className="principal-full-box">
          <div className="principal-portrait-col">
            <div className="principal-avatar-large">
              <span>DR</span>
            </div>
            <span className="principal-status-pill">Principal & Academic Director</span>
            <h4>Dr. Rajeshwari Swaminathan</h4>
            <p className="principal-creds">M.Sc. (Physics), M.Ed., Ph.D. (Education)</p>
            <span className="award-badge-inline">🏆 National CBSE Best Teacher Awardee</span>
          </div>

          <div className="principal-letter-col">
            <span className="section-eyebrow">MESSAGE FROM THE PRINCIPAL'S DESK</span>
            <h2 className="section-title">Nurturing Intellect, Cultivating Character</h2>
            <blockquote className="principal-lead-quote">
              “Education is not the learning of facts, but the training of the mind to think, to question courageously,
              and to serve our nation with unshakeable moral rectitude.”
            </blockquote>
            <div className="principal-letter-body">
              <p>
                Dear Parents, Scholars, and Well-Wishers,
              </p>
              <p>
                At Horizon Academy, we have spent 28 years proving that academic brilliance and human values do not
                belong in separate silos. When a student enters our 10-acre campus, our aim is not merely to prepare
                them for a high percentile on a CBSE mark sheet — though our 100% first-division record speaks for itself.
                Our true calling is to spark that deep, burning intellectual curiosity which transforms a child into
                an independent thinker, an ethical leader, and a compassionate global citizen.
              </p>
              <p>
                Through our Atal Tinkering Lab, our three specialized 10+2 streams (Science, Commerce, Humanities), and
                our four-house brotherhood, we provide every child the launchpad they deserve. I warmly invite you to
                walk our halls, meet our faculty, and experience the Horizon spirit firsthand.
              </p>
              <div className="principal-signoff">
                <strong>Dr. Rajeshwari Swaminathan</strong>
                <span>Principal & Director of Academics, Horizon Academy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership-directory" className="section-leadership-directory">
        <div className="container">
          <div className="center-heading">
            <span className="section-eyebrow">ACADEMIC COUNCIL</span>
            <h2 className="section-title">Institutional Leadership & School Management</h2>
            <p className="section-subtitle">
              Guided by distinguished educators, researchers, and administrators with decades of CBSE experience.
            </p>
          </div>

          <div className="leadership-grid">
            {leadership.map((leader, idx) => (
              <div className="leader-card" key={idx}>
                <div className="leader-avatar-icon">
                  <span>HA</span>
                </div>
                <h3 className="leader-name">{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <p className="leader-qual">{leader.qual}</p>
                <div className="leader-badges">
                  <span className="pill-exp">{leader.exp}</span>
                  <span className="pill-award">{leader.award}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="cbse-saras">
        <MandatoryDisclosure />
      </div>

      <section className="section-page-cta container">
        <div className="page-cta-box">
          <div>
            <h3>Ready to Explore Our Academic Curriculum?</h3>
            <p>Discover our specialized 10+2 Science, Commerce, and Humanities streams designed for university success.</p>
          </div>
          <div className="page-cta-actions">
            <button onClick={() => onNavigate("academics")} className="btn-hero-primary">
              View 10+2 Streams →
            </button>
            <button onClick={onOpenAdmissionModal} className="btn-hero-secondary">
              Apply for 2026-27
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
