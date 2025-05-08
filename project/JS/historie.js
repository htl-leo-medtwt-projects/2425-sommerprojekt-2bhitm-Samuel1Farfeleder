let themeToggle = document.getElementById('themeToggle');


function applyTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    themeToggle.checked = true;
  } else {
    document.body.classList.remove('dark');
    themeToggle.checked = false;
  }
  localStorage.setItem('theme', mode);
}

themeToggle.addEventListener('change', () => {
  const mode = themeToggle.checked ? 'dark' : 'light';
  applyTheme(mode);
});


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});

