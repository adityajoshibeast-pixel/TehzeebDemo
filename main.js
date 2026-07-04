// ============================================================
// Shared site behavior
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  markActiveLink();
  injectChikanDividers();
  initContactForm();
  if (document.getElementById("menu-root")) renderMenu();
  if (document.getElementById("locations-root")) renderLocations();
});

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

function markActiveLink() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.setAttribute("aria-current", "page");
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("form-status");
    status.textContent = "Thank you — this is a demo form, no message was actually sent.";
  });
}

// ------------------------------------------------------------
// Chikankari motif — reusable hand-drawn paisley/leaf line SVG,
// used as section dividers throughout the site.
// ------------------------------------------------------------

function chikanDividerSVG(stroke) {
  const c = stroke || "#B8862E";
  return `<svg viewBox="0 0 400 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${c}" stroke-width="1.2" stroke-linecap="round">
    <line x1="0" y1="12" x2="150" y2="12" stroke-dasharray="1 5"/>
    <path d="M160 12c4-8 12-8 16 0s12 8 16 0"/>
    <circle cx="200" cy="12" r="3"/>
    <path d="M208 12c4-8 12-8 16 0s12 8 16 0"/>
    <line x1="250" y1="12" x2="400" y2="12" stroke-dasharray="1 5"/>
  </svg>`;
}

function chikanCornerSVG(stroke) {
  const c = stroke || "#B8862E";
  return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${c}" stroke-width="1.1">
    <path d="M4 4c14 0 20 6 20 20"/>
    <path d="M4 4c0 14 6 20 20 20"/>
    <circle cx="4" cy="4" r="2.5"/>
    <path d="M14 14c4 4 4 8 0 12" />
  </svg>`;
}

function injectChikanDividers() {
  document.querySelectorAll(".chikan-divider").forEach((el) => {
    el.innerHTML = chikanDividerSVG(el.dataset.stroke);
  });
  document.querySelectorAll(".chikan-corner").forEach((el) => {
    el.innerHTML = chikanCornerSVG(el.dataset.stroke);
  });
}

// ------------------------------------------------------------
// Menu page: rendered from RESTAURANT_DATA
// ------------------------------------------------------------

function renderMenu() {
  const root = document.getElementById("menu-root");
  const nav = document.getElementById("menu-nav");
  const { categories, currency } = RESTAURANT_DATA.menu;

  nav.innerHTML = categories
    .map((c, i) => `<button data-target="cat-${i}" class="${i === 0 ? "active" : ""}">${c.name}</button>`)
    .join("");

  root.innerHTML = categories
    .map(
      (cat, i) => `
    <div class="menu-category" id="cat-${i}">
      <h3>${cat.name}</h3>
      ${cat.note ? `<div class="cat-note">${cat.note}</div>` : ""}
      ${cat.items
        .map(
          (item) => `
        <div class="menu-item">
          <div>
            <div class="menu-item-name">
              <span class="${item.veg ? "veg-dot" : "nonveg-dot"}" aria-hidden="true"></span>
              ${item.name}
              ${item.signature ? '<span class="badge" style="position:static;margin-left:8px;">Signature</span>' : ""}
            </div>
            <div class="menu-item-desc">${item.desc}</div>
          </div>
          <div class="menu-item-price">${currency}${item.price}</div>
        </div>`
        )
        .join("")}
    </div>`
    )
    .join("");

  nav.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      nav.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ------------------------------------------------------------
// Locations page: rendered from RESTAURANT_DATA
// ------------------------------------------------------------

function renderLocations() {
  const root = document.getElementById("locations-root");
  root.innerHTML = RESTAURANT_DATA.locations
    .map(
      (loc) => `
    <div class="location-card">
      <h3>${loc.name} ${loc.flagship ? '<span class="flagship-tag">Flagship</span>' : ""}</h3>
      <dl>
        <dt>Address</dt><dd>${loc.address}</dd>
        <dt>Phone</dt><dd>${loc.phone}</dd>
        <dt>Hours</dt><dd>${loc.hours}</dd>
        <dt>Note</dt><dd>${loc.note}</dd>
      </dl>
    </div>`
    )
    .join("");
}
