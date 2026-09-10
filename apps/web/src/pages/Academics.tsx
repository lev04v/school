import React, { useState } from "react";
import { PageId } from "../components/Header";
import StreamExplorer from "../components/StreamExplorer";
import { PageHero } from "../components/PageHero";

interface AcademicsPageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Academics({ onNavigate, onOpenAdmissionModal }: AcademicsPageProps) {
  const [boardYear, setBoardYear] = useState<"2025" | "2024">("2025");
  const [facultyDept, setFacultyDept] = useState<string>("all");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    const checkAndScroll = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const parts = hash.split("/");
      const target = parts.length > 1 ? parts[1] : (parts[0] !== "academics" ? parts[0] : null);
      if (target) {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const timer1 = setTimeout(checkAndScroll, 100);
    const timer2 = setTimeout(checkAndScroll, 350);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const toppersData = {
    "2025": [
      {
        name: "Ananya Roy",
        score: "98.4%",
        stream: "Science (PCM + CS)",
        classLabel: "Class XII AISSCE",
        subtext: "School Overall Topper · JEE Advanced AIR 412 (IIT Bombay CSE)",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        badge: "Science Topper",
        badgeColor: "#dc2626",
        marks: "Math: 100 · Physics: 99 · Chemistry: 98 · CS: 99",
      },
      {
        name: "Rohan K. Singhania",
        score: "97.8%",
        stream: "Commerce (Accounts + Math)",
        classLabel: "Class XII AISSCE",
        subtext: "Commerce Stream Topper · CA Foundation All India Rank 34",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
        badge: "Commerce Topper",
        badgeColor: "#2563eb",
        marks: "Economics: 100 · Accounts: 99 · Math: 98 · B.St: 96",
      },
      {
        name: "Priyanshi Saxena",
        score: "97.4%",
        stream: "Science (PCB + Biotech)",
        classLabel: "Class XII AISSCE",
        subtext: "Medical Stream Topper · NEET UG Score 688/720 (AIIMS Delhi)",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        badge: "Biology Topper",
        badgeColor: "#059669",
        marks: "Biology: 100 · Chemistry: 98 · Physics: 96 · English: 96",
      },
      {
        name: "Aarav S. Mehta",
        score: "98.8%",
        stream: "All Subjects General",
        classLabel: "Class X AISSE",
        subtext: "State Rank 3 in CBSE Class 10 · National Talent Search (NTSE) Scholar",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        badge: "Class 10 Topper",
        badgeColor: "#7c3aed",
        marks: "Math: 100 · Science: 100 · SST: 99 · English: 98 · Hindi: 97",
      },
    ],
    "2024": [
      {
        name: "Tanmay Rastogi",
        score: "98.2%",
        stream: "Science (PCM + CS)",
        classLabel: "Class XII AISSCE",
        subtext: "School Topper · JEE Advanced AIR 540 (IIT Delhi Mechanical)",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        badge: "Science Topper",
        badgeColor: "#dc2626",
        marks: "Math: 100 · Physics: 98 · Chemistry: 98 · CS: 99",
      },
      {
        name: "Shreya Nandini",
        score: "97.6%",
        stream: "Commerce (Accounts + Eco)",
        classLabel: "Class XII AISSCE",
        subtext: "Commerce Topper · SRCC Delhi Admission (CUET 100%ile)",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        badge: "Commerce Topper",
        badgeColor: "#2563eb",
        marks: "Accounts: 100 · Economics: 99 · English: 97 · Math: 95",
      },
      {
        name: "Divyansh Kumar",
        score: "97.0%",
        stream: "Science (PCB)",
        classLabel: "Class XII AISSCE",
        subtext: "Medical Topper · NEET Score 675/720 (AIIMS Patna)",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        badge: "Biology Topper",
        badgeColor: "#059669",
        marks: "Biology: 99 · Chemistry: 97 · Physics: 96 · English: 96",
      },
      {
        name: "Ishita Kulkarni",
        score: "98.6%",
        stream: "All Subjects General",
        classLabel: "Class X AISSE",
        subtext: "Class 10 State Rank 4 · Centum in Math & Science",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        badge: "Class 10 Topper",
        badgeColor: "#7c3aed",
        marks: "Math: 100 · Science: 100 · SST: 98 · English: 98",
      },
    ],
  };

  const facultyList = [
    {
      id: "fac-1",
      name: "Dr. Amitabh Sengupta",
      role: "Head of Department — Physics & Robotics",
      qual: "Ph.D. (Applied Physics), M.Sc. (IIT Kharagpur), B.Ed.",
      exp: "24+ Years Experience",
      dept: "science",
      deptLabel: "Science & STEM",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      highlights: ["CBSE Senior Head Evaluator", "IIT-JEE Advanced Specialist", "National Science Mentor"],
      bio: "Fosters inquiry-based conceptual mastery in electrodynamics, optics, and prototype engineering at our Atal Tinkering Lab.",
    },
    {
      id: "fac-2",
      name: "Mrs. Sunita Sharma",
      role: "Head of Department — Mathematics & Olympiads",
      qual: "M.Sc. (Applied Mathematics), B.Ed., Ramanujan Awardee",
      exp: "21+ Years Experience",
      dept: "math",
      deptLabel: "Mathematics",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      highlights: ["INMO & RMO Olympiad Trainer", "100/100 Board Centum Mentor", "Vedic Math Specialist"],
      bio: "Known for transforming fear of calculus into intuitive problem-solving prowess through visual geometry and analytical proofs.",
    },
    {
      id: "fac-3",
      name: "Dr. Alok Ranjan",
      role: "Senior PGT — Chemistry & Research Guide",
      qual: "Ph.D. (Organic Chemistry), CSIR-NET JRF, B.Ed.",
      exp: "17+ Years Experience",
      dept: "science",
      deptLabel: "Science & STEM",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      highlights: ["NEET & JEE Chem Lead", "Published in Elsevier", "Lab Safety Incharge"],
      bio: "Demystifies reaction mechanisms and chemical kinetics through hands-on organic synthesis in our modern research laboratories.",
    },
    {
      id: "fac-4",
      name: "Mrs. Meenakshi Nair",
      role: "Dean of Humanities & Head of Department — English",
      qual: "M.A. (English Literature), M.Ed., Cambridge CELTA",
      exp: "23+ Years Experience",
      dept: "humanities",
      deptLabel: "Commerce & Humanities",
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80",
      highlights: ["National Debate Coach", "CBSE Literature Curriculum Advisor", "Model UN Advisor"],
      bio: "Cultivates world-class communicative eloquence, critical textual analysis, and persuasive debating skills in our scholars.",
    },
    {
      id: "fac-5",
      name: "Mr. Anand R. Verma",
      role: "Head of Department — Commerce & Accountancy",
      qual: "M.Com, F.C.A., B.Ed. · Chartered Accountant",
      exp: "19+ Years Experience",
      dept: "humanities",
      deptLabel: "Commerce & Humanities",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      highlights: ["CA Foundation Mentor", "Financial Literacy Lead", "100/100 Accountancy Record"],
      bio: "Blends corporate accounting realities with CBSE syllabus to prepare students for top business colleges and professional certifications.",
    },
    {
      id: "fac-6",
      name: "Ms. Tanvi Aggarwal",
      role: "Senior PGT — Computer Science, AI & Python",
      qual: "M.Tech (CSE), B.Tech (IT), Google Certified Educator",
      exp: "13+ Years Experience",
      dept: "cs",
      deptLabel: "Computer & AI",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
      highlights: ["NITI Aayog ATL Master", "Python & Machine Learning Trainer", "Hackathon Finalist Mentor"],
      bio: "Empowers senior students with full-stack coding, data structures, and ethical AI development for competitive university admissions.",
    },
    {
      id: "fac-7",
      name: "Mr. Vikramaditya Jha",
      role: "Senior PGT — Biology & Biotechnology",
      qual: "M.Sc. (Biotechnology), B.Ed., KVPY Research Fellow",
      exp: "16+ Years Experience",
      dept: "science",
      deptLabel: "Science & STEM",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      highlights: ["NEET Biology Topper Mentor", "Biotech Lab Director", "Genetics & Cytology Guide"],
      bio: "Engages medical aspirants with 3D anatomical models and molecular genetics protocols for unmatched conceptual clarity.",
    },
    {
      id: "fac-8",
      name: "Dr. Vandana Shukla",
      role: "Head of Department — Hindi & Sanskrit Sahitya",
      qual: "Ph.D. (Hindi Sahitya), M.A. (Sanskrit), B.Ed.",
      exp: "25+ Years Experience",
      dept: "humanities",
      deptLabel: "Commerce & Humanities",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
      highlights: ["State Sahitya Parishad Award", "CBSE Chief Moderator", "Vedic Heritage Incharge"],
      bio: "Inculcates deep aesthetic appreciation for classical Indian literature, grammar, and traditional ethical values.",
    },
  ];

  const filteredFaculty = facultyList.filter(
    (f) => facultyDept === "all" || f.dept === facultyDept
  );

  return (
    <div className="page-wrapper animate-fade-in">
      {/* ========== ACADEMICS SUBPAGE HERO ========== */}
      <PageHero
        breadcrumbCurrent="Academics"
        onNavigate={onNavigate}
        kicker="CBSE · Smart Classrooms"
        title={<>Learning that goes <em>beyond books.</em></>}
        subtitle="A rigorous CBSE curriculum paired with project-based learning, smart classrooms, and dedicated mentorship that prepares students for life — not just examinations."
        imageUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Modern Science Laboratory & Lecture Hall"
        primaryCtaLabel="Explore Curriculum"
        onPrimaryCtaClick={() => scrollToSection("acad-journey")}
      />

      {/* ========== BREADCRUMB STRIP ========== */}
      <div className="acad-breadcrumb">
        <div className="container">
          <button
            onClick={() => onNavigate("home")}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <i className="fas fa-home" /> Home
          </button>
          <i className="fas fa-chevron-right" />
          <span>Academics</span>
        </div>
      </div>

      {/* ========== ACADEMIC INTRODUCTION / PHILOSOPHY ========== */}
      <section id="acad-intro">
        <div className="container">
          <div className="acad-intro-grid">
            <div className="acad-intro-text reveal-left">
              <p className="section-label">Our Educational Philosophy</p>
              <h2 className="section-title">Nurturing Minds, <span>Shaping Futures</span></h2>
              <p className="acad-intro-desc">
                At Horizon Academy, education is not merely about textbooks and examinations — it is about nurturing curious minds, building strong moral character, and preparing students for the challenges of tomorrow. Rooted in our guiding principle <em>"Vidya Dadati Vinayam"</em>, our academic philosophy ensures every child receives a comprehensive learning experience that transcends traditional boundaries.
              </p>
              <p className="acad-intro-desc" style={{ marginTop: 14 }}>
                Affiliated to CBSE New Delhi, Horizon Academy follows a <strong>student-centered, experiential approach</strong> blending academic rigor with modern pedagogical practices. Our faculty employs interactive digital boards, STEM laboratory experiments, and real-world case studies to cultivate critical thinking, creativity, and lifelong curiosity.
              </p>
              <div className="acad-intro-highlights">
                <div className="acad-intro-highlight">
                  <i className="fas fa-check-circle" />
                  <span>CBSE Affiliated 10+2</span>
                </div>
                <div className="acad-intro-highlight">
                  <i className="fas fa-check-circle" />
                  <span>Holistic Development</span>
                </div>
                <div className="acad-intro-highlight">
                  <i className="fas fa-check-circle" />
                  <span>Experienced Facilitators</span>
                </div>
                <div className="acad-intro-highlight">
                  <i className="fas fa-check-circle" />
                  <span>Future-Ready STEM Skills</span>
                </div>
              </div>
            </div>

            <div className="acad-intro-img reveal-right">
              <div className="acad-intro-img-card">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1280&q=70"
                  alt="Students engaged in collaborative digital learning"
                />
                <div className="acad-intro-img-badge">
                  <i className="fas fa-graduation-cap" />
                  <div>
                    <strong>CBSE Curriculum</strong>
                    <span>Nursery to Class XII</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEARNING JOURNEY STAGES ========== */}
      <section id="acad-journey">
        <div className="container">
          <p className="section-label reveal-up" style={{ textAlign: "center" }}>Learning Stages</p>
          <h2 className="section-title reveal-up" style={{ textAlign: "center" }}>The Academic <span>Journey</span></h2>
          <div className="acad-journey-grid">
            {/* Kindergarten */}
            <div className="acad-journey-card reveal-left">
              <div className="acad-journey-icon acad-journey-icon--nursery">
                <i className="fas fa-child" />
              </div>
              <h3>Kindergarten</h3>
              <p className="acad-journey-classes">Nursery – KG</p>
              
              <div className="acad-stage-focus-box">
                <div className="acad-stage-focus-box__label">
                  <i className="fas fa-seedling"></i> Early Years Focus
                </div>
                <p className="acad-stage-focus-box__text">
                  A joyful, play-based Montessori program consolidating early language phonics, motor coordination, and moral values through experiential sensory play.
                </p>
              </div>

              <div className="acad-stage-features">
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Play-way phonics &amp; motor coordination
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Sensory discovery &amp; story circles
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Moral values &amp; social empathy
                </div>
              </div>

              <div className="acad-journey-tags">
                <span className="acad-journey-tag">Play-Based</span>
                <span className="acad-journey-tag">Activity Learning</span>
                <span className="acad-journey-tag">Phonics</span>
              </div>
            </div>

            {/* Primary School */}
            <div className="acad-journey-card reveal-left delay-100">
              <div className="acad-journey-icon acad-journey-icon--primary">
                <i className="fas fa-book-reader" />
              </div>
              <h3>Primary School</h3>
              <p className="acad-journey-classes">Classes I – V</p>
              
              <div className="acad-stage-focus-box">
                <div className="acad-stage-focus-box__label">
                  <i className="fas fa-book-reader"></i> Foundational Mastery
                </div>
                <p className="acad-stage-focus-box__text">
                  Building strong foundational literacy and numeracy with exploratory science, bilingual communication, computational thinking, and creative arts.
                </p>
              </div>

              <div className="acad-stage-features">
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Conceptual mathematics &amp; inquiry science
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Bilingual fluency (English &amp; Hindi)
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Creative arts &amp; beginner coding
                </div>
              </div>

              <div className="acad-journey-tags">
                <span className="acad-journey-tag">Literacy</span>
                <span className="acad-journey-tag">Numeracy</span>
                <span className="acad-journey-tag">Critical Thinking</span>
              </div>
            </div>

            {/* Middle School */}
            <div className="acad-journey-card reveal-right delay-200">
              <div className="acad-journey-icon acad-journey-icon--middle">
                <i className="fas fa-microscope" />
              </div>
              <h3>Middle School</h3>
              <p className="acad-journey-classes">Classes VI – VIII</p>
              
              <div className="acad-stage-focus-box">
                <div className="acad-stage-focus-box__label">
                  <i className="fas fa-microscope"></i> Conceptual Expansion
                </div>
                <p className="acad-stage-focus-box__text">
                  Bridging foundational inquiry with departmental science laboratories, coding, ATL tinkering projects, and inter-school debates.
                </p>
              </div>

              <div className="acad-stage-features">
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> NITI Aayog ATL robotics &amp; 3D printing
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Subject-specialist master faculty
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Olympiad prep &amp; inter-house debate
                </div>
              </div>

              <div className="acad-journey-tags">
                <span className="acad-journey-tag">Specialization</span>
                <span className="acad-journey-tag">ATL Robotics</span>
                <span className="acad-journey-tag">Leadership</span>
              </div>
            </div>

            {/* Senior Secondary */}
            <div className="acad-journey-card reveal-right delay-300">
              <div className="acad-journey-icon acad-journey-icon--senior">
                <i className="fas fa-user-graduate" />
              </div>
              <h3>Senior Secondary</h3>
              <p className="acad-journey-classes">Classes IX – XII</p>
              
              <div className="acad-stage-focus-box">
                <div className="acad-stage-focus-box__label">
                  <i className="fas fa-graduation-cap"></i> Board &amp; Career Pathway
                </div>
                <p className="acad-stage-focus-box__text">
                  Rigorous CBSE Board exam preparation with specialized 10+2 streams (Science, Commerce, Arts) paired with JEE, NEET, and CUET competitive mentoring.
                </p>
              </div>

              <div className="acad-stage-features">
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> PCM, PCB, Commerce &amp; Humanities
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> Synchronized IIT-JEE &amp; NEET coaching
                </div>
                <div className="acad-stage-feature-item">
                  <i className="fas fa-check"></i> 100% Board First-Division pass record
                </div>
              </div>

              <div className="acad-journey-tags">
                <span className="acad-journey-tag">Science</span>
                <span className="acad-journey-tag">Commerce</span>
                <span className="acad-journey-tag">Humanities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CURRICULUM / SUBJECTS ========== */}
      <section id="acad-curriculum">
        <div className="container">
          <div className="acad-curriculum-header">
            <p className="section-label reveal-up">Curriculum</p>
            <h2 className="section-title reveal-up">Subjects &amp; <span>Programs</span></h2>
          </div>

