// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  modeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
