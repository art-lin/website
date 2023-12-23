function setTheme(theme) {
    if (theme === 'light') {
        // Apply light theme styles
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } 
    
    else if (theme === 'dark') {
        // Apply dark theme styles
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }

    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    // Retrieve the current theme from localStorage, defaulting to 'dark'
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Toggle between light and dark themes
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the button icon based on the current theme
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.innerHTML = currentTheme === 'light' ? '☽' : '☀';

    setTheme(currentTheme);
}

document.addEventListener('DOMContentLoaded', function () {

    // Check for a temporary theme preference in local storage
    const storedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('themeBtn');
    
    // If a temporary theme preference is found, use it
    if (storedTheme) {
        setTheme(storedTheme);
        themeBtn.innerHTML = storedTheme === 'light' ? '☽' : '☀';
    }

    // Otherwise, set a default theme and store it
    else {
        setTheme('dark');
    }
});