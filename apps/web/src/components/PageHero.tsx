import React from "react";
import { PageId } from "./Header";

interface PageHeroProps {
  breadcrumbCurrent: string;
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  primaryCtaLabel?: string;
  onPrimaryCtaClick?: () => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbCurrent,
  onNavigate,
  kicker,
  title,
  subtitle,
  imageUrl,
  imageAlt = "Horizon Academy Academic Campus",
  primaryCtaLabel,
  onPrimaryCtaClick,
}) => {
  return (
    <section className="new-hero-hero page-new-hero" id="hero">
      {/* Full-bleed Cinematic Background Image */}
      <div className="new-hero-bg-wrap" aria-hidden="true">
        <img
          src={imageUrl || "/images/hero-campus.jpg"}
          alt={imageAlt}
          className="new-hero-bg-img"
          loading="eager"
          fetchPriority="high"
        />
        <div className="new-hero-gradient-overlay" />
        <div className="new-hero-sunset-glow" />
      </div>

      <div className="container new-hero-container">
        {/* Content Column */}
        <div className="new-hero-content-col">
          {/* Breadcrumb Navigation */}
          <nav className="page-hero-crumbs" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate("home")}
              className="page-hero-crumb-home"
              type="button"
            >
              <i className="fas fa-home" /> Home
            </button>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{breadcrumbCurrent}</span>
          </nav>

          {/* Golden Dash Tagline */}
          <div className="new-hero-tagline">
            <span className="tagline-dash">—</span>
            <span className="tagline-text">{kicker}</span>
          </div>

          {/* Regal Serif Headline */}
          <h1 className="new-hero-heading page-hero-title">
            {title}
          </h1>

          {/* Subtitle Description */}
          {subtitle && <p className="new-hero-desc">{subtitle}</p>}

          {/* Action CTAs */}
          <div className="new-hero-actions">
            {primaryCtaLabel && onPrimaryCtaClick ? (
              <button
                type="button"
                onClick={onPrimaryCtaClick}
                className="btn-new-explore"
              >
                <span>{primaryCtaLabel}</span>
                <i className="fas fa-arrow-right" />
              </button>
            ) : (
              <a href="#explore" className="btn-new-explore">
                <span>Explore Details</span>
                <i className="fas fa-arrow-right" />
              </a>
            )}

            <button
              type="button"
              onClick={() => onNavigate("admissions")}
              className="btn-new-story"
            >
              <span className="play-icon-bubble" aria-hidden="true">
                <i className="fas fa-graduation-cap" />
              </span>
              <span>Admissions 2026–27</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Trust & Excellence Badge */}
        <div className="new-hero-bottom-dock">
          <div className="page-hero-trust-badge">
            <span className="trust-badge-dot" />
            <span>Horizon Academy · CBSE Affiliated 10+2 (Code: 71204)</span>
          </div>

          <div className="new-hero-floating-card page-hero-floating-stat">
            <div className="floating-card-info">
              <span className="floating-card-tag">Excellence Legacy</span>
              <span className="floating-card-year">
                28+ Years <i className="fas fa-check-circle" style={{ color: "#78350F" }}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

