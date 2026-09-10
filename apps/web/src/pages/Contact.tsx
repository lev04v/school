import { useState } from "react";
import { PageId } from "../components/Header";
import { PageHero } from "../components/PageHero";

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export default function Contact({ onNavigate }: ContactPageProps) {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "Admissions Desk",
    visitDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
    }, 600);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const quickHotlines = [
    {
      title: "Admissions Helpline",
      subtitle: "Nursery to Grade XII (2026–27)",
      val: "+91 11 2890 4455",
      link: "tel:+911128904455",
      icon: "fas fa-headset",
      badge: "Open Mon–Sat 8:30 AM",
      accent: "#2563eb",
      bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    },
    {
      title: "Direct Email Desk",
      subtitle: "Official Parent & Public Queries",
      val: "admissions@Horizonacademy.edu.in",
      link: "mailto:admissions@Horizonacademy.edu.in",
      icon: "fas fa-paper-plane",
      badge: "24-Hour SLA Response",
      accent: "#059669",
      bgGradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
    },
    {
      title: "Campus Location",
      subtitle: "Sector 14, Institutional Area",
      val: "Gate 1 Reception, New Delhi",
      link: "https://maps.google.com/?q=New+Delhi",
      icon: "fas fa-map-location-dot",
      badge: "10-Acre Master Campus",
      accent: "#e11d2e",
      bgGradient: "linear-gradient(135deg, #fff1f2 0%, #fee2e2 100%)",
    },
    {
      title: "Transport Emergency",
      subtitle: "35+ AC GPS Fleet Oversight",
      val: "+91 98188 77665",
      link: "tel:+919818877665",
      icon: "fas fa-bus-school",
      badge: "Live Fleet Monitoring",
      accent: "#d97706",
      bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    },
  ];

  const departments = [
    {
      dept: "Admissions & Counseling",
      phone: "+91 11 2890 4455 / +91 98102 33445",
      phoneRaw: "+911128904455",
      email: "admissions@Horizonacademy.edu.in",
      hours: "Mon – Sat: 08:30 AM – 03:00 PM",
      location: "Admin Block, Ground Floor (Gate 1)",
      icon: "fas fa-user-graduate",
      color: "#2563eb",
      bg: "#eff6ff",
    },
    {
      dept: "Accounts & Fee Counter",
      phone: "+91 11 2890 4456",
      phoneRaw: "+911128904456",
      email: "accounts@Horizonacademy.edu.in",
      hours: "Mon – Fri: 09:00 AM – 01:30 PM",
      location: "Accounts Wing, Room 104",
      icon: "fas fa-wallet",
      color: "#059669",
      bg: "#ecfdf5",
    },
    {
      dept: "Transport & Bus Operations",
      phone: "+91 98188 77665 (Helpline)",
      phoneRaw: "+919818877665",
      email: "transport@Horizonacademy.edu.in",
      hours: "Mon – Sat: 07:00 AM – 05:00 PM",
      location: "Transport Desk, Gate 3",
      icon: "fas fa-bus",
      color: "#d97706",
      bg: "#fffbeb",
    },
    {
      dept: "Principal’s Secretariat",
      phone: "+91 11 2890 4450",
      phoneRaw: "+911128904450",
      email: "principal@Horizonacademy.edu.in",
      hours: "By Prior Appointment Only",
      location: "Directorate Suite, First Floor",
      icon: "fas fa-user-tie",
      color: "#7c3aed",
      bg: "#faf5ff",
    },
    {
      dept: "CBSE & Examination Cell",
      phone: "+91 11 2890 4458",
      phoneRaw: "+911128904458",
      email: "cbse.nodal@Horizonacademy.edu.in",
      hours: "Mon – Sat: 09:00 AM – 02:00 PM",
      location: "Academic Block, Room 208",
      icon: "fas fa-certificate",
      color: "#e11d2e",
      bg: "#fff1f2",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Contact"
        onNavigate={onNavigate}
        kicker="Visit Our Campus · Inquiry Helpdesk"
        title={<>We would love to <em>hear from you.</em></>}
        subtitle="We welcome parents, alumni, and scholars to visit our 10-acre campus. Reach out directly to individual departments or schedule an in-person campus walkthrough."
        imageUrl="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Administrative Campus and Front Lawn"
        primaryCtaLabel="Book Campus Tour"
        onPrimaryCtaClick={() => document.getElementById("tour-booking")?.scrollIntoView({ behavior: "smooth" })}
      />

      {/* Hero Quick Connect Hotline Hub */}
      <section className="section-quick-hotlines container">
        <div className="hotlines-grid">
          {quickHotlines.map((h, i) => (
            <a
              key={i}
              href={h.link}
              target={h.link.startsWith("http") ? "_blank" : undefined}
              rel={h.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hotline-card reveal-up"
            >
              <div
                className="hotline-icon-box"
                style={{ background: h.bgGradient, color: h.accent }}
              >
                <i className={h.icon} />
              </div>
              <div className="hotline-info">
                <span className="hotline-badge" style={{ color: h.accent }}>
                  {h.badge}
                </span>
                <h4 className="hotline-title">{h.title}</h4>
                <p className="hotline-val">{h.val}</p>
                <span className="hotline-sub">{h.subtitle}</span>
              </div>
              <div className="hotline-arrow" style={{ color: h.accent }}>
                <i className="fas fa-arrow-right" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Main Form & Interactive Transit Hub */}
      <section id="tour-booking" className="section-contact-main container">
        <div className="contact-main-grid">
          {/* Left Form Box */}
          <div className="contact-form-box reveal-left">
            <div className="form-header-badge-row">
              <span className="section-eyebrow">SCHEDULE A CAMPUS VISIT</span>
              <span className="status-indicator-chip">
                <span className="status-ping" /> Admissions Open 2026–27
              </span>
            </div>
            <h2 className="section-title">Send an Inquiry or Book a Tour</h2>
            <p className="section-subtitle">
              Experience our smart classrooms, ATL robotics lab, and sports complex firsthand. Our academic coordinators assist with all admission details.
            </p>

            {formSent ? (
              <div className="contact-success-card animate-fade-in">
                <div className="success-icon-wrap">
                  <i className="fas fa-circle-check" />
                </div>
                <span className="success-badge">INQUIRY DISPATCHED</span>
                <h3>Thank You, {formData.name}!</h3>
                <p>
                  Your message has been assigned to the <strong>{formData.department}</strong>.
                  Our coordinator will contact you within 24 working hours at <strong>{formData.phone}</strong>.
                </p>
                <div className="success-action-btns">
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        department: "Admissions Desk",
                        visitDate: "",
                        message: "",
                      });
                    }}
                    className="btn-apply-primary"
                  >
                    <i className="fas fa-envelope-open-text" /> Submit Another Query
                  </button>
                  <a href="tel:+911128904455" className="btn-call-direct">
                    <i className="fas fa-phone-alt" /> Call Desk Directly
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="campus-visit-form">
                <div className="form-row two-col">
                  <div className="form-group-interactive">
                    <label htmlFor="contactName">
                      <i className="fas fa-user" /> Full Name *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group-interactive">
                    <label htmlFor="contactPhone">
                      <i className="fas fa-mobile-alt" /> Mobile Number *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row two-col">
                  <div className="form-group-interactive">
                    <label htmlFor="contactEmail">
                      <i className="fas fa-envelope" /> Email Address
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group-interactive">
                    <label htmlFor="contactDept">
                      <i className="fas fa-building" /> Target Department *
                    </label>
                    <select
                      id="contactDept"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option>Admissions & Enrolment Desk</option>
                      <option>Principal & Academic Director Office</option>
                      <option>Accounts & Fee Counter</option>
                      <option>Transport Fleet & Route Incharge</option>
                      <option>CBSE SARAS & Exam Nodal Office</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-interactive">
                  <label htmlFor="visitDate">
                    <i className="fas fa-calendar-day" /> Preferred Campus Walkthrough Date
                  </label>
                  <input
                    id="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  />
                </div>

                <div className="form-group-interactive">
                  <label htmlFor="contactMessage">
                    <i className="fas fa-comment-dots" /> Inquiry Details / Scholar Background
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    placeholder="Mention student's current grade, target stream (Science/Commerce/Humanities), or any specific queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-hero-primary full-width" disabled={isSubmitting}>
                  <span>{isSubmitting ? "Dispatching Inquiry..." : "Confirm & Dispatch Inquiry"}</span>
                  <i className="fas fa-paper-plane" style={{ marginLeft: 8 }} />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column with Interactive Cards */}
          <div className="contact-info-column reveal-right">
            {/* Campus Address Card */}
            <div className="campus-address-card-enhanced">
              <div className="campus-card-header">
                <div className="campus-crest-badge">
                  <i className="fas fa-school" />
                </div>
                <div>
                  <span className="badge-campus-tag">CENTRAL INSTITUTIONAL ENCLAVE</span>
                  <h3 className="campus-name">Horizon Academy</h3>
                </div>
              </div>

              <div className="campus-location-box">
                <i className="fas fa-location-dot" />
                <p className="campus-addr">
                  Horizon Knowledge Enclave, Sector 14,
                  <br />
                  Institutional Area, New Delhi / NCR — 110075, India
                </p>
              </div>

              <div className="campus-action-buttons">
                <button
                  type="button"
                  className="btn-copy-address"
                  onClick={() => handleCopy("Horizon Knowledge Enclave, Sector 14, Institutional Area, New Delhi — 110075", "address")}
                >
                  <i className={copiedText === "address" ? "fas fa-check text-green" : "fas fa-copy"} />
                  <span>{copiedText === "address" ? "Address Copied!" : "Copy Address"}</span>
                </button>
                <a
                  href="https://maps.google.com/?q=Sector+14+Institutional+Area+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-open-maps"
                >
                  <i className="fas fa-diamond-turn-right" />
                  <span>Get Driving Route</span>
                </a>
              </div>
            </div>

            {/* How to Reach Transit Cards */}
            <div id="campus-location" className="how-to-reach-card-enhanced">
              <div className="reach-header">
                <i className="fas fa-route" />
                <h4>How to Reach Our Campus</h4>
              </div>

              <div className="transit-cards-list">
                <div className="transit-mode-item">
                  <div className="transit-icon-orb metro">
                    <i className="fas fa-train-subway" />
                  </div>
                  <div className="transit-content">
                    <div className="transit-title-row">
                      <strong>Delhi Metro Rail</strong>
                      <span className="transit-dist-pill">800m Walk</span>
                    </div>
                    <p>Sector 14 Metro Station (Blue Line). Dedicated e-rickshaws and pedestrian walkways directly to Gate 1.</p>
                  </div>
                </div>

                <div className="transit-mode-item">
                  <div className="transit-icon-orb bus">
                    <i className="fas fa-road" />
                  </div>
                  <div className="transit-content">
                    <div className="transit-title-row">
                      <strong>Expressway & Roadways</strong>
                      <span className="transit-dist-pill">Direct Signal-Free</span>
                    </div>
                    <p>Immediate access via Outer Ring Road & Express Highway. Dedicated parent visitor parking available at Gate 2.</p>
                  </div>
                </div>

                <div className="transit-mode-item">
                  <div className="transit-icon-orb airport">
                    <i className="fas fa-plane-departure" />
                  </div>
                  <div className="transit-content">
                    <div className="transit-title-row">
                      <strong>From Airport (IGI)</strong>
                      <span className="transit-dist-pill">18 km Direct</span>
                    </div>
                    <p>Indira Gandhi International Airport Terminal 3 located approximately 25 minutes via NH-48 express corridor.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visitor Security Protocol Card */}
            <div className="visitor-protocol-card-enhanced">
              <div className="protocol-icon-shield">
                <i className="fas fa-shield-halved" />
              </div>
              <div className="protocol-text">
                <strong>Mandatory Campus Entry Protocol</strong>
                <p>
                  For student safety, all visitors must carry a valid government photo identification (Aadhaar / Voter ID / Driver's License) to generate a digital QR entry pass at Gate 1 Visitor Reception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Department Directory Section */}
      <section id="department-directory" className="section-dept-directory container">
        <div className="center-heading reveal-up">
          <span className="section-eyebrow">OFFICIAL DIRECTORY</span>
          <h2 className="section-title">Direct Departmental Desks</h2>
          <p className="section-subtitle">
            Connect directly with specialized academic and administrative officers for accelerated assistance.
          </p>
        </div>

        <div className="departments-grid-enhanced">
          {departments.map((d, idx) => (
            <div
              className={`dept-card-enhanced ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              key={idx}
            >
              <div className="dept-top-bar">
                <div
                  className="dept-icon-circle"
                  style={{ background: d.bg, color: d.color }}
                >
                  <i className={d.icon} />
                </div>
                <span className="dept-room-chip">
                  <i className="fas fa-door-open" /> {d.location}
                </span>
              </div>

              <h3 className="dept-name">{d.dept}</h3>

              <div className="dept-details-stack">
                <div className="dept-meta-row">
                  <i className="fas fa-phone" style={{ color: d.color }} />
                  <a href={`tel:${d.phoneRaw}`} className="dept-contact-link">
                    {d.phone}
                  </a>
                </div>

                <div className="dept-meta-row">
                  <i className="fas fa-envelope" style={{ color: d.color }} />
                  <a href={`mailto:${d.email}`} className="dept-contact-link email">
                    {d.email}
                  </a>
                </div>

                <div className="dept-meta-row">
                  <i className="fas fa-clock" style={{ color: "#64748b" }} />
                  <span className="dept-hours-text">{d.hours}</span>
                </div>
              </div>

              <div className="dept-card-footer">
                <a
                  href={`tel:${d.phoneRaw}`}
                  className="btn-dept-action call"
                  style={{ borderColor: `${d.color}40`, color: d.color }}
                >
                  <i className="fas fa-phone-alt" /> Call Desk
                </a>
                <a
                  href={`mailto:${d.email}`}
                  className="btn-dept-action email"
                  style={{ background: d.color }}
                >
                  <i className="fas fa-paper-plane" /> Email Office
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
