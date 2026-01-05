/* ================= PROJECT RENDERING ================= */
const projectsGrid = document.getElementById("projects-grid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

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

/* ================= DARK MODE ================= */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
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

