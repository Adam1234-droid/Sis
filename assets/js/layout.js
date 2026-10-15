const LOGO = `
<a class="logo" href="index.html" aria-label="Oaktree Business Support Partners">
  <svg class="logo-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect width="48" height="48" rx="8" fill="#111"/>
    <path d="M14 26c0-8 6.5-14 10-16 3.5 2 10 8 10 16 0 6-4 10-10 12-6-2-10-6-10-12z" fill="#3BD55A"/>
    <path d="M24 18v18" stroke="#111" stroke-width="2.4"/>
    <path d="M18 28c2-3 4-4 6-4s4 1 6 4" stroke="#111" stroke-width="2" fill="none"/>
  </svg>
  <div class="logo-text">OAKTREE<span>B | S | P</span></div>
</a>`;

function headerHTML() {
  return `
  <div class="trust-bar">Pearson-approved SIA training · SIA-approved centre · Excellent <span class="trust-stars">★★★★★</span> reviews across the UK</div>
  <header class="site-header">
    <div class="header-inner">
      ${LOGO}
      <nav class="nav-desktop" aria-label="Primary">
        <div class="nav-item">
          <a class="nav-link" href="courses.html">Courses ▾</a>
          <div class="mega">
            <div>
              <h4>Popular courses</h4>
              <a href="course-door-supervisor.html">SIA Door Supervisor Training</a>
              <a href="course-security-guard.html">SIA Security Guard Training</a>
              <a href="course-cctv.html">SIA CCTV Operator Training</a>
              <a href="course-close-protection.html">SIA Close Protection Training</a>
              <a href="course-topup.html">SIA Top-Up Refresher Training</a>
              <a href="course-first-aid.html">Emergency First Aid at Work</a>
              <a href="course-train-the-trainer.html">SIA Train the Trainer</a>
            </div>
            <div>
              <h4>Also from Oaktree</h4>
              <a href="business.html">Free business bank account</a>
              <a href="business.html">Free Companies House formation</a>
              <a href="employers.html">Employers & recruitment</a>
              <a href="courses.html">View all courses →</a>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="licences.html">Licences ▾</a>
          <div class="mega">
            <div>
              <h4>Popular licences</h4>
              <a href="licence-door-supervisor.html">SIA Door Supervisor Licence</a>
              <a href="licence-security-guard.html">SIA Security Guard Licence</a>
              <a href="licence-cctv.html">SIA CCTV Licence</a>
              <a href="licence-close-protection.html">SIA Close Protection Licence</a>
              <a href="what-is-sia.html">How to get an SIA licence</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="what-is-sia.html">What is the SIA?</a>
              <a href="course-topup.html">Licence renewal / top-up</a>
              <a href="contact.html">Help with your application</a>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="locations.html">Locations ▾</a>
          <div class="mega">
            <div>
              <h4>Training centres</h4>
              <a href="location-rochdale.html">Rochdale (Head Office)</a>
              <a href="locations.html">Manchester & North West</a>
              <a href="locations.html">Yorkshire</a>
              <a href="locations.html">Midlands</a>
              <a href="locations.html">London & the South</a>
              <a href="locations.html">North East</a>
            </div>
            <div>
              <h4>Nationwide</h4>
              <p class="muted">88+ UK centres. If you cannot come to us, we can bring training to you.</p>
              <a href="book.html">Find a course near me →</a>
            </div>
          </div>
        </div>
        <div class="nav-item"><a class="nav-link" href="careers.html">Careers</a></div>
        <div class="nav-item"><a class="nav-link" href="about.html">About</a></div>
      </nav>
      <div class="header-actions">
        <a class="icon-btn green" href="book.html" title="Quick booking" aria-label="Quick booking">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2"/></svg>
        </a>
        <button class="icon-btn menu-toggle" type="button" aria-label="Open menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" stroke-width="2"/></svg>
        </button>
      </div>
    </div>
  </header>
  <div class="drawer" id="drawer">
    <div class="drawer-panel">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
        ${LOGO}
        <button class="icon-btn" type="button" id="drawer-close" aria-label="Close menu" style="background:#111">✕</button>
      </div>
      <a href="courses.html">Courses</a>
      <a href="licences.html">Licences</a>
      <a href="locations.html">Locations</a>
      <a href="careers.html">Careers</a>
      <a href="about.html">About us</a>
      <a href="business.html">Business support</a>
      <a href="employers.html">Employers</a>
      <a href="contact.html">Contact</a>
      <a href="book.html">Book a course</a>
      <p class="muted" style="margin-top:16px">Call 0330 175 9933<br>Mon–Fri 11:00–18:30</p>
    </div>
  </div>`;
}

