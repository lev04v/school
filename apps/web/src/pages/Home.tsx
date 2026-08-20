const notices = [
  { date: "18 Jun", tag: "Admissions", title: "Applications for the 2026–27 academic year are now open." },
  { date: "12 Jun", tag: "School life", title: "Summer enrichment clubs begin Monday, 22 June." },
  { date: "04 Jun", tag: "Community", title: "Family orientation evening scheduled for new families." },
];

const events = [
  { month: "JUN", day: "22", title: "Summer Enrichment Clubs", detail: "All day · Horizon Campus" },
  { month: "JUL", day: "05", title: "Family Orientation Evening", detail: "6:00 PM · Main Hall" },
  { month: "JUL", day: "18", title: "Founders’ Day Celebration", detail: "9:30 AM · Sports Grounds" },
];

const pillars = [
  { number: "01", title: "Curious minds", text: "Inquiry-led learning that gives every learner the confidence to ask better questions." },
  { number: "02", title: "Strong character", text: "A caring community where integrity, empathy, and responsibility are lived every day." },
  { number: "03", title: "Wider horizons", text: "Arts, sport, service, and technology help students discover their individual spark." },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Admissions open for 2026–27</span>
          <div className="utility-links">
            <a href="tel:+1555014288">+1 (555) 014-288</a>
            <a href="mailto:hello@horizonacademy.edu">hello@horizonacademy.edu</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Horizon Academy home">
            <span className="brand-mark">HA</span>
            <span><strong>Horizon</strong><small>Academy</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#admissions">Admissions</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-small button-dark" href="#admissions">Apply now <Arrow /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Independent learning, shared purpose</p>
            <h1>Where bright futures <em>take shape.</em></h1>
            <p className="hero-lead">Horizon Academy is a warm, ambitious school where students are known, challenged, and inspired to make a meaningful difference.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#admissions">Admissions are open <Arrow /></a>
              <a className="text-link" href="#about">Discover our approach <Arrow /></a>
            </div>
            <div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span>Join a community of <strong>1,200+ learners</strong></span></div>
          </div>
          <div className="hero-art" aria-label="Students collaborating in a bright classroom">
            <div className="art-sun" /><div className="art-card"><span>Est. 1998</span><strong>Learn<br />with purpose.</strong></div>
            <div className="art-caption"><span className="caption-dot" /> A place to belong</div>
          </div>
        </section>

        <section className="ticker" aria-label="School highlights">
          <div className="ticker-track container"><span>Academic excellence</span><b>✦</b><span>Creative confidence</span><b>✦</b><span>Belonging for everyone</span><b>✦</b><span>Academic excellence</span></div>
        </section>

        <section className="section container notice-layout" id="about">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-line" /> Stay in the know</p>
            <h2>Good things are<br /><em>happening here.</em></h2>
            <p>From daily discoveries to important dates, this is where our school community finds its latest news.</p>
            <a className="text-link" href="#news">View all news <Arrow /></a>
          </div>
          <div className="notice-board">
            <div className="board-top"><div><span className="board-kicker">School updates</span><h3>Notice board</h3></div><span className="pin">✦</span></div>
            <div className="notice-list">{notices.map((notice) => <article className="notice-item" key={notice.title}><time>{notice.date}</time><div><span className="tag">{notice.tag}</span><h4>{notice.title}</h4></div><span className="notice-arrow"><Arrow /></span></article>)}</div>
            <a href="#contact" className="board-footer">See all announcements <Arrow /></a>
          </div>
        </section>

        <section className="director-section" id="community">
          <div className="container director-grid">
            <div className="director-portrait"><div className="portrait-glow" /><span className="portrait-initials">DR</span><span className="portrait-label">Director’s welcome</span></div>
            <div className="director-copy"><p className="eyebrow"><span className="eyebrow-line" /> A word from our director</p><blockquote>“The best education does more than prepare a child for the future. It helps them see that they have a part to play in shaping it.”</blockquote><p>At Horizon, we believe every student deserves the space to discover their strengths, the support to navigate challenges, and the invitation to contribute to something bigger than themselves.</p><div className="director-signature"><strong>Dr. Amara Reyes</strong><span>Director, Horizon Academy</span></div><a className="text-link" href="#contact">Read the full message <Arrow /></a></div>
          </div>
        </section>

        <section className="section container" id="academics">
          <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> The Horizon difference</p><h2>Education with a <em>wider view.</em></h2></div><p className="heading-aside">We pair high expectations with a deeply human approach, helping young people become capable, compassionate, and ready for what comes next.</p></div>
          <div className="pillar-grid">{pillars.map((pillar) => <article className="pillar" key={pillar.number}><span className="pillar-number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p><a className="circle-arrow" href="#contact" aria-label={`Learn about ${pillar.title}`}><Arrow /></a></article>)}</div>
        </section>

        <section className="admissions-section" id="admissions">
          <div className="container admissions-grid"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Your next chapter starts here</p><h2>Ready to find<br /><em>your horizon?</em></h2><p>Come and experience our campus, meet our people, and see what makes Horizon feel like home.</p><a className="button button-gold" href="mailto:admissions@horizonacademy.edu">Start your application <Arrow /></a></div><div className="steps"><div className="step"><span>01</span><div><strong>Make an enquiry</strong><p>Tell us a little about your family.</p></div></div><div className="step"><span>02</span><div><strong>Visit our campus</strong><p>See learning in action and ask questions.</p></div></div><div className="step"><span>03</span><div><strong>Join the community</strong><p>Begin a remarkable journey with us.</p></div></div></div></div>
        </section>

        <section className="section container events-section" id="news"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> On the calendar</p><h2>Come and be <em>part of it.</em></h2></div><a className="text-link" href="#contact">View all events <Arrow /></a></div><div className="events-grid">{events.map((event) => <article className="event-card" key={event.title}><div className="event-date"><span>{event.month}</span><strong>{event.day}</strong></div><div><h3>{event.title}</h3><p>{event.detail}</p></div><a href="#contact" className="circle-arrow" aria-label={`Learn about ${event.title}`}><Arrow /></a></article>)}</div></section>

        <section className="visit-section" id="contact"><div className="container visit-grid"><div><p className="eyebrow"><span className="eyebrow-line" /> Come say hello</p><h2>There’s always<br /><em>a place for you.</em></h2></div><div className="visit-details"><p>We would love to welcome you to Horizon Academy. Book a campus tour or speak with our admissions team.</p><div className="contact-lines"><a href="mailto:hello@horizonacademy.edu">hello@horizonacademy.edu</a><a href="tel:+1555014288">+1 (555) 014-288</a><span>18 Horizon Lane, Portland, OR</span></div><a className="text-link" href="mailto:admissions@horizonacademy.edu">Plan your visit <Arrow /></a></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand brand-light" href="#top"><span className="brand-mark">HA</span><span><strong>Horizon</strong><small>Academy</small></span></a><p>Learn with purpose.<br />Lead with heart.</p></div><div><span className="footer-label">Explore</span><a href="#about">Our school</a><a href="#academics">Academics</a><a href="#community">Student life</a></div><div><span className="footer-label">Connect</span><a href="#admissions">Admissions</a><a href="#contact">Contact us</a><a href="#news">News & events</a></div><div><span className="footer-label">Stay connected</span><p className="footer-muted">Sign up for occasional news from our community.</p><a className="button button-gold button-small" href="mailto:hello@horizonacademy.edu">Subscribe <Arrow /></a></div></div><div className="container footer-bottom"><span>© 2026 Horizon Academy</span><span>Privacy · Safeguarding · Accessibility</span></div></footer>
    </div>
  );
}
