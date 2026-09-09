import { PageId } from "../components/Header";
import CampusLife from "../components/CampusLife";
import { PageHero } from "../components/PageHero";

interface CampusLifePageProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function CampusLifePage({ onNavigate, onOpenAdmissionModal }: CampusLifePageProps) {
  const clubs = [
    {
      name: "Robotics & AI Guild",
      category: "STEM & ATL Innovation",
      desc: "ATL-powered team designing Arduino & Raspberry Pi prototypes for national hackathons.",
      members: "85+ Active innovators",
      icon: "🤖",
    },
    {
      name: "Model United Nations (MUN)",
      category: "Diplomacy & Public Policy",
      desc: "Training in international diplomacy, parliamentary procedure, and global geopolitics.",
      members: "110+ Delegates",
      icon: "🌐",
    },
    {
      name: "Heritage & Environment Club",
      category: "Eco-Sustainability",
      desc: "Student-led tree plantation drives, organic campus gardens, and heritage walks across Delhi.",
      members: "95+ Green volunteers",
      icon: "🌱",
    },
    {
      name: "Editorial & Debating Society",
      category: "Oratory & Literature",
      desc: "Publishers of the quarterly school journal 'The Horizon Clarion' and inter-school oratory champs.",
      members: "60+ Writers & Orators",
      icon: "🎙️",
    },
    {
      name: "Symphony & Classical Dance Ensemble",
      category: "Performing Arts",
      desc: "Carnatic, Hindustani, Western instruments and Bharatnatyam training for annual showcases.",
      members: "130+ Artists",
      icon: "🎭",
    },
    {
      name: "Martial Arts & Taekwondo Academy",
      category: "Physical Fitness & NIS",
      desc: "Self-defense, black belt certifications, and state-level tournament representations.",
      members: "75+ Athletes",
      icon: "🥋",
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Campus Life"
        onNavigate={onNavigate}
        kicker="10-ACRE LUSH GREEN ENVIRONMENT · STATE-OF-THE-ART"
        title={<>Vibrant Campus Life & <span className="text-shimmer">World-Class Facilities</span></>}
        subtitle="Education flourishes when students are immersed in world-class laboratories, dynamic athletic arenas, inspiring creative studios, and a nurturing house community."
        imageUrl="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Sports Complex and Athletic Arena"
      />

      <CampusLife />

      <section className="section-clubs container" id="co-curricular-clubs">
        <div className="center-heading">
          <span className="section-eyebrow">PASSION BEYOND CLASSROOMS</span>
          <h2 className="section-title">Co-Curricular Societies & Student Clubs</h2>
          <p className="section-subtitle">
            Every Horizonite participates in at least one student society, cultivating teamwork,
            public speaking, and creative expression.
          </p>
        </div>

        <div className="clubs-grid">
          {clubs.map((club, idx) => (
            <div className="club-card" key={idx}>
              <div className="club-card-header">
                <span className="club-icon">{club.icon}</span>
                <span className="club-category">{club.category}</span>
              </div>
              <h3 className="club-name">{club.name}</h3>
              <p className="club-desc">{club.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-transport container" id="transport-fleet">
        <div className="transport-banner-card">
          <div className="transport-copy">
            <span className="section-eyebrow eyebrow-light">SAFETY FIRST</span>
            <h3 className="transport-title">100% Monitored & GPS-Tracked Safe Transport Fleet</h3>
            <p className="transport-desc">
              Horizon Academy operates 35+ air-conditioned buses traversing every major neighborhood
              and residential sector across Delhi/NCR. Equipped with speed limiters, CCTV surveillance,
              first-aid stations, female bus conductors, and a live mobile app for parents.
            </p>
            <div className="transport-features-strip">
              <span>✓ Live GPS Parent Tracking</span>
              <span>✓ Speed Governors (Max 40 km/h)</span>
              <span>✓ CCTV in Every Bus</span>
              <span>✓ Female Attendants Onboard</span>
            </div>
          </div>
          <div className="transport-action-box">
            <h4>Check Your Bus Route & Stop</h4>
            <p>Speak to our transport coordinator to check availability in your sector.</p>
            <button onClick={() => onNavigate("contact", "campus-location")} className="btn-hero-primary full-width">
              Enquire Bus Routes →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
