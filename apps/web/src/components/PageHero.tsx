import React, { useState } from "react";
import { PageId } from "./Header";

interface PageHeroProps {
  breadcrumbCurrent: string;
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbCurrent,
  onNavigate,
  kicker,
  title,
  subtitle,
  imageUrl,
  imageAlt = "Horizon Academy Campus",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="page-hero-banner">
      {/* Cinematic eager image layer with smooth dissolve */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`page-hero-bg-img ${isLoaded ? "is-loaded" : ""}`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="page-hero-overlay" />

      <div className="container page-hero-content">
        <div className="breadcrumb-nav">
          <button onClick={() => onNavigate("home")} className="breadcrumb-link">
            Home
          </button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{breadcrumbCurrent}</span>
        </div>
        <span className="page-hero-kicker">{kicker}</span>
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
    </div>
  );
};
