document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return; // Guard clause

    const themeIcon = themeToggleBtn.querySelector('.theme-icon');

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Helper to sync icon display consistently
    const setIcon = (theme) => {
        if (!themeIcon) return;
        themeIcon.innerHTML = theme === 'light' 
        ? '<i class="bi bi-brightness-low"></i>'
        : '<i class="bi bi-cloud-moon"></i>';
    };

    // Apply saved theme state on load
    const initialTheme = (savedTheme === 'light' || (!savedTheme && !prefersDark)) ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', initialTheme);
    setIcon(initialTheme);

    // Toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIcon(newTheme);
    });
});