          <div className="acad-curriculum-banner reveal-up">
            <p>
              Horizon Academy offers a comprehensive CBSE curriculum enriched with STEM innovation, multilingual proficiency, and vocational subjects guided by master educators and CBSE head evaluators.
            </p>
            <div className="acad-curriculum-badges">
              <span className="acad-curriculum-badge"><i className="fas fa-certificate"></i> CBSE Affiliated 10+2</span>
              <span className="acad-curriculum-badge"><i className="fas fa-graduation-cap"></i> NEP 2020 Aligned</span>
              <span className="acad-curriculum-badge"><i className="fas fa-laptop-code"></i> NITI Aayog ATL STEM</span>
              <span className="acad-curriculum-badge"><i className="fas fa-award"></i> 100% Board Pass Rate</span>
            </div>
          </div>

          <div className="acad-subjects-grid">
            <div className="acad-subject-card reveal-left">
              <div className="acad-subject-icon acad-subject-icon--sci">
                <i className="fas fa-flask" />
              </div>
              <h3>Science</h3>
              <p>Experiential science education with separate Physics, Chemistry, and Biology research laboratories.</p>
              <ul className="acad-subject-list">
                <li><i className="fas fa-circle" /> Physics</li>
                <li><i className="fas fa-circle" /> Chemistry</li>
                <li><i className="fas fa-circle" /> Biology</li>
                <li><i className="fas fa-circle" /> Biotechnology</li>
              </ul>
            </div>

