/* ================= PROJECTS ================= */
const projectsGrid = document.getElementById("projects-grid");

function renderProjects(filter = "all") {
  projectsGrid.innerHTML = ""; // clear

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card", "fade-in");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a href="${project.live}" target="_blank" class="btn primary">Live</a>
          <a href="${project.github}" target="_blank" class="btn secondary">GitHub</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

renderProjects();

/* ================= FILTER BUTTONS ================= */
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ================= DARK MODE ================= */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

/* ================= HAMBURGER MENU ================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

/* ================= SCROLL ANIMATIONS ================= */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.classList.add("appear");
    appearOnScroll.unobserve(entry);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
