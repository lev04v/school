import { useState, useEffect, useRef } from "react";
import { PageId } from "../components/Header";
import NoticesAndEvents from "../components/NoticesAndEvents";

interface HomePageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

interface AcademicStage {
  id: string;
  badge: string;
  stageName: string;
  headline: string;
  description: string;
  bullets: string[];
  ctaText: string;
  targetPage: PageId;
  targetSection: string;
  image: string;
}

// Self-contained, memoized cycling tagline component to prevent entire page re-renders
function CyclingTagline() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(55);

  const typingTexts = [
    "Where Ambition Meets Academic Distinction.",
    "CBSE Affiliated 10+2: Science, Commerce & Humanities.",
    "NITI Aayog Approved Atal Tinkering Lab & STEM Hub.",
    "100% Board Pass Rate & 28-Year Legacy of Excellence.",
  ];

  useEffect(() => {
    const currentFullText = typingTexts[loopNum % typingTexts.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(45);

        if (displayText.length + 1 === currentFullText.length) {
          setTypingSpeed(2400);
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(22);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(380);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="new-hero-cycling-bar" aria-live="polite">
      <span className="cycling-indicator-dot" aria-hidden="true"></span>
      <span className="cycling-active-text">{displayText}</span>
    </div>
  );
}

// Self-contained StatsRibbon component to avoid full page re-rendering during count-up
function StatsRibbon() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasCounted, setHasCounted] = useState(false);
  const [counters, setCounters] = useState({
    years: 28,
    alumni: 14000,
    faculty: 40,
    passRate: 100,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuad = (t: number) => t * (2 - t);
            const factor = easeOutQuad(progress);

            setCounters({
              years: Math.round(28 * factor),
              alumni: Math.round(14000 * factor),
              faculty: Math.round(40 * factor),
              passRate: Math.round(100 * factor),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounters({
                years: 28,
                alumni: 14000,
                faculty: 40,
                passRate: 100,
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section id="stats-ribbon" ref={statsRef} className="new-stats-ribbon-bar">
      <div className="stats-leaf-motif stats-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90C40 90 80 50 90 10C50 20 10 60 10 90Z" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
          <path d="M10 90C50 70 70 50 90 10" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
        </svg>
      </div>
      <div className="stats-leaf-motif stats-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 90C60 90 20 50 10 10C50 20 90 60 90 90Z" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
          <path d="M90 90C50 70 30 50 10 10" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
        </svg>
      </div>

      <div className="container">
        <div className="new-stats-grid-row">
          <div className="new-stat-cell">
            <div className="new-stat-number">{counters.years > 0 ? `${counters.years}+` : "25+"}</div>
            <div className="new-stat-caption">Years of Excellence</div>
          </div>
          <div className="new-stat-cell">
            <div className="new-stat-number">{counters.alumni > 0 ? `${(counters.alumni / 7).toFixed(0)}+` : "2000+"}</div>
            <div className="new-stat-caption">Happy Students</div>
          </div>
          <div className="new-stat-cell">
            <div className="new-stat-number">{counters.faculty > 0 ? `${counters.faculty * 3.75 > 150 ? 150 : Math.round(counters.faculty * 3.75)}+` : "150+"}</div>
            <div className="new-stat-caption">Dedicated Faculty</div>
          </div>
          <div className="new-stat-cell">
            <div className="new-stat-number">100%</div>
            <div className="new-stat-caption">Focus on Holistic Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home({ onNavigate, onOpenAdmissionModal }: HomePageProps) {
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);
  const [activeStageId, setActiveStageId] = useState<string>("senior");
  const [activeLifeTab, setActiveLifeTab] = useState<string>("learning");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [isStoryVideoOpen, setIsStoryVideoOpen] = useState(false);

  const academicStages: AcademicStage[] = [
    {
      id: "foundational",
      badge: "NEP 2020 5+3 STAGE",
      stageName: "Foundational & Primary",
      headline: "Curiosity, Phonics & Experiential Early Learning (Nursery — Class V)",
      description:
        "Rooted in play-based enquiry, foundational numeracy, and linguistic mastery. Children explore nature, smart interactive classrooms, and moral fables in a joyful, nurturing atmosphere.",
      bullets: [
        "Play-way methodology aligned with NEP 2020 guidelines",
        "Sensory discovery zones & child-friendly activity studios",
        "Foundational STEM robotics & phonics mastery labs",
      ],
      ctaText: "Explore Foundational Wing →",
      targetPage: "academics",
      targetSection: "foundational-wing",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "middle",
      badge: "CLASS VI — VIII",
      stageName: "Middle School",
      headline: "Conceptual Mastery, Inquiry & Atal Tinkering STEM Hub",
      description:
        "Transitioning from concrete to abstract reasoning. Students participate hands-on in the NITI Aayog approved Atal Tinkering Lab, inter-house debating, and scientific investigation.",
      bullets: [
        "Hands-on 3D printing, sensors & electronics in ATL Lab",
        "Integrated NCERT conceptual frameworks & Olympiad prep",
        "Foreign language options (French/Sanskrit) & arts immersion",
      ],
      ctaText: "Discover Middle Wing →",
      targetPage: "academics",
      targetSection: "middle-wing",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "secondary",
      badge: "CLASS IX & X (AISSE)",
      stageName: "Secondary School",
      headline: "Rigorous CBSE Board Preparation & Academic Discipline",
      description:
        "Intensive curriculum delivery focused on CBSE Board examination supremacy without rote cramming. Dedicated master faculties provide personalized diagnostic tutorials and Olympiad coaching.",
      bullets: [
        "100% first-division pass record in Class 10 CBSE Board exams",
        "Specialized pre-board examination series with feedback loops",
        "Integrated AI, Information Technology & Robotics skills",
      ],
      ctaText: "View Secondary Curriculum →",
      targetPage: "academics",
      targetSection: "secondary-wing",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "senior",
      badge: "CLASS XI & XII (10+2)",
      stageName: "Senior Secondary (10+2)",
      headline: "Specialized Science, Commerce & Humanities Pathways",
      description:
        "Our hallmark 10+2 program blends board syllabus perfection with synchronized competitive guidance for IIT-JEE, NEET-UG, CUET, and CA Foundation under veteran senior PGT mentors.",
      bullets: [
        "Science (PCM/PCB) with state-of-the-art CBSE research laboratories",
        "Commerce with stock market simulations & Tally ERP integration",
        "Humanities with Model United Nations & legal studies cell",
      ],
      ctaText: "Compare All 3 Streams & Labs →",
      targetPage: "academics",
      targetSection: "senior-secondary-wing",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const activeStage = academicStages.find((s) => s.id === activeStageId) || academicStages[3];

  const lifeCategories = [
    {
      id: "learning",
      label: "Academic Inquiry & Labs",
      title: "Science, Robotics & Analytical Rigor",
      desc: "From testing chemical kinetics in composite science labs to programming Arduino microcontrollers in the ATL lab, learning at Horizon Academy is hands-on and intellectually invigorating.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
      badge: "STEM & Discovery",
    },
    {
      id: "sports",
      label: "Sports & Athletics",
      title: "Championship Turf & Multi-Sport Arena",
      desc: "Our professional cricket turf, 200m athletic track, FIBA-standard basketball court, and NIS-certified coaches cultivate discipline, physical fitness, and resilient sportsmanship.",
      image: "https://images.unsplash.com/photo-1531415074868-036b1c57e359?auto=format&fit=crop&w=1200&q=85",
      badge: "Athletics & NIS Coaching",
    },
    {
      id: "arts",
      label: "Arts & Culture",
      title: "Creative Expression & The Stage",
      desc: "Student actors, classical vocalists, instrument players, and fine artists showcase their craft on our open-air amphitheatre and state-of-the-art auditorium during the annual Tarang Fest.",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=85",
      badge: "Tarang Cultural Fest",
    },
    {
      id: "houses",
      label: "Four House Leadership",
      title: "Raman, Tagore, Ashoka & Shivaji",
      desc: "The house system infuses school life with camaraderie and character. Students elect house captains, compete in intellectual debates, and earn championship shields.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
      badge: "Student Democracy",
    },
  ];

  const activeLifeItem = lifeCategories.find((c) => c.id === activeLifeTab) || lifeCategories[0];

  const testimonials = [
    {
      quote:
        "Horizon Academy gave my daughter both the academic discipline to score 98.4% in CBSE Class 12 Science and the confidence to qualify for IIT-JEE in her first attempt. The PGT faculty’s personal commitment is truly unmatched.",
      author: "Dr. Aniruddh Sengupta",
      relation: "Father of Ananya Sengupta (State Topper 2025, now at IIT Delhi)",
      badge: "Parent of Class XII Scholar",
    },
    {
      quote:
        "The Atal Tinkering Lab transformed my son’s interest in robotics from a hobby into a national award. The school provides a rare balance of cutting-edge technology and grounded Indian values.",
      author: "Mrs. Sunita Venkatesh",
      relation: "Mother of Kabir Venkatesh (Class X, National ATL Marathon Laureate)",
      badge: "Parent of Middle Wing Student",
    },
    {
      quote:
        "Beyond our 100% board pass rates, what sets Horizon Academy apart is the atmosphere of dignity, humility, and intellectual ambition. Teachers mentor each student with genuine care.",
      author: "Mr. Harshavardhan Mittal",
      relation: "Alumnus (Batch of 2018), Investment Analyst & IIM Ahmedabad Alum",
      badge: "Horizon Academy Alumnus",
    },
  ];

  const faqs = [
    {
      q: "What are the eligibility criteria and age norms for Admission (2026–27)?",
      category: "Admissions & Age",
      a: "For Pre-Primary (Nursery, LKG, UKG), age eligibility follows NEP 2020 and Directorate of Education norms. For Class I upwards, admission is merit-based upon review of previous academic records and an interactive session. For Class XI (10+2), stream allocation depends on Class X board scores and diagnostic counseling.",
    },
    {
      q: "Which streams and subject combinations are offered in Class 11 and 12 (10+2)?",
      category: "10+2 Streams",
      a: "Horizon Academy offers three comprehensive CBSE-affiliated streams: Science (PCM with Computer Science/Informatics Practices, or PCB with Biotechnology/Psychology), Commerce (Accountancy, Business Studies, Economics, Applied Mathematics), and Humanities (History, Political Science, Psychology, Sociology, Legal Studies).",
    },
    {
      q: "How does the Atal Tinkering Lab (ATL) benefit students?",
      category: "STEM & Labs",
      a: "Recognized and funded under the aegis of NITI Aayog, our ATL STEM Hub equips students from Class VI onwards with hands-on experience in 3D printing, IoT sensors, Arduino microcontrollers, and artificial intelligence, fostering problem-solving skills and national hackathon participation.",
    },
    {
      q: "Is school transport available and how safe is the bus fleet?",
      category: "Bus & Safety",
      a: "Yes. Horizon Academy operates an extensive fleet of 35+ air-conditioned buses covering all major sectors and neighborhoods across Delhi/NCR. Every vehicle is equipped with live GPS parent tracking, CCTV surveillance, speed limiters (capped at 40 km/h), first-aid kits, and trained female attendants.",
    },
    {
      q: "What is the fee structure and where can statutory disclosures be viewed?",
      category: "CBSE & SARAS",
      a: "In compliance with CBSE SARAS norms and Affiliation Bye-Laws, our transparent fee schedule and statutory certificates (affiliation grant, fire safety, water purity, building stability) are openly available in the CBSE SARAS section of this website.",
    },
    {
      q: "Are competitive entrance exam batches (JEE, NEET, CUET) integrated into the school schedule?",
      category: "Competitive Prep",
      a: "Yes. For Classes XI and XII, the core NCERT curriculum is seamlessly reinforced with objective problem-solving modules, advanced doubt-clearing sessions, and regular mock testing so students do not need external commercial coaching centers.",
    },
  ];

  const faqCategories = [
    { id: "all", label: "All Questions" },
    { id: "Admissions & Age", label: "Admissions & Age" },
    { id: "10+2 Streams", label: "10+2 Streams" },
    { id: "STEM & Labs", label: "STEM & ATL" },
    { id: "Bus & Safety", label: "Bus & Safety" },
    { id: "CBSE & SARAS", label: "CBSE & SARAS" },
    { id: "Competitive Prep", label: "JEE / NEET Prep" },
  ];

  const filteredFaqs = activeFaqCategory === "all"
    ? faqs
    : faqs.filter(f => f.category === activeFaqCategory);

  return (
    <div className="homepage-wrap">
      {/* =========================================================================
          SECTION 01 — NEW PANORAMIC HERO (MATCHING REFERENCE DESIGN)
          ========================================================================= */}
      <section id="hero" className="new-hero-hero">
        {/* Full-bleed Campus Aerial Sunset Background */}
        <div className="new-hero-bg-wrap" aria-hidden="true">
          <img
            src="/images/hero-campus.jpg"
            alt="Horizon Academy Campus Architecture & Grounds"
            className="new-hero-bg-img"
            loading="eager"
            fetchPriority="high"
          />
          {/* Contrast gradient overlay for pristine text readability */}
          <div className="new-hero-gradient-overlay"></div>
          {/* Sunset golden atmosphere glow on right */}
          <div className="new-hero-sunset-glow"></div>
        </div>

        <div className="container new-hero-container">
          {/* Left Column: Hero Content */}
          <div className="new-hero-content-col">
            {/* Tagline */}
            <div className="new-hero-tagline">
              <span className="tagline-dash">—</span>
              <span className="tagline-text">EDUCATION FOR A BETTER TOMORROW</span>
            </div>

            {/* Regal Serif Headline */}
            <h1 className="new-hero-heading">
              Rooted in Values.<br />
              Built for Tomorrow.
            </h1>

            {/* Subtitle Description */}
            <p className="new-hero-desc">
              At Horizon Academy, we nurture curious minds, build character and prepare students for a future full of possibilities.
            </p>

            {/* Rotating / Disappearing Taglines (Isolate component to prevent page re-renders) */}
            <CyclingTagline />

            {/* Hero Action Buttons */}
            <div className="new-hero-actions">
              <button
                onClick={() => {
                  const storySec = document.getElementById("our-story");
                  if (storySec) {
                    storySec.scrollIntoView({ behavior: "smooth" });
                  } else {
                    onNavigate("about", "legacy-heritage");
                  }
                }}
                className="btn-new-explore"
                aria-label="Explore Our School"
              >
                <span>Explore Our School</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              <button
                onClick={() => setIsStoryVideoOpen(true)}
                className="btn-new-story"
                aria-label="Watch Our Story"
              >
                <span className="play-icon-bubble" aria-hidden="true">
                  <i className="fas fa-play"></i>
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Scroll Down (Left) + Floating Admissions Card (Right) */}
          <div className="new-hero-bottom-dock">
            {/* Scroll Down */}
            <div
              className="new-hero-scroll-btn"
              onClick={() => {
                const statsEl = document.getElementById("stats-ribbon");
                if (statsEl) statsEl.scrollIntoView({ behavior: "smooth" });
              }}
              role="button"
              tabIndex={0}
              aria-label="Scroll down to statistics and school story"
            >
              <span className="scroll-bar-line"></span>
              <span className="scroll-btn-label">Scroll Down</span>
            </div>

            {/* Floating Admissions Card (Exact Match to Reference Image) */}
            <div
              className="new-hero-floating-card"
              onClick={() => onOpenAdmissionModal()}
              role="button"
              tabIndex={0}
              aria-label="Admissions Open 2026-27 — Apply Now"
            >
              <img
                src="/images/student-admissions.jpg"
                alt="Horizon Academy Student"
                className="floating-card-avatar"
              />
              <div className="floating-card-info">
                <span className="floating-card-tag">Admissions Open</span>
                <span className="floating-card-year">
                  2026 – 27 <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — DEEP FOREST GREEN STATS RIBBON (ISOLATED COMPONENT)
          ========================================================================= */}
      <StatsRibbon />

      {/* =========================================================================
          SECTION 03 — OUR STORY (MATCHING REFERENCE IMAGE)
          ========================================================================= */}
      <section id="our-story" className="new-story-section-bar">
        <div className="container">
          <div className="new-story-triptych">
            {/* Left Column: Story text and CTA */}
            <div className="new-story-left-col">
              <span className="story-eyebrow-tag">— OUR STORY</span>
              <h2 className="story-main-heading">
                Education beyond<br />the classroom.
              </h2>
              <p className="story-paragraph">
                At Horizon Academy, education is not just about academic success — it's about building character, confidence and a lifelong love for learning.
              </p>
              <button
                onClick={() => onNavigate("about", "chapter-foundation")}
                className="btn-discover-our-story"
                aria-label="Discover Our Story"
              >
                <span>Discover Our Story</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Center Column: School Campus Building image */}
            <div className="new-story-center-col">
              <div className="story-image-card">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=85"
                  alt="Horizon Academy Campus Garden and Architecture"
                  className="story-campus-photo"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Quote Card with Leaf Watermark */}
            <div className="new-story-right-col">
              <div className="story-quote-card">
                <div className="quote-leaf-filigree" aria-hidden="true">
                  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 100C50 100 90 60 100 20C60 30 20 70 20 100Z" stroke="rgba(14,56,47,0.12)" strokeWidth="2.5" />
                    <path d="M20 100C60 80 80 60 100 20" stroke="rgba(14,56,47,0.08)" strokeWidth="1.8" />
                  </svg>
                </div>
                <blockquote className="story-quote-text">
                  “We believe in nurturing not just better students, but better human beings.”
                </blockquote>
                <cite className="story-quote-author">— Horizon Academy</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Story Modal */}
      {isStoryVideoOpen && (
        <div
          className="story-video-modal-backdrop"
          onClick={() => setIsStoryVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Horizon Academy Campus Story Video"
        >
          <div className="story-video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="story-video-modal-header">
              <span className="video-modal-title">Horizon Academy · Campus Life &amp; Heritage Tour</span>
              <button
                className="story-video-close-btn"
                onClick={() => setIsStoryVideoOpen(false)}
                aria-label="Close video"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="story-video-player-wrap">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&rel=0"
                title="Horizon Academy Campus Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CLASS XII TOPPER SPOTLIGHT
          ========================================================================= */}
      <section id="topper-spotlight" aria-labelledby="topperHeading">
        <div className="tps-bg" aria-hidden="true">
          <span className="tps-bg-grid"></span>
          <span className="tps-bg-blur tps-bg-blur--a"></span>
          <span className="tps-bg-blur tps-bg-blur--b"></span>
        </div>

        <div className="container tps-container">
          <div className="tps-grid">
            {/* Portrait Column (Slides in from Left) */}
            <figure className="tps-portrait reveal-left">
              <div className="tps-portrait-frame">
                <div className="tps-portrait-inner">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
                    alt="Ananya Sengupta — Delhi State CBSE Class XII Topper, Horizon Academy"
                    loading="lazy"
                  />
                  <span className="tps-portrait-grain" aria-hidden="true"></span>
                </div>

                {/* Ribbon */}
                <div className="tps-ribbon" aria-hidden="true">
                  <i className="fas fa-award"></i>
                  <span>Delhi State Topper</span>
                </div>

                {/* Floating 3D Animated Medal */}
                <div className="tps-medal" aria-hidden="true">
                  <div className="tps-medal-ring">
                    <span className="tps-medal-spark"></span>
                    <span className="tps-medal-spark tps-medal-spark--2"></span>
                  </div>
                  <div className="tps-medal-core">
                    <span className="tps-medal-percent">98.4<small>%</small></span>
                    <span className="tps-medal-label">CBSE 2025</span>
                  </div>
                </div>
              </div>
              <figcaption className="tps-signature" aria-hidden="true">— Class of 2025</figcaption>
            </figure>

            {/* Content Column (Slides in from Right) */}
            <div className="tps-content reveal-right">
              <p className="tps-eyebrow">
                <span className="tps-eyebrow-dot"></span>
                Class XII · Result 2025
              </p>

              <h2 id="topperHeading" className="tps-title">
                A moment worth{" "}
                <em>remembering.</em>
              </h2>

              <div className="tps-namecard">
                <h3 className="tps-name">Ananya Sengupta</h3>
                <div className="tps-meta">
                  <span className="tps-chip tps-chip--stream">
                    <i className="fas fa-atom"></i> Science (PCM)
                  </span>
                  <span className="tps-chip tps-chip--rank">
                    <i className="fas fa-star"></i> State Rank 1, Delhi/NCR
                  </span>
                </div>
              </div>

              <p className="tps-lede">
                Quiet mornings in the research laboratories. Late evenings of conceptual problem-solving with mentors.
                A teacher's note in the margin that nudged her just a little further. <strong>Ananya's</strong> 98.4% is the
                sum of a thousand small, unseen choices — and the proud answer to every one of them.
              </p>

              <ul className="tps-facts">
                <li>
                  <span className="tps-fact-num">98.4<small>%</small></span>
                  <span className="tps-fact-cap">Aggregate Score</span>
                </li>
                <li>
                  <span className="tps-fact-num">#1</span>
                  <span className="tps-fact-cap">Delhi · Science</span>
                </li>
                <li>
                  <span className="tps-fact-num">100<small>/100</small></span>
                  <span className="tps-fact-cap">Subject Distinction</span>
                </li>
              </ul>

              <div className="tps-quote">
                <i className="fas fa-quote-left tps-quote-mark" aria-hidden="true"></i>
                <p>Horizon Academy didn't just teach me to study — it taught me how to think, how to lead, and how to stay grounded.</p>
                <footer>Ananya Sengupta · Head Girl, 2024–25 (now at IIT Delhi)</footer>
              </div>

              <div className="tps-cta-row">
                <button onClick={() => onNavigate("academics")} className="tps-cta-primary">
                  <span>Explore Academics</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button onClick={() => onNavigate("about")} className="tps-cta-link">
                  <span>The Horizon Academy way</span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          OFFICIAL NOTICE BOARD & CAMPUS DIARY (Same as Academic Calendar)
          ========================================================================= */}
      <NoticesAndEvents
        onNavigateToArchive={() => onNavigate("circulars", "circulars-archive")}
        onNavigateToCalendar={() => onNavigate("circulars", "academic-calendar")}
      />

      {/* =========================================================================
          DESK MESSAGES (Principal & Chairman Desks)
          ========================================================================= */}
      <section id="desk-messages" className="section-desk-messages">
        <div className="container">
          <div className="center-heading reveal-up">
            <p className="section-label">From the Desk</p>
            <h2 className="section-title">Leadership & <span>Vision</span></h2>
            <p className="section-subtitle">
              Guiding thoughts from the custodians of our educational philosophy.
            </p>
          </div>

          <div className="desk-grid">
            {/* Principal Card (Slides in from Left) */}
            <div className="desk-card reveal-left">
              <div className="desk-photo-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Dr. Rajeshwari Swaminathan — Principal"
                />
                <div>
                  <span className="desk-badge">Principal's Desk</span>
                  <h4 style={{ margin: "8px 0 2px", fontFamily: "'Poppins', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#0f172a" }}>Dr. Rajeshwari Swaminathan</h4>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#e11d2e", fontWeight: 600 }}>Principal & Director of Academics</p>
                </div>
              </div>
              <div className="desk-content">
                <blockquote>
                  "Education is not merely about acquiring marks; it is about building the intellectual resilience and moral
                  character to navigate a rapidly transforming world. At Horizon Academy, we nurture each child's innate brilliance."
                </blockquote>
                <div className="desk-author-info">
                  <small>M.Sc. (Physics), M.Ed., Ph.D. · 28+ Years CBSE Leadership</small>
                </div>
              </div>
            </div>

            {/* Chairman Card (Slides in from Right) */}
            <div className="desk-card reveal-right">
              <div className="desk-photo-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Prof. H. S. Khurana — Chairman"
                />
                <div>
                  <span className="desk-badge">Chairman's Desk</span>
                  <h4 style={{ margin: "8px 0 2px", fontFamily: "'Poppins', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#0f172a" }}>Prof. H. S. Khurana</h4>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#e11d2e", fontWeight: 600 }}>Chairman & Patron, Horizon Educational Society</p>
                </div>
              </div>
              <div className="desk-content">
                <blockquote>
                  "Our vision has always been grounded in the synthesis of ancient Indian wisdom with cutting-edge global innovation.
                  When our alumni graduate into IITs, AIIMS, and civil services, they carry forth this spirit of humble leadership."
                </blockquote>
                <div className="desk-author-info">
                  <small>Former Senior Dean, Delhi University · 35+ Years in Higher Education</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE Horizon? SECTION
          ========================================================================= */}
      <section id="why-learn-section">
        <div className="container">
          <div className="why-learn-head reveal-up">
            <p className="why-learn-eyebrow">WHY CHOOSE HORIZON ACADEMY?</p>
            <h2 className="why-learn-title">Why Learn <span>With Us?</span></h2>
          </div>

          <div className="why-learn-grid">
            {/* Card 1 */}
            <div className="why-learn-card reveal-left delay-100">
              <div className="why-learn-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80"
                  alt="Holistic Education at Horizon Academy"
                  loading="lazy"
                />
              </div>
              <div className="why-learn-badge-icon" aria-hidden="true">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4>Holistic Education</h4>
            </div>

            {/* Card 2 */}
            <div className="why-learn-card reveal-left delay-200">
              <div className="why-learn-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
                  alt="Smart Classrooms at Horizon Academy"
                  loading="lazy"
                />
              </div>
              <div className="why-learn-badge-icon" aria-hidden="true">
                <i className="fas fa-desktop"></i>
              </div>
              <h4>Smart Classrooms</h4>
            </div>

            {/* Card 3 */}
            <div className="why-learn-card reveal-right delay-300">
              <div className="why-learn-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                  alt="Global Curriculum at Horizon Academy"
                  loading="lazy"
                />
              </div>
              <div className="why-learn-badge-icon" aria-hidden="true">
                <i className="fas fa-globe"></i>
              </div>
              <h4>Global Curriculum</h4>
            </div>

            {/* Card 4 */}
            <div className="why-learn-card reveal-right delay-400">
              <div className="why-learn-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
                  alt="Future Ready Skills & Robotics at Horizon Academy"
                  loading="lazy"
                />
              </div>
              <div className="why-learn-badge-icon" aria-hidden="true">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Future Ready Skills</h4>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACADEMIC STAGES (Interactive Segmented Navigator)
          ========================================================================= */}
      <section className="section-academic-journey" id="academic-journey">
        <div className="container">
          <div className="center-heading reveal-up">
            <p className="section-label">Curriculum Stages</p>
            <h2 className="section-title">The Academic <span>Pathway</span></h2>
            <p className="section-subtitle">
              Structured developmental milestones spanning play-based foundational discovery to specialized 10+2 university preparation.
            </p>
          </div>

          <div className="stage-tabs-bar reveal-up" role="tablist" aria-label="Academic stages">
            {academicStages.map((stage) => (
              <button
                key={stage.id}
                className={`stage-tab-btn ${activeStageId === stage.id ? "active" : ""}`}
                onClick={() => setActiveStageId(stage.id)}
                role="tab"
                aria-selected={activeStageId === stage.id}
              >
                <span className="stage-tab-badge">{stage.badge}</span>
                <span className="stage-tab-name">{stage.stageName}</span>
              </button>
            ))}
          </div>

          <div className="stage-display-card" key={activeStage.id}>
            <div className="stage-text-col reveal-left">
              <span className="stage-card-badge">{activeStage.badge}</span>
              <h3 className="stage-card-headline">{activeStage.headline}</h3>
              <div className="stage-focus-box">
                <div className="stage-focus-tag">
                  <i className="fas fa-compass"></i>
                  <span>PEDAGOGICAL CORE & LEARNING TRAJECTORY</span>
                </div>
                <p className="stage-card-desc">{activeStage.description}</p>
              </div>

              <ul className="stage-bullets-list">
                {activeStage.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle" style={{ color: "#e11d2e", marginRight: "8px" }}></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="stage-cta-row">
                <button
                  onClick={() => onNavigate(activeStage.targetPage, activeStage.targetSection)}
                  className="btn-primary"
                >
                  <span>{activeStage.ctaText}</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button
                  onClick={() => onOpenAdmissionModal(activeStage.stageName)}
                  className="btn-secondary"
                >
                  Apply for this Wing →
                </button>
              </div>
            </div>

            <div className="stage-image-col reveal-right">
              <div className="stage-image-wrap">
                <img
                  src={activeStage.image}
                  alt={activeStage.stageName}
                  className="stage-visual-img"
                  loading="lazy"
                />
                <span className="stage-image-pill">{activeStage.stageName} Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS FACILITIES SHOWCASE
          ========================================================================= */}
      <section className="section-campus-experience" id="campus-experience">
        <div className="container">
          <div className="section-heading-row reveal-up">
            <div>
              <p className="section-label">World-Class Campus</p>
              <h2 className="section-title">An Environment Built for <span>Excellence</span></h2>
            </div>
            <button onClick={() => onNavigate("facilities")} className="text-link-decorated">
              Explore All Facilities & Grounds →
            </button>
          </div>

          <div className="campus-editorial-grid">
            <div
              className="campus-featured-card reveal-left"
              onClick={() => onNavigate("facilities", "facilities-overview")}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85"
                alt="Atal Tinkering Lab Robotics Hub"
                className="campus-card-img"
                loading="lazy"
              />
              <div className="campus-card-scrim" />
              <div className="campus-card-details">
                <span className="campus-card-tag">NITI AAYOG STEM HUB</span>
                <h3>Atal Tinkering Lab & Robotics Studio</h3>
                <p>Equipped with 3D printers, IoT sensor kits, and automated microcontroller workstations.</p>
                <span className="campus-card-link">View Facility Details →</span>
              </div>
            </div>

            <div
              className="campus-sub-card reveal-right"
              onClick={() => onNavigate("facilities", "facilities-overview")}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85"
                alt="Senior Science Laboratories"
                className="campus-card-img"
                loading="lazy"
              />
              <div className="campus-card-scrim" />
              <div className="campus-card-details">
                <span className="campus-card-tag">10+2 PRACTICAL LABS</span>
                <h3>Senior Science Laboratories</h3>
                <p>Physics, Chemistry & Biotechnology labs for CBSE board practicals.</p>
              </div>
            </div>

            <div
              className="campus-sub-card reveal-right delay-100"
              onClick={() => onNavigate("facilities", "facilities-overview")}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85"
                alt="Central Knowledge Resource Library"
                className="campus-card-img"
                loading="lazy"
              />
              <div className="campus-card-scrim" />
              <div className="campus-card-details">
                <span className="campus-card-tag">18,000+ TITLES</span>
                <h3>Central Knowledge Library</h3>
                <p>Curated NCERT research collections, quiet reading carrels, and e-book stations.</p>
              </div>
            </div>

            <div
              className="campus-sub-card reveal-right delay-200"
              onClick={() => onNavigate("facilities", "facilities-overview")}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://images.unsplash.com/photo-1531415074868-036b1c57e359?auto=format&fit=crop&w=1200&q=85"
                alt="Sports Turf and Athletics Arena"
                className="campus-card-img"
                loading="lazy"
              />
              <div className="campus-card-scrim" />
              <div className="campus-card-details">
                <span className="campus-card-tag">MULTI-SPORT COMPLEX</span>
                <h3>Turf Ground & Athletics Arena</h3>
                <p>Cricket turf ground, 200m track, basketball courts, and certified NIS coaches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIFE AT Horizon
          ========================================================================= */}
      <section className="section-student-life" id="student-life">
        <div className="container">
          <div className="center-heading reveal-up">
            <p className="section-label">Beyond Classrooms</p>
            <h2 className="section-title">Life at <span>Horizon Academy</span></h2>
            <p className="section-subtitle">
              Education flourishes when learners are immersed in inspiring athletic arenas, creative studios, house camaraderie, and civic outreach.
            </p>
          </div>

          <div className="life-tabs-row reveal-up" role="tablist" aria-label="Student life categories">
            {lifeCategories.map((cat) => (
              <button
                key={cat.id}
                className={`life-tab-pill ${activeLifeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveLifeTab(cat.id)}
                role="tab"
                aria-selected={activeLifeTab === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="life-spotlight-card" key={activeLifeItem.id}>
            <div className="life-spotlight-visual reveal-left">
              <img
                src={activeLifeItem.image}
                alt={activeLifeItem.title}
                className="life-img"
                loading="lazy"
              />
              <span className="life-badge">{activeLifeItem.badge}</span>
            </div>

            <div className="life-spotlight-info reveal-right">
              <p className="section-label">Co-Curricular Excellence</p>
              <h3 className="life-title">{activeLifeItem.title}</h3>
              <p className="life-desc">{activeLifeItem.desc}</p>
              <div className="life-actions">
                <button onClick={() => onNavigate("facilities", "co-curricular-clubs")} className="btn-primary">
                  <i className="fas fa-users"></i>
                  <span>Explore Societies & Clubs</span>
                </button>
                <button onClick={() => onNavigate("gallery", "gallery-grid")} className="btn-secondary">
                  View Photo Gallery →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          TESTIMONIALS (Quotes)
          ========================================================================= */}
      <section className="section-testimonials" id="testimonials">
        <div className="container">
          <div className="center-heading reveal-up">
            <p className="section-label">Voices of Trust</p>
            <h2 className="section-title">The Horizon <span>Experience</span></h2>
            <p className="section-subtitle">
              Reflections from parents, scholars, and alumni who have experienced our commitment firsthand.
            </p>
          </div>

          <div className="testimonial-card-frame reveal-up">
            <div className="quote-mark-icon">“</div>
            <blockquote className="testimonial-quote-text">
              {testimonials[activeTestimonial].quote}
            </blockquote>

            <div className="testimonial-author-row">
              <div className="author-meta">
                <strong className="author-name">{testimonials[activeTestimonial].author}</strong>
                <span className="author-relation">{testimonials[activeTestimonial].relation}</span>
                <span className="author-badge">{testimonials[activeTestimonial].badge}</span>
              </div>

              <div className="testimonial-nav-arrows">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  }
                  className="t-nav-btn"
                  aria-label="Previous testimonial"
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
                <span className="t-counter">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  }
                  className="t-nav-btn"
                  aria-label="Next testimonial"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="section-faqs container" id="faq">
        <div className="center-heading reveal-up">
          <p className="section-label">Help & Clarifications</p>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <p className="section-subtitle">
            Clear, detailed answers regarding admissions, 10+2 stream allocations, campus safety, and CBSE compliances.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="faq-filter-chips reveal-up" role="tablist" aria-label="FAQ Categories">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              className={`faq-chip-btn ${activeFaqCategory === cat.id ? "active" : ""}`}
              onClick={() => {
                setActiveFaqCategory(cat.id);
                setOpenFaqIndex(0);
              }}
              role="tab"
              aria-selected={activeFaqCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="faq-accordion-wrap reveal-up">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div className={`faq-card ${isOpen ? "is-open" : ""}`} key={idx}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-left">
                    <span className="faq-q-badge">Q{idx + 1}</span>
                    <div className="faq-q-meta">
                      <span className="faq-q-category-tag">{faq.category}</span>
                      <span className="faq-q-text">{faq.q}</span>
                    </div>
                  </div>
                  <div className="faq-toggle-btn" aria-hidden="true">
                    <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-answer-pane animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Help Support Box */}
        <div className="faq-help-box reveal-up">
          <div className="faq-help-info">
            <div className="faq-help-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div>
              <h4>Have more questions or specific admission queries?</h4>
              <p>Our dedicated admissions desk and academic counselors are available Mon–Sat (8:30 AM – 3:30 PM).</p>
            </div>
          </div>
          <div className="faq-help-actions">
            <button onClick={() => onOpenAdmissionModal()} className="btn-primary">
              <i className="fas fa-envelope-open-text"></i>
              <span>Inquire Online</span>
            </button>
            <a href="tel:+911128904455" className="btn-secondary">
              <i className="fas fa-phone-alt"></i>
              <span>Call Admissions</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSIONS CONVERSION BANNER
          ========================================================================= */}
      <section className="section-admissions-cta container" id="admissions-cta">
        <div className="adm-conversion-banner">
          <div className="adm-conversion-copy reveal-left">
            <span className="adm-live-badge">
              <span className="badge-pulse-dot"></span> ADMISSIONS OPEN · SESSION 2026–27
            </span>
            <h2 className="adm-conversion-title">Your Child's Journey Begins Here.</h2>
            <p className="adm-conversion-desc">
              Applications are invited for Pre-Primary, Class I, Class IX, and Class XI (Science, Commerce & Humanities).
              Book a campus tour with our admission counselors or begin your online application now.
            </p>
            <div className="adm-conversion-actions">
              <button onClick={() => onOpenAdmissionModal()} className="btn-primary large">
                <i className="fas fa-pen-nib"></i>
                <span>Start Online Application (2026–27)</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button onClick={() => onNavigate("contact", "tour-booking")} className="btn-secondary large">
                <i className="fas fa-calendar-alt"></i>
                <span>Schedule a Campus Walkthrough</span>
              </button>
              <a href="tel:+911128904455" className="btn-secondary large">
                <i className="fas fa-phone-alt"></i>
                <span>Call: +91 11 2890 4455</span>
              </a>
            </div>
          </div>

          <div className="adm-conversion-facts reveal-right">
            <div className="fact-item">
              <span className="f-lbl">Affiliation</span>
              <strong className="f-val">CBSE 10+2 All Streams</strong>
            </div>
            <div className="fact-item">
              <span className="f-lbl">Session</span>
              <strong className="f-val">2026–2027</strong>
            </div>
            <div className="fact-item">
              <span className="f-lbl">Campus</span>
              <strong className="f-val">10-Acre Enclave (New Delhi)</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

