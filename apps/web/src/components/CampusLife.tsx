import { useState } from "react";

export default function CampusLife() {
  const [activeHouse, setActiveHouse] = useState<number>(0);

  const facilities = [
    {
      title: "Atal Tinkering Lab (ATL)",
      sub: "NITI Aayog Approved STEM Hub",
      desc: "Empowering young innovators with 3D printers, Arduino & Raspberry Pi microcontrollers, IoT sensor workstations, and drone fabrication equipment.",
      icon: "fas fa-microchip",
      badge: "Govt. Recognized",
      photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      specs: ["3D Printing & CAD", "Robotics & Microcontrollers", "Drone Technology"],
    },
    {
      title: "Senior Science Laboratories",
      sub: "Dedicated Physics, Chemistry & Biology",
      desc: "Spacious, high-precision laboratories equipped with individual student experiment benches, digital spectrometers, spectrophotometers, and certified safety showers.",
      icon: "fas fa-flask",
      badge: "CBSE Standard",
      photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
      specs: ["Independent Workstations", "Precision Glassware", "Digital Spectrometry"],
    },
    {
      title: "AI, Coding & Robotics Hub",
      sub: "Computer Science & Python Coding",
      desc: "Dual-monitor high-speed computing terminals running Python, SQL, Linux, and generative AI simulation toolkits backed by dedicated gigabit fiber.",
      icon: "fas fa-laptop-code",
      badge: "High-Tech",
      photo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      specs: ["Gigabit Fiber Internet", "Python & Machine Learning", "Full-Stack Web Labs"],
    },
    {
      title: "Central Knowledge Library",
      sub: "18,000+ Titles & Digital Archives",
      desc: "Sunlit silent reading galleries, CBSE board archive vaults, international research journals, Kindles, and high-speed digital cataloging terminals.",
      icon: "fas fa-book-reader",
      badge: "Resource Hub",
      photo: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80",
      specs: ["18,000+ Physical Books", "Digital Periodicals", "Silent Study Galleries"],
    },
    {
      title: "Multi-Sport Complex & Arena",
      sub: "Turf Ground & Indoor Courts",
      desc: "Floodlit synthetic athletic tracks, cricket practice nets, FIBA-certified basketball courts, badminton arena, and certified NIS national trainers.",
      icon: "fas fa-running",
      badge: "Multi-Sport",
      photo: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
      specs: ["All-Weather Turf", "FIBA Basketball Court", "Certified NIS Coaches"],
    },
    {
      title: "Auditorium & Performing Arts",
      sub: "800-Seat Acoustic Amphitheatre",
      desc: "Acoustically engineered soundproof auditorium featuring digital stage lighting, green rooms, and dedicated Hindustani and Western orchestra chambers.",
      icon: "fas fa-theater-masks",
      badge: "Cultural Hub",
      photo: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      specs: ["800-Seater Hall", "Acoustic Audio System", "Classical Music Chambers"],
    },
    {
      title: "Hygienic Cafeteria & Dining",
      sub: "Organic, Dietitian-Curated Cuisine",
      desc: "Spacious dining pavilion serving wholesome, nutrient-balanced vegetarian meals prepared in a mechanized stainless-steel kitchen with UV water filtration.",
      icon: "fas fa-utensils",
      badge: "Pure & Hygienic",
      photo: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=600&q=80",
      specs: ["UV Purified Water", "Dietitian Curated Menu", "Zero Junk Food Policy"],
    },
    {
      title: "Medical Infirmary & Care",
      sub: "Full-Time Resident Medical Officer",
      desc: "Air-conditioned 6-bed health facility with emergency oxygen, nebulizers, first-aid ambulance on standby, and immediate tie-up with nearby multi-specialty hospitals.",
      icon: "fas fa-heartbeat",
      badge: "24/7 Safety",
      photo: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
      specs: ["Resident MBBS Doctor", "Emergency Oxygen & SOS", "Hospital Network"],
    },
  ];

  const houses = [
    {
      name: "Raman House",
      color: "#dc2626",
      accentBg: "#fee2e2",
      motto: "Inquiry, Science & Truth",
      icon: "fas fa-fire",
      description: "Named after Nobel Laureate Sir C.V. Raman, fostering relentless scientific inquiry, analytical problem-solving, and empirical research thinking.",
      quote: "Science is a fusion of passion, discipline, and fearless observation.",
      shieldRank: "1st Place",
      points: "1,420 Points",
    },
    {
      name: "Tagore House",
      color: "#d97706",
      accentBg: "#fef3c7",
      motto: "Creativity, Harmony & Expression",
      icon: "fas fa-feather-alt",
      description: "Named after Rabindranath Tagore, inspiring poetic eloquence, classical performing arts, literary debate, and compassionate cultural leadership.",
      quote: "Where the mind is without fear and the head is held high.",
      shieldRank: "2nd Place",
      points: "1,385 Points",
    },
    {
      name: "Ashoka House",
      color: "#2563eb",
      accentBg: "#dbeafe",
      motto: "Integrity, Righteousness & Peace",
      icon: "fas fa-dharmachakra",
      description: "Embodying Emperor Ashoka's ideals of ethical justice, constitutional statesmanship, environmental empathy, and unwavering civic discipline.",
      quote: "True conquest is the conquest of righteousness and moral courage.",
      shieldRank: "3rd Place",
      points: "1,340 Points",
    },
    {
      name: "Shivaji House",
      color: "#059669",
      accentBg: "#d1fae5",
      motto: "Courage, Valour & Resilience",
      icon: "fas fa-shield-alt",
      description: "Drawing inspiration from Chhatrapati Shivaji Maharaj, developing unyielding resilience, athletic dominance, tactical grit, and team honor.",
      quote: "Freedom is a boon which everyone has the right to achieve through valour.",
      shieldRank: "4th Place",
      points: "1,310 Points",
    },
  ];

  return (
    <section className="section-facilities" id="facilities">
      <div className="container">
        {/* Header */}
        <div className="facilities-heading-block reveal-up">
          <span className="section-eyebrow">WORLD-CLASS INFRASTRUCTURE</span>
          <h2 className="section-title">
            Campus Life Built for <em>Every Dimension of Growth</em>
          </h2>
          <p className="section-subtitle">
            Spread across a sprawling, secure 10-acre campus, Horizon Academy offers
            contemporary learning environments engineered to make school life vibrant, safe, and inspiring.
          </p>
        </div>

        {/* Facilities Grid with Side-to-Center Alternating Animations */}
        <div className="facilities-grid" id="facilities-overview">
          {facilities.map((fac, idx) => (
            <article
              className={`facility-card ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              key={idx}
            >
              <div className="facility-img-wrap">
                <img src={fac.photo} alt={fac.title} loading="lazy" />
                <span className="facility-badge">
                  <i className="fas fa-check-circle" /> {fac.badge}
                </span>
                <div className="facility-icon-floating">
                  <i className={fac.icon} />
                </div>
              </div>

              <div className="facility-card-body">
                <span className="facility-sub">{fac.sub}</span>
                <h3 className="facility-title">{fac.title}</h3>
                <p className="facility-desc">{fac.desc}</p>
                <div className="facility-specs-chips">
                  {fac.specs.map((spec, i) => (
                    <span className="fac-spec-tag" key={i}>
                      <i className="fas fa-circle" /> {spec}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* House System Block */}
        <div className="house-system-block reveal-up" id="house-system">
          <div className="house-header-strip">
            <div className="reveal-left">
              <span className="section-eyebrow eyebrow-light">STUDENT DEMOCRACY &amp; LEADERSHIP</span>
              <h3 className="house-section-title">The Four Historic Houses of Horizon Academy</h3>
              <p className="house-section-sub">
                Every student belongs to one of four historic houses, nurturing lifelong camaraderie,
                sportsmanship, parliamentary debate tournaments, and democratic student council elections.
              </p>
            </div>
            <div className="house-pills-nav reveal-right" role="tablist" aria-label="House selector">
              {houses.map((house, idx) => (
                <button
                  key={idx}
                  className={`house-nav-btn ${activeHouse === idx ? "active" : ""}`}
                  onClick={() => setActiveHouse(idx)}
                  role="tab"
                  aria-selected={activeHouse === idx}
                >
                  <i className={house.icon} />
                  <span>{house.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="active-house-display"
            style={{ borderLeftColor: houses[activeHouse].color }}
          >
            <div className="house-info-wrap reveal-left">
              <span
                className="house-motto-tag"
                style={{
                  backgroundColor: houses[activeHouse].accentBg,
                  color: houses[activeHouse].color,
                  border: `1px solid ${houses[activeHouse].color}`,
                }}
              >
                <i className={houses[activeHouse].icon} /> Motto: {houses[activeHouse].motto}
              </span>
              <h4 className="active-house-name">{houses[activeHouse].name}</h4>
              <p className="active-house-desc">{houses[activeHouse].description}</p>
              <blockquote className="active-house-quote">
                "{houses[activeHouse].quote}"
              </blockquote>
            </div>

            <div className="house-points-preview reveal-right">
              <div className="house-trophy-icon" style={{ color: houses[activeHouse].color }}>
                <i className="fas fa-trophy" />
              </div>
              <span className="points-label">House Shield Standing (2025–26)</span>
              <strong className="points-tally">{houses[activeHouse].points}</strong>
              <span className="points-season">
                <i className="fas fa-medal" /> {houses[activeHouse].shieldRank} in Annual Cock-House Cup
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