            <div className="acad-subject-card reveal-right">
              <div className="acad-subject-icon acad-subject-icon--math">
                <i className="fas fa-square-root-alt" />
              </div>
              <h3>Mathematics</h3>
              <p>Fostering analytical problem-solving through conceptual proofs, Vedic math shortcuts, and competitive olympiad prep.</p>
              <ul className="acad-subject-list">
                <li><i className="fas fa-circle" /> Core Mathematics</li>
                <li><i className="fas fa-circle" /> Applied Mathematics</li>
                <li><i className="fas fa-circle" /> Statistics &amp; Probability</li>
                <li><i className="fas fa-circle" /> Olympiad Training</li>
              </ul>
            </div>

            <div className="acad-subject-card reveal-left">
              <div className="acad-subject-icon acad-subject-icon--lang">
                <i className="fas fa-language" />
              </div>
              <h3>Languages</h3>
              <p>Developing eloquent oral and written expression in English and Indian languages with public speaking forums.</p>
              <ul className="acad-subject-list">
                <li><i className="fas fa-circle" /> English Core &amp; Lit</li>
                <li><i className="fas fa-circle" /> Hindi Sahitya</li>
                <li><i className="fas fa-circle" /> Sanskrit</li>
                <li><i className="fas fa-circle" /> French (Foreign Lang)</li>
              </ul>
            </div>

