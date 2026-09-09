import { useState } from "react";
import { PageId } from "../components/Header";
import { PageHero } from "../components/PageHero";

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export default function Contact({ onNavigate }: ContactPageProps) {
  const [formSent, setFormSent] = useState(false);
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
    setFormSent(true);
  };

  const departments = [
    {
      dept: "Admissions & Counseling",
      phone: "+91 11 2890 4455 / +91 98102 33445",
      email: "admissions@horizonacademy.edu.in",
      hours: "Mon – Sat: 08:30 AM – 03:00 PM",
      location: "Admin Block, Ground Floor (Gate 1)",
    },
    {
      dept: "Accounts & Fee Counter",
      phone: "+91 11 2890 4456",
      email: "accounts@horizonacademy.edu.in",
      hours: "Mon – Fri: 09:00 AM – 01:30 PM",
      location: "Accounts Wing, Room 104",
    },
    {
      dept: "Transport & Bus Operations",
      phone: "+91 98188 77665 (Helpline)",
      email: "transport@horizonacademy.edu.in",
      hours: "Mon – Sat: 07:00 AM – 05:00 PM",
      location: "Transport Desk, Gate 3",
    },
    {
      dept: "Principal’s Secretariat",
      phone: "+91 11 2890 4450",
      email: "principal@horizonacademy.edu.in",
      hours: "By Prior Appointment Only",
      location: "Directorate Suite, First Floor",
    },
    {
      dept: "CBSE & Examination Cell",
      phone: "+91 11 2890 4458",
      email: "cbse.nodal@horizonacademy.edu.in",
      hours: "Mon – Sat: 09:00 AM – 02:00 PM",
      location: "Academic Block, Room 208",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Contact Us"
        onNavigate={onNavigate}
        kicker="CAMPUS VISIT · INQUIRY HELPDESK · LOCATION GUIDE"
        title={<>Connect with Our <span className="text-shimmer">Campus & Leadership</span></>}
        subtitle="We welcome parents, alumni, and educational partners to visit our 10-acre campus. Reach out directly to individual departments or schedule an in-person campus tour."
        imageUrl="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Administrative Campus and Front Lawn"
      />

      <section id="tour-booking" className="section-contact-main container">
        <div className="contact-main-grid">
          <div className="contact-form-box">
            <span className="section-eyebrow">SCHEDULE A CAMPUS VISIT</span>
            <h2 className="section-title">Send an Inquiry or Book a Tour</h2>
            <p className="section-subtitle">
              Experience our smart classrooms, ATL robotics lab, and sports complex firsthand.
            </p>

            {formSent ? (
              <div className="contact-success-card animate-fade-in">
                <span className="success-badge">INQUIRY DISPATCHED</span>
                <h3>Thank You, {formData.name}!</h3>
                <p>
                  Your message has been forwarded to the <strong>{formData.department}</strong>.
                  Our coordinator will reach out to you within 24 working hours at <strong>{formData.phone}</strong>.
                </p>
                <button onClick={() => setFormSent(false)} className="btn-apply-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="campus-visit-form">
                <div className="form-row two-col">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number (For SMS confirmation) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row two-col">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Target Department / Desk *</label>
                    <select
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

                <div className="form-group">
                  <label>Message / In-Person Visit Details</label>
                  <textarea
                    rows={4}
                    placeholder="Mention child's current class, target stream, or preferred visit date/time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-hero-primary full-width">
                  <span>Submit Inquiry & Book Tour</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-column">
            <div className="campus-address-card">
              <span className="badge-campus-tag">MAIN CAMPUS</span>
              <h3 className="campus-name">Horizon Academy</h3>
              <p className="campus-addr">
                Horizon Knowledge Enclave, Sector 14,
                <br />
                Institutional Area, New Delhi / NCR — 110075, India
              </p>
              <div className="campus-contact-links">
                <div>
                  <strong>Admissions Office:</strong>
                  <span>+91 11 2890 4455</span>
                </div>
                <div>
                  <strong>Email Desk:</strong>
                  <span>admissions@horizonacademy.edu.in</span>
                </div>
                <div>
                  <strong>Official Website:</strong>
                  <span>www.horizonacademy.edu.in</span>
                </div>
              </div>
            </div>

            <div id="campus-location" className="how-to-reach-card">
              <h4>How to Reach Our Campus</h4>
              <ul className="transit-list">
                <li>
                  <strong>By Metro:</strong> Nearest station is Sector 14 Metro Station (Blue Line), just 800m from Gate 1.
                </li>
                <li>
                  <strong>By Road:</strong> Direct connectivity via Express Highway & Outer Ring Road with dedicated school bus lane.
                </li>
                <li>
                  <strong>From Airport:</strong> Indira Gandhi International Airport (IGI) is located 18 km via NH-48.
                </li>
              </ul>
            </div>

            <div className="visitor-protocol-card">
              <strong>Visitor Security Protocol:</strong>
              <p>All visitors must carry valid government photo identification (Aadhaar / Voter ID / Driving License) to obtain a visitor pass at Gate 1.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="department-directory" className="section-dept-directory container">
        <div className="center-heading">
          <span className="section-eyebrow">OFFICE DIRECTORY</span>
          <h2 className="section-title">Direct Departmental Contacts</h2>
          <p className="section-subtitle">
            Get in touch directly with the concerned administrative offices.
          </p>
        </div>

        <div className="departments-grid">
          {departments.map((d, idx) => (
            <div className="dept-card" key={idx}>
              <h3 className="dept-name">{d.dept}</h3>
              <p className="dept-location">{d.location}</p>
              <div className="dept-meta">
                <span className="dept-phone">📞 {d.phone}</span>
                <span className="dept-email">✉️ {d.email}</span>
                <span className="dept-hours">🕒 {d.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
