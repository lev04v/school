import { useState } from "react";

export type PageId = "home" | "about" | "academics" | "admissions" | "facilities" | "gallery" | "circulars" | "contact";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Header({ currentPage, onNavigate, onOpenAdmissionModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId, targetSectionId?: string) => {
    onNavigate(page, targetSectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="kingster-topbar">
        <div className="container topbar-inner">
          <div className="topbar-affiliation">
            <span className="cbse-pill">CBSE AFFILIATED 10+2</span>
            <span>
              Affiliation No. <strong>2130845</strong> | School Code: <strong>71204</strong>
            </span>
          </div>

          <div className="topbar-right">
            <div className="topbar-contacts">
              <a href="tel:+911128904455">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 11 2890 4455
              </a>
              <a href="mailto:admissions@horizonacademy.edu.in">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                admissions@horizonacademy.edu.in
              </a>
            </div>

            <div className="topbar-quick-links">
              <button onClick={() => handleNavClick("gallery")} className="topbar-link-btn">
                Photo Gallery
              </button>
              <button onClick={() => handleNavClick("circulars", "circulars-archive")} className="topbar-link-btn">
                Notice Board
              </button>
              <button onClick={() => handleNavClick("admissions", "admission-steps")} className="topbar-link-btn highlight">
                Admission Process
              </button>
              <button onClick={() => handleNavClick("about", "cbse-saras")} className="topbar-link-btn">
                CBSE SARAS
              </button>
              <button onClick={() => onOpenAdmissionModal()} className="portal-badge">
                Apply 2026-27
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="kingster-header">
        <div className="container nav-wrap">
          <button
            onClick={() => handleNavClick("home")}
            className="brand-crest"
            aria-label="Horizon Academy Home"
          >
            <div className="crest-symbol">
              <div className="crest-shield">
                <span className="crest-stars">★★★</span>
                <span className="crest-monogram">HA</span>
                <span className="crest-year">ESTD 1998</span>
              </div>
            </div>
            <div className="brand-text">
              <span className="school-title">HORIZON ACADEMY</span>
              <span className="school-sub">SENIOR SECONDARY SCHOOL (10+2)</span>
              <span className="school-affil">Affiliated to CBSE, New Delhi</span>
            </div>
          </button>

          <nav className="desktop-menu" aria-label="Primary Navigation">
            <button
              onClick={() => handleNavClick("home")}
              className={`menu-link ${currentPage === "home" ? "active" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`menu-link ${currentPage === "about" ? "active" : ""}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("academics")}
              className={`menu-link ${currentPage === "academics" ? "active" : ""}`}
            >
              10+2 Academics
            </button>
            <button
              onClick={() => handleNavClick("admissions")}
              className={`menu-link ${currentPage === "admissions" ? "active" : ""}`}
            >
              Admissions
            </button>
            <button
              onClick={() => handleNavClick("facilities")}
              className={`menu-link ${currentPage === "facilities" ? "active" : ""}`}
            >
              Campus Life
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              className={`menu-link ${currentPage === "gallery" ? "active" : ""}`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick("circulars")}
              className={`menu-link ${currentPage === "circulars" ? "active" : ""}`}
            >
              Circulars & Events
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`menu-link ${currentPage === "contact" ? "active" : ""}`}
            >
              Contact
            </button>
          </nav>

          <div className="header-actions">
            <button
              onClick={() => onOpenAdmissionModal()}
              className="btn-apply-primary"
              aria-label="Apply for Admission 2026-27"
            >
              <span>Admissions 2026-27</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className={`bar ${mobileMenuOpen ? "open" : ""}`} />
              <span className={`bar ${mobileMenuOpen ? "open" : ""}`} />
              <span className={`bar ${mobileMenuOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              <div className="drawer-affiliation">
                <span className="cbse-pill">CBSE Affiliation No. 2130845</span>
                <span>School Code: 71204</span>
              </div>
              <nav className="mobile-nav-links">
                <button
                  className={`mobile-nav-item ${currentPage === "home" ? "active" : ""}`}
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "about" ? "active" : ""}`}
                  onClick={() => handleNavClick("about")}
                >
                  About Us (Vision, Legacy & CBSE SARAS)
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "academics" ? "active" : ""}`}
                  onClick={() => handleNavClick("academics")}
                >
                  10+2 Streams (Science, Commerce, Arts)
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "admissions" ? "active" : ""}`}
                  onClick={() => handleNavClick("admissions")}
                >
                  Admissions & Fee Structure (2026–27)
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "facilities" ? "active" : ""}`}
                  onClick={() => handleNavClick("facilities")}
                >
                  Campus Life & ATL Labs
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "gallery" ? "active" : ""}`}
                  onClick={() => handleNavClick("gallery")}
                >
                  Campus Photo Gallery & Programs
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "circulars" ? "active" : ""}`}
                  onClick={() => handleNavClick("circulars")}
                >
                  CBSE Circulars & Events Calendar
                </button>
                <button
                  className={`mobile-nav-item ${currentPage === "contact" ? "active" : ""}`}
                  onClick={() => handleNavClick("contact")}
                >
                  Contact Us & Campus Tour
                </button>
              </nav>
              <div className="mobile-drawer-actions">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal();
                  }}
                  className="btn-apply-primary full-width"
                >
                  Apply Online (Session 2026-27)
                </button>
                <div className="mobile-contact-line">
                  <span>Call: +91 11 2890 4455</span>
                  <span>Email: admissions@horizonacademy.edu.in</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
