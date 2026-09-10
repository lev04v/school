import React, { useState } from "react";
import { PageId } from "../components/Header";
import { PageHero } from "../components/PageHero";

interface AdmissionsPageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Admissions({ onNavigate, onOpenAdmissionModal }: AdmissionsPageProps) {
  const [tcQuery, setTcQuery] = useState("");
  const [tcResult, setTcResult] = useState<null | {
    found: boolean;
    name?: string;
    class?: string;
    tcNo?: string;
    issueDate?: string;
    parentName?: string;
    admissionNo?: string;
  }>(null);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleTcSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tcQuery.trim()) return;

    const queryClean = tcQuery.trim().toUpperCase();
    if (
      queryClean === "VA/2025/1042" ||
      queryClean === "HA/2025/1042" ||
      queryClean === "1042" ||
      queryClean === "71204/25"
    ) {
      setTcResult({
        found: true,
        name: "Aarav Sharma",
        parentName: "Mr. Rajesh Sharma",
        admissionNo: "ADM-2022-8419",
        class: "Class X (AISSE Passed — First Division)",
        tcNo: "VA/2025/1042",
        issueDate: "30-June-2025",
      });
    } else {
      setTcResult({ found: false });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const wingsData = [
    {
      id: "pre-primary",
      stage: "Pre-Primary Wing",
      grades: "Nursery, LKG & UKG",
      icon: "fas fa-shapes",
      ageCriteria: "Minimum 3+ Years for Nursery as on 31st March (NEP 2020 Compliant)",
      selectionBasis: "Informal, cheerful child & parent interactive session gauging developmental curiosity and verbal expression.",
      features: ["Play-way Phonics & Sensory Labs", "No Heavy School Bags", "Montessori Manipulation Kits"],
      streamKey: "Pre-Primary (Nursery - UKG)",
    },
    {
      id: "primary",
      stage: "Primary Wing",
      grades: "Classes I to V",
      icon: "fas fa-book-reader",
      ageCriteria: "Completion of previous class from recognized CBSE/ICSE or equivalent recognized board.",
      selectionBasis: "Age-appropriate diagnostic assessment of foundational literacy (FLN), reading comprehension, and basic numeracy.",
      features: ["Bilingual Fluency (English & Hindi)", "Introductory Coding & Computer Labs", "Creative Arts & Yoga"],
      streamKey: "Primary Wing (Class I-V)",
    },
    {
      id: "middle",
      stage: "Middle School Wing",
      grades: "Classes VI to VIII",
      icon: "fas fa-microscope",
      ageCriteria: "Annual report card of previous grade reflecting consistent passing grades and satisfactory conduct certificate.",
      selectionBasis: "Written conceptual readiness evaluation in English language, Mathematics, and General Science.",
      features: ["Departmental Science Laboratories", "Third Language (Sanskrit / French)", "NITI Aayog ATL Robotics"],
      streamKey: "Middle Wing (Class VI-VIII)",
    },
    {
      id: "secondary",
      stage: "Secondary School (AISSE)",
      grades: "Classes IX & X",
      icon: "fas fa-graduation-cap",
      ageCriteria: "Successful completion of Class VIII with minimum 65% aggregate score in core academic subjects.",
      selectionBasis: "Merit-based admission assessment in Science, Mathematics, and English Language followed by counselor interaction.",
      features: ["100% Board First-Division Pass Rate", "Triple Pre-Board Simulation Series", "Olympiad & NTSE Mentorship"],
      streamKey: "Secondary Wing (Class IX-X)",
    },
    {
      id: "senior-secondary",
      stage: "Senior Secondary (10+2)",
      grades: "Classes XI & XII (Science, Commerce, Arts)",
      icon: "fas fa-user-graduate",
      ageCriteria: "Class X Board Examination results (CBSE AISSE / ICSE / State Board). Stream-specific cutoff criteria apply.",
      selectionBasis: "Verified Class 10 score-sheet evaluation followed by specialized career profiling and stream selection interview.",
      features: ["Synchronized IIT-JEE & NEET Coaching", "SRCC & DU Top-Tier CUET Mentorship", "Chartered Accountancy & CLAT Prep"],
      streamKey: "Senior Secondary (10+2)",
    },
  ];

  const docCategories = [
    {
      icon: "fas fa-id-card",
      title: "Identity & Age Verification",
      subtitle: "Required for all new applicants",
      items: [
        "Original Birth Certificate issued by Municipal Corporation (for Pre-Primary & Class I)",
        "Photocopy of Aadhaar Card of the Student and both Parents / Guardians",
        "Valid Residential Address Proof (Electricity Bill / Voter ID / Passport / Registered Rent Deed)",
      ],
    },
    {
      icon: "fas fa-file-alt",
      title: "Academic & Transfer Records",
      subtitle: "Mandatory for Class II and above",
      items: [
        "Original Countersigned Transfer Certificate (TC) from the previous recognized institution",
        "Attested copies of the previous academic year's Annual Progress Report Card",
        "Migration Certificate & Class X Board Marksheet (mandatory for Class XI admissions)",
      ],
    },
    {
      icon: "fas fa-camera-retro",
      title: "Photographs & Medical Fitness",
      subtitle: "Preserved in official school dossier",
      items: [
        "Six recent passport-size color photographs of the student in white background",
        "Two passport-size color photographs of each parent / designated guardian",
        "Medical Fitness Certificate & Immunization Card signed by a registered MBBS physician",
      ],
    },
  ];

  const importantDates = [
    {
      event: "Academic Session Registration Commences",
      date: "01 October 2026",
      status: "Active Now",
      statusType: "active",
      desc: "Online registration open across all wings for Session 2026–27.",
    },
    {
      event: "Campus Walkthroughs & Counseling Slots",
      date: "Daily (Monday to Saturday)",
      status: "Ongoing",
      statusType: "ongoing",
      desc: "Personalized interaction sessions with senior academic coordinators.",
    },
    {
      event: "Class IX & XI Diagnostic Interactions",
      date: "Rolling Batches Every Saturday",
      status: "Slots Open",
      statusType: "active",
      desc: "Diagnostic assessments for secondary and senior secondary streams.",
    },
    {
      event: "Merit List Publication & Fee Settlement",
      date: "Within 5 Working Days of Interaction",
      status: "Upcoming",
      statusType: "upcoming",
      desc: "Provisional seat allocation and fee processing window.",
    },
    {
      event: "Orientation & Academic Session Induction",
      date: "First Week of April 2027",
      status: "Scheduled",
      statusType: "scheduled",
      desc: "Welcome induction ceremony for students and parents.",
    },
  ];

  const scholarships = [
    {
      icon: "fas fa-medal",
      title: "Academic Super-Achievers",
      tag: "Up to 100% Tuition Waiver",
      desc: "For students securing 95%+ aggregate in Class X Board exams seeking Class XI Science or Commerce admissions.",
    },
    {
      icon: "fas fa-female",
      title: "Beti Padhao — Girl Child Initiative",
      tag: "25% Fee Concession",
      desc: "Dedicated special fee discount aimed at encouraging girl students in STEM and commerce streams.",
    },
    {
      icon: "fas fa-users",
      title: "Sibling Concession",
      tag: "20% Tuition Discount",
      desc: "Granted to the younger sibling when both real brothers/sisters are actively enrolled at Horizon Academy.",
    },
    {
      icon: "fas fa-trophy",
      title: "Sports & National Talent Laureates",
      tag: "Merit Scholarship",
      desc: "Special scholarships for state and national medalists in athletics, chess, badminton, and SOF Olympiads.",
    },
  ];

  const faqs = [
    {
      q: "What is the age requirement for Nursery admission for Session 2026–27?",
      a: "In compliance with the National Education Policy (NEP 2020) and Directorate of Education norms, the child must be a minimum of 3 years of age as of 31st March 2026 for Nursery admission.",
    },
    {
      q: "How are stream choices allocated for Class XI (10+2)?",
      a: "Stream allocation in Science (PCM/PCB), Commerce, and Humanities is determined based on Class X Board examination scores, our diagnostic aptitude interaction, and the student's personal career aspirations. Minimum cutoffs apply for Science and Commerce.",
    },
    {
      q: "Does the school provide air-conditioned transportation across Delhi/NCR?",
      a: "Yes. Horizon Academy operates a fleet of modern, air-conditioned buses equipped with GPS live tracking, speed governors, CCTV cameras, and certified female attendants covering 40+ designated routes across Delhi and NCR.",
    },
    {
      q: "Is there any entrance test for admission to Primary classes (I to V)?",
      a: "No formal high-stress entrance test is conducted. For Primary grades, we conduct an informal, welcoming diagnostic interaction to assess the child’s reading fluency, foundational numeracy, and comfort level.",
    },
    {
      q: "What is the policy regarding Transfer Certificate (TC) from other states/boards?",
      a: "Students transferring from other recognized CBSE, ICSE, or State Board schools must submit an original TC countersigned by the competent Education Officer/Board Inspector of the relevant district.",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Page Hero Banner */}
      <PageHero
        breadcrumbCurrent="Admissions"
        onNavigate={onNavigate}
        kicker="Admissions 2026–27 · Open Now"
        title={<>Begin your child's <em>journey here.</em></>}
        subtitle="At Horizon Academy, our admission process is transparent, child-centric, and merit-based — ensuring every learner is welcomed into an inspiring, world-class academic ecosystem."
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Admission Counseling and Student Interaction"
        primaryCtaLabel="Apply Online 2026–27"
        onPrimaryCtaClick={() => onOpenAdmissionModal()}
      />

      {/* Trust & Guarantee Ribbon */}
      <section className="adm-trust-ribbon">
        <div className="container">
          <div className="adm-trust-grid">
            <div className="adm-trust-item reveal-left">
              <div className="adm-trust-icon"><i className="fas fa-university" /></div>
              <div>
                <strong>CBSE Affiliated 10+2</strong>
                <span>Nursery to Senior Secondary</span>
              </div>
            </div>
            <div className="adm-trust-item reveal-left delay-100">
              <div className="adm-trust-icon"><i className="fas fa-hand-holding-usd" /></div>
              <div>
                <strong>Transparent Fee Policy</strong>
                <span>Zero Donation &amp; Zero Hidden Fees</span>
              </div>
            </div>
            <div className="adm-trust-item reveal-right delay-200">
              <div className="adm-trust-icon"><i className="fas fa-award" /></div>
              <div>
                <strong>Merit Scholarships</strong>
                <span>Up to 100% Tuition Waivers</span>
              </div>
            </div>
            <div className="adm-trust-item reveal-right delay-300">
              <div className="adm-trust-icon"><i className="fas fa-bus-alt" /></div>
              <div>
                <strong>Safe AC GPS Transport</strong>
                <span>40+ Verified NCR Routes</span>
              </div>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="adm-quick-cta-row reveal-up" style={{ marginTop: 24 }}>
            <button
              type="button"
              onClick={() => onOpenAdmissionModal()}
              className="btn-adm-primary-cta"
            >
              <i className="fas fa-pen-nib" />
              <span>Start Online Application (Session 2026–27)</span>
            </button>
            <a href="tel:+911128904455" className="btn-adm-call-desk">
              <i className="fas fa-phone-alt" />
              <span>Admissions Helpline: +91 11 2890 4455</span>
            </a>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Cards */}
      <section className="section-eligibility" id="eligibility">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">ENTRY NORMS</span>
            <h2 className="section-title">Eligibility Criteria by <span>School Wing</span></h2>
            <p className="section-subtitle">
              Fully compliant with NEP 2020 national norms and CBSE Senior Secondary standards.
            </p>
          </div>

          <div className="eligibility-cards-grid">
            {wingsData.map((wing, idx) => (
              <article
                className={`wing-eligibility-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                key={wing.id}
              >
                <div className="wing-card-header">
                  <div className="wing-icon-circle">
                    <i className={wing.icon} />
                  </div>
                  <div>
                    <span className="wing-grades-badge">{wing.grades}</span>
                    <h3 className="wing-title">{wing.stage}</h3>
                  </div>
                </div>

                <div className="wing-card-body">
                  <div className="wing-info-block">
                    <div className="wing-info-label">
                      <i className="fas fa-calendar-alt" />
                      <span>Age &amp; Prior Qualification</span>
                    </div>
                    <p className="wing-info-text">{wing.ageCriteria}</p>
                  </div>

                  <div className="wing-info-block">
                    <div className="wing-info-label">
                      <i className="fas fa-clipboard-check" />
                      <span>Admission &amp; Evaluation Basis</span>
                    </div>
                    <p className="wing-info-text">{wing.selectionBasis}</p>
                  </div>

                  <div className="wing-features-row">
                    {wing.features.map((feat, i) => (
                      <span className="wing-feat-pill" key={i}>
                        <i className="fas fa-check" /> {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="wing-card-footer">
                  <button
                    type="button"
                    onClick={() => onOpenAdmissionModal(wing.streamKey)}
                    className="btn-wing-apply"
                  >
                    Apply for {wing.stage} <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Cards & Important Dates Timeline */}
      <section className="section-docs-dates" id="documents">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">MANDATORY DOCUMENTATION &amp; TIMELINES</span>
            <h2 className="section-title">Verification Checklist &amp; <span>Important Dates</span></h2>
            <p className="section-subtitle">
              Prepare your application folder in advance to ensure hassle-free, expedited verification.
            </p>
          </div>

          <div className="docs-dates-split-grid">
            {/* Left Column: Categorized Documents Cards */}
            <div className="docs-column reveal-left">
              <h3 className="column-heading">
                <i className="fas fa-file-invoice" /> Mandatory Enrollment Documents
              </h3>
              <p className="column-subtext">
                Please bring self-attested photocopies along with original documents for in-person administrative verification.
              </p>

              <div className="docs-categories-stack">
                {docCategories.map((cat, idx) => (
                  <div className="doc-category-card" key={idx}>
                    <div className="doc-cat-head">
                      <div className="doc-cat-icon">
                        <i className={cat.icon} />
                      </div>
                      <div>
                        <h4 className="doc-cat-title">{cat.title}</h4>
                        <span className="doc-cat-sub">{cat.subtitle}</span>
                      </div>
                    </div>
                    <ul className="doc-cat-list">
                      {cat.items.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Important Dates Interactive Timeline */}
            <div className="dates-column reveal-right">
              <h3 className="column-heading">
                <i className="fas fa-calendar-check" /> Admission Timelines (Session 2026–27)
              </h3>
              <p className="column-subtext">
                Admissions are strictly processed on a rolling merit basis while designated seat capacity remains available.
              </p>

              <div className="dates-timeline-card">
                {importantDates.map((item, idx) => (
                  <div className="timeline-event-item" key={idx}>
                    <div className="timeline-marker">
                      <div className="timeline-step-orb">
                        <span className="timeline-step-number">{idx + 1}</span>
                        <div className="timeline-orb-pulse" />
                      </div>
                      {idx !== importantDates.length - 1 && (
                        <div className="timeline-conduit-stem">
                          <span className="timeline-conduit-glow" />
                        </div>
                      )}
                    </div>
                    <div className="timeline-event-content">
                      <div className="event-head-row">
                        <time className="event-date-text">
                          <i className="fas fa-clock" /> {item.date}
                        </time>
                        <span className={`event-status-pill status--${item.statusType}`}>
                          {item.status}
                        </span>
                      </div>
                      <h4 className="event-name">{item.event}</h4>
                      <p className="event-desc-text">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="dates-card-footer">
                  <button
                    type="button"
                    onClick={() => onOpenAdmissionModal()}
                    className="btn-dates-apply"
                  >
                    <i className="fas fa-user-plus" /> Reserve Seat in Ongoing Batch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Fee & Scholarship Highlights */}
      <section className="section-scholarships">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">EQUITY &amp; MERIT CONCESSIONS</span>
            <h2 className="section-title">Merit Scholarships &amp; <span>Fee Concessions</span></h2>
            <p className="section-subtitle">
              We believe financial constraints should never hinder high-achieving talent from accessing premier education.
            </p>
          </div>

          <div className="scholarships-grid">
            {scholarships.map((sch, idx) => (
              <article
                className={`scholarship-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                key={idx}
              >
                <div className="sch-icon-wrap">
                  <i className={sch.icon} />
                </div>
                <span className="sch-tag-badge">{sch.tag}</span>
                <h3 className="sch-title">{sch.title}</h3>
                <p className="sch-desc">{sch.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Online Transfer Certificate (TC) Verification Portal */}
      <section id="tc-verification" className="section-tc-verification">
        <div className="container">
          <div className="tc-card reveal-up">
            <div className="tc-header">
              <span className="section-eyebrow eyebrow-light">OFFICIAL CBSE VERIFICATION TERMINAL</span>
              <h3 className="tc-title">Online Transfer Certificate (TC) Verification</h3>
              <p className="tc-sub">
                In strict compliance with CBSE mandates, parents, employers, and higher academic institutions can verify the authenticity
                of school leaving and transfer certificates issued by Horizon Academy.
              </p>
            </div>

            <form onSubmit={handleTcSearch} className="tc-form">
              <div className="tc-input-wrap">
                <i className="fas fa-search tc-search-icon" />
                <input
                  type="text"
                  placeholder="Enter Admission No. or TC Number (e.g. VA/2025/1042 or 1042)"
                  value={tcQuery}
                  onChange={(e) => setTcQuery(e.target.value)}
                  aria-label="TC or Admission Number"
                />
                <button type="submit" className="btn-tc-search">
                  <i className="fas fa-shield-alt" /> Verify Certificate
                </button>
              </div>

              {/* Sample Quick Fill Buttons */}
              <div className="tc-samples-row">
                <span>Try Sample TC:</span>
                <button
                  type="button"
                  className="btn-tc-chip"
                  onClick={() => setTcQuery("VA/2025/1042")}
                >
                  VA/2025/1042 (Class X Passed)
                </button>
                <button
                  type="button"
                  className="btn-tc-chip"
                  onClick={() => setTcQuery("71204/25")}
                >
                  71204/25
                </button>
              </div>
            </form>

            {tcResult && (
              <div className="tc-result-box animate-fade-in">
                {tcResult.found ? (
                  <div className="tc-verified-card">
                    <div className="tc-result-header">
                      <div className="tc-status-verified">
                        <i className="fas fa-check-circle" /> OFFICIAL CBSE TC RECORD VERIFIED
                      </div>
                      <span className="tc-ref-pill">{tcResult.tcNo}</span>
                    </div>

                    <div className="tc-meta-grid">
                      <div className="tc-meta-item">
                        <small>Student Full Name:</small>
                        <strong>{tcResult.name}</strong>
                      </div>
                      <div className="tc-meta-item">
                        <small>Father's / Guardian's Name:</small>
                        <strong>{tcResult.parentName}</strong>
                      </div>
                      <div className="tc-meta-item">
                        <small>Admission / Roll Number:</small>
                        <strong>{tcResult.admissionNo}</strong>
                      </div>
                      <div className="tc-meta-item">
                        <small>Last Class &amp; Status:</small>
                        <strong>{tcResult.class}</strong>
                      </div>
                      <div className="tc-meta-item">
                        <small>Date of Certificate Issue:</small>
                        <strong>{tcResult.issueDate}</strong>
                      </div>
                      <div className="tc-meta-item">
                        <small>School Board &amp; Code:</small>
                        <strong>CBSE Affiliation No. 2130098 · School Code 71204</strong>
                      </div>
                    </div>

                    <div className="tc-seal-badge">
                      <i className="fas fa-stamp" />
                      <span>Digitally Authenticated by Controller of Examinations, Horizon Academy</span>
                    </div>
                  </div>
                ) : (
                  <div className="tc-not-found">
                    <i className="fas fa-exclamation-triangle" />
                    <div>
                      <strong>No matching certificate found for query "{tcQuery}"</strong>
                      <p>
                        Please verify the TC number entered or contact our CBSE administrative cell directly at +91 11 2890 4458.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="section-adm-faq">
        <div className="container">
          <div className="center-heading reveal-up">
            <span className="section-eyebrow">PARENT GUIDANCE</span>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
            <p className="section-subtitle">
              Clear answers to the most common questions regarding our admission rules, stream cutoffs, and transport.
            </p>
          </div>

          <div className="faq-accordion-wrap reveal-up">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-accordion-item ${activeFaq === idx ? "active" : ""}`}
                key={idx}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span className="faq-q-text">
                    <span className="faq-q-number">Q{idx + 1}.</span> {faq.q}
                  </span>
                  <span className="faq-toggle-icon">
                    <i className={`fas fa-chevron-${activeFaq === idx ? "up" : "down"}`} />
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer-pane animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Admissions Helpdesk Hub */}
      <section id="admission-contact" className="section-adm-contact">
        <div className="container">
          <div className="adm-contact-banner reveal-up">
            <div className="adm-contact-header">
              <span className="section-eyebrow eyebrow-light">DIRECT ADMISSION DESK</span>
              <h2 className="adm-contact-title">Contact Our Admission Counselors</h2>
              <p className="adm-contact-desc">
                Have specific queries regarding stream cutoffs, fee installments, or transport pick-up points?
                Our experienced counselors are here to guide you Monday through Saturday.
              </p>
            </div>

            <div className="adm-contact-grid">
              <div className="contact-info-card reveal-left">
                <div className="contact-card-icon-box">
                  <i className="fas fa-phone-alt" />
                </div>
                <h4>Telephone &amp; Helplines</h4>
                <p>Dedicated counselor desk</p>
                <a href="tel:+911128904455" className="contact-highlight-link">+91 11 2890 4455</a>
                <a href="tel:+919810233445" className="contact-highlight-link">+91 98102 33445</a>
              </div>

              <div className="contact-info-card reveal-right">
                <div className="contact-card-icon-box">
                  <i className="fas fa-envelope-open-text" />
                </div>
                <h4>Admissions Email Desk</h4>
                <p>Submit inquiries &amp; documents</p>
                <a href="mailto:admissions@Horizonacademy.edu.in" className="contact-highlight-link">
                  admissions@Horizonacademy.edu.in
                </a>
                <span className="text-muted-xs">Responses within 24 business hours</span>
              </div>

              <div className="contact-info-card reveal-left">
                <div className="contact-card-icon-box">
                  <i className="fas fa-clock" />
                </div>
                <h4>Office Working Hours</h4>
                <p>Counseling &amp; walk-in visits</p>
                <strong className="contact-text-emphasis">Mon – Sat: 08:30 AM – 03:30 PM</strong>
                <span className="text-muted-xs">(Closed on Sundays &amp; Gazetted Holidays)</span>
              </div>

              <div className="contact-info-card reveal-right">
                <div className="contact-card-icon-box">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h4>Administrative Block</h4>
                <p>Ground Floor, Admissions Office</p>
                <address className="contact-address-text">
                  Horizon Academy Campus, Sector 14, Institutional Area, New Delhi / NCR – 110075
                </address>
              </div>
            </div>

            <div className="adm-contact-actions">
              <button
                type="button"
                onClick={() => onOpenAdmissionModal()}
                className="btn-cta-gold"
              >
                <i className="fas fa-pen-nib" /> Apply Online Now (2026–27)
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact", "tour-booking")}
                className="btn-call-desk"
              >
                <i className="fas fa-calendar-check" /> Schedule In-Person Campus Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
