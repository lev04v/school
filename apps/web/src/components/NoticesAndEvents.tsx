export default function NoticesAndEvents() {
  const notices = [
    {
      date: "04 Oct 2026",
      tag: "Admissions",
      title: "Online Registration Open for Session 2026-27 (Nursery to Class IX & XI 10+2 Streams)",
      urgent: true,
      ref: "HA/ADM/26-27/01",
    },
    {
      date: "28 Sep 2026",
      tag: "CBSE Circular",
      title: "CBSE AISSE & AISSCE Class 10/12 Board Practical Exam Schedule and Roll Number List",
      urgent: false,
      ref: "CBSE/COORD/2026",
    },
    {
      date: "20 Sep 2026",
      tag: "Academic",
      title: "Parent-Teacher Meeting (PTM) for Term 1 Performance Review and Remedial Planning",
      urgent: false,
      ref: "HA/PTM/2026/04",
    },
    {
      date: "12 Sep 2026",
      tag: "ATL Innovation",
      title: "Selection of 12 Student Robotics Projects for National NITI Aayog ATL Marathon",
      urgent: false,
      ref: "HA/ATL/INNOV/09",
    },
    {
      date: "02 Sep 2026",
      tag: "Co-Curricular",
      title: "Inter-House Debate & Youth Parliament Competitions for Classes VIII to XII",
      urgent: false,
      ref: "HA/CCA/2026/08",
    },
  ];

  const events = [
    {
      day: "18",
      month: "OCT",
      year: "2026",
      title: "Inter-School ATL Robotics & STEM Conclave",
      time: "09:30 AM – 03:00 PM",
      venue: "Horizon Raman Auditorium & ATL Labs",
      desc: "Over 25 regional schools participating in AI, IoT and automated robotics demonstrations.",
    },
    {
      day: "25",
      month: "OCT",
      year: "2026",
      title: "Class 10+2 Stream & Career Orientation Workshop",
      time: "10:00 AM – 01:30 PM",
      venue: "School Conference Hall & Online Live",
      desc: "Expert panel of IITians, Doctors, CAs and Senior Counselors guiding Class X parents.",
    },
    {
      day: "08",
      month: "NOV",
      year: "2026",
      title: "Annual Cultural Fest — 'Tarang 2026'",
      time: "04:30 PM – 08:30 PM",
      venue: "Open Air Amphitheatre, Horizon Campus",
      desc: "Celebration of classical music, dramatics, choreography and felicitation of academic toppers.",
    },
    {
      day: "14",
      month: "NOV",
      year: "2026",
      title: "Children’s Day & Inter-House Athletic Meet",
      time: "08:30 AM – 02:00 PM",
      venue: "Horizon Sports Complex & Turf Ground",
      desc: "Track and field events, relay races, march-past, and cultural performances by students.",
    },
  ];

  return (
    <section className="section-notices-events" id="circulars">
      <div className="container">
        <div className="notices-events-grid">
          {/* Left Column: Official CBSE Notice Board */}
          <div className="notices-column">
            <div className="block-header">
              <div>
                <span className="section-eyebrow">OFFICIAL CIRCULARS</span>
                <h2 className="block-title">School Notice Board</h2>
              </div>
              <span className="cbse-board-stamp">CBSE BULLETIN</span>
            </div>

            <div className="notice-board-card">
              <div className="notice-board-header">
                <div className="bulletin-pulse">
                  <span className="pulse-dot" />
                  <span>Latest Academic Notifications & Orders</span>
                </div>
                <span className="board-session">Session 2026–27</span>
              </div>

              <div className="notices-list">
                {notices.map((notice, index) => (
                  <article className="notice-entry" key={index}>
                    <div className="notice-meta">
                      <time className="notice-date">{notice.date}</time>
                      <span className={`notice-tag ${notice.urgent ? "tag-urgent" : ""}`}>
                        {notice.tag}
                      </span>
                      <span className="notice-ref">{notice.ref}</span>
                    </div>

                    <h3 className="notice-headline">
                      <a href="#notice-detail">{notice.title}</a>
                    </h3>

                    <div className="notice-actions">
                      <a href="#download-circular" className="notice-download-btn">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        PDF Circular
                      </a>
                      <span className="notice-arrow-link">Read Details →</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="notice-board-footer">
                <a href="#archive" className="btn-all-notices">
                  View Notice Board Archive (2025–26)
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming School Events (Kingster Calendar Date Badge Style) */}
          <div className="events-column">
            <div className="block-header">
              <div>
                <span className="section-eyebrow">CAMPUS DIARY</span>
                <h2 className="block-title">Upcoming Events</h2>
              </div>
              <a href="#calendar" className="link-academic-calendar">
                Full Year Calendar →
              </a>
            </div>

            <div className="events-list">
              {events.map((event, index) => (
                <article className="kingster-event-card" key={index}>
                  {/* Calendar Date Badge */}
                  <div className="event-date-badge">
                    <span className="badge-month">{event.month}</span>
                    <strong className="badge-day">{event.day}</strong>
                    <span className="badge-year">{event.year}</span>
                  </div>

                  {/* Event Details */}
                  <div className="event-body">
                    <div className="event-meta-line">
                      <span className="event-time">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {event.time}
                      </span>
                      <span className="event-venue">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {event.venue}
                      </span>
                    </div>

                    <h3 className="event-title">
                      <a href="#event-detail">{event.title}</a>
                    </h3>
                    <p className="event-desc">{event.desc}</p>

                    <div className="event-action-row">
                      <a href="#rsvp" className="event-join-link">
                        Event Schedule & Details →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