            <div className="acad-subject-card reveal-right">
              <div className="acad-subject-icon acad-subject-icon--social">
                <i className="fas fa-globe-americas" />
              </div>
              <h3>Social Sciences</h3>
              <p>Understanding civilization, economics, and geography through interactive debates, mock parliaments, and field visits.</p>
              <ul className="acad-subject-list">
                <li><i className="fas fa-circle" /> History &amp; Heritage</li>
                <li><i className="fas fa-circle" /> Political Science &amp; Law</li>
                <li><i className="fas fa-circle" /> Economics</li>
                <li><i className="fas fa-circle" /> Geography &amp; GIS</li>
              </ul>
            </div>

            <div className="acad-subject-card reveal-left">
              <div className="acad-subject-icon acad-subject-icon--cs">
                <i className="fas fa-laptop-code" />
              </div>
              <h3>Computer &amp; AI</h3>
              <p>Equipping students with modern Python programming, AI literacy, web design, and cybersecurity fundamentals.</p>
              <ul className="acad-subject-list">
                <li><i className="fas fa-circle" /> Python Programming</li>
                <li><i className="fas fa-circle" /> AI &amp; Machine Learning</li>
                <li><i className="fas fa-circle" /> Informatics Practices</li>
                <li><i className="fas fa-circle" /> Robotics &amp; IoT</li>
              </ul>
            </div>

