const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Apply the theme on load
document.documentElement.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    updateIcon(currentTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    } else {
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
    }
}
