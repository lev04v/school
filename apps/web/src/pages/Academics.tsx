import { PageId } from "../components/Header";
import StreamExplorer from "../components/StreamExplorer";
import { PageHero } from "../components/PageHero";

interface AcademicsPageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Academics({ onNavigate, onOpenAdmissionModal }: AcademicsPageProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("target-highlight-pulse");
      setTimeout(() => el.classList.remove("target-highlight-pulse"), 2500);
    }
  };

  const assessmentPattern = [
    {
      term: "Periodic Test 1 (PT 1)",
      timing: "July (Session Start)",
      weight: "10% Internal Assessment",
      focus: "Formative conceptual checks & chapter-end worksheets",
    },
    {
      term: "Half Yearly / Mid-Term",
      timing: "September – October",
      weight: "30% Weightage",
      focus: "Comprehensive cumulative syllabus coverage",
    },
    {
      term: "Periodic Test 2 (PT 2)",
      timing: "December",
      weight: "10% Internal Assessment",
      focus: "Pre-board readiness & speed enhancement",
    },
    {
      term: "Pre-Board 1 & 2 (Classes X & XII)",
      timing: "January",
      weight: "Diagnostic Readiness",
      focus: "Rigorous full-syllabus CBSE simulation with external center-level invigilation",
    },
    {
      term: "CBSE AISSE & AISSCE",
      timing: "February – March",
      weight: "Official CBSE Board Exam",
      focus: "Center-based board examination administered by CBSE New Delhi",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Academics & Wings"
        onNavigate={onNavigate}
        kicker="AFFILIATED TO CBSE NEW DELHI · 10+2 CURRICULUM"
        title={<>Comprehensive Academics & <span className="text-shimmer">All School Wings</span></>}
        subtitle="From play-based early childhood education to high-stakes CBSE Board examinations and specialized Senior Secondary streams (Science, Commerce & Humanities)."
        imageUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Modern Science Laboratory & Lecture Hall"
      />

      {/* Quick Wing Jump Bar */}
      <div className="academic-wings-nav-strip">
        <div className="container wings-nav-inner">
          <span className="wings-nav-label">JUMP TO WING:</span>
          <div className="wings-nav-buttons">
            <button onClick={() => scrollToSection("foundational-wing")} className="wing-jump-btn">
              <span>🌱 Foundational (Nursery–V)</span>
            </button>
            <button onClick={() => scrollToSection("middle-wing")} className="wing-jump-btn">
              <span>📘 Middle (VI–VIII)</span>
            </button>
            <button onClick={() => scrollToSection("secondary-wing")} className="wing-jump-btn">
              <span>🎓 Secondary (IX–X AISSE)</span>
            </button>
            <button onClick={() => scrollToSection("senior-secondary-wing")} className="wing-jump-btn highlight">
              <span>⭐ 10+2 Streams (XI–XII)</span>
            </button>
            <button onClick={() => scrollToSection("assessment-structure")} className="wing-jump-btn">
              <span>📊 Exams & Assessment</span>
            </button>
            <button onClick={() => scrollToSection("faculty-directory")} className="wing-jump-btn">
              <span>👨‍🏫 Faculty Directory</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. FOUNDATIONAL WING (NURSERY - CLASS V) */}
      <section id="foundational-wing" className="section-academic-wing container">
        <div className="wing-header-box">
          <div className="wing-badge-row">
            <span className="wing-badge">PRE-PRIMARY TO PRIMARY</span>
            <span className="wing-stage-tag">NEP 2020 5+3 STAGE</span>
          </div>
          <h2 className="wing-title">
            Foundational Wing: <span className="text-shimmer">Nursery to Class V</span>
          </h2>
          <p className="wing-lead">
            The formative years build the bedrock of lifelong curiosity. Horizon Academy implements an
            activity-driven, play-way curriculum aligned with NEP 2020 guidelines, emphasizing Foundational
            Literacy and Numeracy (FLN) in a warm, child-safe environment.
          </p>
        </div>

        <div className="wing-features-grid">
          <div className="wing-feat-card">
            <div className="wing-feat-icon">🧸</div>
            <h3>Play-Way & Phonics Mastery</h3>
            <p>
              Multisensory Jolly Phonics, interactive story circles, puppet theatre, and vocabulary building
              designed to spark innate love for reading and bilingual fluency.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">🔢</div>
            <h3>Foundational Numeracy Lab</h3>
            <p>
              Concrete-Pictorial-Abstract (CPA) math pedagogy using abacus kits, geometric blocks, and
              tactile counters to eliminate early math anxiety and build number sense.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">🎨</div>
            <h3>Creative Studios & Music</h3>
            <p>
              Daily exploration in pottery, finger painting, Hindustani & Western rhythm, creative dance,
              and speech-and-drama to nurture holistic emotional expression.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">🛡️</div>
            <h3>1:15 Early Care Ratio</h3>
            <p>
              Air-conditioned smart classrooms with CCTV surveillance, child-friendly rounded ergonomic
              furniture, sanitized indoor play zones, and dedicated female nannies (didis).
            </p>
          </div>
        </div>

        <div className="wing-curriculum-panel">
          <div className="curriculum-col">
            <h4>Key Learning Areas & Subjects</h4>
            <ul className="curriculum-list">
              <li><strong>English:</strong> Phonics, Guided Reading, Picture Comprehension, Creative Writing</li>
              <li><strong>Hindi / Mother Tongue:</strong> Swar-Vyanjan, Kavita Pathan, Matra drills, Spoken Hindi</li>
              <li><strong>Mathematics:</strong> Number Operations, Shapes & Spatial Sense, Measurement, Mental Math</li>
              <li><strong>Environmental Studies (EVS):</strong> Nature Walks, Community Helpers, Flora & Fauna, Hygiene</li>
              <li><strong>ICT & Coding:</strong> Code.org logic puzzles, digital paint, touch interactive screens</li>
              <li><strong>Physical Development:</strong> Daily Morning Yoga, Taekwondo fundamentals, Free Play</li>
            </ul>
          </div>
          <div className="curriculum-action-col">
            <div className="curriculum-cta-card">
              <span className="cta-kicker">ADMISSIONS OPEN (NURSERY — V)</span>
              <h4>Give Your Child the Best Start</h4>
              <p>Applications are now being accepted for Pre-School, Pre-Primary, and Classes I to V for 2026-27.</p>
              <button
                onClick={() => onOpenAdmissionModal("Foundational Wing (Nursery - Class V)")}
                className="btn-hero-primary full-width"
              >
                Apply for Foundational Wing →
              </button>
              <button
                onClick={() => onNavigate("admissions", "admission-steps")}
                className="btn-outline-navy full-width"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                View Primary Admission Criteria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MIDDLE WING (CLASS VI - CLASS VIII) */}
      <section id="middle-wing" className="section-academic-wing container">
        <div className="wing-header-box">
          <div className="wing-badge-row">
            <span className="wing-badge">MIDDLE SCHOOL</span>
            <span className="wing-stage-tag">DISCOVERY & INQUIRY STAGE</span>
          </div>
          <h2 className="wing-title">
            Middle Wing: <span className="text-shimmer">Class VI to Class VIII</span>
          </h2>
          <p className="wing-lead">
            Middle school is the bridge from experiential exploration to formal discipline-based scholarship.
            Students transition into dedicated science laboratories, learn their first computer programming
            languages, and engage in inter-house intellectual competitions.
          </p>
        </div>

        <div className="wing-features-grid">
          <div className="wing-feat-card">
            <div className="wing-feat-icon">🌐</div>
            <h3>Three-Language Formula</h3>
            <p>
              Rigorous command of English (L1), Hindi (L2), and an enriching choice between classical
              Sanskrit or French (L3) to foster multilingual cognitive agility.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">🔬</div>
            <h3>Hands-On Laboratory Induction</h3>
            <p>
              Weekly practical sessions in Composite Science Labs. Students conduct chemical tests,
              microscope observations, and electric circuit experiments firsthand.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">🤖</div>
            <h3>ATL Robotics & Coding Initiation</h3>
            <p>
              Atal Tinkering Lab orientation: Block coding, Arduino microcontrollers, 3D printing
              fundamentals, and participation in the CBSE Regional Science Fair.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">⚖️</div>
            <h3>Houses & Debate Society</h3>
            <p>
              Students are assigned to the 4 Houses (*Raman, Tagore, Ashoka, Shivaji*) and participate in
              parliamentary debating, declamation, and Model United Nations (MUN).
            </p>
          </div>
        </div>

        <div className="wing-curriculum-panel">
          <div className="curriculum-col">
            <h4>Middle School Subject Framework (NCERT Aligned)</h4>
            <ul className="curriculum-list">
              <li><strong>Languages:</strong> English Core, Hindi Course-A, Sanskrit / French (L3)</li>
              <li><strong>Mathematics:</strong> Pre-Algebra, Geometry Proofs, Mensuration, Statistics & Data Handling</li>
              <li><strong>Science:</strong> Physics (Mechanics & Light), Chemistry (Elements & Compounds), Biology (Cell Structure & Ecology)</li>
              <li><strong>Social Science:</strong> Our Pasts (History), Social & Political Life (Civics), The Earth (Geography)</li>
              <li><strong>Computer Science:</strong> Python Scripting, HTML5/CSS, Cyber Safety & Ethics</li>
              <li><strong>Skill & Co-Curricular:</strong> Financial Literacy, Design Thinking, Visual Arts & Tabla/Keyboard</li>
            </ul>
          </div>
          <div className="curriculum-action-col">
            <div className="curriculum-cta-card">
              <span className="cta-kicker">ADMISSIONS 2026–27 (VI — VIII)</span>
              <h4>Middle School Lateral Admissions</h4>
              <p>Limited seats available on merit and previous academic performance records.</p>
              <button
                onClick={() => onOpenAdmissionModal("Middle Wing (Class VI - VIII)")}
                className="btn-hero-primary full-width"
              >
                Apply for Middle Wing →
              </button>
              <button
                onClick={() => onNavigate("admissions", "admission-steps")}
                className="btn-outline-navy full-width"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                View Middle Wing Criteria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECONDARY WING (CLASS IX & X - CBSE AISSE) */}
      <section id="secondary-wing" className="section-academic-wing container">
        <div className="wing-header-box">
          <div className="wing-badge-row">
            <span className="wing-badge">SECONDARY SCHOOL</span>
            <span className="wing-stage-tag">CBSE AISSE BOARD BENCHMARK</span>
          </div>
          <h2 className="wing-title">
            Secondary Wing: <span className="text-shimmer">Class IX & X (AISSE)</span>
          </h2>
          <p className="wing-lead">
            Classes IX and X prepare students for the pivotal All India Secondary School Examination (AISSE).
            Horizon Academy couples rigorous NCERT chapter mastery with CBSE competency-based questions,
            Olympiad coaching, and individual remedial mentorship.
          </p>
        </div>

        <div className="wing-features-grid">
          <div className="wing-feat-card">
            <div className="wing-feat-icon">🎯</div>
            <h3>100% Board Pass Record</h3>
            <p>
              28-year uninterrupted record of 100% CBSE AISSE pass rate, with over 68% of students
              scoring distinctions (above 85%) and city-level top ranks.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">📝</div>
            <h3>Competency & Case-Study Drills</h3>
            <p>
              Intensive training on the latest CBSE pattern: 50% competency-based questions, assertion-reasoning,
              and real-world application case studies across Science and Math.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">🔬</div>
            <h3>Mandatory Practical Vivas</h3>
            <p>
              Fully equipped individual Physics, Chemistry, and Biology workbenches ensuring every student
              completes authentic board practicals with proper lab journals.
            </p>
          </div>

          <div className="wing-feat-card">
            <div className="wing-feat-icon">💡</div>
            <h3>Skill Subject Integration</h3>
            <p>
              Students receive formal training in Artificial Intelligence (CBSE Subject Code 417) or
              Information Technology (Code 402) as a scoring vocational sixth subject.
            </p>
          </div>
        </div>

        <div className="wing-curriculum-panel">
          <div className="curriculum-col">
            <h4>Official CBSE AISSE Subject Codes & Structure</h4>
            <div className="subject-code-table-wrap">
              <table className="subject-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Subject Title</th>
                    <th>Evaluation Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>184</strong></td>
                    <td>English Language & Literature</td>
                    <td>80 Theory + 20 Internal Assessment</td>
                  </tr>
                  <tr>
                    <td><strong>002 / 122</strong></td>
                    <td>Hindi Course-A / Sanskrit</td>
                    <td>80 Theory + 20 Internal Assessment</td>
                  </tr>
                  <tr>
                    <td><strong>041 / 241</strong></td>
                    <td>Mathematics (Standard or Basic)</td>
                    <td>80 Theory + 20 Internal Assessment</td>
                  </tr>
                  <tr>
                    <td><strong>086</strong></td>
                    <td>Science (Physics, Chemistry, Biology)</td>
                    <td>80 Theory + 20 Practical Lab Exam</td>
                  </tr>
                  <tr>
                    <td><strong>087</strong></td>
                    <td>Social Science (History, Pol. Sci, Geo, Eco)</td>
                    <td>80 Theory + 20 Map & Project Work</td>
                  </tr>
                  <tr>
                    <td><strong>417 / 402</strong></td>
                    <td>Artificial Intelligence / IT (Skill Subject)</td>
                    <td>50 Theory + 50 Hands-On Lab Exam</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="curriculum-action-col">
            <div className="curriculum-cta-card">
              <span className="cta-kicker">ADMISSIONS FOR CLASS IX</span>
              <h4>Class IX Admissions Open</h4>
              <p>Screening based on Class VIII performance record and a conceptual diagnostic assessment.</p>
              <button
                onClick={() => onOpenAdmissionModal("Secondary Wing (Class IX - X)")}
                className="btn-hero-primary full-width"
              >
                Apply for Class IX →
              </button>
              <button
                onClick={() => onNavigate("admissions", "admission-steps")}
                className="btn-outline-navy full-width"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                Class IX Admission Criteria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SENIOR SECONDARY WING (CLASS XI - XII / 10+2 STREAMS) */}
      <section id="senior-secondary-wing" className="section-academic-wing">
        <div className="container">
          <div className="wing-header-box">
            <div className="wing-badge-row">
              <span className="wing-badge">SENIOR SECONDARY</span>
              <span className="wing-stage-tag">SPECIALIZATION 10+2 STAGE</span>
            </div>
            <h2 className="wing-title">
              Senior Secondary Streams: <span className="text-shimmer">Class XI & XII (10+2)</span>
            </h2>
            <p className="wing-lead">
              Our 10+2 program offers specialized academic tracks in Science, Commerce, and Humanities.
              Students benefit from comprehensive NCERT board preparation synchronized with dedicated
              competitive entrance modules (IIT-JEE, NEET, CUET, CA Foundation, CLAT).
            </p>
          </div>
        </div>

        <StreamExplorer onOpenAdmissionModal={onOpenAdmissionModal} />
      </section>

      {/* 5. ASSESSMENT & EXAMINATION STRUCTURE */}
      <section id="assessment-structure" className="section-assessment container">
        <div className="center-heading">
          <span className="section-eyebrow">CONTINUOUS & COMPREHENSIVE</span>
          <h2 className="section-title">CBSE Assessment & Examination Structure</h2>
          <p className="section-subtitle">
            Horizon Academy follows a structured, transparent evaluation pattern combining continuous
            formative feedback with rigorous summative board preparation.
          </p>
        </div>

        <div className="assessment-timeline-grid">
          {assessmentPattern.map((item, idx) => (
            <div className="assessment-card" key={idx}>
              <span className="assessment-step">0{idx + 1}</span>
              <h3 className="assessment-term">{item.term}</h3>
              <span className="assessment-timing">{item.timing}</span>
              <strong className="assessment-weight">{item.weight}</strong>
              <p className="assessment-focus">{item.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FACULTY EXCELLENCE */}
      <section id="faculty-directory" className="section-faculty-excellence">
        <div className="container">
          <div className="faculty-banner-box">
            <div className="faculty-copy">
              <span className="section-eyebrow eyebrow-light">DISTINGUISHED EDUCATORS</span>
              <h3 className="faculty-heading">
                Mentored by Master Teachers & CBSE PGT Experts
              </h3>
              <p className="faculty-sub">
                Our faculty comprises over 40 Postgraduate (PGT) and Trained Graduate (TGT) educators
                holding master's and doctorate degrees from premier universities. Over 80% have served as
                official CBSE Board head examiners, paper setters, or national evaluation observers.
              </p>
              <div className="faculty-stats-row">
                <div>
                  <strong>1 : 20</strong>
                  <span>Teacher-Student Ratio</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>B.Ed. & Post-Graduate Qualified</span>
                </div>
                <div>
                  <strong>15+ Yrs</strong>
                  <span>Average Teaching Experience</span>
                </div>
              </div>
            </div>

            <div className="faculty-action-card">
              <h4>Admissions Open for Class XI (10+2)</h4>
              <p>Secure your preferred stream (Science, Commerce, Humanities) for Academic Session 2026-27.</p>
              <button
                onClick={() => onOpenAdmissionModal("Class XI (10+2 Streams)")}
                className="btn-hero-primary full-width"
              >
                Apply for 10+2 Streams →
              </button>
              <button
                onClick={() => onNavigate("admissions", "admission-steps")}
                className="btn-outline-navy full-width"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                Admission Guidelines & Criteria
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
