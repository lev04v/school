import { useState } from "react";
import { PageId } from "../components/Header";
import NoticesAndEvents from "../components/NoticesAndEvents";
import { PageHero } from "../components/PageHero";

interface CircularsEventsProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function CircularsEvents({ onNavigate, onOpenAdmissionModal }: CircularsEventsProps) {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allCirculars = [
    {
      id: 1,
      ref: "HA/ADM/26-27/01",
      category: "admissions",
      tag: "Admissions",
      date: "04 Oct 2026",
      title: "Online Registration Open for Session 2026-27 (Nursery to Class IX & XI 10+2 Streams)",
      audience: "Prospective Parents",
      urgent: true,
    },
    {
      id: 2,
      ref: "CBSE/COORD/2026/18",
      category: "cbse",
      tag: "CBSE Board",
      date: "28 Sep 2026",
      title: "CBSE AISSE & AISSCE Class 10/12 Board Practical Exam Schedule and Roll Number List",
      audience: "Class 10 & 12 Students",
      urgent: false,
    },
    {
      id: 3,
      ref: "HA/PTM/2026/04",
      category: "academic",
      tag: "Academic & PTM",
      date: "20 Sep 2026",
      title: "Parent-Teacher Meeting (PTM) for Term 1 Performance Review and Remedial Planning",
      audience: "Parents of Classes Nursery to XII",
      urgent: false,
    },
    {
      id: 4,
      ref: "HA/ATL/INNOV/09",
      category: "stem",
      tag: "ATL Innovation",
      date: "12 Sep 2026",
      title: "Selection of 12 Student Robotics Projects for National NITI Aayog ATL Marathon",
      audience: "Classes VI to XII",
      urgent: false,
    },
    {
      id: 5,
      ref: "HA/FEE/2026/Q3",
      category: "academic",
      tag: "Fee Notice",
      date: "01 Sep 2026",
      title: "Notice Regarding 3rd Quarter School Fee Submission Deadline and Online Portal Link",
      audience: "All Parents",
      urgent: false,
    },
    {
      id: 6,
      ref: "HA/CCA/2026/08",
      category: "events",
      tag: "Co-Curricular",
      date: "22 Aug 2026",
      title: "Annual Inter-House Sports Meet & Track Championship Schedule and House Trials",
      audience: "Classes IV to XII",
      urgent: false,
    },
    {
      id: 7,
      ref: "CBSE/EXP/2026/02",
      category: "cbse",
      tag: "CBSE Board",
      date: "15 Aug 2026",
      title: "CBSE National Expression Series on Indian Freedom Movement & Heritage",
      audience: "All Students",
      urgent: false,
    },
  ];

  const calendarEvents = [
    { month: "APRIL", title: "New Academic Session 2026-27 Begins", note: "Welcome Assembly & Book Distribution" },
    { month: "MAY", title: "Periodic Test 1 (PT 1) for Classes IX to XII", note: "Summer Break Commences May 20" },
    { month: "JULY", title: "School Reopens & Investiture Ceremony", note: "Student Council Oath Taking" },
    { month: "AUGUST", title: "Independence Day & Inter-House Patriotic Fest", note: "Special Assembly & Flag Hoisting" },
    { month: "SEPTEMBER", title: "Half-Yearly Examinations & Teachers’ Day", note: "Term 1 Report Card Distribution (PTM)" },
    { month: "OCTOBER", title: "Inter-School ATL STEM Conclave & MUN", note: "Over 25 schools participating" },
    { month: "NOVEMBER", title: "Annual Cultural Fest & Children’s Day Sports", note: "Athletic Meet on School Turf" },
    { month: "DECEMBER", title: "Periodic Test 2 & Winter Carnival", note: "Winter Vacation starts Dec 28" },
    { month: "JANUARY", title: "Pre-Board Examination Series 1 & 2", note: "Intensive Board simulation" },
    { month: "FEB - MAR", title: "CBSE AISSE & AISSCE Board Examinations", note: "Annual Result Declarations" },
  ];

  const filteredCirculars = allCirculars.filter((c) => {
    const matchesFilter = filter === "all" || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.ref.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Circulars & Events"
        onNavigate={onNavigate}
        kicker="OFFICIAL NOTICES · DATESHEETS · ANNUAL CALENDAR"
        title={<>CBSE Circulars, Notices & <span className="text-shimmer">School Diary</span></>}
        subtitle="Stay informed with the latest academic notifications, board datesheets, PTM circulars, and the comprehensive 2026-27 school calendar."
        imageUrl="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Auditorium and Academic Briefing"
      />

      <NoticesAndEvents />

      <section className="section-circulars-archive container" id="circulars-archive">
        <div className="section-heading-row">
          <div>
            <span className="section-eyebrow">DIGITAL NOTICE ARCHIVE</span>
            <h2 className="section-title">All Official Circulars & Orders</h2>
          </div>
          <div className="circular-search-box">
            <input
              type="text"
              placeholder="Search circulars, topics, ref no..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="circular-filter-pills">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All Notices
          </button>
          <button className={`filter-btn ${filter === "cbse" ? "active" : ""}`} onClick={() => setFilter("cbse")}>
            CBSE Board
          </button>
          <button className={`filter-btn ${filter === "admissions" ? "active" : ""}`} onClick={() => setFilter("admissions")}>
            Admissions
          </button>
          <button className={`filter-btn ${filter === "academic" ? "active" : ""}`} onClick={() => setFilter("academic")}>
            Academic & PTM
          </button>
          <button className={`filter-btn ${filter === "stem" ? "active" : ""}`} onClick={() => setFilter("stem")}>
            ATL & Innovation
          </button>
          <button className={`filter-btn ${filter === "events" ? "active" : ""}`} onClick={() => setFilter("events")}>
            Co-Curricular & Sports
          </button>
        </div>

        <div className="table-responsive-wrapper">
          <table className="standard-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No.</th>
                <th>Circular Headline</th>
                <th>Category</th>
                <th>Audience</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredCirculars.map((c) => (
                <tr key={c.id}>
                  <td><time className="text-muted-small">{c.date}</time></td>
                  <td><span className="code-pill">{c.ref}</span></td>
                  <td>
                    <strong>{c.title}</strong>
                    {c.urgent && <span className="tag-urgent-badge">Urgent</span>}
                  </td>
                  <td><span className="category-pill">{c.tag}</span></td>
                  <td><span className="text-muted-small">{c.audience}</span></td>
                  <td>
                    <a href="#download" className="doc-view-link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-academic-calendar container" id="academic-calendar">
        <div className="center-heading">
          <span className="section-eyebrow">YEARLY ROADMAP</span>
          <h2 className="section-title">Academic Calendar at a Glance (2026–27)</h2>
          <p className="section-subtitle">
            Curated schedule of academic terms, examination milestones, celebrations, and vacations.
          </p>
        </div>

        <div className="calendar-roadmap-grid">
          {calendarEvents.map((cal, idx) => (
            <div className="cal-month-card" key={idx}>
              <span className="cal-month-name">{cal.month}</span>
              <h3 className="cal-event-title">{cal.title}</h3>
              <p className="cal-event-note">{cal.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
