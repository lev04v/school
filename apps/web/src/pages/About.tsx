import React, { useState } from "react";
import { PageId } from "../components/Header";
import MandatoryDisclosure from "../components/MandatoryDisclosure";
import JourneyExplorer from "../components/JourneyExplorer";
import { PageHero } from "../components/PageHero";

interface AboutPageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function About({ onNavigate, onOpenAdmissionModal }: AboutPageProps) {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "vidya",
      sanskrit: "विद्या (Vidya)",
      title: "Intellectual Rigor & Scientific Inquiry",
      desc: "Cultivating unyielding curiosity, analytical reasoning, and empirical scientific temper through hands-on laboratory discovery and conceptual depth.",
      icon: "fas fa-atom",
      quote: "Knowledge is not memorization; it is the courage to question, investigate, and discover.",
      stat: "100% Board First-Division",
    },
    {
      id: "vinay",
      sanskrit: "विनय (Vinay)",
      title: "Moral Character, Humility & Empathy",
      desc: "Inspired by 'Vidya Dadati Vinayam', instilling grounded ethical values, selfless community service, democratic discipline, and deep empathy for all living beings.",
      icon: "fas fa-hands-helping",
      quote: "True greatness lies in humility, respect for elders, and compassion for society.",
      stat: "Value-Rooted Citizenry",
    },
    {
      id: "vijaya",
      sanskrit: "विजय (Vijaya)",
      title: "Fearless Competitive Triumph",
      desc: "Empowering scholars to excel at national and global arenas — from IIT-JEE and NEET medical to national athletics, debate rostrums, and international diplomacy.",
      icon: "fas fa-trophy",
      quote: "We don't merely prepare students to participate; we train them to lead with integrity.",
      stat: "14,000+ Global Achievers",
    },
  ];

  const distinctionPillars = [
    {
      icon: "fas fa-medal",
      title: "Academic Rigor & Board Centum",
      desc: "Unbroken 100% first-division CBSE results, with 52+ students scoring above 90% aggregate and top ranks in IIT-JEE, NEET, and CUET.",
      highlight: "CBSE AISSE & AISSCE",
    },
    {
      icon: "fas fa-microchip",
      title: "NITI Aayog ATL STEM Labs",
      desc: "Hands-on 3D printing, Arduino microcontrollers, IoT sensor workstations, and drone technology producing 14 national marathon laureates.",
      highlight: "Govt. Recognized Hub",
    },
    {
      icon: "fas fa-running",
      title: "10-Acre Sports Complex",
      desc: "All-weather football turf, floodlit cricket practice nets, FIBA basketball court, badminton arena, and certified NIS national trainers.",
      highlight: "Multi-Sport Arena",
    },
    {
      icon: "fas fa-theater-masks",
      title: "Acoustic Performing Arts Hall",
      desc: "800-seat multi-purpose auditorium hosting Model UN conferences, bilingual debate championships, and classical orchestra performances.",
      highlight: "800-Seater Amphitheatre",
    },
    {
      icon: "fas fa-bed",
      title: "Residential Boarding Care",
      desc: "Separate residential hostels for boys and girls from Class IV with 24/7 medical infirmary, nutritious dining, and evening remedial coaching.",
      highlight: "24/7 Pastoral Supervision",
    },
    {
      icon: "fas fa-globe-americas",
      title: "HORIZON-OBA Alumni Network",
      desc: "A vibrant fraternity of 14,000+ alumni thriving across premier IITs, AIIMS, Indian Civil Services, and Fortune 500 corporate leadership.",
      highlight: "14,000+ Active Alumni",
    },
  ];

  const facultyMembers = [
    {
      name: "Dr. Vikramaditya Sharma",
      role: "Head of Physics & ATL Mentor",
      qual: "M.Sc. (Physics), Ph.D. · 24+ Yrs Exp",
      desc: "Specialist in IIT-JEE Advanced mechanics, electrodynamics, and mentor of 14 national ATL Innovation laureates.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mrs. Anuradha Sengupta",
      role: "Head of Chemistry",
      qual: "M.Sc. (Organic Chem), B.Ed., Gold Medalist · 20+ Yrs Exp",
      desc: "Former CBSE Evaluator with proven methodology for 100% board distinction in Class 12 chemistry practicals.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mr. Rajiv Lochan Das",
      role: "Head of Mathematics & JEE Apex Cell",
      qual: "M.Sc. (Applied Maths) · 19+ Yrs Exp",
      desc: "Renowned mentor for calculus, vector algebra, and high-speed competitive analytical reasoning.",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. Meenakshi Sundaram",
      role: "Head of Biology & NEET Medical Cell",
      qual: "M.Sc. (Biotech), Ph.D. · 18+ Yrs Exp",
      desc: "Leads synchronized NCERT-NEET medical preparation; students consistently score 350+ in NEET Biology.",
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mrs. Priya Chawla",
      role: "Head of Commerce & CA Foundation",
      qual: "M.Com, UGC-NET · 17+ Yrs Exp",
      desc: "Expert in corporate financial accountancy, macro-economics, and mentor of state commerce toppers.",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mr. Sandeep Mukherjee",
      role: "Head of Computer Science & AI Studio",
      qual: "M.Tech (Computer Science) · 16+ Yrs Exp",
      desc: "Guides students in Python, SQL, C++, machine learning basics, and cybersecurity project architectures.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mrs. Shalini Rathore",
      role: "Head of Humanities & MUN Lead",
      qual: "M.A. (Political Science & History) · 18+ Yrs Exp",
      desc: "Convenor of Horizon Model United Nations (HMUN), legal studies coaching, and international relations debates.",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mr. Devendra Negi",
      role: "Director of Physical Education & NIS Coach",
      qual: "M.P.Ed., NIS Certified Athletics Coach · 22+ Yrs Exp",
      desc: "Former national sprinter developing championship teams in cricket, basketball, track & field events.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Hero Banner */}
      <PageHero
        breadcrumbCurrent="About"
        onNavigate={onNavigate}
        kicker="Heritage & Ethos · Est. 1998"
        title={<>Nearly three decades of <em>institutional excellence.</em></>}
        subtitle="Founded in 1998 under the Horizon Educational Trust, Horizon Academy has evolved into a premier national CBSE benchmark — preparing compassionate, resilient, and future-ready global leaders."
        imageUrl="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Historic Main Campus Building"
        primaryCtaLabel="Explore Our Journey"
        onPrimaryCtaClick={() => {
          document.getElementById("chapter-journey")?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Stats Ribbon */}
      <section className="story-stats" id="legacy-heritage">
        <div className="container">
          <div className="story-stats__grid">
            <div className="story-stats__item reveal-left">
              <div className="stat-number">28+</div>
              <div className="stat-label">Years of Academic Heritage</div>
            </div>
            <div className="story-stats__item reveal-left delay-100">
              <div className="stat-number">14,000+</div>
              <div className="stat-label">Global Alumni Fraternity</div>
            </div>
            <div className="story-stats__item reveal-right delay-200">
              <div className="stat-number">120+</div>
              <div className="stat-label">Master Faculty &amp; Evaluators</div>
            </div>
            <div className="story-stats__item reveal-right delay-300">
              <div className="stat-number">100%</div>
              <div className="stat-label">CBSE First-Division Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOUNDING ETHOS & THE 3 CORE PILLARS */}
      <section className="section-ethos-manifesto" id="vision">
        <div className="container">
          <div className="ethos-manifesto-grid">
            {/* Left: Founder's Vision Decree */}
            <div className="founder-decree-card reveal-left">
              <div className="decree-header-strip">
                <span className="decree-tag">ESTD. 1998 · REG. TRUST</span>
                <span className="decree-seal-badge">
                  <i className="fas fa-landmark" />
                </span>
              </div>

              <h2 className="decree-title">
                The Founding Dream: <em>Character Before Intellect</em>
              </h2>
              <p className="decree-text">
                "When we founded Horizon Academy in 1998, our ambition was never to create an ordinary examination coaching factory.
                We envisioned a sanctuary of higher human values where young minds are nurtured to be intellectually fierce, morally incorruptible,
                and profoundly humble."
              </p>
              <p className="decree-text" style={{ marginTop: 14 }}>
                Rooted in <strong>"Vidya Dadati Vinayam"</strong> (Knowledge Bestows Humility), our students learn that true intellect is not demonstrated
                by pride or exam scores alone, but by character, empathy, and lifelong contributions to society.
              </p>

              <div className="founder-signature-box">
                <div className="founder-avatar-circle">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    alt="Prof. H. S. Khurana"
                  />
                </div>
                <div>
                  <strong className="founder-name">Prof. H. S. Khurana</strong>
                  <span className="founder-title">Founding Chairman &amp; Patron, Horizon Educational Trust</span>
                  <span className="founder-meta">Former Senior Dean &amp; National Education Reformer</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive 3 Pillars */}
            <div className="ethos-pillars-column reveal-right">
              <div className="pillars-header">
                <span className="section-eyebrow">OUR TIMELESS FOUNDATION</span>
                <h3 className="pillars-main-title">The Three Triad Pillars of Horizon</h3>
                <p className="pillars-main-sub">
                  Every curricular activity, pastoral care routine, and academic lesson at Horizon Academy is calibrated around these three eternal principles:
                </p>
              </div>

              <div className="pillars-interactive-stack">
                {pillars.map((p, idx) => (
                  <div
                    key={p.id}
                    className={`pillar-interactive-card ${activePillar === idx ? "is-selected" : ""}`}
                    onClick={() => setActivePillar(idx)}
                  >
                    <div className="pillar-card-top">
                      <div className="pillar-icon-box">
                        <i className={p.icon} />
                      </div>
                      <div className="pillar-title-wrap">
                        <span className="pillar-sanskrit-tag">{p.sanskrit}</span>
                        <h4 className="pillar-title">{p.title}</h4>
                      </div>
                      <span className="pillar-stat-chip">{p.stat}</span>
                    </div>

                    <p className="pillar-desc">{p.desc}</p>
                    <blockquote className="pillar-quote">"{p.quote}"</blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NEW INTERACTIVE JOURNEY EXPLORER */}
      <JourneyExplorer />

      {/* SECTION 3: THE 6 PILLARS OF Horizon DISTINCTION */}
      <section className="section-horizon-distinction" id="chapter-values">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">DISTINCTIVE EXCELLENCE</span>
            <h2 className="section-title">What Defines the <span>Horizon Edge</span></h2>
            <p className="section-subtitle">
              Six institutional pillars that set Horizon Academy apart as a premier educational benchmark in Delhi NCR.
            </p>
          </div>

          <div className="distinction-grid">
            {distinctionPillars.map((item, idx) => (
              <article
                className={`distinction-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                key={idx}
              >
                <div className="dist-card-header">
                  <div className="dist-icon-circle">
                    <i className={item.icon} />
                  </div>
                  <span className="dist-highlight-badge">{item.highlight}</span>
                </div>

                <h3 className="dist-card-title">{item.title}</h3>
                <p className="dist-card-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CAMPUS LIFE & INFRASTRUCTURE SPOTLIGHT */}
      <section className="section-campus-spotlight" id="facilities">
        <div id="facilities-overview" style={{ position: "relative", top: -80 }} />
        <div className="container">
          <div className="campus-spotlight-banner">
            <div className="spotlight-copy-col reveal-left">
              <span className="section-eyebrow eyebrow-light">WORLD-CLASS INFRASTRUCTURE</span>
              <h2 className="spotlight-title">10-Acre Master Campus Built for Every Dimension of Learning</h2>
              <p className="spotlight-desc">
                From high-precision NITI Aayog ATL robotics workstations and independent CBSE science research labs to Olympic-standard athletic turfs and digital touch smart classrooms — our campus provides an expansive, safe, and motivating environment for every child.
              </p>

              <div className="spotlight-quick-specs">
                <div className="spec-item">
                  <i className="fas fa-check-circle" /> <span>62 Smart Digiboards</span>
                </div>
                <div className="spec-item">
                  <i className="fas fa-check-circle" /> <span>7 Specialized Labs</span>
                </div>
                <div className="spec-item">
                  <i className="fas fa-check-circle" /> <span>800-Seat Auditorium</span>
                </div>
                <div className="spec-item">
                  <i className="fas fa-check-circle" /> <span>22,000 Sq. Mtrs Turf</span>
                </div>
              </div>

              <div className="spotlight-actions">
                <button
                  type="button"
                  onClick={() => onNavigate("facilities", "facilities-overview")}
                  className="btn-hero-primary"
                >
                  <i className="fas fa-building" /> Explore All 12+ Facilities on Campus Life Page
                </button>
              </div>
            </div>

            <div className="spotlight-visual-col reveal-right">
              <div className="spotlight-img-card">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
                  alt="Horizon Academy Modern Campus Facilities"
                />
                <div className="spotlight-stat-float">
                  <strong>40,468 m²</strong>
                  <span>Sprawling 10-Acre Green Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GOVERNANCE, LEADERSHIP & FACULTY DIRECTORY */}
      <section className="section-governance-faculty" id="faculty">
        <div id="chapter-leaders" style={{ position: "relative", top: -80 }} />
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">ACADEMIC STEWARDSHIP</span>
            <h2 className="section-title">Visionary Leadership &amp; <span>Master Mentors</span></h2>
            <p className="section-subtitle">
              Guiding our institution towards academic distinction, moral integrity, and competitive triumph under 120+ veteran CBSE mentors.
            </p>
          </div>

          {/* Leadership Duo */}
          <div className="leadership-duo-grid">
            <div className="leadership-card reveal-left">
              <div className="leadership-img-box">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                  alt="Dr. Rajeshwari Swaminathan"
                />
              </div>
              <div className="leadership-info">
                <span className="leadership-role-tag">Principal &amp; Director of Academics</span>
                <h3 className="leadership-name">Dr. Rajeshwari Swaminathan</h3>
                <p className="leadership-qual">M.Sc. (Physics), M.Ed., Ph.D. · 28+ Years CBSE Experience</p>
                <p className="leadership-bio">
                  Leading with pedagogical innovation, curriculum modernization under NEP 2020, and compassionate pastoral supervision across all senior wings.
                </p>
              </div>
            </div>

            <div className="leadership-card reveal-right">
              <div className="leadership-img-box">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Prof. H. S. Khurana"
                />
              </div>
              <div className="leadership-info">
                <span className="leadership-role-tag">Founding Chairman &amp; Patron</span>
                <h3 className="leadership-name">Prof. H. S. Khurana</h3>
                <p className="leadership-qual">M.A., M.Phil., Ph.D. · Eminent Educationalist &amp; Dean</p>
                <p className="leadership-bio">
                  Visionary founder whose moral decree 'Vidya Dadati Vinayam' continues to inspire the character-centric educational framework of Horizon Academy.
                </p>
              </div>
            </div>
          </div>

          {/* Distinguished Senior PGT Faculty Directory */}
          <div className="faculty-directory-block" style={{ marginTop: 64 }}>
            <div className="center-heading reveal-up">
              <span className="section-eyebrow">HEADS OF DEPARTMENTS</span>
              <h3 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}>
                Senior PGT &amp; <span>Academic Mentors</span>
              </h3>
              <p className="section-subtitle">
                Our faculty comprises seasoned educationalists, researchers, and competitive exam mentors with an average of 18+ years of dedicated teaching excellence.
              </p>
            </div>

            <div className="faculty-directory-grid">
              {facultyMembers.map((fac, idx) => (
                <div
                  className={`faculty-card-modern ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                  key={idx}
                >
                  <div className="faculty-avatar-wrap">
                    <img src={fac.photo} alt={fac.name} loading="lazy" />
                  </div>
                  <h4 className="faculty-card-name">{fac.name}</h4>
                  <span className="faculty-card-dept">{fac.role}</span>
                  <span className="faculty-card-qual">{fac.qual}</span>
                  <p className="faculty-card-exp">{fac.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Society Board of Trustees */}
          <div className="trustees-block" style={{ marginTop: 60 }}>
            <div className="center-heading reveal-up">
              <span className="section-eyebrow">GOVERNANCE &amp; TRUST</span>
              <h3 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                Horizon Educational Trust <span>Board Members</span>
              </h3>
            </div>

            <div className="trustees-grid">
              <div className="trustee-card reveal-left">
                <div className="trustee-avatar"><i className="fas fa-user-tie" /></div>
                <h5>Shri S. K. Narayan, IAS (Retd.)</h5>
                <p>President of Society</p>
              </div>
              <div className="trustee-card reveal-left delay-100">
                <div className="trustee-avatar"><i className="fas fa-user" /></div>
                <h5>Mrs. Vandana Khurana</h5>
                <p>Treasurer</p>
              </div>
              <div className="trustee-card reveal-right delay-200">
                <div className="trustee-avatar"><i className="fas fa-user-tie" /></div>
                <h5>Dr. A. K. Sengupta</h5>
                <p>Academic Advisor</p>
              </div>
              <div className="trustee-card reveal-right delay-300">
                <div className="trustee-avatar"><i className="fas fa-user-tie" /></div>
                <h5>Shri R. P. Verma</h5>
                <p>Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Horizon GROUP OF INSTITUTIONS */}
      <section className="section-group-institutions" id="chapter-institutions">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">EDUCATIONAL ECOSYSTEM</span>
            <h2 className="section-title">Institutions Operating Under <span>Horizon Educational Trust</span></h2>
            <p className="section-subtitle">
              A comprehensive educational continuum spanning foundational early-years to postgraduate teacher training.
            </p>
          </div>

          <div className="group-inst-grid">
            <div className="group-inst-card reveal-left">
              <div className="group-inst-icon" style={{ background: "#2563eb" }}>
                <i className="fas fa-graduation-cap" />
              </div>
              <span className="group-inst-type">CBSE Affiliation 2130845</span>
              <h4>Horizon Academy</h4>
              <p className="group-inst-sub">Composite Senior Secondary (10+2)</p>
              <ul className="group-inst-list">
                <li><i className="fas fa-check-circle" /> Science (PCM/PCB), Commerce &amp; Arts</li>
                <li><i className="fas fa-check-circle" /> NITI Aayog Approved ATL STEM Hub</li>
                <li><i className="fas fa-check-circle" /> Boarding &amp; Day-Scholar Provisions</li>
              </ul>
            </div>

            <div className="group-inst-card reveal-left delay-100">
              <div className="group-inst-icon" style={{ background: "#ec4899" }}>
                <i className="fas fa-child" />
              </div>
              <span className="group-inst-type">Foundational Learning</span>
              <h4>Horizon Junior Wing</h4>
              <p className="group-inst-sub">Montessori, Nursery to Class V</p>
              <ul className="group-inst-list">
                <li><i className="fas fa-check-circle" /> Sensory Play-Way Learning Labs</li>
                <li><i className="fas fa-check-circle" /> Child-Safe Ergonomic Infrastructure</li>
                <li><i className="fas fa-check-circle" /> Foundational Literacy &amp; Numeracy (FLN)</li>
              </ul>
            </div>

            <div className="group-inst-card reveal-right delay-200">
              <div className="group-inst-icon" style={{ background: "#10b981" }}>
                <i className="fas fa-globe-americas" />
              </div>
              <span className="group-inst-type">Global Pedagogy</span>
              <h4>Horizon Global Wing</h4>
              <p className="group-inst-sub">Middle &amp; Secondary Global School</p>
              <ul className="group-inst-list">
                <li><i className="fas fa-check-circle" /> Advanced Robotics &amp; AI Curriculum</li>
                <li><i className="fas fa-check-circle" /> Model UN &amp; Global Exchange Programs</li>
                <li><i className="fas fa-check-circle" /> French &amp; German Foreign Languages</li>
              </ul>
            </div>

            <div className="group-inst-card reveal-right delay-300">
              <div className="group-inst-icon" style={{ background: "#8b5cf6" }}>
                <i className="fas fa-chalkboard-teacher" />
              </div>
              <span className="group-inst-type">NCTE Recognized</span>
              <h4>Horizon Institute of Education</h4>
              <p className="group-inst-sub">Teacher Training Institute</p>
              <ul className="group-inst-list">
                <li><i className="fas fa-check-circle" /> B.Ed. &amp; D.El.Ed. Professional Degrees</li>
                <li><i className="fas fa-check-circle" /> Continuous Teacher Training Workshops</li>
                <li><i className="fas fa-check-circle" /> Modern Pedagogical Research Cell</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: STATUTORY PUBLIC DISCLOSURE (CBSE SARAS APPENDIX IX) */}
      <section className="section-saras-wrapper" id="cbse-saras">
        <MandatoryDisclosure />
      </section>
    </div>
  );
}
