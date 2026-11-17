import './App.css'

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    title: 'UI & state',
    items: ['Redux Toolkit', 'React Router', 'Material UI', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Quality & workflow',
    items: ['WCAG 2.1 AA', 'REST APIs', 'Axios', 'Git & GitHub', 'Figma', 'Agile'],
  },
]

const projects = [
  {
    number: '01',
    name: 'AN — Commercial Distributor',
    client: 'Enterprise platform · 2026',
    description:
      'Built dynamic distributor-management experiences with React, Material UI, and Redux Toolkit, with accessibility and screen-reader testing built into delivery.',
    tags: ['React', 'Redux Toolkit', 'WCAG 2.1 AA'],
    style: 'project-card--lime',
  },
  {
    number: '02',
    name: 'Abbott Laboratories',
    client: 'Healthcare · 2024—2026',
    description:
      'Turned complex business requirements into stable, scalable interfaces using React and TypeScript, improving rendering and resolving critical UI issues.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    style: 'project-card--blue',
  },
  {
    number: '03',
    name: 'FedEx Sustainability Insights',
    client: 'Sustainability · 2022—2024',
    description:
      'Contributed to the product design system and reusable component architecture for a data-rich sustainability experience.',
    tags: ['React', 'Design systems', 'MUI'],
    style: 'project-card--orange',
  },
  {
    number: '04',
    name: 'Neighborly Brands',
    client: 'Franchise & home services · 2021—2022',
    description:
      'Delivered UX migrations and refreshed digital experiences across ProTradeNet and franchise websites.',
    tags: ['React', 'SCSS', 'Material UI'],
    style: 'project-card--lavender',
  },
]

const experience = [
  {
    period: 'Jun 2021 — Nov 2026',
    role: 'Senior UI Consultant',
    company: 'Tenarai Technologies (formerly Infogain)',
    location: 'Noida, India',
    highlights: [
      'Built scalable enterprise applications with React, TypeScript, and modern JavaScript.',
      'Created a reusable component library from Figma designs, reducing development turnaround by 30%.',
      'Led WCAG 2.1 AA and ARIA improvements, achieving 100% audit pass rates.',
      'Improved organic traffic by 25% through SEO and performance optimization.',
    ],
  },
  {
    period: 'Dec 2020 — Jun 2021',
    role: 'Senior UI Consultant',
    company: 'E-Solutions Pvt. Ltd.',
    location: 'Noida, India',
    highlights: [
      'Built modular, responsive interfaces from Figma wireframes and connected them to REST APIs.',
      'Improved cross-browser compatibility and accessibility across enterprise modules.',
    ],
  },
  {
    period: 'Apr 2019 — Sep 2020',
    role: 'Senior Web Developer',
    company: 'Compare Infobase Ltd.',
    location: 'New Delhi, India',
    highlights: [
      'Developed high-traffic portals and improved technical SEO, contributing to 25% more user traffic.',
    ],
  },
  {
    period: 'Sep 2018 — Feb 2019',
    role: 'Frontend Developer',
    company: 'Eurotech Solutions Pvt. Ltd.',
    location: 'Noida, India',
    highlights: ['Turned static mockups into responsive web applications and integrated third-party APIs.'],
  },
  {
    period: 'Sep 2017 — Aug 2018',
    role: 'Web Designer',
    company: 'Bay20 Software Consultancy Services Pvt. Ltd.',
    location: 'Ghaziabad, India',
    highlights: ['Designed e-commerce storefronts and refactored legacy stylesheets into modular SCSS.'],
  },
  {
    period: 'Feb 2016 — Jul 2017',
    role: 'UI Developer',
    company: 'Pavna E Systems Pvt. Ltd.',
    location: 'Noida, India',
    highlights: ['Delivered and maintained multi-page websites from initial specification through launch.'],
  },
]

