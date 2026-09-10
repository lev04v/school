import { useState, useRef } from "react";

export default function JourneyExplorer() {
  const [activeEra, setActiveEra] = useState<number>(0);
  const eraDetailsRef = useRef<HTMLDivElement>(null);

  const handleSelectEra = (idx: number) => {
    setActiveEra(idx);
    setTimeout(() => {
      if (eraDetailsRef.current) {
        const navOffset = 90;
        const elementPosition = eraDetailsRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 60);
  };

  const eras = [
    {
      eraNumber: "01",
      icon: "fas fa-seedling",
      year: "1998–2003",
      tagline: "The Genesis & Foundational Ethos",
      title: "From a Profound Vision to 120 Pioneering Scholars",
      color: "#e11d48",
      colorLight: "#ffe4e6",
      gradient: "linear-gradient(135deg, #fb7185 0%, #e11d48 100%)",
      summary:
        "Established under the aegis of the Horizon Educational Trust by revered educationist Prof. H. S. Khurana. Starting with a modest enclave and an inaugural batch of 120 bright pupils, the institution was founded on the timeless Sanskrit maxim 'Vidya Dadati Vinayam' (Knowledge Bestows Humility).",
      photo: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
      photoCaption: "Inaugural Campus Enclave, New Delhi (Est. 1998)",
      statBadge: "120 Founding Scholars",
      statSub: "Nursery to Class V Inception",
      milestones: [
        "Formal registration under Societies Registration Act XXI of 1860.",
        "Inception of Montessori-inspired foundational pedagogy and values-based curriculum.",
        "Establishment of the first school library and primary activity studios.",
      ],
      quote: "A true school does not merely train minds to pass examinations; it awakens souls to seek truth with humility.",
      speaker: "Prof. H. S. Khurana, Founding Chairman",
    },
    {
      eraNumber: "02",
      icon: "fas fa-graduation-cap",
      year: "2004–2011",
      tagline: "Academic Distinction & Board Laurels",
      title: "CBSE Senior Secondary Upgradation (10+2)",
      color: "#0284c7",
      colorLight: "#e0f2fe",
      gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
      summary:
        "A transformative chapter marked by composite affiliation from the Central Board of Secondary Education (CBSE), New Delhi. Our inaugural Class 10 and 12 batches registered an unbroken 100% First-Division result, propelling Horizon Academy into the league of Delhi NCR's top academic institutions.",
      photo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      photoCaption: "First CBSE Senior Secondary Graduation Ceremony",
      statBadge: "100% Board First-Division",
      statSub: "All-India CBSE AISSE Distinction",
      milestones: [
        "Full composite CBSE Senior Secondary affiliation granted (Affiliation No. 2130845).",
        "Introduction of specialized 10+2 Science (PCM/PCB) and Commerce streams.",
        "Formation of the registered Horizon Alumni Association (HORIZON-OBA).",
      ],
      quote: "Our first board batch proved that uncompromising academic discipline combined with personalized mentoring yields extraordinary results.",
      speaker: "Dr. Rajeshwari Swaminathan, Principal",
    },
    {
      eraNumber: "03",
      icon: "fas fa-landmark",
      year: "2012–2017",
      tagline: "Infrastructure & Athletic Excellence",
      title: "Inauguration of the 10-Acre Eco-Campus Enclave",
      color: "#059669",
      colorLight: "#d1fae5",
      gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
      summary:
        "Responding to burgeoning community trust, the trust acquired 10 acres of pristine institutional land in Sector 14. The new campus was inaugurated featuring international standard athletic tracks, cricket turf nets, Olympic-sized indoor arenas, and state-of-the-art residential boarding wings.",
      photo: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      photoCaption: "State-of-the-Art Sports Arena & Residential Hostels",
      statBadge: "10-Acre Master Campus",
      statSub: "40,468 Sq. Mtrs Dedicated Land",
      milestones: [
        "Inauguration of 800-seat acoustic multi-purpose auditorium and amphitheatre.",
        "Air-conditioned residential boarding wings for boys and girls from Class IV onwards.",
        "Commissioning of dedicated Physics, Chemistry, Biology & Biotech laboratories.",
      ],
      quote: "Physical vigor and moral character are the bedrock upon which high intellect is sustained.",
      speaker: "Shri S. K. Narayan, IAS (Retd.), President",
    },
    {
      eraNumber: "04",
      icon: "fas fa-microchip",
      year: "2018–2023",
      tagline: "STEM & Tech Innovation Frontier",
      title: "Atal Tinkering Lab & Hands-On Robotics Boom",
      color: "#ea580c",
      colorLight: "#ffedd5",
      gradient: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
      summary:
        "Selected by NITI Aayog, Government of India, for the prestigious Atal Innovation Mission grant. Horizon Academy set up a premier Atal Tinkering Lab (ATL), equipping young scholars with 3D printers, IoT workstations, Arduino microcontrollers, and artificial intelligence simulation toolkits.",
      photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      photoCaption: "NITI Aayog ATL STEM Robotics Lab Workstations",
      statBadge: "NITI Aayog ATL Grant",
      statSub: "14 National Marathon Finalists",
      milestones: [
        "Sanction of official NITI Aayog ATL grant for grassroots student innovation.",
        "Launch of the Horizon Model United Nations (HMUN) with 400+ regional delegates.",
        "100% digital transformation with interactive smart touch boards across all 62 classrooms.",
      ],
      quote: "When students are given tools to invent rather than just memorize, they become leaders of the technological revolution.",
      speaker: "Dr. Vikramaditya Sharma, Head of ATL Innovation",
    },
    {
      eraNumber: "05",
      icon: "fas fa-rocket",
      year: "2024–Present",
      tagline: "Global Benchmarks & Future-Ready Horizons",
      title: "Over 14,000 Global Alumni Leading the World",
      color: "#7c3aed",
      colorLight: "#ede9fe",
      gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
      summary:
        "Today, Horizon Academy stands tall as an educational lodestar with over 3,200 active scholars, 120+ specialist faculty, and more than 14,000 alumni excelling in IITs, AIIMS, Indian Civil Services, and premier multinational organizations worldwide.",
      photo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      photoCaption: "Present-Day Horizon Academy Heritage Quadrangle",
      statBadge: "14,000+ Global Alumni",
      statSub: "IIT, AIIMS & Civil Services Benchmark",
      milestones: [
        "Unbroken CBSE Board 100% pass record with 52+ students scoring 90%+ aggregate.",
        "AI & Python coding curriculum integrated from Class VI under NEP 2020 alignment.",
        "State environmental excellence award for zero-single-use-plastic solar-powered campus.",
      ],
      quote: "Nearly three decades of excellence have only strengthened our dedication to shaping compassionate, fearless global minds.",
      speaker: "Horizon Academic Council",
    },
  ];

  const current = eras[activeEra];

  // SVG Geometry for 3D Semi-Circular Radial Infographic
  const cx = 450;
  const cy = 410;
  const rOut = 370;
  const rIn = 200;
  const rMid = (rOut + rIn) / 2; // 285

  const rad = (deg: number) => (deg * Math.PI) / 180;

  const getArcD = (startDeg: number, endDeg: number) => {
    const sRad = rad(startDeg);
    const eRad = rad(endDeg);

    const x1_out = cx + rOut * Math.cos(sRad);
    const y1_out = cy - rOut * Math.sin(sRad);

    const x2_out = cx + rOut * Math.cos(eRad);
    const y2_out = cy - rOut * Math.sin(eRad);

    const x2_in = cx + rIn * Math.cos(eRad);
    const y2_in = cy - rIn * Math.sin(eRad);

    const x1_in = cx + rIn * Math.cos(sRad);
    const y1_in = cy - rIn * Math.sin(sRad);

    return `M ${x1_out} ${y1_out} A ${rOut} ${rOut} 0 0 1 ${x2_out} ${y2_out} L ${x2_in} ${y2_in} A ${rIn} ${rIn} 0 0 0 ${x1_in} ${y1_in} Z`;
  };

  return (
    <section className="journey-chrono-section" id="chapter-journey">
      <div className="container">
        {/* Header */}
        <div className="journey-head-wrap reveal-up">
          <div className="journey-head-text">
            <span className="section-eyebrow">CHRONICLES OF EXCELLENCE (1998 – PRESENT)</span>
            <h2 className="journey-main-title">
              Our Journey: <em>Nearly Three Decades</em> of Distinction
            </h2>
            <p className="journey-main-desc">
              Explore the five foundational eras that shaped Horizon Academy from a modest 1998 inception into an all-India CBSE lodestar. Click on any segment to navigate the milestones.
            </p>
          </div>
        </div>

        {/* 3D Radial Arc Infographic Section */}
        <div className="radial-timeline-infographic-wrap reveal-up">
          <div className="radial-infographic-stage">
            {/* Top Badge Title */}
            <div className="radial-infographic-header">
              <span className="radial-infographic-tag">
                <i className="fas fa-chart-pie" /> 3D TIMELINE INFOGRAPHIC HORIZON
              </span>
              <div className="radial-nav-pills">
                {eras.map((era, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`radial-chip-btn ${activeEra === idx ? "is-active" : ""}`}
                    style={{
                      borderColor: activeEra === idx ? era.color : undefined,
                      color: activeEra === idx ? era.color : undefined,
                    }}
                    onClick={() => handleSelectEra(idx)}
                  >
                    <span className="chip-dot" style={{ background: era.color }} />
                    <strong>{era.year}</strong>
                  </button>
                ))}
              </div>
            </div>

            {/* The Semi-Circular Infographic Wheel SVG */}
            <div className="radial-wheel-svg-container">
              <svg
                viewBox="0 0 900 440"
                className="radial-arc-svg"
                role="img"
                aria-label="3D Timeline Infographics Radial Arc"
              >
                <defs>
                  {/* Segment Gradients */}
                  <linearGradient id="seg-grad-0" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                  <linearGradient id="seg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                  <linearGradient id="seg-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="seg-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="seg-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>

                  {/* 3D Drop Shadow & Glow */}
                  <filter id="arc-drop-shadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.18" floodColor="#0f172a" />
                  </filter>
                  <filter id="active-wedge-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="16" floodOpacity="0.45" floodColor="#ffffff" />
                  </filter>
                </defs>

                {/* Outer Ambient Arc Glow Ring */}
                <path
                  d={`M ${cx - rOut - 10} ${cy} A ${rOut + 10} ${rOut + 10} 0 0 1 ${cx + rOut + 10} ${cy}`}
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3"
                  strokeDasharray="6 8"
                  opacity="0.7"
                />

                {/* Render the 5 Radial Wedges */}
                {eras.map((era, idx) => {
                  const startDeg = 180 - idx * 36;
                  const endDeg = 180 - (idx + 1) * 36;
                  const midDeg = (startDeg + endDeg) / 2;
                  const isActive = activeEra === idx;

                  const pathD = getArcD(startDeg, endDeg);

                  // Icon Coordinates (Center of Wedge)
                  const iconX = cx + rMid * Math.cos(rad(midDeg));
                  const iconY = cy - rMid * Math.sin(rad(midDeg));

                  // Rim Label Coordinates (Near outer boundary)
                  const rimX = cx + (rOut - 30) * Math.cos(rad(midDeg));
                  const rimY = cy - (rOut - 30) * Math.sin(rad(midDeg));

                  // Callout Pointer Lines
                  const pStartX = cx + rOut * Math.cos(rad(midDeg));
                  const pStartY = cy - rOut * Math.sin(rad(midDeg));
                  const pEndX = cx + (rOut + 30) * Math.cos(rad(midDeg));
                  const pEndY = cy - (rOut + 30) * Math.sin(rad(midDeg));

                  return (
                    <g
                      key={idx}
                      className={`radial-slice-group ${isActive ? "is-active" : ""}`}
                      onClick={() => handleSelectEra(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${era.year}`}
                    >
                      {/* Wedge Segment */}
                      <path
                        d={pathD}
                        fill={`url(#seg-grad-${idx})`}
                        stroke="#ffffff"
                        strokeWidth={isActive ? 6 : 4}
                        filter={isActive ? "url(#active-wedge-glow)" : "url(#arc-drop-shadow)"}
                        className="radial-wedge-path"
                        style={{
                          transformOrigin: `${cx}px ${cy}px`,
                          cursor: "pointer",
                        }}
                      />

                      {/* Outward Pointer Line */}
                      <line
                        x1={pStartX}
                        y1={pStartY}
                        x2={pEndX}
                        y2={pEndY}
                        stroke={era.color}
                        strokeWidth={isActive ? 3 : 2}
                        strokeDasharray={isActive ? "none" : "3 3"}
                        className="radial-pointer-line"
                      />
                      <circle
                        cx={pEndX}
                        cy={pEndY}
                        r={isActive ? 6 : 4}
                        fill={era.color}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />

                      {/* Year Label along the Arc Rim */}
                      <text
                        x={rimX}
                        y={rimY}
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="800"
                        letterSpacing="0.6"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="radial-rim-year"
                      >
                        {era.year}
                      </text>

                      {/* 3D Circular Icon Orb inside the Wedge */}
                      <circle
                        cx={iconX}
                        cy={iconY}
                        r={isActive ? 30 : 25}
                        fill="#ffffff"
                        stroke={era.color}
                        strokeWidth={isActive ? 4 : 2.5}
                        className="radial-icon-circle"
                        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))"
                      />
                      {isActive && (
                        <circle
                          cx={iconX}
                          cy={iconY}
                          r={37}
                          fill="none"
                          stroke={era.color}
                          strokeWidth="2"
                          opacity="0.8"
                          className="radial-icon-pulse-ring"
                        />
                      )}

                      {/* FontAwesome Icon via SVG foreignObject */}
                      <foreignObject
                        x={iconX - 16}
                        y={iconY - 16}
                        width="32"
                        height="32"
                        className="radial-icon-fo"
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: era.color,
                            fontSize: isActive ? "1.15rem" : "0.95rem",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <i className={era.icon} />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* Inner Cutout White Semi-Circle Hub */}
                <path
                  d={`M ${cx - rIn + 6} ${cy} A ${rIn - 6} ${rIn - 6} 0 0 1 ${cx + rIn - 6} ${cy} Z`}
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  filter="url(#arc-drop-shadow)"
                />

                {/* Center Hub Inner Content */}
                <text
                  x={cx}
                  y={cy - 120}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="10"
                  fontWeight="800"
                  letterSpacing="1.2"
                >
                  ERA {current.eraNumber} OF 05
                </text>
                <text
                  x={cx}
                  y={cy - 85}
                  textAnchor="middle"
                  fill={current.color}
                  fontSize="24"
                  fontWeight="900"
                  fontFamily="'Poppins', sans-serif"
                >
                  {current.year}
                </text>
                <text
                  x={cx}
                  y={cy - 55}
                  textAnchor="middle"
                  fill="#475569"
                  fontSize="12"
                  fontWeight="600"
                >
                  {current.statBadge}
                </text>
                <text
                  x={cx}
                  y={cy - 30}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="10"
                  fontWeight="500"
                >
                  (Click any segment to view details)
                </text>
              </svg>
            </div>
          </div>

          {/* Active Era Feature Card */}
          <div className="active-era-card" ref={eraDetailsRef} id="active-era-details" key={activeEra}>
            {/* Left Copy Column */}
            <div className="era-copy-col reveal-left">
              <div className="era-badge-strip">
                <span
                  className="era-tagline-chip"
                  style={{ color: current.color, borderColor: `${current.color}35`, background: current.colorLight }}
                >
                  <i className={current.icon} /> {current.tagline}
                </span>
                <span className="era-counter-chip">
                  Era 0{activeEra + 1} of 0{eras.length}
                </span>
              </div>

              <h3 className="era-title">{current.title}</h3>
              <p className="era-summary">{current.summary}</p>

              {/* Milestone Checklist */}
              <div className="era-milestones-box">
                <h4 className="era-box-heading">
                  <i className="fas fa-check-circle" style={{ color: current.color }} /> Significant Milestones Achieved:
                </h4>
                <ul className="era-milestones-list">
                  {current.milestones.map((m, i) => (
                    <li key={i}>
                      <i className="fas fa-arrow-right" style={{ color: current.color }} />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legacy Quote */}
              <blockquote className="era-quote">
                <p>"{current.quote}"</p>
                <cite>— {current.speaker}</cite>
              </blockquote>

              {/* Quick Navigation Controls */}
              <div className="era-nav-controls">
                <button
                  type="button"
                  className="btn-era-nav prev"
                  disabled={activeEra === 0}
                  onClick={() => handleSelectEra(Math.max(0, activeEra - 1))}
                >
                  <i className="fas fa-chevron-left" /> Previous Era
                </button>
                <button
                  type="button"
                  className="btn-era-nav next"
                  disabled={activeEra === eras.length - 1}
                  onClick={() => handleSelectEra(Math.min(eras.length - 1, activeEra + 1))}
                  style={{ background: current.color, borderColor: current.color }}
                >
                  Next Era <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="era-visual-col reveal-right">
              <div className="era-photo-frame">
                <img src={current.photo} alt={current.title} loading="lazy" />
                <div className="era-photo-overlay">
                  <span className="era-photo-caption">
                    <i className="fas fa-camera" /> {current.photoCaption}
                  </span>
                </div>
                <div
                  className="era-year-badge-floating"
                  style={{ background: current.gradient }}
                >
                  <span>{current.year}</span>
                </div>
              </div>

              <div className="era-stat-card">
                <div
                  className="stat-icon-wrap"
                  style={{ background: current.colorLight, color: current.color }}
                >
                  <i className={current.icon} />
                </div>
                <div className="stat-copy">
                  <strong className="stat-highlight">{current.statBadge}</strong>
                  <span className="stat-subtext">{current.statSub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
