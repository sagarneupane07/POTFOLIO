document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return; // Guard clause

    const themeIcon = themeToggleBtn.querySelector('.theme-icon');

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply saved theme state
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '🌙';
    }

    // Toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        if (themeIcon) {
            themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});