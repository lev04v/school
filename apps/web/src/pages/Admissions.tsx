import { useState } from "react";
import { PageId } from "../components/Header";
import { PageHero } from "../components/PageHero";

interface AdmissionsPageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Admissions({ onNavigate, onOpenAdmissionModal }: AdmissionsPageProps) {
  const [tcQuery, setTcQuery] = useState("");
  const [tcResult, setTcResult] = useState<null | { found: boolean; name?: string; class?: string; tcNo?: string; issueDate?: string }>(null);

  const handleTcSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tcQuery.trim()) return;

    // Simulated TC database verification
    if (tcQuery.trim().toUpperCase() === "HA/2025/1042" || tcQuery.trim() === "1042") {
      setTcResult({
        found: true,
        name: "Aarav Sharma",
        class: "Class X (AISSE Passed)",
        tcNo: "HA/2025/1042",
        issueDate: "30-June-2025",
      });
    } else {
      setTcResult({ found: false });
    }
  };

  const steps = [
    {
      num: "01",
      kicker: "STEP 1 · FORMS & TIMELINE",
      title: "Admission Process",
      desc: "Application forms are available at the school office and on the official website. Parents must submit the completed form with the required documents within the given timeline.",
      badge: "Online & Office Available",
      icon: "📋",
    },
    {
      num: "02",
      kicker: "STEP 2 · MERIT & INTERACTION",
      title: "Interaction & Merit Selection",
      desc: "Admission is based on interaction with the child and parents, followed by eligibility criteria set by the school. Our process is simple, transparent, and merit-based to ensure equal opportunities for every child.",
      badge: "Equal Opportunities",
      icon: "🤝",
    },
    {
      num: "03",
      kicker: "STEP 3 · ENTRY NORMS",
      title: "Eligibility",
      desc: "Pre-Primary (Nursery & KG): Minimum age as per government norms.\n\nPrimary & Secondary: Admission depends on previous academic performance and availability of seats.",
      badge: "Govt. & Academic Criteria",
      icon: "🎯",
      isList: true,
      items: [
        "Pre-Primary (Nursery & KG): Minimum age as per government norms.",
        "Primary & Secondary: Admission depends on previous academic performance and availability of seats.",
      ],
    },
    {
      num: "04",
      kicker: "STEP 4 · VERIFICATION",
      title: "Documents Required",
      desc: "Mandatory documents required during submission for verification and enrollment.",
      badge: "Checklist Required",
      icon: "📁",
      isList: true,
      items: [
        "Birth Certificate of the child",
        "Previous school’s Transfer Certificate (if applicable)",
        "Report Card of the last class attended",
        "Passport-size photographs of the student and parents",
        "Address proof and ID proof of parents",
      ],
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Admissions"
        onNavigate={onNavigate}
        kicker="ACADEMIC SESSION 2026–27 · ENROLMENT DESK"
        title={<>Admission Information & <span className="text-shimmer">Enrollment Process</span></>}
        subtitle="At Horizon Academy, we believe in nurturing young minds and shaping future leaders. Our admission process is simple, transparent, and merit-based to ensure equal opportunities for every child."
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Admission Counseling and Student Interaction"
      />

      {/* Main Admission Information Section with 4 Cards */}
      <section id="admission-steps" className="section-adm-steps container">
        {/* Alias anchor so any deep link for fee-structure lands gracefully here */}
        <div id="fee-structure" style={{ scrollMarginTop: "110px" }} />

        <div className="center-heading">
          <span className="section-eyebrow">SIMPLE · TRANSPARENT · MERIT-BASED</span>
          <h2 className="section-title">Admission Information (2026–27)</h2>
          <p className="section-subtitle max-w-750">
            At Horizon Academy, we believe in nurturing young minds and shaping future leaders.
            Our admission process is simple, transparent, and merit-based to ensure equal opportunities for every child.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="adm-steps-grid">
          {steps.map((step, idx) => (
            <div className="adm-step-card" key={idx}>
              <div className="adm-card-top-bar">
                <span className="adm-step-number">{step.num}</span>
                <span className="adm-card-icon">{step.icon}</span>
              </div>
              <span className="adm-card-kicker">{step.kicker}</span>
              <h3 className="adm-step-title">{step.title}</h3>
              
              {!step.isList ? (
                <p className="adm-step-desc">{step.desc}</p>
              ) : (
                <ul className="adm-step-list">
                  {step.items?.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="adm-card-badge-row">
                <span className="adm-card-badge">{step.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="adm-quick-cta-row">
          <button onClick={() => onOpenAdmissionModal()} className="btn-hero-primary">
            <span>Start Online Application (2026-27)</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <a href="tel:+911128904455" className="btn-call-desk">
            <span className="call-icon">📞</span>
            <span>Call Admissions Desk: +91 11 2890 4455</span>
          </a>
        </div>
      </section>

      {/* Contact for Admissions Section */}
      <section id="admission-contact" className="section-adm-contact container">
        <div className="adm-contact-banner">
          <div className="adm-contact-header">
            <span className="section-eyebrow eyebrow-light">REACH OUT TO US</span>
            <h2 className="adm-contact-title">Contact for Admissions</h2>
            <p className="adm-contact-desc">
              For queries regarding admissions, please contact the school office during working hours or reach us at:
            </p>
          </div>

          <div className="adm-contact-grid">
            <div className="contact-info-card">
              <span className="contact-card-icon">📞</span>
              <h4>Telephone & Helplines</h4>
              <p>Direct lines for admission counselors</p>
              <a href="tel:+911128904455" className="contact-highlight-link">+91 11 2890 4455</a>
              <a href="tel:+919810233445" className="contact-highlight-link">+91 98102 33445</a>
            </div>

            <div className="contact-info-card">
              <span className="contact-card-icon">✉️</span>
              <h4>Admissions Email</h4>
              <p>Send queries & scanned application inquiries</p>
              <a href="mailto:admissions@horizonacademy.edu.in" className="contact-highlight-link">
                admissions@horizonacademy.edu.in
              </a>
              <span className="text-muted-xs">Responses within 24 business hours</span>
            </div>

            <div className="contact-info-card">
              <span className="contact-card-icon">🕒</span>
              <h4>Office Working Hours</h4>
              <p>Visiting hours for parents & students</p>
              <strong className="contact-text-emphasis">Monday – Saturday: 08:30 AM – 03:30 PM</strong>
              <span className="text-muted-xs">(Closed on Sundays & Gazetted Holidays)</span>
            </div>

            <div className="contact-info-card">
              <span className="contact-card-icon">📍</span>
              <h4>School Admission Office</h4>
              <p>Administrative Block, Ground Floor</p>
              <address className="contact-address-text">
                Horizon Academy Campus, Sector 14, Institutional Area, New Delhi / NCR – 110075
              </address>
            </div>
          </div>

          <div className="adm-contact-actions">
            <button onClick={() => onOpenAdmissionModal()} className="btn-cta-gold">
              Apply Online Now (2026-27) →
            </button>
            <button onClick={() => onNavigate("contact", "tour-booking")} className="btn-call-desk">
              <span>📅</span>
              <span>Schedule Campus Visit & Counseling →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Online Transfer Certificate (TC) Verification Portal */}
      <section id="tc-verification" className="section-tc-verification container">
        <div className="tc-card">
          <div className="tc-header">
            <span className="section-eyebrow eyebrow-light">ONLINE VERIFICATION PORTAL</span>
            <h3 className="tc-title">Transfer Certificate (TC) Verification</h3>
            <p className="tc-sub">
              As per CBSE mandates, parents and higher institutions can verify the authenticity
              of school leaving / transfer certificates issued by Horizon Academy.
            </p>
          </div>

          <form onSubmit={handleTcSearch} className="tc-form">
            <div className="tc-input-wrap">
              <input
                type="text"
                placeholder="Enter Admission No. or TC Number (e.g. 71204/25 or HA-2025-01)"
                value={tcQuery}
                onChange={(e) => setTcQuery(e.target.value)}
              />
              <button type="submit" className="btn-tc-search">
                Verify Certificate
              </button>
            </div>
          </form>

          {tcResult && (
            <div className="tc-result-box animate-fade-in">
              <div className="tc-result-header">
                <span className="tc-status-verified">✓ AUTHENTIC CBSE TC RECORD</span>
                <span className="tc-ref-pill">{tcResult.tcNo}</span>
              </div>
              <div className="tc-meta-grid">
                <div>
                  <small>Student Name:</small>
                  <strong>{tcResult.name}</strong>
                </div>
                <div>
                  <small>Last Class Studied:</small>
                  <strong>{tcResult.class}</strong>
                </div>
                <div>
                  <small>Date of Issue:</small>
                  <strong>{tcResult.issueDate}</strong>
                </div>
                <div>
                  <small>School Code:</small>
                  <strong>71204 (Horizon Academy)</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
