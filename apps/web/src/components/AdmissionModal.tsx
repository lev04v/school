import { useState } from "react";

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
    grade: defaultStream || "Class XI - Science (PCM/PCB)",
    currentSchool: "",
    previousPercentage: "",
    remarks: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [appRef, setAppRef] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `HA-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRef(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Admission Form">
          ✕
        </button>

        {submitted ? (
          <div className="modal-success-box">
            <div className="success-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="success-badge">ENQUIRY REGISTERED SUCCESSFULLY</span>
            <h3 className="success-title">Thank You, {formData.parentName || "Parent"}!</h3>
            <p className="success-msg">
              Your admission enquiry for <strong>{formData.studentName}</strong> for{" "}
              <strong>{formData.grade}</strong> has been registered with Horizon Academy.
            </p>

            <div className="success-ref-ticket">
              <span className="ticket-label">Application Reference Number</span>
              <strong className="ticket-number">{appRef}</strong>
              <small className="ticket-note">A confirmation SMS & Email has been dispatched to your contact details.</small>
            </div>

            <div className="success-next-steps">
              <h4>Next Steps for Parents:</h4>
              <ol>
                <li>Our Admission Counselor will connect via phone within 24 working hours.</li>
                <li>Visit campus between 09:00 AM – 02:00 PM for the School Tour & Document Verification.</li>
                <li>Bring previous year's report card, Birth Certificate, and Passport-size photographs.</li>
              </ol>
            </div>

            <button onClick={handleReset} className="btn-modal-close-final">
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <div className="modal-form-wrap">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-crest-row">
                <span className="cbse-tag-small">CBSE AFFILIATED 10+2 · ESTD. 1998</span>
                <span className="school-code-small">Affil No. 2130845</span>
              </div>
              <h2 className="modal-title">Admission Enquiry (2026–27)</h2>
              <p className="modal-subtitle">
                Fill this brief form to schedule your campus counseling, syllabus briefing, and school tour.
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
                  <label htmlFor="parentName">Parent / Guardian's Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    required
                    placeholder="e.g. Dr. Alok Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="mobile">Contact Mobile Number *</label>
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
                  <label htmlFor="grade">Class / Stream Seeking Admission *</label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <optgroup label="Foundational & Primary">
                      <option value="Pre-Primary (Nursery / LKG / UKG)">Pre-Primary (Nursery / LKG / UKG)</option>
                      <option value="Class I to V (Primary Wing)">Class I to V (Primary Wing)</option>
                    </optgroup>
                    <optgroup label="Middle & Secondary">
                      <option value="Class VI to VIII (Middle Wing)">Class VI to VIII (Middle Wing)</option>
                      <option value="Class IX & X (Secondary AISSE)">Class IX & X (Secondary AISSE)</option>
                    </optgroup>
                    <optgroup label="Senior Secondary 10+2 (CBSE)">
                      <option value="Class XI - Science (PCM - JEE Track)">Class XI - Science (PCM - Non-Med)</option>
                      <option value="Class XI - Science (PCB - NEET Track)">Class XI - Science (PCB - Medical)</option>
                      <option value="Class XI - Commerce (With/Without Maths)">Class XI - Commerce</option>
                      <option value="Class XI - Humanities / Arts">Class XI - Humanities / Arts</option>
                      <option value="Class XII (Transfer Cases Only)">Class XII (Transfer Cases Only)</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="prevMarks">Previous Class Marks / Grade %</label>
                  <input
                    type="text"
                    id="prevMarks"
                    placeholder="e.g. 92% or A1 Grade"
                    value={formData.previousPercentage}
                    onChange={(e) => setFormData({ ...formData, previousPercentage: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="currentSchool">Current / Previous School & Board</label>
                <input
                  type="text"
                  id="currentSchool"
                  placeholder="e.g. DPS / DAV / St. Xavier's (CBSE / ICSE / State)"
                  value={formData.currentSchool}
                  onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="remarks">Questions or Specific Requirements (Optional)</label>
                <textarea
                  id="remarks"
                  rows={2}
                  placeholder="e.g. Transport route needed, hostel facility, Olympiad coaching details..."
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                />
              </div>

              <div className="form-privacy-note">
                <span>🔒 Your information is confidential and protected under school data safety policies.</span>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit-admission">
                  <span>Submit Admission Enquiry</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
