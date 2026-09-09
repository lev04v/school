import { PageId } from "./Header";

interface FooterProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Footer({ onNavigate, onOpenAdmissionModal }: FooterProps) {
  return (
    <footer className="kingster-footer">
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div className="cta-left">
            <span className="cta-kicker">ADMISSIONS OPEN FOR ACADEMIC YEAR 2026–27</span>
            <h3 className="cta-title">Shape Your Future at Horizon Academy</h3>
            <p className="cta-sub">
              Limited seats in Pre-Primary, Class I, Class IX, and Class XI (Science, Commerce & Humanities).
            </p>
          </div>
          <div className="cta-right">
            <button onClick={() => onOpenAdmissionModal()} className="btn-cta-gold">
              <span>Apply Online for 2026-27</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <a href="tel:+911128904455" className="btn-cta-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 11 2890 4455</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-columns-wrap">
        <div className="footer-col brand-col">
          <div className="footer-brand-crest">
            <div className="crest-symbol">
              <div className="crest-shield small">
                <span className="crest-monogram">HA</span>
              </div>
            </div>
            <div className="brand-text">
              <span className="school-title-light">HORIZON ACADEMY</span>
              <span className="school-sub-light">SENIOR SECONDARY SCHOOL (10+2)</span>
            </div>
          </div>

          <div className="footer-affiliation-note">
            <span className="affil-seal">CBSE AFFILIATED</span>
            <p>
              Affiliated to the <strong>Central Board of Secondary Education (CBSE)</strong>, New Delhi.
              <br />
              <strong>Affiliation No.:</strong> 2130845 | <strong>School Code:</strong> 71204
            </p>
          </div>

          <p className="footer-motto-tag">
            <em>“Vidya Dadati Vinayam”</em> — In pursuit of academic distinction, moral rectitude, and national progress since 1998.
          </p>

          <div className="footer-social-icons">
            <span className="social-pill">FB</span>
            <span className="social-pill">YT</span>
            <span className="social-pill">IG</span>
            <span className="social-pill">IN</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Academics & Wings</h4>
          <ul className="footer-link-list">
            <li>
              <button onClick={() => onNavigate("academics", "foundational-wing")} className="footer-btn-link">
                Foundational Wing (Nursery — Class V)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("academics", "middle-wing")} className="footer-btn-link">
                Middle Wing (Class VI — VIII)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("academics", "secondary-wing")} className="footer-btn-link">
                Secondary School (Class IX & X AISSE)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="footer-btn-link">
                10+2 Science Stream (PCM / PCB)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("academics", "senior-secondary-wing")} className="footer-btn-link">
                10+2 Commerce & Humanities
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("academics", "assessment-structure")} className="footer-btn-link">
                CBSE Examination & Assessment Pattern
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Admissions & Policies</h4>
          <ul className="footer-link-list">
            <li>
              <button onClick={() => onNavigate("admissions", "admission-steps")} className="footer-btn-link">
                Admissions Procedure 2026-27
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("admissions", "admission-steps")} className="footer-btn-link">
                Eligibility & Required Documents
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("admissions", "tc-verification")} className="footer-btn-link">
                Transfer Certificate (TC) Verification
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("about", "cbse-saras")} className="footer-btn-link">
                Mandatory Public Disclosure (SARAS)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("facilities", "facilities-overview")} className="footer-btn-link">
                ATL Robotics & Science Labs
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("circulars", "academic-calendar")} className="footer-btn-link">
                School Academic Calendar 2026-27
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Campus & Contact</h4>
          <div className="footer-contact-block">
            <div className="contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f0b431" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>
                <strong>Horizon Knowledge Campus</strong>
                <br />
                Institutional Enclave, Sector 14,
                <br />
                New Delhi / NCR — 110075, India
              </span>
            </div>

            <div className="contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f0b431" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 11 2890 4455 / +91 98102 33445</span>
            </div>

            <div className="contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f0b431" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>admissions@horizonacademy.edu.in</span>
            </div>

            <button onClick={() => onNavigate("contact", "tour-booking")} className="footer-plan-visit-btn">
              Plan a Campus Visit →
            </button>
          </div>
        </div>
      </div>

      <div className="footer-sub-bottom">
        <div className="container sub-bottom-inner">
          <span>
            © 2026 <strong>Horizon Academy Senior Secondary School</strong>. All Rights Reserved.
          </span>
          <div className="sub-bottom-links">
            <button onClick={() => onNavigate("about", "cbse-saras")} className="sub-footer-btn">
              CBSE SARAS
            </button>
            <span>•</span>
            <button onClick={() => onNavigate("about", "leadership-directory")} className="sub-footer-btn">
              School Management
            </button>
            <span>•</span>
            <button onClick={() => onNavigate("contact", "department-directory")} className="sub-footer-btn">
              Directory
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
