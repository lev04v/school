export default function MandatoryDisclosure() {
  const documents = [
    { name: "CBSE Affiliation / Upgradation Grant Letter (10+2)", code: "SARAS-DOC-01", status: "Active & Verified" },
    { name: "Societies / Trust Registration & Renewal Certificate", code: "SARAS-DOC-02", status: "Verified" },
    { name: "No Objection Certificate (NOC) by State Education Dept.", code: "SARAS-DOC-03", status: "Verified" },
    { name: "Recognition Certificate Under RTE Act, 2009", code: "SARAS-DOC-04", status: "Verified" },
    { name: "Building Safety Certificate (National Building Code)", code: "SARAS-DOC-05", status: "Valid (2026-27)" },
    { name: "Fire Safety Certificate Issued by Competent Authority", code: "SARAS-DOC-06", status: "Valid & Inspected" },
    { name: "Safe Drinking Water & Sanitary Condition Certificate", code: "SARAS-DOC-07", status: "Tested Clean" },
    { name: "Annual Fee Structure & Norms (Session 2026-27)", code: "SARAS-DOC-08", status: "Publicly Available" },
    { name: "School Management Committee (SMC) & PTA Composition", code: "SARAS-DOC-09", status: "Updated" },
    { name: "Past 3-Year CBSE Board Result Summary (Class 10 & 12)", code: "SARAS-DOC-10", status: "100% Pass Record" },
  ];

  return (
    <section className="section-disclosure" id="disclosure">
      <div className="container">
        <div className="disclosure-card">
          <div className="disclosure-header">
            <div className="disclosure-title-wrap">
              <span className="cbse-saras-badge">CBSE SARAS MANDATORY COMPLIANCE</span>
              <h3 className="disclosure-title">Mandatory Public Disclosure & Certificates</h3>
              <p className="disclosure-desc">
                In compliance with CBSE Circular No. 03/2021 and Appendix IX of Affiliation Bye-Laws,
                Horizon Academy maintains transparent public access to statutory institutional documents.
              </p>
            </div>
            <div className="affiliation-stat-pill">
              <span className="aff-num">Affiliation No. 2130845</span>
              <span className="sch-num">School Code: 71204</span>
            </div>
          </div>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Document / Statutory Information</th>
                  <th>Doc Reference</th>
                  <th>Verification Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, idx) => (
                  <tr key={idx}>
                    <td className="col-idx">{idx + 1}</td>
                    <td className="col-name">
                      <strong>{doc.name}</strong>
                    </td>
                    <td className="col-ref">
                      <span className="code-pill">{doc.code}</span>
                    </td>
                    <td className="col-status">
                      <span className="status-badge">
                        <span className="status-dot" />
                        {doc.status}
                      </span>
                    </td>
                    <td className="col-action">
                      <a href="#view-certificate" className="doc-view-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        View PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="disclosure-footer">
            <span className="nodal-officer">
              Nodal Officer for CBSE Compliance: <strong>Mr. K. R. Nambiar (Vice Principal)</strong> | Email: cbse.nodal@horizonacademy.edu.in
            </span>
            <span className="compliance-date">Last Updated: Academic Session 2026–27</span>
          </div>
        </div>
      </div>
    </section>
  );
}
