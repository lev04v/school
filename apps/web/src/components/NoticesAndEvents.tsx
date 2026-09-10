import { useState } from "react";

export interface NoticeItem {
  id: number;
  date: string;
  day: string;
  month: string;
  year: string;
  tag: string;
  category: "all" | "admissions" | "cbse" | "academic" | "stem" | "events";
  title: string;
  snippet: string;
  urgent: boolean;
  ref: string;
  audience: string;
  issuedBy: string;
  fileSize: string;
  points: string[];
}

export interface EventItem {
  id: number;
  day: string;
  month: string;
  year: string;
  tag: string;
  title: string;
  time: string;
  venue: string;
  desc: string;
  audience: string;
}

interface NoticesAndEventsProps {
  onNavigateToArchive?: () => void;
  onNavigateToCalendar?: () => void;
}

export default function NoticesAndEvents({
  onNavigateToArchive,
  onNavigateToCalendar,
}: NoticesAndEventsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeNoticeModal, setActiveNoticeModal] = useState<NoticeItem | null>(null);
  const [activeEventModal, setActiveEventModal] = useState<EventItem | null>(null);

  const notices: NoticeItem[] = [
    {
      id: 1,
      date: "04 Oct 2026",
      day: "04",
      month: "OCT",
      year: "2026",
      tag: "Admissions",
      category: "admissions",
      title: "Online Registration Open for Session 2026-27 (Nursery to Class IX & XI 10+2 Streams)",
      snippet: "Admission portal is now live with online form submission, entrance assessment syllabus, and stream seat matrices for Science, Commerce, and Humanities.",
      urgent: true,
      ref: "HA/ADM/26-27/01",
      audience: "Prospective Parents & Students",
      issuedBy: "Office of the Admissions Directorate",
      fileSize: "PDF · 380 KB",
      points: [
        "Online application window active from 05 October 2026 to 25 November 2026.",
        "Interactive screening & baseline diagnostic test for Classes I to IX scheduled in batches.",
        "Direct admission for Class XI board merit toppers scoring 90%+ in CBSE Pre-Boards.",
        "Detailed prospectus, fee breakdown, and scholarship criteria accessible via parent ERP.",
      ],
    },
    {
      id: 2,
      date: "28 Sep 2026",
      day: "28",
      month: "SEP",
      year: "2026",
      tag: "CBSE Board",
      category: "cbse",
      title: "CBSE AISSE & AISSCE Class 10/12 Board Practical Exam Schedule and Roll Number List",
      snippet: "Official CBSE controller directive outlining external examiner appointments, practical examination datesheets, and internal assessment upload deadlines.",
      urgent: false,
      ref: "CBSE/COORD/2026/18",
      audience: "Class X & XII Candidates",
      issuedBy: "CBSE Coordinator & Examination Controller",
      fileSize: "PDF · 520 KB",
      points: [
        "Physics, Chemistry, Biology, and Computer Science practicals commence from 16 November 2026.",
        "Students must present duly signed laboratory portfolios and project journals for external viva voce.",
        "CBSE Roll Numbers and examination hall admit cards available on student dashboard.",
      ],
    },
    {
      id: 3,
      date: "20 Sep 2026",
      day: "20",
      month: "SEP",
      year: "2026",
      tag: "Academic & PTM",
      category: "academic",
      title: "Parent-Teacher Meeting (PTM) for Term 1 Performance Review & Remedial Blueprint",
      snippet: "One-on-one parent interaction to discuss Half-Yearly answer scripts, term progress reports, attendance records, and personalized remedial session allotments.",
      urgent: false,
      ref: "HA/PTM/2026/04",
      audience: "Parents of Nursery to Class XII",
      issuedBy: "Academic Council & Dean of Studies",
      fileSize: "PDF · 240 KB",
      points: [
        "Staggered slot timings from 08:30 AM to 01:30 PM to avoid classroom congestion.",
        "Parents can book their preferred time slot via the School Mobile App until Thursday.",
        "Subject matter teachers will present term progress portfolios and remedial roadmaps.",
      ],
    },
    {
      id: 4,
      date: "12 Sep 2026",
      day: "12",
      month: "SEP",
      year: "2026",
      tag: "ATL Innovation",
      category: "stem",
      title: "Selection of 12 Student Robotics Projects for National NITI Aayog ATL Marathon",
      snippet: "Twelve innovative IoT, agricultural robotics, and AI vision prototypes developed at our Atal Tinkering Lab chosen for the prestigious national grand finale.",
      urgent: false,
      ref: "HA/ATL/INNOV/09",
      audience: "Classes VI to XII STEM Teams",
      issuedBy: "Atal Tinkering Lab Mentor Committee",
      fileSize: "PDF · 410 KB",
      points: [
        "Prototyping equipment and component grant sanctioned for all twelve student teams.",
        "Weekly mentoring clinic hosted by IIT Patna research faculty every Saturday afternoon.",
        "Working models will be displayed at the upcoming Inter-School ATL Conclave.",
      ],
    },
    {
      id: 5,
      date: "02 Sep 2026",
      day: "02",
      month: "SEP",
      year: "2026",
      tag: "Co-Curricular",
      category: "events",
      title: "Inter-House Bilingual Debate & Youth Parliament Competitions for Classes VIII to XII",
      snippet: "Annual bilingual parliamentary debate on digital ethics and environmental sustainability with inter-house rolling trophies and individual speaker awards.",
      urgent: false,
      ref: "HA/CCA/2026/08",
      audience: "Classes VIII to XII House Delegates",
      issuedBy: "Department of Co-Curricular Activities",
      fileSize: "PDF · 190 KB",
      points: [
        "Preliminary house selections conclude by 10 October 2026.",
        "Bilingual format (English and Hindi sessions) with 5-minute motion speeches and rebuttal round.",
        "Chief Guest: Eminent literary scholar and former Vice-Chancellor.",
      ],
    },
  ];

  const events: EventItem[] = [
    {
      id: 1,
      day: "18",
      month: "OCT",
      year: "2026",
      tag: "STEM Conclave",
      title: "Inter-School ATL Robotics & STEM Conclave",
      time: "09:30 AM – 03:00 PM",
      venue: "Horizon Raman Auditorium & ATL Labs",
      desc: "Over 25 regional CBSE schools participating in AI, automated drone navigation, and renewable energy prototypes.",
      audience: "Open to Participating Schools & Parents",
    },
    {
      id: 2,
      day: "25",
      month: "OCT",
      year: "2026",
      tag: "Career Guidance",
      title: "Class 10+2 Stream & Career Orientation Workshop",
      time: "10:00 AM – 01:30 PM",
      venue: "School Conference Hall & Live Stream",
      desc: "Expert panel of IITians, Doctors, Chartered Accountants, and Senior Counselors guiding Class X parents on stream selection.",
      audience: "Parents & Students of Class X & XI",
    },
    {
      id: 3,
      day: "08",
      month: "NOV",
      year: "2026",
      tag: "Cultural Fest",
      title: "Annual Cultural Fest — 'Tarang 2026'",
      time: "04:30 PM – 08:30 PM",
      venue: "Open Air Amphitheatre, Campus Turf",
      desc: "Celebration of Indian classical music, Sanskrit dramatics, contemporary choreography, and felicitation of CBSE academic toppers.",
      audience: "Horizon Academy Community & Guests",
    },
    {
      id: 4,
      day: "14",
      month: "NOV",
      year: "2026",
      tag: "Sports & Fest",
      title: "Children’s Day & Inter-House Athletic Meet",
      time: "08:30 AM – 02:00 PM",
      venue: "Horizon Sports Complex & Turf Ground",
      desc: "Track & field heats, 4x100m relay, March-Past contingent inspection, and festive cultural performances by faculty.",
      audience: "All Students, Parents & Alumni",
    },
  ];

  const filteredNotices = notices.filter((n) => {
    const matchesCat = selectedCategory === "all" || n.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      n.title.toLowerCase().includes(q) ||
      n.ref.toLowerCase().includes(q) ||
      n.snippet.toLowerCase().includes(q) ||
      n.tag.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const handleDownloadNotice = (notice: NoticeItem) => {
    alert(`Downloading official circular: "${notice.title}" (${notice.ref}). PDF document downloaded successfully.`);
  };

  return (
    <section className="section-notices-events" id="circulars">
      <div className="container">
        <div className="notices-events-grid">
          {/* =========================================================================
              LEFT COLUMN: OFFICIAL CBSE NOTICE BOARD
              ========================================================================= */}
          <div className="notices-column reveal-left">
            {/* Header with Title and CBSE Stamp */}
            <div className="nb-header-block">
              <div>
                <span className="nb-eyebrow">OFFICIAL CBSE NOTIFICATIONS</span>
                <h2 className="nb-main-title">School Notice Board</h2>
              </div>
              <div className="nb-badge-stamp">
                <span className="nb-stamp-pulse" />
                <span className="nb-stamp-text">CBSE BULLETIN</span>
              </div>
            </div>

            {/* Notice Board Card */}
            <div className="nb-container-card">
              {/* Top Bar with Live Indicator & Session */}
              <div className="nb-top-statusbar">
                <div className="nb-status-live">
                  <span className="nb-live-dot" />
                  <span className="nb-live-text">Live Administrative Notices</span>
                  <span className="nb-count-pill">{filteredNotices.length} Active</span>
                </div>
                <div className="nb-session-pill">
                  <i className="fas fa-university" />
                  <span>Session 2026–27</span>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="nb-filters-row">
                <div className="nb-category-pills" role="tablist" aria-label="Filter notices by department">
                  <button
                    type="button"
                    className={`nb-cat-btn ${selectedCategory === "all" ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory("all")}
                  >
                    All ({notices.length})
                  </button>
                  <button
                    type="button"
                    className={`nb-cat-btn cat-adm ${selectedCategory === "admissions" ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory("admissions")}
                  >
                    Admissions
                  </button>
                  <button
                    type="button"
                    className={`nb-cat-btn cat-cbse ${selectedCategory === "cbse" ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory("cbse")}
                  >
                    CBSE Board
                  </button>
                  <button
                    type="button"
                    className={`nb-cat-btn cat-acad ${selectedCategory === "academic" ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory("academic")}
                  >
                    Academic &amp; PTM
                  </button>
                  <button
                    type="button"
                    className={`nb-cat-btn cat-stem ${selectedCategory === "stem" ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory("stem")}
                  >
                    ATL &amp; STEM
                  </button>
                </div>

                <div className="nb-search-wrap">
                  <i className="fas fa-search nb-search-icon" />
                  <input
                    type="text"
                    className="nb-search-input"
                    placeholder="Search notice, ref no..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search notices"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="nb-search-clear"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              {/* Notices List */}
              <div className="nb-notices-feed" role="feed" aria-label="Official school notices list">
                {filteredNotices.length === 0 ? (
                  <div className="nb-empty-state">
                    <i className="fas fa-folder-open nb-empty-icon" />
                    <h4>No Notices Found</h4>
                    <p>No circulars match your current filter or search criteria.</p>
                    <button
                      type="button"
                      className="nb-reset-btn"
                      onClick={() => {
                        setSelectedCategory("all");
                        setSearchQuery("");
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  filteredNotices.map((notice) => (
                    <article
                      className={`nb-entry-card ${notice.urgent ? "is-urgent" : ""} cat-border-${notice.category}`}
                      key={notice.id}
                    >
                      {/* Left Date Column */}
                      <div className="nb-entry-dateblock">
                        <span className="nb-edb-day">{notice.day}</span>
                        <span className="nb-edb-month">{notice.month}</span>
                        <span className="nb-edb-year">{notice.year}</span>
                      </div>

                      {/* Main Entry Content */}
                      <div className="nb-entry-main">
                        {/* Meta strip: Tag, Ref, Urgent Badge */}
                        <div className="nb-entry-metastrip">
                          <span className={`nb-pill-tag tag-${notice.category}`}>
                            {notice.tag}
                          </span>
                          <span className="nb-pill-ref">
                            <i className="fas fa-file-alt" />
                            {notice.ref}
                          </span>
                          {notice.urgent && (
                            <span className="nb-pill-urgent">
                              <span className="nb-urgent-pulse" />
                              URGENT
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="nb-entry-headline">
                          <button
                            type="button"
                            className="nb-headline-btn"
                            onClick={() => setActiveNoticeModal(notice)}
                          >
                            {notice.title}
                          </button>
                        </h3>

                        {/* Snippet / Description */}
                        <p className="nb-entry-snippet">{notice.snippet}</p>

                        {/* Audience & Action Row */}
                        <div className="nb-entry-footrow">
                          <div className="nb-foot-audience">
                            <i className="fas fa-users" />
                            <span>{notice.audience}</span>
                          </div>

                          <div className="nb-foot-actions">
                            <button
                              type="button"
                              className="nb-btn-view"
                              onClick={() => setActiveNoticeModal(notice)}
                            >
                              <i className="fas fa-eye" /> Read Full Circular
                            </button>

                            <button
                              type="button"
                              className="nb-btn-pdf"
                              onClick={() => handleDownloadNotice(notice)}
                              title="Download official PDF copy"
                            >
                              <i className="fas fa-file-pdf" />
                              <span>{notice.fileSize}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>

              {/* Notice Board Footer */}
              <div className="nb-footer-actions">
                <button
                  type="button"
                  className="nb-archive-btn"
                  onClick={() => {
                    if (onNavigateToArchive) {
                      onNavigateToArchive();
                    } else {
                      document.getElementById("circulars-archive")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>Explore Complete Notice &amp; Order Archive</span>
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: CAMPUS DIARY & UPCOMING EVENTS
              ========================================================================= */}
          <div className="events-column reveal-right">
            <div className="nb-header-block">
              <div>
                <span className="nb-eyebrow">CAMPUS DIARY &amp; CALENDAR</span>
                <h2 className="nb-main-title">Upcoming Events</h2>
              </div>
              <button
                type="button"
                className="nb-link-cal"
                onClick={() => {
                  if (onNavigateToCalendar) {
                    onNavigateToCalendar();
                  } else {
                    document.getElementById("academic-calendar")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Full Year Planner</span>
                <i className="fas fa-calendar-alt" />
              </button>
            </div>

            <div className="nb-events-feed">
              {events.map((event) => (
                <article className="nb-event-card" key={event.id}>
                  {/* Event Date Block */}
                  <div className="nb-ev-datebadge">
                    <span className="nb-ev-month">{event.month}</span>
                    <strong className="nb-ev-day">{event.day}</strong>
                    <span className="nb-ev-year">{event.year}</span>
                  </div>

                  {/* Event Body */}
                  <div className="nb-ev-body">
                    <div className="nb-ev-topline">
                      <span className="nb-ev-tag">{event.tag}</span>
                      <div className="nb-ev-meta-item">
                        <i className="far fa-clock" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <h3 className="nb-ev-title">
                      <button
                        type="button"
                        className="nb-ev-title-btn"
                        onClick={() => setActiveEventModal(event)}
                      >
                        {event.title}
                      </button>
                    </h3>

                    <div className="nb-ev-venue">
                      <i className="fas fa-map-marker-alt" />
                      <span>{event.venue}</span>
                    </div>

                    <p className="nb-ev-desc">{event.desc}</p>

                    <div className="nb-ev-actions">
                      <button
                        type="button"
                        className="nb-ev-btn-details"
                        onClick={() => setActiveEventModal(event)}
                      >
                        Event Itinerary &amp; Guidelines <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          OFFICIAL CIRCULAR DETAIL MODAL DIALOG
          ========================================================================= */}
      {activeNoticeModal && (
        <div
          className="nb-modal-overlay animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveNoticeModal(null)}
        >
          <div
            className="nb-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="nb-modal-headerbar">
              <div className="nb-modal-crest">
                <i className="fas fa-university" />
                <div>
                  <h4>Horizon Academy Senior Secondary School</h4>
                  <p>Affiliated to CBSE, New Delhi · Affiliation No. 330789 · School Code 65123</p>
                </div>
              </div>
              <button
                type="button"
                className="nb-modal-close"
                onClick={() => setActiveNoticeModal(null)}
                aria-label="Close circular"
              >
                &times;
              </button>
            </div>

            {/* Modal Official Circular Body */}
            <div className="nb-modal-body">
              <div className="nb-circ-meta-grid">
                <div className="nb-circ-meta-col">
                  <strong>Reference No:</strong>
                  <code>{activeNoticeModal.ref}</code>
                </div>
                <div className="nb-circ-meta-col">
                  <strong>Date of Notification:</strong>
                  <span>{activeNoticeModal.date}</span>
                </div>
                <div className="nb-circ-meta-col">
                  <strong>Department:</strong>
                  <span className="nb-badge-dept">{activeNoticeModal.tag}</span>
                </div>
                <div className="nb-circ-meta-col">
                  <strong>Target Audience:</strong>
                  <span>{activeNoticeModal.audience}</span>
                </div>
              </div>

              <div className="nb-circ-subject-block">
                <span className="nb-circ-sub-label">SUBJECT:</span>
                <h3 className="nb-circ-sub-title">{activeNoticeModal.title}</h3>
              </div>

              <div className="nb-circ-content">
                <p className="nb-circ-lead">{activeNoticeModal.snippet}</p>

                <h5 className="nb-circ-guidelines-heading">Key Directives &amp; Actionable Guidelines:</h5>
                <ul className="nb-circ-points-list">
                  {activeNoticeModal.points.map((pt, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="nb-circ-signoff">
                  <div className="nb-signoff-stamp">
                    <i className="fas fa-stamp" />
                    <span>SEALED &amp; VERIFIED</span>
                  </div>
                  <div className="nb-signoff-authority">
                    <strong>By Order of:</strong>
                    <p>{activeNoticeModal.issuedBy}</p>
                    <small>Horizon Academy Administrative Secretariat</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="nb-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => window.print()}
              >
                <i className="fas fa-print" /> Print Circular
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDownloadNotice(activeNoticeModal)}
              >
                <i className="fas fa-file-pdf" /> Download Signed PDF ({activeNoticeModal.fileSize.replace("PDF · ", "")})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          EVENT DETAIL MODAL DIALOG
          ========================================================================= */}
      {activeEventModal && (
        <div
          className="nb-modal-overlay animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveEventModal(null)}
        >
          <div
            className="nb-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nb-modal-headerbar">
              <div className="nb-modal-crest">
                <i className="fas fa-calendar-star" />
                <div>
                  <h4>CAMPUS DIARY &amp; EVENT DETAILS</h4>
                  <p>Horizon Academy Annual Co-Curricular Calendar</p>
                </div>
              </div>
              <button
                type="button"
                className="nb-modal-close"
                onClick={() => setActiveEventModal(null)}
                aria-label="Close event details"
              >
                &times;
              </button>
            </div>

            <div className="nb-modal-body">
              <div className="nb-circ-subject-block">
                <span className="nb-circ-sub-label">{activeEventModal.tag.toUpperCase()}</span>
                <h3 className="nb-circ-sub-title">{activeEventModal.title}</h3>
              </div>

              <div className="nb-circ-meta-grid">
                <div className="nb-circ-meta-col">
                  <strong>Date:</strong>
                  <span>{activeEventModal.day} {activeEventModal.month} {activeEventModal.year}</span>
                </div>
                <div className="nb-circ-meta-col">
                  <strong>Time:</strong>
                  <span>{activeEventModal.time}</span>
                </div>
                <div className="nb-circ-meta-col">
                  <strong>Venue:</strong>
                  <span>{activeEventModal.venue}</span>
                </div>
                <div className="nb-circ-meta-col">
                  <strong>Audience:</strong>
                  <span>{activeEventModal.audience}</span>
                </div>
              </div>

              <div className="nb-circ-content">
                <p className="nb-circ-lead">{activeEventModal.desc}</p>
                <div className="nb-event-notes-card">
                  <h5><i className="fas fa-info-circle" /> General Instructions:</h5>
                  <ul>
                    <li>Students must report in full school ceremonial uniform with standard ID badges.</li>
                    <li>Parents and visitors are requested to carry their digital invite or visitor ERP pass.</li>
                    <li>Designated parking slots available at the South Campus entrance.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nb-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveEventModal(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  alert(`Event "${activeEventModal.title}" reminder added to your device calendar.`);
                  setActiveEventModal(null);
                }}
              >
                <i className="fas fa-calendar-plus" /> Add to Google Calendar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