function footerHTML() {
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        ${LOGO}
        <p style="margin:14px 0">Oaktree Business Support Partners helps you get SIA trained, licensed, and ready for real security jobs — plus free business support to start trading.</p>
        <p>Head Office: The Court House, Town Meadows, Rochdale OL16 1AG — next door to the police station.</p>
      </div>
      <div>
        <h5>Company</h5>
        <a href="about.html">About us</a>
        <a href="contact.html">Contact</a>
        <a href="employers.html">Employers</a>
        <a href="careers.html">Careers in security</a>
        <a href="help.html">Help centre</a>
      </div>
      <div>
        <h5>Training</h5>
        <a href="course-door-supervisor.html">Door Supervisor</a>
        <a href="course-cctv.html">CCTV Operator</a>
        <a href="course-close-protection.html">Close Protection</a>
        <a href="course-topup.html">Top-Up Refresher</a>
        <a href="locations.html">Training locations</a>
      </div>
      <div>
        <h5>Support</h5>
        <a href="what-is-sia.html">What is SIA?</a>
        <a href="business.html">Free business account</a>
        <a href="privacy.html">Privacy policy</a>
        <a href="terms.html">Terms & conditions</a>
        <a href="tel:03301759933">Call 0330 175 9933</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 Oaktree Business Support Partners. Company no. 13886230 · VAT 404658303</span>
      <a href="tel:03301759933">Call us 0330 175 9933</a>
    </div>
  </footer>
  <nav class="mobile-dock" aria-label="Quick links">
    <a href="book.html"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#3BD55A" stroke-width="2"/><path d="M20 20l-3-3" stroke="#3BD55A" stroke-width="2"/></svg>Find Course</a>
    <a href="careers.html"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="13" rx="2" stroke="#fff" stroke-width="2"/><path d="M8 7V5h8v2" stroke="#fff" stroke-width="2"/></svg>Find Work</a>
    <a href="what-is-sia.html"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="#fff" stroke-width="2"/></svg>Results</a>
    <a href="contact.html"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="#fff" stroke-width="2"/><path d="M4 7l8 6 8-6" stroke="#fff" stroke-width="2"/></svg>Chat</a>
  </nav>
  <a class="chat-fab" href="contact.html" aria-label="Contact support">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 6h14v9H8l-3 3V6z" stroke="#111" stroke-width="2"/></svg>
  </a>
  <div class="cookie" id="cookie">
    <strong>Cookies</strong>
    <p class="muted" style="margin:8px 0 12px">We use cookies to enhance your experience on our website. By continuing, you consent to the use of cookies. See our <a href="privacy.html">Cookie Policy</a>.</p>
    <button class="btn btn-green" type="button" id="cookieBtn">I Acknowledge</button>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header-root");
  const f = document.getElementById("site-footer-root");
  if (h) h.innerHTML = headerHTML();
  if (f) f.innerHTML = footerHTML();

  const drawer = document.getElementById("drawer");
  const closeDrawer = () => drawer?.classList.remove("open");
  document.querySelector(".menu-toggle")?.addEventListener("click", () => drawer?.classList.add("open"));
  document.getElementById("drawer-close")?.addEventListener("click", closeDrawer);
  drawer?.addEventListener("click", (e) => {
    if (e.target.id === "drawer") closeDrawer();
  });

  const cookie = document.getElementById("cookie");
  if (cookie && !localStorage.getItem("oaktree-cookie")) cookie.classList.add("show");
  document.getElementById("cookieBtn")?.addEventListener("click", () => {
    localStorage.setItem("oaktree-cookie", "1");
    cookie.classList.remove("show");
  });

  document.querySelectorAll("[data-track]").forEach((track) => {
    const id = track.getAttribute("data-track");
    document.querySelector(`[data-prev="${id}"]`)?.addEventListener("click", () => {
      track.scrollBy({ left: -320, behavior: "smooth" });
    });
    document.querySelector(`[data-next="${id}"]`)?.addEventListener("click", () => {
      track.scrollBy({ left: 320, behavior: "smooth" });
    });
  });

  const form = document.getElementById("lead-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = document.getElementById("form-success");
    if (ok) {
      ok.style.display = "block";
      form.reset();
    }
  });
});
