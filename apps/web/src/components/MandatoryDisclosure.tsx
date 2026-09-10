import React, { useState } from "react";

export default function MandatoryDisclosure() {
  const [activeTab, setActiveTab] = useState<"general" | "docs" | "academics" | "staff" | "infra">("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalDoc, setActiveModalDoc] = useState<null | {
    name: string;
    code: string;
    authority: string;
    validity: string;
    details: string;
  }>(null);

  const generalInfo = [
    { label: "Name of the School", value: "Horizon Academy Senior Secondary School", icon: "fas fa-school" },
    { label: "CBSE Affiliation Number", value: "2130845 (Composite 10+2 Provision)", icon: "fas fa-certificate", copyable: true },
    { label: "School Identification Code", value: "71204 (Delhi / NCR Examination Zone)", icon: "fas fa-barcode", copyable: true },
    { label: "Complete Institutional Address", value: "Sector 14, Institutional Area, New Delhi / NCR — 110075, India", icon: "fas fa-map-marker-alt" },
    { label: "Principal & Head of Institution", value: "Dr. Rajeshwari Swaminathan (M.Sc., M.Ed., Ph.D. Physics)", icon: "fas fa-user-tie" },
    { label: "Official Institutional Email", value: "cbse.nodal@Horizonacademy.edu.in / info@Horizonacademy.edu.in", icon: "fas fa-envelope" },
    { label: "Administrative Phone Desk", value: "+91 11 2890 4455 / +91 11 2890 4458", icon: "fas fa-phone-alt" },
    { label: "Current Affiliation Term", value: "Valid & Active (Upgraded till 31 March 2031)", icon: "fas fa-calendar-check" },
  ];

  const statutoryDocuments = [
    {
      code: "SARAS-DOC-01",
      name: "CBSE Affiliation / Upgradation Grant Letter (10+2)",
      authority: "Central Board of Secondary Education, New Delhi",
      validity: "Valid till 31-03-2031",
      status: "Active & Verified",
      fileSize: "PDF · 1.4 MB",
      details: "Official Grant-in-Affiliation letter granting composite provisional affiliation up to Senior Secondary level across Science, Commerce & Humanities.",
    },
    {
      code: "SARAS-DOC-02",
      name: "Societies / Trust Registration & Renewal Certificate",
      authority: "Registrar of Societies, Govt. of NCT of Delhi",
      validity: "Permanent Registration (Renewed 2025)",
      status: "Verified",
      fileSize: "PDF · 890 KB",
      details: "Registration certificate under the Societies Registration Act, XXI of 1860, establishing Horizon Educational Trust as a non-profit entity.",
    },
    {
      code: "SARAS-DOC-03",
      name: "No Objection Certificate (NOC) Issued by State Education Dept.",
      authority: "Directorate of Education (DoE), Govt. of NCT of Delhi",
      validity: "Unconditional Permanent NOC",
      status: "Verified",
      fileSize: "PDF · 640 KB",
      details: "State Government statutory NOC authorizing affiliation with CBSE without any financial encumbrance.",
    },
    {
      code: "SARAS-DOC-04",
      name: "Recognition Certificate Under RTE Act, 2009",
      authority: "District Education Officer / Directorate of Education",
      validity: "Perpetual Compliance",
      status: "Verified",
      fileSize: "PDF · 720 KB",
      details: "Statutory recognition certifying compliance with infrastructure, pupil-teacher ratios, and non-discrimination mandates under the RTE Act.",
    },
    {
      code: "SARAS-DOC-05",
      name: "Building Safety Certificate (National Building Code NBC)",
      authority: "Executive Engineer, Public Works Department (PWD)",
      validity: "Valid till 30-06-2028 (5-Year Cycle)",
      status: "Inspected & Certified",
      fileSize: "PDF · 1.1 MB",
      details: "Structural stability and earthquake-resistant seismic zone engineering certification conforming to National Building Code specifications.",
    },
    {
      code: "SARAS-DOC-06",
      name: "Fire Safety Certificate Issued by Competent Fire Services",
      authority: "Delhi Fire Service, Govt. of NCT of Delhi",
      validity: "Valid till 15-08-2027 (Annual Audit Passed)",
      status: "Inspected & Safe",
      fileSize: "PDF · 950 KB",
      details: "Clearance certifying pressurized hydrants, automated smoke detectors, hose reels, fire alarms, and emergency escape stairs on all campus floors.",
    },
    {
      code: "SARAS-DOC-07",
      name: "Safe Drinking Water & Sanitary Condition Certificate",
      authority: "Public Health Department / Municipal Corporation",
      validity: "Valid for Academic Session 2026–27",
      status: "Bacteriologically Clean",
      fileSize: "PDF · 510 KB",
      details: "Water lab testing report certifying potability, zero bacterial contaminants, and comprehensive multi-stage industrial UV/RO filtration across campus.",
    },
    {
      code: "SARAS-DOC-08",
      name: "District Education Officer (DEO) Self-Certification Document",
      authority: "Office of the Deputy Director of Education (Zone 21)",
      validity: "Verified & Countersigned",
      status: "Govt. Approved",
      fileSize: "PDF · 820 KB",
      details: "Official Appendix-III self-certification countersigned by the competent DEO confirming all physical land and infrastructural verifications.",
    },
  ];

  const academicRecords = [
    {
      title: "Audited Annual Fee Structure (Session 2026–27)",
      ref: "SARAS-ACAD-01",
      desc: "Comprehensive tier-by-tier tuition, activity, and composite annual charges transparently notified without any capitation or donation fees.",
      badge: "Publicly Disclosed",
      size: "PDF · 430 KB",
    },
    {
      title: "Annual CBSE Academic Calendar & Activity Planner",
      ref: "SARAS-ACAD-02",
      desc: "Complete 220 instructional days schedule detailing assessment timelines, board practicals, gazetted holidays, and parent-teacher meetings.",
      badge: "Session 2026–27",
      size: "PDF · 1.2 MB",
    },
    {
      title: "School Management Committee (SMC) Composition",
      ref: "SARAS-ACAD-03",
      desc: "Duly constituted 15-member management committee comprising educationists, CBSE nominees, parent reps, and teacher representatives.",
      badge: "Updated 2026",
      size: "PDF · 380 KB",
    },
    {
      title: "Parents Teachers Association (PTA) Executive Body",
      ref: "SARAS-ACAD-04",
      desc: "Democratic consultative council meeting bi-monthly to review curriculum pacing, child safety, cafeteria hygiene, and student welfare.",
      badge: "Active Council",
      size: "PDF · 290 KB",
    },
    {
      title: "Past 3-Year CBSE Board Examination Results (Class X & XII)",
      ref: "SARAS-ACAD-05",
      desc: "Unbroken 100% pass record in CBSE AISSE & AISSCE examinations with official stream-wise division averages and city rank holders.",
      badge: "100% Pass Record",
      size: "PDF · 750 KB",
    },
  ];

  const staffMetrics = [
    { label: "Principal & Head of School", value: "01 (Dr. Rajeshwari Swaminathan)", sub: "Ph.D. Physics, 28+ Yrs Experience" },
    { label: "Total Teaching Staff", value: "124 Master Educators", sub: "100% Post-Graduate & B.Ed. Qualified" },
    { label: "Post Graduate Teachers (PGT)", value: "38 Senior Lecturers", sub: "Specialized for Classes XI & XII" },
    { label: "Trained Graduate Teachers (TGT)", value: "48 Subject Teachers", sub: "Specialized for Classes VI to X" },
    { label: "Primary & Montessori Teachers (PRT)", value: "38 Facilitators", sub: "Nursery to Class V Foundations" },
    { label: "Teacher to Student Ratio", value: "1 : 15", sub: "Strictly below CBSE mandated 1:30 norm" },
    { label: "Full-Time Special Educator", value: "02 Certified Specialists", sub: "RCI Registered for Inclusive Learning" },
    { label: "Full-Time Wellness Counselor", value: "02 Clinical Psychologists", sub: "Adolescent Guidance & Mental Health" },
  ];

  const infraMetrics = [
    { label: "Total Campus Land Area", value: "40,468 Sq. Meters (10.0 Acres)", sub: "Contiguous single-plot institutional campus" },
    { label: "Total Built-Up Area", value: "18,500 Sq. Meters", sub: "G+3 multistoried pucca academic wings" },
    { label: "Playground & Sports Arena", value: "22,000 Sq. Meters", sub: "All-weather turf, cricket nets, basketball & track" },
    { label: "Smart Digital Classrooms", value: "62 Air-Conditioned Rooms", sub: "All fitted with interactive touch digiboards" },
    { label: "Composite Science & Subject Labs", value: "07 Independent Labs", sub: "Physics, Chem, Bio, Biotech, Math & AI" },
    { label: "Atal Tinkering Lab (ATL)", value: "NITI Aayog STEM Hub", sub: "3D printers, microcontrollers, sensor kits" },
    { label: "High-Speed Internet Bandwidth", value: "1 Gbps Dedicated Fiber", sub: "Protected Wi-Fi & cyber-filtered firewall" },
    { label: "Sanitary Provisions", value: "48 Boys · 46 Girls · 12 Staff", sub: "Strict hygiene, sanitary napkin incinerators" },
  ];

  const filteredDocs = statutoryDocuments.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.authority.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  const handleDownload = (docName: string) => {
    alert(`Downloading verified copy of: "${docName}". Certified CBSE SARAS document successfully downloaded.`);
  };

  return (
    <section className="section-disclosure" id="disclosure">
      <div className="container">
        <div className="disclosure-portal-card reveal-up">
          {/* Top Verification Header */}
          <div className="disclosure-portal-header">
            <div className="disclosure-badge-row">
              <span className="cbse-official-tag">
                <i className="fas fa-shield-check" /> OFFICIAL CBSE SARAS COMPLIANCE PORTAL
              </span>
              <span className="cbse-cycle-tag">
                <i className="fas fa-sync-alt" /> Session 2026–27 Verified
              </span>
            </div>

            <h3 className="disclosure-main-title">
              Mandatory Public Disclosure <em>(Appendix IX)</em>
            </h3>
            <p className="disclosure-main-sub">
              In accordance with Central Board of Secondary Education (CBSE) Circular No. 03/2021 and Section 8.8 of the Affiliation Bye-Laws,
              all statutory documents, infrastructural dimensions, faculty qualifications, and fee schedules are published below for public audit.
            </p>

            {/* Credential Chips */}
            <div className="disclosure-credential-strip">
              <div className="cred-chip">
                <span className="cred-label">CBSE Affiliation No.</span>
                <strong className="cred-val">2130845</strong>
                <button type="button" onClick={() => handleCopy("2130845")} title="Copy Affiliation Number">
                  <i className="fas fa-copy" />
                </button>
              </div>

              <div className="cred-chip">
                <span className="cred-label">School Code</span>
                <strong className="cred-val">71204</strong>
                <button type="button" onClick={() => handleCopy("71204")} title="Copy School Code">
                  <i className="fas fa-copy" />
                </button>
              </div>

              <div className="cred-chip">
                <span className="cred-label">UDISE+ Code</span>
                <strong className="cred-val">07080308812</strong>
                <button type="button" onClick={() => handleCopy("07080308812")} title="Copy UDISE Code">
                  <i className="fas fa-copy" />
                </button>
              </div>

              <div className="cred-chip">
                <span className="cred-label">Affiliation Status</span>
                <strong className="cred-val status-pill-active">
                  <i className="fas fa-check-circle" /> Regular 10+2
                </strong>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="disclosure-tabs-nav" role="tablist" aria-label="SARAS categories">
            <button
              type="button"
              className={`saras-tab-btn ${activeTab === "general" ? "active" : ""}`}
              onClick={() => setActiveTab("general")}
              role="tab"
              aria-selected={activeTab === "general"}
            >
              <i className="fas fa-info-circle" />
              <span>A. General Info</span>
            </button>

            <button
              type="button"
              className={`saras-tab-btn ${activeTab === "docs" ? "active" : ""}`}
              onClick={() => setActiveTab("docs")}
              role="tab"
              aria-selected={activeTab === "docs"}
            >
              <i className="fas fa-file-contract" />
              <span>B. Documents &amp; Certificates ({statutoryDocuments.length})</span>
            </button>

            <button
              type="button"
              className={`saras-tab-btn ${activeTab === "academics" ? "active" : ""}`}
              onClick={() => setActiveTab("academics")}
              role="tab"
              aria-selected={activeTab === "academics"}
            >
              <i className="fas fa-graduation-cap" />
              <span>C. Results &amp; Academics</span>
            </button>

            <button
              type="button"
              className={`saras-tab-btn ${activeTab === "staff" ? "active" : ""}`}
              onClick={() => setActiveTab("staff")}
              role="tab"
              aria-selected={activeTab === "staff"}
            >
              <i className="fas fa-users-class" />
              <span>D. Staff &amp; Teaching</span>
            </button>

            <button
              type="button"
              className={`saras-tab-btn ${activeTab === "infra" ? "active" : ""}`}
              onClick={() => setActiveTab("infra")}
              role="tab"
              aria-selected={activeTab === "infra"}
            >
              <i className="fas fa-building" />
              <span>E. School Infrastructure</span>
            </button>
          </div>

          {/* Tab 1: General Information (Category A) */}
          {activeTab === "general" && (
            <div className="saras-pane animate-fade-in">
              <div className="pane-headline-row">
                <div>
                  <h4 className="pane-title">Category A — General Information</h4>
                  <p className="pane-sub">Basic institutional identification, administrative leadership, and official communication channels.</p>
                </div>
                <span className="appendix-badge">CBSE SARAS Item A.1 to A.8</span>
              </div>

              <div className="general-info-grid">
                {generalInfo.map((item, idx) => (
                  <div className="gen-info-card" key={idx}>
                    <div className="gen-info-icon">
                      <i className={item.icon} />
                    </div>
                    <div className="gen-info-content">
                      <span className="gen-info-label">{item.label}</span>
                      <strong className="gen-info-value">{item.value}</strong>
                    </div>
                    {item.copyable && (
                      <button
                        type="button"
                        className="btn-copy-chip"
                        onClick={() => handleCopy(item.value)}
                        title="Copy to clipboard"
                      >
                        <i className="fas fa-copy" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Documents & Certificates (Category B) */}
          {activeTab === "docs" && (
            <div className="saras-pane animate-fade-in">
              <div className="pane-headline-row">
                <div>
                  <h4 className="pane-title">Category B — Documents and Information</h4>
                  <p className="pane-sub">Copies of affiliation letters, safety approvals, water tests, and government recognitions.</p>
                </div>
                <div className="saras-search-wrap">
                  <i className="fas fa-search" />
                  <input
                    type="text"
                    placeholder="Filter certificates by name or ref..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search documents"
                  />
                </div>
              </div>

              <div className="saras-docs-grid">
                {filteredDocs.map((doc, idx) => (
                  <div className="saras-doc-card" key={idx}>
                    <div className="doc-card-top">
                      <span className="doc-code-badge">{doc.code}</span>
                      <span className="doc-status-verified">
                        <i className="fas fa-check-circle" /> {doc.status}
                      </span>
                    </div>

                    <h5 className="doc-name-title">{doc.name}</h5>
                    <p className="doc-authority-text">
                      <i className="fas fa-university" /> <strong>Issuing Authority:</strong> {doc.authority}
                    </p>
                    <p className="doc-validity-text">
                      <i className="fas fa-history" /> <strong>Validity Period:</strong> {doc.validity}
                    </p>

                    <p className="doc-desc-snippet">{doc.details}</p>

                    <div className="doc-card-footer">
                      <span className="doc-size-indicator">
                        <i className="fas fa-file-pdf" /> {doc.fileSize}
                      </span>
                      <div className="doc-action-buttons">
                        <button
                          type="button"
                          className="btn-doc-view"
                          onClick={() => setActiveModalDoc(doc)}
                        >
                          <i className="fas fa-eye" /> Preview Details
                        </button>
                        <button
                          type="button"
                          className="btn-doc-dl"
                          onClick={() => handleDownload(doc.name)}
                          title="Download Certified PDF"
                        >
                          <i className="fas fa-download" /> Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Results & Academics (Category C) */}
          {activeTab === "academics" && (
            <div className="saras-pane animate-fade-in">
              <div className="pane-headline-row">
                <div>
                  <h4 className="pane-title">Category C — Result and Academics</h4>
                  <p className="pane-sub">Fee structure schedule, academic calendar, School Management Committee (SMC), and 3-year board performance.</p>
                </div>
                <span className="appendix-badge">CBSE SARAS Item C.1 to C.5</span>
              </div>

              <div className="academics-records-grid">
                {academicRecords.map((rec, idx) => (
                  <div className="acad-record-card" key={idx}>
                    <div className="record-head">
                      <span className="record-ref">{rec.ref}</span>
                      <span className="record-badge">{rec.badge}</span>
                    </div>
                    <h5 className="record-title">{rec.title}</h5>
                    <p className="record-desc">{rec.desc}</p>
                    <div className="record-foot">
                      <span className="record-size">{rec.size}</span>
                      <button
                        type="button"
                        className="btn-record-download"
                        onClick={() => handleDownload(rec.title)}
                      >
                        <i className="fas fa-file-pdf" /> Download PDF Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3-Year Board Result Data Snapshot */}
              <div className="board-results-summary-box">
                <h5 className="summary-box-title">
                  <i className="fas fa-trophy" /> Official 3-Year CBSE Examination Performance Summary
                </h5>
                <div className="summary-table-wrap">
                  <table className="saras-table">
                    <thead>
                      <tr>
                        <th>Academic Session</th>
                        <th>Exam Level</th>
                        <th>Registered Candidates</th>
                        <th>Students Passed</th>
                        <th>Pass Percentage</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>2024–25</strong></td>
                        <td>Class XII (AISSCE)</td>
                        <td>196</td>
                        <td>196</td>
                        <td><span className="pass-pill-100">100.00%</span></td>
                        <td>52 Students scored &gt; 90% aggregate</td>
                      </tr>
                      <tr>
                        <td><strong>2024–25</strong></td>
                        <td>Class X (AISSE)</td>
                        <td>210</td>
                        <td>210</td>
                        <td><span className="pass-pill-100">100.00%</span></td>
                        <td>State Rank 3 &amp; 18 Centum (100/100) scores</td>
                      </tr>
                      <tr>
                        <td><strong>2023–24</strong></td>
                        <td>Class XII (AISSCE)</td>
                        <td>188</td>
                        <td>188</td>
                        <td><span className="pass-pill-100">100.00%</span></td>
                        <td>IIT Delhi &amp; AIIMS selections achieved</td>
                      </tr>
                      <tr>
                        <td><strong>2023–24</strong></td>
                        <td>Class X (AISSE)</td>
                        <td>204</td>
                        <td>204</td>
                        <td><span className="pass-pill-100">100.00%</span></td>
                        <td>City top score of 98.6%</td>
                      </tr>
                      <tr>
                        <td><strong>2022–23</strong></td>
                        <td>Class XII (AISSCE)</td>
                        <td>176</td>
                        <td>176</td>
                        <td><span className="pass-pill-100">100.00%</span></td>
                        <td>Unbroken First-Division record maintained</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Staff & Pedagogy (Category D) */}
          {activeTab === "staff" && (
            <div className="saras-pane animate-fade-in">
              <div className="pane-headline-row">
                <div>
                  <h4 className="pane-title">Category D — Staff (Teaching &amp; Wellness)</h4>
                  <p className="pane-sub">Accredited teacher qualifications, favorable student-teacher ratios, and mandated specialized educators.</p>
                </div>
                <span className="appendix-badge">CBSE SARAS Item D.1 to D.8</span>
              </div>

              <div className="staff-metrics-grid">
                {staffMetrics.map((item, idx) => (
                  <div className="staff-metric-card" key={idx}>
                    <span className="staff-metric-label">{item.label}</span>
                    <strong className="staff-metric-val">{item.value}</strong>
                    <span className="staff-metric-sub">
                      <i className="fas fa-check-circle" /> {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Infrastructure & Campus Dimensions (Category E) */}
          {activeTab === "infra" && (
            <div className="saras-pane animate-fade-in">
              <div className="pane-headline-row">
                <div>
                  <h4 className="pane-title">Category E — School Infrastructure</h4>
                  <p className="pane-sub">Physical campus specifications, lab dimensions, athletic spaces, and safety equipment audits.</p>
                </div>
                <span className="appendix-badge">CBSE SARAS Item E.1 to E.8</span>
              </div>

              <div className="infra-metrics-grid">
                {infraMetrics.map((item, idx) => (
                  <div className="infra-metric-card" key={idx}>
                    <span className="infra-metric-label">{item.label}</span>
                    <strong className="infra-metric-val">{item.value}</strong>
                    <span className="infra-metric-sub">
                      <i className="fas fa-shield-alt" /> {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nodal Officer Statutory Signature Banner */}
          <div className="saras-compliance-footer">
            <div className="officer-signature-box">
              <div className="officer-seal">
                <i className="fas fa-stamp" />
              </div>
              <div>
                <span className="officer-label">DESIGNATED CBSE COMPLIANCE OFFICER</span>
                <strong className="officer-name">Mr. K. R. Nambiar (Vice Principal &amp; Academic Controller)</strong>
                <p className="officer-meta">
                  Direct Line: +91 11 2890 4458 | Email: <a href="mailto:cbse.nodal@Horizonacademy.edu.in">cbse.nodal@Horizonacademy.edu.in</a>
                </p>
              </div>
            </div>

            <div className="statutory-declaration-note">
              <i className="fas fa-info-circle" />
              <span>
                Certified that all physical records, building approvals, teacher rosters, and certificates uploaded are authentic, audited, and valid for Academic Session 2026–27.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {activeModalDoc && (
        <div className="saras-modal-overlay" onClick={() => setActiveModalDoc(null)}>
          <div className="saras-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="saras-modal-header">
              <div>
                <span className="modal-doc-code">{activeModalDoc.code}</span>
                <h4 className="modal-doc-title">{activeModalDoc.name}</h4>
              </div>
              <button
                type="button"
                className="btn-modal-close"
                onClick={() => setActiveModalDoc(null)}
                aria-label="Close modal"
              >
                <i className="fas fa-times" />
              </button>
            </div>

            <div className="saras-modal-body">
              <div className="modal-meta-grid">
                <div>
                  <small>Issuing Authority:</small>
                  <strong>{activeModalDoc.authority}</strong>
                </div>
                <div>
                  <small>Statutory Validity:</small>
                  <strong>{activeModalDoc.validity}</strong>
                </div>
              </div>

              <div className="modal-content-snippet">
                <h5>Document Synopsis &amp; Legal Grant</h5>
                <p>{activeModalDoc.details}</p>
              </div>

              <div className="modal-cbse-seal">
                <i className="fas fa-certificate" />
                <span>Verified under CBSE SARAS Portal Framework · Official Digitally Authenticated Copy</span>
              </div>
            </div>

            <div className="saras-modal-footer">
              <button
                type="button"
                className="btn-modal-secondary"
                onClick={() => setActiveModalDoc(null)}
              >
                Close Window
              </button>
              <button
                type="button"
                className="btn-modal-primary"
                onClick={() => handleDownload(activeModalDoc.name)}
              >
                <i className="fas fa-download" /> Download Official PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
