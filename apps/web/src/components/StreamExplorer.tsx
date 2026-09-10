import { useState } from "react";

type StreamTab = "science" | "commerce" | "humanities" | "secondary" | "foundational";

interface StreamExplorerProps {
  onOpenAdmissionModal?: (stream?: string) => void;
  onSelectStream?: (stream?: string) => void;
}

interface StreamData {
  id: StreamTab;
  tabTitle: string;
  tabBadge: string;
  tabIcon: string;
  code: string;
  affiliation: string;
  heading: string;
  description: string;
  statNumber: string;
  statLabel: string;
  admissionStreamName: string;
  syllabusLabel: string;
  coreSubjects: {
    title: string;
    items: { name: string; tag?: string }[];
    note?: string;
  };
  electives: {
    title: string;
    items: { name: string; tag?: string }[];
    note?: string;
  };
  practicals: {
    title: string;
    items: string[];
  };
  pathways: {
    title: string;
    badges: string[];
    items: string[];
  };
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
}

const streamsData: Record<StreamTab, StreamData> = {
  science: {
    id: "science",
    tabTitle: "Science Stream (PCM / PCB)",
    tabBadge: "10+2",
    tabIcon: "fas fa-atom",
    code: "CBSE STREAM CODE: 01",
    affiliation: "AISSCE Class XI & XII",
    heading: "Science Stream — Medical, Engineering & STEM Excellence",
    description:
      "Engineered for future doctors, engineers, data scientists, and research innovators. Our science curriculum seamlessly integrates rigorous CBSE board mastery with synchronized IIT-JEE and NEET-UG analytical mentoring led by veteran faculty.",
    statNumber: "98.4%",
    statLabel: "Top Science Board Score (Class 12)",
    admissionStreamName: "Science Stream (10+2)",
    syllabusLabel: "Download Science Syllabus & Booklist",
    coreSubjects: {
      title: "Core Subject Groups",
      items: [
        { name: "Non-Medical (PCM)", tag: "Engineering" },
        { name: "Medical (PCB)", tag: "Medical" },
        { name: "Dual Science (PCMB)", tag: "Biotech / Research" },
        { name: "Physics & Chemistry", tag: "Compulsory" },
        { name: "English Core", tag: "Language" },
      ],
      note: "Comprehensive theoretical proofs, conceptual derivation drills, and synchronized question-bank mastery.",
    },
    electives: {
      title: "5th & 6th Elective Specializations",
      items: [
        { name: "Computer Science (Python & SQL)", tag: "Tech" },
        { name: "Informatics Practices (IP)", tag: "Data" },
        { name: "Applied Mathematics", tag: "Quantitative" },
        { name: "Physical Education", tag: "Sports Science" },
        { name: "Fine Arts / Painting", tag: "Creative" },
      ],
      note: "Choose industry-aligned electives that maximize competitive exam agility and CBSE aggregate scores.",
    },
    practicals: {
      title: "Laboratories & Hands-on Training",
      items: [
        "Dedicated Senior Physics, Chemistry & Biology Research Laboratories",
        "NITI Aayog Atal Tinkering Lab (ATL) for Robotics, AI & IoT prototyping",
        "Individual student lab workstations with certified safety protocols",
        "Weekly experimental demonstrations, project portfolios & mock viva prep",
      ],
    },
    pathways: {
      title: "Competitive Exam Roadmaps",
      badges: ["IIT-JEE (Main & Adv)", "NEET-UG", "IISER / NISER", "NDA", "Olympiads"],
      items: [
        "Daily practice problem sheets (DPPs) with video solution keys",
        "Full-length CBT simulation mock exams with All-India percentile benchmark",
        "Special doubt clearing clinics and Olympiad (NSO, IMO) training",
      ],
    },
    features: [
      {
        icon: "fas fa-award",
        title: "100% Board Pass Rate",
        desc: "Consistent 1st division record in CBSE Class XII examinations.",
      },
      {
        icon: "fas fa-user-graduate",
        title: "Premier Campus Selections",
        desc: "32+ students in IITs, NITs, BITS, and AIIMS in recent sessions.",
      },
      {
        icon: "fas fa-microscope",
        title: "Individual Lab Workstations",
        desc: "Every scholar performs hands-on experiments independently.",
      },
    ],
  },

  commerce: {
    id: "commerce",
    tabTitle: "Commerce Stream",
    tabBadge: "10+2",
    tabIcon: "fas fa-chart-line",
    code: "CBSE STREAM CODE: 02",
    affiliation: "AISSCE Class XI & XII",
    heading: "Commerce Stream — Business, Finance & Corporate Leadership",
    description:
      "Designed for tomorrow's chartered accountants, corporate leaders, investment bankers, and entrepreneurs. Combines foundational principles of accounting and macroeconomic strategy with live market case studies and financial technology.",
    statNumber: "99/100",
    statLabel: "Perfect Score in Accountancy & Economics",
    admissionStreamName: "Commerce Stream (10+2)",
    syllabusLabel: "Download Commerce Subject Schemes",
    coreSubjects: {
      title: "Compulsory Core Foundations",
      items: [
        { name: "Accountancy", tag: "Company & Partnership" },
        { name: "Business Studies", tag: "Management & Finance" },
        { name: "Economics", tag: "Macro & Indian Economy" },
        { name: "English Core", tag: "Business Communication" },
      ],
      note: "Deep conceptual grounding in double-entry bookkeeping, balance sheet auditing, and fiscal policy analysis.",
    },
    electives: {
      title: "Elective Combinations & Skill Courses",
      items: [
        { name: "Applied Mathematics", tag: "Recommended for CA/CUET" },
        { name: "Informatics Practices (IP)", tag: "DBMS & Python" },
        { name: "Entrepreneurship", tag: "Startup Incubation" },
        { name: "Physical Education", tag: "Sports" },
      ],
      note: "Applied Mathematics is strongly encouraged for commerce scholars aiming for top DU colleges and CA/CS pathways.",
    },
    practicals: {
      title: "Practical & Experiential Learning",
      items: [
        "Computerized Accounting Laboratory with Tally ERP 9 & Excel modeling",
        "Annual Horizon Youth Entrepreneurship & Shark Tank Innovation Fest",
        "Mock Stock Market Trading Competitions & Union Budget Analysis",
        "Corporate internships, industrial visits, and project viva preparation",
      ],
    },
    pathways: {
      title: "University & Professional Roadmaps",
      badges: ["CUET-UG (SRCC / Hindu)", "CA Foundation", "CS Executive", "IPMAT (IIMs)", "CFA Prep"],
      items: [
        "Targeted CUET coaching for top Delhi University, Mumbai & Bangalore business colleges",
        "CA Foundation weekend foundation classes by practicing Chartered Accountants",
        "Preparation for IPMAT integrated MBA programs at IIM Indore and Rohtak",
      ],
    },
    features: [
      {
        icon: "fas fa-graduation-cap",
        title: "CUET Top-Tier Placement",
        desc: "Over 90% of commerce batch secures entry into elite universities.",
      },
      {
        icon: "fas fa-briefcase",
        title: "Industry Guest Masterclasses",
        desc: "Direct interactions with active CAs, CFAs, and venture startup founders.",
      },
      {
        icon: "fas fa-file-invoice-dollar",
        title: "100% Viva & Project Score",
        desc: "Exemplary track record in internal assessments and project portfolios.",
      },
    ],
  },

  humanities: {
    id: "humanities",
    tabTitle: "Humanities / Arts",
    tabBadge: "10+2",
    tabIcon: "fas fa-landmark",
    code: "CBSE STREAM CODE: 03",
    affiliation: "AISSCE Class XI & XII",
    heading: "Humanities & Social Sciences — Policy, Law & Global Affairs",
    description:
      "A prestigious liberal arts pathway fostering critical reasoning, analytical writing, and geopolitical insight. Ideal for students aspiring towards Civil Services (UPSC), Judiciary & CLAT, International Diplomacy, Psychology, and Media.",
    statNumber: "97.8%",
    statLabel: "Top Humanities Board Aggregate",
    admissionStreamName: "Humanities Stream (10+2)",
    syllabusLabel: "Download Humanities Curriculum Guide",
    coreSubjects: {
      title: "Core Humanities Framework",
      items: [
        { name: "Political Science", tag: "Constitution & Global Affairs" },
        { name: "History", tag: "Indian & World Themes" },
        { name: "Economics", tag: "Development & Statistics" },
        { name: "English Core", tag: "Literary Theory & Rhetoric" },
      ],
      note: "Cultivates original thesis formulation, historical context analysis, and constitutional argument skills.",
    },
    electives: {
      title: "Specialized Elective Choices",
      items: [
        { name: "Psychology", tag: "Behavioral & Cognitive" },
        { name: "Sociology", tag: "Society & Social Change" },
        { name: "Legal Studies", tag: "Jurisprudence & Law" },
        { name: "Fine Arts / Painting", tag: "Visual Arts" },
        { name: "Geography", tag: "Physical & Human Geo" },
      ],
      note: "Offers multidisciplinary subject pairings tailored to student career aspirations in civil services or law.",
    },
    practicals: {
      title: "Workshops, Labs & Enrichment",
      items: [
        "Annual Horizon Model United Nations (HMUN) and Youth Parliamentary debates",
        "Dedicated Psychology Laboratory equipped with standardized psychometric tests",
        "Field excursions to national archives, museums, and supreme court proceedings",
        "Mentored research dissertations and policy position papers before college",
      ],
    },
    pathways: {
      title: "Career & Competitive Horizons",
      badges: ["UPSC Civil Services Foundation", "CLAT & AILET (Law)", "CUET Arts", "Diplomacy / IFS", "Media & Journalism"],
      items: [
        "UPSC civil services foundation circle with daily editorial and current affairs analysis",
        "CLAT legal aptitude, logical reasoning, and reading comprehension workshops",
        "Guidance for top Central Universities (JNU, DU, Ashoka, Azim Premji)",
      ],
    },
    features: [
      {
        icon: "fas fa-balance-scale",
        title: "National Law University Ranks",
        desc: "Multiple selections in NLSIU Bangalore, NALSAR, and WBNUJS.",
      },
      {
        icon: "fas fa-microphone-alt",
        title: "State Youth Parliament Laurels",
        desc: "Award-winning parliamentary debating delegation in national circuits.",
      },
      {
        icon: "fas fa-book-open",
        title: "Scholarly Research Monograph",
        desc: "Each student publishes an original mentored research dissertation.",
      },
    ],
  },

  secondary: {
    id: "secondary",
    tabTitle: "Secondary School (AISSE)",
    tabBadge: "Class IX-X",
    tabIcon: "fas fa-graduation-cap",
    code: "CBSE AISSE ACCREDITED",
    affiliation: "Class IX & X (Secondary Board)",
    heading: "Secondary Wing — Conceptual Mastery & Board Readiness",
    description:
      "Building robust analytical thinking and strong fundamental concepts across all disciplines before entering 10+2. Our structured curriculum emphasizes NCERT mastery, science experiments, and CBSE Class X Board exam readiness without rote learning.",
    statNumber: "100%",
    statLabel: "Class 10 CBSE Board Pass Percentage",
    admissionStreamName: "Secondary Wing (Class IX-X)",
    syllabusLabel: "View Class 10 Assessment Pattern",
    coreSubjects: {
      title: "CBSE Board Examination Subjects",
      items: [
        { name: "English Language & Lit (Code 184)", tag: "Language I" },
        { name: "Mathematics (Standard / Basic)", tag: "Code 041/241" },
        { name: "Science (Physics, Chem, Bio)", tag: "Integrated Theory & Practical" },
        { name: "Social Science (Hist, Civics, Geo, Eco)", tag: "Core" },
      ],
      note: "Options for Mathematics Standard (for STEM aspirations) or Mathematics Basic (for Humanities/Commerce focus).",
    },
    electives: {
      title: "Second Language & Skill Electives",
      items: [
        { name: "Hindi Course A / Course B", tag: "Language II" },
        { name: "Sanskrit / French", tag: "Classical & Foreign" },
        { name: "Artificial Intelligence (AI)", tag: "CBSE Skill" },
        { name: "Information Technology (IT)", tag: "Computer" },
      ],
      note: "Skill subjects act as an aggregate booster and provide early exposure to modern AI and coding logic.",
    },
    practicals: {
      title: "Assessment & Laboratory Framework",
      items: [
        "Structured Periodic Tests (PT 1, PT 2, PT 3) with customized learning diagnostics",
        "Triple Pre-Board Exam Series simulated under exact CBSE examination center conditions",
        "Subject Enrichment Activities, Art-Integrated projects, and Portfolio reviews",
        "Science practical manuals and hands-on laboratory experiments for every student",
      ],
    },
    pathways: {
      title: "Olympiads & Early Aptitude Mentorship",
      badges: ["SOF Olympiads (NSO, IMO)", "CBSE Aryabhata Ganit", "NTSE Foundation", "Spell Bee", "ATL Innovation"],
      items: [
        "Rigorous training for National Science Olympiad (NSO) and International Math Olympiad (IMO)",
        "CBSE Aryabhata Ganit Challenge preparation for analytical and mental math agility",
        "Stream counseling and psychological aptitude testing at the end of Class 10",
      ],
    },
    features: [
      {
        icon: "fas fa-trophy",
        title: "100% Board Pass Rate",
        desc: "Over 35% of the batch scores 90%+ aggregate in Class X CBSE Boards.",
      },
      {
        icon: "fas fa-user-friends",
        title: "Remedial Doubt Clinics",
        desc: "Special small-batch support sessions ensuring no student is left behind.",
      },
      {
        icon: "fas fa-desktop",
        title: "Smart Classroom Simulations",
        desc: "Complex math theorems and science phenomena taught using 3D digital boards.",
      },
    ],
  },

  foundational: {
    id: "foundational",
    tabTitle: "Foundational & Middle",
    tabBadge: "Nursery-VIII",
    tabIcon: "fas fa-shapes",
    code: "NEP 2020 & NCF ALIGNED",
    affiliation: "Nursery to Class VIII",
    heading: "Foundational, Preparatory & Middle Wings — Joyful Discovery",
    description:
      "Nurturing joyful curiosity, self-confidence, and ethical values in a child’s formative years. Following the National Education Policy (NEP 2020) and NCF guidelines, we cultivate experiential learning through storytelling, sports, phonics, and hands-on discovery.",
    statNumber: "1:15",
    statLabel: "Student-Teacher Mentorship Ratio",
    admissionStreamName: "Primary / Middle School",
    syllabusLabel: "Explore Primary Activity Wings",
    coreSubjects: {
      title: "Foundational & Preparatory Stages",
      items: [
        { name: "Foundational Stage (Nursery–UKG)", tag: "Play-Way & Sensory" },
        { name: "Preparatory Stage (Classes I–V)", tag: "FLN & Discovery" },
        { name: "Environmental Studies (EVS)", tag: "Inquiry" },
        { name: "Foundational Literacy & Numeracy", tag: "Core Mastery" },
      ],
      note: "Phonetic reading programs, hands-on Montessori manipulative kits, and bilingual conversational fluency.",
    },
    electives: {
      title: "Middle School Expansion (Classes VI–VIII)",
      items: [
        { name: "Departmental Science Labs", tag: "Inquiry" },
        { name: "Applied & Vedic Mathematics", tag: "Problem-Solving" },
        { name: "Third Language (Sanskrit / French)", tag: "Language III" },
        { name: "Vocational Skills (Robotics / Coding)", tag: "NEP Vocational" },
      ],
      note: "Introduces subject-specialist teachers and vocational craftsmanship including carpentry, pottery, and coding.",
    },
    practicals: {
      title: "Creative Arts & Experiential Activities",
      items: [
        "Junior Atal Tinkering Lab for LEGO robotics, beginner mechanics, and logic puzzles",
        "Hindustani Classical Vocal Music, Tabla, Keyboard, Dance, and Dramatics studios",
        "Daily physical education, martial arts (Taekwondo), Yoga, Skating, and field athletics",
        "Activity-driven 'Zero Bag Weight' days dedicated to environmental field exploration",
      ],
    },
    pathways: {
      title: "Child Well-Being & Holistic Growth",
      badges: ["Holistic Progress Card", "Moral Values Circle", "Language Immersion", "STEAM Junior", "Life Skills"],
      items: [
        "Continuous 360-degree Holistic Progress Card (HPC) tracking cognitive, socio-emotional, and motor development",
        "Value education circles rooted in empathy, respect for nature, and cultural heritage",
        "Parent-educator collaborative development workshops and milestone tracking",
      ],
    },
    features: [
      {
        icon: "fas fa-shield-alt",
        title: "Child-Safe Campus Infrastructure",
        desc: "Padded floor arenas, child-friendly ergonomic furniture, and 24/7 CCTV vigilance.",
      },
      {
        icon: "fas fa-feather-alt",
        title: "Zero Heavy Bag Burden",
        desc: "Activity-driven classrooms ensuring learning is delightful and never burdensome.",
      },
      {
        icon: "fas fa-heart",
        title: "Pastoral Emotional Care",
        desc: "Certified child counselors and warm, empathetic primary educators.",
      },
    ],
  },
};

