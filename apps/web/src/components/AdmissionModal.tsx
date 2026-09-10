import { useState, useEffect } from "react";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStream?: string;
}

export default function AdmissionModal({ isOpen, onClose, defaultStream }: AdmissionModalProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobile: "",
    email: "",
    grade: defaultStream || "Class XI - Science Non-Medical (PCM + Computers/PE)",
    currentSchool: "",
    previousPercentage: "",
    remarks: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [appRef, setAppRef] = useState("");

  useEffect(() => {
    if (defaultStream) {
      setFormData((prev) => ({ ...prev, grade: defaultStream }));
    }
  }, [defaultStream]);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `HA-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRef(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: "",
      parentName: "",
      mobile: "",
      email: "",
      grade: defaultStream || "Class XI - Science Non-Medical (PCM + Computers/PE)",
      currentSchool: "",
      previousPercentage: "",
      remarks: "",
    });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-admission-title"
    >
      <div
        className="modal-card animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Admission Form"
          type="button"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success-box animate-fade-in">
            <div className="success-icon-wrap">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="success-badge">ENQUIRY REGISTERED SUCCESSFULLY</span>
            <h3 className="success-title">Thank You, {formData.parentName || "Parent"}!</h3>
            <p className="success-msg">
              Your admission enquiry for <strong>{formData.studentName || "your ward"}</strong> for{" "}
              <strong>{formData.grade}</strong> has been received by the Horizon Academy Admissions Directorate.
            </p>

            <div className="success-ref-ticket">
              <span className="ticket-label">Application Reference Number</span>
              <strong className="ticket-number">{appRef}</strong>
              <small className="ticket-note">
                A confirmation SMS & Email has been dispatched to{" "}
                <strong>{formData.mobile || "your registered number"}</strong>.
              </small>
            </div>

            <div className="success-next-steps">
              <h4>Next Steps for Parents:</h4>
              <ol>
                <li>Our Senior Admission Counselor will connect via telephone within 24 working hours.</li>
                <li>Visit campus between 09:00 AM – 02:00 PM for the School Tour & Document Verification.</li>
                <li>Bring previous year's report card, Birth Certificate, and passport-size photographs.</li>
              </ol>
            </div>

            <button type="button" onClick={handleReset} className="btn-modal-close-final">
              Done & Return to Website
            </button>
          </div>
        ) : (
          <div className="modal-form-wrap">
            <div className="modal-header">
              <div className="modal-crest-row">
                <span className="cbse-tag-small">CBSE AFFILIATED 10+2 • ESTD. 1998</span>
                <span className="school-code-small">Affil No. 2130845 | Code: 71204</span>
              </div>
              <h2 id="modal-admission-title" className="modal-title">
                Online Admission Enquiry (2026–27)
              </h2>
              <p className="modal-subtitle">
                Register for admission counseling, syllabus overview, and personalized campus walkthrough.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="admission-form">
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="studentName">Student's Full Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="parentName">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number (For Verification SMS) *</label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="grade">Applying for Class / Stream *</label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <optgroup label="Pre-Primary & Primary Wings">
                      <option value="Nursery / Early Childhood">Nursery / Early Childhood</option>
                      <option value="LKG / UKG">LKG / UKG</option>
                      <option value="Class I to V (Primary Wing)">Class I to V (Primary Wing)</option>
                    </optgroup>
                    <optgroup label="Middle & Secondary Wings">
                      <option value="Class VI to VIII (Middle Wing)">Class VI to VIII (Middle Wing)</option>
                      <option value="Class IX (Secondary AISSE)">Class IX (Secondary AISSE)</option>
                      <option value="Class X (Transfer Candidate)">Class X (Transfer Candidate)</option>
                    </optgroup>
                    <optgroup label="Senior Secondary (10+2 Specialized Streams)">
                      <option value="Class XI - Science Non-Medical (PCM + Computers/PE)">Class XI - Science Non-Medical (PCM + Computers/PE)</option>
                      <option value="Class XI - Science Medical (PCB + Bio/Psychology)">Class XI - Science Medical (PCB + Bio/Psychology)</option>
                      <option value="Class XI - Commerce (Accountancy, BST, Economics, Applied Maths)">Class XI - Commerce (Accountancy, BST, Economics, Applied Maths)</option>
                      <option value="Class XI - Humanities (Pol Sci, History, Psychology, Legal Studies)">Class XI - Humanities (Pol Sci, History, Psychology, Legal Studies)</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="previousPercentage">Previous Class Marks / %</label>
                  <input
                    type="text"
                    id="previousPercentage"
                    placeholder="e.g. 92% or Grade A1"
                    value={formData.previousPercentage}
                    onChange={(e) => setFormData({ ...formData, previousPercentage: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="currentSchool">Current School & Board</label>
                <input
                  type="text"
                  id="currentSchool"
                  placeholder="e.g. Delhi Public School (CBSE / ICSE / State)"
                  value={formData.currentSchool}
                  onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="remarks">Special Interests or Questions</label>
                <textarea
                  id="remarks"
                  rows={3}
                  placeholder="Mention any questions regarding bus transport, scholarship criteria, sports academies, or Olympiad coaching..."
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                />
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-submit-admission">
                  <span>Submit Admission Enquiry & Receive Reference ID</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
