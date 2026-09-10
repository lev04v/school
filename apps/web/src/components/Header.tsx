import { useState, useEffect } from "react";

export type PageId = "home" | "about" | "academics" | "admissions" | "facilities" | "gallery" | "circulars" | "contact";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: (stream?: string) => void;
}

export default function Header({ currentPage, onNavigate, onOpenAdmissionModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer and panel on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setNotifOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNav = (page: PageId, targetSectionId?: string) => {
    onNavigate(page, targetSectionId);
    setMobileMenuOpen(false);
    setNotifOpen(false);
    setActiveMobileAccordion(null);
  };

  const toggleMobileAccordion = (key: string) => {
    setActiveMobileAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* ========== ANNOUNCEMENT TICKER ========== */}
      <div id="announcement" role="region" aria-label="Latest Announcements">
        <div className="ticker-label">
          <i className="fas fa-bullhorn" style={{ marginRight: 6 }}></i> Latest
        </div>
        <div className="ticker-wrap">
          <div className="ticker-content">
            <span>Admissions Open for 2026-27 Session — Apply Now!</span>
            <span>Horizon Academy ranks among Top CBSE 10+2 Institutions in Delhi/NCR</span>
            <span>CBSE Board Results: 100% Pass Rate &amp; 98.4% State Topper — Congratulations!</span>
            <span>New STEM &amp; Atal Tinkering Innovation Lab inaugurated</span>
            <span>Admissions Open for 2026-27 Session — Apply Now!</span>
            <span>Horizon Academy ranks among Top CBSE 10+2 Institutions in Delhi/NCR</span>
            <span>CBSE Board Results: 100% Pass Rate &amp; 98.4% State Topper — Congratulations!</span>
          </div>
        </div>
      </div>

      {/* ========== NAVBAR (Floating Pill) ========== */}
      <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNav("home");
            }}
            aria-label="Horizon Academy Home"
          >
            <div className="nav-logo-botanical" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 36V16" stroke="#78350F" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M20 16C12.5 16 7.5 10.5 7.5 4.5C14 4.5 19 9 20 16Z" fill="#78350F" />
                <path d="M20 16C27.5 16 32.5 10.5 32.5 4.5C26 4.5 21 9 20 16Z" fill="#78350F" />
                <path d="M20 25C14.5 25 10.5 20.5 10.5 15C15.5 15 19 18.5 20 25Z" fill="#D6A76F" />
                <path d="M20 25C25.5 25 29.5 20.5 29.5 15C24.5 15 21 18.5 20 25Z" fill="#D6A76F" />
                <circle cx="20" cy="4" r="2.2" fill="#D6A76F" />
              </svg>
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">HORIZON</span>
              <span className="nav-brand-sub">ACADEMY</span>
            </div>
          </a>

          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={currentPage === "home" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("home");
                }}
              >
                Home
              </a>
            </li>

            {/* About dropdown */}
            <li className="has-dropdown">
              <a
                href="#about"
                className={currentPage === "about" || currentPage === "gallery" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("about");
                }}
              >
                About <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("about", "legacy-heritage");
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("about", "chapter-foundation");
                    }}
                  >
                    Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "circulars-archive");
                    }}
                  >
                    News &amp; Events
                  </a>
                </li>

                <li>
                  <a
                    href="#facilities"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("facilities", "facilities-overview");
                    }}
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("about", "chapter-leaders");
                    }}
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("home", "desk-messages");
                    }}
                  >
                    Desk Messages
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("gallery", "gallery-grid");
                    }}
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </li>

            {/* Academics dropdown */}
            <li className="has-dropdown">
              <a
                href="#academics"
                className={currentPage === "academics" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("academics");
                }}
              >
                Academics <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown">
                <li>
                  <a
                    href="#academics"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("academics", "curriculum-streams");
                    }}
                  >
                    Streams &amp; Pedagogy
                  </a>
                </li>
                <li>
                  <a
                    href="#academics"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("academics", "board-results");
                    }}
                  >
                    Board Exam Results
                  </a>
                </li>
                <li>
                  <a
                    href="#academics"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("academics", "faculty-spotlight");
                    }}
                  >
                    Faculty Profiles
                  </a>
                </li>
              </ul>
            </li>

            {/* Campus link */}
            <li>
              <a
                href="#facilities"
                className={currentPage === "facilities" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("facilities");
                }}
              >
                Campus
              </a>
            </li>

            {/* News & Events dropdown */}
            <li className="has-dropdown">
              <a
                href="#circulars"
                className={currentPage === "circulars" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("circulars");
                }}
              >
                News &amp; Events <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown">
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "academic-calendar");
                    }}
                  >
                    Academic Calendar 2026–27
                  </a>
                </li>
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "school-milestones");
                    }}
                  >
                    Key School Milestones
                  </a>
                </li>
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "circulars-archive");
                    }}
                  >
                    Digital Notice Archive
                  </a>
                </li>
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "cal-events-list");
                    }}
                  >
                    Exams, Holidays &amp; Fests
                  </a>
                </li>
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "cal-download-banner");
                    }}
                  >
                    Download Calendar (PDF)
                  </a>
                </li>
              </ul>
            </li>

            {/* Admissions link */}
            <li>
              <a
                href="#admissions"
                className={currentPage === "admissions" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("admissions");
                }}
              >
                Admissions
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={currentPage === "contact" ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("contact");
                }}
              >
                Contact
              </a>
            </li>

            {/* More dropdown */}
            <li className="has-dropdown">
              <a href="#more" onClick={(e) => e.preventDefault()}>
                More <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown dropdown--more">
                <li>
                  <a href="https://www.cbse.gov.in/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-book" style={{ marginRight: 6 }}></i> CBSE Portal
                  </a>
                </li>
                <li>
                  <a href="https://ncert.nic.in/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-book-open" style={{ marginRight: 6 }}></i> NCERT Books
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("about", "cbse-saras");
                    }}
                  >
                    <i className="fas fa-file-contract" style={{ marginRight: 6 }}></i> Mandatory Disclosure (SARAS)
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("about", "chapter-leaders");
                    }}
                  >
                    <i className="fas fa-users" style={{ marginRight: 6 }}></i> Student Council &amp; Leaders
                  </a>
                </li>
                <li>
                  <a
                    href="#facilities"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("facilities", "co-curricular-clubs");
                    }}
                  >
                    <i className="fas fa-running" style={{ marginRight: 6 }}></i> Co-Curricular Activity
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("about", "chapter-values");
                    }}
                  >
                    <i className="fas fa-bed" style={{ marginRight: 6 }}></i> Hostel &amp; Residential Life
                  </a>
                </li>
                <li>
                  <a
                    href="#circulars"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("circulars", "circulars");
                    }}
                  >
                    <i className="fas fa-calendar-alt" style={{ marginRight: 6 }}></i> Academic Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#admissions"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("admissions", "tc-verification");
                    }}
                  >
                    <i className="fas fa-certificate" style={{ marginRight: 6 }}></i> TC Verification
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("contact", "tour-booking");
                    }}
                  >
                    <i className="fas fa-briefcase" style={{ marginRight: 6 }}></i> Careers &amp; Faculty Openings
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right actions (Bell + Student Login + Hamburger) */}
          <div className="nav-actions">
            {/* Notification Bell */}
            <div className="nav-bell-wrapper" id="navBellWrapper">
              <button
                className="nav-bell"
                id="navBell"
                aria-label="Notifications"
                aria-expanded={notifOpen}
                onClick={() => setNotifOpen(!notifOpen)}
              >
                <i className="fas fa-bell"></i>
                <span className="nav-bell-badge" id="navBellBadge">
                  3
                </span>
              </button>

              {/* Notification dropdown panel */}
              <div className={`nav-notif-panel ${notifOpen ? "open" : ""}`} id="navNotifPanel" aria-label="Notifications" role="region">
                <div className="nav-notif-header">
                  <h6>
                    <i className="fas fa-bell"></i> Notifications
                  </h6>
                  <button className="nav-notif-mark-all" onClick={() => setNotifOpen(false)} title="Close Panel">
                    <i className="fas fa-check-double"></i> Done
                  </button>
                </div>
                <ul className="nav-notif-list">
                  <li className="nav-notif-item nav-notif-item--unread nav-notif-item--hot" id="notifAdmission">
                    <div className="nav-notif-icon nav-notif-icon--red">
                      <i className="fas fa-door-open"></i>
                    </div>
                    <div className="nav-notif-body">
                      <p className="nav-notif-title">Admissions Open 2026-27!</p>
                      <p className="nav-notif-desc">Admissions open from Nursery to Class IX &amp; Class XI (All Streams).</p>
                      <button
                        onClick={() => {
                          setNotifOpen(false);
                          onOpenAdmissionModal();
                        }}
                        className="nav-notif-cta"
                      >
                        Apply Now
                      </button>
                      <span className="nav-notif-time">Session 2026-27</span>
                    </div>
                  </li>
                  <li className="nav-notif-item nav-notif-item--unread">
                    <div className="nav-notif-icon nav-notif-icon--blue">
                      <i className="fas fa-award"></i>
                    </div>
                    <div className="nav-notif-body">
                      <p className="nav-notif-title">CBSE Board Exam Toppers 2025</p>
                      <p className="nav-notif-desc">100% Pass Percentage with 42 students scoring above 95% in Class X &amp; XII.</p>
                      <button
                        onClick={() => {
                          setNotifOpen(false);
                          handleNav("academics", "board-results");
                        }}
                        className="nav-notif-cta"
                      >
                        View Results
                      </button>
                      <span className="nav-notif-time">Latest</span>
                    </div>
                  </li>
                  <li className="nav-notif-item">
                    <div className="nav-notif-icon nav-notif-icon--green">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="nav-notif-body">
                      <p className="nav-notif-title">CBSE SARAS Mandatory Public Disclosure</p>
                      <p className="nav-notif-desc">Updated affiliation and statutory certificates are publicly available.</p>
                      <button
                        onClick={() => {
                          setNotifOpen(false);
                          handleNav("about", "cbse-saras");
                        }}
                        className="nav-notif-cta"
                      >
                        View Disclosure
                      </button>
                      <span className="nav-notif-time">Verified</span>
                    </div>
                  </li>
                </ul>
                <div className="nav-notif-footer">
                  <button
                    onClick={() => {
                      setNotifOpen(false);
                      handleNav("circulars");
                    }}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--red)", fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    View all notices &amp; circulars →
                  </button>
                </div>
              </div>
            </div>

            {/* Search Icon Button */}
            <button
              className="nav-action-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search website"
              title="Search"
            >
              <i className="fas fa-search"></i>
            </button>

            {/* Deep Forest Green Apply Now Pill */}
            <button
              onClick={() => onOpenAdmissionModal()}
              className="btn-vedanta-apply"
              id="loginBtn"
              aria-label="Apply Now for Admissions"
            >
              <span>Apply Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>

            {/* Hamburger */}
            <div
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              id="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== PREMIUM MOBILE NAV DRAWER ========== */}
      <div
        className={`pmn-overlay ${mobileMenuOpen ? "show" : ""}`}
        id="mobileOverlay"
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <nav
        className={`pmn-panel ${mobileMenuOpen ? "open" : ""}`}
        id="mobileMenu"
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="pmn-header">
          <div className="pmn-brand">
            <div style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #e11d2e 0%, #b91625 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: "0.95rem",
              fontFamily: "'Poppins', sans-serif",
              flexShrink: 0
            }}>
              HA
            </div>
            <div className="pmn-brand-text">
              <span className="pmn-brand-name">Horizon Academy</span>
              <span className="pmn-brand-tagline" style={{ color: "var(--red)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.6rem", letterSpacing: 1 }}>
                Senior Secondary CBSE School
              </span>
            </div>
          </div>
          <button className="pmn-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="pmn-body">
          <ul className="pmn-list" role="list">
            <li className="pmn-item">
              <button onClick={() => handleNav("home")} className="pmn-link">
                <span className="pmn-icon"><i className="fas fa-home"></i></span>
                <span className="pmn-label">Home</span>
                <span className="pmn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
            </li>

            {/* About Accordion */}
            <li className={`pmn-item pmn-has-sub ${activeMobileAccordion === "about" ? "open" : ""}`}>
              <button
                className="pmn-link pmn-accordion-btn"
                onClick={() => toggleMobileAccordion("about")}
                aria-expanded={activeMobileAccordion === "about"}
              >
                <span className="pmn-icon"><i className="fas fa-university"></i></span>
                <span className="pmn-label">About</span>
                <span className="pmn-chevron"><i className={`fas fa-chevron-${activeMobileAccordion === "about" ? "up" : "down"}`}></i></span>
              </button>
              {activeMobileAccordion === "about" && (
                <ul className="pmn-sub" role="list">
                  <li><button onClick={() => handleNav("about", "legacy-heritage")} className="pmn-sub-link"><i className="fas fa-info-circle"></i> About Us</button></li>
                  <li><button onClick={() => handleNav("about", "chapter-foundation")} className="pmn-sub-link"><i className="fas fa-eye"></i> Vision</button></li>
                  <li><button onClick={() => handleNav("circulars", "circulars-archive")} className="pmn-sub-link"><i className="fas fa-newspaper"></i> News &amp; Events</button></li>

                  <li><button onClick={() => handleNav("facilities", "facilities-overview")} className="pmn-sub-link"><i className="fas fa-building"></i> Facilities</button></li>
                  <li><button onClick={() => handleNav("about", "chapter-leaders")} className="pmn-sub-link"><i className="fas fa-chalkboard-teacher"></i> Faculty</button></li>
                  <li><button onClick={() => handleNav("home", "desk-messages")} className="pmn-sub-link"><i className="fas fa-envelope-open-text"></i> Desk Messages</button></li>
                  <li><button onClick={() => handleNav("gallery", "gallery-grid")} className="pmn-sub-link"><i className="fas fa-images"></i> Gallery</button></li>
                </ul>
              )}
            </li>

            {/* Academics Accordion */}
            <li className={`pmn-item pmn-has-sub ${activeMobileAccordion === "academics" ? "open" : ""}`}>
              <button
                className="pmn-link pmn-accordion-btn"
                onClick={() => toggleMobileAccordion("academics")}
                aria-expanded={activeMobileAccordion === "academics"}
              >
                <span className="pmn-icon"><i className="fas fa-graduation-cap"></i></span>
                <span className="pmn-label">Academics</span>
                <span className="pmn-chevron"><i className={`fas fa-chevron-${activeMobileAccordion === "academics" ? "up" : "down"}`}></i></span>
              </button>
              {activeMobileAccordion === "academics" && (
                <ul className="pmn-sub" role="list">
                  <li><button onClick={() => handleNav("academics", "curriculum-streams")} className="pmn-sub-link"><i className="fas fa-book"></i> Streams &amp; Pedagogy</button></li>
                  <li><button onClick={() => handleNav("academics", "board-results")} className="pmn-sub-link"><i className="fas fa-award"></i> Board Results</button></li>
                  <li><button onClick={() => handleNav("academics", "faculty-spotlight")} className="pmn-sub-link"><i className="fas fa-user-tie"></i> Faculty Profiles</button></li>
                </ul>
              )}
            </li>

            <li className="pmn-item">
              <button onClick={() => handleNav("facilities")} className="pmn-link">
                <span className="pmn-icon"><i className="fas fa-building"></i></span>
                <span className="pmn-label">Campus</span>
                <span className="pmn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
            </li>

            {/* News & Events Accordion in Mobile Menu */}
            <li className={`pmn-item pmn-has-sub ${activeMobileAccordion === "circulars" ? "open" : ""}`}>
              <button
                className="pmn-link pmn-accordion-btn"
                onClick={() => toggleMobileAccordion("circulars")}
                aria-expanded={activeMobileAccordion === "circulars"}
              >
                <span className="pmn-icon"><i className="fas fa-calendar-alt"></i></span>
                <span className="pmn-label">News &amp; Events</span>
                <span className="pmn-chevron"><i className={`fas fa-chevron-${activeMobileAccordion === "circulars" ? "up" : "down"}`}></i></span>
              </button>
              {activeMobileAccordion === "circulars" && (
                <ul className="pmn-sub" role="list">
                  <li>
                    <button onClick={() => handleNav("circulars", "academic-calendar")} className="pmn-sub-link">
                      <i className="fas fa-calendar-check"></i> Academic Calendar 2026–27
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav("circulars", "school-milestones")} className="pmn-sub-link">
                      <i className="fas fa-flag"></i> Key School Milestones
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav("circulars", "circulars-archive")} className="pmn-sub-link">
                      <i className="fas fa-file-alt"></i> Digital Notice Archive
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav("circulars", "cal-events-list")} className="pmn-sub-link">
                      <i className="fas fa-clock"></i> Exams, Holidays &amp; Fests
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav("circulars", "cal-download-banner")} className="pmn-sub-link">
                      <i className="fas fa-download"></i> Download Calendar (PDF)
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="pmn-item">
              <button onClick={() => handleNav("admissions")} className="pmn-link">
                <span className="pmn-icon"><i className="fas fa-clipboard-list"></i></span>
                <span className="pmn-label">Admissions</span>
                <span className="pmn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
            </li>

            <li className="pmn-item">
              <button onClick={() => handleNav("contact")} className="pmn-link">
                <span className="pmn-icon"><i className="fas fa-envelope"></i></span>
                <span className="pmn-label">Contact</span>
                <span className="pmn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
            </li>

            {/* More Accordion in Mobile Menu */}
            <li className={`pmn-item pmn-has-sub ${activeMobileAccordion === "more" ? "open" : ""}`}>
              <button
                className="pmn-link pmn-accordion-btn"
                onClick={() => toggleMobileAccordion("more")}
                aria-expanded={activeMobileAccordion === "more"}
              >
                <span className="pmn-icon"><i className="fas fa-ellipsis-h"></i></span>
                <span className="pmn-label">More</span>
                <span className="pmn-chevron"><i className={`fas fa-chevron-${activeMobileAccordion === "more" ? "up" : "down"}`}></i></span>
              </button>
              {activeMobileAccordion === "more" && (
                <ul className="pmn-sub" role="list">
                  <li><a href="https://www.cbse.gov.in/" target="_blank" rel="noopener noreferrer" className="pmn-sub-link"><i className="fas fa-book"></i> CBSE Portal</a></li>
                  <li><a href="https://ncert.nic.in/" target="_blank" rel="noopener noreferrer" className="pmn-sub-link"><i className="fas fa-book-open"></i> NCERT Books</a></li>
                  <li><button onClick={() => handleNav("about", "cbse-saras")} className="pmn-sub-link"><i className="fas fa-file-contract"></i> Mandatory Disclosure (SARAS)</button></li>
                  <li><button onClick={() => handleNav("about", "chapter-leaders")} className="pmn-sub-link"><i className="fas fa-users"></i> Student Council &amp; Leaders</button></li>
                  <li><button onClick={() => handleNav("facilities", "co-curricular-clubs")} className="pmn-sub-link"><i className="fas fa-running"></i> Co-Curricular Activity</button></li>
                  <li><button onClick={() => handleNav("about", "chapter-values")} className="pmn-sub-link"><i className="fas fa-bed"></i> Hostel &amp; Residential Life</button></li>
                  <li><button onClick={() => handleNav("circulars", "circulars")} className="pmn-sub-link"><i className="fas fa-calendar-alt"></i> Academic Calendar</button></li>
                  <li><button onClick={() => handleNav("admissions", "tc-verification")} className="pmn-sub-link"><i className="fas fa-certificate"></i> TC Verification</button></li>
                  <li><button onClick={() => handleNav("contact", "tour-booking")} className="pmn-sub-link"><i className="fas fa-briefcase"></i> Careers &amp; Openings</button></li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="pmn-cta">
          <button onClick={() => { setMobileMenuOpen(false); onOpenAdmissionModal(); }} className="pmn-cta-primary">
            <i className="fas fa-pen-nib"></i> Apply Now 2026–27
          </button>
          <a href="tel:+911128904455" className="pmn-cta-secondary">
            <i className="fas fa-phone-alt"></i> Call Admissions (+91 11 2890 4455)
          </a>
        </div>

        <div className="pmn-footer">
          <div className="pmn-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
          <p className="pmn-footer-tagline">Horizon Academy, New Delhi — Est. 1998</p>
        </div>
      </nav>

      {/* ========== SEARCH MODAL OVERLAY ========== */}
      {searchOpen && (
        <div
          className="header-search-overlay"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search Horizon Academy website"
        >
          <div className="header-search-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="search-dialog-header">
              <i className="fas fa-search search-input-icon"></i>
              <input
                type="text"
                placeholder="Search academics, admissions, facilities, circulars..."
                className="search-dialog-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                className="search-dialog-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="search-dialog-results">
              <p className="search-quick-title">Quick Links</p>
              <div className="search-quick-tags">
                <button onClick={() => { setSearchOpen(false); handleNav("admissions", "admission-process"); }}>Admissions 2026–27</button>
                <button onClick={() => { setSearchOpen(false); handleNav("academics", "curriculum-streams"); }}>Science &amp; Commerce Streams</button>
                <button onClick={() => { setSearchOpen(false); handleNav("facilities", "facilities-overview"); }}>Campus &amp; ATL Labs</button>
                <button onClick={() => { setSearchOpen(false); handleNav("about", "cbse-saras"); }}>CBSE SARAS Disclosure</button>
                <button onClick={() => { setSearchOpen(false); handleNav("contact"); }}>Campus Tour &amp; Contact</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