export default function StreamExplorer({
  onOpenAdmissionModal,
  onSelectStream,
}: StreamExplorerProps) {
  const [activeTab, setActiveTab] = useState<StreamTab>("science");

  const currentStream = streamsData[activeTab];

  const handleApply = (streamName: string) => {
    if (onOpenAdmissionModal) {
      onOpenAdmissionModal(streamName);
    } else if (onSelectStream) {
      onSelectStream(streamName);
    }
  };

  return (
    <section className="section-streams" id="streams">
      <div className="container">
        {/* Section Header */}
        <div className="streams-header-block reveal-up">
          <span className="section-eyebrow">ACADEMIC EXCELLENCE &amp; 10+2 PATHWAYS</span>
          <h2 className="section-title">
            Specialized Streams for <em>Senior Secondary (10+2)</em>
          </h2>
          <p className="section-subtitle">
            Horizon Academy offers accredited CBSE 10+2 curricula and foundational wings tailored to launch students
            into India’s top universities, engineering &amp; medical colleges, law schools, and global institutions.
          </p>
        </div>

        {/* Kingster-style Filter Navigation Pills */}
        <div className="stream-tabs-nav reveal-up" role="tablist" aria-label="Select Academic Stream or Class Wing">
          {(Object.keys(streamsData) as StreamTab[]).map((tabKey) => {
            const tab = streamsData[tabKey];
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                className={`stream-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(tabKey)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="tab-badge">{tab.tabBadge}</span>
                <span className="tab-title-wrap">
                  <i className={`${tab.tabIcon} tab-btn-icon`} />
                  <span>{tab.tabTitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Stream Content Card Frame */}
        <div className="stream-content-card reveal-up">
          <div className="stream-panel animate-fade-in" key={currentStream.id}>
            {/* Left/Main Column: Rich Cards */}
            <div className="panel-main">
              {/* Top Banner Card */}
              <div className="stream-hero-card">
                <div className="stream-tag-row">
                  <span className="stream-code">
                    <i className="fas fa-certificate" /> {currentStream.code}
                  </span>
                  <span className="stream-affiliation">
                    <i className="fas fa-check-circle" /> {currentStream.affiliation}
                  </span>
                </div>

                <div className="stream-title-row">
                  <div className="stream-hero-icon-box">
                    <i className={currentStream.tabIcon} />
                  </div>
                  <div>
                    <h3 className="stream-heading">{currentStream.heading}</h3>
                    <p className="stream-desc">{currentStream.description}</p>
                  </div>
                </div>
              </div>

              {/* 4 Feature Specification Cards Grid */}
              <div className="stream-specs-grid">
                {/* Card 1: Core Subjects */}
                <div className="spec-box spec-box--core">
                  <div className="spec-card-head">
                    <div className="spec-card-icon-wrap spec-icon--core">
                      <i className="fas fa-book-open" />
                    </div>
                    <div>
                      <span className="spec-category-label">Academic Framework</span>
                      <h4 className="spec-label">{currentStream.coreSubjects.title}</h4>
                    </div>
                  </div>
                  <div className="spec-chips-wrapper">
                    {currentStream.coreSubjects.items.map((item, idx) => (
                      <div className="spec-subject-chip" key={idx}>
                        <span className="chip-name">{item.name}</span>
                        {item.tag && <span className="chip-tag">{item.tag}</span>}
                      </div>
                    ))}
                  </div>
                  {currentStream.coreSubjects.note && (
                    <p className="spec-card-note">
                      <i className="fas fa-info-circle" /> {currentStream.coreSubjects.note}
                    </p>
                  )}
                </div>

                {/* Card 2: Electives & Choices */}
                <div className="spec-box spec-box--electives">
                  <div className="spec-card-head">
                    <div className="spec-card-icon-wrap spec-icon--electives">
                      <i className="fas fa-puzzle-piece" />
                    </div>
                    <div>
                      <span className="spec-category-label">Specializations</span>
                      <h4 className="spec-label">{currentStream.electives.title}</h4>
                    </div>
                  </div>
                  <div className="spec-chips-wrapper">
                    {currentStream.electives.items.map((item, idx) => (
                      <div className="spec-subject-chip chip--elective" key={idx}>
                        <span className="chip-name">{item.name}</span>
                        {item.tag && <span className="chip-tag chip-tag--sub">{item.tag}</span>}
                      </div>
                    ))}
                  </div>
                  {currentStream.electives.note && (
                    <p className="spec-card-note">
                      <i className="fas fa-info-circle" /> {currentStream.electives.note}
                    </p>
                  )}
                </div>

                {/* Card 3: Laboratories & Practicals */}
                <div className="spec-box spec-box--labs">
                  <div className="spec-card-head">
                    <div className="spec-card-icon-wrap spec-icon--labs">
                      <i className="fas fa-flask" />
                    </div>
                    <div>
                      <span className="spec-category-label">Experiential Learning</span>
                      <h4 className="spec-label">{currentStream.practicals.title}</h4>
                    </div>
                  </div>
                  <ul className="spec-feature-bullets">
                    {currentStream.practicals.items.map((bullet, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 4: Competitive Pathways */}
                <div className="spec-box spec-box--pathways">
                  <div className="spec-card-head">
                    <div className="spec-card-icon-wrap spec-icon--pathways">
                      <i className="fas fa-compass" />
                    </div>
                    <div>
                      <span className="spec-category-label">Future Roadmap</span>
                      <h4 className="spec-label">{currentStream.pathways.title}</h4>
                    </div>
                  </div>
                  <div className="spec-pathway-badges">
                    {currentStream.pathways.badges.map((badge, idx) => (
                      <span className="pathway-exam-badge" key={idx}>
                        <i className="fas fa-star" /> {badge}
                      </span>
                    ))}
                  </div>
                  <ul className="spec-feature-bullets">
                    {currentStream.pathways.items.map((bullet, idx) => (
                      <li key={idx}>
                        <i className="fas fa-arrow-right" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bar */}
              <div className="stream-action-bar">
                <button
                  type="button"
                  onClick={() => handleApply(currentStream.admissionStreamName)}
                  className="btn-stream-cta"
                >
                  <i className="fas fa-pen-nib" /> Apply for {currentStream.tabTitle} (2026-27)
                </button>
                <a href="#circulars" className="btn-stream-syllabus">
                  <i className="fas fa-file-pdf" /> {currentStream.syllabusLabel}
                </a>
              </div>
            </div>

            {/* Right Column: Key Stats & Advantages Sidebar Card */}
            <aside className="panel-sidebar">
              {/* Top Stat Highlight Card */}
              <div className="sidebar-stat-card">
                <div className="sidebar-stat-ring">
                  <span className="sidebar-stat-number">{currentStream.statNumber}</span>
                  <small>DISTINCTION</small>
                </div>
                <span className="sidebar-stat-caption">{currentStream.statLabel}</span>
              </div>

              {/* Proven Highlights Card */}
              <div className="sidebar-feature-card">
                <div className="sidebar-feature-header">
                  <i className="fas fa-shield-alt" />
                  <strong>Why Study at Horizon?</strong>
                </div>
                <div className="sidebar-feature-list">
                  {currentStream.features.map((feat, idx) => (
                    <div className="feat-item" key={idx}>
                      <span className="feat-icon">
                        <i className={feat.icon} />
                      </span>
                      <div>
                        <strong>{feat.title}</strong>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Inquiry Card */}
              <div className="sidebar-advisory-card">
                <div className="advisory-icon-circle">
                  <i className="fas fa-user-tie" />
                </div>
                <h4>Need Stream Guidance?</h4>
                <p>Speak to our senior academic coordinators &amp; counselors for stream assessment.</p>
                <button
                  type="button"
                  onClick={() => handleApply(currentStream.admissionStreamName)}
                  className="btn-advisory-contact"
                >
                  <i className="fas fa-headset" /> Request Counseling Call
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