            <div className="acad-subject-card reveal-right">
              <div className="acad-subject-icon acad-subject-icon--arts">
                <i className="fas fa-palette" />
              </div>
              <h3>Arts &amp; Activities</h3>
              <p>Nurturing aesthetic appreciation and self-expression through fine arts, classical dance, vocal music, and sports.</p>
              <ul className="acad-subject-list">
                <li><i className="fas fa-circle" /> Visual Arts &amp; Painting</li>
                <li><i className="fas fa-circle" /> Hindustani Classical Music</li>
                <li><i className="fas fa-circle" /> Theater &amp; Drama</li>
                <li><i className="fas fa-circle" /> Physical Education &amp; Yoga</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SENIOR SECONDARY STREAMS (DEEP DIVE) ========== */}
      <div id="curriculum-streams">
        <StreamExplorer onSelectStream={onOpenAdmissionModal} />
      </div>

      {/* ========== TEACHING APPROACH ========== */}
      <section id="acad-teaching">
        <div className="container">
          <p className="section-label reveal-up" style={{ textAlign: "center" }}>Our Methodology</p>
          <h2 className="section-title reveal-up" style={{ textAlign: "center" }}>Teaching <span>Approach</span></h2>

          <div className="acad-teaching-grid">
            <div className="acad-teaching-card reveal-left">
              <div className="acad-teaching-card-icon">
                <i className="fas fa-chalkboard-teacher" />
              </div>
              <h3>Interactive Learning</h3>
              <p>Discussion-based classrooms with multimedia case studies, peer workshops, and active participation.</p>
            </div>

            <div className="acad-teaching-card reveal-right">
              <div className="acad-teaching-card-icon">
                <i className="fas fa-desktop" />
              </div>
              <h3>Digital Classrooms</h3>
              <p>Smart classrooms with interactive touch panels, 3D STEM visualizers, and high-speed campus internet.</p>
            </div>

            <div className="acad-teaching-card reveal-left">
              <div className="acad-teaching-card-icon">
                <i className="fas fa-tools" />
              </div>
              <h3>Practical Education</h3>
              <p>Hands-on experiments in dedicated laboratories, field excursions, and prototype fabrication in our ATL lab.</p>
            </div>

            <div className="acad-teaching-card reveal-right">
              <div className="acad-teaching-card-icon">
                <i className="fas fa-rocket" />
              </div>
              <h3>Skill Development</h3>
              <p>Structured programs in leadership, design thinking, analytical debate, and financial literacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOARD EXAM RESULTS & TOPPERS (Section ID: board-results)
          ========================================================================= */}
      <section id="board-results" className="section-board-results">
        <div id="acad-achievements" style={{ position: "relative", top: -90 }} />
        <div className="container">
          <div className="center-heading reveal-up">
            <p className="section-label">Official CBSE Evaluation</p>
            <h2 className="section-title">CBSE Board Exam <span>Results &amp; Toppers</span></h2>
            <p className="section-subtitle">
              Demonstrating unmatched academic consistency with 100% First-Division pass records and premier ranks in JEE, NEET &amp; CA examinations.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="acad-stats-grid reveal-up">
            <div className="acad-stat-card">
              <div className="acad-stat-icon"><i className="fas fa-trophy" /></div>
              <div className="acad-stat-number">100%</div>
              <div className="acad-stat-label">Board Pass Rate</div>
              <div className="acad-stat-desc">CBSE AISSE (10th) &amp; AISSCE (12th)</div>
            </div>

            <div className="acad-stat-card">
              <div className="acad-stat-icon"><i className="fas fa-star" /></div>
              <div className="acad-stat-number">98.8%</div>
              <div className="acad-stat-label">School Highest Score</div>
              <div className="acad-stat-desc">State Merit Distinction</div>
            </div>

            <div className="acad-stat-card">
              <div className="acad-stat-icon"><i className="fas fa-medal" /></div>
              <div className="acad-stat-number">52+</div>
              <div className="acad-stat-label">Scored 90%+ Aggregate</div>
              <div className="acad-stat-desc">Senior Secondary Batch 2025</div>
            </div>

            <div className="acad-stat-card">
              <div className="acad-stat-icon"><i className="fas fa-certificate" /></div>
              <div className="acad-stat-number">18</div>
              <div className="acad-stat-label">100/100 Centum Scores</div>
              <div className="acad-stat-desc">Maths, Physics, Chem, Eco, CS</div>
            </div>
          </div>

          {/* Year Switcher Pills */}
          <div className="board-year-toggle-wrap reveal-up">
            <span className="board-year-label">Select Examination Year:</span>
            <div className="board-year-pills" role="tablist">
              <button
                type="button"
                className={`board-year-btn ${boardYear === "2025" ? "active" : ""}`}
                onClick={() => setBoardYear("2025")}
              >
                <i className="fas fa-calendar-check" /> Session 2024–25 (Latest)
              </button>
              <button
                type="button"
                className={`board-year-btn ${boardYear === "2024" ? "active" : ""}`}
                onClick={() => setBoardYear("2024")}
              >
                <i className="fas fa-history" /> Session 2023–24
              </button>
            </div>
          </div>

          {/* Toppers Cards Grid */}
          <div className="board-toppers-grid">
            {toppersData[boardYear].map((topper, idx) => (
              <article
                className={`board-topper-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                key={idx}
              >
                <div className="topper-card-top">
                  <span className="topper-badge" style={{ background: topper.badgeColor }}>
                    {topper.badge}
                  </span>
                  <span className="topper-class-pill">{topper.classLabel}</span>
                </div>

                <div className="topper-avatar-frame">
                  <img src={topper.photo} alt={topper.name} loading="lazy" />
                  <div className="topper-score-circle">
                    <strong>{topper.score}</strong>
                    <small>AGGREGATE</small>
                  </div>
                </div>

                <div className="topper-info-block">
                  <h3 className="topper-name">{topper.name}</h3>
                  <p className="topper-stream">{topper.stream}</p>
                  <p className="topper-rank-note">
                    <i className="fas fa-award" /> {topper.subtext}
                  </p>
                  <div className="topper-marks-tag">
                    <code>{topper.marks}</code>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Official CBSE Results Summary Table */}
          <div className="board-table-container reveal-up">
            <div className="board-table-header">
              <div>
                <h4>Official Stream-Wise Score Summary ({boardYear})</h4>
                <p>Audited CBSE examination results verified by the School Evaluation Committee.</p>
              </div>
              <button
                type="button"
                className="btn-download-gazette"
                onClick={() => alert(`Downloading CBSE Board Result Gazette for Session ${boardYear}. Official PDF successfully requested.`)}
              >
                <i className="fas fa-file-pdf" /> Download Result Gazette PDF
              </button>
            </div>

            <div className="table-responsive-wrapper">
              <table className="standard-data-table">
                <thead>
                  <tr>
                    <th>Stream / Exam</th>
                    <th>Appeared</th>
                    <th>Pass Rate</th>
                    <th>90%+ Aggregate</th>
                    <th>Distinction (75%+)</th>
                    <th>School Average</th>
                    <th>Stream Topper</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Class XII — Science (PCM &amp; PCB)</strong></td>
                    <td>124 Students</td>
                    <td><span className="badge-pass-100">100% Passed</span></td>
                    <td>38 Students (30.6%)</td>
                    <td>118 Students (95.1%)</td>
                    <td><strong>86.8%</strong></td>
                    <td><span className="code-pill">98.4%</span> (Ananya Roy)</td>
                  </tr>
                  <tr>
                    <td><strong>Class XII — Commerce (Accounts &amp; Math)</strong></td>
                    <td>86 Students</td>
                    <td><span className="badge-pass-100">100% Passed</span></td>
                    <td>24 Students (27.9%)</td>
                    <td>82 Students (95.3%)</td>
                    <td><strong>84.5%</strong></td>
                    <td><span className="code-pill">97.8%</span> (Rohan Singhania)</td>
                  </tr>
                  <tr>
                    <td><strong>Class XII — Humanities &amp; Arts</strong></td>
                    <td>68 Students</td>
                    <td><span className="badge-pass-100">100% Passed</span></td>
                    <td>19 Students (27.9%)</td>
                    <td>65 Students (95.5%)</td>
                    <td><strong>85.2%</strong></td>
                    <td><span className="code-pill">97.2%</span> (Aarav Mehta)</td>
                  </tr>
                  <tr>
                    <td><strong>Class X — AISSE Secondary Board</strong></td>
                    <td>210 Students</td>
                    <td><span className="badge-pass-100">100% Passed</span></td>
                    <td>74 Students (35.2%)</td>
                    <td>198 Students (94.2%)</td>
                    <td><strong>88.2%</strong></td>
                    <td><span className="code-pill">98.8%</span> (Aarav S. Mehta)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FACULTY PROFILES & MASTER EDUCATORS (Section ID: faculty-spotlight)
          ========================================================================= */}
      <section id="faculty-spotlight" className="section-faculty-spotlight">
        <div className="container">
          <div className="center-heading reveal-up">
            <p className="section-label">Our Distinguished Educators</p>
            <h2 className="section-title">Faculty Profiles &amp; <span>Master Mentors</span></h2>
            <p className="section-subtitle">
              Guided by doctorate holders, CBSE head evaluators, and competitive exam specialists with an average of 18+ years of dedicated teaching excellence.
            </p>
          </div>

          {/* Department Filter Bar */}
          <div className="faculty-filters-bar reveal-up">
            <div className="faculty-pills" role="tablist" aria-label="Filter faculty by department">
              <button
                type="button"
                className={`faculty-filter-btn ${facultyDept === "all" ? "active" : ""}`}
                onClick={() => setFacultyDept("all")}
              >
                All Departments ({facultyList.length})
              </button>
              <button
                type="button"
                className={`faculty-filter-btn ${facultyDept === "science" ? "active" : ""}`}
                onClick={() => setFacultyDept("science")}
              >
                Science &amp; STEM
              </button>
              <button
                type="button"
                className={`faculty-filter-btn ${facultyDept === "math" ? "active" : ""}`}
                onClick={() => setFacultyDept("math")}
              >
                Mathematics
              </button>
              <button
                type="button"
                className={`faculty-filter-btn ${facultyDept === "humanities" ? "active" : ""}`}
                onClick={() => setFacultyDept("humanities")}
              >
                Commerce &amp; Humanities
              </button>
              <button
                type="button"
                className={`faculty-filter-btn ${facultyDept === "cs" ? "active" : ""}`}
                onClick={() => setFacultyDept("cs")}
              >
                Computer &amp; AI
              </button>
            </div>
          </div>

          {/* Faculty Cards Grid */}
          <div className="faculty-spotlight-grid">
            {filteredFaculty.map((fac, idx) => (
              <article
                className={`faculty-profile-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                key={fac.id}
              >
                <div className="fac-card-header">
                  <div className="fac-avatar-box">
                    <img src={fac.photo} alt={fac.name} loading="lazy" />
                  </div>
                  <div className="fac-header-text">
                    <span className="fac-dept-badge">{fac.deptLabel}</span>
                    <h3 className="fac-name">{fac.name}</h3>
                    <p className="fac-role">{fac.role}</p>
                  </div>
                </div>

                <div className="fac-body">
                  <div className="fac-qual-strip">
                    <i className="fas fa-graduation-cap" />
                    <span>{fac.qual}</span>
                  </div>
                  <div className="fac-exp-strip">
                    <i className="fas fa-briefcase" />
                    <span>{fac.exp}</span>
                  </div>

                  <p className="fac-bio-quote">"{fac.bio}"</p>

                  <div className="fac-highlights-row">
                    {fac.highlights.map((hl, i) => (
                      <span className="fac-hl-tag" key={i}>
                        <i className="fas fa-check" /> {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Faculty Credentials Banner */}
          <div className="faculty-credentials-strip reveal-up">
            <div className="fac-cred-item">
              <div className="fac-cred-icon"><i className="fas fa-users-cog" /></div>
              <div>
                <strong>120+ Full-Time Faculty</strong>
                <span>Specialist Master Degree Educators</span>
              </div>
            </div>
            <div className="fac-cred-item">
              <div className="fac-cred-icon"><i className="fas fa-chalkboard-teacher" /></div>
              <div>
                <strong>1:15 Student Ratio</strong>
                <span>Individual Mentorship &amp; Doubts</span>
              </div>
            </div>
            <div className="fac-cred-item">
              <div className="fac-cred-icon"><i className="fas fa-medal" /></div>
              <div>
                <strong>25+ CBSE Evaluators</strong>
                <span>Head Examiners &amp; Board Moderators</span>
              </div>
            </div>
            <div className="fac-cred-item">
              <div className="fac-cred-icon"><i className="fas fa-history" /></div>
              <div>
                <strong>18+ Avg Experience</strong>
                <span>Decades of Proven Pedagogy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STUDENT SUPPORT ========== */}
      <section id="acad-support">
        <div className="container">
          <p className="section-label reveal" style={{ textAlign: "center" }}>We Care</p>
          <h2 className="section-title reveal" style={{ textAlign: "center" }}>Student <span>Support</span></h2>

          <div className="acad-support-grid">
            <div className="acad-support-card reveal">
              <div className="acad-support-icon"><i className="fas fa-hands-helping" /></div>
              <h3>Mentorship Program</h3>
              <p>Every student is paired with a dedicated faculty mentor for personal guidance, goal tracking, and pastoral support.</p>
            </div>

            <div className="acad-support-card reveal">
              <div className="acad-support-icon"><i className="fas fa-clock" /></div>
              <h3>Extra Classes</h3>
              <p>Remedial doubt-clearing sessions and advanced problem-solving workshops scheduled after regular hours.</p>
            </div>

            <div className="acad-support-card reveal">
              <div className="acad-support-icon"><i className="fas fa-compass" /></div>
              <h3>Career Guidance</h3>
              <p>Certified career counselors guide students through university choices, stream selection, and scholarship forms.</p>
            </div>

            <div className="acad-support-card reveal">
              <div className="acad-support-icon"><i className="fas fa-file-alt" /></div>
              <h3>Exam Preparation</h3>
              <p>Full-length CBSE simulation mock tests, question bank solving, and time-management workshops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS MARQUEE RIBBON ========== */}
      <section id="achievements">
        <div className="achievements-scroll">
          <div className="achievement-item">
            <div className="achievement-icon"><i className="fas fa-trophy" /></div>
            <div>
              <h5>Top 10 CBSE School</h5>
              <p>Education Excellence Ranking 2025</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon"><i className="fas fa-medal" /></div>
            <div>
              <h5>100% Board Pass Rate</h5>
              <p>CBSE AISSE &amp; AISSCE 2025</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon"><i className="fas fa-robot" /></div>
            <div>
              <h5>National Robotics Finalist</h5>
              <p>TechFest India 2025</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon"><i className="fas fa-chess-knight" /></div>
            <div>
              <h5>State Chess Champions</h5>
              <p>Inter-School Tournament 2025</p>
            </div>
          </div>
          {/* Duplicates for seamless loop */}
          <div className="achievement-item">
            <div className="achievement-icon"><i className="fas fa-trophy" /></div>
            <div>
              <h5>Top 10 CBSE School</h5>
              <p>Education Excellence Ranking 2025</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon"><i className="fas fa-medal" /></div>
            <div>
              <h5>100% Board Pass Rate</h5>
              <p>CBSE AISSE &amp; AISSCE 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section id="acad-cta">
        <div className="acad-cta-bg">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1280&q=70"
            alt="Horizon Academy Campus"
          />
        </div>
        <div className="acad-cta-overlay" />
        <div className="acad-cta-inner reveal">
          <span className="v-label">Begin Your Journey</span>
          <h2>Empowering Students with<br /><em>Knowledge &amp; Confidence</em></h2>
          <p>
            At Horizon Academy, we do not just teach — we inspire. Give your child the gift of an education that prepares them for excellence in every walk of life.
          </p>
          <div className="acad-cta-buttons">
            <button
              type="button"
              onClick={() => onNavigate("facilities")}
              className="acad-cta-btn acad-cta-btn--white"
            >
              <i className="fas fa-building" /> Explore Campus
            </button>
            <button
              type="button"
              onClick={() => onOpenAdmissionModal()}
              className="acad-cta-btn acad-cta-btn--outline"
            >
              <i className="fas fa-pen-nib" /> Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
