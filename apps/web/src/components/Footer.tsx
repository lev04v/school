import { PageId } from "./Header";

interface FooterProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Footer({ onNavigate, onOpenAdmissionModal }: FooterProps) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#1F2937",
              border: "1.5px solid #D6A76F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#D6A76F",
              marginBottom: 16
            }}>
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 36V16" stroke="#D6A76F" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M20 16C12.5 16 7.5 10.5 7.5 4.5C14 4.5 19 9 20 16Z" fill="#D6A76F" />
                <path d="M20 16C27.5 16 32.5 10.5 32.5 4.5C26 4.5 21 9 20 16Z" fill="#D6A76F" />
                <circle cx="20" cy="4" r="2.2" fill="#D6A76F" />
              </svg>
            </div>
            <h4 style={{ color: "#FDF8F2", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "1px" }}>
              Horizon Academy
            </h4>
            <p style={{ color: "#D6A76F", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 4, marginBottom: 12 }}>
              Senior Secondary CBSE School (10+2)
            </p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#F5E6D3" }}>
              Affiliated to the Central Board of Secondary Education (CBSE), New Delhi. Affiliation No. 2130845 | School Code 71204. Inspiring academic distinction, moral rectitude, and future leadership since 1998.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate("about"); }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#academics" onClick={(e) => { e.preventDefault(); onNavigate("academics"); }}>
                  Academics &amp; Wings
                </a>
              </li>
              <li>
                <a href="#admissions" onClick={(e) => { e.preventDefault(); onNavigate("admissions"); }}>
                  Admissions 2026–27
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => { e.preventDefault(); onNavigate("facilities"); }}>
                  Campus
                </a>
              </li>
              <li>
                <a href="#circulars" onClick={(e) => { e.preventDefault(); onNavigate("circulars", "circulars"); }}>
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate("gallery", "gallery-grid"); }}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate("about", "cbse-saras"); }}>
                  Mandatory Public Disclosure
                </a>
              </li>
              <li>
                <a href="#admissions" onClick={(e) => { e.preventDefault(); onNavigate("admissions", "fee-structure"); }}>
                  Fee Structure 2026–27
                </a>
              </li>
              <li>
                <a href="#admissions" onClick={(e) => { e.preventDefault(); onNavigate("admissions", "tc-verification"); }}>
                  Transfer Certificate (TC)
                </a>
              </li>
              <li>
                <a href="https://www.cbse.gov.in/" target="_blank" rel="noopener noreferrer">
                  CBSE Official Portal
                </a>
              </li>
              <li>
                <a href="https://ncert.nic.in/" target="_blank" rel="noopener noreferrer">
                  NCERT E-Textbooks
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate("about", "principal-message"); }}>
                  Principal's Message
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Campus Newsletter</h4>
            <p style={{ fontSize: "0.82rem", color: "var(--gray-400)", marginBottom: 14, lineHeight: 1.6 }}>
              Subscribe for periodic school notifications, board exam schedules, and circulars.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Horizon Academy notifications!"); }} className="footer-newsletter">
              <input type="email" placeholder="Enter parent email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; 2026 Horizon Academy Senior Secondary School. All Rights Reserved. Affiliated to CBSE, New Delhi (Affiliation No: 2130845 | School Code: 71204).
          </p>
        </div>
      </div>
    </footer>
  );
}
