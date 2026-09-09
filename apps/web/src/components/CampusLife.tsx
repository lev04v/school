import { useState } from "react";

export default function CampusLife() {
  const [activeHouse, setActiveHouse] = useState<number>(0);

  const facilities = [
    {
      title: "Atal Tinkering Lab (ATL)",
      sub: "NITI Aayog Approved STEM Center",
      desc: "Equipped with 3D printers, IoT sensor workstations, robotics fabrication kits, and microcontroller programming setups.",
      icon: "⚡",
      badge: "Govt. Recognized",
    },
    {
      title: "Senior Science Laboratories",
      sub: "Physics, Chemistry & Biology",
      desc: "Individual experiment benches for Class 11 & 12 board practicals, digital calorimeters, spectrometers, and safety showers.",
      icon: "🔬",
      badge: "CBSE Standard",
    },
    {
      title: "AI & Informatics Practices Lab",
      sub: "Computer Science & Python Coding",
      desc: "Dual-monitor workstations, high-speed fiber internet, Linux & Windows environments, and data science simulation tools.",
      icon: "💻",
      badge: "High-Tech",
    },
    {
      title: "Central Knowledge Library",
      sub: "18,000+ Titles & Digital Archives",
      desc: "Quiet reading galleries, CBSE question banks, NCERT research materials, reference periodicals, and e-book stations.",
      icon: "📚",
      badge: "Resource Hub",
    },
    {
      title: "Sports & Athletic Arena",
      sub: "Turf Ground & Indoor Courts",
      desc: "Cricket practice nets, professional basketball courts, badminton courts, football turf, and certified NIS coaches.",
      icon: "⚽",
      badge: "Multi-Sport",
    },
    {
      title: "GPS-Tracked Safe Transport",
      sub: "35+ Fleet with CCTV & Attendants",
      desc: "Real-time parent mobile tracking, emergency SOS, automated speed limiters, and vetted drivers across all city routes.",
      icon: "🚌",
      badge: "100% Safe",
    },
  ];

  const houses = [
    {
      name: "Raman House",
      color: "#991b1b",
      motto: "Inquiry, Science & Truth",
      icon: "🔴",
      description: "Named after Nobel Laureate Sir C.V. Raman, fostering scientific temper, analytical debate, and innovative thinking.",
    },
    {
      name: "Tagore House",
      color: "#b45309",
      motto: "Creativity, Harmony & Expression",
      icon: "🟡",
      description: "Named after Rabindranath Tagore, inspiring literature, classical music, fine arts, and empathetic community service.",
    },
    {
      name: "Ashoka House",
      color: "#1e3a8a",
      motto: "Integrity, Righteousness & Peace",
      icon: "🔵",
      description: "Embodying Emperor Ashoka’s ideals of ethical justice, statesmanship, leadership, and unyielding discipline.",
    },
    {
      name: "Shivaji House",
      color: "#065f46",
      motto: "Courage, Valour & Resilience",
      icon: "🟢",
      description: "Drawing inspiration from Chhatrapati Shivaji Maharaj, developing resilience, sportsmanship, and fearless ambition.",
    },
  ];

  return (
    <section className="section-facilities" id="facilities">
      <div className="container">
        {/* Header */}
        <div className="facilities-heading-block">
          <span className="section-eyebrow">WORLD-CLASS INFRASTRUCTURE</span>
          <h2 className="section-title">
            Campus Life Built for <em>Every Dimension of Growth</em>
          </h2>
          <p className="section-subtitle">
            Spread across a sprawling, secure 10-acre campus, Horizon Academy offers
            contemporary learning environments engineered to make school life vibrant, safe, and inspiring.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid" id="facilities-overview">
          {facilities.map((fac, idx) => (
            <div className="facility-card" key={idx}>
              <div className="facility-card-top">
                <span className="facility-icon">{fac.icon}</span>
                <span className="facility-badge">{fac.badge}</span>
              </div>
              <h3 className="facility-title">{fac.title}</h3>
              <span className="facility-sub">{fac.sub}</span>
              <p className="facility-desc">{fac.desc}</p>
            </div>
          ))}
        </div>

        {/* House System Block */}
        <div className="house-system-block" id="house-system">
          <div className="house-header-strip">
            <div>
              <span className="section-eyebrow eyebrow-light">STUDENT LEADERSHIP</span>
              <h3 className="house-section-title">The Four Houses of Horizon Academy</h3>
              <p className="house-section-sub">
                Every student belongs to one of four historic houses, nurturing inter-house camaraderie,
                sportsmanship, debate tournaments, and democratic student council elections.
              </p>
            </div>
            <div className="house-pills-nav">
              {houses.map((house, idx) => (
                <button
                  key={idx}
                  className={`house-nav-btn ${activeHouse === idx ? "active" : ""}`}
                  onClick={() => setActiveHouse(idx)}
                >
                  <span>{house.icon}</span>
                  <span>{house.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="active-house-display" style={{ borderLeftColor: houses[activeHouse].color }}>
            <div className="house-info-wrap">
              <span className="house-motto-tag" style={{ backgroundColor: houses[activeHouse].color }}>
                Motto: {houses[activeHouse].motto}
              </span>
              <h4 className="active-house-name">{houses[activeHouse].name}</h4>
              <p className="active-house-desc">{houses[activeHouse].description}</p>
            </div>
            <div className="house-points-preview">
              <span className="points-label">Current House Shield Standing</span>
              <strong className="points-tally">Rank #{activeHouse + 1}</strong>
              <span className="points-season">Annual Championship 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