const certifications = [
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Tenarai Technologies / Infogain',
  },
  {
    name: 'JavaScript Programming Essentials & ES6',
    issuer: 'Coursera',
  },
  {
    name: 'The Complete React Developer Course',
    issuer: 'Udemy',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SkillIcon({ skill }: { skill: string }) {
  const iconProps = {
    'aria-hidden': true as const,
    viewBox: '0 0 20 20',
    fill: 'none',
  }

  switch (skill) {
    case 'React':
      return (
        <svg {...iconProps}>
          <circle cx="10" cy="10" r="1.4" fill="#61dafb" />
          <ellipse cx="10" cy="10" rx="8" ry="3.1" stroke="#149eca" strokeWidth="1.1" />
          <ellipse cx="10" cy="10" rx="8" ry="3.1" stroke="#149eca" strokeWidth="1.1" transform="rotate(60 10 10)" />
          <ellipse cx="10" cy="10" rx="8" ry="3.1" stroke="#149eca" strokeWidth="1.1" transform="rotate(120 10 10)" />
        </svg>
      )
    case 'TypeScript':
    case 'JavaScript (ES6+)':
      return (
        <svg {...iconProps}>
          <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" fill={skill === 'TypeScript' ? '#3178c6' : '#f0d44a'} />
          <text x="10" y="13.2" fill={skill === 'TypeScript' ? '#fff' : '#20251f'} fontSize="7.5" fontWeight="700" textAnchor="middle">
            {skill === 'TypeScript' ? 'TS' : 'JS'}
          </text>
        </svg>
      )
    case 'HTML5':
    case 'CSS3':
      return (
        <svg {...iconProps}>
          <path d="M4 2.5h12l-1.1 13L10 17.5 5.1 15.5 4 2.5Z" fill={skill === 'HTML5' ? '#e75c32' : '#2877c7'} />
          <path d="M7 6h6.2l-.2 2H7.2l.2 2h5.4l-.4 3.2-2.4.8-2.4-.8-.1-1.6" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      )
    case 'SCSS':
      return (
        <svg {...iconProps}>
          <circle cx="10" cy="10" r="8" fill="#c6538c" />
          <text x="10" y="13.2" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">S</text>
        </svg>
      )
    case 'Redux Toolkit':
      return (
        <svg {...iconProps}>
          <path d="M5 6.2c2.4-2.2 6.3-2.4 8.7-.4M14.4 5.6l-.3 2.5-2.3-.6M15 13.8c-2.4 2.2-6.3 2.4-8.7.4M5.6 14.4l.3-2.5 2.3.6" stroke="#764abc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="10" r="1.5" fill="#764abc" />
        </svg>
      )
    case 'React Router':
      return (
        <svg {...iconProps}>
          <path d="M5 5h5v5h5v5" stroke="#ca4245" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5" cy="5" r="2" fill="#ca4245" />
          <circle cx="10" cy="10" r="2" fill="#ca4245" />
          <circle cx="15" cy="15" r="2" fill="#ca4245" />
        </svg>
      )
    case 'Material UI':
      return (
        <svg {...iconProps}>
          <path d="M2.5 5v10l5-3 5 3V5l-5 3-5-3Zm10 0 5 3v4l-5 3" stroke="#1976d2" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      )
    case 'Tailwind CSS':
      return (
        <svg {...iconProps}>
          <path d="M3 8c1.4-2 3.1-3 5-3 2.8 0 3.4 2 4.8 2 1 0 1.8-.7 2.5-2M3 13c1.4-2 3.1-3 5-3 2.8 0 3.4 2 4.8 2 1 0 1.8-.7 2.5-2" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'Responsive UI':
      return (
        <svg {...iconProps}>
          <rect x="2.5" y="4" width="11.5" height="9" rx="1.2" stroke="#63766a" strokeWidth="1.4" />
          <path d="M6 16h4.5M8.2 13v3" stroke="#63766a" strokeWidth="1.3" strokeLinecap="round" />
          <rect x="14.5" y="7" width="3" height="8" rx=".8" fill="#d3f36b" stroke="#63766a" strokeWidth="1.1" />
        </svg>
      )
    case 'WCAG 2.1 AA':
      return (
        <svg {...iconProps}>
          <circle cx="10" cy="4" r="1.6" fill="#647b50" />
          <path d="M4 7.5h12M10 7.5v3.2m0 0-3.5 5.8m3.5-5.8 3.5 5.8M5.5 7.5l2 4m7-4-2 4" stroke="#647b50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'REST APIs':
      return (
        <svg {...iconProps}>
          <path d="M6.5 4 3.5 10l3 6m7-12 3 6-3 6M11.5 3.5l-3 13" stroke="#557264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'Axios':
      return (
        <svg {...iconProps}>
          <path d="M10 3v10m0-10L6.5 6.5M10 3l3.5 3.5M4 11v4h12v-4" stroke="#5a68c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'Git & GitHub':
      return (
        <svg {...iconProps}>
          <path d="M6 4v11m0-6h8m0 0V5m0 4v6" stroke="#e06c45" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="6" cy="4" r="2" fill="#e06c45" />
          <circle cx="14" cy="5" r="2" fill="#e06c45" />
          <circle cx="14" cy="15" r="2" fill="#e06c45" />
          <circle cx="6" cy="15" r="2" fill="#e06c45" />
        </svg>
      )
    case 'Figma':
      return (
        <svg {...iconProps}>
          <path d="M7 2.5h3v5H7a2.5 2.5 0 1 1 0-5Zm3 0h3a2.5 2.5 0 1 1 0 5h-3v-5Zm-3 5h3v5H7a2.5 2.5 0 1 1 0-5Zm3 0h3a2.5 2.5 0 1 1-3 2.5v-2.5Zm-3 5h3v2.5a2.5 2.5 0 1 1-3-2.5Z" fill="#a259ff" />
          <path d="M7 2.5h3v5H7a2.5 2.5 0 1 1 0-5Z" fill="#f24e1e" />
          <path d="M10 2.5h3a2.5 2.5 0 1 1 0 5h-3v-5Z" fill="#ff7262" />
          <path d="M10 7.5h3a2.5 2.5 0 1 1-3 2.5v-2.5Z" fill="#1abcfe" />
          <path d="M7 12.5h3V15a2.5 2.5 0 1 1-3-2.5Z" fill="#0acf83" />
        </svg>
      )
    case 'Agile':
      return (
        <svg {...iconProps}>
          <path d="M15.5 7A6 6 0 0 0 5 5.5L4 7m0 0V4m0 3h3m-2.5 6A6 6 0 0 0 15 14.5l1-1m0 0v3m0-3h-3" stroke="#88a943" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

function App() {
  return (
    <>
    <div className="ambient-backdrop" aria-hidden="true">
      <span className="ambient-orb ambient-orb--lime" />
      <span className="ambient-orb ambient-orb--mint" />
      <span className="ambient-orb ambient-orb--blue" />
      <span className="ambient-grid" />
    </div>
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nurulain — home">
          <span className="brand-mark">N</span>
          <span>Nurulain<span className="brand-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:nurulitboy123@gmail.com">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SENIOR FRONT-END ENGINEER · NOIDA, INDIA</p>
            <h1>Thoughtful interfaces.<br /><span>Real-world impact.</span></h1>
            <p className="hero-intro">
              I&apos;m Nurulain, a front-end engineer with 9+ years of experience creating accessible,
              high-performing digital products for teams and customers around the world.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">Explore my work <ArrowIcon /></a>
              <a className="text-link" href="/Nurulain-Siddiqui-Resume.docx" download>
                Download resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <div><strong>9<span>+</span></strong><small>years building for the web</small></div>
              <div><strong>30<span>%</span></strong><small>faster delivery with reusable UI</small></div>
              <div><strong>100<span>%</span></strong><small>accessibility audit pass rate</small></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Frontend engineering illustration">
            <div className="art-orbit art-orbit--one" />
            <div className="art-orbit art-orbit--two" />
            <div className="art-sun" />
            <svg className="art-flow" viewBox="0 0 480 400" fill="none" aria-hidden="true">
              <path className="flow-line flow-line--one" d="M56 267h66c28 0 31-74 62-74h46" />
              <path className="flow-line flow-line--two" d="M287 116h54c29 0 28 59 59 59h35" />
              <path className="flow-line flow-line--three" d="M253 278h53c25 0 32-37 57-37h61" />
              <circle className="flow-node flow-node--one" cx="56" cy="267" r="5" />
              <circle className="flow-node flow-node--two" cx="230" cy="193" r="5" />
              <circle className="flow-node flow-node--three" cx="287" cy="116" r="5" />
              <circle className="flow-node flow-node--four" cx="435" cy="175" r="5" />
              <circle className="flow-node flow-node--five" cx="424" cy="241" r="5" />
            </svg>
            <div className="code-card">
              <div className="code-card-top"><span /><span /><span /><small>crafting interfaces</small></div>
              <div className="code-lines" aria-hidden="true">
                <i className="line line--short" /><i className="line line--long" />
                <i className="line line--medium" /><i className="line line--accent" />
                <i className="line line--long" /><i className="line line--short" />
              </div>
              <div className="code-card-foot"><span>React</span><span>TypeScript</span><span>Accessible by design</span></div>
            </div>
            <span className="motion-badge motion-badge--react"><i /> React UI</span>
            <span className="motion-badge motion-badge--accessibility"><i /> WCAG AA</span>
            <span className="motion-badge motion-badge--systems"><i /> Design systems</span>
            <div className="art-note"><span className="note-star">✳</span><span>Make it useful.<br />Make it delightful.</span></div>
            <span className="art-index">01 / 04</span>
          </div>
        </section>

        <section className="client-strip" aria-label="Selected client projects">
          <div className="client-strip-inner">
            <span className="strip-label">TRUSTED WITH COMPLEX UI</span>
            <span className="client-wordmark">FedEx</span>
            <span className="client-wordmark client-wordmark--abbott">Abbott</span>
            <span className="client-wordmark client-wordmark--neighborly">neighborly<span>®</span></span>
            <span className="client-wordmark client-wordmark--pro">ProTradeNet</span>
          </div>
        </section>

        <section className="work-section section-wrap section-pad" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2>Good work, built together.</h2></div>
            <p className="section-aside">A few of the products and teams I&apos;ve been fortunate to work with.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.style}`} key={project.number}>
                <div className="project-card-top"><span>{project.number} / 04</span><span className="project-arrow"><ArrowIcon /></span></div>
                <div className="project-card-content">
                  <p className="project-client">{project.client}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-title">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Engineering meets<br /><span>empathy.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I turn ambitious ideas into polished, dependable experiences—one thoughtful detail at a time.
              </p>
              <p>
                Over the last nine years, I&apos;ve partnered with product, design, QA, and backend teams to ship
                enterprise interfaces for global brands. I care about clean architecture, accessible experiences,
                and the small interactions that make a product feel right.
              </p>
              <p>
                From a reusable component library to a tricky rendering bottleneck, I enjoy making complex things
                feel simple for the people who use them.
              </p>
              <a className="inline-link" href="https://www.linkedin.com/in/nurulain-siddiqui-062341118/" target="_blank" rel="noreferrer">
                More about my journey on LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="skills-wrap section-wrap">
            <div className="skills-heading"><span>MY TOOLKIT</span><span>Practical, considered, always evolving.</span></div>
            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        <SkillIcon skill={skill} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap section-pad" id="experience">
          <div className="section-heading">
            <div><p className="eyebrow">THE JOURNEY SO FAR</p><h2>Experience that adds up.</h2></div>
            <p className="section-aside">From hands-on UI delivery to enterprise-scale engineering.</p>
          </div>
          <div className="experience-list">
            {experience.map((job, index) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
                <div className="experience-main">
                  <div className="experience-head">
                    <div><h3>{job.role}</h3><p>{job.company} <span>·</span> {job.location}</p></div>
                    <span className="experience-period">{job.period}</span>
                  </div>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section">
          <div className="section-wrap education-grid">
            <div><p className="eyebrow">FOUNDATIONS</p><h2>Learning is part<br />of the work.</h2></div>
            <div className="education-content">
              <div className="education-entry">
                <span className="education-icon">01</span>
                <div><h3>B.Tech, Computer Science & Engineering</h3><p>JNTUH University, Hyderabad <span>·</span> 2008—2012</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications-section section-wrap section-pad" id="certifications">
          <div className="section-heading">
            <div><p className="eyebrow">CONTINUOUS LEARNING</p><h2>Certifications.</h2></div>
            <p className="section-aside">A few milestones in my ongoing learning journey.</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <article className="certification-card" key={certification.name}>
                <div className="certification-card-top">
                  <span className="certification-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 3.5h10a2 2 0 0 1 2 2v13l-7-3.5-7 3.5v-13a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="m9 9 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="certification-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top"><p className="eyebrow">HAVE A GOOD CHALLENGE?</p><span>AVAILABLE FOR NEW OPPORTUNITIES</span></div>
          <h2>Let&apos;s make something<br /><span>that matters.</span></h2>
          <div className="contact-bottom">
            <a className="button button--lime" href="mailto:nurulitboy123@gmail.com">Start a conversation <ArrowIcon /></a>
            <div className="contact-details">
              <a href="mailto:nurulitboy123@gmail.com">nurulitboy123@gmail.com</a>
              <a href="tel:+919667507686">+91 96675 07686</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#home"><span className="brand-mark">N</span><span>Nurulain<span className="brand-dot">.</span></span></a>
        <span>Designed with care. Built for the web.</span>
        <a href="https://www.linkedin.com/in/nurulain-siddiqui-062341118/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
        <span>© {new Date().getFullYear()} Nurulain</span>
      </footer>
    </div>
    </>
  )
}

export default App
