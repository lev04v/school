import { useState } from "react";

type StreamTab = "science" | "commerce" | "humanities" | "secondary" | "foundational";

interface StreamExplorerProps {
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function StreamExplorer({ onOpenAdmissionModal }: StreamExplorerProps) {
  const [activeTab, setActiveTab] = useState<StreamTab>("science");

  return (
    <section className="section-streams" id="streams">
      <div className="container">
        {/* Section Header */}
        <div className="streams-header-block">
          <span className="section-eyebrow">ACADEMIC EXCELLENCE & 10+2 PATHWAYS</span>
          <h2 className="section-title">
            Specialized Streams for <em>Senior Secondary (10+2)</em>
          </h2>
          <p className="section-subtitle">
            Horizon Academy offers affiliated CBSE 10+2 curricula tailored to launch students
            into India’s top universities, engineering & medical colleges, law schools, and global institutions.
          </p>
        </div>

        {/* Kingster-style Filter Navigation Pills */}
        <div className="stream-tabs-nav" role="tablist">
          <button
            className={`stream-tab-btn ${activeTab === "science" ? "active" : ""}`}
            onClick={() => setActiveTab("science")}
            role="tab"
            aria-selected={activeTab === "science"}
          >
            <span className="tab-badge">10+2</span>
            <span>Science Stream (PCM / PCB)</span>
          </button>
          <button
            className={`stream-tab-btn ${activeTab === "commerce" ? "active" : ""}`}
            onClick={() => setActiveTab("commerce")}
            role="tab"
            aria-selected={activeTab === "commerce"}
          >
            <span className="tab-badge">10+2</span>
            <span>Commerce Stream</span>
          </button>
          <button
            className={`stream-tab-btn ${activeTab === "humanities" ? "active" : ""}`}
            onClick={() => setActiveTab("humanities")}
            role="tab"
            aria-selected={activeTab === "humanities"}
          >
            <span className="tab-badge">10+2</span>
            <span>Humanities / Arts</span>
          </button>
          <button
            className={`stream-tab-btn ${activeTab === "secondary" ? "active" : ""}`}
            onClick={() => setActiveTab("secondary")}
            role="tab"
            aria-selected={activeTab === "secondary"}
          >
            <span className="tab-badge">Class IX-X</span>
            <span>Secondary School (AISSE)</span>
          </button>
          <button
            className={`stream-tab-btn ${activeTab === "foundational" ? "active" : ""}`}
            onClick={() => setActiveTab("foundational")}
            role="tab"
            aria-selected={activeTab === "foundational"}
          >
            <span className="tab-badge">Nursery-VIII</span>
            <span>Foundational & Middle</span>
          </button>
        </div>

        {/* Stream Content Panels */}
        <div className="stream-content-card">
          {/* SCIENCE STREAM */}
          {activeTab === "science" && (
            <div className="stream-panel">
              <div className="panel-main">
                <div className="stream-tag-row">
                  <span className="stream-code">CBSE STREAM CODE: 01</span>
                  <span className="stream-affiliation">AISSCE Class XI & XII</span>
                </div>
                <h3 className="stream-heading">Science Stream — Medical & Non-Medical</h3>
                <p className="stream-desc">
                  Engineered for future doctors, engineers, researchers, and innovators. Our science curriculum
                  blends rigorous CBSE board mastery with integrated IIT-JEE and NEET-UG problem-solving sessions
                  conducted by veteran senior PGT faculties.
                </p>

                <div className="stream-specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">Core Subject Groups</span>
                    <ul className="spec-list">
                      <li><strong>Non-Medical (PCM):</strong> Physics, Chemistry, Mathematics, English Core</li>
                      <li><strong>Medical (PCB):</strong> Physics, Chemistry, Biology, English Core</li>
                      <li><strong>Dual Science (PCMB):</strong> Physics, Chem, Maths, Bio, English</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">5th & 6th Elective Choices</span>
                    <ul className="spec-list">
                      <li>Computer Science (Python & SQL)</li>
                      <li>Informatics Practices (IP)</li>
                      <li>Physical Education (Sports Science)</li>
                      <li>Fine Arts / Applied Mathematics</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Laboratory & Practical Training</span>
                    <ul className="spec-list">
                      <li>Dedicated Senior Physics, Chemistry & Bio Labs</li>
                      <li>Atal Tinkering Lab (ATL) Embedded Projects</li>
                      <li>Daily Practical Demonstrations & Viva Prep</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Competitive Pathways</span>
                    <ul className="spec-list">
                      <li>IIT-JEE (Main & Advanced) Mentorship</li>
                      <li>NEET-UG Foundation & Mock Test Series</li>
                      <li>IISER, NDA & Olympiad Special Coaching</li>
                    </ul>
                  </div>
                </div>

                <div className="stream-action-bar">
                  <button
                    onClick={() => onOpenAdmissionModal("Science Stream (10+2)")}
                    className="btn-stream-cta"
                  >
                    Apply for Class XI Science (2026-27)
                  </button>
                  <a href="#circulars" className="btn-stream-syllabus">
                    Download Science Syllabus & Booklist
                  </a>
                </div>
              </div>

              <div className="panel-sidebar">
                <div className="sidebar-stat-card">
                  <span className="sidebar-stat-number">98.4%</span>
                  <span className="sidebar-stat-caption">Top Science Board Score (Class 12)</span>
                </div>
                <div className="sidebar-feature-list">
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>100% Board Pass Rate</strong>
                      <p>Consistent 1st division record in CBSE Class 12</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>IIT & Medical Selections</strong>
                      <p>32+ students in IITs, NITs & AIIMS last session</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Individual Lab Workstations</strong>
                      <p>Every student performs independent experiments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COMMERCE STREAM */}
          {activeTab === "commerce" && (
            <div className="stream-panel">
              <div className="panel-main">
                <div className="stream-tag-row">
                  <span className="stream-code">CBSE STREAM CODE: 02</span>
                  <span className="stream-affiliation">AISSCE Class XI & XII</span>
                </div>
                <h3 className="stream-heading">Commerce Stream — Business & Financial Leadership</h3>
                <p className="stream-desc">
                  Tailored for tomorrow’s chartered accountants, corporate leaders, entrepreneurs, and economists.
                  Combines deep theoretical principles of double-entry accounting and market economics with live
                  case studies and financial analysis.
                </p>

                <div className="stream-specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">Compulsory Core Subjects</span>
                    <ul className="spec-list">
                      <li><strong>Accountancy:</strong> Financial Statements, Partnership, Company Accounts</li>
                      <li><strong>Business Studies:</strong> Management Principles, Finance & Marketing</li>
                      <li><strong>Economics:</strong> Microeconomics, Macroeconomics & Indian Eco</li>
                      <li><strong>English Core:</strong> Communication & Business Correspondence</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Elective Combinations</span>
                    <ul className="spec-list">
                      <li>Applied Mathematics (Recommended for CUET / CA)</li>
                      <li>Informatics Practices (IP / Database Management)</li>
                      <li>Entrepreneurship & Start-up Case Studies</li>
                      <li>Physical Education</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Practical & Skill Integration</span>
                    <ul className="spec-list">
                      <li>Tally ERP & Computerized Accounting System</li>
                      <li>Annual Horizon Youth Entrepreneurship Fest</li>
                      <li>Stock Market Simulations & Budget Analysis</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Career & College Pathways</span>
                    <ul className="spec-list">
                      <li>CUET-UG Mentorship for SRCC, Hindu, Hansraj</li>
                      <li>CA Foundation & CS Executive Guidance</li>
                      <li>BBA, IPMAT (IIM Indore/Rohtak) & CFA Prep</li>
                    </ul>
                  </div>
                </div>

                <div className="stream-action-bar">
                  <button
                    onClick={() => onOpenAdmissionModal("Commerce Stream (10+2)")}
                    className="btn-stream-cta"
                  >
                    Apply for Class XI Commerce (2026-27)
                  </button>
                  <a href="#circulars" className="btn-stream-syllabus">
                    Download Commerce Subject Schemes
                  </a>
                </div>
              </div>

              <div className="panel-sidebar">
                <div className="sidebar-stat-card">
                  <span className="sidebar-stat-number">99/100</span>
                  <span className="sidebar-stat-caption">Perfect Score in Accountancy & Economics</span>
                </div>
                <div className="sidebar-feature-list">
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>CUET Success Rate</strong>
                      <p>Admission in Delhi University top-tier colleges</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Industry Guest Lectures</strong>
                      <p>Interactions with active CAs, CFAs & startup founders</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Project Work Mastery</strong>
                      <p>100% internal assessment marks in viva & portfolios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HUMANITIES STREAM */}
          {activeTab === "humanities" && (
            <div className="stream-panel">
              <div className="panel-main">
                <div className="stream-tag-row">
                  <span className="stream-code">CBSE STREAM CODE: 03</span>
                  <span className="stream-affiliation">AISSCE Class XI & XII</span>
                </div>
                <h3 className="stream-heading">Humanities & Social Sciences — Policy, Law & Diplomacy</h3>
                <p className="stream-desc">
                  A high-caliber liberal arts foundation fostering critical thinking, research writing, and
                  societal awareness. Ideal for students aspiring toward Civil Services (UPSC), Judiciary & CLAT,
                  Diplomacy, Journalism, and International Development.
                </p>

                <div className="stream-specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">Core Humanities Subjects</span>
                    <ul className="spec-list">
                      <li><strong>Political Science:</strong> Indian Constitution & Global Politics</li>
                      <li><strong>History:</strong> Themes in Indian & World Civilizations</li>
                      <li><strong>Economics:</strong> Development Economics & Statistical Tools</li>
                      <li><strong>English Core:</strong> Literature, Rhetoric & Research Papers</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Specialised Electives</span>
                    <ul className="spec-list">
                      <li>Psychology (Behavioral Science & Counseling)</li>
                      <li>Sociology (Indian Society & Social Change)</li>
                      <li>Legal Studies (Constitutional & Criminal Jurisprudence)</li>
                      <li>Fine Arts / Painting / Applied Arts</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Enrichment & Practical Labs</span>
                    <ul className="spec-list">
                      <li>Annual Model United Nations (Horizon MUN)</li>
                      <li>Psychology Laboratory & Psychometric Testing</li>
                      <li>Debating Society & Policy Drafting Workshops</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Career Prospects</span>
                    <ul className="spec-list">
                      <li>UPSC Civil Services Foundation Orientation</li>
                      <li>Common Law Admission Test (CLAT) Mentorship</li>
                      <li>Media, Public Relations & Think Tanks</li>
                    </ul>
                  </div>
                </div>

                <div className="stream-action-bar">
                  <button
                    onClick={() => onOpenAdmissionModal("Humanities Stream (10+2)")}
                    className="btn-stream-cta"
                  >
                    Apply for Class XI Humanities (2026-27)
                  </button>
                  <a href="#circulars" className="btn-stream-syllabus">
                    Download Humanities Curriculum
                  </a>
                </div>
              </div>

              <div className="panel-sidebar">
                <div className="sidebar-stat-card">
                  <span className="sidebar-stat-number">97.8%</span>
                  <span className="sidebar-stat-caption">Top Humanities Board Average</span>
                </div>
                <div className="sidebar-feature-list">
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>National Law Universities</strong>
                      <p>Top ranks secured by our students in CLAT</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>National Youth Parliament</strong>
                      <p>State-level laurels in Parliamentary debate</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Research Dissertation</strong>
                      <p>Mentored academic papers before entering college</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECONDARY WING (IX - X) */}
          {activeTab === "secondary" && (
            <div className="stream-panel">
              <div className="panel-main">
                <div className="stream-tag-row">
                  <span className="stream-code">CBSE AISSE</span>
                  <span className="stream-affiliation">Class IX & X (Secondary Board)</span>
                </div>
                <h3 className="stream-heading">Secondary Wing — Foundation for Board Excellence</h3>
                <p className="stream-desc">
                  Building deep conceptual clarity across core academic disciplines before stepping into 10+2.
                  Our structured approach emphasizes NCERT mastery, comprehensive laboratory sessions,
                  and CBSE Class 10 Board exam readiness without rote memorization.
                </p>

                <div className="stream-specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">CBSE Subject Framework</span>
                    <ul className="spec-list">
                      <li>English Language & Literature (Code 184)</li>
                      <li>Mathematics — Standard & Basic Options (Code 041/241)</li>
                      <li>Science (Integrated Physics, Chemistry, Biology)</li>
                      <li>Social Science (History, Civics, Geography, Eco)</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Second Language & Skills</span>
                    <ul className="spec-list">
                      <li>Hindi Course A / Course B</li>
                      <li>Sanskrit / French</li>
                      <li>Information Technology & Artificial Intelligence (AI)</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Continuous Evaluation</span>
                    <ul className="spec-list">
                      <li>Periodic Tests (PT 1, PT 2, PT 3) & Term Exams</li>
                      <li>Rigorous Pre-Board series with detailed feedback</li>
                      <li>Subject Enrichment Activities & Art-Integrated Projects</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">National Olympiads</span>
                    <ul className="spec-list">
                      <li>SOF Olympiads (NSO, IMO, NCO, IEO)</li>
                      <li>Aryabhata Ganit Challenge by CBSE</li>
                      <li>NTSE & Kishore Vaigyanik orientation</li>
                    </ul>
                  </div>
                </div>

                <div className="stream-action-bar">
                  <button
                    onClick={() => onOpenAdmissionModal("Secondary Wing (Class IX-X)")}
                    className="btn-stream-cta"
                  >
                    Apply for Class IX & X Admissions
                  </button>
                  <a href="#circulars" className="btn-stream-syllabus">
                    View Class 10 Assessment Pattern
                  </a>
                </div>
              </div>

              <div className="panel-sidebar">
                <div className="sidebar-stat-card">
                  <span className="sidebar-stat-number">100%</span>
                  <span className="sidebar-stat-caption">Class 10 CBSE Board Pass Percentage</span>
                </div>
                <div className="sidebar-feature-list">
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Remedial Support</strong>
                      <p>Special personalized attention for developing students</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Smart Digital Classes</strong>
                      <p>3D visualizations and concept simulation tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FOUNDATIONAL & MIDDLE */}
          {activeTab === "foundational" && (
            <div className="stream-panel">
              <div className="panel-main">
                <div className="stream-tag-row">
                  <span className="stream-code">NEP 2020 COMPLIANT</span>
                  <span className="stream-affiliation">Nursery to Class VIII</span>
                </div>
                <h3 className="stream-heading">Foundational, Preparatory & Middle Wings</h3>
                <p className="stream-desc">
                  Nurturing joyful curiosity and strong ethical roots in a child’s early years. Following
                  the National Education Policy (NEP 2020) and NCF guidelines, we foster experiential
                  learning through storytelling, music, sports, phonics, and hands-on discovery.
                </p>

                <div className="stream-specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">Foundational Stage (Nursery - UKG)</span>
                    <ul className="spec-list">
                      <li>Theme-based playrooms & sensory activities</li>
                      <li>Phonetic reading program & conversational confidence</li>
                      <li>Fine motor skill development through montessori kits</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Preparatory Stage (Classes I - V)</span>
                    <ul className="spec-list">
                      <li>Foundational Literacy & Numeracy (FLN) focus</li>
                      <li>Environmental Studies (EVS), English & Hindi</li>
                      <li>Introduction to Computers & Basic Coding logic</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Middle School Stage (Classes VI - VIII)</span>
                    <ul className="spec-list">
                      <li>Science, Maths & Social Studies deep inquiry</li>
                      <li>Third Language introduction (Sanskrit / French)</li>
                      <li>Vocational skills: Robotics, Carpentry, Clay Modeling</li>
                    </ul>
                  </div>

                  <div className="spec-box">
                    <span className="spec-label">Co-Curricular Integration</span>
                    <ul className="spec-list">
                      <li>Daily Physical Education, Yoga & Taekwondo</li>
                      <li>Western & Indian Classical Music, Dance, Dramatics</li>
                      <li>Inter-house cultural competitions & Sports meets</li>
                    </ul>
                  </div>
                </div>

                <div className="stream-action-bar">
                  <button
                    onClick={() => onOpenAdmissionModal("Primary / Middle School")}
                    className="btn-stream-cta"
                  >
                    Apply for Nursery to Class VIII (2026-27)
                  </button>
                  <a href="#facilities" className="btn-stream-syllabus">
                    Explore Primary Activity Wings
                  </a>
                </div>
              </div>

              <div className="panel-sidebar">
                <div className="sidebar-stat-card">
                  <span className="sidebar-stat-number">1:20</span>
                  <span className="sidebar-stat-caption">Individual Teacher-Student Attention Ratio</span>
                </div>
                <div className="sidebar-feature-list">
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Child-Safe Infrastructure</strong>
                      <p>Padded play arenas, child-friendly washrooms & CCTV</p>
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">✓</span>
                    <div>
                      <strong>Zero Bag Weight Days</strong>
                      <p>Activity-driven Fridays with no heavy book burdens</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
