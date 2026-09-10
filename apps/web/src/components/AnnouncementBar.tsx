import { useState, useEffect } from "react";
import { PageId } from "./Header";

interface AnnouncementBarProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function AnnouncementBar({ onNavigate, onOpenAdmissionModal }: AnnouncementBarProps) {
  const announcements = [
    {
      kicker: "ADMISSIONS 2026–27",
      text: "Online Registration & Verification Open for Pre-Primary to Class IX & XI (Science, Commerce, Humanities)",
      actionLabel: "Explore Admissions",
      action: () => onOpenAdmissionModal(),
    },
    {
      kicker: "CBSE SARAS COMPLIANCE",
      text: "Mandatory Public Disclosures & Affiliation Grant (Affil No. 2130845 | School Code: 71204) Updated",
      actionLabel: "View SARAS Disclosures",
      action: () => onNavigate("about", "cbse-saras"),
    },
    {
      kicker: "ATL STEM INNOVATION",
      text: "12 Student Robotics Projects Selected for National NITI Aayog ATL Marathon 2026",
      actionLabel: "View Notice",
      action: () => onNavigate("circulars", "circulars-archive"),
    },
    {
      kicker: "ACADEMIC CALENDAR",
      text: "Comprehensive Term-Wise Datesheets & Pre-Board Examination Schedule Released",
      actionLabel: "View Calendar",
      action: () => onNavigate("circulars", "academic-calendar"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const current = announcements[currentIndex];

  return (
    <div className="announcement-strip" role="region" aria-label="Official Announcements">
      <div className="container announcement-inner">
        <div className="announcement-badge-wrap">
          <span className="announcement-pulse-dot" />
          <span className="announcement-kicker">{current.kicker}</span>
        </div>

        <div className="announcement-ticker-content" key={currentIndex}>
          <p className="announcement-text">{current.text}</p>
        </div>

        <div className="announcement-actions">
          <button
            onClick={current.action}
            className="announcement-action-btn"
            aria-label={`${current.actionLabel} for announcement`}
          >
            <span>{current.actionLabel}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <div className="announcement-dots">
            {announcements.map((_, idx) => (
              <button
                key={idx}
                className={`announcement-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to announcement ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
